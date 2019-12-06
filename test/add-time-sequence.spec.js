import test from 'ava';
import sinon from 'sinon';
import { addTimeSequence } from '../src';

test.beforeEach(t => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', t => {
  t.throws(() => addTimeSequence([['y', 1]])('1988-04-11T00:00:00.000Z'), TypeError, '');
});

test('errors out if invalid increment passed in', t => {
  t.throws(() => addTimeSequence([['invalid', 1]])(t.context.date), TypeError);
});

test('uses the current time by default', t => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(
    addTimeSequence([
      ['y', 1],
      ['s', 100],
    ])().toISOString(),
    '1986-05-22T00:01:40.000Z',
  );
  clock.restore();
});

test('runs a set of add operations', t => {
  t.is(
    addTimeSequence([
      ['m', 11],
      ['d', 5],
      ['h', -6],
    ])(t.context.date).toISOString(),
    '1989-03-15T18:00:00.000Z',
  );
});

test('can be quasi-nested', t => {
  const addTimeSequenceFn = addTimeSequence([['m', 11]])(
    addTimeSequence([
      ['d', 5],
      ['h', -6],
    ]),
  );
  t.is(addTimeSequenceFn(t.context.date).toISOString(), '1989-03-15T18:00:00.000Z');
});

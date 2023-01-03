import test from 'ava';
import sinon from 'sinon';
import { addFor } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => addFor({ y: 1 })('beep'), { instanceOf: TypeError });
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => addFor({ invalid: 1 })(t.context.date), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(
    addFor({
      y: 1,
      s: 100,
    })().toISOString(),
    '1986-05-22T00:01:40.000Z',
  );
  clock.restore();
});

test('runs a set of add operations', (t) => {
  t.is(
    addFor({
      m: 11,
      d: 5,
      h: -6,
    })(t.context.date).toISOString(),
    '1989-03-15T18:00:00.000Z',
  );
});

test('can be quasi-nested', (t) => {
  const addForFn = addFor({ m: 11 })(
    addFor({
      d: 5,
      h: -6,
    }),
  );
  t.is(addForFn(t.context.date).toISOString(), '1989-03-15T18:00:00.000Z');
});

test('can accept a Map', (t) => {
  const map = new Map();
  map.set('m', 11);
  map.set('d', 5);
  map.set('h', -6);

  t.is(addFor(map)(t.context.date).toISOString(), '1989-03-15T18:00:00.000Z');
});

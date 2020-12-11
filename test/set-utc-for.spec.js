import test from 'ava';
import sinon from 'sinon';
import { setUTCFor } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => setUTCFor({ y: 1989 })('1988-04-11T00:00:00.000Z'), TypeError);
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => setUTCFor({ invalid: 1989 })(t.context.date), TypeError);
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(setUTCFor({ y: 1989 })().toISOString(), '1989-05-22T00:00:00.000Z');
  clock.restore();
});

test('applies multiple set operations', (t) => {
  t.is(
    setUTCFor({ y: 1985, m: 5, d: 22 })(t.context.date).toISOString(),
    '1985-05-22T00:00:00.000Z',
  );
});

test('can be quasi-chained', (t) => {
  const setUTCForFn = setUTCFor({ y: 1985 })(setUTCFor({ m: 5, d: 22 }));
  t.is(setUTCForFn(t.context.date).toISOString(), '1985-05-22T00:00:00.000Z');
});

test('can accept a Map', (t) => {
  const map = new Map();
  map.set('y', 1985);
  map.set('m', 5);
  map.set('d', 22);

  t.is(setUTCFor(map)(t.context.date).toISOString(), '1985-05-22T00:00:00.000Z');
});

import test from 'ava';
import sinon from 'sinon';
import { getUTCFor } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => getUTCFor(['y'])('1988-04-11T00:00:00.000Z'), { instanceOf: TypeError });
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => getUTCFor(['invalid'])(t.context.date), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.deepEqual(getUTCFor({ y: true, m: true, d: true, h: true })(), { y: 1985, m: 5, d: 22, h: 0 });
  clock.restore();
});

test('returns an obhect corresponding to the passed in increments', (t) => {
  t.deepEqual(getUTCFor({ y: true, m: true, d: true, h: false })(t.context.date), {
    y: 1988,
    m: 4,
    d: 11,
  });
});

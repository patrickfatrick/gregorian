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
  t.deepEqual(getUTCFor(['y', 'm', 'd', 'h'])(), [1985, 5, 22, 0]);
  clock.restore();
});

test('returns an array corresponding to the passed in increments', (t) => {
  t.deepEqual(getUTCFor(['y', 'm', 'd', 'h'])(t.context.date), [1988, 4, 11, 0]);
});

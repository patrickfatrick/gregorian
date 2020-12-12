import test from 'ava';
import sinon from 'sinon';
import { getFor } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => getFor(['y'])('1988-04-11T00:00:00.000Z'), { instanceOf: TypeError });
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => getFor(['invalid'])(t.context.date), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.deepEqual(getFor(['y', 'm', 'd', 'h'])(), [1985, 5, 21, 17]);
  clock.restore();
});

test('returns an array corresponding to the passed in increments', (t) => {
  t.deepEqual(getFor(['y', 'm', 'd', 'h'])(t.context.date), [1988, 4, 10, 17]);
});

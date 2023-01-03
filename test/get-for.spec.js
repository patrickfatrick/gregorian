import test from 'ava';
import sinon from 'sinon';
import { getFor } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => getFor(['y'])('beep'), { instanceOf: TypeError });
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => getFor(['invalid'])(t.context.date), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.deepEqual(getFor({ y: true, m: true, d: true, h: true })(), { y: 1985, m: 5, d: 21, h: 17 });
  clock.restore();
});

test('returns an object corresponding to the passed in increments', (t) => {
  t.deepEqual(getFor({ y: true, m: true, d: true, h: false })(t.context.date), {
    y: 1988,
    m: 4,
    d: 10,
  });
});

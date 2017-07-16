import test from 'ava';
import sinon from 'sinon';
import { getUTCGroup } from '../src';

test.beforeEach(t => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', t => {
  t.throws(() => getUTCGroup(['y'])('1988-04-11T00:00:00.000Z'), TypeError);
});

test('errors out if invalid increment passed in', t => {
  t.throws(() => getUTCGroup(['invalid'])(t.context.date), TypeError);
});

test('uses the current time by default', t => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.deepEqual(getUTCGroup(['y', 'm', 'd', 'h'])(), [1985, 5, 22, 0]);
  clock.restore();
});

test('returns an array corresponding to the passed in increments', t => {
  t.deepEqual(getUTCGroup(['y', 'm', 'd', 'h'])(t.context.date), [1988, 4, 11, 0]);
});

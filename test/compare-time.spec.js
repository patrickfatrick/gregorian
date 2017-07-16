import test from 'ava';
import sinon from 'sinon';
import { compareTime } from '../src';

test.beforeEach(t => {
  t.context.date1 = new Date('1988-04-11T00:00:00.000Z');
  t.context.date2 = new Date('1989-04-11T00:00:00.000Z');
});

test('errors out if invalid date1 passed in', t => {
  t.throws(() => compareTime('1988-04-11T00:00:00.000Z')(new Date()), TypeError);
});

test('errors out if invalid date2 passed in', t => {
  t.throws(() => compareTime(new Date())('1988-04-11T00:00:00.000Z'), TypeError);
});

test('uses the current time by default (date1)', t => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(compareTime()(new Date('1985-05-23T00:00:00.000Z')), 1);
  clock.restore();
});

test('uses the current time by default (date2)', t => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(compareTime(new Date('1985-05-23T00:00:00.000Z'))(), -1);
  clock.restore();
});

test('returns 1 if second date is greater', t => {
  t.is(compareTime(t.context.date1)(t.context.date2), 1);
});

test('returns -1 if first date is greater', t => {
  t.is(compareTime(t.context.date2)(t.context.date1), -1);
});

test('returns 0 if they are the same date', t => {
  t.is(compareTime(t.context.date1)(t.context.date1), 0);
});

test('can be run with all arguments at once', t => {
  t.is(compareTime(t.context.date1, t.context.date2), 1);
});

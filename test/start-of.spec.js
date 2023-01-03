import test from 'ava';
import sinon from 'sinon';
import { startOf } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T08:23:15.347Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => startOf('y')('beep'), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(startOf('y')().toISOString(), '1985-01-01T07:00:00.000Z');
  clock.restore();
});

test('sets the date/time to the start of the year', (t) => {
  t.is(startOf('y')(t.context.date).toISOString(), '1988-01-01T07:00:00.000Z');
});

test('sets the date/time to the start of the month', (t) => {
  t.is(startOf('m')(t.context.date).toISOString(), '1988-04-01T07:00:00.000Z');
});

test('sets the date/time to the start of the week', (t) => {
  t.is(startOf('w')(t.context.date).toISOString(), '1988-04-10T07:00:00.000Z');
});

test('sets the date/time to the start of the day', (t) => {
  t.is(startOf('d')(t.context.date).toISOString(), '1988-04-11T07:00:00.000Z');
});

test('sets the date/time to the start of the hour', (t) => {
  t.is(startOf('h')(t.context.date).toISOString(), '1988-04-11T08:00:00.000Z');
});

test('sets the date/time to the start of the minute', (t) => {
  t.is(startOf('t')(t.context.date).toISOString(), '1988-04-11T08:23:00.000Z');
});

test('sets the date/time to the start of the second', (t) => {
  t.is(startOf('s')(t.context.date).toISOString(), '1988-04-11T08:23:15.000Z');
});

test('can be composed', (t) => {
  const startOfYearFn = startOf('y');
  t.is(startOfYearFn(t.context.date).toISOString(), '1988-01-01T07:00:00.000Z');
});

test('can be quasi-chained', (t) => {
  const startOfFn = startOf('y')(startOf('h'));
  t.is(startOfFn(t.context.date).toISOString(), '1988-01-01T07:00:00.000Z');
});

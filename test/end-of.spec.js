import test from 'ava';
import sinon from 'sinon';
import { endOf } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T08:23:15.347Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => endOf('y')('1988-04-11T00:00:00.000Z'), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(endOf('y')().toISOString(), '1986-01-01T06:59:59.999Z');
  clock.restore();
});

test('sets the date/time to the end of the year', (t) => {
  t.is(endOf('y')(t.context.date).toISOString(), '1989-01-01T06:59:59.999Z');
});

test('sets the date/time to the end of the month', (t) => {
  t.is(endOf('m')(t.context.date).toISOString(), '1988-05-01T06:59:59.999Z');
});

test('sets the date/time to the end of the month (31 days)', (t) => {
  t.is(endOf('m')(new Date('1988-05-11T08:23:15.347Z')).toISOString(), '1988-06-01T06:59:59.999Z');
});

test('sets the date/time to the end of the month (February)', (t) => {
  t.is(endOf('m')(new Date('1987-02-11T08:23:15.347Z')).toISOString(), '1987-03-01T06:59:59.999Z');
});

test('sets the date/time to the end of the month (Leap Month)', (t) => {
  t.is(endOf('m')(new Date('1988-02-11T08:23:15.347Z')).toISOString(), '1988-03-01T06:59:59.999Z');
});

test('sets the date/time to the end of the week', (t) => {
  t.is(endOf('w')(t.context.date).toISOString(), '1988-04-18T06:59:59.999Z');
});

test('sets the date/time to the end of the day', (t) => {
  t.is(endOf('d')(t.context.date).toISOString(), '1988-04-12T06:59:59.999Z');
});

test('sets the date/time to the end of the hour', (t) => {
  t.is(endOf('h')(t.context.date).toISOString(), '1988-04-11T08:59:59.999Z');
});

test('sets the date/time to the end of the minute', (t) => {
  t.is(endOf('t')(t.context.date).toISOString(), '1988-04-11T08:23:59.999Z');
});

test('sets the date/time to the end of the second', (t) => {
  t.is(endOf('s')(t.context.date).toISOString(), '1988-04-11T08:23:15.999Z');
});

test('can be composed', (t) => {
  const endOfYearFn = endOf('y');
  t.is(endOfYearFn(t.context.date).toISOString(), '1989-01-01T06:59:59.999Z');
});

test('can be quasi-chained', (t) => {
  const endOfFn = endOf('y')(endOf('h'));
  t.is(endOfFn(t.context.date).toISOString(), '1989-01-01T06:59:59.999Z');
});

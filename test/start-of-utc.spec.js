import test from 'ava';
import sinon from 'sinon';
import { startOfUTC } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T08:23:15.347Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => startOfUTC('y')('beep'), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(startOfUTC('y')().toISOString(), '1985-01-01T00:00:00.000Z');
  clock.restore();
});

test('sets the date/time to the start of the year', (t) => {
  t.is(startOfUTC('y')(t.context.date).toISOString(), '1988-01-01T00:00:00.000Z');
});

test('sets the date/time to the start of the month', (t) => {
  t.is(startOfUTC('m')(t.context.date).toISOString(), '1988-04-01T00:00:00.000Z');
});

test('sets the date/time to the start of the week', (t) => {
  t.is(startOfUTC('w')(t.context.date).toISOString(), '1988-04-10T00:00:00.000Z');
});

test('sets the date/time to the start of the day', (t) => {
  t.is(startOfUTC('d')(t.context.date).toISOString(), '1988-04-11T00:00:00.000Z');
});

test('sets the date/time to the start of the hour', (t) => {
  t.is(startOfUTC('h')(t.context.date).toISOString(), '1988-04-11T08:00:00.000Z');
});

test('sets the date/time to the start of the minute', (t) => {
  t.is(startOfUTC('t')(t.context.date).toISOString(), '1988-04-11T08:23:00.000Z');
});

test('sets the date/time to the start of the second', (t) => {
  t.is(startOfUTC('s')(t.context.date).toISOString(), '1988-04-11T08:23:15.000Z');
});

test('can be composed', (t) => {
  const startOfUTCYearFn = startOfUTC('y');
  t.is(startOfUTCYearFn(t.context.date).toISOString(), '1988-01-01T00:00:00.000Z');
});

test('can be quasi-chained', (t) => {
  const startOfUTCFn = startOfUTC('y')(startOfUTC('h'));
  t.is(startOfUTCFn(t.context.date).toISOString(), '1988-01-01T00:00:00.000Z');
});

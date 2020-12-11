import test from 'ava';
import sinon from 'sinon';
import { diff } from '../src';

test.beforeEach((t) => {
  t.context.date1 = new Date('1988-04-11T00:00:00.000Z');
  t.context.date2 = new Date('1989-04-11T00:00:00.000Z');
});

test('errors out if invalid date1 passed in', (t) => {
  t.throws(() => diff('y')('1988-04-11T00:00:00.000Z')(new Date()), TypeError);
});

test('errors out if invalid date2 passed in', (t) => {
  t.throws(() => diff('y')(new Date())('1988-04-11T00:00:00.000Z'), TypeError);
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => diff('invalid')(new Date('2017-01-01'))(t.context.date1), TypeError);
});

test('uses the current time by default (date1)', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(diff('d')()(new Date('1985-05-23T00:00:00.000Z')), 1);
  clock.restore();
});

test('uses the current time by default (date2)', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(diff('d')(new Date('1985-05-23T00:00:00.000Z'))(), -1);
  clock.restore();
});

test('returns numeric difference in years between two dates', (t) => {
  t.is(Math.round(diff('y')(t.context.date1)(t.context.date2)), 1);
});

test('returns numeric difference in months between two dates', (t) => {
  t.is(Math.round(diff('m')(t.context.date1)(t.context.date2)), 12);
});

test('returns numeric difference in weeks between two dates', (t) => {
  t.is(Math.round(diff('w')(t.context.date1)(t.context.date2)), 52);
});

test('returns numeric difference in days between two dates', (t) => {
  t.is(diff('d')(t.context.date1)(t.context.date2), 365);
});

test('returns numeric difference in hours between two dates', (t) => {
  t.is(diff('h')(t.context.date1)(t.context.date2), 8760);
});

test('returns numeric difference in minutes between two dates', (t) => {
  t.is(diff('t')(t.context.date1)(t.context.date2), 525600);
});

test('returns numeric difference in seconds between two dates', (t) => {
  t.is(diff('s')(t.context.date1)(t.context.date2), 31536000);
});

test('returns numeric difference in milliseconds between two dates', (t) => {
  t.is(diff('l')(t.context.date1)(t.context.date2), 31536000000);
});

test('can be run with all arguments at once', (t) => {
  t.is(Math.round(diff('y', t.context.date1, t.context.date2)), 1);
});

test('can be run with varying arguments', (t) => {
  t.is(Math.round(diff('y', t.context.date1)(t.context.date2)), 1);
});

test('accounts for leap days', (t) => {
  t.is(diff('d')(new Date('1988-02-01T00:00:00.000Z'))(new Date('1988-03-01T00:00:00.000Z')), 29);
});

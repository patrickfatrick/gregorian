import test from 'ava';
import { isLeapYearUTC } from '../src';

test('returns true when year is divisible by 4 and not 100', (t) => {
  t.true(isLeapYearUTC(new Date('1988-04-11T00:00:00.000Z')));
});

test('returns false if if year is not divisible by 4', (t) => {
  t.false(isLeapYearUTC(new Date('1987-04-11T00:00:00.000Z')));
});

test('returns false if year is divisible is divisible by 4 and 100 but not 400', (t) => {
  t.false(isLeapYearUTC(new Date('2100-04-11T00:00:00.000Z')));
});

test('returns true if year is divisible by 4 and 100 and 400', (t) => {
  t.true(isLeapYearUTC(new Date('2000-01-01T00:00:00.000Z')));
});

test('not UTC', (t) => {
  t.false(isLeapYearUTC(new Date(2000, 11, 31, 23, 59, 59, 999)));
});

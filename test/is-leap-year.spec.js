import test from 'ava';
import { isLeapYear } from '../src';

test('returns true when year is divisible by 4 and not 100', (t) => {
  t.true(isLeapYear(new Date('1988-04-11T00:00:00.000Z')));
});

test('returns false if if year is not divisible by 4', (t) => {
  t.false(isLeapYear(new Date('1987-04-11T00:00:00.000Z')));
});

test('returns false if year is divisible is divisible by 4 and 100 but not 400', (t) => {
  t.false(isLeapYear(new Date('2100-04-11T00:00:00.000Z')));
});

test('returns true if year is divisible by 4 and 100 and 400', (t) => {
  t.true(isLeapYear(new Date('2000-04-11T00:00:00.000Z')));
});

test('UTC', (t) => {
  t.false(isLeapYear(new Date('2000-01-01T00:00:00.000Z')));
});

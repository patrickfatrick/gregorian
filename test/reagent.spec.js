import test from 'ava'
import gregorian from '../src/gregorian'

test('validates dd/mm/yyyy dates', (t) => {
  t.true(gregorian.reform('04/11/1988 00:00 UTC').reagent())
})

test('validates date objects', (t) => {
  t.true(gregorian.reform(new Date('04/11/1988 00:00 UTC')).reagent())
})

test('validates UTC dates', (t) => {
  t.true(gregorian.reform('September 25, 2015 00:00 UTC').reagent())
})

test('validates unix timestamps', (t) => {
  t.true(gregorian.reform(1443139200000).reagent())
})

test('validates the current date/time by default', (t) => {
  t.true(gregorian.reform().reagent())
})

test('does not validate colloquialisms', (t) => {
  t.false(gregorian.reform('a year ago').reagent())
  t.false(gregorian.reform('next Tuesday').reagent())
})

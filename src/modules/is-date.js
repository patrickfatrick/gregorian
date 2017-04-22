export default function isDate (date) {
  return date instanceof Date && !Number.isNaN(Date.parse(date))
}

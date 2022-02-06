'use strict'

const dateToTest = '11-20-2021'

const test1 = getDateDifferenceByDays(dateToTest, 5)
console.log(`${dateToTest} + 5 days = ${test1.getMonth() + 1}-${test1.getDate()}-${test1.getFullYear()}`)

const test2 = getDateDifferenceByDays(dateToTest, -3)
console.log(`${dateToTest} - 3 days = ${test2.getMonth() + 1}-${test2.getDate()}-${test2.getFullYear()}`)

/**
 * 
 * @param {*} date string in format MM-DD-YYYY
 * @param {*} days positive or negative number
 * @returns object of Date, calculated as sum or difference by days
 */
function getDateDifferenceByDays(date, days) {
  const parsedDate = new Date(date)
  const daysInMs = days * 24 * 60 * 60 * 1000
  const differenceInMs = parsedDate.getTime() + daysInMs

  return new Date(differenceInMs)
}

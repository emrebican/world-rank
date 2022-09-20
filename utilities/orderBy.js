import { getGini } from './getGini'

export const orderBy = (countries, value, direction) => {
  if (value === 'name') {
    if (direction === 'asc') {
      return [...countries].sort((a, b) =>
        a[value].common > b[value].common ? 1 : -1
      )
    }
    if (direction === 'desc') {
      return [...countries].sort((a, b) =>
        a[value].common > b[value].common ? -1 : 1
      )
    }
  } else if (value === 'gini') {
    if (direction === 'asc') {
      return [...countries].sort((a, b) => (getGini(a) > getGini(b) ? 1 : -1))
    }
    if (direction === 'desc') {
      return [...countries].sort((a, b) => (getGini(a) > getGini(b) ? -1 : 1))
    }
  } else {
    if (direction === 'asc') {
      return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1))
    }
    if (direction === 'desc') {
      return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1))
    }
  }
  return countries
}

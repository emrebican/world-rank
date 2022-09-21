import { ASC, DESC, NAME, GINI } from './constants'
import { getGini } from './getValue'

export const orderBy = (countries, value, direction) => {
  if (value === NAME) {
    if (direction === ASC) {
      return [...countries].sort((a, b) =>
        a[value].common > b[value].common ? 1 : -1
      )
    }
    if (direction === DESC) {
      return [...countries].sort((a, b) =>
        a[value].common > b[value].common ? -1 : 1
      )
    }
  } else if (value === GINI) {
    if (direction === ASC) {
      return [...countries].sort((a, b) => (getGini(a) > getGini(b) ? 1 : -1))
    }
    if (direction === DESC) {
      return [...countries].sort((a, b) => (getGini(a) > getGini(b) ? -1 : 1))
    }
  } else {
    if (direction === ASC) {
      return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1))
    }
    if (direction === DESC) {
      return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1))
    }
  }
  return countries
}

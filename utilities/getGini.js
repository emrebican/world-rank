export const getGini = (country) => {
  let obj
  let newGini
  if (country.gini) {
    obj = country.gini
    newGini = obj[Object.keys(obj)[0]]
  } else {
    newGini = 0
  }
  return newGini
}

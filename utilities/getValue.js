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

export const getCurr = (country) => {
  let obj
  let newCurr
  if (country.currencies) {
    obj = country.currencies
    newCurr = obj[Object.keys(obj)[0]]
  } else {
    newCurr = 0
  }
  return newCurr
}

export const getNative = (name) => {
  let newName
  if (name) {
    newName = name[Object.keys(name)[0]]
  } else {
    newName = 0
  }
  return newName
}

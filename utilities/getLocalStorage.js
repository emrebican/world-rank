let getLocalTheme

if (typeof window !== 'undefined') {
  // Perform localStorage action
  let item = JSON.parse(localStorage.getItem('world_theme'))
  if (item) {
    getLocalTheme = item
  } else {
    getLocalTheme = null
  }
}

export { getLocalTheme }

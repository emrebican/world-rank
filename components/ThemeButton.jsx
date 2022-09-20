import styles from '../styles/Layout.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { toggleTheme } from '../features/worldSlice'
import { LIGHT, DARK } from '../utilities/constants'
import { getLocalTheme } from '../utilities/getLocalStorage'

import { MdBrightness6 } from 'react-icons/md'

const ThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.world.theme)

  const handleTheme = () => {
    if (theme === LIGHT) {
      dispatch(toggleTheme(DARK))
      document.documentElement.setAttribute('data-theme', DARK)
      localStorage.setItem('world_theme', JSON.stringify(DARK))
    } else {
      dispatch(toggleTheme(LIGHT))
      document.documentElement.setAttribute('data-theme', LIGHT)
      localStorage.setItem('world_theme', JSON.stringify(LIGHT))
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', getLocalTheme)
  }, [])

  return (
    <button
      onClick={handleTheme}
      className={theme === LIGHT ? styles.light_theme : styles.dark_theme}
    >
      <MdBrightness6 />
    </button>
  )
}

export default ThemeButton

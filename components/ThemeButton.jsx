import styles from '../styles/Layout.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/worldSlice'
import { MdBrightness6 } from 'react-icons/md'

import { LIGHT, DARK } from '../utilities/constants'

const ThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.world.theme)

  const handleTheme = () => {
    if (theme === LIGHT) {
      dispatch(toggleTheme(DARK))
      document.documentElement.setAttribute('data-theme', DARK)
    } else {
      dispatch(toggleTheme(LIGHT))
      document.documentElement.setAttribute('data-theme', LIGHT)
    }
  }

  console.log(theme)
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

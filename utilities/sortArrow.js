import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

export const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>
  }
  if (direction === 'desc') {
    return <IoIosArrowDown />
  } else {
    return <IoIosArrowUp />
  }
}

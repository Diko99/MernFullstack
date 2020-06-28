import React, {useState, useEffect, useRef} from 'react'
import propTypes from 'prop-types'
import { DataRange } from 'react-date-range'

import './index.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/default.scss'

import formatDate from 'utils/formatDate'
import iconCalender from 'assets/icons/ic_calender.svg'

export default function Date(props) {
  const {value, placeholder, name} = props
  const [isShowed, setIsShowed] = useState(false)
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  
  const refDate = useRef(null)
  const handleClickOutside = event => {
    if(refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false)
    }
  }

  const check = focus => {
    focus.indexOf(1) < 0 && setIsShowed(false)
  }

  const displayDate = `${value.startDate ? FormData(value.startDate) : ''}${
    value.endDate ? ' - ' + formatDate(value.endDate) : ''
  }`

  const datePickerChange = value => {
    const target = {
      target: {
        value: value.selection,
        name: name
      }
    }
    props.onChange(target)
  }

  return (
    <div>
      
    </div>
  )
}

Date.propTypes = ({
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
})
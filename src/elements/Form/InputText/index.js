import React, {useState} from 'react'
import propTypes from 'prop-types'

import './index.scss'

export default function Text(props) {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassname,
    inputClassName,
    errorResponse
  } = props;

  return (
    <div>
      
    </div>
  )
}

Text.defaultProps = {
  types: 'text',
  pattern: '',
  placeholder: 'Please type here...',
  errorResponse: 'Please match the requested format.'
}

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassname: propTypes.string,
  inputClassName: propTypes.string,
}
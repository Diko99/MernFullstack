import React from 'react'

import propTypes from 'prop-types'
import Button from 'elements/Button'

import './index.scss'

export default function Breadcrumb(props) {
  // const className = [props.className];
  return (
    <nav aria-label='breadcrumb'>
      <ol className='d-flex'>
        {props.data.map((item, index) => (
          <li
            key={`breadcrumb-${index}`}
            className={`breadcrumb-item${
              index === props.data.length - 1 ? ' active': ''
            }`}
          >
            {index === props.data.length - 1 ? (
              item.pageTitle
              ) :  (
                <Button type='link' href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )
            }
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = ({
  data: propTypes.array,
  className: propTypes.string,
})
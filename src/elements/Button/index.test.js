import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

test('should not allowed click button if disabled is present', () => {
  const { container } = render(<Button isDisabled></Button>)
  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should render isLoading/spinner', () => {
  const { container, getByText } = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
  const { container, getByText } = render(<Button href=''></Button>)

  expect(getByText('a')).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})

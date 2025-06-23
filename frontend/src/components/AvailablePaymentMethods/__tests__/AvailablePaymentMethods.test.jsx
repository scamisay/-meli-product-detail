import { render } from '@testing-library/react'
import AvailablePaymentMethods from '../AvailablePaymentMethods'

test('renders AvailablePaymentMethods without crashing', () => {
  const { container } = render(
    <AvailablePaymentMethods itemPost={{ payment_methods: [] }} />
  )
  expect(container).toBeTruthy()
})

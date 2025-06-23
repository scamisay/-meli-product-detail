import { render, screen } from '@testing-library/react'
import PurchaseOptions from '../PurchaseOptions'

test('renders stock and quantity selector', () => {
  render(
    <PurchaseOptions
      itemPost={{ stock: 4 }}
      seller={{
        name: 'Test Seller',
        reputation_level: 'Gold',
        products_count: 3000,
        tax_invoice: 'Factura A',
      }}
    />
  )
  expect(screen.getByText(/Stock disponible/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Cantidad/i)).toBeInTheDocument()
})

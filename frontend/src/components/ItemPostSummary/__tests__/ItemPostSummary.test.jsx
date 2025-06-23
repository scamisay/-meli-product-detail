import { render } from '@testing-library/react'
import ItemPostSummary from '../ItemPostSummary'

test('renders ItemPostSummary without crashing', () => {
  const itemPost = {
    price: 1000,
    currency: 'ARS',
    condition: 'new',
    stock: 3,
    payment_methods: [],
    delivery_options: [],
    article_id: 'some-article-id',
    seller_id: 'some-seller-id',
  }

  const article = {
    id: 'some-article-id',
    title: 'Samsung Galaxy A55',
    total_sales: 3000,
    rating: 4.8,
    review_amount: 2753,
    short_info: ['RAM 8GB'],
  }

  const { getByText } = render(
    <ItemPostSummary itemPost={itemPost} article={article} />
  )

  expect(getByText(/Samsung Galaxy A55/i)).toBeInTheDocument()
})

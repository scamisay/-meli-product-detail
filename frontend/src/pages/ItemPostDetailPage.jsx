import ProductDetailLayout from '../components/Layout/ProductDetailLayout';
import ItemPostSummary from '../components/ItemPostSummary/ItemPostSummary';

// Mocked example data
const itemPostData = {
  title: 'Samsung Galaxy A55 128gb 8gb Awesome Iceblue',
  condition: 'new',
  sold_quantity: 500,
  price: 800009,
  original_price: 1000000,
  currency: '$',
  available_quantity: 6,
  article: {
    brand: 'Samsung',
    rating: 4.8,
    review_amount: 2735
  },
  variants: {
    color: 'Awesome Iceblue',
    storage: '128 GB',
    ram: 8
  }
};

export default function ItemPostDetailPage() {
  return (
    <ProductDetailLayout>
      {/* Left column */}
      <div>
        <ItemPostSummary item={itemPostData} />
      </div>

      {/* Right column */}
      <div>
        <button>Comprar ahora</button>
        <button>Agregar al carrito</button>
      </div>
    </ProductDetailLayout>
  );
}

import ProductDetailLayout from '../components/Layout/ProductDetailLayout';

export default function ItemPostDetailPage() {
  return (
    <ProductDetailLayout>
      {/* Left column */}
      <div>
        <h1>Samsung Galaxy A55</h1>
        <p>Detalles del producto...</p>
      </div>

      {/* Right column */}
      <div>
        <button>Comprar</button>
        <button>Agregar al carrito</button>
      </div>
    </ProductDetailLayout>
  );
}

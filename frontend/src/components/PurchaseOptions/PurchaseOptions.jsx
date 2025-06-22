// PurchaseOptions.jsx
import { useState } from 'react';
import styles from './PurchaseOptions.module.css';

export default function PurchaseOptions({ itemPost, seller }) {
  console.log("Rendering PurchaseOptions");
  console.log("itemPost:", itemPost);
  console.log("seller:", seller);

  // Defensive fallback
  if (!itemPost || !seller) {
    console.warn("Missing props in PurchaseOptions");
    return <div style={{ color: 'red' }}>No hay información para mostrar las opciones de compra.</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const maxDisplayQty = Math.min(itemPost.stock ?? 0, 6);

  return (
    <div className={styles.container} data-testid="purchase-options">
      <div className={styles.deliveryInfo}>
        <p className={styles.greenText}>Llega gratis mañana</p>
        <p className={styles.grayText}>Comprando dentro de las próximas <strong>20 h 3 min</strong></p>
        <a href="#">Más formas de entrega</a>

        <p className={styles.grayText} style={{ marginTop: '8px' }}>
          <strong>Retirá gratis</strong> entre el martes y el miércoles en correo y otros puntos
        </p>
        <a href="#">Ver en el mapa</a>
      </div>

      <div className={styles.stockInfo}>
        <p><strong>Stock disponible</strong></p>
        <div className={styles.quantitySelector}>
          <label htmlFor="quantity">Cantidad:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: maxDisplayQty }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>
                {num} unidad{num > 1 ? 'es' : ''}
              </option>
            ))}
          </select>
          {itemPost.stock > 6 && <span>(+{itemPost.stock - 6} disponibles)</span>}
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.buyNow}>Comprar ahora</button>
        <button className={styles.addToCart}>Agregar al carrito</button>
      </div>

      <div className={styles.sellerInfo}>
        <p>
          Vendido por <a href="#">{seller.name}</a>
        </p>
        {seller.reputation_level && (
          <p><strong>{seller.reputation_level}</strong></p>
        )}
        {seller.products_count && (
          <p><strong>+{Math.floor(seller.products_count / 1000)}mil ventas</strong></p>
        )}
        <p>{seller.tax_invoice}</p>
      </div>

      <div className={styles.additional}>
        <p><a href="#">Devolución gratis</a>. Tenés 30 días desde que lo recibís.</p>
        <p><a href="#">Compra Protegida</a>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
        <p>12 meses de garantía de fábrica.</p>
      </div>
    </div>
  );
}

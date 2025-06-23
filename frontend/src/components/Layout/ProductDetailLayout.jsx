// src/components/Layout/ProductDetailLayout.jsx
import styles from './ProductDetailLayout.module.css';

export default function ProductDetailLayout({ children }) {
  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <ol>
          <li><a href="#">Celulares y Teléfonos</a></li>
          <li><a href="#">Celulares y Smartphones</a></li>
          <li><a href="#">Samsung</a></li>
        </ol>
      </nav>

      <main className={styles.mainContainer}>
        <section className={styles.leftColumn}>
          <div className={styles.topRow}>
            {children[0]} {/* ArticlePhotoGallery */}
            {children[1]} {/* ItemPostSummary */}
          </div>
          <div className={styles.relatedRow}>
            {children[2]} {/* RelatedProductList */}
          </div>
          <div className={styles.descriptionRow}>
            {children[3]} {/* ArticleDescription */}
          </div>
        </section>

        <aside className={styles.rightColumn}>
          {children[4]} {/* PurchaseOptions */}
          {children[5]} {/* AvailablePaymentMethods */}
        </aside>
      </main>
    </div>
  );
}

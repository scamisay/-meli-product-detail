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
          {children[0]}
        </section>
        <aside className={styles.rightColumn}>
          {children[1]}
        </aside>
      </main>
    </div>
  );
}

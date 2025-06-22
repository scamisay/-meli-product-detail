import styles from "./ItemPostSummary.module.css";

export default function ItemPostSummary({ item }) {
  if (!item) {
    return <p className={styles.loading}>Cargando información del producto...</p>;
  }

  const {
    title,
    condition,
    price,
    original_price,
    currency,
    article,
    variants,
  } = item;

  return (
    <div className={styles.container}>
      <a href="#" className={styles.brandLink}>
        Ver más productos marca {article?.brand}
      </a>

      <div className={styles.titleBlock}>
        <span className={styles.condition}>
          {condition === "new" ? "Nuevo" : "Usado"} | +{article?.total_sales} vendidos
        </span>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.rating}>
          ★ {article?.rating} ({article?.review_amount})
        </span>
      </div>

      <div className={styles.priceBlock}>
        {original_price && (
          <span className={styles.originalPrice}>
            {currency} {original_price.toLocaleString("es-AR")}
          </span>
        )}
        <span className={styles.price}>
          {currency} {price.toLocaleString("es-AR")}
        </span>
        <span className={styles.installments}>
          Mismo precio en 6 cuotas de <strong>$133.334,83</strong>
        </span>
      </div>

      <div className={styles.variantsBlock}>
        <p className={styles.label}>
          Color: <strong>{variants?.color}</strong>
        </p>
        <p className={styles.label}>
          Memoria interna: <strong>{variants?.storage}</strong>
        </p>
      </div>

      <div className={styles.featuresBlock}>
        <p className={styles.featuresTitle}>Lo que tenés que saber de este producto</p>
        <ul className={styles.featureList}>
          <li>Memoria RAM: {variants?.ram} GB</li>
          <li>Dispositivo liberado para que elijas la compañía telefónica que prefieras</li>
          <li>Compatible con redes 5G</li>
        </ul>
      </div>
    </div>
  );
}

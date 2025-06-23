import styles from "./ItemPostSummary.module.css";

export default function ItemPostSummary({ itemPost, article }) {
  if (!itemPost || !article || article.id !== itemPost.article_id) {
    return (
      <p className={styles.loading}>
        Cargando información del producto...
      </p>
    );
  }

  const {
    condition,
    price,
    original_price,
    currency
  } = itemPost;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`star-${i}`} className={styles.star}>★</span>
        ))}
        {halfStar && <span className={styles.star}>☆</span>}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <span key={`empty-${i}`} className={styles.star}>☆</span>
        ))}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <a href="#" className={styles.brandLink}>
        Ver más productos marca {article.brand}
      </a>

      <div className={styles.titleBlock}>
        <span className={styles.condition}>
          {condition === "new" ? "Nuevo" : "Usado"} | +{article.total_sales} vendidos
        </span>
        <h1 className={styles.title}>{article.title}</h1>
        <span className={styles.rating}>
          {article.rating?.toFixed(1)} {renderStars(article.rating)} ({article.review_amount})
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

      {article.short_info?.length > 0 && (
        <div className={styles.featuresBlock}>
          <p className={styles.featuresTitle}>Lo que tenés que saber de este producto</p>
          <ul className={styles.featureList}>
            {article.short_info.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

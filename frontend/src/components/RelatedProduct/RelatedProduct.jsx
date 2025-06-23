import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticleImageNames, getArticleImageUrl } from "../../api/articleApi";
import styles from "./RelatedProduct.module.css";

/**
 * Renders a single related product card with image, title, price, and delivery.
 * On click, navigates to the item post detail page.
 */
export default function RelatedProduct({ itemPost, article }) {
  const [firstImage, setFirstImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!article?.id) return;

    async function fetchImage() {
      try {
        const imageNames = await getArticleImageNames(article.id);
        if (imageNames.length > 0) {
          setFirstImage(getArticleImageUrl(article.id, imageNames[0]));
        }
      } catch (err) {
        console.error("Error loading article image:", err);
      }
    }

    fetchImage();
  }, [article?.id]);

  const handleClick = () => {
    navigate(`/item-posts/${itemPost.id}`);
  };

  // Prevent rendering if article is missing
  if (!article) return null;

  return (
    <div className={styles.card} onClick={handleClick}>
      {firstImage && (
        <img
          src={firstImage}
          alt={article.title}
          className={styles.image}
        />
      )}
      <div className={styles.details}>
        <p className={styles.title}>{article.title}</p>
        <p className={styles.price}>${itemPost.price.toLocaleString("es-AR")}</p>
        <p className={styles.freeShipping}>Envío gratis</p>
      </div>
    </div>
  );
}

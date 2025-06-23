// src/components/RelatedProduct/RelatedProductList.jsx
import { useEffect, useState } from "react";
import styles from "./RelatedProductList.module.css";
import { fetchItemPostsPaginated } from "../../api/sellerApi";
import { fetchArticle } from "../../api/articleApi";
import RelatedProduct from "./RelatedProduct";

export default function RelatedProductList({ currentItemPostId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    async function loadRelated() {
      try {
        const itemPosts = await fetchItemPostsPaginated(3, 0);
        const filtered = itemPosts.filter(ip => ip.id !== currentItemPostId);

        const results = await Promise.all(
          filtered.map(async ip => {
            try {
              const article = await fetchArticle(ip.article_id);
              return { itemPost: ip, article };
            } catch (err) {
              console.error(`Error fetching article for ${ip.id}`, err);
              return null;
            }
          })
        );

        setRelatedProducts(results.filter(Boolean));
      } catch (err) {
        console.error("Error fetching related products:", err);
      }
    }

    loadRelated();
  }, [currentItemPostId]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Productos relacionados</h3>
      <div className={styles.productList}>
        {relatedProducts.map(({ itemPost, article }) => (
          <RelatedProduct key={itemPost.id} itemPost={itemPost} article={article} />
        ))}
      </div>
    </div>
  );
}

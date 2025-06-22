// frontend/src/components/ArticlePhotoGallery/ArticlePhotoGallery.jsx
import React, { useEffect, useState } from "react";
import styles from "./ArticlePhotoGallery.module.css";
import {
  getArticleImageNames,
  getArticleImageUrl,
} from "../../api/articleApi";

/**
 * Displays a vertical photo gallery for the given article.
 * Shows one large selected image and smaller thumbnails.
 * @param {string} articleId - The unique identifier of the article.
 */
export default function ArticlePhotoGallery({ articleId }) {
  const [imageNames, setImageNames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!articleId) return;

    getArticleImageNames(articleId)
      .then((data) => {
        setImageNames(data);
        if (data.length > 0) {
          setSelectedImage(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching article images:", error);
      });
  }, [articleId]);

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {imageNames.map((img) => (
          <img
            key={img}
            src={getArticleImageUrl(articleId, img)}
            alt="Miniatura del producto"
            className={`${styles.thumbnail} ${
              img === selectedImage ? styles.active : ""
            }`}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>
      <div className={styles.mainImage}>
        {selectedImage && (
          <img
            src={getArticleImageUrl(articleId, selectedImage)}
            alt="Imagen principal del producto"
          />
        )}
      </div>
    </div>
  );
}

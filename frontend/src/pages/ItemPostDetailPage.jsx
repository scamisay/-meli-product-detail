// src/pages/ItemPostDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailLayout from "../components/Layout/ProductDetailLayout";
import ArticlePhotoGallery from "../components/ArticlePhotoGallery/ArticlePhotoGallery";
import ItemPostSummary from "../components/ItemPostSummary/ItemPostSummary";
import { fetchItemPost } from "../api/itemPostApi";

export default function ItemPostDetailPage() {
  const { itemPostId } = useParams();
  const [itemPost, setItemPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItemPost(itemPostId)
      .then(setItemPost)
      .catch(err => {
        console.error("Error fetching item post:", err);
        setError("No se pudo cargar el producto.");
      });
  }, [itemPostId]);

  if (error) return <p>{error}</p>;
  if (!itemPost) return <p>Cargando información del producto...</p>;

  return (
    <ProductDetailLayout>
      <ArticlePhotoGallery articleId={itemPost.article_id} />
      <ItemPostSummary item={itemPost} />
      <div>
        <button>Comprar ahora</button>
        <button>Agregar al carrito</button>
      </div>
    </ProductDetailLayout>
  );
}

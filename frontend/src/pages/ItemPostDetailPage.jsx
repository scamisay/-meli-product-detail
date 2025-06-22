// src/pages/ItemPostDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailLayout from "../components/Layout/ProductDetailLayout";
import ArticlePhotoGallery from "../components/ArticlePhotoGallery/ArticlePhotoGallery";
import ItemPostSummary from "../components/ItemPostSummary/ItemPostSummary";
import PurchaseOptions from "../components/PurchaseOptions/PurchaseOptions";
import { fetchItemPost } from "../api/itemPostApi";
import { fetchSeller } from "../api/sellerApi";

export default function ItemPostDetailPage() {
  const { itemPostId } = useParams();
  const [itemPost, setItemPost] = useState(null);
  const [seller, setSeller] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const post = await fetchItemPost(itemPostId);
        setItemPost(post);

        const sellerData = await fetchSeller(post.seller_id);
        setSeller(sellerData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("No se pudo cargar el producto.");
      }
    }

    loadData();
  }, [itemPostId]);

  if (error) return <p>{error}</p>;
  if (!itemPost || !seller) return <p>Cargando información del producto...</p>;

  return (
    <ProductDetailLayout>
      <ArticlePhotoGallery articleId={itemPost.article_id} />
      <ItemPostSummary item={itemPost} />
      <PurchaseOptions itemPost={itemPost} seller={seller} />
    </ProductDetailLayout>
  );
}

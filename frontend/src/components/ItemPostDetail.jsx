import { useEffect, useState } from "react";
import { fetchItemPost } from "../api/itemPostApi.js";

function ItemPostDetail({ itemPostId }) {
  const [itemPost, setItemPost] = useState(null);

  useEffect(() => {
    fetchItemPost(itemPostId).then(setItemPost);
  }, [itemPostId]);

  if (!itemPost) return <div>Loading...</div>;

  return (
    <div>
      <h1>{itemPost.article_id}</h1>
      <p>Price: {itemPost.price} {itemPost.currency}</p>
      {/* more fields to display */}
    </div>
  );
}

export default ItemPostDetail;

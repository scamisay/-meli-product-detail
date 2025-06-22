import { useParams } from "react-router-dom";
import ItemPostDetail from "../components/ItemPostDetail.jsx";

function ItemPostDetailPage() {
  const { id } = useParams();
  return <ItemPostDetail itemPostId={id} />;
}

export default ItemPostDetailPage;

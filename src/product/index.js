import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return <h1>{id}상품상세페이지</h1>;
}

export default ProductPage;

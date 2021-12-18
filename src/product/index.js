import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  React.useEffect(function () {
    axios
      .get(
        `https://94def6f7-ce20-4481-8a64-29f2cbed30c6.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        console.log(result);
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  console.log(product);

  //비동기처리로 인한 방어코드 작성
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 12월 18일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;

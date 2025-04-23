// src/components/ProductDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!products) return <p>Loading...</p>;

  return (
    <div style={{border:"1px solid black",textAlign:"center",width:"40%",padding:"50px",marginLeft:"400px",marginTop:"auto"}}>
      <h2>{products.title}</h2>
      <img src={products.image} width="200" alt={products.title} />
      <p>{products.description}</p>
      <p><b>${products.price}</b></p>
    </div>
  );
}

export default ProductDetail;

// style={{}}
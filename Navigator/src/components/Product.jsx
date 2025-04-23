// src/components/Products.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>-: OUR PRODUCTS :-</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
      {products.map(p => (
        <div key={p.id} style={{border:"1px solid black",height:"100px"}}>
          <h3 style={{color:"purple"}}>{p.title}</h3>
          <Link to={`/products/${p.id}`} style={{textDecoration:"none",color:"black"}}>View Details</Link>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Products;

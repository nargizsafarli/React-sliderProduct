import React, { useEffect, useState } from "react";
import "./Product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FetchProduct() {
  const [product, setProduct] = useState([]);
  console.log(product, "product data");
  async function getProduct() {
    const Apiurl = "https://fakestoreapi.com/products/category/jewelery";
    try {
      const response = await fetch(Apiurl);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error, "Error");
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
    <div className="product-div">
      <h2>Product slider</h2>
      <Slider {...settings} >
        {product.map((product) => (
          <div key={product.id} className="items">
            <img
              src={product.image}
              alt={product.title}
              width="220px"
              height="220px"
            />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default FetchProduct;

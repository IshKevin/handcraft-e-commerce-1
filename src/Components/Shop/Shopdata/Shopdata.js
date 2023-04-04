import React from "react";
import "./Shopdata.css";
import ProductDisplay from "../../OneProduct/ProductDisplay";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const Shopdata = () => {
  const { products } = useContext(AuthContext);
  console.log(products);

  return (
    <>
      <div className="shopdata">
        {products?.map((product) => {
          return (
            <>
              <div className="shopdata-container1">
                <ProductDisplay
                  imageUrl={product.image}
                  name={product.productName}
                  rating={5}
                  price={product.productPrice}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shopdata;

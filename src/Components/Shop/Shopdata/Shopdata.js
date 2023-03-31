import React from "react";
import "./Shopdata.css";
import ProductDisplay from "../../OneProduct/ProductDisplay";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const Shopdata = () => {
  const { products } = useContext(AuthContext);
  console.log(products);

  return (
    <div className="shopdata">
      <div className="shopdata-container1">
        <div classname>
          <ProductDisplay
            imageUrl="/Shop/shop1.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop2.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop3.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
      </div>

      <div className="shopdata-container1">
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop4.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop5.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop6.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
      </div>
      <div className="shopdata-container1">
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop7.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop8.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
        <div>
          <ProductDisplay
            imageUrl="/Shop/shop9.jpeg"
            name="MAdein Sandal"
            rating={5}
            price="19000 Rwf"
          />
        </div>
      </div>

      <div className="shopdata">
        {products?.map((product) => {
          return (
            <>
              <div className="shopdata-container1">
                <ProductDisplay
                  imageUrl={product.productImage}
                  name={product.productName}
                  rating={5}
                  price={product.productPrice}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shopdata;

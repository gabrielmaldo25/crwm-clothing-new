import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h1>{title} </h1>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;

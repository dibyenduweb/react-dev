/* eslint-disable react/prop-types */
import Price from "./Price";
import "./Product.css";

function Product({ title,idx}) {
  let oldPrice = ["12,4555", "56454","54564","4545"]
  let newPrice = ["14,4555", "76454","14564","78545"]
  let description = ["8,000 DPI","intuit s","ipad","wifi"]
  return (
    <div className="Product">
      <p>{title}</p>
      <p>{description[idx]}</p>
     <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
     
  </div>
  );
}

export default Product;

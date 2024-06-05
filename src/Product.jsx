/* eslint-disable react/prop-types */
import "./Product.css";

function Product({ title, price,  }) {
  // const list = features.map((feature)=><li>{feature}</li>)
let styles = {backgroundColor :price >30000 ? "pink" : ""};
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h3>{price}</h3>
      {price > 30000 &&  <p>Discount of 5%</p>}
     
       
    </div>
  );
}

export default Product;

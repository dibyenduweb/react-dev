import "./Product.css"
function Product({title,price}) {
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h3>{price}</h3>
            <h5>Product Descripton</h5>
        </div>
    );
}

export default Product;
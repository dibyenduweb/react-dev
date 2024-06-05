import Product from "./Product";

function ProductTab() {
    // eslint-disable-next-line no-unused-vars
    let option = [ <li>"hitech"</li>,<li>"fast"</li>]


    return (
        <div>
            <Product title="phone" price={30000} />
            <Product title="laptop" price={40400} />
            <Product title="pen" price={30} />
        </div>
    );
}

export default ProductTab;


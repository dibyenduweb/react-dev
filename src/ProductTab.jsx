import Product from "./Product";

function ProductTab() {
    // eslint-disable-next-line no-unused-vars
    // let option = [ <li>"hitech"</li>,<li>"fast"</li>]
let styles = {
    display: "flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
}

    return (
        <div style={styles}>
            
            <Product title={"logitech mx master"} idx={0}/>
            <Product title={"logitech "} idx={1}/>
            <Product title={" mx master"} idx={2}/>
            <Product title={"master"} idx={3}/>
    
        </div>
    );
}

export default ProductTab;


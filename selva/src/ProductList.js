import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <center>
    <div style={{backgroundColor:'lightblue',gridRow:'auto',width:'100%'}}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
    </center>
  );
}

export default ProductList;
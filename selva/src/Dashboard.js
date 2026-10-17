import ProductList from "./ProductList";

function Dashboard({ products, loading }) {
  return (
    <center>
    <div >
      <h1>Product Dashboard</h1>
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </div>
    </center>
  );
}

export default Dashboard;
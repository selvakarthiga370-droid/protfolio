import Rating from '@mui/material/Rating';
function ProductCard({ product }) {
  return (
    <div style={{}}>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </div>
  );
}

export default ProductCard;
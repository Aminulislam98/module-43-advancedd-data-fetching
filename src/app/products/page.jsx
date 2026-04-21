import ProductCard from "@/components/ProductCard";

const products = async () => {
  const response = await fetch("http://localhost:5002/products", {
    next: { revalidate: 10 },
  });
  return await response.json();
};
const ProductsPage = async () => {
  const productsData = await products();
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-4 ">
        This is Products page!
      </h1>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {productsData.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

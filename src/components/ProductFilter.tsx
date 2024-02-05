import React, { useState } from "react";

// Import the Product type from the same location where it's defined
import Product from "../components/Types/Product";
interface ProductFilterProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  products,
  setFilteredProducts,
}) => {
  const [sortBy, setSortBy] = useState("");

  const handleSort = (criteria: string) => {
    let sortedProducts = [...products];
    switch (criteria) {
      case "alphabetical":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "priceAscending":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceDescending":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
    setSortBy(criteria);
  };

  return (
    <div>
      <select
        className="p-2 border-2 hover:border-secondary border-primary text-primary rounded-full"
        value={sortBy}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="">Filter by</option>
        <option value="alphabetical">Alphabetical Order</option>
        <option value="priceAscending">Price - Low to High</option>
        <option value="priceDescending">Price - High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;

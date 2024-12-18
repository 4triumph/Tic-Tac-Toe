// /components/ProductList.js
import React from "react";
function ProductCatagoryRow({ catagory }) {
  return (
    <tr>
      <th colSpan="2">{catagory}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({ products }) {
  const rows = [];
  let lastCatagory = null;
  products.forEach((product) => {
    if (product.catagory !== lastCatagory) {
      rows.push(
        <ProductCatagoryRow
          catagory={product.catagory}
          key={product.catagory}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCatagory = product.catagory;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {"  "}
        Only show products in stock
      </label>
    </form>
  );
}
function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
function ProductList() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default ProductList;

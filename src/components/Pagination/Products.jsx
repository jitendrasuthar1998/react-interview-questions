import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const Products = () => {
  const [products, setProducts] = useState([]);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const [displayProducts, setDisplayProducts] = useState([]);

  const getProducts = async () => {
    // console.log("all products", allProd);
    const result = await fetch("https://dummyjson.com/products");
    const allProd = await result.json();
    console.log("all products", allProd);
    setProducts(allProd.products);
  };

  useEffect(() => {
    console.log("use effect");
    getProducts();
  }, []);

  useEffect(() => {
    const handlePagination = (pageNumber) => {
      let startIndex = pageNumber - 1;
      let endIndex = startIndex + PAGE_SIZE;

      const paginatedProducts = products.slice(startIndex, endIndex);

      setDisplayProducts(paginatedProducts);
    };

    handlePagination(currentPageNumber);
  }, [currentPageNumber, products]);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const generatePageButtons = Array.from({ length: totalPages }, (_, index) => (
    <button key={index} onClick={() => setCurrentPageNumber(index + 1)}>
      {index + 1}
    </button>
  ));

  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:10, width:"1000px", border:"1px solid blue", flexWrap:"wrap"}}>
      {displayProducts.map((product) => (
        <div key={product.id} style={{height:"200px", width:"200px", border:"1px solid red"}}>
          <h3>{product.title}</h3>
          <img src={product.images[0]} height={100} width={100}/>
          </div>
      ))}

      </div>
      {generatePageButtons}
      <h2>Products</h2>
    </div>
  );
};

export default Products;

import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import productData from "./products.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartHome = () => {
  // const url = "https://dummyjson.com/products";

  const [products] = useState(productData.products);

  const [paginatedProducts, setPaginatedProducts] = useState(products.slice(0,10));

  console.log("products.slice(0,10)",products.slice(0,10))

  //   const getProducts = () => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products));
  //   };

  // useEffect(()=> {
  //     getProducts();
  // },[])
  const cartProducts = useSelector((store)=> store.cart.cartProducts);
  console.log("cartProducts", cartProducts);

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("handleSearch", searchText);
    const searchResult = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.includes(searchText)
    );
    console.log("handleSearch", searchResult);
    setPaginatedProducts(searchResult);
  };

  const timerRef = useRef();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => handleSearch(), 800);

    return () => clearTimeout(timerRef.current);
  }, [searchText]);

  const categories = useMemo(() => {
    return products.reduce((acc, product) => {
      // console.log("acc", acc);
      // console.log("product", product);
      // return acc;
      if (acc == undefined) {
        acc[product.category] = product.category;
      }
      if (!acc[product.category]) {
        acc[product.category] = product.category;
      }
      return acc;
    }, {});
  }, [products]);

  // console.log("categories", categories);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleProductFilterByCategory = (category) => {
    setSelectedCategory(category);

    const filteredProducts = products.filter(
      (product) => product.category == category
    );

    setPaginatedProducts(filteredProducts);
  };

  
  const generatePaginationButtons = () => {
    const buttons = paginatedProducts.length / 10;

    const paginationButtons = Array.from({length:buttons}, (_,index)=> {
      return <span key={index} style={{padding:10, backgroundColor:"blanchedalmond", border:"1px solid red"}}>{index+1}</span>
    })    
    
    return <div style={{position:"fixed", bottom:10, border:"1px solid red", width:"90%"}}>
      {paginationButtons}
    </div>
  }

  return (
    <div style={{ width: "100vw", backgroundColor: "beige", paddingTop: 20, position:"relative" }}>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          //   onSubmit={handleSearch}
        />
      </div>
      <div>
        {Object.keys(categories).map((cat) => (
          <button
            style={{
              backgroundColor: selectedCategory == cat ? "lightcyan" : null,
            }}
            onClick={() => handleProductFilterByCategory(cat)}
            key={cat}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Cart App</p>{" "}
        <p>Cart Items : {cartProducts?.length}</p> <Link to="/cart">Cart</Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {paginatedProducts?.length
          ? paginatedProducts.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))
          : null}
      </div>

      {generatePaginationButtons()}
    </div>
  );
};

export default CartHome;

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [productData, setProductData] = useState([]);
  const [filter, setFiler] = useState("all");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    ).then((response) => response.json())
    .then(resData => {
      return setProductData(resData);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  function filterProductData(filter) {
    setFiler(filter);
  }
  
  let data = filter === 'all' && productData;

  if (filter === 'available') data = productData.filter(product => product.available);

  return (
    <>
      <div id="container">
        <Header filter={filter} onFilterSelect={filterProductData} />
        {productData.length > 0 && <Content content={data} />}
      </div>
    </>
  );
}

export default App;

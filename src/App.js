import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";

const GET_PRODUCTS = gql`
  query {
    category {
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

function DisplayProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ProductsList data={data} />
  )
}

function App() {

  return (
    <div className="App">
        <DisplayProducts />
    </div>
  )
}

export default App;

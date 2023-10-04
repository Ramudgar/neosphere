import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [results, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const { search } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (!search) {
          setError("Search parameter is missing from the URL");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/product/search?query=${search}`
        );

        if (response.status === 200) {
          setSearchResults(response.data.products);
          setError(null); // Clear the error when results are found
        } else {
          setError("Products not found"); // Set error message when no products are found
          console.error("Error fetching search results:", response.statusText);
        }
      } catch (error) {
        setError("Products not found");
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [search]);

  return (
    <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        results.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
            {/* Display other product details as needed */}
          </div>
        ))
      ) : (
        <h2>{error}</h2>
      )}
    </div>
  );
};

export default SearchResultsPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
// import '../../assets/css/productview.css'

function AddProductComponent() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);

    console.log(formData);

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    axios
      .post("http://localhost:5000/product/create", formData, config)
      .then((response) => {
        alert("Product added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error: " + err);
      });
  };

  // to get the category from the database

  const [categories, setCategories] = useState([]); // to store the categories
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/get")
      .then((response) => {
        // console.log(response);
        setCategories(response.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputname">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <h5>Select a category:</h5>
            <select
              id="categoryDropdown"
              onClick={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => {
                return <option key={category._id} value={category._id}>{category.name}</option>;
              })}
            </select>
          </div>
          <br /> <br />
          <div className="form-group">
            <label htmlFor="image">Upload your image</label>

            <input
              type="file"
              id="image"
              className="form-control"
              name="filename"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <br /> <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProductComponent;

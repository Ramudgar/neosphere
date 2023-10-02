import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProductComponent = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
  });
  const [image, setImage] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getProduct/${id}`)
      .then((response) => {
        setProductData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    formData.append("quantity", productData.quantity);
    formData.append("category", productData.category);

    // Only append the image if it's not null or undefined
    if (image !== null && image !== undefined) {
      formData.append("image", image);
    }

    try {
      axios
        .put(`http://localhost:5000/updateProduct/${id}`, formData, config)
        .then((response) => {
          console.log(response.data);
          alert(`Success: ${response.data.msg}`);

          setTimeout(() => {
            // Redirect to product view after 1 second
            window.location.href = "/productview";
          }, 1000);
        });
    } catch (err) {
      alert(`Error: ${err.response.data.msg}`);
      console.log(err.response.data.msg);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Handle regular form fields
    if (type !== "file") {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Handle the image file if files array exists
      if (files && files.length > 0) {
        setImage(files[0]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={productData.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={productData.price || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={productData.description || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={productData.quantity || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={productData.category || ""}
          onChange={handleChange}
        >
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablet">Tablet</option>
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductComponent;
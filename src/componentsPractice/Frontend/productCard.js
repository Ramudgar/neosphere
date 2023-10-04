import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  name,
  price,
  quantity,
  description,
  category,
  image,
}) {
  const tokens = localStorage.getItem("token");

  const userData = localStorage.getItem("userData");
  const userdata = JSON.parse(userData);

//   console.log(userdata);

  // const id = data.data._id;
  // const isAdmin = userdata.data.isAdmin;
//   to check whether role==admin or not
  const isAdmin = userdata?.data?.role === "admin" || false;

  // convert _id to string to use it in the url for editProduct
  const _id = id.toString();

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:5000/product/delete/${_id}`, {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className=" d-flex border border-primary shadow m-2 justify-content-between align-items-center col-lg-10">
            <div className="media-body ">
              <h5 className="mt-0 font-weight-bold mb-2">{name}</h5>
              <p className="font-italic text-muted mb-0 small">{description}</p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">
                  {price} &emsp; {quantity}
                </h6>
                <span>{category}</span>
              </div>
            </div>
            <div>
              <img
                src={image}
                alt="Generic placeholder"
                width={200}
                className="ml-lg-5 order-1 order-lg-2"
              />
            </div>
            <div className="">
              {/* if user is not logged or isAdmin is false, show "Add to cart" button */}
              {isAdmin === false || !tokens ? (
                <button className="btn btn-primary">Add to cart</button>
              ) : (
                <>
                  {/* If user is logged in and isAdmin is true, show "Edit" and "Delete" buttons */}
                  <Link className="btn btn-primary" to={`/editProduct/${_id}`}>
                    Edit
                  </Link>
                  <Link className="btn btn-danger" onClick={deleteProduct}>
                    Delete
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

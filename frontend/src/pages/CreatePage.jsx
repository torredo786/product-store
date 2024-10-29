import React, { useState } from 'react';
import '../style/CreatePage.css';
import {useProductStore} from "../store/product"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });
  
  const { name, price, image } = newProduct;
  
  const toast = useToast();
  const {createProduct} = useProductStore(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name, value",name, value)
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted"); // Add this line
    const {success, message}= await createProduct(newProduct);

  };

  return (
    <div className="main">
        {console.log("ddd",newProduct)}
      <div className="new-product-form">
        <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              name="name" // Added name attribute
              className="form-input"
              placeholder="Enter product name"
              value={name}
              onChange={handleChange} // Updated to use handleChange
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price" // Added name attribute
              className="form-input"
              placeholder="Enter price"
              value={price}
              onChange={handleChange} // Updated to use handleChange
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image-url" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              id="image-url"
              name="image" // Added name attribute
              className="form-input"
              placeholder="Enter image URL"
              value={image}
              onChange={handleChange} // Updated to use handleChange
            />
          </div>
          <button type="submit" className="form-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;

import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const EditGood = () => {
  const { id } = useParams();
  const { name, price, category, ImgURL, description } = useLoaderData();
  const goodCategories = ["grocery", "clothes", "shoes"];
  const [selectedCategory, setSelectedCategory] = useState(category || goodCategories[0]);
  const [productDescription, setProductDescription] = useState(description || '');

  const handleChangeSelectedValue = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;    
    const name = form.ProductName.value;
    const category = selectedCategory; 

    const updateProductObj = {
      name,
      description: productDescription,
      category,
    };

    fetch(`http://localhost:5000/good/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateProductObj)
    })
    .then((res) => res.json())
    .then((data) => {
      alert("Good updated successfully");
    });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A good data</h2>
      <form
        onSubmit={handleSubmission}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Product name */}
          <div className="mb-2">
            <Label htmlFor="ProductName" value="Product Name" />
            <TextInput
              id="ProductName"
              type="text"
              placeholder="Product Name"
              required
              defaultValue={name}
            />
          </div>

          {/* Category */}
          <div className="mb-2">
            <Label htmlFor="inputState" value="Good Category" />
            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedCategory}
              onChange={handleChangeSelectedValue}
            >
              {goodCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product description */}
        <div className="mb-2 block">
          <Label htmlFor="ProductDescription" value="Product Description" />
          <Textarea
            id="ProductDescription"
            placeholder="Write product description..."
            required
            rows={5}
            className="w-full"
            value={productDescription}
            onChange={handleDescriptionChange}
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Update good
        </Button>
      </form>
    </div>
  );
};

export default EditGood;
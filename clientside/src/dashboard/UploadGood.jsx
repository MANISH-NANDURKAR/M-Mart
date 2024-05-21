import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const UploadGood = () => {
  const goodCategories = ["grocery", "clothes", "shoes"];
  const [selectedCategory, setSelectedCategory] = useState(goodCategories[0]);

  const handleChangeSelectedValue = (e) => {
    setSelectedCategory(e.target.value);
  };
  //handle submission

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.ProductName.value;
    const ProductDescription = form.ProductDescription.value;
    const category = selectedCategory; 

    const productObj = {
      name,
      ProductDescription,
      category,
    };
    
    fetch("http://localhost:5000/upload-good", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Item uploaded successfully");
      });
  };

  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Upload A good</h2>

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

        <div className=" mb-2 block">
          <Label htmlFor="ProductDescription" value="Product Description" />
          <Textarea
            id="ProductDescription"
            type="text"
            placeholder="Write product description..."
            required
            rows={5}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Upload good
        </Button>
      </form>
    </div>
  );
};

export default UploadGood;

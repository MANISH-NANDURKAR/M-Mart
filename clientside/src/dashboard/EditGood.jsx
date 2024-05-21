import React, { useState } from 'react'
import { json, useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const EditGood = () => {

  const {id} = useParams();

  const{name,price, category,ImgURL} = useLoaderData();
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

    const UpdateproductObj = {
      name,
      ProductDescription,
      category,
    };
    
  //  update good

    fetch(`http://localhost:5000/good/${id}`,{
      method:"PATCH",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(UpdateproductObj)
    }).then((res) => res.json())
    .then((data) => {
      alert("good Updated successfully");
    });
  };

  return (
    <div className="px-4 my-12 ">
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
              defaultValue={category}
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
            defaultValue={ProductDescription}
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
}

export default EditGood

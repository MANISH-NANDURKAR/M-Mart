import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Table } from "flowbite-react";

const ManageGood = () => {
  const [allgoods, setallgoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-items")
      .then((res) => res.json())
      .then((data) => setallgoods(data));
  }, []);

  //delete goods

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/good/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Good is Deleted successfully");
        
      })
      .catch((error) => {
        console.error("Error deleting good:", error);
        // Optionally handle errors
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center ">Manage Your Good</h2>

      {/* table */}

      <Table className="md:w-[10px]">
        <Table.Head className="bg-cyan-100">
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
       
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span >Delete</span>
          </Table.HeadCell>

          
        </Table.Head>
        {
          allgoods.map((good,index) => <Table.Body className="divide-y" key = {good._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index = index +1 }
            </Table.Cell>
            <Table.Cell  className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">{good.name}</Table.Cell>
            <Table.Cell  className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">{good.category}</Table.Cell>
            <Table.Cell  className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">{good.price}</Table.Cell>
            <Table.Cell>
  <Link
    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
    to={`/admin/dashboard/edit/${good._id}`}
  >
    Edit
  </Link>
</Table.Cell>

            <Table.Cell>
              <button onClick={() => handleDelete(good._id)}className="bg-red-600 px-4 py-1 fonr-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
              
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
       
      </Table>
    </div>
  );
};

export default ManageGood;

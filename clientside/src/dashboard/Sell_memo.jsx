import React, { useEffect, useState } from "react";
import { Table, Button } from "flowbite-react";
import { IoAddSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const Sell_memo = () => {
  const [allgoods, setAllgoods] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/all-items")
      .then((res) => res.json())
      .then((data) => setAllgoods(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleQuantityChange = (e, id) => {
    setQuantities({
      ...quantities,
      [id]: parseFloat(e.target.value) || 0,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    const updatedGoods = allgoods.filter(good => quantities[good._id] !== undefined);

    Promise.all(
      updatedGoods.map((good) => {
        const id = good._id;
        const selling_price = quantities[id];

        return fetch(`http://localhost:5000/good/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selling_price }),
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error updating data:", error));
      })
    )
      .then(() => {
        alert("Goods updated successfully");
        setQuantities({});
      })
      .catch((error) => console.error("Error in updating goods:", error));
  };
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate('/admin/dashboard/manage');
  };
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-center">Sell Memo</h2>

      <div className="flex justify-end ">
        <Button className="hover:text-black text-sky-700 flex items-center" onClick={handleRoute}>
          <IoAddSharp className="" size={24} />
          Edit Or Delete
        </Button>
      </div>
      <form onSubmit={handleSubmission} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="overflow-x-auto">
          <Table className="md:w-[11px]">
            <Table.Head className="bg-cyan-100">
              <Table.HeadCell>No.</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Purchase Price</Table.HeadCell>
              <Table.HeadCell>Selling Price</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Set Selling price</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {allgoods.map((good, index) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={good._id}>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {good.name}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {good.category}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {good.purchase_price}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {good.selling_price}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {good.quantity}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <input
                      id={`sellingPrice-${good._id}`}
                      type="number"
                      className="text-center"
                      step={"any"}
                      min="0"
                      value={quantities[good._id] || ""}
                      onChange={(e) => handleQuantityChange(e, good._id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <Button
          type="submit"
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded align-center hover:bg-black"
        >
          Set selling price
        </Button>
      </form>
    </div>
  );
};

export default Sell_memo;

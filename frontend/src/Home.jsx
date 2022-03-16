import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddNewItem } from "./components/AddNewItem";
import { Modal } from "./components/Modal";
import { TodoItems } from "./components/TodoItems";

export const Home = () => {
  const [items, setItems] = useState([]);

  const [open, setOpen] = useState(false);

  const [itemId, setItemId] = useState(null);

  const handleOpen = (param) => {
    setOpen(true);
    setItemId(param);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.title = "Welcome to the Simpe Todo App";
  }, []);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  const updateTodoItem = async (item) => {
    try {
      await axios.put("http://localhost:5000/api/todos?id=" + item);
      setItems(
        items.map((i) =>
          i._id === item ? { ...i, isCompleted: !i.isCompleted } : i
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addNewItem = async (title) => {
    try {
      const res = await axios.post("http://localhost:5000/api/todos", {
        title,
      });
      setItems([res.data, ...items]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async () => {
    try {
      await axios.delete("http://localhost:5000/api/todos?id=" + itemId);
      setItems(items.filter((item) => item._id !== itemId));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose} deleteItem={deleteItem} />
      <div className="container mx-auto mt-20">
        <div className="flex justify-center">
          <AddNewItem submitPost={addNewItem} />
        </div>
        <div className="container mx-auto border-2 border-[#ecb829] mt-5 max-w-3xl">
          {items.map((item, index) => (
            <TodoItems
              openDialog={handleOpen}
              onUpdate={updateTodoItem}
              todoItem={item}
              key={index}
            />
          ))}
          {items.length === 0 && (
            <p className="text-center p-5 text-white">
              No Todo Items Available!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

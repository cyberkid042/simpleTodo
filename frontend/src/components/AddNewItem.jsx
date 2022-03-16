import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";

export const AddNewItem = ({ submitPost = null }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    submitPost(title);
    setTitle("");
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 760,
      }}
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="todoItem"
        type="text"
        autoFocus
        placeholder="Enter a todo Item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="success"
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={handleSubmit}
      >
        <SendOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

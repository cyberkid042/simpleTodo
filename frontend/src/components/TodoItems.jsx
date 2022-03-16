import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton, ListItem } from "@mui/material";

export const TodoItems = ({ todoItem = {}, onUpdate = null, openDialog }) => {
  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            size="medium"
            color="error"
            onClick={() => openDialog(todoItem._id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          width: "100%",
          backgroundColor: `${
            todoItem.isCompleted ? "#ecb829" : "transparent"
          }`,
        }}
      >
        <ListItemButton onDoubleClick={() => onUpdate(todoItem._id)}>
          <ListItemIcon
            sx={{ color: `${todoItem.isCompleted ? "black" : "white"}}` }}
          >
            <CommentIcon />
          </ListItemIcon>
          <ListItemText
            sx={{ color: `${todoItem.isCompleted ? "black" : "white"}}` }}
            primary={todoItem.title}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

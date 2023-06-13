import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/material/styles";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: theme.spacing(2),
//   },
// }));

function ChatList() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Simulated data for the chats
    const chatsData = [
      { id: 1, title: "Chat 1", date: "2023-06-10" },
      { id: 2, title: "Chat 2", date: "2023-06-09" },
      { id: 3, title: "Chat 3", date: "2023-06-08" },
      { id: 4, title: "Chat 4", date: "2023-06-07" },
    ];

    setChats(chatsData);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Chat List
      </Typography>
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id} button>
            <ListItemText primary={chat.title} secondary={chat.date} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ChatList;

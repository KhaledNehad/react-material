import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TypoGraphy from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { Home, Book, AccountBox } from "@material-ui/icons";



export default props => (

  <List component="nav">
    <ListItem component="div">
      <ListItemText inset>
        <TypoGraphy color="inherit" variant="title">
          <Home /> Home
        </TypoGraphy>
      </ListItemText>


      <ListItemText inset>
        <TypoGraphy color="inherit" variant="title">
          <Book /> Posts
               </TypoGraphy>
      </ListItemText>


      <ListItemText inset>
        <TypoGraphy color="inherit" variant="title">
          <AccountBox /> Contact
               </TypoGraphy>
      </ListItemText>
    </ListItem >

  </List>

)
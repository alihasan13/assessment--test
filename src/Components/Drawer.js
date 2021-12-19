import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "4000px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  
  const itemsList = [
    {
      text: "All Author",
      onClick: () => history.push("/")
    },
    {
      text: "Favorite Author",
      onClick: () => history.push("/favAuthor")
    },
    
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer} >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
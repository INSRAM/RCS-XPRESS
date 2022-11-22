import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Link,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  GridViewRounded,
  PinDropRounded,
  GroupsRounded,
} from "@mui/icons-material";

import Logo from "../../assets/RCS.png";

const drawerWidth = "15vw";

export default function AdminDrawer() {
  const [data, setData] = React.useState([
    {
      name: "Dashboard",
      icon: <GridViewRounded style={{ color: "#8A92A6" }} />,
      selected: false,
    },
    {
      name: "Tracking",
      icon: <PinDropRounded style={{ color: "#8A92A6" }} />,
      selected: false,
    },
    {
      name: "Users",
      icon: <GroupsRounded style={{ color: "#8A92A6" }} />,
      selected: false,
    },
  ]);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <Box
          style={{
            margin: "20px",
          }}
        >
          <Link underline="none" href="/admin">
            <img src={Logo} alt="logo" width={"95px"} height={"52px"} />
          </Link>
        </Box>

        {data.map((text, index) => {
          return (
            <ListItem
              selected={text.selected}
              onClick={() => {
                const nextList = [...data];
                nextList.map((x) => {
                  return (x.selected = false);
                });
                nextList[index].selected = true;
                setData(nextList);
              }}
              button
              key={text.name}
              sx={{
                color: "#8A92A6",

                "&.Mui-selected": {
                  backgroundColor: "#FF6300",
                  color: "white",
                  boxShadow: "0px 2px 4px rgba(138, 146, 166, 0.3)",
                  borderRadius: "10px",
                },
              }}
            >
              <ListItemIcon style={{ minWidth: "40px" }}>
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    style={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "175%",
                    }}
                  >
                    {text.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>

      <Divider />
    </Drawer>
  );
}

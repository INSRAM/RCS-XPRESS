import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  GridViewRounded,
  UpgradeRounded,
  AddRounded,
  LogoutRounded,
} from "@mui/icons-material";

import Logo from "../../assets/RCS.png";

const drawerWidth = "15vw";

export default function AdminDrawer() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Dashboard",
      icon: <GridViewRounded />,
      selected: false,
      link_: "/admin",
    },
    {
      id: 2,
      name: "Add Shipper",
      icon: <AddRounded fontSize="large" />,
      selected: false,
      link_: "/admin/createshipper",
    },
    {
      id: 3,
      name: "Update Status",
      icon: <UpgradeRounded fontSize="large" />,
      selected: false,
      link_: "/admin/updateshipper",
    },
    {
      id: 4,
      name: "Log Out",
      icon: <LogoutRounded fontSize="large" />,
      selected: false,
      link_: "/",
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
          <Link to="/admin">
            <img src={Logo} alt="logo" width={"95px"} height={"52px"} />
          </Link>
        </Box>

        {data.map((text, index) => {
          return (
            <Link
              to={text.link_}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ListItem
                onClick={() => {
                  const nextList = [...data];
                  nextList.map((x) => {
                    return (x.selected = false);
                  });
                  nextList[index].selected = true;
                  if (text.id === 4) {
                    localStorage.removeItem("token");
                  }
                  setData(nextList);
                }}
                key={text.name}
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
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
}

import * as React from "react";
import { useCookies } from "react-cookie";
import {
  Box,
  Drawer,
  List,
  Link,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  GridViewRounded,
  UpgradeRounded,
  AddRounded,
  LogoutRounded,
} from "@mui/icons-material";

import Logo from "../../assets/RCS.png";

const drawerWidth = "15vw";

export default function AdminDrawer() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
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
      link_: "/admin",
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
            <Link underline="none" href={text.link_} color={"inherit"}>
              <ListItem
                selected={text.selected}
                onClick={() => {
                  const nextList = [...data];
                  nextList.map((x) => {
                    return (x.selected = false);
                  });
                  nextList[index].selected = true;
                  if (text.id === 4) {
                    removeCookie("user");
                  }
                  setData(nextList);
                }}
                button
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

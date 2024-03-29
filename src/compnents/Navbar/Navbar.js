import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import logo from "../../assets/RCS.png";

const pages = [
  { id: "#service", name: "Services", target: "_self" },
  { id: "#about_us", name: "About us", target: "_self" },
  {
    // id: "tel:+923016804252",
    id: "https://web.whatsapp.com/send?phone=923016804252?&text=Thank you for contacting RCS XPRESS! Please let us know how we can help you.&app_absent=0",
    // id: "https://wa.me/923016804252?text=Thank you for contacting RCS Xpress! Please let us know how we can help you.",
    name: "Contact us",
    target: "_blank",
  },
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="Navbar"
      sx={{
        background: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <a
                    href={page.id}
                    target={page.target}
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={logo}
            alt="logo"
            style={{ objectFit: "contain" }}
            width={"150px"}
            height={"60px"}
          />

          <Grid container display={"flex"}>
            <Grid
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page, index) => (
                <a
                  href={page.id}
                  target={page.target}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contaoutlinedined"
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "#424242",
                      display: "block",
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "19.5px",
                      margin: "0px 5px",

                      ":hover": {
                        color: "#FF6300",
                        textDecoration: "underline",
                        background: "none",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </a>
              ))}
            </Grid>

            <Grid
              item
              xs={"9"}
              lg={"3"}
              md={"3"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box sx={{ flexGrow: 0 }}>
                <Link href="tel:+923016804252" underline="none" color="inherit">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#FF6300",
                      background: "#FF6300",
                      borderRadius: "28px",
                      whiteSpace: "nowrap",
                      boxShadow: " 0px 12px 40px -10px rgba(255, 99, 0, 0.8)",
                      color: "white",
                      ":hover": {
                        borderColor: "#FF6300",
                        background: "white",
                        color: "#FF6300",
                      },
                    }}
                  >
                    get a free quote
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

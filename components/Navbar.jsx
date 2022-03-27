import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Brightness6Icon from "@mui/icons-material/Brightness6";

const ResponsiveAppBar = ({ color, bgColor, handleChangeTheme }) => {
  const pages = [
    {
      name: "Home",
      url: "/#",
    },
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Committee",
      url: "/#protfolio",
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: bgColor,
        color: color,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap={false}
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://s19.postimg.cc/hqrib0d2b/Robo-7.png"
              alt="Robo"
              width="30"
              style={{ margin: "0 10px" }}
            />{" "}
            CSCT
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {pages.map((page) => (
              <a href={page.url} key={page.url}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: color, display: "block" }}
                >
                  {page.name}
                </Button>
              </a>
            ))}
            <Button
                          sx={{
                              my: 2, color: color, display: "block"
                          }}
              onClick={() => {
                handleChangeTheme();
                const newTheme = color !== "#fff" ? "dark" : "light";
                localStorage.setItem("theme", newTheme);
              }}
            >
              <Brightness6Icon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import cookItLogo from "../assets/cookit_logo.png";
import { useNavigate } from "react-router-dom";
import SignUP from "./SignUP";
import Login from "./Login";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showLogIn, setShowLogIn] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);
  const handleOnCloseLogIn = () => setShowLogIn(false);
  const handleOnCloseSignUp = () => setShowSignUp(false);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <div>
            <img
              src={cookItLogo}
              alt="cookit-logo"
              onClick={() => navigate("/")}
              className="mr-3 w-40 h-16"
            />
          </div>
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              {userId ? (
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
                  <MenuItem onClick={() => navigate("profile")}>
                    <Typography textAlign="center" style={{ color: "#FCA2AD" }}>
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.reload();
                    }}
                  >
                    <Typography textAlign="center" style={{ color: "#FCA2AD" }}>
                      Log Out
                    </Typography>
                  </MenuItem>
                </Menu>
              ) : (
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
                  <MenuItem onClick={() => setShowLogIn(true)}>
                    <Typography textAlign="center" style={{ color: "#FCA2AD" }}>
                      {"Login"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => setShowSignUp(true)}>
                    <Typography textAlign="center" style={{ color: "#FCA2AD" }}>
                      {"Sign Up"}
                    </Typography>
                  </MenuItem>
                </Menu>
              )}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <img
                src={cookItLogo}
                className="mr-3 w-36 h-12 flex md:hidden"
                alt="cookit-logo"
                onClick={() => navigate("/")}
                />
              {userId ? (
                <div className="flex">
                  <Button
                    className="text-lg hover:underline"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => navigate("profile")}
                    sx={{ my: 2, display: "block" }}
                  >
                    Profile
                  </Button>
                  <Button
                    className="text-lg hover:underline"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.reload();
                    }}
                    sx={{ my: 2, display: "block" }}
                  >
                    Log Out
                  </Button>
                </div>
              ) : (
                <div className=" flex">
                  <Button
                    className="text-lg hover:underline"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => setShowLogIn(true)}
                    sx={{ my: 2, display: "block" }}
                  >
                    Login
                  </Button>
                  <Button
                    className="text-lg hover:underline"
                    style={{ color: "#FCA2AD" }}
                    onClick={() => setShowSignUp(true)}
                    sx={{ my: 2, display: "block" }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </Box>
          </div>
        </Toolbar>
      </Container>
      <Login visible={showLogIn} onClose={handleOnCloseLogIn} />
      <SignUP visible={showSignUp} onClose={handleOnCloseSignUp} />
    </AppBar>
  );
}

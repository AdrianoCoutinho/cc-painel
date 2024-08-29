import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  Tooltip,
  styled,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../api";
import logo from "../../../assets/images/optimux-logo.png";
import { useAuthContext } from "../../contexts";
import { MessagesDrawer } from "../messagesDrawer/MessagesDrawer";
import { FadeMenu } from "../notifiesButtonDash/NotifiesButtonDash";
import "./style.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "22px",
  backgroundColor: "#212836",
  "&:hover": {
    backgroundColor: "#212836",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "25%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const AppBarMenu: React.FC = () => {
  const API_url = "http://localhost:3333";
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    email: "",
    real_balance: 0,
    profile_picture_url: ``,
  });

  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getUserDetails = async () => {
    const result = await getUser();
    setUserDetails(result.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/profile")}>Ver perfil</MenuItem>
      <MenuItem onClick={logout}>Sair</MenuItem>
    </Menu>
  );
  return (
    <React.Fragment>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: " 1px solid #39445B",
        }}
      >
        <AppBar
          position="fixed"
          sx={{ borderBottom: " 1px solid #39445B", height: "60px" }}
        >
          <Toolbar>
            <div>
              <img height={23} src={logo} alt="Candle Stop" />
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Search sx={{ display: { xs: "none", sm: "block" } }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.30)" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Procure aqui…"
                inputProps={{ "aria-label": "Procure aqui..." }}
              />
            </Search>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <FadeMenu />
              <MessagesDrawer />
              <div id="avatar-name">
                <Typography sx={{ fontSize: "12px" }}>
                  {userDetails.name}
                  <br />
                  <span>Administrador</span>
                </Typography>
              </div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
                  <Avatar
                    alt={userDetails.name}
                    src={`${API_url}${userDetails.profile_picture_url}`}
                    id="avatar"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 19 12"
                    fill="none"
                  >
                    <path
                      d="M0.465863 1.42306C0.318247 1.56947 0.201081 1.74366 0.121124 1.93558C0.0411665 2.1275 1.15274e-07 2.33335 1.12794e-07 2.54126C1.10315e-07 2.74917 0.0411665 2.95502 0.121124 3.14694C0.201081 3.33886 0.318247 3.51305 0.465863 3.65946L8.34054 11.5341C8.48695 11.6818 8.66114 11.7989 8.85306 11.8789C9.04498 11.9588 9.25083 12 9.45874 12C9.66665 12 9.8725 11.9588 10.0644 11.8789C10.2563 11.7989 10.4305 11.6818 10.5769 11.5341L18.4516 3.65946C18.5992 3.51305 18.7164 3.33886 18.7964 3.14694C18.8763 2.95502 18.9175 2.74917 18.9175 2.54126C18.9175 2.33335 18.8763 2.1275 18.7964 1.93558C18.7164 1.74366 18.5992 1.56947 18.4516 1.42306C18.3052 1.27544 18.131 1.15827 17.9391 1.07832C17.7472 0.998361 17.5413 0.957194 17.3334 0.957194C17.1255 0.957194 16.9197 0.998361 16.7277 1.07832C16.5358 1.15827 16.3616 1.27544 16.2152 1.42306L9.45874 8.19528L6.08051 4.80917L2.70227 1.42306C2.55586 1.27544 2.38167 1.15827 2.18975 1.07832C1.99783 0.998361 1.79198 0.957193 1.58407 0.957193C1.37616 0.957193 1.1703 0.998361 0.978383 1.07832C0.786463 1.15827 0.612274 1.27544 0.465863 1.42306Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
    </React.Fragment>
  );
};

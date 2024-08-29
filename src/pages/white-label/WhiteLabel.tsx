import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  Grid,
  InputBase,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import brasilRounded from "../../assets/svg/brasil-rounded.svg";
import betCandleAvatar from "../../assets/temporary-images/bet-candle-avatar.png";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 14,
  height: 14,
  border: "1px solid #022f4d",
  boxShadow: theme.palette.mode === "dark" ? "red" : "red",
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#137cbd",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 14,
    height: 14,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "22px",
  backgroundColor: "#212836",
  "&:hover": {
    backgroundColor: "#212836",
  },
  marginTop: "12px",
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "88%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "100%",
  },
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(0),
    width: "95%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
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
    padding: theme.spacing(0.5, 15, 0.5, 0),
    color: "#fff",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(0.5, 0, 0.5, 5),
    },
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.30)", // Defina a cor do texto de espaço reservado aqui
    },
  },
}));

export const WhiteLabel: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));
  const height = isLg ? "79vh" : "32vh";
  const heightXs = isXs ? "79vh" : "32vh";

  return (
    <BaseLayoutPage>
      <Grid container spacing={1} sx={{ padding: "0 10px" }}>
        <Grid item xs={12}>
          <Typography className="page-title">White Label</Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={3}>
          <Box
            id="white-label-brokers-list-card"
            style={{ height }}
            sx={{ padding: "10px 0" }}
          >
            <Box id="white-label-broker-list-card-title">
              <Typography component={"h6"} className="grey-text">
                Corretoras
              </Typography>
              <Button
                className="green-button new-broker-button"
                variant="contained"
              >
                +Adicionar nova corretora
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.30)" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Procure aqui…"
                  inputProps={{ "aria-label": "Procure aqui..." }}
                />
              </Search>
            </Box>
            <Box
              id="white-label-brokers-list"
              sx={{ height: `calc(${height} - 88px)`, marginTop: "10px" }}
            >
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
              <Box component={"div"} className="white-label-broker-content">
                <Box sx={{ display: "flex" }}>
                  <img src={betCandleAvatar} alt="Bet Candle" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography>Bet Candle</Typography>
                    <Typography className="grey-text" sx={{ fontSize: "12px" }}>
                      ID 0034
                    </Typography>
                  </Box>
                </Box>
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.788 14.222h17.329V1.788H1.787v12.434Zm17.766.875H1.35a.438.438 0 0 1-.437-.438V1.35c0-.242.195-.438.437-.438h18.204c.243 0 .438.196.438.438v13.31a.438.438 0 0 1-.438.438Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m19.429 14.629-.008.008h.11v-.111l-.007.008-.095.095Zm.095-13.153.008.008v-.11h-.11l.007.007.095.095ZM1.477 1.381l.006-.007h-.11v.11l.008-.008.096-.095Zm-.103 13.145v.11h.11l-.007-.007-.096-.095-.007-.008Zm.51-.4h17.138V1.884H1.883v12.242Zm17.672 1.066H1.35a.533.533 0 0 1-.533-.534V1.351c0-.294.238-.534.533-.534h18.205c.293 0 .532.24.532.534v13.308a.533.533 0 0 1-.532.533Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="m10.452 10.211.067-.026.173-.068.032-.013.025-.023 9.102-8.41a.438.438 0 0 0 .024-.618l-.133.125a.255.255 0 0 0-.361-.015l-8.929 9.048Zm0 0-.066-.026-.174-.068-.032-.013-.025-.023-9.102-8.41a.438.438 0 0 1 .594-.642l8.805 8.135 8.805-8.135-8.805 9.182Z"
                    fill="#646872"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                  <path
                    d="M19.946.99a.529.529 0 0 0-.37-.173h-.008a.543.543 0 0 0-.375.142l.124.134-.124-.134-8.74 8.075L1.713.959a.563.563 0 0 0-.375-.142h-.01a.53.53 0 0 0-.37.172m18.988 0-9.131 9.162a.532.532 0 0 1-.724 0L.987 1.741A.534.534 0 0 1 .958.99m18.988 0a.526.526 0 0 1 .141.382m-.14-.381.14.381M.958.99l.13.119m-.13-.12.13.119m0 0 .005.005m-.005-.005.005.005m-.005-.005.017-.008a.353.353 0 0 0-.012.013m-.005-.005.005.005m18.994.258a.533.533 0 0 1-.17.37l-9.102 8.41 9.272-8.78Zm-9.598 8.322.03-.028h-.134l.03.028h.074Z"
                    stroke="#646872"
                    strokeWidth=".365"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={9}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box id="white-label-active-brokers">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g filter="url(#a)" shapeRendering="crispEdges">
                    <rect
                      x="4"
                      y="4"
                      width="40"
                      height="40"
                      rx="7"
                      fill="#39445B"
                      fillOpacity=".2"
                    />
                    <rect
                      x="4.25"
                      y="4.25"
                      width="39.5"
                      height="39.5"
                      rx="6.75"
                      stroke="#39445B"
                      strokeWidth=".5"
                    />
                  </g>
                  <path
                    d="M15.429 22.143H32.57v-1.428a1.429 1.429 0 0 0-1.428-1.429H16.857a1.429 1.429 0 0 0-1.428 1.429v1.428Zm0 1.429v7.143a1.429 1.429 0 0 0 1.428 1.428h14.286a1.429 1.429 0 0 0 1.428-1.428v-7.143H15.43Zm1.428-5.715h14.286A2.857 2.857 0 0 1 34 20.715v10a2.857 2.857 0 0 1-2.857 2.857H16.857A2.857 2.857 0 0 1 14 30.715v-10a2.857 2.857 0 0 1 2.857-2.858Z"
                    fill="#fff"
                  />
                  <path
                    d="M21.143 16.429v1.428h5.714V16.43h-5.714Zm0-1.429h5.714a1.429 1.429 0 0 1 1.429 1.429v1.428a1.429 1.429 0 0 1-1.429 1.429h-5.714a1.429 1.429 0 0 1-1.429-1.429V16.43A1.429 1.429 0 0 1 21.143 15Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="a"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1855_36753"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1855_36753"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <Typography className="grey-text" sx={{ fontSize: "18px" }}>
                  Corretoras ativas
                </Typography>
                <Typography variant="h4" sx={{ margin: "10px 0" }}>
                  87
                </Typography>
                <Box
                  component={"span"}
                  className="top-cards-white-label-percent top-cards-white-label-percent-green"
                >
                  +30%
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box id="broker-highest-volume">
                <Box id="broker-highest-volume-top-filters">
                  <select
                    name="states"
                    className="broker-highest-volume-selects"
                  >
                    <option value="Global">Global</option>
                    <option value="Afeganistao">Afeganistão</option>
                    <option value="AfricaDoSul">África do Sul</option>
                    <option value="Albania">Albânia</option>
                    <option value="Alemanha">Alemanha</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                  </select>
                  <select
                    name="times"
                    className="broker-highest-volume-selects"
                  >
                    <option value="ultimas24h">Últimas 24 horas</option>
                    <option value="ultimos7dias">Últimos 7 dias</option>
                    <option value="ultimos15dias">Últimos 15 dias</option>
                    <option value="ultimos30dias">Últimos 30 dias</option>
                    <option value="6meses">Últimos 6 meses</option>
                  </select>
                </Box>
                <Box sx={{ padding: "0 15px" }}>
                  <Typography className="grey-text">
                    Corretora com
                    <br /> maior volume
                  </Typography>
                  <Typography sx={{ margin: "15px 0" }}>Bet Candle</Typography>
                  <Typography variant="h4">$ 234.234,00</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box id="broker-lower-volume">
                <Box id="broker-lower-volume-top-filters">
                  <select name="states" className="broker-lower-volume-selects">
                    <option value="Global">Global</option>
                    <option value="Afeganistao">Afeganistão</option>
                    <option value="AfricaDoSul">África do Sul</option>
                    <option value="Albania">Albânia</option>
                    <option value="Alemanha">Alemanha</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                  </select>
                  <select name="times" className="broker-lower-volume-selects">
                    <option value="ultimas24h">Últimas 24 horas</option>
                    <option value="ultimos7dias">Últimos 7 dias</option>
                    <option value="ultimos15dias">Últimos 15 dias</option>
                    <option value="ultimos30dias">Últimos 30 dias</option>
                    <option value="6meses">Últimos 6 meses</option>
                  </select>
                </Box>
                <Box sx={{ padding: "0 15px" }}>
                  <Typography className="grey-text">
                    Corretora com
                    <br /> maior volume
                  </Typography>
                  <Typography sx={{ margin: "15px 0" }}>Bet Candle</Typography>
                  <Typography variant="h4">$ 234.234,00</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box
                id="white-label-ranking"
                sx={{ height: `calc(${heightXs} - 192px)` }}
              >
                <Box id="white-label-ranking-top-card">
                  <Box>
                    <Typography variant="h6" className="grey-text">
                      Ranking
                    </Typography>
                  </Box>
                  <Box>
                    <select
                      name="states"
                      className="white-label-ranking-top-selects"
                    >
                      <option value="Global">Global</option>
                      <option value="Afeganistao">Afeganistão</option>
                      <option value="AfricaDoSul">África do Sul</option>
                      <option value="Albania">Albânia</option>
                      <option value="Alemanha">Alemanha</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                    </select>
                    <select
                      name="times"
                      className="white-label-ranking-top-selects"
                    >
                      <option value="ultimas24h">Últimas 24 horas</option>
                      <option value="ultimos7dias">Últimos 7 dias</option>
                      <option value="ultimos15dias">Últimos 15 dias</option>
                      <option value="ultimos30dias">Últimos 30 dias</option>
                      <option value="6meses">Últimos 6 meses</option>
                    </select>
                  </Box>
                </Box>
                <Box
                  id="brokers-items-content"
                  sx={{
                    height: `calc(${heightXs} - 255px)`,
                  }}
                >
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                  <Box className="broker-item-ranking">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={brasilRounded} alt="Brasil" />
                      <Typography
                        sx={{ marginLeft: "3px", marginRight: "5px" }}
                      >
                        Bet Candle
                      </Typography>
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="-0.00732422"
                          width="17"
                          height="3"
                          rx="1.5"
                          fill="#D6AF24"
                        />
                      </svg>
                    </Box>
                    <Typography>$ 234.234,00</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Box
                id="white-label-payments-card"
                sx={{ height: `calc(${heightXs} - 192px)` }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid #39445B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ padding: "10px" }} className="grey-text">
                    Pagamentos
                  </Typography>
                  <Box id="white-label-payments-card-filter">
                    <select
                      name="states"
                      className="white-label-payments-filter"
                    >
                      <option value="all">Todos os status</option>
                      <option value="paid">Pagos</option>
                      <option value="pending">Pendentes</option>
                      <option value="late">Atrasados</option>
                    </select>
                    <select
                      name="states"
                      className="white-label-payments-filter"
                    >
                      <option value="Global">Global</option>
                      <option value="br">Brasil</option>
                      <option value="usa">USA</option>
                      <option value="pt">Portugal</option>
                    </select>
                    <select
                      name="states"
                      className="white-label-payments-filter"
                    >
                      <option value="Global">Geral</option>
                      <option value="bet">Bet Candle</option>
                      <option value="pix">Pix Candle</option>
                      <option value="iq">IQ Candle</option>
                    </select>
                  </Box>
                </Box>
                <Box id="white-label-payments-item">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Box className="white-label-payment-item-tr">
                        <Typography
                          sx={{ paddingLeft: "30px " }}
                          className="white-label-payment-item-date"
                        >
                          Vencimento
                        </Typography>

                        <Typography
                          sx={{ marginLeft: "-30px " }}
                          className="white-label-payment-item-name"
                        >
                          Corretora
                        </Typography>
                        <Typography className="white-label-payment-item-state">
                          País
                        </Typography>
                        <Typography className="white-label-payment-item-roi">
                          ROI
                        </Typography>
                        <Typography className="white-label-payment-item-value">
                          Valor
                        </Typography>
                        <Typography className="white-label-payment-item-status-tr">
                          Status
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="white-label-payment-item">
                        <Box
                          className="white-label-payment-item-date grey-text"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <BpCheckbox />
                          <Typography>28 oct 2023</Typography>
                        </Box>
                        <Typography className="white-label-payment-item-name">
                          Bet Candle
                        </Typography>
                        <Typography className="white-label-payment-item-state">
                          Brasil
                        </Typography>
                        <Typography className="white-label-payment-item-roi">
                          2,3
                        </Typography>
                        <Typography className="white-label-payment-item-value">
                          $ 372.00,00
                        </Typography>
                        <Typography className="white-label-payment-item-status white-label-payment-item-status-pending">
                          Pendente
                        </Typography>
                        <svg
                          className="white-label-payment-item-options"
                          xmlns="http://www.w3.org/2000/svg"
                          width="5"
                          height="17"
                          viewBox="0 0 5 17"
                          fill="none"
                        >
                          <ellipse
                            cx="2.23101"
                            cy="14.976"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23101"
                            cy="8.49988"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23095"
                            cy="2.02381"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="white-label-payment-item">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="white-label-payment-item-date grey-text"
                        >
                          <BpCheckbox />
                          <Typography>28 oct 2023</Typography>
                        </Box>
                        <Typography className="white-label-payment-item-name">
                          Bet Candle
                        </Typography>
                        <Typography className="white-label-payment-item-state">
                          Brasil
                        </Typography>
                        <Typography className="white-label-payment-item-roi">
                          2,3
                        </Typography>
                        <Typography className="white-label-payment-item-value">
                          $ 372.00,00
                        </Typography>
                        <Typography className="white-label-payment-item-status white-label-payment-item-status-paid">
                          Pago
                        </Typography>
                        <svg
                          className="white-label-payment-item-options"
                          xmlns="http://www.w3.org/2000/svg"
                          width="5"
                          height="17"
                          viewBox="0 0 5 17"
                          fill="none"
                        >
                          <ellipse
                            cx="2.23101"
                            cy="14.976"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23101"
                            cy="8.49988"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23095"
                            cy="2.02381"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="white-label-payment-item">
                        <Box
                          className="white-label-payment-item-date grey-text"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <BpCheckbox />
                          <Typography>28 oct 2023</Typography>
                        </Box>
                        <Typography className="white-label-payment-item-name">
                          Bet Candle
                        </Typography>
                        <Typography className="white-label-payment-item-state">
                          Brasil
                        </Typography>
                        <Typography className="white-label-payment-item-roi">
                          2,3
                        </Typography>
                        <Typography className="white-label-payment-item-value">
                          $ 372.00,00
                        </Typography>
                        <Typography className="white-label-payment-item-status white-label-payment-item-status-overdue">
                          Em atraso
                        </Typography>
                        <svg
                          className="white-label-payment-item-options"
                          xmlns="http://www.w3.org/2000/svg"
                          width="5"
                          height="17"
                          viewBox="0 0 5 17"
                          fill="none"
                        >
                          <ellipse
                            cx="2.23101"
                            cy="14.976"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23101"
                            cy="8.49988"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23095"
                            cy="2.02381"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="white-label-payment-item">
                        <Box
                          className="white-label-payment-item-date grey-text"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <BpCheckbox />
                          <Typography>28 oct 2023</Typography>
                        </Box>
                        <Typography className="white-label-payment-item-name">
                          Bet Candle
                        </Typography>
                        <Typography className="white-label-payment-item-state">
                          Brasil
                        </Typography>
                        <Typography className="white-label-payment-item-roi">
                          2,3
                        </Typography>
                        <Typography className="white-label-payment-item-value">
                          $ 372.00,00
                        </Typography>
                        <Typography className="white-label-payment-item-status white-label-payment-item-status-pending">
                          Pendente
                        </Typography>
                        <svg
                          className="white-label-payment-item-options"
                          xmlns="http://www.w3.org/2000/svg"
                          width="5"
                          height="17"
                          viewBox="0 0 5 17"
                          fill="none"
                        >
                          <ellipse
                            cx="2.23101"
                            cy="14.976"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23101"
                            cy="8.49988"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                          <ellipse
                            cx="2.23095"
                            cy="2.02381"
                            rx="2.23095"
                            ry="2.02381"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <></>
      </Grid>
    </BaseLayoutPage>
  );
};

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  Grid,
  InputBase,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "22px",
  backgroundColor: "#212836",
  "&:hover": {
    backgroundColor: "#212836",
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "100%",
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
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    color: "#fff",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.30)", // Defina a cor do texto de espaço reservado aqui
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#181C25",
  ...theme.typography.body2,
  boxShadow: "none",
  padding: theme.spacing(1),
  // textAlign: "center",
  color: "#FFF",
  borderRadius: "15px",
  border: "1px solid #fff",
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 14,
  height: 14,
  border: "1px solid #2C3240",
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

export const Campaigns: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const height = isLg ? "82vh" : "32vh";

  return (
    <BaseLayoutPage>
      <Grid container spacing={1} sx={{ padding: "0 10px" }}>
        <Grid item xs={12}>
          <Typography className="page-title">Campanhas</Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={2}>
          <Box id="campaigns-left-menu" style={{ height }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid #39445B",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ margin: "10px 0" }}
                className="green-button new-email-button"
                variant="contained"
              >
                Compor novo e-mail
              </Button>
            </Box>
            <Box>
              <Box className="campaign-left-menu-filter">
                <Button
                  className="campaign-left-menu-filter-button campaign-left-menu-filter-button-active"
                  variant="contained"
                >
                  Caixa de entrada
                </Button>
                <span className="campaign-left-menu-filter-value">76</span>
              </Box>
              <Box className="campaign-left-menu-filter">
                <Button
                  className="campaign-left-menu-filter-button"
                  variant="contained"
                >
                  Enviados
                </Button>
                <span className="campaign-left-menu-filter-value">53</span>
              </Box>
              <Box className="campaign-left-menu-filter">
                <Button
                  className="campaign-left-menu-filter-button"
                  variant="contained"
                >
                  Apagados
                </Button>
                <span className="campaign-left-menu-filter-value">76</span>
              </Box>
              <Box className="campaign-left-menu-filter">
                <Button
                  className="campaign-left-menu-filter-button"
                  variant="contained"
                >
                  Arquivados
                </Button>
                <span className="campaign-left-menu-filter-value">76</span>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={10}>
          <Box id="campaigns-right-table" style={{ height }}>
            <Box id="campaigns-main-head-box">
              <Box sx={{ display: "flex", padding: "9.3px" }}>
                <Box>
                  <Search
                    sx={
                      {
                        // display: { xs: "none", sm: "block" },
                      }
                    }
                  >
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
                  component={"select"}
                  name="message-filters"
                  id="campaigns-select"
                  sx={{ margin: "0 10px 0 10px" }}
                >
                  <option value="all">Tudo</option>
                  <option value="unread">Não lidos</option>
                  <option value="read">Lidos</option>
                  <option value="fav">Favoritos</option>
                </Box>
                <Box>
                  <svg
                    id="to-file"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0554 17.9874H19.6725M9 9H24.7279V13.4937H9V9ZM10.1234 13.4937V23.6045C10.1234 23.9025 10.2418 24.1882 10.4525 24.3989C10.6631 24.6096 10.9489 24.7279 11.2468 24.7279H22.4811C22.779 24.7279 23.0648 24.6096 23.2755 24.3989C23.4861 24.1882 23.6045 23.9025 23.6045 23.6045V13.4937H10.1234Z"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="1.12342"
                    />
                    <rect
                      width="33"
                      height="33"
                      rx="5.68965"
                      fill="white"
                      fillOpacity="0.0"
                    />
                  </svg>
                </Box>
                <Box>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.72803 11.043H24.1361H9.72803Z" fill="black" />
                    <path
                      d="M9.72803 11.043H24.1361"
                      stroke="#8B8D92"
                      strokeWidth="1.30983"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11.0381 11.043L11.8567 24.1412C11.8956 24.8981 12.4462 25.4511 13.1666 25.4511H20.6981C21.4213 25.4511 21.9616 24.8981 22.0079 24.1412L22.8265 11.043"
                      stroke="#8B8D92"
                      strokeWidth="1.30983"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3128 11.0435V9.4062C14.3124 9.27709 14.3376 9.14918 14.3868 9.02982C14.4361 8.91046 14.5084 8.80202 14.5997 8.71072C14.691 8.61942 14.7994 8.54708 14.9188 8.49784C15.0382 8.44861 15.1661 8.42345 15.2952 8.42383H18.5697C18.6989 8.42345 18.8268 8.44861 18.9461 8.49784C19.0655 8.54708 19.1739 8.61942 19.2652 8.71072C19.3565 8.80202 19.4289 8.91046 19.4781 9.02982C19.5273 9.14918 19.5525 9.27709 19.5521 9.4062V11.0435M16.9325 13.6631V22.8319M13.9854 13.6631L14.3128 22.8319M19.8796 13.6631L19.5521 22.8319"
                      stroke="#8B8D92"
                      strokeWidth="1.30983"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      width="33"
                      height="33"
                      rx="5.68965"
                      fill="white"
                      fillOpacity="0.00"
                    />
                  </svg>
                </Box>
              </Box>
              <Box className="grey-text" sx={{ marginRight: "10px" }}>
                <span>1-50 </span>
                de
                <span> 234</span>
              </Box>
            </Box>
            <Box id="campaigns-messages-container">
              <Stack spacing={1}>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#272B38"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#e2c424"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#272B38"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#e2c424"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#272B38"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#e2c424"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#272B38"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BpCheckbox
                      // color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        className="campaings-messages-star-icon"
                        d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
                        fill="#272B38"
                        stroke="#525560"
                        strokeWidth="0.354167"
                      />
                    </svg>
                    <Typography className="campaigns-message-name">
                      Marcio Moura
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography className="campaigns-message-subject">
                      Solicitação de nova corretora
                    </Typography>
                    <Typography className="campaigns-message-message grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elconsectetur adipi...
                    </Typography>
                  </Box>
                  <Typography className="campaigns-message-message-hour">
                    5:39PM
                  </Typography>
                </Item>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

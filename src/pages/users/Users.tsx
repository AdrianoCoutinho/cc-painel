import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { userCount } from "../../api";
import brasilRounded from "../../assets/svg/brasil-rounded.svg";
import portugalRounded from "../../assets/svg/portugal-rounded.svg";
import { UsersTable } from "../../shared/components";

const thalesRounded = "https://i.pravatar.cc/150?img=8";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

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

export const Users: React.FC = () => {
  const [usersNumber, setUsersNumber] = React.useState({
    value: 0,
    percent: 0,
  });

  const getUsersNumber = async () => {
    const result = await userCount();
    setUsersNumber({
      value: result.data.user_count,
      percent: 0,
    });
  };

  React.useEffect(() => {
    getUsersNumber();
  }, []);

  return (
    <BaseLayoutPage>
      <Grid container spacing={1} sx={{ padding: "5px" }}>
        <Grid item xs={12}>
          <Typography component={"span"} id="title-page-users">
            Usuários
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={2}>
          <Box id="users-filter-box">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1519_21990)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4.39067C13.9999 4.74426 13.8594 5.08334 13.6093 5.33333L10 8.94267V13.892C10 14.017 9.96808 14.14 9.90721 14.2492C9.84634 14.3584 9.75857 14.4502 9.65223 14.5159C9.54589 14.5816 9.42451 14.6191 9.29962 14.6247C9.17473 14.6303 9.05048 14.6039 8.93867 14.548L6.46067 13.3093C6.32225 13.2401 6.20583 13.1337 6.12447 13.0021C6.0431 12.8705 6.00001 12.7188 6 12.564V8.94267L2.39067 5.33333C2.1406 5.08334 2.00008 4.74426 2 4.39067V3ZM3.33333 3.33333V4.39067L7.04 8.09733C7.13297 8.19018 7.20672 8.30044 7.25705 8.42181C7.30738 8.54318 7.33331 8.67328 7.33333 8.80467V12.2547L8.66667 12.9213V8.80467C8.66667 8.53933 8.772 8.28467 8.96 8.098L12.6667 4.39V3.33333H3.33333Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1519_21990">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Filtros
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box className="users-filter-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar por nome, email ou ID..."
                    aria-label="Buscar usuário"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className="filter-section">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                  component={"section"}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography className="grey-text filter-title">
                      País
                    </Typography>
                    <select name="states" id="states-select">
                      <option value="Global">Global</option>
                      <option value="br">Brasil</option>
                      <option value="usa">USA</option>
                      <option value="pt">Portugal</option>
                    </select>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography className="grey-text filter-title">
                      Corretora
                    </Typography>
                    <select name="states" id="broker-select">
                      <option value="Global">Geral</option>
                      <option value="br">Brasil</option>
                      <option value="usa">USA</option>
                      <option value="pt">Portugal</option>
                    </select>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} className="filter-section">
                <Typography className="grey-text filter-title">
                  Ticket Médio
                </Typography>
                <Box id="filter-quantity">
                  <input
                    type="number"
                    id="quantity-min"
                    name="quantitymin"
                    placeholder="Mínimo"
                    aria-label="Ticket médio mínimo"
                  />
                  <span className="filter-quantity-separator">—</span>
                  <input
                    type="number"
                    id="quantity-max"
                    name="quantitymax"
                    placeholder="Máximo"
                    aria-label="Ticket médio máximo"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} className="filter-section">
              <Box
                component={"section"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  className="grey-text task-left-title"
                >
                  Status
                </Typography>
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Favoritos"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Conta marketing"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Selo 2k"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Selo 20k"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Selo 200m"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Bloqueados"
                  labelPlacement="end"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={10}>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12} md={12} lg={3.5}>
              <Box id="top-card-new-users">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <svg
                    id="new-users-icon-card"
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2498 13.0217C13.2934 13.0217 15.7607 10.5544 15.7607 7.51087C15.7607 4.4673 13.2934 2 10.2498 2C7.20625 2 4.73895 4.4673 4.73895 7.51087C4.73895 10.5544 7.20625 13.0217 10.2498 13.0217Z"
                      stroke="white"
                      strokeWidth="2.54348"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.34772 21.5001C1.34772 17.2609 4.73902 13.0218 10.2499 13.0218C15.7608 13.0218 19.1521 17.2609 19.1521 21.5001"
                      stroke="white"
                      strokeWidth="2.54348"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Box id="brokers-users-top-selects">
                    <Box sx={{ marginRight: "5px" }}>
                      <select name="states" id="brokers-users-select">
                        <option value="Global">Geral</option>
                        <option value="br">Best flow</option>
                        <option value="usa">iq flow</option>
                        <option value="pt">ultron</option>
                      </select>
                    </Box>
                    <Box>
                      <select name="states" id="brokers-users-time-select">
                        <option value="7days">Últimos 7 dias</option>
                        <option value="24h">Últimas 24h</option>
                        <option value="15days">Últimos 15 dias</option>
                        <option value="30days">Últimos 30 dias</option>
                        <option value="6mouths">6 meses</option>
                      </select>
                    </Box>
                  </Box>
                </Box>
                <Typography className="grey-text " sx={{ fontSize: "15px" }}>
                  Novos usuarios
                </Typography>
                <Typography id="new-users-value" variant="h2">
                  {usersNumber.value.toLocaleString("pt-BR")}
                </Typography>
                <Typography id="new-users-percent" component={"span"}>
                  {usersNumber.percent}%
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={12} lg={3.5}>
              <Box id="top-card-three-brokers">
                <Box id="brokers-podium-top-selects">
                  <Typography
                    className="grey-text"
                    component={"span"}
                    sx={{ fontSize: "13px" }}
                  >
                    Top 3 Corretoras
                  </Typography>
                  <Box id="podium-users-select">
                    <Box sx={{ marginRight: "5px" }}>
                      <select
                        name="brokerPodiumState"
                        id="brokers-podium-select"
                      >
                        <option value="Global">Global</option>
                        <option value="br">Best flow</option>
                        <option value="usa">iq flow</option>
                        <option value="pt">ultron</option>
                      </select>
                    </Box>
                    <Box>
                      <select
                        name="brokerPodiumDays"
                        id="brokers-podium-day-select"
                      >
                        <option value="7days">Últimos 7 dias</option>
                        <option value="24h">Últimas 24h</option>
                        <option value="15days">Últimos 15 dias</option>
                        <option value="30days">Últimos 30 dias</option>
                        <option value="6mouths">6 meses</option>
                      </select>
                    </Box>
                  </Box>
                </Box>
                <Grid container spacing={0.7} sx={{ marginTop: "10px" }}>
                  <Grid item xs={5}>
                    <Typography
                      align="left"
                      className="grey-text podium-titles text-center"
                    >
                      Nome
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      align="left"
                      className="grey-text podium-titles"
                    >
                      Novos usuários
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      align="left"
                      className="grey-text podium-titles"
                    >
                      Depósitos
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ display: "flex" }}>
                    <Typography align="left" className="broker-top-name">
                      TradeFlow
                    </Typography>
                    <img alt="Brasil" src={brasilRounded} />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="left" className="broker-top-1">
                      3.245
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      align="left"
                      className="broker-top-1 green-text"
                    >
                      $832.742,03
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ display: "flex" }}>
                    <Typography align="left" className="broker-top-name">
                      IQ Flow
                    </Typography>
                    <img alt="Brasil" src={portugalRounded} />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="left" className="broker-top-1">
                      2.346
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      align="left"
                      className="broker-top-1 green-text"
                    >
                      $1.046.407,94
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ display: "flex" }}>
                    <Typography align="left" className="broker-top-name">
                      TradeFlow
                    </Typography>
                    <img alt="Brasil" src={brasilRounded} />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography align="left" className="broker-top-1">
                      3.245
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      align="left"
                      className="broker-top-1 green-text"
                    >
                      $832.742,03
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={12} lg={5}>
              <Box id="top-card-three-users">
                <Box id="top-three-body">
                  <Typography className="grey-text" align="center">
                    Top 3 usuários
                  </Typography>
                  <Box sx={{ display: "flex", gap: "6px" }}>
                    <select name="states" id="user-podium-states-select">
                      <option value="Global">Global</option>
                      <option value="br">Brasil</option>
                      <option value="usa">USA</option>
                      <option value="pt">Portugal</option>
                    </select>
                    <select name="states" id="user-broker-select">
                      <option value="geral">Geral</option>
                      <option value="br">Brasil</option>
                      <option value="usa">USA</option>
                      <option value="pt">Portugal</option>
                    </select>
                    <select name="userPodiumDays" id="user-podium-day-select">
                      <option value="7days">Últimos 7 dias</option>
                      <option value="24h">Últimas 24h</option>
                      <option value="15days">Últimos 15 dias</option>
                      <option value="30days">Últimos 30 dias</option>
                      <option value="6mouths">6 meses</option>
                    </select>
                  </Box>
                </Box>
                <Grid container sx={{ marginTop: "10px", textAlign: "center" }}>
                  <Grid item xs={4}>
                    <Typography variant="body1" className="grey-text">
                      Nome
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" className="grey-text">
                      Corretora
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" className="grey-text">
                      Depósito
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-names">
                    <img alt="Daniel" src={thalesRounded} />
                    <Typography align="left" className="broker-top-name">
                      Daniel Costa
                    </Typography>
                    <img alt="Brasil" src={brasilRounded} />
                  </Grid>
                  <Grid item xs={4} className="top-three-brokers">
                    <Typography variant="body1">IQ Flow</Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-money">
                    <Typography className="green-text" variant="body1">
                      $18.567,34
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-names">
                    <img alt="Daniel" src={thalesRounded} />
                    <Typography align="left" className="broker-top-name">
                      Daniel Costa
                    </Typography>
                    <img alt="Brasil" src={brasilRounded} />
                  </Grid>
                  <Grid item xs={4} className="top-three-brokers">
                    <Typography variant="body1">IQ Flow</Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-money">
                    <Typography className="green-text" variant="body1">
                      $18.567,34
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-names">
                    <img alt="Daniel" src={thalesRounded} />
                    <Typography align="left" className="broker-top-name">
                      Daniel Costa
                    </Typography>
                    <img alt="Brasil" src={brasilRounded} />
                  </Grid>
                  <Grid item xs={4} className="top-three-brokers">
                    <Typography variant="body1">IQ Flow</Typography>
                  </Grid>
                  <Grid item xs={4} className="top-three-money">
                    <Typography className="green-text" variant="body1">
                      $18.567,34
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box id="users-table-box">
                <UsersTable />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

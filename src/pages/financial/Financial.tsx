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
import brasilRounded from "../../assets/svg/brasil-rounded.svg";
import { FinancialTable } from "../../shared/components";

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

export const Financial: React.FC = () => {
  return (
    <BaseLayoutPage>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Typography component={"span"} id="title-page-financial">
            Financeiro
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={2}>
          <Box id="financial-filter-box">
            <Grid container spacing={1}>
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
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  component={"section"}
                >
                  <Box sx={{ width: "48%" }}>
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
                  <Box sx={{ width: "48%" }}>
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
            </Grid>
            <Grid item xs={12}>
              <Box
                component={"section"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingBottom: "15px",
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
                  label="Pendente"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Aprovado"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Recusado"
                  labelPlacement="end"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                component={"section"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingBottom: "15px",
                }}
              >
                <Typography
                  variant="body2"
                  className="grey-text task-left-title"
                >
                  Transação
                </Typography>
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Saque"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Depósito"
                  labelPlacement="end"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                component={"section"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingBottom: "15px",
                }}
              >
                <Typography
                  variant="body2"
                  className="grey-text task-left-title"
                >
                  Método
                </Typography>
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Pix"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Boleto"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Transferência"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Crédito"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<BpCheckbox />}
                  className="form-control-label-tasks-checkbox-label"
                  label="Criptomoeda"
                  labelPlacement="end"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={10}>
          <Grid container>
            <Grid item sm={12} xs={12} md={12} lg={5}>
              <Box id="top-card-three-financial">
                <Box id="top-three-financial-body">
                  <Typography className="grey-text" align="center">
                    Top 3 saques
                  </Typography>
                  <Box>
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
            <Grid item sm={12} xs={12} md={12} lg={2.33}>
              <Box id="pending-requests">
                <Box id="top-card-financial-pending-requests-content">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_1601_19857)">
                        <rect
                          x="4"
                          y="4"
                          width="40"
                          height="40"
                          rx="7"
                          fill="#E2C424"
                          fillOpacity="0.2"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="4.25"
                          y="4.25"
                          width="39.5"
                          height="39.5"
                          rx="6.75"
                          stroke="#E2C424"
                          strokeOpacity="0.8"
                          strokeWidth="0.5"
                          shapeRendering="crispEdges"
                        />
                      </g>
                      <path
                        d="M24 17.8889V24L27.8889 26.2222M34 24C34 25.3132 33.7413 26.6136 33.2388 27.8268C32.7363 29.0401 31.9997 30.1425 31.0711 31.0711C30.1425 31.9997 29.0401 32.7363 27.8268 33.2388C26.6136 33.7413 25.3132 34 24 34C22.6868 34 21.3864 33.7413 20.1732 33.2388C18.9599 32.7363 17.8575 31.9997 16.9289 31.0711C16.0003 30.1425 15.2638 29.0401 14.7612 27.8268C14.2587 26.6136 14 25.3132 14 24C14 21.3478 15.0536 18.8043 16.9289 16.9289C18.8043 15.0536 21.3478 14 24 14C26.6522 14 29.1957 15.0536 31.0711 16.9289C32.9464 18.8043 34 21.3478 34 24Z"
                        stroke="white"
                        strokeWidth="1.61616"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <filter
                          id="filter0_d_1601_19857"
                          x="0"
                          y="0"
                          width="48"
                          height="48"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1601_19857"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1601_19857"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="17"
                      viewBox="0 0 5 17"
                      fill="none"
                    >
                      <ellipse
                        cx="2.23104"
                        cy="14.976"
                        rx="2.23095"
                        ry="2.02381"
                        fill="white"
                      />
                      <ellipse
                        cx="2.23104"
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
                  </div>
                </Box>
                <Typography id="top-card-financial-pending-requests-title">
                  Solicitações
                  <br />
                  pendentes
                </Typography>
                <Typography id="top-card-financial-pending-requests-value">
                  78
                </Typography>
                <Box id="top-card-financial-pending-requests-bottom-info">
                  <div className="top-card-financial-pending-requests-bottom-broker">
                    TradeFlow
                  </div>
                  <Box
                    sx={{ marginLeft: "6px" }}
                    component={"div"}
                    className="top-card-financial-pending-requests-bottom-broker"
                  >
                    Últimas 24h
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={12} lg={2.33}>
              <Box id="average-withdrawal-ticket">
                <Box id="top-card-financial-average-withdrawal-ticket-content">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7C0 3.13401 3.13401 0 7 0H33C36.866 0 40 3.13401 40 7V33C40 36.866 36.866 40 33 40H7C3.13401 40 0 36.866 0 33V7Z"
                        fill="#39445B"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M19.5988 30C18.0819 30 16.7943 29.7531 15.736 29.2592C14.6777 28.7477 13.8663 28.0333 13.3018 27.1161C12.755 26.1812 12.4816 25.0876 12.4816 23.8353H14.8629C14.8629 24.435 15.004 25.0435 15.2862 25.6609C15.586 26.2782 16.0799 26.7986 16.7678 27.2219C17.4557 27.6276 18.3994 27.8304 19.5988 27.8304C21.1863 27.8304 22.3593 27.4953 23.1178 26.825C23.8939 26.1548 24.2819 25.3875 24.2819 24.5232C24.2819 23.6765 23.9379 22.971 23.25 22.4066C22.5621 21.8421 21.5655 21.4982 20.2603 21.3747L18.5141 21.216C16.8208 21.0572 15.4714 20.5457 14.466 19.6814C13.4606 18.8171 12.9579 17.5824 12.9579 15.9773C12.9579 14.866 13.2225 13.9224 13.7516 13.1463C14.2984 12.3525 15.0569 11.744 16.027 11.3207C17.0148 10.8973 18.1701 10.6857 19.493 10.6857C20.8159 10.6857 21.9536 10.9238 22.9061 11.4C23.8762 11.8587 24.6259 12.5377 25.155 13.4373C25.6842 14.3192 25.9488 15.3864 25.9488 16.6387H23.5675C23.5675 16.0037 23.4264 15.404 23.1442 14.8396C22.862 14.2575 22.421 13.7813 21.8213 13.4109C21.2392 13.0404 20.4631 12.8552 19.493 12.8552C18.6287 12.8552 17.8879 12.9963 17.2705 13.2786C16.6708 13.5431 16.2034 13.9136 15.8683 14.3898C15.5508 14.866 15.392 15.3952 15.392 15.9773C15.392 16.7357 15.6654 17.3972 16.2122 17.9616C16.759 18.5084 17.5969 18.8347 18.7257 18.9406L20.472 19.0993C22.3593 19.2757 23.8674 19.8313 24.9963 20.7662C26.1428 21.6834 26.716 22.9357 26.716 24.5232C26.716 25.6168 26.425 26.5781 25.8429 27.4071C25.2608 28.2185 24.4406 28.8535 23.3823 29.3121C22.324 29.7707 21.0628 30 19.5988 30ZM18.4611 33.4131V29.5502H20.7365V33.4131H18.4611ZM18.3553 11.9821V8.11926H20.6307V11.9821H18.3553Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="17"
                      viewBox="0 0 5 17"
                      fill="none"
                    >
                      <ellipse
                        cx="2.23104"
                        cy="14.976"
                        rx="2.23095"
                        ry="2.02381"
                        fill="white"
                      />
                      <ellipse
                        cx="2.23104"
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
                  </div>
                </Box>
                <Typography id="top-card-financial-average-withdrawal-ticket-title">
                  Ticket médio
                  <br />
                  do saque
                </Typography>
                <Typography id="top-card-financial-average-withdrawal-ticket-value">
                  $ 245,32
                </Typography>
                <Box id="top-card-financial-average-withdrawal-bottom-info">
                  <div className="top-card-financial-pending-requests-bottom-broker">
                    Últimas 24h
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={12} lg={2.33}>
              <Box id="amount-in-loot">
                <Box id="top-card-financial-amount-in-loot-ticket-content">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7C0 3.13401 3.13401 0 7 0H33C36.866 0 40 3.13401 40 7V33C40 36.866 36.866 40 33 40H7C3.13401 40 0 36.866 0 33V7Z"
                        fill="#39445B"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M19.5988 30C18.0819 30 16.7943 29.7531 15.736 29.2592C14.6777 28.7477 13.8663 28.0333 13.3018 27.1161C12.755 26.1812 12.4816 25.0876 12.4816 23.8353H14.8629C14.8629 24.435 15.004 25.0435 15.2862 25.6609C15.586 26.2782 16.0799 26.7986 16.7678 27.2219C17.4557 27.6276 18.3994 27.8304 19.5988 27.8304C21.1863 27.8304 22.3593 27.4953 23.1178 26.825C23.8939 26.1548 24.2819 25.3875 24.2819 24.5232C24.2819 23.6765 23.9379 22.971 23.25 22.4066C22.5621 21.8421 21.5655 21.4982 20.2603 21.3747L18.5141 21.216C16.8208 21.0572 15.4714 20.5457 14.466 19.6814C13.4606 18.8171 12.9579 17.5824 12.9579 15.9773C12.9579 14.866 13.2225 13.9224 13.7516 13.1463C14.2984 12.3525 15.0569 11.744 16.027 11.3207C17.0148 10.8973 18.1701 10.6857 19.493 10.6857C20.8159 10.6857 21.9536 10.9238 22.9061 11.4C23.8762 11.8587 24.6259 12.5377 25.155 13.4373C25.6842 14.3192 25.9488 15.3864 25.9488 16.6387H23.5675C23.5675 16.0037 23.4264 15.404 23.1442 14.8396C22.862 14.2575 22.421 13.7813 21.8213 13.4109C21.2392 13.0404 20.4631 12.8552 19.493 12.8552C18.6287 12.8552 17.8879 12.9963 17.2705 13.2786C16.6708 13.5431 16.2034 13.9136 15.8683 14.3898C15.5508 14.866 15.392 15.3952 15.392 15.9773C15.392 16.7357 15.6654 17.3972 16.2122 17.9616C16.759 18.5084 17.5969 18.8347 18.7257 18.9406L20.472 19.0993C22.3593 19.2757 23.8674 19.8313 24.9963 20.7662C26.1428 21.6834 26.716 22.9357 26.716 24.5232C26.716 25.6168 26.425 26.5781 25.8429 27.4071C25.2608 28.2185 24.4406 28.8535 23.3823 29.3121C22.324 29.7707 21.0628 30 19.5988 30ZM18.4611 33.4131V29.5502H20.7365V33.4131H18.4611ZM18.3553 11.9821V8.11926H20.6307V11.9821H18.3553Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="17"
                      viewBox="0 0 5 17"
                      fill="none"
                    >
                      <ellipse
                        cx="2.23104"
                        cy="14.976"
                        rx="2.23095"
                        ry="2.02381"
                        fill="white"
                      />
                      <ellipse
                        cx="2.23104"
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
                  </div>
                </Box>
                <Typography id="top-card-financial-amount-in-loot-ticket-title">
                  Valor total
                  <br />
                  Em saque
                </Typography>
                <Typography id="top-card-financial-amount-in-loot-ticket-value">
                  1.345.234,00
                </Typography>
                <Box id="top-card-financial-amount-in-loot-bottom-info">
                  <Box
                    sx={{ marginTop: "10px" }}
                    component={"div"}
                    className="top-card-financial-pending-requests-bottom-broker"
                  >
                    Últimas 24h
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                background: " #2128367f",
                marginTop: "10px",
                borderRadius: "22px",
              }}
            >
              <FinancialTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

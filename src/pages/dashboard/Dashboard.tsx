import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { getTotalRecipeOfTheDay } from "../../api";
import ArrowIcon from "../../assets/svg/arrow.svg";
import MoneyIcon from "../../assets/svg/money-icon.svg";
import TotalUsersIcon from "../../assets/svg/totalUsersIcon.svg";
import { CollumChart } from "../../shared/components/collum-chart/CollumChart";
import { DonoutChart } from "../../shared/components/donout-chart/DonoutChart";
import { LineChartMouth } from "../../shared/components/line-chart-mouth/LineChartMouth";
import { LineChartHour } from "../../shared/components/linecharthour/LineChartHour";
import StateDeposits from "../../shared/components/state-deposits/StateDeposits";
import "./style.css";

export const Dashboard: React.FC = () => {
  const LOCAL_STORAGE_KEY__ACCESS_TOKEN = "APP_ACCESS_TOKEN";

  const [, setAcessToken] = useState<string>();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    if (accessToken) {
      setAcessToken(JSON.stringify(accessToken));
    } else {
      setAcessToken(undefined);
    }
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let variantHeader: "h3" | "h4" | "h5" | "h6" = "h4";

  if (isSmallScreen) {
    variantHeader = "h6";
  } else if (isMediumScreen) {
    variantHeader = "h3";
  } else if (isLargeScreen) {
    variantHeader = "h4";
  }

  return (
    <React.Fragment>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Typography component={"span"} id="title-page-dashboard">
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box className="box-transactions green-info">
                <img
                  className="arrowIcon green-arrow"
                  src={ArrowIcon}
                  alt="entrada"
                />
                <Typography className="box-subtitle" variant="subtitle1">
                  Entrada
                </Typography>
                <Typography className="box-value" variant={variantHeader}>
                  $2.000.000,00
                </Typography>
                <Box className="box-percent">
                  <span className="percent green-percent">10%</span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box className="box-transactions red-info">
                <img
                  className="arrowIcon red-arrow rotate180"
                  src={ArrowIcon}
                  alt="saída"
                />
                <Typography className="box-subtitle" variant="subtitle1">
                  Saída
                </Typography>
                <Typography className="box-value" variant={variantHeader}>
                  $500.000,00
                </Typography>
                <Box className="box-percent">
                  <span className="percent red-percent">10%</span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box className="default-box">
                <img
                  className="default-icon"
                  src={TotalUsersIcon}
                  alt="saída"
                />
                <Typography className="box-subtitle" variant="subtitle1">
                  Total de usuários
                </Typography>
                <Typography className="box-value" variant={variantHeader}>
                  2.500.300
                </Typography>
                <Box className="box-percent">
                  <span className="percent red-percent">10%</span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ padding: "5px" }}>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Box className="default-box">
                    <LineChartMouth />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Box
                    sx={{
                      minHeight: "237px",
                    }}
                    className="default-box"
                  >
                    <img
                      className="default-icon"
                      src={TotalUsersIcon}
                      alt="saída"
                    />

                    <Typography className="box-subtitle" variant="subtitle1">
                      Lucro geral
                    </Typography>
                    <Box id="overall-profit-chart-collum">
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <Typography className="box-value" variant={"h5"}>
                            10.000.000,00
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            aalignItems: "center",
                          }}
                        >
                          <DonoutChart seriesData={[30, 70]} scale={1} />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box className="box-percent">
                      <span className="percent green-percent">10%</span>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box className="default-box">
                <img
                  className="default-icon"
                  src={MoneyIcon}
                  alt="Receita do dia"
                />
                <Typography className="box-subtitle" variant="subtitle1">
                  Receita do dia
                </Typography>
                <Typography className="box-value" variant={"h5"}>
                  $10.000.000,00
                </Typography>
                <LineChartHour />
                <Box className="box-percent" sx={{ padding: "0 0 18px 25px" }}>
                  <span className="percent red-percent">10%</span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box className="default-box">
                <img
                  className="default-icon"
                  src={MoneyIcon}
                  alt="Visitas de hoje"
                />
                <Typography className="box-subtitle" variant="subtitle1">
                  Visitas de hoje
                </Typography>
                <Typography className="box-value" variant={"h5"}>
                  100.000
                </Typography>
                <CollumChart />
                <Box className="box-percent" sx={{ padding: "0 0 18px 25px" }}>
                  <span className="percent red-percent">10%</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box id="box-total-states">
            <Box>
              <img
                className="default-icon"
                src={MoneyIcon}
                alt="Receita do dia"
              />
              <Typography className="box-subtitle" variant="subtitle1">
                Depósitos por países
              </Typography>
              <Box
                id="state-box"
                sx={{
                  height: "718px",
                  overflow: "auto",
                }}
              >
                <StateDeposits />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

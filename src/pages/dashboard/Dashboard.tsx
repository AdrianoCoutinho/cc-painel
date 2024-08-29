import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  depositTotal,
  getTotalRecipeOfTheDay,
  userCount,
  withdrawTotal,
} from "../../api";
import ArrowEntryIcon from "../../assets/svg/arrowEntry.svg";
import ArrowExitcon from "../../assets/svg/arrowExit.svg";
import logo from "../../assets/svg/logo.svg";
import TotalUsersIcon from "../../assets/svg/totalUsersIcon.svg";
import { CollumChart } from "../../shared/components/collum-chart/CollumChart";
import { DonoutChart } from "../../shared/components/donout-chart/DonoutChart";
import { LineChartMouth } from "../../shared/components/line-chart-mouth/LineChartMouth";
import { LineChartHour } from "../../shared/components/linecharthour/LineChartHour";
import StateDeposits from "../../shared/components/state-deposits/StateDeposits";
import "./style.css";

export const Dashboard: React.FC = () => {
  const seriesData = [66, 34]; // Sua série dinâmica

  const LOCAL_STORAGE_KEY__ACCESS_TOKEN = "APP_ACCESS_TOKEN";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setAcessToken] = useState<string>();

  const [entry, setEntry] = useState({
    value: 0,
    percent: 0,
  });

  const [exit, setExit] = useState({
    value: 0,
    percent: 0,
  });

  const [usersNumber, setUsersNumber] = useState({
    value: 0,
    percent: 0,
  });

  const [totalRecipeOfTheDay, setTotalRecipeOfTheDay] = useState("");

  const getEntry = async () => {
    const result = await depositTotal();
    setEntry({
      value: result.data.deposit_sum,
      percent: 0,
    });
  };

  const getExit = async () => {
    const result = await withdrawTotal();
    setExit({
      value: result.data.withdraw_sum,
      percent: 0,
    });
  };

  const getUsersNumber = async () => {
    const result = await userCount();
    setUsersNumber({
      value: result.data.user_count,
      percent: 0,
    });
  };

  const getRecipeOfTheDay = async () => {
    const result = await getTotalRecipeOfTheDay();
    setTotalRecipeOfTheDay(result.toString());
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    if (accessToken) {
      setAcessToken(JSON.stringify(accessToken));
      getEntry();
      getExit();
      getUsersNumber();
      getRecipeOfTheDay();
    } else {
      setAcessToken(undefined);
    }
  }, []);

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
              <Box id="entry-box">
                <Typography variant={"body1"}>
                  <img id="arrowEntryIcon" src={ArrowEntryIcon} alt="entrada" />
                </Typography>
                <Typography id="entry-sub-title" variant="subtitle1">
                  Entrada
                </Typography>
                <Typography id="entry-value" variant="h3">
                  $ {entry.value}
                </Typography>
                <Typography id="entry-percent" variant="h6">
                  {entry.percent}%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box id="exit-box">
                <Typography variant={"body1"}>
                  <img id="arrowExitIcon" src={ArrowExitcon} alt="entrada" />
                </Typography>
                <Typography id="exit-sub-title" variant="subtitle1">
                  Saída
                </Typography>
                <Typography id="entry-value" variant="h3">
                  $ {exit.value}
                </Typography>
                <Typography id="exit-percent" variant="h6">
                  {exit.percent}%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box id="box-total-users">
                <Typography variant={"body1"}>
                  <img id="totalUsersIcon" src={TotalUsersIcon} alt="saída" />
                </Typography>
                <Typography id="totalUsers-sub-title" variant="subtitle1">
                  Total usuários
                </Typography>
                <Typography id="totalUsers-value" variant="h3">
                  {usersNumber.value}
                </Typography>
                <Typography id="totalUsers-percent">
                  {usersNumber.percent}%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ padding: "5px" }}>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Box id="line-chart-mouth-box">
                    <LineChartMouth />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Box className="general-sample">
                    <div id="overall-profit">
                      <div className="legendPie">
                        <Typography id="total-profit-title" variant="subtitle1">
                          Lucro geral
                        </Typography>
                        <Typography id="total-profit-value" variant="h3">
                          3.434.743,94
                        </Typography>
                        <Typography id="total-profit-percent">+34%</Typography>
                      </div>
                      <DonoutChart seriesData={seriesData} scale={0.8} />
                    </div>
                  </Box>
                  <Box className="general-sample" sx={{ marginTop: "5px" }}>
                    <Typography
                      id="most-visited-broker-sub-title"
                      variant="subtitle1"
                    >
                      Corretora mais acessada
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={logo} width={"35%"} alt="candlestop" />
                    </Box>
                    <Typography id="look-all-broker">Ver todas</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box id="recipe-of-the-day-box">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "3vh",
                      textAlign: "center",
                      maxWidth: "10vh",
                    }}
                  >
                    <Typography
                      id="recipe-of-the-day-sub-title"
                      variant="subtitle1"
                    >
                      Receita do dia
                    </Typography>
                    <Typography variant="h3" id="recipe-of-the-day-number">
                      {totalRecipeOfTheDay}
                    </Typography>
                    <Typography
                      id="recipe-of-the-day-percent"
                      className="win-percent"
                    >
                      +3%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "80%",
                    }}
                  >
                    <LineChartHour />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box id="recipe-of-the-day-box">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "3vh",
                      textAlign: "center",
                    }}
                  >
                    <Typography id="visits-sub-title" variant="subtitle1">
                      Visitantes
                      <br />
                      do dia
                    </Typography>
                    <Typography variant="h3" id="visits-number">
                      472
                    </Typography>
                    <Typography id="visits-percent">+12%</Typography>
                  </Box>
                  <CollumChart />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box id="box-total-states">
            <Box>
              <Typography variant={"subtitle1"} id="deposit-title">
                $
              </Typography>
              <Typography variant={"subtitle1"} id="deposit-description">
                Depósitos por país
              </Typography>
              <Box
                id="state-box"
                sx={{
                  height: "618px",
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

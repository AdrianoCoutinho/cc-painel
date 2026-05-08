import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import usaBtc from "../../../assets/images/usa-btc.png";
import joystickicon from "../../../assets/svg/joystickicon.svg";
import moneyIcon from "../../../assets/svg/money-icon.svg";
import { DonoutChart } from "../donout-chart/DonoutChart";
import "./style.css";

const profilecover =
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=200&fit=crop&auto=format";
const vitorrounded = "https://i.pravatar.cc/150?img=12";

type Anchor = "left";

export const DrawerUser = () => {
  const seriesData = [30, 70]; // Sua série dinâmica

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Grid container spacing={2}>
      <Grid item xs={4} sx={{ paddingBottom: "130px" }}>
        <Box id="drawer-profile-card">
          <Box id="drawer-header-profile">
            <img className="drawer-bg-image" src={profilecover} alt="cover" />
          </Box>
          <Box id="drawer-profile-details">
            <Box id="drawer-user-data">
              <img id="drawer-profile-rounded" src={vitorrounded} alt="Carlos" />
              <Box sx={{ paddingLeft: "10px" }}>
                <Typography sx={{ fontSize: "16px" }}>Carlos Silva</Typography>
                <Typography sx={{ fontSize: "14px", display: "flex" }}>
                  <Box
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      paddingRight: "3px",
                    }}
                  >
                    Último acesso
                  </Box>
                  ontem
                </Typography>
              </Box>
            </Box>
            <Box>Teste</Box>
          </Box>
          <Box id="drawer-user-box-infos">
            <Typography sx={{ paddingLeft: "18px", paddingTop: "10px" }}>
              Informações pessoais
            </Typography>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Idade</Typography>
              <Typography>24</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Gênero</Typography>
              <Typography>Masculino</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Cidade</Typography>
              <Typography>Niterói</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Estado</Typography>
              <Typography>Rio de Janeiro</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">País</Typography>
              <Typography>Brasil</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Postal code</Typography>
              <Typography>21843-215</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Telefone</Typography>
              <Typography>+55 021 9 9345-3456</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">E-mail</Typography>
              <Typography>carlos.silva@example.com</Typography>
            </Box>
            <Typography sx={{ paddingLeft: "18px", paddingTop: "10px" }}>
              Informações da plataforma
            </Typography>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Casa</Typography>
              <Typography>TradeFlow</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Data de cadastro</Typography>
              <Typography>25/02/2024</Typography>
            </Box>
            <Box className="drawer-list-item-info">
              <Typography className="grey-text">Ticket médio</Typography>
              <Typography>R$345,34</Typography>
            </Box>
            <Box
              className="drawer-list-item-info"
              sx={{ borderBottom: "none" }}
            >
              <Typography className="grey-text">Conta Marketing</Typography>
              <Typography>Não</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box id="drawer-rounds-played">
              <Box id="drawer-rounds-played-info">
                <img src={joystickicon} alt="jogadas" />
                <Typography sx={{ paddingTop: "10px" }} className="grey-text">
                  Rodadas jogadas
                </Typography>
                <Typography id="drawer-rounds-played-number" variant="h6">
                  387
                </Typography>
              </Box>
              <Box id="drawer-donout">
                <DonoutChart seriesData={seriesData} scale={1.13} />
                <Box id="drawer-donout-caption">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <circle
                        cx="5.75526"
                        cy="6.00001"
                        r="5.75526"
                        fill="#00E074"
                      />
                    </svg>
                    <Typography
                      sx={{ paddingRight: "10px" }}
                      className="drawer-donout-caption"
                    >
                      Vitórias
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: "5px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <circle
                        cx="5.75526"
                        cy="6.00001"
                        r="5.75526"
                        fill="#e00000"
                      />
                    </svg>
                    <Typography className="drawer-donout-caption">
                      Derrotas
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box id="bank-value">
              <img src={moneyIcon} alt="valor da banca" />
              <Typography sx={{ padding: "8px 0" }} className="grey-text">
                Valor da banca
              </Typography>
              <Typography variant="h4">3.245</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box id="drawer-user-match-history">
              <Typography sx={{ padding: "13px" }} className="grey-text">
                Histórico de partidas
              </Typography>

              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>

              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
              <Box className={"drawer-user-match-history-content-line"}>
                <Box>
                  <Box
                    sx={{ display: "flex", paddingTop: "5px" }}
                    component={"div"}
                  >
                    <img width={16} height={16} src={usaBtc} alt="USA BTC" />
                    <Box
                      className="drawer-user-match-history-type"
                      component={"span"}
                    >
                      BTC/USD
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14.5px" }} className="grey-text">
                    03 Jul | 21:00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="19.1536"
                      height="19.1536"
                      rx="2.25337"
                      fill="#00E074"
                    />
                    <path
                      d="M9.65328 12.4734C9.23351 12.4734 8.84661 12.4076 8.49258 12.2761C8.14361 12.1396 7.83763 11.9474 7.57464 11.6996C7.31671 11.4517 7.11441 11.1609 6.96774 10.8271C6.82613 10.4933 6.75533 10.1267 6.75533 9.72713C6.75533 9.32759 6.82613 8.96092 6.96774 8.62713C7.11441 8.29333 7.31924 8.00252 7.58223 7.75471C7.84522 7.50689 8.15373 7.31723 8.50775 7.18574C8.86178 7.04918 9.25121 6.98091 9.67604 6.98091C10.1464 6.98091 10.5687 7.0593 10.9429 7.21608C11.3223 7.37286 11.6409 7.60045 11.8988 7.89884L11.1098 8.62713C10.9177 8.42483 10.7078 8.27563 10.4802 8.17954C10.2526 8.07839 10.0048 8.02781 9.73673 8.02781C9.47879 8.02781 9.24362 8.06827 9.0312 8.14919C8.81879 8.23011 8.63419 8.34643 8.47741 8.49816C8.32568 8.64988 8.20683 8.82943 8.12085 9.03678C8.03993 9.24414 7.99947 9.47426 7.99947 9.72713C7.99947 9.97495 8.03993 10.2025 8.12085 10.4099C8.20683 10.6173 8.32568 10.7993 8.47741 10.9561C8.63419 11.1078 8.81626 11.2242 9.02362 11.3051C9.23603 11.386 9.46868 11.4265 9.72155 11.4265C9.96431 11.4265 10.1995 11.3885 10.4271 11.3127C10.6597 11.2317 10.8848 11.0977 11.1023 10.9106L11.8002 11.7982C11.5119 12.0157 11.1756 12.1826 10.7912 12.2989C10.4119 12.4152 10.0326 12.4734 9.65328 12.4734ZM10.6774 11.6389V9.64368H11.8002V11.7982L10.6774 11.6389Z"
                      fill="black"
                    />
                  </svg>
                  <Box sx={{ color: "red" }} component={"span"}>
                    -$650,00
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box id="drawer-user-match-history">
              <Typography sx={{ padding: "13px" }} className="grey-text">
                Histórico de transações
              </Typography>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9 4.11111V9L12.1111 10.7778M17 9C17 10.0506 16.7931 11.0909 16.391 12.0615C15.989 13.0321 15.3997 13.914 14.6569 14.6569C13.914 15.3997 13.0321 15.989 12.0615 16.391C11.0909 16.7931 10.0506 17 9 17C7.94943 17 6.90914 16.7931 5.93853 16.391C4.96793 15.989 4.08601 15.3997 3.34315 14.6569C2.60028 13.914 2.011 13.0321 1.60896 12.0615C1.20693 11.0909 1 10.0506 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9Z"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="1.77778"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque solicitado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M6.38883 15.4202C6.68352 15.7145 7.08298 15.8798 7.49948 15.8798C7.91597 15.8798 8.31544 15.7145 8.61012 15.4202L14.5395 9.49393C14.8344 9.19909 15 8.7992 15 8.38223C15 7.96526 14.8344 7.56538 14.5395 7.27054C14.2447 6.9757 13.8448 6.81006 13.4278 6.81006C13.0109 6.81006 12.611 6.9757 12.3161 7.27054L9.07115 10.5145L9.07115 1.57165C9.07115 1.15482 8.90556 0.755058 8.61082 0.460312C8.31607 0.165567 7.91631 -2.06464e-05 7.49948 -2.06829e-05C7.08264 -2.07193e-05 6.68288 0.165567 6.38814 0.460312C6.09339 0.755058 5.9278 1.15482 5.9278 1.57165L5.9278 10.5145L2.68387 7.27053C2.53788 7.12454 2.36457 7.00874 2.17382 6.92973C1.98308 6.85072 1.77864 6.81006 1.57218 6.81006C1.36572 6.81006 1.16128 6.85072 0.97053 6.92973C0.779785 7.00874 0.60647 7.12454 0.46048 7.27053C0.314489 7.41652 0.198684 7.58984 0.119675 7.78058C0.0406663 7.97133 6.7351e-07 8.17577 6.5546e-07 8.38223C6.37411e-07 8.58869 0.0406662 8.79313 0.119675 8.98388C0.198684 9.17462 0.314489 9.34794 0.460479 9.49393L6.38883 15.4202Z"
                      fill="#00E074"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Deposito recebido
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M6.38883 15.4202C6.68352 15.7145 7.08298 15.8798 7.49948 15.8798C7.91597 15.8798 8.31544 15.7145 8.61012 15.4202L14.5395 9.49393C14.8344 9.19909 15 8.7992 15 8.38223C15 7.96526 14.8344 7.56538 14.5395 7.27054C14.2447 6.9757 13.8448 6.81006 13.4278 6.81006C13.0109 6.81006 12.611 6.9757 12.3161 7.27054L9.07115 10.5145L9.07115 1.57165C9.07115 1.15482 8.90556 0.755058 8.61082 0.460312C8.31607 0.165567 7.91631 -2.06464e-05 7.49948 -2.06829e-05C7.08264 -2.07193e-05 6.68288 0.165567 6.38814 0.460312C6.09339 0.755058 5.9278 1.15482 5.9278 1.57165L5.9278 10.5145L2.68387 7.27053C2.53788 7.12454 2.36457 7.00874 2.17382 6.92973C1.98308 6.85072 1.77864 6.81006 1.57218 6.81006C1.36572 6.81006 1.16128 6.85072 0.97053 6.92973C0.779785 7.00874 0.60647 7.12454 0.46048 7.27053C0.314489 7.41652 0.198684 7.58984 0.119675 7.78058C0.0406663 7.97133 6.7351e-07 8.17577 6.5546e-07 8.38223C6.37411e-07 8.58869 0.0406662 8.79313 0.119675 8.98388C0.198684 9.17462 0.314489 9.34794 0.460479 9.49393L6.38883 15.4202Z"
                      fill="#00E074"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Deposito recebido
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
              <Box className="user-transactions-history-status">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.61117 0.459641C8.31648 0.165318 7.91702 0 7.50052 0C7.08403 0 6.68456 0.165318 6.38988 0.459641L0.46048 6.38589C0.16564 6.68073 -4.39346e-09 7.08062 0 7.49759C4.39346e-09 7.91456 0.16564 8.31445 0.46048 8.60929C0.75532 8.90413 1.15521 9.06977 1.57218 9.06977C1.98914 9.06977 2.38903 8.90413 2.68387 8.60929L5.92885 5.36535L5.92885 14.3082C5.92885 14.725 6.09444 15.1248 6.38918 15.4195C6.68393 15.7143 7.08369 15.8798 7.50052 15.8798C7.91736 15.8798 8.31712 15.7143 8.61187 15.4195C8.90661 15.1248 9.0722 14.725 9.0722 14.3082L9.0722 5.36535L12.3161 8.60929C12.4621 8.75528 12.6354 8.87108 12.8262 8.95009C13.0169 9.0291 13.2214 9.06977 13.4278 9.06977C13.6343 9.06977 13.8387 9.0291 14.0295 8.95009C14.2202 8.87108 14.3935 8.75528 14.5395 8.60929C14.6855 8.4633 14.8013 8.28998 14.8803 8.09924C14.9593 7.90849 15 7.70405 15 7.49759C15 7.29113 14.9593 7.08669 14.8803 6.89594C14.8013 6.7052 14.6855 6.53188 14.5395 6.38589L8.61117 0.459641Z"
                      fill="white"
                    />
                  </svg>
                  <Box
                    className="withdraw-user-history-status"
                    component={"div"}
                  >
                    Saque aprovado
                    <Box className="grey-text" component={"span"}>
                      03 dez | 23:34
                    </Box>
                  </Box>
                </Box>
                <Box className="user-transactions-type-history-status">
                  <Box component={"div"}>$650,00</Box>
                  <Box className="grey-text" component={"span"}>
                    PIX
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "red" }} onClick={toggleDrawer(anchor, true)}>
            Testar drawer do usuário
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                width: "80vw",
                marginTop: "85px",
                backgroundColor: "#101116",
                padding: "20px",
                marginLeft: "63px",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#4caf50",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#101116",
                },
              },
            }}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
};

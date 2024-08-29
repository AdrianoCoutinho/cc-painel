import { Box, Grid, IconButton, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import * as React from "react";
import arrowDownIcon from "../../../assets/svg/arrowDownIcon.svg";
import arrowUpIcon from "../../../assets/svg/arrowUpIcon.svg";
import iconSelo from "../../../assets/svg/icon-verify.png";
import verifyIcon from "../../../assets/svg/verifyIcon.svg";
import "./style.css";

export const FadeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 300;

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu-notifies" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
        aria-label="show 4 new mails"
        color="inherit"
        sx={{ paddingTop: "13px" }}
        className="icon-button-notiify"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 61 61"
          fill="none"
        >
          <rect
            className="button-notiify"
            x="0.5"
            y="0.5"
            width="60"
            height="60"
            rx="21.5"
            stroke="#212836"
          />
          <path
            className="button-notiify"
            d="M16.7691 40.1037L16.588 40.276C16.2652 39.9365 16.102 39.491 16.1252 39.0235L16.1253 39.0229C16.1724 38.1158 16.9512 37.4231 17.8739 37.4231H18.6169C20.0317 37.4231 21.1833 36.2715 21.1833 34.8567V27.389C21.1833 22.5216 25.1424 18.5609 30.0099 18.5609C34.8774 18.5609 38.8366 22.5216 38.8366 27.389V34.8567C38.8366 36.2715 39.9882 37.4231 41.403 37.4231H42.5743C43.4114 37.4231 44.1593 38.0094 44.2997 38.8142L44.2997 38.8145C44.3858 39.311 44.2521 39.817 43.9284 40.1994C43.6071 40.5837 43.1342 40.8032 42.6353 40.8032H38.2264L31.5556 41.4092L31.5553 41.4092C31.043 41.4553 30.5264 41.4783 30.0099 41.4783C29.4934 41.4783 28.9769 41.4553 28.4632 41.4092L28.4629 41.4092L21.7609 40.8018L17.8129 40.8032H17.8129C17.3514 40.8032 16.9057 40.6119 16.5875 40.2755L16.7691 40.1037ZM16.7691 40.1037C16.494 39.8144 16.3551 39.4358 16.3749 39.0359C16.4146 38.2715 17.074 37.6731 17.8739 37.6731H18.6169C20.1698 37.6731 21.4333 36.4095 21.4333 34.8567V27.389C21.4333 22.6596 25.2806 18.8109 30.0099 18.8109C34.7393 18.8109 38.5866 22.6596 38.5866 27.389V34.8567C38.5866 36.4095 39.8501 37.6731 41.403 37.6731H42.5743C43.3004 37.6731 43.9357 38.1822 44.0534 38.8572C44.1271 39.2826 44.0123 39.7137 43.7371 40.0385C43.4635 40.366 43.0607 40.5532 42.6353 40.5532L16.7691 40.1037ZM17.3677 39.0869L17.3677 39.0869L17.3676 39.0888C17.3603 39.2136 17.4033 39.3304 17.4893 39.421L17.4894 39.4211C17.5743 39.5106 17.6889 39.5602 17.8129 39.5602H21.8048H21.8161L21.8273 39.5612L28.5746 40.1709L28.5748 40.171C29.5268 40.2575 30.4916 40.2575 31.4437 40.171L31.4438 40.1709L38.1585 39.5626L38.1697 39.5616L38.181 39.5616L42.6352 39.5602H42.6353C42.7673 39.5602 42.8922 39.5019 42.9761 39.4008L42.9771 39.3997C43.0631 39.2974 43.0985 39.1683 43.0739 39.0278L43.0738 39.0268C43.0425 38.843 42.845 38.6662 42.5743 38.6662H41.403C39.3022 38.6662 37.5935 36.9574 37.5935 34.8567V27.389C37.5935 23.2075 34.1914 19.8054 30.0099 19.8054C25.8285 19.8054 22.4263 23.2075 22.4263 27.389V34.8567C22.4263 36.9574 20.7177 38.6662 18.6169 38.6662H17.8739C17.5879 38.6662 17.3784 38.8764 17.3677 39.0869Z"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            className="button-notiify"
            d="M17.5063 39.0961L17.5062 39.0964C17.5015 39.1827 17.531 39.2629 17.5897 39.3247C17.6484 39.3865 17.7258 39.4198 17.8125 39.4198H21.8045H21.8158L21.827 39.4208L28.5885 40.032C29.5307 40.1171 30.487 40.1171 31.4307 40.032C31.4307 40.032 31.4307 40.032 31.4308 40.032L38.1468 39.4236L38.158 39.4226L38.1692 39.4226L42.6348 39.4198H42.6349C42.7269 39.4198 42.8116 39.3802 42.8706 39.3102L42.8708 39.31C42.9283 39.2418 42.954 39.1527 42.9374 39.0512C42.9166 38.937 42.7803 38.8052 42.574 38.8052H41.4026C39.2254 38.8052 37.4528 37.0342 37.4528 34.8567V27.389C37.4528 23.2841 34.1144 19.9444 30.0096 19.9444C25.9047 19.9444 22.565 23.2841 22.565 27.389V34.8567C22.565 37.034 20.7939 38.8052 18.6166 38.8052H17.8735C17.6566 38.8052 17.5135 38.9604 17.5063 39.0961ZM28.4515 41.5482L28.4512 41.5482L21.7464 40.9394L17.8127 40.9422H17.8125C17.3128 40.9422 16.829 40.7339 16.4855 40.3724L16.4851 40.372C16.1374 40.0046 15.9597 39.5223 15.9859 39.0159L15.9859 39.0157C16.0373 38.0363 16.8743 37.2827 17.8735 37.2827H18.6166C19.9549 37.2827 21.044 36.1948 21.044 34.8567V27.389C21.044 22.4436 25.0656 18.422 30.0096 18.422C34.9536 18.422 38.9752 22.4436 38.9752 27.389V34.8567C38.9752 36.1947 40.0643 37.2827 41.4026 37.2827H42.574C43.4789 37.2827 44.2854 37.9213 44.4369 38.7916L44.4369 38.7917C44.5303 39.3291 44.3829 39.8761 44.0345 40.2902C43.6865 40.7038 43.177 40.9422 42.6349 40.9422H38.2261L31.5695 41.5482L31.5691 41.5482C31.0543 41.5942 30.5293 41.6187 30.0096 41.6187C29.4899 41.6187 28.9649 41.5942 28.4515 41.5482Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            className="button-notiify"
            d="M30.01 44.2378C28.2014 44.2378 26.7295 42.7674 26.7295 40.9573C26.7295 40.615 27.0087 40.3357 27.351 40.3357C27.6953 40.3357 27.9726 40.6156 27.9726 40.9573C27.9726 42.0812 28.8872 42.9947 30.01 42.9947C31.1327 42.9947 32.0474 42.0812 32.0474 40.9573C32.0474 40.6157 32.3245 40.3357 32.6689 40.3357C33.0132 40.3357 33.2905 40.6156 33.2905 40.9573C33.2905 42.7674 31.8185 44.2378 30.01 44.2378Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            className="button-notiify"
            d="M30.0093 44.3782C28.124 44.3782 26.5898 42.8438 26.5898 40.9573C26.5898 40.5385 26.9315 40.1968 27.3503 40.1968C27.7702 40.1968 28.1123 40.538 28.1123 40.9573C28.1123 42.0036 28.9634 42.8557 30.0093 42.8557C31.0551 42.8557 31.9063 42.0036 31.9063 40.9573C31.9063 40.538 32.2484 40.1968 32.6682 40.1968C33.0871 40.1968 33.4287 40.5385 33.4287 40.9573C33.4287 42.8438 31.896 44.3782 30.0093 44.3782Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            className="button-notiify"
            d="M30.0092 22.7466C29.6656 22.7466 29.3877 22.4688 29.3877 22.1251V17.5106C29.3877 17.1669 29.6655 16.889 30.0092 16.889C30.3529 16.889 30.6308 17.1669 30.6308 17.5106V22.1251C30.6308 22.4688 30.3529 22.7466 30.0092 22.7466Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            className="button-notiify"
            d="M30.0095 22.887C29.5883 22.887 29.249 22.5444 29.249 22.125V17.5105C29.249 17.0922 29.5888 16.75 30.0095 16.75C30.4302 16.75 30.77 17.0921 30.77 17.5105V22.125C30.77 22.5444 30.4307 22.887 30.0095 22.887Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.5"
          />
          <path
            d="M40 22C40 23.6569 38.6569 25 37 25C35.3431 25 34 23.6569 34 22C34 20.3431 35.3431 19 37 19C38.6569 19 40 20.3431 40 22Z"
            fill="#E2243B"
          />
        </svg>
      </IconButton>
      <Menu
        id="fade-menu-notifies"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "40ch",
            },
          },
        }}
        TransitionComponent={Fade}
      >
        <Box
          id="state-box"
          sx={{
            maxHeight: "35ch",
            width: "40ch",
            overflow: "auto",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={verifyIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 3445 - Verificação de conta
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={iconSelo} alt="Conquista" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 6730 - Conquistou o Blue Ribbon
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowDownIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
            >
              <img src={arrowUpIcon} alt="Solicitação de saque" />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px !important" }}
                >
                  ID: 2302 - Solicitação de saque
                </Typography>
                <Typography variant="body2" className="grey-text">
                  22 nov 2023 - 05:23PM
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              className="grey-text"
              sx={{
                textAlign: "center",
                paddingTop: "8px",
                borderTop: "1px solid  #39445B",
                cursor: "pointer",
              }}
            >
              Ver todas as notificações
            </Typography>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

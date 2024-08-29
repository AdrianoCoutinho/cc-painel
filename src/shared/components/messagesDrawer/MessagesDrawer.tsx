import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import closeDrawerIcon from "../../../assets/svg/close-drawer-icon.svg";
import fixIcon from "../../../assets/svg/fixIcon.svg";
import notesIcon from "../../../assets/svg/notes-icon.svg";
import suportIcon from "../../../assets/svg/suport-icon.svg";
import profileOne from "../../../assets/temporary-images/bruno-souza.png";

import "./style.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const CustomDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Grid container id="MessagesDrawer">
        <Grid item xs={12} id="MessagesDrawerTitle">
          <span id="close-drawer-icon" onClick={onClose}>
            <img src={closeDrawerIcon} alt="fechar" />
          </span>
          <div id="MessagesDrawerButtonTitleBackground">
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              id="MessagesDrawerButtonTitle"
            >
              <Button className="ActiveDrawerMessageButton">
                <img
                  className="button-title-drawer-icon"
                  src={suportIcon}
                  alt="Suporte"
                />
                Suporte
              </Button>
              <Button>
                <img
                  src={notesIcon}
                  className="button-title-drawer-icon"
                  alt="Notas"
                />
                Notas
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid  #39445B",
            padding: "5px 0",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Bruno Souza"
              src={profileOne}
            />
          </StyledBadge>
          <Box>
            <Typography
              variant="body2"
              sx={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Bruno Souza - <span className="grey-text">ID 3420</span>
              </span>
              <span className="grey-text text-align-right">05:24PM</span>
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              id="body-message-drawer"
            >
              <Typography
                variant="body2"
                className="grey-text pre-text-message"
              >
                Sed ut pende omnis iste natus doloremque laudantium, ut sed ut
                accusatatum alasta...
              </Typography>

              <img src={fixIcon} alt="fixar" />
              <div id="new-message-number">1</div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid  #39445B",
            padding: "5px 0",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Bruno Souza"
              src={profileOne}
            />
          </StyledBadge>
          <Box>
            <Typography
              variant="body2"
              sx={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Bruno Souza - <span className="grey-text">ID 3420</span>
              </span>
              <span className="grey-text text-align-right">05:24PM</span>
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              id="body-message-drawer"
            >
              <Typography
                variant="body2"
                className="grey-text pre-text-message"
              >
                Sed ut pende omnis iste natus doloremque laudantium, ut sed ut
                accusatatum alasta...
              </Typography>

              <img src={fixIcon} alt="fixar" />
              <div id="new-message-number">1</div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid  #39445B",
            padding: "5px 0",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Bruno Souza"
              src={profileOne}
            />
          </StyledBadge>
          <Box>
            <Typography
              variant="body2"
              sx={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Bruno Souza - <span className="grey-text">ID 3420</span>
              </span>
              <span className="grey-text text-align-right">05:24PM</span>
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              id="body-message-drawer"
            >
              <Typography
                variant="body2"
                className="grey-text pre-text-message"
              >
                Sed ut pende omnis iste natus doloremque laudantium, ut sed ut
                accusatatum alasta...
              </Typography>

              <img src={fixIcon} alt="fixar" />
              <div id="new-message-number">1</div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid  #39445B",
            padding: "5px 0",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Bruno Souza"
              src={profileOne}
            />
          </StyledBadge>
          <Box>
            <Typography
              variant="body2"
              sx={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Bruno Souza - <span className="grey-text">ID 3420</span>
              </span>
              <span className="grey-text text-align-right">05:24PM</span>
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              id="body-message-drawer"
            >
              <Typography
                variant="body2"
                className="grey-text pre-text-message"
              >
                Sed ut pende omnis iste natus doloremque laudantium, ut sed ut
                accusatatum alasta...
              </Typography>

              <img src={fixIcon} alt="fixar" />
              <div id="new-message-number">1</div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid  #39445B",
            padding: "5px 0",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Bruno Souza"
              src={profileOne}
            />
          </StyledBadge>
          <Box>
            <Typography
              variant="body2"
              sx={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Bruno Souza - <span className="grey-text">ID 3420</span>
              </span>
              <span className="grey-text text-align-right">05:24PM</span>
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              id="body-message-drawer"
            >
              <Typography
                variant="body2"
                className="grey-text pre-text-message"
              >
                Sed ut pende omnis iste natus doloremque laudantium, ut sed ut
                accusatatum alasta...
              </Typography>

              <img src={fixIcon} alt="fixar" />
              <div id="new-message-number">1</div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export const MessagesDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleDrawerOpen}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        className="icon-button-message"
      >
        <svg
          width="41"
          height="41"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="button-message-rect"
            x="0.5"
            y="0.5"
            width="60"
            height="60"
            rx="21.5"
            stroke="#212836"
          />
          <path
            className="button-message-stroke-fill"
            d="M17.0767 39.8377H42.8278V21.3597H17.0767V39.8377ZM43.4778 41.1376H16.4267C16.066 41.1376 15.7767 40.8442 15.7767 40.4861V20.7111C15.7767 20.3509 16.0667 20.0598 16.4267 20.0598H43.4778C43.8379 20.0598 44.1278 20.3509 44.1278 20.7111V40.4861C44.1278 40.8442 43.8386 41.1376 43.4778 41.1376Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.542237"
          />
          <path
            className="button-message-stroke-fill"
            d="M43.2909 40.4423L43.2794 40.4538H43.444V40.2891L43.4325 40.3006L43.2909 40.4423ZM43.4325 20.897L43.444 20.9085V20.7453H43.2808L43.2909 20.7553L43.4325 20.897ZM16.6141 20.7552L16.624 20.7453H16.4608V20.9085L16.4723 20.8969L16.6141 20.7552ZM16.4608 40.2891V40.4538H16.6255L16.6141 40.4424L16.4723 40.3007L16.4608 40.2891ZM17.2185 39.6946H42.6862V21.503H17.2185V39.6946ZM43.4794 41.2794H16.4269C15.989 41.2794 15.6351 40.9248 15.6351 40.4863V20.7113C15.6351 20.2747 15.9885 19.9182 16.4269 19.9182H43.4794C43.916 19.9182 44.271 20.2743 44.271 20.7113V40.4863C44.271 40.9252 43.9155 41.2794 43.4794 41.2794Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.542237"
          />
          <path
            className="button-message-stroke-fill"
            d="M30.0514 33.8385L29.9522 33.8775L29.8529 33.8385L29.5955 33.7373L29.5481 33.7187L29.5107 33.6841L15.9852 21.1881L15.9852 21.1881L15.9841 21.1871C15.7242 20.9443 15.703 20.5332 15.9488 20.2694C16.1941 20.0047 16.6032 19.9907 16.867 20.2323L16.8679 20.2331L29.9522 32.322L43.0362 20.2332C43.0363 20.2332 43.0363 20.2331 43.0363 20.2331C43.2992 19.9901 43.7101 20.0052 43.9549 20.2689C44.2012 20.5328 44.1801 20.9442 43.92 21.1871L43.919 21.1881L30.3934 33.6841L30.356 33.7186L30.3087 33.7373L30.0514 33.8385Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.542237"
          />
          <path
            className="button-message-stroke-fill"
            d="M43.5093 19.9184C43.7179 19.927 43.9163 20.0163 44.0602 20.1746L30.4904 33.7881C30.3437 33.9238 30.1524 33.9989 29.9537 33.9989C29.7517 33.9989 29.5626 33.9236 29.4153 33.7893L29.4153 33.7893L29.414 33.7881L15.8885 21.2921L15.8884 21.292C15.5665 20.9944 15.55 20.4937 15.8438 20.1736C15.9869 20.0174 16.1837 19.9271 16.3937 19.9184L16.4008 19.9181L16.4079 19.9181C16.5946 19.9201 16.8024 19.98 16.9641 20.1281L16.965 20.1289L29.9537 32.1282L42.9405 20.1294L43.125 20.328L42.941 20.1289L42.9409 20.129C43.0989 19.9825 43.2978 19.9181 43.498 19.9181V19.9179L43.5093 19.9184ZM44.016 21.2921L30.4906 33.788L43.9983 20.73L44.2692 20.7412C44.2692 20.7413 44.2692 20.7414 44.2692 20.7414C44.2604 20.9525 44.1705 21.1487 44.0165 21.2916L44.016 21.2921ZM30.0066 33.1082L30.052 33.0663H30.0492H29.8568H29.8524L29.8978 33.1082H30.0066Z"
            fill="#646872"
            stroke="#646872"
            strokeWidth="0.542237"
          />
        </svg>
      </IconButton>
      <CustomDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </div>
  );
};

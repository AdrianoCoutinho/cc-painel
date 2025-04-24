import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Grid,
  InputBase,
  List,
  Switch,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import React from "react";
import threePointsMenu from "../../assets/svg/three-points-menu.svg";
import AdrianoCoutinho from "../../assets/temporary-images/adriano-coutinho.png";
import DavidBarros from "../../assets/temporary-images/david-barros.png";
import JeffAntunes from "../../assets/temporary-images/jeff-antunes.png";
import PedroPaes from "../../assets/temporary-images/pedro-paes.png";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

const CandleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha("#39445B", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#39445B",
  },
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
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "92%",
    height: "30px",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  width: "35px",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "15px",
      fontSize: "12px",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    minWidth: "5px",
    height: "5px",
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(5),
    borderRadius: " 8.92px",
    border: "1px solid #2F394B",
    background: "#212836",
    boxShadow: "0px 0px 24.224px 0px rgba(0, 0, 0, 0.25)",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#4caf50",
    },
    "&::-webkit-scrollbar-track": {
      background: "#212836",
    },
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    background: "blue",
  },
}));

export const Tasks: React.FC = () => {
  const [openModalTask, setOpenModalTask] = React.useState(false);
  const [openModalEmployee, setOpenModalEmployee] = React.useState(false);
  const [openModalTaskView, setOpenModalTaskView] = React.useState(false);

  const handleClickOpenModalTask = () => {
    setOpenModalTask(true);
  };
  const handleCloseModalTask = () => {
    setOpenModalTask(false);
  };

  const handleClickOpenModalEmployee = () => {
    setOpenModalEmployee(true);
  };
  const handleCloseModalEmployee = () => {
    setOpenModalEmployee(false);
  };

  const handleClickOpenModalTaskView = () => {
    setOpenModalTaskView(true);
  };
  const handleCloseModalTaskView = () => {
    setOpenModalTaskView(false);
  };

  return (
    <BaseLayoutPage>
      <Grid container spacing={0} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Typography component={"span"}>Tarefas</Typography>
        </Grid>
        <Grid id="task-box-grid" item sm={12} xs={12} md={12} lg={2}>
          <div id="new-task-header">
            <Button
              id="button-new-task"
              sx={{ width: "100%" }}
              onClick={handleClickOpenModalTask}
            >
              Criar nova tarefa
            </Button>
          </div>
          <Typography variant="body2" className="grey-text task-left-title">
            Tarefas
          </Typography>
          <List className="task-menu-group">
            <div className="task-button-menu task-button-menu-active">
              Todas as tarefas
            </div>
            <div className="notify-task-number">76</div>
          </List>
          <List className="task-menu-group">
            <div className="task-button-menu">Favoritas</div>
            <div className="notify-task-number">53</div>
          </List>
          <List className="task-menu-group">
            <div className="task-button-menu">Apagadas</div>
            <div className="notify-task-number">83</div>
          </List>
          <Typography variant="body2" className="grey-text task-left-title">
            Categorias
          </Typography>
          <Box
            component={"section"}
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "10px",
              paddingBottom: "15px",
            }}
          >
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="White Label"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Design"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Pessoais"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Geral"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Financeiro"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Afiliado"
              labelPlacement="end"
            />
            <Typography variant="body2" className="grey-text task-left-title">
              Progresso
            </Typography>
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Pendentes"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Em progresso"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<BpCheckbox />}
              className="form-control-label-tasks-checkbox-label"
              label="Concluídas"
              labelPlacement="end"
            />
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={8}>
          <Grid
            container
            spacing={0}
            sx={{
              width: "calc(100% - 10px)",
              margin: "5px",
            }}
          >
            <Grid
              item
              sm={12}
              xs={12}
              md={12}
              lg={3.8}
              className="task-box-section"
              onClick={handleClickOpenModalTaskView}
            >
              <Box component={"section"}>
                <div className="title-task">
                  <div className="name-task">
                    Criação White Label João
                    <div className="star-icon"></div>
                  </div>
                  <img src={threePointsMenu} alt="opcões" />
                </div>
                <div className="task-body">
                  <Typography className="task-type">White Label</Typography>
                  <Typography className="task-inicial-date" variant="subtitle2">
                    <br />
                    <span>Data de início:</span> 21/11/2023
                  </Typography>
                  <Typography className="task-final-date" variant="subtitle2">
                    <br />
                    <span>Data de entrega: </span> 21/12/2023
                  </Typography>
                  <div className="footer-task">
                    <br />
                    <br />
                    <br />
                    <div className="task-risk-type task-risl-type-medium">
                      Médio
                    </div>
                    <div className="signatures">
                      <Box sx={{ marginLeft: "10px" }}>Assinado por</Box>
                      <Box>
                        <AvatarGroup max={4}>
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Adriano Coutinho"
                            src={AdrianoCoutinho}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Jefferson Antunes"
                            src={JeffAntunes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="David Barros"
                            src={DavidBarros}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                        </AvatarGroup>
                      </Box>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={12}
              lg={3.8}
              className="task-box-section task-risk-critical"
            >
              <Box component={"section"}>
                <div className="title-task">
                  <div className="name-task">
                    Criação White Label João
                    <div className="star-icon"></div>
                  </div>
                  <img src={threePointsMenu} alt="opcões" />
                </div>
                <div className="task-body">
                  <Typography className="task-type">White Label</Typography>
                  <Typography className="task-inicial-date" variant="subtitle2">
                    <br />
                    <span>Data de início:</span> 21/11/2023
                  </Typography>
                  <Typography className="task-final-date" variant="subtitle2">
                    <br />
                    <span>Data de entrega: </span> 21/12/2023
                  </Typography>
                  <div className="footer-task">
                    <br />
                    <br />
                    <br />
                    <div className="task-risk-type task-risk-type-critical">
                      Crítico
                    </div>
                    <div className="signatures">
                      <Box sx={{ marginLeft: "10px" }}>Assinado por</Box>
                      <Box>
                        <AvatarGroup max={4}>
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Adriano Coutinho"
                            src={AdrianoCoutinho}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Jefferson Antunes"
                            src={JeffAntunes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="David Barros"
                            src={DavidBarros}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                        </AvatarGroup>
                      </Box>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={12}
              lg={3.8}
              className="task-box-section"
            >
              <Box component={"section"}>
                <div className="title-task">
                  <div className="name-task">
                    Criação White Label João
                    <div className="star-icon"></div>
                  </div>
                  <img src={threePointsMenu} alt="opcões" />
                </div>
                <div className="task-body">
                  <Typography className="task-type">White Label</Typography>
                  <Typography className="task-inicial-date" variant="subtitle2">
                    <br />
                    <span>Data de início:</span> 21/11/2023
                  </Typography>
                  <Typography className="task-final-date" variant="subtitle2">
                    <br />
                    <span>Data de entrega: </span> 21/12/2023
                  </Typography>
                  <div className="footer-task">
                    <br />
                    <br />
                    <br />
                    <div className="task-risk-type task-risl-type-medium">
                      Médio
                    </div>
                    <div className="signatures">
                      <Box sx={{ marginLeft: "10px" }}>Assinado por</Box>
                      <Box>
                        <AvatarGroup max={4}>
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Adriano Coutinho"
                            src={AdrianoCoutinho}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Jefferson Antunes"
                            src={JeffAntunes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="David Barros"
                            src={DavidBarros}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                          <Avatar
                            className="task-card-avatar-image"
                            alt="Pedro Antunes"
                            src={PedroPaes}
                          />
                        </AvatarGroup>
                      </Box>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          id="task-box-grid"
          item
          sm={12}
          xs={12}
          md={12}
          lg={2}
          sx={{ minHeight: "calc(100vh - 100px)" }}
        >
          <Typography variant="body2" className="grey-text task-left-title">
            Funcionários
          </Typography>
          <Search
            sx={{
              display: {
                xs: "none",
                sm: "block",
                marginBottom: "8px",
                marginTop: "5px",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.30)" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Procure aqui…"
              inputProps={{ "aria-label": "Procure aqui..." }}
            />
          </Search>
          <Box component={"section"} sx={{ borderBottom: "1px solid #39445B" }}>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Adriano Coutinho" src={AdrianoCoutinho} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Adriano Coutinho
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Programador
                  </Typography>
                </Box>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Pedro Paes" src={PedroPaes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Pedro Paes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Ux Designer
                  </Typography>
                </Box>
                <div className="notify-message-chat-number">+1</div>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Jeff Antunes" src={JeffAntunes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Jeff Antunes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Administrador
                  </Typography>
                </Box>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Adriano Coutinho" src={AdrianoCoutinho} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Adriano Coutinho
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Programador
                  </Typography>
                </Box>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Pedro Paes" src={PedroPaes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Pedro Paes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Ux Designer
                  </Typography>
                </Box>
                <div className="notify-message-chat-number">+1</div>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Jeff Antunes" src={JeffAntunes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Jeff Antunes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Administrador
                  </Typography>
                </Box>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Adriano Coutinho" src={AdrianoCoutinho} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Adriano Coutinho
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Programador
                  </Typography>
                </Box>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Pedro Paes" src={PedroPaes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Pedro Paes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Ux Designer
                  </Typography>
                </Box>
                <div className="notify-message-chat-number">+1</div>
              </div>
            </List>
            <List className="task-xat-employee" sx={{ cursor: "pointer" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Jeff Antunes" src={JeffAntunes} />
              </StyledBadge>
              <div className="box-employee-xat">
                <Box className="box-description-employee">
                  <Typography component={"div"} className="employee-xat-name">
                    Jeff Antunes
                  </Typography>
                  <Typography
                    component={"div"}
                    className="employee-type-name grey-text"
                  >
                    Administrador
                  </Typography>
                </Box>
              </div>
            </List>
          </Box>
          <div id="new-employee">
            <Button
              id="button-new-employee"
              onClick={handleClickOpenModalEmployee}
            >
              + Adicionar funcionário
            </Button>
          </div>
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={handleCloseModalTask}
        aria-labelledby="customized-dialog-title"
        open={openModalTask}
      >
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleCloseModalTask}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box id="new-user-modal">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6" id="new-stask-modal-title">
                  Insira um título
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  id="new-task-modal-integral-title"
                >
                  <span>Integrantes da tarefa</span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0901639"
                      y="0.0901639"
                      width="10.8197"
                      height="10.8197"
                      rx="3.87705"
                      stroke="#646872"
                      strokeWidth="0.180328"
                    />
                    <path
                      d="M5.31536 7.00671V3.67212H6.01665V7.00671H5.31536ZM4.05028 5.666V5.01971H7.28861V5.666H4.05028Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography id="new-task-modal-category-title">
                  <span>Categoria</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.0901639"
                      y="0.0901639"
                      width="10.8197"
                      height="10.8197"
                      rx="3.87705"
                      stroke="#646872"
                      strokeWidth="0.1967214545454545"
                      d="M4.328 0.098H7.672A4.23 4.23 0 0 1 11.902 4.328V7.672A4.23 4.23 0 0 1 7.672 11.902H4.328A4.23 4.23 0 0 1 0.098 7.672V4.328A4.23 4.23 0 0 1 4.328 0.098z"
                    />
                    <path
                      d="M5.798 7.644V4.006h0.766v3.638h-0.766ZM4.418 6.181V5.476H7.953v0.705H4.418Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" id="new-task-type-title">
                  Urgência
                </Typography>
                <Box id="new-task-button-type-risk">
                  <svg
                    className="new-task-svg"
                    width="45"
                    height="25"
                    viewBox="0 0.5 45 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-low-stroke"
                        x="0.781508"
                        y="0.789809"
                        width="63.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#FFFFFF80"
                        strokeWidth="1.0820907692307693"
                        d="M12.118 0.547H32.887A11.577 11.577 0 0 1 44.465 12.124V12.124A11.577 11.577 0 0 1 32.887 23.701H12.118A11.577 11.577 0 0 1 0.541 12.124V12.124A11.577 11.577 0 0 1 12.118 0.547z"
                      />
                      <path
                        d="M10.448 15.625v-0.838h1.987c0.383 0 0.678 -0.107 0.886 -0.322 0.215 -0.22 0.321 -0.512 0.321 -0.876 0 -0.37 -0.104 -0.658 -0.312 -0.867 -0.208 -0.214 -0.506 -0.321 -0.896 -0.321h-1.987v-0.623h1.851c0.455 0 0.854 0.055 1.198 0.166 0.351 0.11 0.623 0.295 0.818 0.554 0.201 0.254 0.302 0.601 0.302 1.043v0.136c0 0.415 -0.084 0.769 -0.253 1.061 -0.169 0.286 -0.425 0.507 -0.769 0.663 -0.344 0.15 -0.775 0.224 -1.295 0.224h-1.851Zm-0.759 0V8.437h0.955v7.188h-0.955Zm0.759 -3.399v-0.623h1.724c0.403 0 0.698 -0.107 0.886 -0.322 0.195 -0.22 0.292 -0.5 0.292 -0.838 0 -0.343 -0.097 -0.623 -0.292 -0.837 -0.188 -0.221 -0.483 -0.331 -0.886 -0.331h-1.724v-0.838h1.558c0.779 0 1.36 0.166 1.743 0.496 0.383 0.325 0.575 0.796 0.575 1.412v0.136c0 0.435 -0.097 0.782 -0.292 1.042 -0.195 0.253 -0.467 0.435 -0.818 0.546 -0.344 0.104 -0.746 0.156 -1.207 0.156h-1.558Zm8.869 3.36v-1.558h-0.156v-1.802c0 -0.357 -0.094 -0.627 -0.282 -0.809 -0.182 -0.181 -0.451 -0.272 -0.809 -0.272 -0.201 0 -0.408 0.003 -0.623 0.01 -0.215 0.006 -0.419 0.012 -0.613 0.019 -0.195 0.007 -0.363 0.016 -0.507 0.029V10.385c0.143 -0.012 0.292 -0.023 0.449 -0.029 0.162 -0.013 0.327 -0.019 0.496 -0.019 0.169 -0.007 0.331 -0.01 0.487 -0.01 0.533 0 0.968 0.065 1.305 0.195 0.338 0.124 0.588 0.328 0.75 0.614 0.162 0.285 0.243 0.672 0.243 1.159v3.291h-0.74Zm-1.704 0.136c-0.389 0 -0.727 -0.065 -1.013 -0.195a1.542 1.542 0 0 1 -0.652 -0.584c-0.15 -0.253 -0.224 -0.559 -0.224 -0.915 0 -0.37 0.081 -0.678 0.244 -0.926 0.169 -0.246 0.412 -0.432 0.73 -0.555 0.318 -0.129 0.701 -0.195 1.149 -0.195h1.412v0.701h-1.451c-0.377 0 -0.666 0.091 -0.867 0.273 -0.201 0.181 -0.302 0.415 -0.302 0.701 0 0.285 0.1 0.516 0.302 0.691 0.201 0.175 0.49 0.263 0.867 0.263 0.221 0 0.431 -0.039 0.633 -0.117 0.201 -0.084 0.367 -0.221 0.496 -0.408 0.136 -0.195 0.211 -0.461 0.224 -0.799l0.253 0.37c-0.033 0.37 -0.123 0.681 -0.273 0.935a1.41 1.41 0 0 1 -0.604 0.565c-0.253 0.129 -0.561 0.195 -0.926 0.195Zm4.413 -0.136V10.385h0.935v5.201h-0.935Zm-0.798 -4.46V10.385h1.734v0.741h-1.734Zm1.061 -1.578c-0.208 0 -0.363 -0.055 -0.467 -0.165a0.609 0.609 0 0 1 -0.146 -0.418 0.609 0.609 0 0 1 0.146 -0.419c0.104 -0.111 0.26 -0.166 0.467 -0.166 0.208 0 0.36 0.055 0.458 0.166 0.104 0.111 0.156 0.249 0.156 0.419a0.586 0.586 0 0 1 -0.156 0.418c-0.097 0.111 -0.249 0.166 -0.457 0.166Zm1.857 6.038 1.86 -2.737 -0.03 0.195L24.234 10.385h1.032l1.257 1.957h0.136L27.847 10.385h0.964l-1.646 2.591 0.029 -0.175 1.947 2.785h-1.032l-1.461 -2.113h-0.136l-1.403 2.113h-0.964Zm8.354 0.175c-0.454 0 -0.854 -0.078 -1.198 -0.233a2.764 2.764 0 0 1 -0.876 -0.613 2.801 2.801 0 0 1 -0.536 -0.867 2.804 2.804 0 0 1 -0.175 -0.974v-0.175c0 -0.332 0.062 -0.656 0.185 -0.974 0.123 -0.325 0.305 -0.613 0.546 -0.867 0.24 -0.26 0.532 -0.464 0.876 -0.613 0.344 -0.156 0.737 -0.234 1.178 -0.234 0.442 0 0.834 0.078 1.178 0.234 0.344 0.149 0.637 0.353 0.876 0.613 0.24 0.253 0.422 0.542 0.546 0.867 0.123 0.318 0.185 0.642 0.185 0.974v0.175c0 0.331 -0.062 0.656 -0.185 0.974a2.575 2.575 0 0 1 -0.536 0.867 2.65 2.65 0 0 1 -0.867 0.613c-0.344 0.156 -0.743 0.233 -1.198 0.233Zm0 -0.838c0.39 0 0.721 -0.084 0.993 -0.253 0.279 -0.175 0.49 -0.408 0.633 -0.701 0.15 -0.292 0.224 -0.62 0.224 -0.983 0 -0.37 -0.075 -0.702 -0.224 -0.994a1.692 1.692 0 0 0 -0.642 -0.691c-0.273 -0.169 -0.6 -0.253 -0.983 -0.253 -0.377 0 -0.705 0.084 -0.984 0.253a1.693 1.693 0 0 0 -0.642 0.691c-0.15 0.292 -0.224 0.623 -0.224 0.993 0 0.364 0.071 0.692 0.214 0.984 0.15 0.292 0.36 0.526 0.633 0.701 0.28 0.169 0.613 0.253 1.004 0.253Z"
                        fill="#FFFFFF80"
                        className="task-type-risk-low-fill"
                      />
                    </g>
                  </svg>
                  <svg
                    className="new-task-svg"
                    width="50.057"
                    height="25.676"
                    viewBox="0 1 50.057 22.676"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="task-type-risk-medium-stroke"
                      x="0.781508"
                      y="0.781508"
                      width="69.4452"
                      height="33.4452"
                      rx="16.7226"
                      stroke="#FFFFFF80"
                      strokeOpacity="1"
                      strokeWidth="1.1019731287323944"
                      d="M12.341 0.551h25.381a11.791 11.791 0 0 1 11.791 11.79 11.791 11.791 0 0 1 -11.791 11.791H12.341A11.791 11.791 0 0 1 0.551 12.341 11.791 11.791 0 0 1 12.341 0.551z"
                    />
                    <path
                      className="task-type-risk-medium-fill"
                      d="M9.867 15.866V8.625h1.289l2.142 4.832h0.159l2.133 -4.829h1.299v7.241h-0.972V9.687l0.069 0.02 -2.052 4.662h-1.19l-2.065 -4.662 0.08 -0.02v6.179H9.867Zm11.236 0.178c-0.463 0 -0.863 -0.079 -1.2 -0.238a2.324 2.324 0 0 1 -0.823 -0.625 2.786 2.786 0 0 1 -0.477 -0.884 3.368 3.368 0 0 1 -0.148 -0.991v-0.18c0 -0.344 0.049 -0.677 0.148 -1.001 0.106 -0.324 0.264 -0.615 0.477 -0.873a2.213 2.213 0 0 1 0.804 -0.625 2.648 2.648 0 0 1 1.16 -0.238c0.575 0 1.048 0.126 1.418 0.376 0.378 0.245 0.655 0.562 0.834 0.952 0.185 0.391 0.279 0.807 0.279 1.25v0.427h-4.701v-0.714h4.007l-0.218 0.387c0 -0.378 -0.059 -0.701 -0.178 -0.972a1.395 1.395 0 0 0 -0.536 -0.644c-0.238 -0.152 -0.539 -0.228 -0.902 -0.228 -0.376 0 -0.691 0.086 -0.942 0.257 -0.245 0.172 -0.431 0.407 -0.555 0.704a2.74 2.74 0 0 0 -0.18 1.032c0 0.376 0.06 0.717 0.18 1.021 0.126 0.297 0.317 0.536 0.575 0.714 0.258 0.172 0.585 0.258 0.983 0.258 0.416 0 0.754 -0.094 1.012 -0.279 0.264 -0.186 0.422 -0.4 0.477 -0.645h0.892a2.101 2.101 0 0 1 -0.436 0.942 2.107 2.107 0 0 1 -0.823 0.605 2.874 2.874 0 0 1 -1.121 0.208ZM20.558 9.796l0.873 -1.963h1.002L21.333 9.796h-0.774Zm6.578 6.248a2.569 2.569 0 0 1 -1.041 -0.208 2.537 2.537 0 0 1 -0.834 -0.585 2.823 2.823 0 0 1 -0.545 -0.873 2.99 2.99 0 0 1 -0.189 -1.071v-0.178c0 -0.376 0.063 -0.731 0.189 -1.061a2.792 2.792 0 0 1 0.525 -0.873 2.493 2.493 0 0 1 1.864 -0.804c0.404 0 0.769 0.087 1.1 0.259 0.332 0.164 0.602 0.427 0.813 0.783 0.211 0.357 0.331 0.821 0.357 1.39l-0.396 -0.634v-3.561h0.952v7.241h-0.754v-2.352h0.279c-0.027 0.602 -0.152 1.09 -0.378 1.468a2.087 2.087 0 0 1 -0.853 0.813 2.445 2.445 0 0 1 -1.09 0.248Zm0.129 -0.834c0.324 0 0.618 -0.073 0.884 -0.218 0.264 -0.146 0.477 -0.354 0.634 -0.625 0.159 -0.279 0.238 -0.602 0.238 -0.972v-0.456c0 -0.363 -0.083 -0.67 -0.248 -0.922a1.531 1.531 0 0 0 -0.644 -0.585 1.849 1.849 0 0 0 -0.873 -0.209 1.757 1.757 0 0 0 -0.933 0.248 1.73 1.73 0 0 0 -0.625 0.694 2.361 2.361 0 0 0 -0.218 1.051c0 0.404 0.077 0.757 0.228 1.061 0.152 0.297 0.363 0.529 0.634 0.694 0.271 0.159 0.579 0.238 0.923 0.238Zm4.755 0.654v-5.295h0.952v5.296h-0.952Zm-0.813 -4.543v-0.754h1.765v0.754h-1.765Zm1.082 -1.606c-0.211 0 -0.37 -0.057 -0.477 -0.168a0.62 0.62 0 0 1 -0.148 -0.427 0.62 0.62 0 0 1 0.148 -0.427c0.106 -0.112 0.264 -0.168 0.477 -0.168s0.367 0.057 0.467 0.169a0.596 0.596 0 0 1 0.159 0.427 0.597 0.597 0 0 1 -0.159 0.427c-0.099 0.112 -0.255 0.169 -0.467 0.169Zm4.965 6.327c-0.463 0 -0.87 -0.079 -1.219 -0.238a2.814 2.814 0 0 1 -0.893 -0.625 2.853 2.853 0 0 1 -0.545 -0.884 2.855 2.855 0 0 1 -0.18 -0.991v-0.179c0 -0.337 0.063 -0.667 0.189 -0.991 0.126 -0.332 0.31 -0.625 0.555 -0.884 0.245 -0.264 0.543 -0.472 0.893 -0.625a2.869 2.869 0 0 1 1.2 -0.238c0.449 0 0.85 0.079 1.2 0.238 0.35 0.152 0.647 0.361 0.892 0.625 0.245 0.257 0.431 0.552 0.555 0.884 0.126 0.324 0.189 0.654 0.189 0.991v0.18c0 0.337 -0.063 0.667 -0.189 0.991a2.614 2.614 0 0 1 -0.545 0.884 2.699 2.699 0 0 1 -0.884 0.625 2.925 2.925 0 0 1 -1.219 0.238Zm0 -0.853c0.396 0 0.733 -0.086 1.011 -0.257 0.285 -0.18 0.499 -0.417 0.645 -0.714 0.151 -0.297 0.228 -0.632 0.228 -1.002a2.192 2.192 0 0 0 -0.228 -1.012 1.724 1.724 0 0 0 -0.655 -0.704c-0.279 -0.172 -0.612 -0.257 -1.001 -0.257 -0.384 0 -0.717 0.086 -1.002 0.257a1.723 1.723 0 0 0 -0.655 0.705 2.199 2.199 0 0 0 -0.228 1.011c0 0.37 0.072 0.704 0.218 1.001 0.151 0.298 0.367 0.536 0.644 0.715 0.284 0.171 0.625 0.257 1.021 0.257Z"
                      fill="#FFFFFF80"
                      fillOpacity="1"
                    />
                  </svg>
                  <svg
                    className="new-task-svg"
                    width="40.2"
                    height="25.125"
                    viewBox="0 0 40.2 25.125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-high-stroke"
                        x="0.781508"
                        y="0.781508"
                        width="54.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#FFFFFF80"
                        strokeWidth="1.1220250714285718"
                        d="M12.566 0.561h15.075a12.005 12.005 0 0 1 12.005 12.005 12.005 12.005 0 0 1 -12.005 12.005H12.566A12.005 12.005 0 0 1 0.561 12.566 12.005 12.005 0 0 1 12.566 0.561z"
                      />
                      <path
                        className="task-type-risk-high-fill"
                        d="m9.258 16.155 2.656 -7.372h1.676l2.736 7.372h-1.021l-2.473 -6.726 0.484 0.243h-1.191l0.514 -0.243 -2.393 6.726h-0.989Zm1.585 -2.202 0.333 -0.888h3.182l0.333 0.888h-3.847Zm6.695 2.202V8.783h0.97v7.372h-0.97Zm-0.748 -6.605v-0.769h1.716v0.769h-1.716Zm5.676 6.664c-0.404 0 -0.754 -0.057 -1.05 -0.172a1.335 1.335 0 0 1 -0.677 -0.586c-0.155 -0.283 -0.232 -0.663 -0.232 -1.141V9.124h0.93v5.311c0 0.29 0.078 0.514 0.232 0.676 0.161 0.155 0.387 0.232 0.677 0.232h0.949v0.869h-0.828ZM19.579 11.488v-0.727h3.716v0.727H19.579Zm7.533 4.847c-0.472 0 -0.886 -0.08 -1.241 -0.243a2.866 2.866 0 0 1 -0.909 -0.636 2.905 2.905 0 0 1 -0.554 -0.899 2.907 2.907 0 0 1 -0.182 -1.009v-0.182c0 -0.343 0.065 -0.68 0.192 -1.009a2.662 2.662 0 0 1 0.564 -0.899 2.687 2.687 0 0 1 0.909 -0.636 2.914 2.914 0 0 1 1.222 -0.243c0.457 0 0.864 0.08 1.222 0.242 0.356 0.155 0.659 0.368 0.908 0.637 0.249 0.261 0.437 0.562 0.566 0.899 0.128 0.33 0.192 0.667 0.192 1.009v0.182c0 0.343 -0.065 0.68 -0.192 1.009a2.679 2.679 0 0 1 -0.556 0.899 2.748 2.748 0 0 1 -0.899 0.636c-0.356 0.162 -0.771 0.243 -1.241 0.243Zm0 -0.869c0.404 0 0.747 -0.087 1.029 -0.261 0.291 -0.182 0.508 -0.424 0.656 -0.727 0.154 -0.303 0.232 -0.644 0.232 -1.021a2.233 2.233 0 0 0 -0.232 -1.03 1.756 1.756 0 0 0 -0.668 -0.718c-0.283 -0.175 -0.623 -0.261 -1.02 -0.261 -0.391 0 -0.731 0.086 -1.021 0.261a1.756 1.756 0 0 0 -0.668 0.719c-0.154 0.302 -0.232 0.646 -0.232 1.029 0 0.377 0.074 0.718 0.223 1.02 0.154 0.304 0.374 0.546 0.656 0.728 0.29 0.174 0.636 0.261 1.039 0.261Z"
                        fill="#FFFFFF80"
                      />
                    </g>
                  </svg>

                  <svg
                    className="new-task-svg"
                    width="53.571"
                    height="25"
                    viewBox="0 0 53.571 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-critical-stroke"
                        x="0.781508"
                        y="0.781508"
                        width="73.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#FFFFFF80"
                        strokeWidth="1.1164339256"
                        d="M12.503 0.558H41.074A11.945 11.945 0 0 1 53.019 12.503V12.503A11.945 11.945 0 0 1 41.074 24.447H12.503A11.945 11.945 0 0 1 0.558 12.503V12.503A11.945 11.945 0 0 1 12.503 0.558z"
                      />
                      <path
                        className="task-type-risk-critical-fill"
                        d="M13.181 16.255c-0.67 0 -1.243 -0.117 -1.718 -0.351 -0.469 -0.235 -0.847 -0.539 -1.136 -0.914a3.839 3.839 0 0 1 -0.633 -1.216 4.394 4.394 0 0 1 -0.201 -1.276v-0.221c0 -0.441 0.066 -0.884 0.201 -1.326a3.739 3.739 0 0 1 0.643 -1.206c0.289 -0.362 0.664 -0.654 1.126 -0.874 0.462 -0.221 1.014 -0.331 1.657 -0.331 0.657 0 1.22 0.114 1.689 0.341a2.773 2.773 0 0 1 1.116 0.954c0.274 0.409 0.442 0.891 0.502 1.447h-1.005c-0.054 -0.416 -0.187 -0.757 -0.401 -1.025 -0.214 -0.274 -0.486 -0.479 -0.814 -0.613a2.799 2.799 0 0 0 -1.086 -0.201c-0.435 0 -0.816 0.076 -1.145 0.231 -0.329 0.148 -0.603 0.359 -0.824 0.633 -0.214 0.269 -0.379 0.58 -0.493 0.935a3.981 3.981 0 0 0 -0.161 1.155c0 0.396 0.054 0.771 0.161 1.126 0.114 0.355 0.281 0.67 0.502 0.944 0.228 0.275 0.509 0.493 0.844 0.654 0.336 0.154 0.727 0.231 1.176 0.231 0.63 0 1.159 -0.157 1.588 -0.472 0.429 -0.314 0.69 -0.771 0.784 -1.366h1.005a3.239 3.239 0 0 1 -0.513 1.376c-0.268 0.415 -0.643 0.747 -1.125 0.995 -0.476 0.248 -1.055 0.371 -1.739 0.371Zm4.661 -0.181v-5.366h0.764v2.211h-0.041c0 -0.784 0.171 -1.357 0.513 -1.719 0.348 -0.368 0.867 -0.552 1.557 -0.552h0.181v0.864h-0.341c-0.536 0 -0.948 0.144 -1.236 0.431 -0.289 0.281 -0.432 0.69 -0.432 1.226v2.904h-0.964Zm4.383 0v-5.366h0.964v5.366h-0.964Zm-0.824 -4.602v-0.764h1.789v0.764h-1.789Zm0.493 -1.547 0.884 -1.989h1.014l-1.115 1.989h-0.784Zm5.251 6.209c-0.401 0 -0.75 -0.057 -1.045 -0.171a1.329 1.329 0 0 1 -0.673 -0.583c-0.154 -0.281 -0.231 -0.66 -0.231 -1.136v-5.164h0.924v5.286c0 0.288 0.077 0.512 0.231 0.673 0.161 0.154 0.386 0.231 0.673 0.231h0.945v0.864h-0.824Zm-2.874 -4.702v-0.724h3.698v0.724H24.271Zm5.324 4.642v-5.366h0.964v5.366h-0.964Zm-0.824 -4.602v-0.764h1.789v0.764H28.771Zm1.095 -1.628c-0.214 0 -0.375 -0.057 -0.482 -0.171a0.629 0.629 0 0 1 -0.15 -0.432 0.629 0.629 0 0 1 0.15 -0.432c0.107 -0.114 0.268 -0.171 0.482 -0.171 0.214 0 0.371 0.057 0.473 0.171 0.107 0.114 0.161 0.257 0.161 0.431a0.605 0.605 0 0 1 -0.161 0.432c-0.101 0.114 -0.258 0.171 -0.472 0.171Zm4.86 6.411c-0.463 0 -0.864 -0.08 -1.206 -0.241a2.423 2.423 0 0 1 -0.834 -0.643 3.003 3.003 0 0 1 -0.502 -0.904c-0.107 -0.329 -0.161 -0.656 -0.161 -0.984v-0.181c0 -0.341 0.054 -0.676 0.161 -1.004 0.114 -0.329 0.281 -0.623 0.502 -0.884a2.526 2.526 0 0 1 0.844 -0.643c0.334 -0.161 0.726 -0.241 1.175 -0.241 0.449 0 0.851 0.084 1.206 0.251 0.362 0.168 0.65 0.406 0.864 0.714 0.221 0.301 0.345 0.659 0.371 1.075h-0.924a1.294 1.294 0 0 0 -0.463 -0.834c-0.261 -0.228 -0.613 -0.341 -1.055 -0.341 -0.381 0 -0.7 0.086 -0.954 0.261a1.593 1.593 0 0 0 -0.573 0.714 2.614 2.614 0 0 0 -0.191 1.024c0 0.369 0.064 0.707 0.191 1.014 0.127 0.302 0.319 0.543 0.573 0.724 0.261 0.174 0.586 0.261 0.975 0.261 0.301 0 0.562 -0.054 0.784 -0.161 0.221 -0.107 0.399 -0.251 0.532 -0.432 0.134 -0.181 0.214 -0.385 0.241 -0.613h0.924c-0.02 0.422 -0.144 0.787 -0.371 1.096 -0.221 0.308 -0.516 0.549 -0.884 0.723 -0.362 0.168 -0.771 0.251 -1.226 0.251Zm6.264 0c-0.469 0 -0.881 -0.08 -1.236 -0.241a2.851 2.851 0 0 1 -0.905 -0.633 2.891 2.891 0 0 1 -0.552 -0.894 2.893 2.893 0 0 1 -0.181 -1.004v-0.181c0 -0.341 0.064 -0.676 0.191 -1.004 0.127 -0.336 0.314 -0.634 0.562 -0.894 0.248 -0.268 0.55 -0.479 0.905 -0.633 0.355 -0.161 0.76 -0.241 1.216 -0.241 0.455 0 0.861 0.08 1.216 0.241 0.355 0.154 0.656 0.366 0.904 0.634 0.248 0.261 0.436 0.559 0.563 0.894 0.127 0.329 0.191 0.663 0.191 1.004v0.181c0 0.341 -0.064 0.676 -0.191 1.004 -0.121 0.329 -0.305 0.626 -0.553 0.894a2.734 2.734 0 0 1 -0.894 0.633c-0.355 0.161 -0.767 0.241 -1.236 0.241Zm0 -0.864c0.401 0 0.743 -0.087 1.024 -0.261 0.289 -0.181 0.506 -0.422 0.654 -0.724 0.154 -0.301 0.231 -0.64 0.231 -1.015 0 -0.382 -0.076 -0.724 -0.231 -1.025a1.746 1.746 0 0 0 -0.664 -0.714c-0.281 -0.174 -0.619 -0.261 -1.014 -0.261 -0.389 0 -0.727 0.086 -1.015 0.261a1.746 1.746 0 0 0 -0.664 0.714c-0.154 0.301 -0.231 0.643 -0.231 1.024 0 0.375 0.074 0.714 0.221 1.014 0.154 0.302 0.371 0.543 0.653 0.724 0.288 0.174 0.633 0.261 1.035 0.261Z"
                        fill="#FFFFFF80"
                      />
                    </g>
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="caption" id="new-task-modal-broker-title">
                  <span>Corretora</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.0901639"
                      y="0.0901639"
                      width="10.8197"
                      height="10.8197"
                      rx="3.87705"
                      stroke="#646872"
                      strokeWidth="0.1967214545454545"
                      d="M4.328 0.098H7.672A4.23 4.23 0 0 1 11.902 4.328V7.672A4.23 4.23 0 0 1 7.672 11.902H4.328A4.23 4.23 0 0 1 0.098 7.672V4.328A4.23 4.23 0 0 1 4.328 0.098z"
                    />
                    <path
                      d="M5.798 7.644V4.006h0.766v3.638h-0.766ZM4.418 6.181V5.476H7.953v0.705H4.418Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ marginRight: "12px" }}>
                  <Typography id="new-task-modal-initial-date">
                    Data de início
                  </Typography>
                  <input type="date" id="initial-date-task" />
                </Box>
                <Box>
                  <Typography id="new-task-modal-initial-date">
                    Data de Entrega
                  </Typography>
                  <input type="date" id="final-date-task" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", marginTop: "15px" }}>
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4 0V2.3H0V0H18.4ZM11.5 4.6V6.9H0V4.6H11.5ZM18.4 4.6V6.9H13.8V4.6H18.4ZM6.9 9.2V11.5H0V9.2H6.9ZM18.4 9.2V11.5H9.2V9.2H18.4ZM13.8 13.8V16.1H0V13.8H13.8Z"
                      fill="white"
                    />
                  </svg>
                  <Typography id="new-task-modal-description-title">
                    Descrição
                  </Typography>
                  <svg
                    style={{ alignSelf: "baseline" }}
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.10987 0.359795C5.1802 0.289493 5.27556 0.25 5.375 0.25C5.47444 0.25 5.5698 0.289493 5.64013 0.359795L7.14013 1.85979C7.21043 1.93012 7.24992 2.02548 7.24992 2.12492C7.24992 2.22436 7.21043 2.31972 7.14013 2.39004L2.26512 7.26505C2.19482 7.33538 2.09945 7.3749 2 7.37492H0.5C0.400544 7.37492 0.305161 7.33541 0.234835 7.26509C0.164509 7.19476 0.125 7.09938 0.125 6.99992V5.49992C0.125021 5.40047 0.164544 5.3051 0.234875 5.2348L5.10987 0.359795ZM4.25 2.28017L0.875 5.65517V6.62492H1.84475L5.21975 3.24992L4.25 2.28017ZM5.75 2.71967L6.34475 2.12492L5.375 1.15517L4.78025 1.74992L5.75 2.71967Z"
                      fill="white"
                    />
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <textarea
                  id="new-task-modal-textarea"
                  defaultValue={"Insira uma descrição (opcional)"}
                  rows={6}
                ></textarea>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button id="new-task-modal-save-button">Salvar</Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
      <BootstrapDialog
        onClose={handleCloseModalEmployee}
        aria-labelledby="customized-dialog-title"
        open={openModalEmployee}
      >
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleCloseModalEmployee}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box id="new-user-modal">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Adicionar funcionário</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" id="new-employee-title">
                  Corretora
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 -4 15 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.131148"
                      y="0.131148"
                      width="15.7377"
                      height="15.7377"
                      rx="5.63934"
                      stroke="#646872"
                      strokeWidth="0.262295"
                      d="M5.77 0.131H10.23A5.639 5.639 0 0 1 15.869 5.77V10.23A5.639 5.639 0 0 1 10.23 15.869H5.77A5.639 5.639 0 0 1 0.131 10.23V5.77A5.639 5.639 0 0 1 5.77 0.131z"
                    />
                    <path
                      d="M7.731 9.92V5.07h1.02v4.85h-1.02Zm-1.84 -1.95v-0.94h4.71v0.94h-4.71Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <svg
                  width="45"
                  height="30"
                  viewBox="0 -2 45 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    x="0.781508"
                    y="0.781508"
                    width="62.4452"
                    height="33.4452"
                    rx="16.7226"
                    stroke="white"
                    strokeWidth="1.0989984375"
                    d="M12.307 0.549h20.391A11.758 11.758 0 0 1 44.457 12.307a11.758 11.758 0 0 1 -11.758 11.758H12.307A11.758 11.758 0 0 1 0.549 12.307 11.758 11.758 0 0 1 12.307 0.549z"
                  />
                  <path
                    d="M13.065 16.001c-0.56 0 -1.069 -0.092 -1.523 -0.277a3.437 3.437 0 0 1 -1.177 -0.781 3.571 3.571 0 0 1 -0.753 -1.187 4.143 4.143 0 0 1 -0.267 -1.503v-0.218c0 -0.461 0.08 -0.907 0.237 -1.335a3.753 3.753 0 0 1 0.703 -1.167 3.277 3.277 0 0 1 1.127 -0.82 3.512 3.512 0 0 1 1.494 -0.307c0.6 0 1.134 0.116 1.602 0.346a2.834 2.834 0 0 1 1.127 0.95c0.283 0.402 0.448 0.871 0.494 1.405h-0.989c-0.046 -0.402 -0.178 -0.736 -0.395 -0.998a1.99 1.99 0 0 0 -0.811 -0.604 2.538 2.538 0 0 0 -1.028 -0.207c-0.376 0 -0.722 0.069 -1.038 0.207a2.322 2.322 0 0 0 -0.821 0.574 2.698 2.698 0 0 0 -0.524 0.9 3.471 3.471 0 0 0 -0.188 1.177c0 0.494 0.065 0.929 0.198 1.306 0.138 0.369 0.33 0.679 0.574 0.929 0.244 0.244 0.531 0.429 0.861 0.555 0.336 0.125 0.702 0.188 1.098 0.188 0.56 0 1.052 -0.113 1.474 -0.336 0.429 -0.231 0.753 -0.528 0.97 -0.89l-0.357 1.177V12.938h0.91v1.721a3.289 3.289 0 0 1 -1.245 0.989c-0.507 0.237 -1.091 0.355 -1.751 0.355Zm-0.258 -2.869v-0.811h3.868v0.811h-3.868Zm7.36 2.869c-0.461 0 -0.861 -0.079 -1.197 -0.237a2.319 2.319 0 0 1 -0.821 -0.623 2.78 2.78 0 0 1 -0.475 -0.88 3.359 3.359 0 0 1 -0.147 -0.989v-0.179c0 -0.342 0.049 -0.675 0.147 -0.998a2.644 2.644 0 0 1 0.475 -0.871c0.211 -0.263 0.478 -0.471 0.801 -0.623a2.643 2.643 0 0 1 1.158 -0.237c0.574 0 1.045 0.125 1.414 0.376 0.376 0.244 0.654 0.56 0.831 0.95 0.184 0.389 0.277 0.805 0.277 1.247v0.425h-4.689v-0.712H21.938l-0.218 0.386c0 -0.376 -0.06 -0.699 -0.178 -0.97a1.391 1.391 0 0 0 -0.534 -0.642c-0.237 -0.152 -0.538 -0.227 -0.9 -0.227 -0.376 0 -0.69 0.085 -0.939 0.257a1.59 1.59 0 0 0 -0.553 0.702 2.746 2.746 0 0 0 -0.179 1.028c0 0.376 0.06 0.716 0.179 1.019 0.125 0.297 0.316 0.534 0.574 0.712 0.257 0.171 0.584 0.258 0.979 0.258 0.415 0 0.753 -0.093 1.009 -0.277 0.263 -0.184 0.422 -0.399 0.475 -0.643h0.89a2.098 2.098 0 0 1 -0.435 0.941 2.104 2.104 0 0 1 -0.82 0.603 2.868 2.868 0 0 1 -1.118 0.207Zm3.811 -0.178V10.541h0.753v2.176h-0.04c0 -0.772 0.169 -1.337 0.505 -1.692 0.342 -0.362 0.854 -0.543 1.533 -0.543h0.178v0.851h-0.336c-0.528 0 -0.933 0.142 -1.216 0.425 -0.285 0.277 -0.425 0.679 -0.425 1.207v2.859h-0.95Zm7.233 0v-1.582h-0.159v-1.831c0 -0.363 -0.096 -0.637 -0.287 -0.821 -0.184 -0.184 -0.459 -0.277 -0.82 -0.277 -0.205 0 -0.415 0.003 -0.633 0.01l-0.623 0.02a8.92 8.92 0 0 0 -0.514 0.03V10.541c0.145 -0.013 0.297 -0.024 0.455 -0.029a6.165 6.165 0 0 1 0.504 -0.02c0.171 -0.007 0.336 -0.01 0.495 -0.01 0.541 0 0.982 0.065 1.325 0.198 0.342 0.125 0.596 0.333 0.762 0.623 0.164 0.29 0.246 0.682 0.246 1.177v3.344h-0.752Zm-1.731 0.138c-0.395 0 -0.738 -0.066 -1.028 -0.198a1.565 1.565 0 0 1 -0.663 -0.593 1.8 1.8 0 0 1 -0.228 -0.93c0 -0.376 0.083 -0.69 0.247 -0.939 0.171 -0.251 0.418 -0.439 0.741 -0.564 0.324 -0.132 0.712 -0.198 1.167 -0.198h1.434v0.712h-1.474c-0.383 0 -0.676 0.093 -0.88 0.277a0.919 0.919 0 0 0 -0.307 0.712c0 0.29 0.102 0.524 0.307 0.702 0.204 0.178 0.498 0.267 0.88 0.267 0.224 0 0.438 -0.039 0.642 -0.119a1.147 1.147 0 0 0 0.505 -0.415c0.137 -0.198 0.214 -0.468 0.227 -0.811l0.258 0.376a2.225 2.225 0 0 1 -0.277 0.95 1.432 1.432 0 0 1 -0.613 0.574c-0.258 0.132 -0.57 0.198 -0.941 0.198Zm4.285 -0.138V8.602h0.95v7.221h-0.95Zm-0.731 -6.469v-0.753h1.681v0.753h-1.681Z"
                    fill="white"
                  />
                </svg>
              </Grid>
              <Grid item xs={12}>
                <Typography id="new-document-title">
                  Informações pessoais
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input
                  type="text"
                  placeholder="Nome"
                  id="employeeName"
                  name="name"
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  type="text"
                  placeholder="Sobrenome"
                  id="employeeLastName"
                  name="lastname"
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  type="text"
                  placeholder="Email do novo funcionário"
                  id="employeeEmail"
                  name="email"
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  type="text"
                  placeholder="Cargo"
                  id="employeeOffice"
                  name="office"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography id="new-document-permissions-title">
                  Permissões
                </Typography>
              </Grid>
              <Box sx={{ width: "200px" }}>
                <Grid item xs={12} className="permissions-with-switch">
                  <Box>
                    <Typography id="new-document-general-access-title">
                      Acesso geral
                      <svg
                        className="new-employee-document-help"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="7.5" r="7.5" fill="#39445B" />
                        <path
                          opacity="0.5"
                          d="M7.79356 8.88685V7.08389H8.4624C8.92122 7.08389 9.26049 6.96111 9.4802 6.71555C9.70638 6.46998 9.81947 6.16949 9.81947 5.81407C9.81947 5.54912 9.76454 5.32294 9.65468 5.13553C9.54482 4.94167 9.38973 4.79627 9.1894 4.69933C8.99553 4.59594 8.77259 4.54424 8.52056 4.54424C8.22976 4.54424 7.97773 4.60563 7.76448 4.72841C7.55769 4.84473 7.39613 5.00629 7.27981 5.21308C7.16349 5.41341 7.10533 5.64605 7.10533 5.911H6.21355C6.21355 5.52973 6.29756 5.17431 6.46557 4.84473C6.64005 4.51516 6.89854 4.24698 7.24104 4.04019C7.58354 3.83339 8.01005 3.73 8.52056 3.73C8.97292 3.73 9.36065 3.8237 9.68376 4.01111C10.0133 4.19205 10.2654 4.43761 10.4398 4.7478C10.6208 5.05152 10.7113 5.38756 10.7113 5.75591V5.87223C10.7113 6.23411 10.624 6.56692 10.4495 6.87064C10.2751 7.17436 10.0133 7.4167 9.66437 7.59764C9.32188 7.77212 8.8986 7.85936 8.39455 7.85936L8.74351 7.41347L8.72412 8.88685H7.79356ZM7.69663 11V9.81741H8.82105V11H7.69663Z"
                          fill="white"
                        />
                      </svg>
                    </Typography>
                  </Box>
                  <CandleSwitch className="CandleSwitch" size="small" />
                </Grid>
                <Grid item xs={12} className="permissions-with-switch">
                  <Box>
                    <Typography id="new-document-financial-access-title">
                      Acesso financeiro
                      <svg
                        className="new-employee-document-help"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="7.5" r="7.5" fill="#39445B" />
                        <path
                          opacity="0.5"
                          d="M7.79356 8.88685V7.08389H8.4624C8.92122 7.08389 9.26049 6.96111 9.4802 6.71555C9.70638 6.46998 9.81947 6.16949 9.81947 5.81407C9.81947 5.54912 9.76454 5.32294 9.65468 5.13553C9.54482 4.94167 9.38973 4.79627 9.1894 4.69933C8.99553 4.59594 8.77259 4.54424 8.52056 4.54424C8.22976 4.54424 7.97773 4.60563 7.76448 4.72841C7.55769 4.84473 7.39613 5.00629 7.27981 5.21308C7.16349 5.41341 7.10533 5.64605 7.10533 5.911H6.21355C6.21355 5.52973 6.29756 5.17431 6.46557 4.84473C6.64005 4.51516 6.89854 4.24698 7.24104 4.04019C7.58354 3.83339 8.01005 3.73 8.52056 3.73C8.97292 3.73 9.36065 3.8237 9.68376 4.01111C10.0133 4.19205 10.2654 4.43761 10.4398 4.7478C10.6208 5.05152 10.7113 5.38756 10.7113 5.75591V5.87223C10.7113 6.23411 10.624 6.56692 10.4495 6.87064C10.2751 7.17436 10.0133 7.4167 9.66437 7.59764C9.32188 7.77212 8.8986 7.85936 8.39455 7.85936L8.74351 7.41347L8.72412 8.88685H7.79356ZM7.69663 11V9.81741H8.82105V11H7.69663Z"
                          fill="white"
                        />
                      </svg>
                    </Typography>
                  </Box>
                  <CandleSwitch className="CandleSwitch" size="small" />
                </Grid>
                <Grid item xs={12} className="permissions-with-switch">
                  <Box>
                    <Typography id="new-document-permissions-access-support-title">
                      Acesso suporte
                      <svg
                        className="new-employee-document-help"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="7.5" r="7.5" fill="#39445B" />
                        <path
                          opacity="0.5"
                          d="M7.79356 8.88685V7.08389H8.4624C8.92122 7.08389 9.26049 6.96111 9.4802 6.71555C9.70638 6.46998 9.81947 6.16949 9.81947 5.81407C9.81947 5.54912 9.76454 5.32294 9.65468 5.13553C9.54482 4.94167 9.38973 4.79627 9.1894 4.69933C8.99553 4.59594 8.77259 4.54424 8.52056 4.54424C8.22976 4.54424 7.97773 4.60563 7.76448 4.72841C7.55769 4.84473 7.39613 5.00629 7.27981 5.21308C7.16349 5.41341 7.10533 5.64605 7.10533 5.911H6.21355C6.21355 5.52973 6.29756 5.17431 6.46557 4.84473C6.64005 4.51516 6.89854 4.24698 7.24104 4.04019C7.58354 3.83339 8.01005 3.73 8.52056 3.73C8.97292 3.73 9.36065 3.8237 9.68376 4.01111C10.0133 4.19205 10.2654 4.43761 10.4398 4.7478C10.6208 5.05152 10.7113 5.38756 10.7113 5.75591V5.87223C10.7113 6.23411 10.624 6.56692 10.4495 6.87064C10.2751 7.17436 10.0133 7.4167 9.66437 7.59764C9.32188 7.77212 8.8986 7.85936 8.39455 7.85936L8.74351 7.41347L8.72412 8.88685H7.79356ZM7.69663 11V9.81741H8.82105V11H7.69663Z"
                          fill="white"
                        />
                      </svg>
                    </Typography>
                  </Box>
                  <CandleSwitch className="CandleSwitch" size="small" />
                </Grid>
                <Grid item xs={12} className="permissions-with-switch">
                  <Box>
                    <Typography id="new-document-permissions-usercontrol-title">
                      Controle de usuários
                      <svg
                        className="new-employee-document-help"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="7.5" r="7.5" fill="#39445B" />
                        <path
                          opacity="0.5"
                          d="M7.79356 8.88685V7.08389H8.4624C8.92122 7.08389 9.26049 6.96111 9.4802 6.71555C9.70638 6.46998 9.81947 6.16949 9.81947 5.81407C9.81947 5.54912 9.76454 5.32294 9.65468 5.13553C9.54482 4.94167 9.38973 4.79627 9.1894 4.69933C8.99553 4.59594 8.77259 4.54424 8.52056 4.54424C8.22976 4.54424 7.97773 4.60563 7.76448 4.72841C7.55769 4.84473 7.39613 5.00629 7.27981 5.21308C7.16349 5.41341 7.10533 5.64605 7.10533 5.911H6.21355C6.21355 5.52973 6.29756 5.17431 6.46557 4.84473C6.64005 4.51516 6.89854 4.24698 7.24104 4.04019C7.58354 3.83339 8.01005 3.73 8.52056 3.73C8.97292 3.73 9.36065 3.8237 9.68376 4.01111C10.0133 4.19205 10.2654 4.43761 10.4398 4.7478C10.6208 5.05152 10.7113 5.38756 10.7113 5.75591V5.87223C10.7113 6.23411 10.624 6.56692 10.4495 6.87064C10.2751 7.17436 10.0133 7.4167 9.66437 7.59764C9.32188 7.77212 8.8986 7.85936 8.39455 7.85936L8.74351 7.41347L8.72412 8.88685H7.79356ZM7.69663 11V9.81741H8.82105V11H7.69663Z"
                          fill="white"
                        />
                      </svg>
                    </Typography>
                  </Box>
                  <CandleSwitch className="CandleSwitch" size="small" />
                </Grid>
              </Box>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button id="add-employee-button">Adicionar</Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
      <BootstrapDialog
        onClose={handleCloseModalTaskView}
        aria-labelledby="customized-dialog-title"
        open={openModalTaskView}
      >
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleCloseModalTaskView}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box id="task-view-modal">
            <Grid container>
              <Grid item xs={12}>
                <Typography id="task-view-title">
                  Criação White Label João
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 0.7416L13.2517 7.67163L13.3032 7.82998H13.4697H20.7563L14.8613 12.113L14.7266 12.2108L14.778 12.3692L17.0297 19.2992L11.1347 15.0162L11 14.9184L10.8653 15.0162L4.97026 19.2992L7.22197 12.3692L7.27342 12.2108L7.13872 12.113L1.24368 7.82998H8.53035H8.69685L8.7483 7.67163L11 0.7416Z"
                      fill="#272B38"
                      stroke="#525560"
                      strokeWidth="0.458333"
                    />
                  </svg>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className="signatures-dialog">
                  <Box id="signated-by-title">Assinado por</Box>
                  <Box>
                    <AvatarGroup max={4}>
                      <Avatar
                        className="task-card-avatar-image-dialog"
                        alt="Adriano Coutinho"
                        src={AdrianoCoutinho}
                      />
                      <Avatar
                        className="task-card-avatar-image-dialog"
                        alt="Jefferson Antunes"
                        src={JeffAntunes}
                      />
                      <Avatar
                        className="task-card-avatar-image-dialog"
                        alt="David Barros"
                        src={DavidBarros}
                      />
                      <Avatar
                        className="task-card-avatar-image-dialog"
                        alt="Pedro Antunes"
                        src={PedroPaes}
                      />
                      <Avatar
                        className="task-card-avatar-image-dialog"
                        alt="Pedro Antunes"
                        src={PedroPaes}
                      />
                    </AvatarGroup>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={2.5}>
                <Typography id="dialog-task-modal-category-title">
                  <span>Categoria</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.0901639"
                      y="0.0901639"
                      width="10.8197"
                      height="10.8197"
                      rx="3.87705"
                      stroke="#646872"
                      strokeWidth="0.1967214545454545"
                      d="M4.328 0.098H7.672A4.23 4.23 0 0 1 11.902 4.328V7.672A4.23 4.23 0 0 1 7.672 11.902H4.328A4.23 4.23 0 0 1 0.098 7.672V4.328A4.23 4.23 0 0 1 4.328 0.098z"
                    />
                    <path
                      d="M5.798 7.644V4.006h0.766v3.638h-0.766ZM4.418 6.181V5.476H7.953v0.705H4.418Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
                <Box sx={{ marginTop: "5px" }}>
                  <svg
                    width="80"
                    height="25.688"
                    viewBox="0 0 80 25.688"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.781508"
                      y="0.781508"
                      width="107.445"
                      height="33.4452"
                      rx="16.7226"
                      stroke="white"
                      strokeWidth="1.147170642201835"
                      d="M12.847 0.574H67.159A12.273 12.273 0 0 1 79.432 12.847V12.847A12.273 12.273 0 0 1 67.159 25.121H12.847A12.273 12.273 0 0 1 0.574 12.847V12.847A12.273 12.273 0 0 1 12.847 0.574z"
                    />
                    <path
                      d="m11.521 16.517 -2.034 -7.538h1.042l1.766 6.877 -0.485 -0.248h1.229l-0.537 0.248 1.436 -6.567h0.95l-1.642 7.227h-1.724Zm4.533 0 -1.807 -7.227h0.981l1.621 6.567 -0.517 -0.248h1.24l-0.527 0.248 1.579 -6.877h1.012l-1.848 7.538h-1.734Zm4.842 0v-7.538h0.991v4.502h-0.247c0 -0.543 0.068 -1.011 0.206 -1.404 0.145 -0.399 0.366 -0.705 0.661 -0.919 0.296 -0.213 0.675 -0.32 1.135 -0.32h0.042c0.661 0 1.16 0.22 1.497 0.661 0.338 0.434 0.506 1.057 0.506 1.869v3.149h-0.991v-3.354c0 -0.448 -0.128 -0.796 -0.382 -1.044 -0.248 -0.247 -0.572 -0.371 -0.97 -0.371 -0.44 0 -0.796 0.148 -1.064 0.444 -0.261 0.289 -0.392 0.671 -0.392 1.146v3.18h-0.991Zm6.872 0v-5.513h0.991v5.513h-0.991ZM26.921 11.787v-0.785h1.838v0.785H26.921Zm1.125 -1.673c-0.22 0 -0.385 -0.059 -0.495 -0.175a0.646 0.646 0 0 1 -0.155 -0.444 0.646 0.646 0 0 1 0.155 -0.444c0.11 -0.117 0.275 -0.175 0.495 -0.175 0.22 0 0.382 0.059 0.485 0.176 0.11 0.117 0.165 0.264 0.165 0.443a0.622 0.622 0 0 1 -0.165 0.444c-0.103 0.117 -0.264 0.176 -0.484 0.176Zm4.777 6.463c-0.413 0 -0.771 -0.059 -1.074 -0.175a1.365 1.365 0 0 1 -0.692 -0.599c-0.158 -0.289 -0.237 -0.678 -0.237 -1.167v-5.306h0.95v5.431c0 0.296 0.079 0.526 0.238 0.691 0.165 0.159 0.396 0.237 0.691 0.237h0.97v0.888h-0.846Zm-2.953 -4.832v-0.743h3.799v0.743h-3.799Zm7.505 4.956c-0.482 0 -0.898 -0.082 -1.249 -0.248a2.421 2.421 0 0 1 -0.857 -0.65 2.899 2.899 0 0 1 -0.495 -0.919 3.507 3.507 0 0 1 -0.155 -1.032v-0.186c0 -0.357 0.051 -0.705 0.154 -1.042 0.11 -0.338 0.276 -0.641 0.496 -0.909 0.22 -0.275 0.499 -0.492 0.837 -0.65 0.343 -0.166 0.746 -0.248 1.207 -0.248 0.599 0 1.091 0.131 1.477 0.392 0.393 0.255 0.681 0.585 0.868 0.991 0.192 0.407 0.289 0.84 0.289 1.301v0.444h-4.894v-0.743h4.171l-0.228 0.403c0 -0.393 -0.062 -0.73 -0.186 -1.012a1.452 1.452 0 0 0 -0.558 -0.671c-0.247 -0.159 -0.561 -0.237 -0.939 -0.237 -0.392 0 -0.719 0.089 -0.981 0.268 -0.255 0.179 -0.448 0.423 -0.578 0.733 -0.124 0.31 -0.186 0.668 -0.186 1.074 0 0.392 0.062 0.746 0.186 1.063 0.131 0.31 0.33 0.558 0.599 0.743 0.269 0.179 0.609 0.269 1.022 0.269 0.433 0 0.785 -0.097 1.053 -0.289 0.275 -0.193 0.44 -0.417 0.495 -0.672h0.929a2.187 2.187 0 0 1 -0.454 0.981c-0.228 0.275 -0.513 0.484 -0.857 0.63 -0.343 0.145 -0.732 0.217 -1.167 0.217Zm6.472 -0.186v-7.538h1.011v7.538h-1.011Zm0.805 0v-0.909h3.448v0.909h-3.448Zm8.001 0v-1.651h-0.165V12.954c0 -0.379 -0.1 -0.664 -0.299 -0.857 -0.192 -0.192 -0.479 -0.289 -0.857 -0.289 -0.214 0 -0.434 0.004 -0.661 0.01l-0.651 0.021c-0.206 0.007 -0.385 0.018 -0.537 0.032v-0.868c0.151 -0.014 0.31 -0.024 0.475 -0.031 0.172 -0.014 0.347 -0.021 0.526 -0.021 0.179 -0.007 0.351 -0.01 0.517 -0.01 0.564 0 1.025 0.068 1.383 0.206 0.357 0.131 0.622 0.348 0.795 0.65 0.172 0.303 0.258 0.712 0.258 1.229v3.49H52.653Zm-1.807 0.145c-0.412 0 -0.771 -0.069 -1.074 -0.207a1.634 1.634 0 0 1 -0.691 -0.619c-0.159 -0.269 -0.238 -0.592 -0.238 -0.971 0 -0.392 0.087 -0.719 0.258 -0.981 0.179 -0.262 0.437 -0.458 0.774 -0.589 0.338 -0.138 0.743 -0.206 1.218 -0.206h1.497v0.743h-1.538c-0.399 0 -0.706 0.097 -0.919 0.289 -0.213 0.193 -0.32 0.44 -0.32 0.743 0 0.303 0.106 0.548 0.32 0.733 0.213 0.186 0.52 0.279 0.919 0.279 0.234 0 0.457 -0.041 0.671 -0.125 0.213 -0.089 0.389 -0.233 0.527 -0.433 0.145 -0.206 0.223 -0.489 0.237 -0.846l0.269 0.392c-0.034 0.393 -0.131 0.723 -0.289 0.991a1.495 1.495 0 0 1 -0.64 0.599c-0.269 0.138 -0.595 0.207 -0.981 0.207Zm7.323 0.041c-0.455 0 -0.86 -0.1 -1.218 -0.299a2.162 2.162 0 0 1 -0.837 -0.867c-0.206 -0.386 -0.32 -0.847 -0.341 -1.384h0.269v2.365h-0.785v-7.538h0.992v3.666l-0.351 0.754c0.028 -0.599 0.148 -1.088 0.361 -1.466 0.214 -0.379 0.492 -0.657 0.837 -0.837a2.432 2.432 0 0 1 1.156 -0.279c0.393 0 0.751 0.076 1.074 0.228 0.324 0.145 0.602 0.348 0.837 0.609 0.234 0.255 0.413 0.554 0.537 0.898 0.125 0.338 0.186 0.702 0.186 1.094v0.186c0 0.393 -0.066 0.761 -0.197 1.105a2.763 2.763 0 0 1 -0.547 0.919 2.626 2.626 0 0 1 -0.868 0.619 2.62 2.62 0 0 1 -1.105 0.228Zm-0.114 -0.867c0.372 0 0.695 -0.09 0.97 -0.269 0.275 -0.179 0.489 -0.423 0.64 -0.733 0.152 -0.316 0.228 -0.681 0.228 -1.094 0 -0.413 -0.079 -0.774 -0.237 -1.084a1.654 1.654 0 0 0 -0.641 -0.712c-0.275 -0.172 -0.594 -0.258 -0.96 -0.258 -0.33 0 -0.636 0.076 -0.919 0.227a1.69 1.69 0 0 0 -0.681 0.64c-0.165 0.275 -0.248 0.609 -0.248 1.002v0.475c0 0.378 0.086 0.702 0.258 0.97 0.172 0.269 0.399 0.475 0.681 0.619 0.283 0.145 0.585 0.217 0.909 0.217Zm6.664 0.867c-0.482 0 -0.898 -0.082 -1.249 -0.248a2.421 2.421 0 0 1 -0.857 -0.65 2.901 2.901 0 0 1 -0.495 -0.919 3.51 3.51 0 0 1 -0.155 -1.032v-0.186c0 -0.357 0.051 -0.705 0.154 -1.042 0.11 -0.338 0.276 -0.641 0.496 -0.909 0.22 -0.275 0.499 -0.492 0.837 -0.65 0.343 -0.166 0.746 -0.248 1.207 -0.248 0.599 0 1.091 0.131 1.477 0.392 0.393 0.255 0.681 0.585 0.868 0.991 0.192 0.407 0.289 0.84 0.289 1.301v0.444h-4.894v-0.743h4.171l-0.228 0.403c0 -0.393 -0.062 -0.73 -0.186 -1.012a1.452 1.452 0 0 0 -0.558 -0.671c-0.247 -0.159 -0.561 -0.237 -0.939 -0.237 -0.392 0 -0.719 0.089 -0.981 0.268 -0.255 0.179 -0.448 0.423 -0.578 0.733 -0.124 0.31 -0.186 0.668 -0.186 1.074 0 0.392 0.062 0.746 0.186 1.063 0.131 0.31 0.33 0.558 0.599 0.743 0.269 0.179 0.609 0.269 1.022 0.269 0.433 0 0.785 -0.097 1.053 -0.289 0.275 -0.193 0.44 -0.417 0.495 -0.672h0.929a2.187 2.187 0 0 1 -0.455 0.981c-0.227 0.275 -0.512 0.484 -0.857 0.63 -0.344 0.145 -0.732 0.217 -1.167 0.217Zm4.04 -0.186v-7.538h0.991v7.538h-0.991Zm-0.763 -6.752v-0.785h1.754v0.785h-1.754Z"
                      fill="white"
                    />
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" id="dialog-task-type-title">
                  Urgência
                </Typography>
                <Box id="new-task-button-type-risk">
                  <svg
                    className="new-task-svg"
                    width="45"
                    height="25"
                    viewBox="0 0.5 45 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-low-stroke"
                        x="0.781508"
                        y="0.789809"
                        width="63.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#fff"
                        strokeWidth="1.0820907692307693"
                        d="M12.118 0.547H32.887A11.577 11.577 0 0 1 44.465 12.124V12.124A11.577 11.577 0 0 1 32.887 23.701H12.118A11.577 11.577 0 0 1 0.541 12.124V12.124A11.577 11.577 0 0 1 12.118 0.547z"
                      />
                      <path
                        d="M10.448 15.625v-0.838h1.987c0.383 0 0.678 -0.107 0.886 -0.322 0.215 -0.22 0.321 -0.512 0.321 -0.876 0 -0.37 -0.104 -0.658 -0.312 -0.867 -0.208 -0.214 -0.506 -0.321 -0.896 -0.321h-1.987v-0.623h1.851c0.455 0 0.854 0.055 1.198 0.166 0.351 0.11 0.623 0.295 0.818 0.554 0.201 0.254 0.302 0.601 0.302 1.043v0.136c0 0.415 -0.084 0.769 -0.253 1.061 -0.169 0.286 -0.425 0.507 -0.769 0.663 -0.344 0.15 -0.775 0.224 -1.295 0.224h-1.851Zm-0.759 0V8.437h0.955v7.188h-0.955Zm0.759 -3.399v-0.623h1.724c0.403 0 0.698 -0.107 0.886 -0.322 0.195 -0.22 0.292 -0.5 0.292 -0.838 0 -0.343 -0.097 -0.623 -0.292 -0.837 -0.188 -0.221 -0.483 -0.331 -0.886 -0.331h-1.724v-0.838h1.558c0.779 0 1.36 0.166 1.743 0.496 0.383 0.325 0.575 0.796 0.575 1.412v0.136c0 0.435 -0.097 0.782 -0.292 1.042 -0.195 0.253 -0.467 0.435 -0.818 0.546 -0.344 0.104 -0.746 0.156 -1.207 0.156h-1.558Zm8.869 3.36v-1.558h-0.156v-1.802c0 -0.357 -0.094 -0.627 -0.282 -0.809 -0.182 -0.181 -0.451 -0.272 -0.809 -0.272 -0.201 0 -0.408 0.003 -0.623 0.01 -0.215 0.006 -0.419 0.012 -0.613 0.019 -0.195 0.007 -0.363 0.016 -0.507 0.029V10.385c0.143 -0.012 0.292 -0.023 0.449 -0.029 0.162 -0.013 0.327 -0.019 0.496 -0.019 0.169 -0.007 0.331 -0.01 0.487 -0.01 0.533 0 0.968 0.065 1.305 0.195 0.338 0.124 0.588 0.328 0.75 0.614 0.162 0.285 0.243 0.672 0.243 1.159v3.291h-0.74Zm-1.704 0.136c-0.389 0 -0.727 -0.065 -1.013 -0.195a1.542 1.542 0 0 1 -0.652 -0.584c-0.15 -0.253 -0.224 -0.559 -0.224 -0.915 0 -0.37 0.081 -0.678 0.244 -0.926 0.169 -0.246 0.412 -0.432 0.73 -0.555 0.318 -0.129 0.701 -0.195 1.149 -0.195h1.412v0.701h-1.451c-0.377 0 -0.666 0.091 -0.867 0.273 -0.201 0.181 -0.302 0.415 -0.302 0.701 0 0.285 0.1 0.516 0.302 0.691 0.201 0.175 0.49 0.263 0.867 0.263 0.221 0 0.431 -0.039 0.633 -0.117 0.201 -0.084 0.367 -0.221 0.496 -0.408 0.136 -0.195 0.211 -0.461 0.224 -0.799l0.253 0.37c-0.033 0.37 -0.123 0.681 -0.273 0.935a1.41 1.41 0 0 1 -0.604 0.565c-0.253 0.129 -0.561 0.195 -0.926 0.195Zm4.413 -0.136V10.385h0.935v5.201h-0.935Zm-0.798 -4.46V10.385h1.734v0.741h-1.734Zm1.061 -1.578c-0.208 0 -0.363 -0.055 -0.467 -0.165a0.609 0.609 0 0 1 -0.146 -0.418 0.609 0.609 0 0 1 0.146 -0.419c0.104 -0.111 0.26 -0.166 0.467 -0.166 0.208 0 0.36 0.055 0.458 0.166 0.104 0.111 0.156 0.249 0.156 0.419a0.586 0.586 0 0 1 -0.156 0.418c-0.097 0.111 -0.249 0.166 -0.457 0.166Zm1.857 6.038 1.86 -2.737 -0.03 0.195L24.234 10.385h1.032l1.257 1.957h0.136L27.847 10.385h0.964l-1.646 2.591 0.029 -0.175 1.947 2.785h-1.032l-1.461 -2.113h-0.136l-1.403 2.113h-0.964Zm8.354 0.175c-0.454 0 -0.854 -0.078 -1.198 -0.233a2.764 2.764 0 0 1 -0.876 -0.613 2.801 2.801 0 0 1 -0.536 -0.867 2.804 2.804 0 0 1 -0.175 -0.974v-0.175c0 -0.332 0.062 -0.656 0.185 -0.974 0.123 -0.325 0.305 -0.613 0.546 -0.867 0.24 -0.26 0.532 -0.464 0.876 -0.613 0.344 -0.156 0.737 -0.234 1.178 -0.234 0.442 0 0.834 0.078 1.178 0.234 0.344 0.149 0.637 0.353 0.876 0.613 0.24 0.253 0.422 0.542 0.546 0.867 0.123 0.318 0.185 0.642 0.185 0.974v0.175c0 0.331 -0.062 0.656 -0.185 0.974a2.575 2.575 0 0 1 -0.536 0.867 2.65 2.65 0 0 1 -0.867 0.613c-0.344 0.156 -0.743 0.233 -1.198 0.233Zm0 -0.838c0.39 0 0.721 -0.084 0.993 -0.253 0.279 -0.175 0.49 -0.408 0.633 -0.701 0.15 -0.292 0.224 -0.62 0.224 -0.983 0 -0.37 -0.075 -0.702 -0.224 -0.994a1.692 1.692 0 0 0 -0.642 -0.691c-0.273 -0.169 -0.6 -0.253 -0.983 -0.253 -0.377 0 -0.705 0.084 -0.984 0.253a1.693 1.693 0 0 0 -0.642 0.691c-0.15 0.292 -0.224 0.623 -0.224 0.993 0 0.364 0.071 0.692 0.214 0.984 0.15 0.292 0.36 0.526 0.633 0.701 0.28 0.169 0.613 0.253 1.004 0.253Z"
                        fill="#fff"
                        className="task-type-risk-low-fill"
                      />
                    </g>
                  </svg>
                  <svg
                    className="new-task-svg"
                    width="50.057"
                    height="25.676"
                    viewBox="0 1 50.057 22.676"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="task-type-risk-medium-stroke"
                      x="0.781508"
                      y="0.781508"
                      width="69.4452"
                      height="33.4452"
                      rx="16.7226"
                      stroke="#FFFFFF80"
                      strokeOpacity="1"
                      strokeWidth="1.1019731287323944"
                      d="M12.341 0.551h25.381a11.791 11.791 0 0 1 11.791 11.79 11.791 11.791 0 0 1 -11.791 11.791H12.341A11.791 11.791 0 0 1 0.551 12.341 11.791 11.791 0 0 1 12.341 0.551z"
                    />
                    <path
                      className="task-type-risk-medium-fill"
                      d="M9.867 15.866V8.625h1.289l2.142 4.832h0.159l2.133 -4.829h1.299v7.241h-0.972V9.687l0.069 0.02 -2.052 4.662h-1.19l-2.065 -4.662 0.08 -0.02v6.179H9.867Zm11.236 0.178c-0.463 0 -0.863 -0.079 -1.2 -0.238a2.324 2.324 0 0 1 -0.823 -0.625 2.786 2.786 0 0 1 -0.477 -0.884 3.368 3.368 0 0 1 -0.148 -0.991v-0.18c0 -0.344 0.049 -0.677 0.148 -1.001 0.106 -0.324 0.264 -0.615 0.477 -0.873a2.213 2.213 0 0 1 0.804 -0.625 2.648 2.648 0 0 1 1.16 -0.238c0.575 0 1.048 0.126 1.418 0.376 0.378 0.245 0.655 0.562 0.834 0.952 0.185 0.391 0.279 0.807 0.279 1.25v0.427h-4.701v-0.714h4.007l-0.218 0.387c0 -0.378 -0.059 -0.701 -0.178 -0.972a1.395 1.395 0 0 0 -0.536 -0.644c-0.238 -0.152 -0.539 -0.228 -0.902 -0.228 -0.376 0 -0.691 0.086 -0.942 0.257 -0.245 0.172 -0.431 0.407 -0.555 0.704a2.74 2.74 0 0 0 -0.18 1.032c0 0.376 0.06 0.717 0.18 1.021 0.126 0.297 0.317 0.536 0.575 0.714 0.258 0.172 0.585 0.258 0.983 0.258 0.416 0 0.754 -0.094 1.012 -0.279 0.264 -0.186 0.422 -0.4 0.477 -0.645h0.892a2.101 2.101 0 0 1 -0.436 0.942 2.107 2.107 0 0 1 -0.823 0.605 2.874 2.874 0 0 1 -1.121 0.208ZM20.558 9.796l0.873 -1.963h1.002L21.333 9.796h-0.774Zm6.578 6.248a2.569 2.569 0 0 1 -1.041 -0.208 2.537 2.537 0 0 1 -0.834 -0.585 2.823 2.823 0 0 1 -0.545 -0.873 2.99 2.99 0 0 1 -0.189 -1.071v-0.178c0 -0.376 0.063 -0.731 0.189 -1.061a2.792 2.792 0 0 1 0.525 -0.873 2.493 2.493 0 0 1 1.864 -0.804c0.404 0 0.769 0.087 1.1 0.259 0.332 0.164 0.602 0.427 0.813 0.783 0.211 0.357 0.331 0.821 0.357 1.39l-0.396 -0.634v-3.561h0.952v7.241h-0.754v-2.352h0.279c-0.027 0.602 -0.152 1.09 -0.378 1.468a2.087 2.087 0 0 1 -0.853 0.813 2.445 2.445 0 0 1 -1.09 0.248Zm0.129 -0.834c0.324 0 0.618 -0.073 0.884 -0.218 0.264 -0.146 0.477 -0.354 0.634 -0.625 0.159 -0.279 0.238 -0.602 0.238 -0.972v-0.456c0 -0.363 -0.083 -0.67 -0.248 -0.922a1.531 1.531 0 0 0 -0.644 -0.585 1.849 1.849 0 0 0 -0.873 -0.209 1.757 1.757 0 0 0 -0.933 0.248 1.73 1.73 0 0 0 -0.625 0.694 2.361 2.361 0 0 0 -0.218 1.051c0 0.404 0.077 0.757 0.228 1.061 0.152 0.297 0.363 0.529 0.634 0.694 0.271 0.159 0.579 0.238 0.923 0.238Zm4.755 0.654v-5.295h0.952v5.296h-0.952Zm-0.813 -4.543v-0.754h1.765v0.754h-1.765Zm1.082 -1.606c-0.211 0 -0.37 -0.057 -0.477 -0.168a0.62 0.62 0 0 1 -0.148 -0.427 0.62 0.62 0 0 1 0.148 -0.427c0.106 -0.112 0.264 -0.168 0.477 -0.168s0.367 0.057 0.467 0.169a0.596 0.596 0 0 1 0.159 0.427 0.597 0.597 0 0 1 -0.159 0.427c-0.099 0.112 -0.255 0.169 -0.467 0.169Zm4.965 6.327c-0.463 0 -0.87 -0.079 -1.219 -0.238a2.814 2.814 0 0 1 -0.893 -0.625 2.853 2.853 0 0 1 -0.545 -0.884 2.855 2.855 0 0 1 -0.18 -0.991v-0.179c0 -0.337 0.063 -0.667 0.189 -0.991 0.126 -0.332 0.31 -0.625 0.555 -0.884 0.245 -0.264 0.543 -0.472 0.893 -0.625a2.869 2.869 0 0 1 1.2 -0.238c0.449 0 0.85 0.079 1.2 0.238 0.35 0.152 0.647 0.361 0.892 0.625 0.245 0.257 0.431 0.552 0.555 0.884 0.126 0.324 0.189 0.654 0.189 0.991v0.18c0 0.337 -0.063 0.667 -0.189 0.991a2.614 2.614 0 0 1 -0.545 0.884 2.699 2.699 0 0 1 -0.884 0.625 2.925 2.925 0 0 1 -1.219 0.238Zm0 -0.853c0.396 0 0.733 -0.086 1.011 -0.257 0.285 -0.18 0.499 -0.417 0.645 -0.714 0.151 -0.297 0.228 -0.632 0.228 -1.002a2.192 2.192 0 0 0 -0.228 -1.012 1.724 1.724 0 0 0 -0.655 -0.704c-0.279 -0.172 -0.612 -0.257 -1.001 -0.257 -0.384 0 -0.717 0.086 -1.002 0.257a1.723 1.723 0 0 0 -0.655 0.705 2.199 2.199 0 0 0 -0.228 1.011c0 0.37 0.072 0.704 0.218 1.001 0.151 0.298 0.367 0.536 0.644 0.715 0.284 0.171 0.625 0.257 1.021 0.257Z"
                      fill="#FFFFFF80"
                      fillOpacity="1"
                    />
                  </svg>
                  <svg
                    className="new-task-svg"
                    width="40.2"
                    height="25.125"
                    viewBox="0 0 40.2 25.125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-high-stroke"
                        x="0.781508"
                        y="0.781508"
                        width="54.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#FFFFFF80"
                        strokeWidth="1.1220250714285718"
                        d="M12.566 0.561h15.075a12.005 12.005 0 0 1 12.005 12.005 12.005 12.005 0 0 1 -12.005 12.005H12.566A12.005 12.005 0 0 1 0.561 12.566 12.005 12.005 0 0 1 12.566 0.561z"
                      />
                      <path
                        className="task-type-risk-high-fill"
                        d="m9.258 16.155 2.656 -7.372h1.676l2.736 7.372h-1.021l-2.473 -6.726 0.484 0.243h-1.191l0.514 -0.243 -2.393 6.726h-0.989Zm1.585 -2.202 0.333 -0.888h3.182l0.333 0.888h-3.847Zm6.695 2.202V8.783h0.97v7.372h-0.97Zm-0.748 -6.605v-0.769h1.716v0.769h-1.716Zm5.676 6.664c-0.404 0 -0.754 -0.057 -1.05 -0.172a1.335 1.335 0 0 1 -0.677 -0.586c-0.155 -0.283 -0.232 -0.663 -0.232 -1.141V9.124h0.93v5.311c0 0.29 0.078 0.514 0.232 0.676 0.161 0.155 0.387 0.232 0.677 0.232h0.949v0.869h-0.828ZM19.579 11.488v-0.727h3.716v0.727H19.579Zm7.533 4.847c-0.472 0 -0.886 -0.08 -1.241 -0.243a2.866 2.866 0 0 1 -0.909 -0.636 2.905 2.905 0 0 1 -0.554 -0.899 2.907 2.907 0 0 1 -0.182 -1.009v-0.182c0 -0.343 0.065 -0.68 0.192 -1.009a2.662 2.662 0 0 1 0.564 -0.899 2.687 2.687 0 0 1 0.909 -0.636 2.914 2.914 0 0 1 1.222 -0.243c0.457 0 0.864 0.08 1.222 0.242 0.356 0.155 0.659 0.368 0.908 0.637 0.249 0.261 0.437 0.562 0.566 0.899 0.128 0.33 0.192 0.667 0.192 1.009v0.182c0 0.343 -0.065 0.68 -0.192 1.009a2.679 2.679 0 0 1 -0.556 0.899 2.748 2.748 0 0 1 -0.899 0.636c-0.356 0.162 -0.771 0.243 -1.241 0.243Zm0 -0.869c0.404 0 0.747 -0.087 1.029 -0.261 0.291 -0.182 0.508 -0.424 0.656 -0.727 0.154 -0.303 0.232 -0.644 0.232 -1.021a2.233 2.233 0 0 0 -0.232 -1.03 1.756 1.756 0 0 0 -0.668 -0.718c-0.283 -0.175 -0.623 -0.261 -1.02 -0.261 -0.391 0 -0.731 0.086 -1.021 0.261a1.756 1.756 0 0 0 -0.668 0.719c-0.154 0.302 -0.232 0.646 -0.232 1.029 0 0.377 0.074 0.718 0.223 1.02 0.154 0.304 0.374 0.546 0.656 0.728 0.29 0.174 0.636 0.261 1.039 0.261Z"
                        fill="#FFFFFF80"
                      />
                    </g>
                  </svg>

                  <svg
                    className="new-task-svg"
                    width="53.571"
                    height="25"
                    viewBox="0 0 53.571 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        className="task-type-risk-critical-stroke"
                        x="0.781508"
                        y="0.781508"
                        width="73.4452"
                        height="33.4452"
                        rx="16.7226"
                        stroke="#FFFFFF80"
                        strokeWidth="1.1164339256"
                        d="M12.503 0.558H41.074A11.945 11.945 0 0 1 53.019 12.503V12.503A11.945 11.945 0 0 1 41.074 24.447H12.503A11.945 11.945 0 0 1 0.558 12.503V12.503A11.945 11.945 0 0 1 12.503 0.558z"
                      />
                      <path
                        className="task-type-risk-critical-fill"
                        d="M13.181 16.255c-0.67 0 -1.243 -0.117 -1.718 -0.351 -0.469 -0.235 -0.847 -0.539 -1.136 -0.914a3.839 3.839 0 0 1 -0.633 -1.216 4.394 4.394 0 0 1 -0.201 -1.276v-0.221c0 -0.441 0.066 -0.884 0.201 -1.326a3.739 3.739 0 0 1 0.643 -1.206c0.289 -0.362 0.664 -0.654 1.126 -0.874 0.462 -0.221 1.014 -0.331 1.657 -0.331 0.657 0 1.22 0.114 1.689 0.341a2.773 2.773 0 0 1 1.116 0.954c0.274 0.409 0.442 0.891 0.502 1.447h-1.005c-0.054 -0.416 -0.187 -0.757 -0.401 -1.025 -0.214 -0.274 -0.486 -0.479 -0.814 -0.613a2.799 2.799 0 0 0 -1.086 -0.201c-0.435 0 -0.816 0.076 -1.145 0.231 -0.329 0.148 -0.603 0.359 -0.824 0.633 -0.214 0.269 -0.379 0.58 -0.493 0.935a3.981 3.981 0 0 0 -0.161 1.155c0 0.396 0.054 0.771 0.161 1.126 0.114 0.355 0.281 0.67 0.502 0.944 0.228 0.275 0.509 0.493 0.844 0.654 0.336 0.154 0.727 0.231 1.176 0.231 0.63 0 1.159 -0.157 1.588 -0.472 0.429 -0.314 0.69 -0.771 0.784 -1.366h1.005a3.239 3.239 0 0 1 -0.513 1.376c-0.268 0.415 -0.643 0.747 -1.125 0.995 -0.476 0.248 -1.055 0.371 -1.739 0.371Zm4.661 -0.181v-5.366h0.764v2.211h-0.041c0 -0.784 0.171 -1.357 0.513 -1.719 0.348 -0.368 0.867 -0.552 1.557 -0.552h0.181v0.864h-0.341c-0.536 0 -0.948 0.144 -1.236 0.431 -0.289 0.281 -0.432 0.69 -0.432 1.226v2.904h-0.964Zm4.383 0v-5.366h0.964v5.366h-0.964Zm-0.824 -4.602v-0.764h1.789v0.764h-1.789Zm0.493 -1.547 0.884 -1.989h1.014l-1.115 1.989h-0.784Zm5.251 6.209c-0.401 0 -0.75 -0.057 -1.045 -0.171a1.329 1.329 0 0 1 -0.673 -0.583c-0.154 -0.281 -0.231 -0.66 -0.231 -1.136v-5.164h0.924v5.286c0 0.288 0.077 0.512 0.231 0.673 0.161 0.154 0.386 0.231 0.673 0.231h0.945v0.864h-0.824Zm-2.874 -4.702v-0.724h3.698v0.724H24.271Zm5.324 4.642v-5.366h0.964v5.366h-0.964Zm-0.824 -4.602v-0.764h1.789v0.764H28.771Zm1.095 -1.628c-0.214 0 -0.375 -0.057 -0.482 -0.171a0.629 0.629 0 0 1 -0.15 -0.432 0.629 0.629 0 0 1 0.15 -0.432c0.107 -0.114 0.268 -0.171 0.482 -0.171 0.214 0 0.371 0.057 0.473 0.171 0.107 0.114 0.161 0.257 0.161 0.431a0.605 0.605 0 0 1 -0.161 0.432c-0.101 0.114 -0.258 0.171 -0.472 0.171Zm4.86 6.411c-0.463 0 -0.864 -0.08 -1.206 -0.241a2.423 2.423 0 0 1 -0.834 -0.643 3.003 3.003 0 0 1 -0.502 -0.904c-0.107 -0.329 -0.161 -0.656 -0.161 -0.984v-0.181c0 -0.341 0.054 -0.676 0.161 -1.004 0.114 -0.329 0.281 -0.623 0.502 -0.884a2.526 2.526 0 0 1 0.844 -0.643c0.334 -0.161 0.726 -0.241 1.175 -0.241 0.449 0 0.851 0.084 1.206 0.251 0.362 0.168 0.65 0.406 0.864 0.714 0.221 0.301 0.345 0.659 0.371 1.075h-0.924a1.294 1.294 0 0 0 -0.463 -0.834c-0.261 -0.228 -0.613 -0.341 -1.055 -0.341 -0.381 0 -0.7 0.086 -0.954 0.261a1.593 1.593 0 0 0 -0.573 0.714 2.614 2.614 0 0 0 -0.191 1.024c0 0.369 0.064 0.707 0.191 1.014 0.127 0.302 0.319 0.543 0.573 0.724 0.261 0.174 0.586 0.261 0.975 0.261 0.301 0 0.562 -0.054 0.784 -0.161 0.221 -0.107 0.399 -0.251 0.532 -0.432 0.134 -0.181 0.214 -0.385 0.241 -0.613h0.924c-0.02 0.422 -0.144 0.787 -0.371 1.096 -0.221 0.308 -0.516 0.549 -0.884 0.723 -0.362 0.168 -0.771 0.251 -1.226 0.251Zm6.264 0c-0.469 0 -0.881 -0.08 -1.236 -0.241a2.851 2.851 0 0 1 -0.905 -0.633 2.891 2.891 0 0 1 -0.552 -0.894 2.893 2.893 0 0 1 -0.181 -1.004v-0.181c0 -0.341 0.064 -0.676 0.191 -1.004 0.127 -0.336 0.314 -0.634 0.562 -0.894 0.248 -0.268 0.55 -0.479 0.905 -0.633 0.355 -0.161 0.76 -0.241 1.216 -0.241 0.455 0 0.861 0.08 1.216 0.241 0.355 0.154 0.656 0.366 0.904 0.634 0.248 0.261 0.436 0.559 0.563 0.894 0.127 0.329 0.191 0.663 0.191 1.004v0.181c0 0.341 -0.064 0.676 -0.191 1.004 -0.121 0.329 -0.305 0.626 -0.553 0.894a2.734 2.734 0 0 1 -0.894 0.633c-0.355 0.161 -0.767 0.241 -1.236 0.241Zm0 -0.864c0.401 0 0.743 -0.087 1.024 -0.261 0.289 -0.181 0.506 -0.422 0.654 -0.724 0.154 -0.301 0.231 -0.64 0.231 -1.015 0 -0.382 -0.076 -0.724 -0.231 -1.025a1.746 1.746 0 0 0 -0.664 -0.714c-0.281 -0.174 -0.619 -0.261 -1.014 -0.261 -0.389 0 -0.727 0.086 -1.015 0.261a1.746 1.746 0 0 0 -0.664 0.714c-0.154 0.301 -0.231 0.643 -0.231 1.024 0 0.375 0.074 0.714 0.221 1.014 0.154 0.302 0.371 0.543 0.653 0.724 0.288 0.174 0.633 0.261 1.035 0.261Z"
                        fill="#FFFFFF80"
                      />
                    </g>
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="caption"
                  id="dialog-task-modal-broker-title"
                >
                  <span>Corretora</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.0901639"
                      y="0.0901639"
                      width="10.8197"
                      height="10.8197"
                      rx="3.87705"
                      stroke="#646872"
                      strokeWidth="0.1967214545454545"
                      d="M4.328 0.098H7.672A4.23 4.23 0 0 1 11.902 4.328V7.672A4.23 4.23 0 0 1 7.672 11.902H4.328A4.23 4.23 0 0 1 0.098 7.672V4.328A4.23 4.23 0 0 1 4.328 0.098z"
                    />
                    <path
                      d="M5.798 7.644V4.006h0.766v3.638h-0.766ZM4.418 6.181V5.476H7.953v0.705H4.418Z"
                      fill="#646872"
                    />
                  </svg>
                </Typography>
                <Box sx={{ marginTop: "7px" }}>
                  <svg
                    width="45.712"
                    height="25"
                    viewBox="0 0 45.712 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      x="0.781508"
                      y="0.781508"
                      width="62.4452"
                      height="33.4452"
                      rx="16.7226"
                      stroke="white"
                      strokeWidth="1.116387035"
                      d="M12.502 0.558h20.713a11.944 11.944 0 0 1 11.943 11.944 11.944 11.944 0 0 1 -11.943 11.945H12.502A11.944 11.944 0 0 1 0.558 12.502 11.944 11.944 0 0 1 12.502 0.558z"
                    />
                    <path
                      d="M13.271 16.255a4.055 4.055 0 0 1 -1.545 -0.282 3.492 3.492 0 0 1 -1.196 -0.794 3.627 3.627 0 0 1 -0.764 -1.206 4.21 4.21 0 0 1 -0.27 -1.528v-0.221c0 -0.468 0.081 -0.922 0.241 -1.357a3.812 3.812 0 0 1 0.713 -1.185 3.317 3.317 0 0 1 1.146 -0.834 3.574 3.574 0 0 1 1.517 -0.312c0.609 0 1.152 0.118 1.628 0.352a2.879 2.879 0 0 1 1.145 0.963c0.288 0.408 0.456 0.884 0.503 1.428H15.384c-0.047 -0.408 -0.181 -0.747 -0.402 -1.014a2.022 2.022 0 0 0 -0.824 -0.613 2.579 2.579 0 0 0 -1.046 -0.211 2.587 2.587 0 0 0 -1.055 0.211 2.348 2.348 0 0 0 -0.835 0.583 2.74 2.74 0 0 0 -0.532 0.914 3.525 3.525 0 0 0 -0.191 1.196c0 0.502 0.067 0.945 0.202 1.327 0.141 0.375 0.335 0.689 0.583 0.945 0.248 0.248 0.539 0.436 0.874 0.562a3.179 3.179 0 0 0 1.115 0.191c0.57 0 1.069 -0.114 1.498 -0.342 0.436 -0.235 0.763 -0.537 0.984 -0.904l-0.362 1.196v-2.18h0.925v1.748a3.35 3.35 0 0 1 -1.265 1.005c-0.515 0.241 -1.109 0.362 -1.779 0.362Zm-0.261 -2.914v-0.824h3.928v0.824h-3.928Zm7.476 2.914c-0.469 0 -0.874 -0.08 -1.215 -0.241a2.355 2.355 0 0 1 -0.835 -0.633 2.822 2.822 0 0 1 -0.482 -0.895 3.413 3.413 0 0 1 -0.15 -1.005v-0.182c0 -0.348 0.05 -0.686 0.15 -1.014a2.701 2.701 0 0 1 0.482 -0.884 2.229 2.229 0 0 1 0.814 -0.633c0.335 -0.161 0.727 -0.241 1.175 -0.241 0.583 0 1.062 0.127 1.437 0.381 0.383 0.248 0.662 0.569 0.845 0.963 0.187 0.396 0.282 0.818 0.282 1.266v0.433h-4.762v-0.723h4.058l-0.221 0.392a2.441 2.441 0 0 0 -0.181 -0.985 1.413 1.413 0 0 0 -0.543 -0.652c-0.241 -0.154 -0.545 -0.231 -0.914 -0.231 -0.381 0 -0.7 0.087 -0.955 0.261a1.623 1.623 0 0 0 -0.562 0.713 2.809 2.809 0 0 0 -0.181 1.046c0 0.381 0.06 0.727 0.181 1.035 0.127 0.301 0.321 0.543 0.583 0.723 0.262 0.174 0.593 0.262 0.995 0.262 0.422 0 0.763 -0.095 1.025 -0.282 0.268 -0.187 0.429 -0.406 0.482 -0.653h0.904a2.13 2.13 0 0 1 -0.443 0.955 2.143 2.143 0 0 1 -0.835 0.613 2.912 2.912 0 0 1 -1.136 0.211Zm3.871 -0.181v-5.365h0.764v2.212h-0.041c0 -0.783 0.17 -1.357 0.512 -1.718 0.349 -0.367 0.867 -0.552 1.558 -0.552h0.182v0.863h-0.342c-0.537 0 -0.947 0.143 -1.236 0.431 -0.288 0.282 -0.433 0.689 -0.433 1.226v2.904h-0.964Zm7.347 0v-1.608h-0.161v-1.86c0 -0.369 -0.096 -0.646 -0.291 -0.835 -0.187 -0.187 -0.465 -0.282 -0.835 -0.282 -0.207 0 -0.422 0.004 -0.644 0.011l-0.633 0.019a9.623 9.623 0 0 0 -0.522 0.032v-0.845c0.148 -0.013 0.301 -0.024 0.462 -0.031 0.168 -0.013 0.339 -0.019 0.513 -0.019 0.174 -0.008 0.342 -0.011 0.502 -0.011 0.549 0 0.998 0.066 1.346 0.201 0.349 0.127 0.607 0.339 0.773 0.633 0.168 0.295 0.251 0.693 0.251 1.196v3.396h-0.763Zm-1.759 0.141c-0.402 0 -0.75 -0.067 -1.046 -0.202a1.59 1.59 0 0 1 -0.673 -0.603c-0.154 -0.262 -0.233 -0.576 -0.233 -0.946 0 -0.381 0.083 -0.7 0.251 -0.955a1.558 1.558 0 0 1 0.753 -0.572c0.329 -0.134 0.723 -0.201 1.185 -0.201h1.458v0.723h-1.497c-0.388 0 -0.687 0.095 -0.895 0.282 -0.208 0.187 -0.312 0.429 -0.312 0.723s0.104 0.534 0.312 0.713c0.207 0.181 0.507 0.27 0.895 0.27 0.228 0 0.445 -0.04 0.652 -0.122a1.162 1.162 0 0 0 0.512 -0.422c0.141 -0.201 0.218 -0.476 0.233 -0.824l0.262 0.381c-0.034 0.383 -0.128 0.704 -0.282 0.963a1.455 1.455 0 0 1 -0.623 0.583c-0.262 0.134 -0.58 0.202 -0.955 0.202Zm4.353 -0.141v-7.336h0.963v7.335h-0.963Zm-0.743 -6.571v-0.764h1.707v0.764h-1.707Z"
                      fill="white"
                    />
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ marginRight: "12px" }}>
                  <Typography id="dialog-task-modal-initial-date">
                    Data de início
                  </Typography>
                  <input
                    defaultValue="2023-11-17"
                    type="date"
                    id="dialog-initial-date-task"
                  />
                </Box>
                <Box>
                  <Typography id="dialog-task-modal-initial-date">
                    Data de Entrega
                  </Typography>
                  <input
                    defaultValue="2023-11-28"
                    type="date"
                    id="dialog-final-date-task"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", marginTop: "20px" }}>
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4 0V2.3H0V0H18.4ZM11.5 4.6V6.9H0V4.6H11.5ZM18.4 4.6V6.9H13.8V4.6H18.4ZM6.9 9.2V11.5H0V9.2H6.9ZM18.4 9.2V11.5H9.2V9.2H18.4ZM13.8 13.8V16.1H0V13.8H13.8Z"
                      fill="white"
                    />
                  </svg>
                  <Typography id="dialog-task-modal-description-title">
                    Descrição
                  </Typography>
                  <svg
                    style={{ alignSelf: "baseline" }}
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.10987 0.359795C5.1802 0.289493 5.27556 0.25 5.375 0.25C5.47444 0.25 5.5698 0.289493 5.64013 0.359795L7.14013 1.85979C7.21043 1.93012 7.24992 2.02548 7.24992 2.12492C7.24992 2.22436 7.21043 2.31972 7.14013 2.39004L2.26512 7.26505C2.19482 7.33538 2.09945 7.3749 2 7.37492H0.5C0.400544 7.37492 0.305161 7.33541 0.234835 7.26509C0.164509 7.19476 0.125 7.09938 0.125 6.99992V5.49992C0.125021 5.40047 0.164544 5.3051 0.234875 5.2348L5.10987 0.359795ZM4.25 2.28017L0.875 5.65517V6.62492H1.84475L5.21975 3.24992L4.25 2.28017ZM5.75 2.71967L6.34475 2.12492L5.375 1.15517L4.78025 1.74992L5.75 2.71967Z"
                      fill="white"
                    />
                  </svg>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <textarea
                  id="dialog-task-modal-textarea"
                  defaultValue={
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
                  }
                  rows={6}
                ></textarea>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ marginTop: "20px" }}
                id="dialog-task-modal-updates-title"
              >
                Atualizações
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <Avatar
                  className="dialog-task-card-avatar-image"
                  alt="Jefferson Antunes"
                  src={JeffAntunes}
                />
                <input
                  type="text"
                  placeholder="Adicione uma atualização..."
                  id="dialog-reply"
                  name="reply"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginTop: "30px", display: "flex" }}>
                <Avatar
                  className="dialog-task-card-avatar-image"
                  alt="Adriano Coutinho"
                  src={AdrianoCoutinho}
                />
                <Box sx={{ marginLeft: "5px" }}>
                  <Typography className="dialog-update-name">
                    Adriano Coutinho
                    <Box className="grey-text" component={"span"}>
                      23 de nov às 15:34
                    </Box>
                  </Typography>
                  <Typography className="dialog-update-text">
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo
                  </Typography>
                  <Typography className="dialog-reply-text-button">
                    Responder
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: "30px", display: "flex" }}>
                <Avatar
                  className="dialog-task-card-avatar-image"
                  alt="Pedro Paes"
                  src={PedroPaes}
                />
                <Box sx={{ marginLeft: "5px" }}>
                  <Typography className="dialog-update-name">
                    Pedro Paes
                    <Box className="grey-text" component={"span"}>
                      23 de nov às 15:34
                    </Box>
                  </Typography>
                  <Typography className="dialog-update-text">
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo
                  </Typography>
                  <Typography className="dialog-reply-text-button">
                    Responder
                  </Typography>
                  <Box sx={{ marginTop: "30px", display: "flex" }}>
                    <Avatar
                      className="dialog-task-card-avatar-image"
                      alt="Adriano Coutinho"
                      src={AdrianoCoutinho}
                    />
                    <Box sx={{ marginLeft: "5px" }}>
                      <Typography className="dialog-update-name">
                        Adriano Coutinho
                        <Box className="grey-text" component={"span"}>
                          23 de nov às 15:34
                        </Box>
                      </Typography>
                      <Typography className="dialog-update-text">
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </BaseLayoutPage>
  );
};

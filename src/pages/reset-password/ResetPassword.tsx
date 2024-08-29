import {
  Box,
  Checkbox,
  CheckboxProps,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../assets/images/optimux-logo.png";
import { SnackBars } from "../../shared/components";
// import { useAppDispatch } from "../../store/hooks";
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

export const ResetPassword: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const width = isXs ? "90vw" : "30vw";

  // const dispatch = useAppDispatch();

  //   const [user, setUser] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const auth = async (event: any) => {
  //     event.preventDefault();
  //     if (!user.email || user.email === "") {
  //       return dispatch(
  //         setMessage({ message: "Preencha o campo e-mail!", status: "error" })
  //       );
  //     }
  //     if (!user.password || user.password === "") {
  //       return dispatch(
  //         setMessage({ message: "Preencha o campo senha!", status: "error" })
  //       );
  //     }

  //     await login(user.email, user.password);
  //   };

  //   if (isAuthenticated) return <>{children}</>;

  return (
    <React.Fragment>
      <Box id="login-container-box">
        <img src={logo} alt="OPTIMUX" width={189} height={30} />
        <Box id="login-box-card" style={{ width }}>
          <Typography id="login-card-title">Login</Typography>
          <Box id="login-inputs">
            <form onSubmit={() => console.log("olá")} id="login-form">
              <input
                placeholder="E-mail"
                type="email"
                id="email"
                name="email"
                // onChange={(ev) =>
                //   setUser({
                //     ...user,
                //     email: ev.target.value,
                //   })
                // }
              />
              <input
                placeholder="Senha"
                type="password"
                id="password"
                name="password"
                // onChange={(ev) =>
                //   setUser({
                //     ...user,
                //     password: ev.target.value,
                //   })
                // }
              />
              <input type="submit" value="Entrar" id="login-button" />
            </form>
            <Box id="login-remember">
              <BpCheckbox /> <Typography>Manter-me conectado</Typography>
            </Box>
            <Typography id="login-lost-password">Esqueci a senha</Typography>
          </Box>
        </Box>
      </Box>
      <SnackBars />
    </React.Fragment>
  );
};

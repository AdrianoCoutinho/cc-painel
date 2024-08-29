import { Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import { useEffect } from "react";
import { healthCheck } from "../../../api";

////utilizado para "acordar" a api no render, retirar se for usar em produção
export default function WakeUpBackdrop() {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    healthCheckUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const healthCheckUp = async () => {
    const result = await healthCheck();
    if (result === 200) {
      return handleClose();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <Typography sx={{ marginTop: "10px" }}>
          Carregando API em desenvolvimento...
        </Typography>
      </Backdrop>
    </div>
  );
}

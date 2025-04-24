import { Box, Button, Grid, List, Typography } from "@mui/material";
import React from "react";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

export const Tasks: React.FC = () => {
  return (
    <BaseLayoutPage>
      <Grid container spacing={0} sx={{ p: 1 }}>
        <Grid className="default-box" item xs={2}>
          <Button id="button-new-task" variant="contained">
            Criar nova tarefa
          </Button>
          <hr id="line-new-task" />
          <Box>
            <Typography
              sx={{ fontSize: "13px", marginTop: "10px" }}
              className="box-subtitle"
            >
              Tarefas
            </Typography>
            <List className="task-types">
              <div className="type-task-button type-task-button-active">
                <div className="task-type-text">Todas as tarefas</div>
                <div className="notify-task-number">76</div>
              </div>
              <div className="type-task-button">
                <div className="task-type-text">Favoritas</div>
                <div className="notify-task-number">53</div>
              </div>
              <div className="type-task-button">
                <div className="task-type-text">Apagadas</div>
                <div className="notify-task-number">88</div>
              </div>
            </List>
          </Box>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

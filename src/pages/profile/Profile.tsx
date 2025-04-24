import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import changeCover from "../../assets/svg/button-change-cover.svg";
import imageCover from "../../assets/temporary-images/capa-perfil.jpg";
import FormEditProfile from "../../shared/interfaces/FormEditProfile.interface";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

export const Profile: React.FC = () => {
  const API_url = "http://localhost:3333";

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 4px 88.2px 0px rgba(0, 0, 0, 0.25)",
    width: "80vh",
    bgcolor: "#101116",
    p: 4,
    borderRadius: "20px",
    height: "50vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };

  const [open, setOpen] = React.useState(false);
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    email: "",
    real_balance: 0,
    profile_picture_url: ``,
  });

  const [formData, setFormData] = useState<FormEditProfile>({
    name: "",
    email: "",
    phone: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUserDetails = async () => {
    setUserDetails({
      id: "1234d",
      name: "Administrador",
      email: "admin@system.com",
      real_balance: 1000,
      profile_picture_url: ``,
    });
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    // const result = await updateProfileInfo(formData);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <BaseLayoutPage>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box-profile">
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img src={changeCover} alt="mudar capa" />
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Solte a imagem aqui
              <span id="select-arquive-cover">ou selecione um arquivo</span>
            </Typography>
            <Typography id="change-cover-description">
              •Somente arquivos em PNG ou JPG <br />
              •Tamanho max do arquivo: 6mb
            </Typography>
          </Box>
          <Button id="button-save-cover">Salvar</Button>
        </Box>
      </Modal>
      <div
        className="banner-container"
        // onClick={handleOpen}
      >
        <img className="banner-image" src={imageCover} alt="cover" />
        <div className="icon-overlay">
          <span className="icon-cover">
            <img src={changeCover} alt="mudar capa" />
          </span>
          <br />
          Alterar capa
        </div>
      </div>
      <Grid container>
        <Grid item sm={12} xs={12} md={12} lg={4}>
          <Box id="avatar" sx={{ paddingLeft: "100px" }}>
            <Avatar
              onClick={handleOpen}
              alt={userDetails.name}
              src={`${API_url}${userDetails.profile_picture_url}`}
              sx={{ width: 95, height: 95 }}
            />
            <div id="user-info">
              <Typography id="profile-name-avatar">
                {userDetails.name}
              </Typography>
              <Typography id="profile-type-avatar">Administrador</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: "30px", paddingLeft: "100px" }}>
          <Grid container spacing={12}>
            <Grid item sm={12} xs={12} md={12} lg={4}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  component={"form"}
                  onSubmit={handleSubmitProfile}
                >
                  <Typography id="perfil-edit-title">Editar perfil</Typography>
                  <Box id="profile-info-box">
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Nome"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      value={formData.name}
                      onChange={(ev) => {
                        setFormData({
                          name: ev.target.value,
                          email: formData.email,
                          phone: formData.phone,
                        });
                      }}
                      variant="outlined"
                    />
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Sobrenome"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      // value={formData.name}
                      // onChange={(ev) => {
                      //   setFormData({
                      //     name: ev.target.value,
                      //     email: formData.email,
                      //     phone: formData.phone,
                      //   });
                      // }}
                      variant="outlined"
                    />
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="E-mail"
                      inputProps={{ maxLength: 64 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      value={formData.email}
                      onChange={(ev) => {
                        setFormData({
                          name: formData.name,
                          email: ev.target.value,
                          phone: formData.phone,
                        });
                      }}
                      variant="outlined"
                    />
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Telefone"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      value={formData.phone}
                      onChange={(ev) => {
                        setFormData({
                          name: formData.name,
                          email: formData.email,
                          phone: ev.target.value,
                        });
                      }}
                      variant="outlined"
                    />
                  </Box>
                  <Button type="submit" id="button-save-profile">
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography id="password-edit-title">Editar senha</Typography>
                  <Box id="profile-info-box">
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Senha atual"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      // value={formData.name}
                      // onChange={(ev) => {
                      //   setFormData({
                      //     name: formData.name,
                      //     email: formData.email,
                      //     phone: ev.target.value,
                      //   });
                      // }}
                      variant="outlined"
                    />
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Nova senha"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      // value={formData.name}
                      // onChange={(ev) => {
                      //   setFormData({
                      //     name: formData.name,
                      //     email: formData.email,
                      //     phone: ev.target.value,
                      //   });
                      // }}
                      variant="outlined"
                    />
                    <TextField
                      className="input-box-profile"
                      fullWidth
                      label="Repita a senha"
                      inputProps={{ maxLength: 20 }}
                      InputProps={{
                        style: { color: "#fff" }, // Substitua 'red' pela cor desejada
                      }}
                      // value={formData.name}
                      // onChange={(ev) => {
                      //   setFormData({
                      //     name: formData.name,
                      //     email: formData.email,
                      //     phone: ev.target.value,
                      //   });
                      // }}
                      variant="outlined"
                    />
                  </Box>
                  <Button id="button-save-password">Alterar senha</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

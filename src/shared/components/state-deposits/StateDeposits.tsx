import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Alemanha from "../../../assets/svg/states/alemanha.svg";
import Angola from "../../../assets/svg/states/angola.svg";
import Argentina from "../../../assets/svg/states/argentina.svg";
import greenArrow from "../../../assets/svg/states/arrow-green.svg";
import Australia from "../../../assets/svg/states/australia.svg";
import Brasil from "../../../assets/svg/states/brasil.svg";
import CaboVerde from "../../../assets/svg/states/cabo-verde.svg";
import Camaroes from "../../../assets/svg/states/camaroes.svg";
import Chile from "../../../assets/svg/states/chile.svg";
import China from "../../../assets/svg/states/china.svg";
import Espanha from "../../../assets/svg/states/espanha.svg";
import Inglaterra from "../../../assets/svg/states/inglaterra.svg";
import Irlanda from "../../../assets/svg/states/irlanda.svg";
import Italia from "../../../assets/svg/states/italia.svg";
import Mexico from "../../../assets/svg/states/mexico.svg";
import Mocambique from "../../../assets/svg/states/mocambique.svg";
import Paraguai from "../../../assets/svg/states/paraguai.svg";
import Portugal from "../../../assets/svg/states/portugal.svg";
import Suecia from "../../../assets/svg/states/suecia.svg";
import Suica from "../../../assets/svg/states/suica.svg";
import Uruguai from "../../../assets/svg/states/uruguai.svg";
import USA from "../../../assets/svg/states/usa.svg";

import "./style.css";

export default function StateDeposits() {
  return (
    <>
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Alemanha} alt="Alemanha" />
            <span className="state-name">
              Alemanha
              <img className="green-arrow" src={greenArrow} alt="Alemanha" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Angola */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Angola} alt="Angola" />
            <span className="state-name">
              Angola
              <img className="green-arrow" src={greenArrow} alt="Angola" />
            </span>
          </Typography>
          <Typography variant="body2">R$ 734.789,25</Typography>
        </ListItemButton>
      </ListItem>

      {/* Argentina */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Argentina} alt="Argentina" />
            <span className="state-name">
              Argentina
              <img className="green-arrow" src={greenArrow} alt="Argentina" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Austrália */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Australia} alt="Austrália" />
            <span className="state-name">
              Austrália
              <img className="green-arrow" src={greenArrow} alt="Austrália" />
            </span>
          </Typography>
          <Typography variant="body2">$ 245.45,56</Typography>
        </ListItemButton>
      </ListItem>

      {/* Brasil */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Brasil} alt="Brasil" />
            <span className="state-name">
              Brasil
              <img className="green-arrow" src={greenArrow} alt="Brasil" />
            </span>
          </Typography>
          <Typography variant="body2">$ 12.245.454,56</Typography>
        </ListItemButton>
      </ListItem>

      {/* Cabo Verde */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={CaboVerde} alt="Cabo Verde" />
            <span className="state-name">
              Cabo Verde
              <img className="green-arrow" src={greenArrow} alt="Cabo Verde" />
            </span>
          </Typography>
          <Typography variant="body2">$ 45.45,56</Typography>
        </ListItemButton>
      </ListItem>

      {/* Comores */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Camaroes} alt="Comores" />
            <span className="state-name">
              Camaroes
              <img className="green-arrow" src={greenArrow} alt="Comores" />
            </span>
          </Typography>
          <Typography variant="body2">$ 465.45,00</Typography>
        </ListItemButton>
      </ListItem>

      {/* Chile */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Chile} alt="Chile" />
            <span className="state-name">
              Chile
              <img className="green-arrow" src={greenArrow} alt="Chile" />
            </span>
          </Typography>
          <Typography variant="body2">$ 1.465.45,00</Typography>
        </ListItemButton>
      </ListItem>

      {/* China */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={China} alt="China" />
            <span className="state-name">
              China
              <img className="green-arrow" src={greenArrow} alt="China" />
            </span>
          </Typography>
          <Typography variant="body2">$ 1.465.45,700</Typography>
        </ListItemButton>
      </ListItem>

      {/* Espanha */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Espanha} alt="Espanha" />
            <span className="state-name">
              Espanha
              <img className="green-arrow" src={greenArrow} alt="Espanha" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Inglaterra */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Inglaterra} alt="Inglaterra" />
            <span className="state-name">
              Inglaterra
              <img className="green-arrow" src={greenArrow} alt="Inglaterra" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Irlanda */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Irlanda} alt="Irlanda" />
            <span className="state-name">
              Irlanda
              <img className="green-arrow" src={greenArrow} alt="Irlanda" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Itália */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Italia} alt="Itália" />
            <span className="state-name">
              Itália
              <img className="green-arrow" src={greenArrow} alt="Itália" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* México */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Mexico} alt="México" />
            <span className="state-name">
              México
              <img className="green-arrow" src={greenArrow} alt="México" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Moçambique */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Mocambique} alt="Moçambique" />
            <span className="state-name">
              Moçambique
              <img className="green-arrow" src={greenArrow} alt="Moçambique" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Paraguai */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Paraguai} alt="Paraguai" />
            <span className="state-name">
              Paraguai
              <img className="green-arrow" src={greenArrow} alt="Paraguai" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Portugal */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Portugal} alt="Portugal" />
            <span className="state-name">
              Portugal
              <img className="green-arrow" src={greenArrow} alt="Portugal" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Suécia */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Suecia} alt="Suécia" />
            <span className="state-name">
              Suécia
              <img className="green-arrow" src={greenArrow} alt="Suécia" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>

      {/* Suíça */}
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Suica} alt="Suíça" />
            <span className="state-name">
              Suíça
              <img className="green-arrow" src={greenArrow} alt="Suíça" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={Uruguai} alt="Suíça" />
            <span className="state-name">
              Uruguai
              <img className="green-arrow" src={greenArrow} alt="Suíça" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem component="div" disablePadding>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img className="flag-state" src={USA} alt="Suíça" />
            <span className="state-name">
              USA
              <img className="green-arrow" src={greenArrow} alt="Suíça" />
            </span>
          </Typography>
          <Typography variant="body2">R$ XXX.XXX,XX</Typography>
        </ListItemButton>
      </ListItem>
    </>
  );
}

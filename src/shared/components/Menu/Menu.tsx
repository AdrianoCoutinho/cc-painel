import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBarMenu } from "../appbarmenu/AppBarMenu";
import "./style.css";

const drawerWidth = 60;

const TooltipMenu = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement="right" />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#212836",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#212836",
  },
}));

interface IMenuSuperiorProps {
  children: React.ReactNode;
}

// =====================================================================
// Icons (kept inline to preserve original visuals exactly)
// =====================================================================

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
    <path
      className="svg-path"
      d="M14.8674 0.953232L14.8674 0.953223C14.725 0.810807 14.5303 0.75 14.3513 0.75C14.1724 0.75 13.9776 0.810807 13.8352 0.953223L0.963223 13.8252C0.678926 14.1095 0.678926 14.5731 0.963223 14.8574C1.24219 15.1364 1.71776 15.1364 1.99672 14.8574L4.20752 12.6469V26.3127C4.20752 26.7147 4.53536 27.0427 4.93747 27.0427H11.1481C11.5502 27.0427 11.8782 26.7148 11.8782 26.3127V17.7827H16.8235V26.3127C16.8235 26.7147 17.1514 27.0427 17.5535 27.0427H23.7655C24.1675 27.0427 24.4955 26.7148 24.4955 26.3127V12.6482L26.7045 14.8574C26.8416 14.9946 27.0263 15.072 27.2213 15.072C27.4178 15.072 27.6012 14.9943 27.7381 14.8574C27.8753 14.7203 27.9526 14.5355 27.9526 14.3407C27.9526 14.1466 27.8758 13.9613 27.7377 13.8248C27.7374 13.8245 27.7371 13.8242 27.7368 13.8239L14.8674 0.953232ZM14.352 2.50354L23.0342 11.1867V25.5827H18.2849V17.0527C18.2849 16.6493 17.9569 16.3214 17.5535 16.3214H11.1481C10.7447 16.3214 10.4169 16.6493 10.4169 17.0527V25.5827H5.66755V11.187L14.352 2.50354Z"
      fill="#646872"
      strokeWidth="0.8"
    />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
    <path
      className="svg-path-stroke"
      d="M14.0986 16.4503C18.1677 16.4503 21.4665 13.1516 21.4665 9.0824C21.4665 5.01321 18.1677 1.71448 14.0986 1.71448C10.0294 1.71448 6.73064 5.01321 6.73064 9.0824C6.73064 13.1516 10.0294 16.4503 14.0986 16.4503ZM14.0986 16.4503C6.73064 16.4503 2.19629 22.1181 2.19629 27.7857M14.0986 16.4503C21.4665 16.4503 26.0003 22.1181 26.0003 27.7857"
      stroke="#646872"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FinancialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
    <path
      className="svg-path-stroke"
      d="M2 26h5V13H2v13ZM10.5 26h6V7h-6v19ZM19.5 26h6V1h-6v25Z"
      stroke="#646872"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const AffiliatesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      className="svg-path"
      d="M27.01 9.59214C28.6847 7.91738 27.921 5.96127 27.01 5.01001L22.9906 0.990597C21.3024 -0.684159 19.3597 0.0795297 18.4084 0.990597L16.1308 3.28166H12.6607C10.115 3.28166 8.64125 4.62147 7.89096 6.16224L1.94222 12.111L1.94222 17.4702L0.990963 18.4081C-0.683793 20.0962 0.0798959 22.0389 0.990963 22.9902L5.01038 27.0096C5.73387 27.7331 6.51096 28.0011 7.24785 28.0011C8.19911 28.0011 9.06998 27.5321 9.59251 27.0096L13.21 23.3787H18.0199C20.2975 23.3787 21.4498 21.9585 21.8651 20.5651C23.3791 20.1632 24.2098 19.011 24.5447 17.8855C26.6214 17.3496 27.3985 15.3801 27.3985 14.0001V9.98068H26.608L27.01 9.59214ZM24.7189 14.0001C24.7189 14.603 24.4643 15.3399 23.3791 15.3399H22.0393V16.6797C22.0393 17.2826 21.7847 18.0195 20.6995 18.0195H19.3597V19.3593C19.3597 19.9622 19.1051 20.6991 18.0199 20.6991H12.1113L7.71678 25.0937C7.30144 25.4822 7.06028 25.2545 6.9129 25.1071L2.90688 21.1145C2.51834 20.6991 2.74611 20.458 2.89349 20.3106L4.62183 18.5688V13.2096L7.30144 10.53V12.6603C7.30144 14.2815 8.37329 16.6797 11.3209 16.6797C14.2684 16.6797 15.3403 14.2815 15.3403 12.6603L24.7189 12.6603V14.0001ZM25.1074 7.68962L22.8298 9.98068L12.6607 9.98068V12.6603C12.6607 13.2632 12.4061 14.0001 11.3209 14.0001C10.2356 14.0001 9.98105 13.2632 9.98105 12.6603V8.64088C9.98105 8.02457 10.2088 5.96127 12.6607 5.96127H17.2294L20.2841 2.90652C20.6995 2.51797 20.9407 2.74574 21.088 2.89312L25.094 6.88574C25.4826 7.30107 25.2548 7.54224 25.1074 7.68962Z"
      fill="#646872"
    />
  </svg>
);

const CampaignsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
    <rect x="1" y="1" width="24" height="18" rx="0.5" stroke="#646872" strokeWidth="1.5" className="svg-path-stroke" fill="none" />
    <path d="M1 1l12 11L25 1" stroke="#646872" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-path-stroke" fill="none" />
  </svg>
);

const WhiteLabelIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className="svg-path"
      d="M1.85714 10.2143H24.1429V8.35711C24.1429 7.86456 23.9472 7.39219 23.5989 7.04391C23.2506 6.69563 22.7783 6.49997 22.2857 6.49997H3.71429C3.22174 6.49997 2.74937 6.69563 2.40109 7.04391C2.05281 7.39219 1.85714 7.86456 1.85714 8.35711V10.2143ZM1.85714 12.0714V21.3571C1.85714 21.8497 2.05281 22.322 2.40109 22.6703C2.74937 23.0186 3.22174 23.2143 3.71429 23.2143H22.2857C22.7783 23.2143 23.2506 23.0186 23.5989 22.6703C23.9472 22.322 24.1429 21.8497 24.1429 21.3571V12.0714H1.85714ZM3.71429 4.64282H22.2857C23.2708 4.64282 24.2155 5.03415 24.9121 5.73071C25.6087 6.42727 26 7.37202 26 8.35711V21.3571C26 22.3422 25.6087 23.2869 24.9121 23.9835C24.2155 24.6801 23.2708 25.0714 22.2857 25.0714H3.71429C2.7292 25.0714 1.78445 24.6801 1.08789 23.9835C0.391325 23.2869 0 22.3422 0 21.3571V8.35711C0 7.37202 0.391325 6.42727 1.08789 5.73071C1.78445 5.03415 2.7292 4.64282 3.71429 4.64282Z"
      fill="#646872"
    />
    <path
      className="svg-path"
      d="M9.28585 2.78561V4.64275H16.7144V2.78561H9.28585ZM9.28585 0.928467H16.7144C17.207 0.928467 17.6793 1.12413 18.0276 1.47241C18.3759 1.82069 18.5716 2.29306 18.5716 2.78561V4.64275C18.5716 5.1353 18.3759 5.60767 18.0276 5.95595C17.6793 6.30423 17.207 6.4999 16.7144 6.4999H9.28585C8.79331 6.4999 8.32094 6.30423 7.97266 5.95595C7.62437 5.60767 7.42871 5.1353 7.42871 4.64275V2.78561C7.42871 2.29306 7.62437 1.82069 7.97266 1.47241C8.32094 1.12413 8.79331 0.928467 9.28585 0.928467Z"
      fill="#646872"
    />
  </svg>
);

const TasksIcon = () => (
  <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className="svg-path-stroke"
      d="M9.31524 13.5373C11.9789 13.5373 14.1382 11.3779 14.1382 8.7143C14.1382 6.05065 11.9789 3.89133 9.31524 3.89133C6.65159 3.89133 4.49227 6.05065 4.49227 8.7143C4.49227 11.3779 6.65159 13.5373 9.31524 13.5373ZM9.31524 13.5373C4.49227 13.5373 1.52393 17.2473 1.52393 20.9573M9.31524 13.5373C14.1382 13.5373 17.1058 17.2473 17.1058 20.9573M32.8803 13.2099C30.2167 13.2099 28.0574 11.0506 28.0574 8.3869C28.0574 5.72325 30.2167 3.56394 32.8803 3.56394C35.544 3.56394 37.7033 5.72325 37.7033 8.3869C37.7033 11.0506 35.544 13.2099 32.8803 13.2099ZM32.8803 13.2099C37.7033 13.2099 40.6717 16.9199 40.6717 20.6299M32.8803 13.2099C28.0574 13.2099 25.0898 16.9199 25.0898 20.6299M21.0977 11.3865C23.7613 11.3865 25.9206 9.22722 25.9206 6.56357C25.9206 3.89992 23.7613 1.7406 21.0977 1.7406C18.434 1.7406 16.2747 3.89992 16.2747 6.56357C16.2747 9.22722 18.434 11.3865 21.0977 11.3865ZM21.0977 11.3865C16.2747 11.3865 13.3064 15.0966 13.3064 18.8066M21.0977 11.3865C25.9206 11.3865 28.8882 15.0966 28.8882 18.8066"
      stroke="#646872"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// =====================================================================
// Menu items
// =====================================================================

interface MenuItem {
  path: string;
  title: string;
  icon: React.FC;
}

const menuItems: MenuItem[] = [
  { path: "/", title: "Dashboard", icon: DashboardIcon },
  { path: "/users", title: "Usuários", icon: UsersIcon },
  { path: "/financial", title: "Financeiro", icon: FinancialIcon },
  { path: "/affiliates", title: "Afiliados", icon: AffiliatesIcon },
  { path: "/campaigns", title: "Campanhas", icon: CampaignsIcon },
  { path: "/white-label", title: "White Label", icon: WhiteLabelIcon },
  { path: "/tasks", title: "Tarefas", icon: TasksIcon },
];

const isActive = (currentPath: string, itemPath: string) => {
  if (itemPath === "/") return currentPath === "/";
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
};

export const Menu: React.FC<IMenuSuperiorProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ marginBottom: "0px" }}>
          <AppBarMenu />
        </Toolbar>
        <ul id="vertical-menu">
          {menuItems.map((item) => {
            const active = isActive(pathname, item.path);
            const Icon = item.icon;
            return (
              <TooltipMenu key={item.path} title={item.title}>
                <li className={active ? "menu-active" : undefined}>
                  <a
                    className="svg-link"
                    onClick={() => navigate(item.path)}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon />
                  </a>
                </li>
              </TooltipMenu>
            );
          })}
        </ul>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, minHeight: "97.8vh" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

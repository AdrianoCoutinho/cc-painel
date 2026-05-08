import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  Grid,
  InputBase,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { BaseLayoutPage } from "../../shared/layouts";
import "./style.css";

// =====================================================================
// Mock data
// =====================================================================

type EmailLabel = "support" | "financial" | "marketing" | "compliance";
type EmailFolder = "inbox" | "sent" | "trash" | "archived";

interface Email {
  id: string;
  sender: string;
  avatar: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  starred: boolean;
  hasAttachment: boolean;
  label: EmailLabel;
}

const labelMap: Record<EmailLabel, { text: string; className: string }> = {
  support: { text: "Suporte", className: "label-support" },
  financial: { text: "Financeiro", className: "label-financial" },
  marketing: { text: "Marketing", className: "label-marketing" },
  compliance: { text: "Compliance", className: "label-compliance" },
};

const mockEmails: Email[] = [
  {
    id: "e01",
    sender: "Carlos Silva",
    avatar: "https://i.pravatar.cc/150?img=12",
    subject: "Solicitação de nova corretora",
    preview:
      "Boa tarde, gostaria de saber se é possível adicionar a TradeFlow Pro como corretora autorizada para depósitos via PIX...",
    time: "14:32",
    unread: true,
    starred: true,
    hasAttachment: false,
    label: "support",
  },
  {
    id: "e02",
    sender: "Daniel Costa",
    avatar: "https://i.pravatar.cc/150?img=8",
    subject: "Reembolso pendente — TX9817",
    preview:
      "Meu saque está pendente desde quinta-feira. Já fiz a verificação KYC e está tudo aprovado. Pode dar uma olhada?",
    time: "13:18",
    unread: true,
    starred: false,
    hasAttachment: true,
    label: "financial",
  },
  {
    id: "e03",
    sender: "Ana Castro",
    avatar: "https://i.pravatar.cc/150?img=45",
    subject: "Documentos de KYC enviados",
    preview:
      "Segue em anexo o comprovante de residência atualizado e a foto do RG conforme solicitado pela equipe de compliance.",
    time: "11:47",
    unread: true,
    starred: true,
    hasAttachment: true,
    label: "compliance",
  },
  {
    id: "e04",
    sender: "Marcos Lima",
    avatar: "https://i.pravatar.cc/150?img=13",
    subject: "Sugestão para a campanha de afiliados",
    preview:
      "Notei que a comissão de Q2 não está contemplando os indicados que migraram da plataforma antiga. Sugiro revisar...",
    time: "10:05",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "marketing",
  },
  {
    id: "e05",
    sender: "Lucas Almeida",
    avatar: "https://i.pravatar.cc/150?img=14",
    subject: "Acesso bloqueado após atualização",
    preview:
      "Após a atualização da plataforma de ontem não consigo mais acessar o painel de operações. Já tentei limpar cache e reinstalar.",
    time: "ontem",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "support",
  },
  {
    id: "e06",
    sender: "Camila Reis",
    avatar: "https://i.pravatar.cc/150?img=32",
    subject: "Relatório mensal de performance",
    preview:
      "Compartilhando o relatório de fechamento de abril. Volume total cresceu 18% MoM, com destaque para o segmento BTC/USD.",
    time: "ontem",
    unread: false,
    starred: true,
    hasAttachment: true,
    label: "financial",
  },
  {
    id: "e07",
    sender: "Felipe Souza",
    avatar: "https://i.pravatar.cc/150?img=15",
    subject: "Dúvida sobre conta empresarial",
    preview:
      "Trabalho com uma fintech argentina e gostaria de migrar nossa operação. Quais documentos precisamos para abrir uma conta?",
    time: "ontem",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "compliance",
  },
  {
    id: "e08",
    sender: "Eduardo Gomes",
    avatar: "https://i.pravatar.cc/150?img=18",
    subject: "Re: Newsletter de afiliados — abril",
    preview:
      "Recebi a newsletter mas o link do banner principal está quebrado. Aproveitando, podem me adicionar na lista de gerentes?",
    time: "06 mai",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "marketing",
  },
  {
    id: "e09",
    sender: "Beatriz Lima",
    avatar: "https://i.pravatar.cc/150?img=44",
    subject: "Confirmação de saque aprovado",
    preview:
      "Recebi a confirmação do saque de €1.890,00. Obrigada pela rapidez no processamento. O recibo já caiu na conta.",
    time: "05 mai",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "financial",
  },
  {
    id: "e10",
    sender: "Tiago Reis",
    avatar: "https://i.pravatar.cc/150?img=17",
    subject: "Proposta de parceria — Lisboa",
    preview:
      "Represento um grupo de 200 traders ativos em Portugal e gostaria de propor um plano corporativo com benefícios escalonados.",
    time: "03 mai",
    unread: false,
    starred: true,
    hasAttachment: true,
    label: "marketing",
  },
  {
    id: "e11",
    sender: "R. Mendes",
    avatar: "https://i.pravatar.cc/150?img=16",
    subject: "Erro no histórico de partidas",
    preview:
      "O histórico está mostrando partidas duplicadas no dia 30/04. Já reproduzi em dois navegadores diferentes.",
    time: "02 mai",
    unread: false,
    starred: false,
    hasAttachment: true,
    label: "support",
  },
  {
    id: "e12",
    sender: "Júlia Mendes",
    avatar: "https://i.pravatar.cc/150?img=47",
    subject: "Atualização de dados bancários",
    preview:
      "Preciso atualizar a conta para recebimento dos saques. Pode me indicar onde fazer ou se precisa abrir um chamado?",
    time: "28 abr",
    unread: false,
    starred: false,
    hasAttachment: false,
    label: "compliance",
  },
];

// =====================================================================
// Folder list (sidebar)
// =====================================================================

interface Folder {
  id: EmailFolder;
  label: string;
  count: number;
  unreadCount: number;
}

const folders: Folder[] = [
  { id: "inbox", label: "Caixa de entrada", count: 234, unreadCount: 3 },
  { id: "sent", label: "Enviados", count: 53, unreadCount: 0 },
  { id: "trash", label: "Apagados", count: 18, unreadCount: 0 },
  { id: "archived", label: "Arquivados", count: 76, unreadCount: 0 },
];

// =====================================================================
// Search input (kept from original)
// =====================================================================

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "rgba(33, 40, 54, 0.6)",
  border: "1px solid #39445B",
  width: "320px",
  transition: "border-color 120ms ease",
  "&:focus-within": {
    borderColor: "#137cbd",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255, 255, 255, 0.4)",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    color: "#fff",
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    fontSize: "13px",
    width: "100%",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.4)",
      opacity: 1,
    },
  },
}));

// =====================================================================
// Checkbox (kept from original)
// =====================================================================

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

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ "&:hover": { bgcolor: "transparent" } }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Selecionar email" }}
      {...props}
    />
  );
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 17 18"
    fill="none"
    className="campaigns-star"
  >
    <path
      d="M8.5 1.07305L10.24 6.42808L10.2797 6.55044H10.4084L16.039 6.55044L11.4837 9.86003L11.3796 9.93565L11.4194 10.058L13.1593 15.413L8.60409 12.1034L8.5 12.0278L8.39591 12.1034L3.84066 15.413L5.58061 10.058L5.62037 9.93565L5.51628 9.86003L0.961026 6.55044L6.59163 6.55044H6.72029L6.76005 6.42808L8.5 1.07305Z"
      fill={filled ? "#E2C424" : "transparent"}
      stroke={filled ? "#E2C424" : "rgba(255, 255, 255, 0.35)"}
      strokeWidth="1.2"
    />
  </svg>
);

const AttachmentIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.93 8.8l-8.57 8.57a2 2 0 1 1-2.83-2.83l8.49-8.48" />
  </svg>
);

// =====================================================================
// Page
// =====================================================================

export const Campaigns: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const height = isLg ? "82vh" : "auto";
  const [activeFolder, setActiveFolder] = useState<EmailFolder>("inbox");
  const [activeFilter, setActiveFilter] = useState("all");

  const unreadCount = mockEmails.filter((e) => e.unread).length;

  return (
    <BaseLayoutPage>
      <Grid container spacing={1} sx={{ padding: "0 10px" }}>
        <Grid item xs={12}>
          <Typography className="page-title">Campanhas</Typography>
        </Grid>

        {/* Sidebar */}
        <Grid item sm={12} xs={12} md={12} lg={2}>
          <Box id="campaigns-left-menu" style={{ height }}>
            <Box className="campaigns-compose-wrapper">
              <Button
                className="campaigns-compose-button"
                variant="contained"
                fullWidth
              >
                + Compor e-mail
              </Button>
            </Box>
            <Box component="nav" className="campaigns-folder-list">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  type="button"
                  className={`campaigns-folder ${
                    activeFolder === folder.id ? "campaigns-folder-active" : ""
                  }`}
                  onClick={() => setActiveFolder(folder.id)}
                >
                  <span className="campaigns-folder-label">{folder.label}</span>
                  {folder.unreadCount > 0 ? (
                    <span className="campaigns-folder-badge">
                      {folder.unreadCount}
                    </span>
                  ) : (
                    <span className="campaigns-folder-count">
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Main */}
        <Grid item sm={12} xs={12} md={12} lg={10}>
          <Box id="campaigns-right-table" style={{ height }}>
            {/* Toolbar */}
            <Box id="campaigns-main-head-box">
              <Box className="campaigns-toolbar-left">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ fontSize: 18 }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar por remetente, assunto..."
                    inputProps={{ "aria-label": "Buscar emails" }}
                  />
                </Search>

                <Box
                  component="select"
                  id="campaigns-select"
                  value={activeFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setActiveFilter(e.target.value)
                  }
                >
                  <option value="all">Todos</option>
                  <option value="unread">Não lidos</option>
                  <option value="read">Lidos</option>
                  <option value="starred">Favoritos</option>
                  <option value="attachment">Com anexo</option>
                </Box>

                <button className="campaigns-icon-button" aria-label="Arquivar">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="5" rx="2" />
                    <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                    <path d="M10 13h4" />
                  </svg>
                </button>

                <button className="campaigns-icon-button" aria-label="Excluir">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </Box>

              <Box className="campaigns-counter">
                <span className="campaigns-counter-current">1–{mockEmails.length}</span>
                <span className="campaigns-counter-of">de</span>
                <span className="campaigns-counter-total">234</span>
                {unreadCount > 0 && (
                  <span className="campaigns-counter-unread">
                    · {unreadCount} não lidos
                  </span>
                )}
              </Box>
            </Box>

            {/* Email list */}
            <Box id="campaigns-messages-container">
              {mockEmails.map((email) => (
                <article
                  key={email.id}
                  className={`campaigns-email ${
                    email.unread ? "campaigns-email-unread" : ""
                  }`}
                >
                  <span
                    className="campaigns-email-cell-checkbox"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BpCheckbox />
                  </span>

                  <span
                    className="campaigns-email-cell-star"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <StarIcon filled={email.starred} />
                  </span>

                  <img
                    className="campaigns-email-avatar"
                    src={email.avatar}
                    alt={email.sender}
                  />

                  <div className="campaigns-email-sender">{email.sender}</div>

                  <div className="campaigns-email-content">
                    <span
                      className={`campaigns-label ${
                        labelMap[email.label].className
                      }`}
                    >
                      {labelMap[email.label].text}
                    </span>
                    <span className="campaigns-email-subject">
                      {email.subject}
                    </span>
                    <span className="campaigns-email-preview">
                      {" "}
                      — {email.preview}
                    </span>
                  </div>

                  <div className="campaigns-email-meta">
                    {email.hasAttachment && (
                      <span className="campaigns-email-attachment">
                        <AttachmentIcon />
                      </span>
                    )}
                    <span className="campaigns-email-time">{email.time}</span>
                  </div>
                </article>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </BaseLayoutPage>
  );
};

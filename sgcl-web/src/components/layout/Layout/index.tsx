import type { ReactNode } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import {
  LuLayoutDashboard,
  LuUsers,
  LuSchool,
  LuCalendarDays,
  LuCalendarClock,
  LuBookOpen,
  LuWallet,
  LuAward,
  LuStar,
  LuUserCog,
  LuTrophy,
  LuChartLine,
  LuPiggyBank,
  LuCreditCard,
  LuLogOut,
} from "react-icons/lu";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  { to: "/alunos", label: "Alunos", icon: LuUsers },
  { to: "/turmas", label: "Turmas", icon: LuSchool },
  { to: "/aulas", label: "Aulas", icon: LuCalendarDays },
  { to: "/aulas/programacao", label: "Programação de Aulas", icon: LuCalendarClock },
  { to: "/planejamento", label: "Planejamento Pedagógico", icon: LuBookOpen },
  { to: "/mensalidades", label: "Mensalidades", icon: LuWallet },
  { to: "/graduacoes", label: "Graduações", icon: LuAward },
  { to: "/graduacoes/proximas", label: "Próximas Promoções", icon: LuStar },
  { to: "/usuarios", label: "Usuários", icon: LuUserCog },
  { to: "/competicoes", label: "Competições", icon: LuTrophy },
  { to: "/relatorios", label: "Relatórios", icon: LuChartLine },
  { to: "/financeiro", label: "Financeiro", icon: LuPiggyBank },
  { to: "/planos", label: "Planos", icon: LuCreditCard },
];

export function Layout({ children }: LayoutProps) {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>SGCL Kids</h2>

        <hr />

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/dashboard" || to === "/aulas" || to === "/graduacoes"}
              className={({ isActive }) =>
                `sidebar-link${isActive ? " sidebar-link-ativo" : ""}`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <strong>{usuario?.nome}</strong>

          <Button onClick={handleLogout}>
            <LuLogOut size={16} />
            Sair
          </Button>
        </header>

        <div className="page">{children}</div>
      </main>
    </div>
  );
}
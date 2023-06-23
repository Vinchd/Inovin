import { Link, useLocation } from "react-router-dom";

function HeaderAdmin() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <header className="bg-secondary h-24 w-full z-10 fixed flex items-center justify-between">
      <Link to="/admin" className="flex items-center">
        <img
          src="/assets/logo/logo_black.png"
          className="pl-6 h-16 w-23"
          alt="Logo Inovin"
        />
        <span className="text-primary text-2xl font-bold ml-4">INOVIN</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-10 mr-14 h-20">
          <li
            className={`text-primary w-[72px] text-center ${
              !isActive("/admin/lexique") ? "hover:underline" : ""
            } ${isActive("/admin/lexique") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/admin/lexique">Lexique</Link>
          </li>
          <li
            className={`text-primary w-[72px] text-center ${
              !isActive("/admin/vins") ? "hover:underline" : ""
            } ${isActive("/admin/vins") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/admin/vins">Vins</Link>
          </li>
          <li
            className={`mr-14 text-primary w-[54px] text-center ${
              !isActive("/admin/utilisateurs") ? "hover:underline" : ""
            } ${isActive("/admin/utilisateurs") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/admin/utilisateurs">Utilisateurs</Link>
          </li>
          <li
            className={`text-primary w-[72px] text-center ${
              !isActive("/admin/atelier") ? "hover:underline" : ""
            } ${isActive("/admin/atelier") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/admin/atelier">Atelier</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderAdmin;

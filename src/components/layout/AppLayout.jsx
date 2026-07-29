import Sidebar from "./Sidebar";
import "../../styles/css/AppLayout.css";

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
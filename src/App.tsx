import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { DataProvider } from "./components/context";

function App() {
  return (
    <div>
      <Navbar />
      <DataProvider>
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

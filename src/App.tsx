import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { DataProvider } from "./Components/Context";

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

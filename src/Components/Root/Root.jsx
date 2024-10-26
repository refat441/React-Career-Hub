import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hader from "../Hader/Hader";

const Root = () => {
  return (
    <div>
      <Hader></Hader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

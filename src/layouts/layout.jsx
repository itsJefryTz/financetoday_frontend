import Sidebar from "../components/layout/sidebar";
import Topbar from "../components/layout/topbar";

const Layout = ({ children }) => {
  return (
    <>
      <div id="page-top" >
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                {children}
              </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Layout;
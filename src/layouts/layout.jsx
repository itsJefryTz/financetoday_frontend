// import Sidebar from "../components/layout/sidebar";
import Topbar from "../components/layout/topbar";
import Footer from "../components/layout/footer";

const Layout = ({ children }) => {
  return (
    <>
      <div id="page-top" className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div id="wrapper" className="shadow">
                {/* <Sidebar /> */}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </>
  );
};

export default Layout;
// import node module libraries
import { useEffect, useState } from "react";

// import sub components
import { useRouter } from "next/router";
import Error404 from "pages/404";
import { Col, Row, Spinner } from "react-bootstrap";
import NavbarTop from "./navbars/NavbarTop";
import NavbarVertical from "./navbars/NavbarVertical";

const DefaultDashboardLayout = (props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setIsLoading(true);
      }
    };
    const handleComplete = (url) => {
      if (url === router.asPath) {
        setIsLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
      <div className="navbar-vertical navbar">
        <NavbarVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
        />
      </div>
      <div
        id="page-content"
        className="d-flex flex-column justify-content-between"
      >
        <div className="header">
          <NavbarTop
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
          />
        </div>
        {isLoading ? (
          <Row className="d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="dark" role="status" />
          </Row>
        ) : (
          <div>{props.children}</div>
        )}
        <div className="px-6 border-top py-3 bg-light">
          <Row>
            <Col sm={6} className="text-center text-sm-start mb-2 mb-sm-0">
              <p className="m-0">
                Made by{" "}
                <a href="https://codescandy.com/" target="_blank">
                  BJR
                </a>
              </p>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <p className="m-0">
                Destributed by{" "}
                <a href="https://themewagon.com/" target="_blank">
                  BJR
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default DefaultDashboardLayout;

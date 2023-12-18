// import node module libraries
import { Fragment } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";

// import blank layout, header and footer to override default layout
import NotFound from "layouts/NotFound";

const Error404 = () => {
  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <div className="text-center py-12">
            <div className="mb-3">
              <Image
                src="/images/error/404-error-img.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <h1 className="display-4 fw-bold">You're Not Authorized</h1>
            <p className="mb-4">
              Or simply leverage the expertise of our consultation team.
            </p>
            <Link href="/authentication/sign-in" className="btn btn-warning">
              Back To Sign-In
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

Error404.Layout = NotFound;

export default Error404;

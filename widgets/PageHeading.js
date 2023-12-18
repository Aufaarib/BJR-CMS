// import node module libraries
import { Row, Col, Breadcrumb } from "react-bootstrap";

const PageHeading = (props) => {
  const { heading } = props;
  return (
    <Row>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Col lg={12} md={12} xs={12}>
        {/* Page header */}
        <div className="border-bottom pb-4 mb-4 ">
          <h3 className="mb-0 fw-bold">{heading}</h3>
        </div>
      </Col>
    </Row>
  );
};

export default PageHeading;

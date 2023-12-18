// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog,
} from "sub-components";
import { DataTables } from "./components/dataTables";

const ReactTable = () => {
  return (
    <Container fluid className="p-6 bg-light">
      {/* Page Heading */}
      <PageHeading heading="React Data Table Component" />

      {/* content */}
      <Row className="p-4">
        <DataTables />
      </Row>
    </Container>
  );
};

export default ReactTable;

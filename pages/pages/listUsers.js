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
import { DataTables } from "pages/components/dataTables";
import { useEffect, useState } from "react";
import axios from "axios";

const ListUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://api.bjr-dev.nuncorp.id/us/api/v1/users", {
        headers: {
          authorization: localStorage.getItem("TOKEN"),
        },
      })
      .then((res) => {
        setData(res.data.body.rows);
      })
      .catch((error) => {});
  };

  const columns = [
    {
      name: <div>No</div>,
      selector: (_row, i) => i + 1,
      width: "55px",
    },
    {
      name: <div>Username</div>,
      // selector: (data) => data,
      cell: (data) => <div>{data.username}</div>,
      width: "auto",
    },
    {
      name: <div>Email</div>,
      // selector: (data) => data,
      cell: (data) => <div>{data.email}</div>,
      width: "auto",
    },
    {
      name: <div>Role</div>,
      // selector: (data) => data,
      cell: (data) => <div>{data.role}</div>,
      width: "auto",
    },
  ];

  return (
    <Container fluid className="p-6 bg-light">
      {/* Page Heading */}
      <PageHeading heading="List Users" />

      {/* content */}
      <Row className="p-4">
        <DataTables data={data} columns={columns} />
      </Row>
    </Container>
  );
};

export default ListUsers;

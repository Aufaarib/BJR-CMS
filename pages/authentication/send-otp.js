// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const sendOtp = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("EMAIL"));
  }, []);

  const onVerif = () => {
    axios
      .post("https://api.bjr-dev.nuncorp.id/as/api/v1/auth/verify-otp", {
        email: email,
        code: code,
      })
      .then((res) => {
        // setIsLoading(false);
        // if (res.status.code === "AS-20000") {
        //   router.push("/authentication/sign-in");
        // }
      })
      .catch((error) => {
        // if (error.code === "ERR_NETWORK") {
        //   AlertMessage("Gagal", "Koneksi Bermasalah", "Coba Lagi", "error");
        // } else {
        //   AlertMessage(
        //     "Gagal",
        //     "Email atau Password Tidak Sesuai",
        //     "Coba Lagi",
        //     "error"
        //   );
        // }
        // setIsLoading(false);
      });
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo/logo-primary.svg"
                  className="mb-2"
                  alt=""
                />
              </Link>
              <p className="mb-6">Verified Your Account</p>
            </div>
            {/* Form */}
            {/* <Form> */}
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                onChange={(e) => setCode(e.target.value)}
                type="number"
                name="otp"
                placeholder="Enter OTP Code"
              />
            </Form.Group>
            {/* Button */}
            <div className="mb-3 d-grid">
              <button onClick={() => onVerif()}>Verify</button>
            </div>
            <span>
              <Link href="/authentication/sign-in">Back To Sign In</Link>
            </span>
            {/* </Form> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

sendOtp.Layout = AuthLayout;

export default sendOtp;

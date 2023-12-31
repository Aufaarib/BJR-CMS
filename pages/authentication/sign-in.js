// import node module libraries
import Link from "next/link";
import { Button, Card, Col, Form, Image, Row, Spinner } from "react-bootstrap";

// import authlayout to override default layout
import axios from "axios";
import { useStateContext } from "contexts/ContextProvider";
import Cookies from "js-cookie";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [emails, setEmail] = useState("");
  const [passwords, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const { isLoading, setIsLoading } = useStateContext();
  const router = useRouter();

  const handleCheckboxChange = () => {
    setShowPwd(!showPwd);
  };

  useEffect(() => {
    setIsLoading(false);
    localStorage.setItem("TOKEN", "");
    localStorage.setItem("USERNAME", "");
    localStorage.setItem("ROLE", "");
    localStorage.setItem("EMAIL", "");
    localStorage.setItem("USER_ID", "");
    localStorage.setItem("IS_LOCKED", "");
  }, []);

  const onLogin = () => {
    // e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://api.bjr-dev.nuncorp.id/as/api/v1/auth/signin", {
        email: emails,
        password: passwords,
      })
      .then((res) => {
        const role = res?.data?.body.role;
        const email = res?.data?.body.email;
        const user_id = res?.data?.body.user_id;
        const token = res?.headers?.authorization;
        const username = res?.data?.body.username;
        const is_locked = res?.data?.body.is_locked;
        Cookies.set("role", role);
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USERNAME", username);
        localStorage.setItem("ROLE", role);
        localStorage.setItem("EMAIL", email);
        localStorage.setItem("USER_ID", user_id);
        localStorage.setItem("IS_LOCKED", is_locked);
        if (role === "admin") {
          router.push("/dashboard");
        } else if (role === "user") {
          router.reload();
          // window.location.href = "/authentication/sign-in";
        } else {
          router.reload();
          // window.location.href = "/authentication/sign-in";
        }
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
        setIsLoading(false);
      });
  };

  const onVerify = () => {
    setIsLoading(true);
    axios
      .post("https://api.bjr-dev.nuncorp.id/as/api/v1/auth/login", {
        email: emails,
      })
      .then((res) => {
        localStorage.setItem("EMAIL", emails);
        // if (res.status.code === "AS-20000") {
        // console.log("ROLE === ", role);
        // if (role === "admin") {
        //   router.push("/");
        // } else if (role === "user") {
        //   router.push("/404");
        // } else {
        router.push("/authentication/send-otp");
        // }
        // }
        setIsLoading(false);
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
        setIsLoading(false);
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
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {/* <Form> */}
            {/* Username */}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username or email</Form.Label>
              <Form.Control
                type="email"
                name="username"
                placeholder="Enter address here"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPwd === false ? "password" : "text"}
                name="password"
                placeholder="**************"
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Checkbox */}
            <div className="d-lg-flex justify-content-between align-items-center mb-4">
              <Form.Check type="checkbox" id="rememberme">
                <Form.Check.Input
                  type="checkbox"
                  checked={showPwd}
                  onChange={handleCheckboxChange}
                />
                <Form.Check.Label>Show Password</Form.Check.Label>
              </Form.Check>
            </div>
            <div>
              {/* Button */}
              <div className="d-grid">
                <Button
                  onClick={() => onLogin()}
                  variant="primary"
                  type="submit"
                  className="d-flex justify-content-center gap-2 align-items-center"
                >
                  {isLoading ? (
                    <Spinner animation="border" variant="warning" />
                  ) : (
                    ""
                  )}
                  Sign In
                </Button>
              </div>
              <div className="d-md-flex justify-content-between mt-4">
                <div className="mb-2 mb-md-0">
                  <Link href="/authentication/sign-up" className="fs-5">
                    Create An Account{" "}
                  </Link>
                </div>
                <div>
                  <Link
                    href="/authentication/forget-password"
                    className="text-inherit fs-5"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div>
                  <button onClick={() => onVerify()}>Verify</button>
                </div>
              </div>
            </div>
            {/* </Form> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;

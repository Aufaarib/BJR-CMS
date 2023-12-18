import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

const AuthLayout = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    <Container>
      {isLoading ? (
        <Row className="d-flex align-items-center justify-content-center py-5 min-vh-100">
          <Spinner animation="border" variant="dark" role="status" />
        </Row>
      ) : (
        <div>{props.children}</div>
      )}
    </Container>
  );
};
export default AuthLayout;

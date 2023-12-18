import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";

// import theme style scss file
import "styles/theme.scss";

// import default layouts
import { ContextProvider } from "contexts/ContextProvider";
import DefaultDashboardLayout from "layouts/DefaultDashboardLayout";
import { useEffect, useState } from "react";
import AuthLayout from "layouts/AuthLayout";
import { Spinner } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const pageURL = process.env.baseURL + router.pathname;
  const title = "Berani Jual Rugi - CMS";
  const description =
    "Dash is a fully responsive and yet modern premium Nextjs template & snippets. Geek is feature-rich Nextjs components and beautifully designed pages that help you create the best possible website and web application projects. Nextjs Snippet ";
  const keywords =
    "Dash UI, Nextjs, Next.js, Course, Sass, landing, Marketing, admin themes, Nextjs admin, Nextjs dashboard, ui kit, web app, multipurpose";

  // Identify the layout, which will be applied conditionally

  const Layout =
    Component.Layout ||
    (router.pathname.includes("authentication")
      ? AuthLayout
      : DefaultDashboardLayout);

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.siteName,
        }}
      />
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
          {/* <Analytics /> */}
        </Layout>
      </ContextProvider>
    </SSRProvider>
  );
}

export default MyApp;

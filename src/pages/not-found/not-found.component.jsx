import React from "react";
import Layout from "../../components/Layout";
import NotFoundComponent from "./NotFound";

const title = "Page Not Found";

const NotFound = () => {
  return (
    <Layout>
      <NotFoundComponent title={title} />
    </Layout>
  );
};

export default NotFound;

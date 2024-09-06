import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Page from "../../components/Page/Page";
import { Helmet } from "react-helmet";

const DataDeletion = (props) => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <Helmet>
      <meta name="description" content="View Workmob data deletion policy." />
        <title>Workmob Data Deletion</title>
        <style>{"a {color: #b9b9b9}"}</style>
      </Helmet>
      <Page locationType={"/"} {...props}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h5 className="text-white mt-5 mb-3">
                <strong>Data Deletion Policy and User Rights</strong>
              </h5>
              <p className="text-white">
                At Workmob Private Limited, we respect your privacy and your
                right to control your personal data. You have the right to
                access, correct, object to, or delete the data that we hold
                about you. If you want to delete your personal data from our
                systems, please follow these steps:
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p className="mb-0">
                    In-App Request:You can initiate the data deletion process
                    choosing the 'Delete Account' option within the app.
                  </p>
                </li>
                <li>
                  <span className="list">2.</span>
                  <p className="mb-0">
                    Email Request: You can also send us an email at
                    <a href="mailto:support@workmob.com">
                      support@workmob.com
                    </a>
                    with your account details and request to delete your data.
                  </p>
                </li>
              </ol>
              <p className="text-white">
                After you submit the request, we will verify it. Once verified,
                your account and all associated data will be permanently deleted
                immediately, ensuring that no trace of your information remains
                in our systems. Please note that search engines will still
                reflect your cached data for some time before they refresh their
                databases.
              </p>

              <h5 className="text-white mt-5 mb-3">
                <strong>Read Our Privacy Policy to Understand Data Use</strong>
              </h5>
              <p className="text-white">
                We are committed to protecting your personal information and
                using it in a lawful and transparent manner. To learn more about
                how we collect, use, and share your data, please read our
                <Link to="/privacy"> privacy policy </Link>. Our policy explains the types of data we
                collect, the purposes for which we use it, and the choices you
                have regarding your data. We also describe the security measures
                we take to safeguard your information and prevent unauthorized
                access.
              </p>
              <p className="text-white">
                By reading our privacy policy, you can be confident that your
                personal information is being handled with care and respect. If
                you have any questions or feedback about our policy or our data
                practices, please contact us on
                <a href="mailto:support@workmob.com"> support@workmob.com </a>
                We value your trust and appreciate your use of our apps.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  );
};

export default DataDeletion;

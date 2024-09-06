import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Page from '../../components/Page/Page';
import Helmet from 'react-helmet';
const Legal = (props) => {
  return(
    <Layout>
        <Helmet>
            <meta name="description" content="View Workmob legal terms, conditions and policies before using our app." />
            <title>Legal - Workmob Terms, Conditions and Policies</title>
        </Helmet>      
      <Page {...props}>
        <div className="container legal">
          <div className="row">
              <div className="col-12">
                  <h3 className="font-weight-bold text-center">LEGAL</h3>
                  <p className="font-weight-bold">Policies</p>
                  <p>
                    <Link to="/terms" className="text-white">Terms & Conditions  
                    <i className="icon icon-right-arrow float-right"></i>
                    </Link>
                  </p>
                  <p>
                    <Link to="/terms-contests" className="text-white">Contests T&Cs <i className="icon icon-right-arrow float-right"></i></Link>
                  </p>
                  <p>
                    <Link to="/privacy" className="text-white">Privacy Policy <i className="icon icon-right-arrow float-right"></i></Link>
                  </p>
              </div>
          </div>
      </div>
      </Page>
    </Layout>
  )
}

export default Legal;

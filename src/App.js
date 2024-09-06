import "./App.scss";
import React from "react";
import LoaderComponent from "../src/components/common/Loader/Loader";
import PreprodLogin from "./components/PreprodLogin/PreprodLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LocationCity from "./pages/location/locationCity";
import DataDeletion from "./pages/deta-deletion/data-deletion.component";

const HomePage = React.lazy(() =>
  import("../src/pages/homepage/homepage.component")
);
const About = React.lazy(() =>
  import("../src/pages/about/aboutpage.component")
);
const NotFound = React.lazy(() =>
  import("../src/pages/not-found/not-found.component")
);
const Legal = React.lazy(() => import("../src/pages/legal/legal.component"));
const Privacy = React.lazy(() =>
  import("../src/pages/privacy/privacy.component")
);
const Terms = React.lazy(() => import("../src/pages/terms/terms.component"));
const TermsContests = React.lazy(() =>
  import("../src/pages/terms-contests/terms-contests.component")
);
const UserProfile = React.lazy(() =>
  import("../src/pages/user-profile/user-profile.component")
);
const UserVideo = React.lazy(() =>
  import("../src/pages/user-video/user-video.component")
);
const GreetingsListing = React.lazy(() =>
  import("../src/pages/greetings/greetingsHome")
);
const GreetingsDetail = React.lazy(() =>
  import("../src/pages/greetings/greetingsDetail")
);
const BrandAmbassadorComponent = React.lazy(() =>
  import("./pages/brand-ambassador/BrandAmbassadorComponent")
);
const GreetingsKahani = React.lazy(() =>
  import("./pages/kahani/greetingsKahani")
);
const Insight = React.lazy(() => import("./pages/insightpage/insight"));

const Location = React.lazy(() => import("./pages/location/location"));
const Categorypage = React.lazy(() =>
  import("./pages/categorypage/categorypage")
);
const Searchpage = React.lazy(() => import("./pages/searchpage/searchpage"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<LoaderComponent />}>
        <Router>
          <PreprodLogin />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/greetingssearch" component={Searchpage} />
            <Route exact path="/gyansearch" component={Searchpage} />
            <Route exact path="/motivationsearch" component={Searchpage} />

            <Route exact path="/greetingscategory" component={Categorypage} />
            <Route exact path="/gyancategory" component={Categorypage} />
            <Route exact path="/motivationcategory" component={Categorypage} />

            <Route exact path="/greetingslocation" component={Location} />
            <Route
              exact
              path="/greetingslocation/:id"
              component={LocationCity}
            />
            <Route exact path="/gyanlocation" component={Location} />
            <Route exact path="/gyanlocation/:id" component={LocationCity} />
            <Route exact path="/motivationlocation" component={Location} />
            <Route
              exact
              path="/motivationlocation/:id"
              component={LocationCity}
            />

            <Route exact path="/greetingsinsights" component={Insight} />
            <Route exact path="/greetingsinsights/:id" component={Insight} />
            <Route exact path="/gyaninsights" component={Insight} />
            <Route exact path="/gyaninsights/:id" component={Insight} />
            <Route exact path="/motivationinsights" component={Insight} />
            <Route exact path="/motivationinsights/:id" component={Insight} />

            <Route exact path="/greetings" component={GreetingsListing} />
            <Route
              exact
              path="/greetings/:category"
              component={GreetingsListing}
            />
            <Route
              exact
              path="/greetings/:category/:userId"
              component={GreetingsDetail}
            />

            <Route exact path="/gyan" component={GreetingsListing} />
            <Route exact path="/gyan/:category" component={GreetingsListing} />
            <Route
              exact
              path="/gyan/:category/:userId"
              component={GreetingsDetail}
            />

            <Route exact path="/motivation" component={GreetingsListing} />
            <Route
              exact
              path="/motivation/:category"
              component={GreetingsListing}
            />
            <Route
              exact
              path="/motivation/:category/:userId"
              component={GreetingsDetail}
            />

            <Route exact path="/shubhkamnaye" component={GreetingsKahani} />
            <Route exact path="/gyankahani" component={GreetingsKahani} />
            <Route exact path="/motivationkahani" component={GreetingsKahani} />

            <Route
              exact
              path="/brand-ambassador"
              component={BrandAmbassadorComponent}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/privacy-policy" component={Privacy} />
            {/* <Route exact path="/privacy-policy.html" component={Privacy} /> */}
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/terms-contests" component={TermsContests} />
            <Route exact path="/data-deletion" component={DataDeletion} />
            <Route exact path="/:lang(hindi)?/:id" component={UserProfile} />
            <Route exact path="/:storyType/:id" component={UserVideo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;

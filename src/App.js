import React, { useEffect, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { getWishlist } from "./functions/user";
import { currentUser } from "./functions/auth";
import Footer from "./components/footer/Footer";
import NoNetModal from "./components/NoNetModal/NoNetModal";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./loader.css";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import GoToTop from "./components/Scroll/GoToTop";
import Whatsappbtn from "./components/whatsappbtn/Whatsappbtn";

// using lazy
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
const Sweden = lazy(() => import("./pages/destination/Sweden"));
const Australia = lazy(() => import("./pages/destination/Australia"));
const UK = lazy(() => import("./pages/destination/UnitedKingdom"));
const Belgium = lazy(() => import("./pages/destination/Belgium"));
const Denmark = lazy(() => import("./pages/destination/Denmark"));
const Finland = lazy(() => import("./pages/destination/Finland"));
const Ireland = lazy(() => import("./pages/destination/Ireland"));
const France = lazy(() => import("./pages/destination/France"));
const Cyprus = lazy(() => import("./pages/destination/Cyprus"));
const SuccessStories = lazy(() =>
  import("./pages/successstories/SuccessStories")
);
const Header = lazy(() => import("./components/nav/Header"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const AdminPanel = lazy(() => import("./pages/admin/AdminPanel"));
const BannerUpdate = lazy(() =>
  import("./pages/admin/Slider&Banners/BannerUpdate")
);
const StaticTextupdate = lazy(() =>
  import("./pages/admin/statictext/StaticTextupdate")
);
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const ContactFormSingle = lazy(() =>
  import("./pages/admin/activities/ContactFormSingle")
);
const ApplyFormSingle = lazy(() =>
  import("./pages/admin/activities/ApplyFormSingle")
);

const App = () => {
  const [noNetModalshow, setNoNetModalshow] = useState(false);

  const { noNetModal } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  useEffect(() => {
    noNetModal && setNoNetModalshow(true);
  }, [noNetModal]);

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (navigator.onLine) {
        setNoNetModalshow(false);
        dispatch({
          type: "SET_NETMODAL_VISIBLE",
          payload: false,
        });
      }
    };
    window.addEventListener("online", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    import("antd/dist/antd.css").then((module) => {
      const node = document.createElement("style");
      node.innerHTML = module.default;
      document.head.appendChild(node);
    });
    // Fetch and append boot.css from public folder
    fetch("/boot.css")
      .then((response) => response.text())
      .then((css) => {
        const node = document.createElement("style");
        node.innerHTML = css;
        document.head.appendChild(node);
      })
      .catch((error) => console.error("Error loading boot.css:", error));
  }, []);

  const handleRetry = async (e) => {
    // e.preventDefault();
  };

  // to check firebase auth state
  useEffect(() => {
    let unsubscribe;

    const loadAuthModule = async () => {
      const { auth } = await import("./firebase");
      unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();

          try {
            const res = await currentUser(idTokenResult.token);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });

            const wishlistRes = await getWishlist(idTokenResult.token);
            dispatch({
              type: "USER_WISHLIST",
              payload: wishlistRes.data.wishlist,
            });
          } catch (err) {
            console.log(err);
          }
        }
      });
    };

    loadAuthModule();

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="mainloadercont">
          <div class="loadingio-spinner-double-ring-2by998twmg8">
            <div class="ldio-yzaezf3dcmj">
              <div></div>
              <div></div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SkeletonTheme baseColor="#d9d9d9" highlightColor="#bfbfbf">
        <Router>
          <NoNetModal
            classDisplay={`${noNetModalshow && "open-popup"}`}
            setNoNetModal={setNoNetModalshow}
            handleRetry={handleRetry}
          />
          <ScrollToTop />
          <Header />
          <Toaster />
          <GoToTop />
          <Whatsappbtn />
          <Switch>
            {/* common unprotected Routes */}

            <Route exact path="/" component={Home} />
            <Route exact path="/Destinations/sweden" component={Sweden} />
            <Route exact path="/Destinations/australia" component={Australia} />
            <Route exact path="/Destinations/United-Kingdom" component={UK} />
            <Route exact path="/Destinations/Belgium" component={Belgium} />
            <Route exact path="/Destinations/Denmark" component={Denmark} />
            <Route exact path="/Destinations/Finland" component={Finland} />
            <Route exact path="/Destinations/Ireland" component={Ireland} />
            <Route exact path="/Destinations/France" component={France} />
            <Route exact path="/Destinations/Cyprus" component={Cyprus} />
            <Route exact path="/Stories" component={SuccessStories} />

            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/ContactUs" component={ContactUs} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/register/complete"
              component={RegisterComplete}
            />
            {/* <Route exact path="/forgot/password" component={ForgotPassword} /> */}

            {/* Admin protected Routes */}

            <AdminRoute exact path="/AdminPanel" component={AdminPanel} />
            <AdminRoute
              exact
              path="/AdminPanel?page=:page"
              component={AdminPanel}
            />

            <AdminRoute
              exact
              path="/admin/banner/:slug"
              component={BannerUpdate}
            />
            <AdminRoute
              exact
              path="/admin/statictext/:slug"
              component={StaticTextupdate}
            />

            <AdminRoute
              exact
              path="/admin/contact/:id"
              component={ContactFormSingle}
            />
            <AdminRoute
              exact
              path="/admin/form/:id"
              component={ApplyFormSingle}
            />
            <Route exact path="*" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </SkeletonTheme>
    </Suspense>
  );
};

export default App;

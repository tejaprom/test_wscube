import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import ProductsComponent from "./pages/products/ProductsComponent";
import Blogs from "./pages/blogs/Blogs";
import MultipleItems from "./pages/components/MultipleItems/MultipleItems";
import Blog1 from "./pages/blog1/Blog1";
import LandingPage from "./pages/LandingPage/LandingPage";
import Swipers from "./pages/components/swiper/Swipers";
import Thanku from "./pages/components/thanku/Thanku";
import Loader1 from "./pages/components/loader1/Loader1";
import Blog2 from "./pages/blog2/Blog2";
import ErrorPage from "./pages/errorpage/ErrorPage";

const RouterComponent = () => {
  const { pathname } = useLocation();
  const hideHeader =
    pathname === "/landingpage" ||
    pathname === "/thankyou" ||
    pathname === "/not-found";

  const hideFooter = pathname === "/thankyou" || pathname === "/not-found";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route
          path="/"
          element={<Home title="POLYONE | Home" />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/about-us"
          element={<AboutUs title="POLYONE | ABOUT US" />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs title="POLYONE | CONTACT US" />}
        />
        <Route
          path="/products"
          element={<ProductsComponent title="POLYONE | PRODUCTS" />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/choosing-the-right-control-cables-for-your-industry-needs"
          element={<Blog1 />}
        />
        <Route
          path="/how-to-choose-premier-wire-supplier-india"
          element={<Blog2 />}
        />
        <Route path="/mul" element={<MultipleItems />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/Swiper" element={<Swipers />} />
        <Route path="/thankyou" element={<Thanku />} />
        <Route path="/loader1" element={<Loader1 />} />
        <Route path="/not-found" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {!hideFooter && <Footer />}
      <Routes></Routes>
    </>
  );
};

// export default App;

const App = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
};

export default App;

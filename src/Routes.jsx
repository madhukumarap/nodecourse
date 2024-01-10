import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const FAQsOne = React.lazy(() => import("pages/FAQsOne"));
const Settings = React.lazy(() => import("pages/Settings"));
const OrderDetailsOne = React.lazy(() => import("pages/OrderDetailsOne"));
const OrderHistory = React.lazy(() => import("pages/OrderHistory"));
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const CreateAccount = React.lazy(() => import("pages/CreateAccount"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const FeaturedProducts = React.lazy(() => import("pages/FeaturedProducts"));
const PopularProducts = React.lazy(() => import("pages/PopularProducts"));
const BannarOne = React.lazy(() => import("pages/BannarOne"));
const HotDeals = React.lazy(() => import("pages/HotDeals"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const ProductDetailCustomerFeedback = React.lazy(
  () => import("pages/ProductDetailCustomerFeedback"),
);
const ProductsDetailsAdditionalInfo = React.lazy(
  () => import("pages/ProductsDetailsAdditionalInfo"),
);
const ProductsDetailsDescriptionOne = React.lazy(
  () => import("pages/ProductsDetailsDescriptionOne"),
);
const ContactOne = React.lazy(() => import("pages/ContactOne"));
const AboutOne = React.lazy(() => import("pages/AboutOne"));
const ShopOne = React.lazy(() => import("pages/ShopOne"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const ErrorPageOne = React.lazy(() => import("pages/ErrorPageOne"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const OrderDetails = React.lazy(() => import("pages/OrderDetails"));
const OrderHistoryOne = React.lazy(() => import("pages/OrderHistoryOne"));
const UserDashboardOne = React.lazy(() => import("pages/UserDashboardOne"));
const CreateAccountOne = React.lazy(() => import("pages/CreateAccountOne"));
const SignInOne = React.lazy(() => import("pages/SignInOne"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const SingleBlog = React.lazy(() => import("pages/SingleBlog"));
const BlogList = React.lazy(() => import("pages/BlogList"));
const CheckoutOne = React.lazy(() => import("pages/CheckoutOne"));
const ShoppingCartOne = React.lazy(() => import("pages/ShoppingCartOne"));
const WishlistOne = React.lazy(() => import("pages/WishlistOne"));
const ProductDetailCustomerFeedbackOne = React.lazy(
  () => import("pages/ProductDetailCustomerFeedbackOne"),
);
const ProductsDetailsAdditionalInfoOne = React.lazy(
  () => import("pages/ProductsDetailsAdditionalInfoOne"),
);
const ProductsDetailsDescription = React.lazy(
  () => import("pages/ProductsDetailsDescription"),
);
const ShopTwo = React.lazy(() => import("pages/ShopTwo"));
const ShopOneOne = React.lazy(() => import("pages/ShopOneOne"));
const Bannar = React.lazy(() => import("pages/Bannar"));
const Homepage3 = React.lazy(() => import("pages/Homepage3"));
const Homepage2 = React.lazy(() => import("pages/Homepage2"));
const Homepage1 = React.lazy(() => import("pages/Homepage1"));
const HomepageBoxLayout = React.lazy(() => import("pages/HomepageBoxLayout"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepageboxlayout" element={<HomepageBoxLayout />} />
          <Route path="/homepage1" element={<Homepage1 />} />
          <Route path="/homepage2" element={<Homepage2 />} />
          <Route path="/homepage3" element={<Homepage3 />} />
          <Route path="/bannar" element={<Bannar />} />
          <Route path="/shoponeone" element={<ShopOneOne />} />
          <Route path="/shoptwo" element={<ShopTwo />} />
          <Route
            path="/productsdetailsdescription"
            element={<ProductsDetailsDescription />}
          />
          <Route
            path="/productsdetailsadditionalinfoone"
            element={<ProductsDetailsAdditionalInfoOne />}
          />
          <Route
            path="/productdetailcustomerfeedbackone"
            element={<ProductDetailCustomerFeedbackOne />}
          />
          <Route path="/wishlistone" element={<WishlistOne />} />
          <Route path="/shoppingcartone" element={<ShoppingCartOne />} />
          <Route path="/checkoutone" element={<CheckoutOne />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/singleblog" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signinone" element={<SignInOne />} />
          <Route path="/createaccountone" element={<CreateAccountOne />} />
          <Route path="/userdashboardone" element={<UserDashboardOne />} />
          <Route path="/orderhistoryone" element={<OrderHistoryOne />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/errorpageone" element={<ErrorPageOne />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route path="/shopone" element={<ShopOne />} />
          <Route path="/aboutone" element={<AboutOne />} />
          <Route path="/contactone" element={<ContactOne />} />
          <Route
            path="/productsdetailsdescriptionone"
            element={<ProductsDetailsDescriptionOne />}
          />
          <Route
            path="/productsdetailsadditionalinfo"
            element={<ProductsDetailsAdditionalInfo />}
          />
          <Route
            path="/productdetailcustomerfeedback"
            element={<ProductDetailCustomerFeedback />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/hotdeals" element={<HotDeals />} />
          <Route path="/bannarone" element={<BannarOne />} />
          <Route path="/popularproducts" element={<PopularProducts />} />
          <Route path="/featuredproducts" element={<FeaturedProducts />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orderdetailsone" element={<OrderDetailsOne />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faqsone" element={<FAQsOne />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

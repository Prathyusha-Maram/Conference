import "./App.css";
import Landing from "./pages/landingPage/Landing";
import ProgramCommity from "./pages/ProgramCommitty";
import Accept from "./pages/Accept";
import Contact from "./pages/landingPage/components/contact";
import Evaluation from "./pages/Evaluation";
import Login from "./pages/loginPage/Login";
import Navbar from "./pages/landingPage/components/navbar";
import Footer from "./pages/landingPage/components/footer";
import AdminLogin from "./pages/loginPage/components/adminLogin";
import ReviewerLogin from "./pages/loginPage/components/reviewerLogin";
import UserLogin from "./pages/loginPage/components/userLogin";
import StudentLogin from "./pages/loginPage/components/studentLogin";
import PostReview from "./pages/loginPage/components/postReview";
import LogoutNavbar from "./pages/loginPage/components/LogoutNavbar";
import AdminReview from "./pages/loginPage/components/AdminReview";
import UserLoginPage from "./pages/loginPage/LoginTabs/userLoginPage";
import StudentLoginPage from "./pages/loginPage/LoginTabs/studentLoginPage";
import Payment from "./pages/paymentLogin";
import UserSignUpPage from "./pages/loginPage/LoginTabs/userSignUpPage";
import StudentSignUpPage from "./pages/loginPage/LoginTabs/studentSignUpPage";
import ReviewLoginPage from "./pages/loginPage/LoginTabs/ReviewLoginPage";
import ReviewerSignUpPage from "./pages/loginPage/LoginTabs/ReviewerSignUpPage";
import AdminLoginPage from "./pages/loginPage/LoginTabs/AdminLoginPage";
import SubmitPaperPage from "./pages/loginPage/LoginTabs/SubmitPaperPage";
import StudentSubmitPaperPage from "./pages/loginPage/LoginTabs/studentSubmitPaperPage";
import EditPaperPage from "./pages/loginPage/LoginTabs/EditSubmitPaperPage";
import StudentEditPaperPage from "./pages/loginPage/LoginTabs/studentEditSubmitPaperPage";
import CheckStatus from "./pages/loginPage/LoginTabs/CheckStatus";
import CheckStudentStatus from "./pages/loginPage/LoginTabs/studentCheckStatus";
import PaymentPage from "./pages/loginPage/LoginTabs/UserPaymentPage";
import UserPaymentLogin from "./pages/loginPage/LoginTabs/userPaymentLoginPage";
import StudentPaymentLogin from "./pages/loginPage/LoginTabs/studentPaymentLoginPage";
import StudentPaymentPage from "./pages/loginPage/LoginTabs/studentPaymentPage";
import ViewReview from "./pages/loginPage/components/ViewReview";
import AdminLoginTab from "./pages/loginPage/LoginTabs/adminLoginTab";
import AdminSignUpPage from "./pages/loginPage/LoginTabs/AdminSignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewerLoginTab from "./pages/loginPage/LoginTabs/reviewerLoginTab";
import ReviewerChat from "./pages/loginPage/components/reviewerChat";
import GuestLoginPage from "./pages/loginPage/LoginTabs/GuestLoginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/ProgramCommity" element={<ProgramCommity />} />
            <Route exact path="/Accept" element={<Accept />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/Evaluation" element={<Evaluation />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/author/login" element={<UserLoginPage />} />
            <Route exact path="/student/login" element={<StudentLoginPage />} />
            <Route exact path="/register" element={<Payment />} />
            <Route exact path="/author/register" element={<UserSignUpPage />} />
            <Route exact path="/student/register" element={<StudentSignUpPage />} />
            <Route exact path="/committee/login" element={<ReviewLoginPage />} />
            <Route exact path="/committee/register" element={<ReviewerSignUpPage />} />
            <Route exact path="/admin/login" element={<AdminLoginPage />} />
            <Route exact path="/admin/register" element={<AdminSignUpPage />} />
            <Route exact path="/guest/login" element={<GuestLoginPage />} />
          </Route>

          <Route element={<LogoutNavbar />}>
            <Route exact path="/adminLogin" element={<AdminLogin />} />
            <Route exact path="/ReviewerLogin" element={<ReviewerLogin />} />
            <Route exact path="/UserLogin" element={<UserLogin />} />
            <Route exact path="/StudentLogin" element={<StudentLogin />} />
            <Route exact path="/PostReview" element={<PostReview />} />
            <Route exact path="/viewReview" element={<ViewReview />} />
            <Route exact path="/AdminReview" element={<AdminReview />} />
            <Route exact path="/Review" element={<ReviewerLoginTab />} />
            <Route exact path="/createPost" element={<SubmitPaperPage />} />
            <Route exact path="/createStudentPost" element={<StudentSubmitPaperPage />} />
            <Route exact path="/editPost" element={<EditPaperPage />} />
            <Route exact path="/editStudentPost" element={<StudentEditPaperPage />} />
            <Route exact path="/payment" element={<PaymentPage />} />
            <Route exact path="/userPaymentLogin" element={<UserPaymentLogin />} />
            <Route exact path="/studentPaymentLogin" element={<StudentPaymentLogin />} />
            <Route exact path="/studentPayment" element={<StudentPaymentPage />} />
            <Route exact path="/evaluate" element={<AdminLoginTab />} />
            <Route exact path="/discussion" element={<ReviewerChat />} />
            <Route exact path="/checkStatus" element={<CheckStatus />} />
            <Route exact path="/checkStudentStatus" element={<CheckStudentStatus />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Footer />} />
          {/* <Route path="/ProgramCommity" element={<Footer />} /> */}
          <Route path="/Accept" element={<Footer />} />
          <Route path="/Evaluation" element={<Footer />} />
          {/* <Route exact path="/UserLogin" element={<Footer />} /> */}
          {/* <Route path="/Login" element={<Footer/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

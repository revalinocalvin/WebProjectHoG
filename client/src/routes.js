import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import MainPage from './pages/Public/MainPage';
//import FAQPage from './pages/Public/FAQPage';
//import BookingTutorialPage from './pages/Public/BookingTutorialPage';
import LoginPage from './pages/Auth/LoginPage';
//import RegistrationPage from './pages/Auth/RegistrationPage';
import DashboardPage from './pages/User/DashboardPage';
//import PointsRedeemPage from './pages/User/PointsRedeemPage';
//import ProfilePage from './pages/User/ProfilePage';
//import EditProfilePage from './pages/User/EditProfilePage';
//import HistoryPage from './pages/User/HistoryPage';
//import AnnouncementPage from './pages/User/AnnouncementPage';

const AppRoutes = () => (
  
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={<DashboardPage/>} />
      
    </Routes>
  
);

export default AppRoutes;

//<Route path="/" element={<MainPage />} />
//<Route path="/faq" element={<FAQPage />} />
//<Route path="/booking-tutorial" element={<BookingTutorialPage />} />
//<Route path="/login" element={<LoginPage />} />
//<Route path="/register" element={<RegistrationPage />} />

//privatte
//<Route path="/points-redeem" element={<PointsRedeemPage />} />
//<Route path="/profile" element={<ProfilePage />} />
//<Route path="/edit-profile" element={<EditProfilePage />} />
//<Route path="/history" element={<HistoryPage />} />
//<Route path="/announcement" element={<AnnouncementPage />} />
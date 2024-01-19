// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LoginSignin from './components/LoginSignin/LoginSignin';
import LoginSignin from './components/LoginSignin/Login_Signin';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Pan from './pages/Pan';
import Insurance from './pages/Insurance';
import Issue from './pages/Issue';
import Notification from './pages/Notification';
import Setting from './pages/Setting';
import Signout from './pages/Signout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignin />} />
        <Route path="/sidebar" element={<Sidebar />}>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pan" element={<Pan />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/signout" element={<Signout />} />
        </Route>
        {/* <Route path="*" element={<Redirect to="/sidebar" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;







// import React from 'react';
// import './App.css';
// // import { Header } from 'antd/es/layout/layout.js';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginSignin from './components/LoginSignin/Login_Signin.js';
// import Sidebar from './components/Sidebar.jsx';

// import Sidebar from './components/Sidebar.jsx';
// import Profile from './pages/Profile.jsx';
// import Contact from './pages/Contact.jsx';
// import Pan from './pages/Pan.jsx';
// import Insurance from './pages/Insurance.jsx';
// import Issue from './pages/Issue.jsx';
// import Notification from './pages/Notification.jsx';
// import Setting from './pages/Setting.jsx';
// import Signout from './pages/Signout.jsx';


// const App = () => {
//   return (
//     <Router>
//     <Switch>
//       <Route path="/login" component={LoginForm} />
//       <PrivateRoute path="/sidebar" component={Sidebar} />
//       <Redirect from="/" to="/Sidebar" />
//     </Switch>
//   </Router>

//     <div className='App'>
//       {/* <div className='header'>
//         <Header/>
//       </div> */}
//       <BrowserRouter>
//         <Sidebar>
//           <Routes>
//             <Route path="/" element={<Profile />} />
//             <Route path="/Contact " element={<Contact />} />
//             <Route path="/Pan" element={<Pan />} />
//             <Route path="/Insurance" element={<Insurance />} />
//             <Route path="/Issue" element={<Issue />} />
//             <Route path="/Notification" element={<Notification />} />
//             <Route path="/Setting" element={<Setting />} />
//             <Route path="/Signout" element={<Signout />} />
//           </Routes>
//         </Sidebar>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;










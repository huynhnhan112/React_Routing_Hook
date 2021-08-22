
import './App.css';
// Cấu hình routing
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Header from './components/HomePage/Header/Header';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo.js'
import UseEffectDemo from './pages/Hooks/UseEffectDemo/UseEffectDemo'
import ReduxHookDemo from './pages/Hooks/ReduxHookDemo/ReduxHookDemo';
import AxiosDemo from './pages/AxiosDemo/AxiosDemo';
import AxiosDemoRFC from './pages/AxiosDemo/AxiosDemoRFC';
import APIMiddleWare from './pages/AxiosDemo/APIMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './pages/HOC/HOC';
import {HomeTemplate} from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import AntDemo from './pages/AntDemo/AntDemo';
import { AdminTemplate } from './templates/AdminTemplate';


function App() {
  return (

    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>

            <Header />
            Đây là trang chủ
          </div>
        }} /> */}

        <HomeTemplate path="/home" component={Home}  />
       
        <UserTemplate exact path="/login" component={Login} />
        <UserTemplate exact path="/register" component={Register} />
        <HomeTemplate exact path="/about" component={About} />
        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate exact path="/usehook" component={ReduxHookDemo} />
        <HomeTemplate exact path="/ajaxrcc" component={AxiosDemo} />
        <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate exact path="/detail/:id" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <HomeTemplate exact path="/hoc" component={HOC} />
        {/* <HomeTemplate exact path="/antd" component={AntDemo} /> */}
        <HomeTemplate exact path="/" component={APIMiddleWare} />
        {/* <HomeTemplate exact path="/" component={Home} /> */}

        <AdminTemplate path="/admin/antd" component={AntDemo} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;

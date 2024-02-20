import './App.css';

import Header from './main/Header';
// import Body from './main/Body';
import Footer from './main/Footer';
import { Outlet } from 'react-router-dom';
// import SimpleSlider from './component/slider';




function Project() {
    return (
      <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
  >
    <div className="spinner-grow text-primary" role="status" />
  </div> */}
  {/* Spinner End */}
  {/* ------------------------------------------------------------------------------*/}
  {/* Navbar start */}
    <Header/>
  {/* Navbar End */}
  {/* ------------------------------------------------------------------------------*/}
  {/* Carousel start */}
    {/* <SimpleSlider/> */}
  {/* Carousel end */}
  {/* ------------------------------------------------------------------------------*/}
  {/* Body start */}
    <Outlet/>
  {/* Body end */}
  {/* ------------------------------------------------------------------------------*/}
  {/* Footer Start */}
    <Footer/>
  {/* Footer end */}
  
</>

      
  
    );
  }
  
  export default Project;
  
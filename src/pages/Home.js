import Carousel from "./Carousel"
import Hello from "./Hello"
import About from "./About"
import Story from "./Story"
import Weeding from "./Weeding"
import WeedingTimeline from './WeedingTimeline';
import Gallery from "./Gallery"
import Bridesmaids from "./Bridesmaids"
import RSVP from "./RSVP"
export default function Home(){
    return(
        <>
        {/* -------------------------------------------------------------------------------*/}
  {/* Carousel Start */}
    <Carousel/>
  {/* Carousel End */}
  {/* ------------------------------------------------------------------------------*/}
  {/* Hello! Start */}
    <Hello/>
  {/* Hello! End */}
  {/* ------------------------------------------------------------------------------*/}
  {/* About Start */}
    <About/>
  {/* About End */}
  {/* -------------------------------------------------------------------------------*/}
  {/* Story Start */}
    <Story/>
  {/* Story End */}
  {/* -------------------------------------------------------------------------------*/}
  {/*- Wedding Date */}
    <Weeding/>
  {/* Wedding Date */}
  {/* -------------------------------------------------------------------------------*/}
  {/* Wedding Timeline start */}
    <WeedingTimeline/>
  {/* Wedding Timeline End */}
  {/* -------------------------------------------------------------------------------*/}
  {/* Gallery Start */}
    <Gallery/>
  {/* Gallery end */}
  {/* -------------------------------------------------------------------------------*/}
  {/*- Bridesmaids & Groomsmen start */}
    <Bridesmaids/>
  {/* Bridesmaids & Groomsmen End */}
  {/* -------------------------------------------------------------------------------*/}
  {/* RSVP Form Start */}
    <RSVP/>
  {/* RSVP Form End */}
  {/* -------------------------------------------------------------------------------*/}
        </>
    )
}
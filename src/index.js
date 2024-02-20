import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/Story';
import WeedingTimeline from './pages/WeedingTimeline';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import NoPage from './pages/NoPage';
import Admin from './admin/Admin ';
import GalleryList from './admin/database/gallery/GalleryList';
import GuestList from './admin/database/guest/GuestList';
import GalleryInsert from './admin/database/gallery/GalleryInsert';
import GuestInsert from './admin/database/guest/GuestInsert';
import GalleryUpdate from './admin/database/gallery/GalleryUpdate';
import GuestUpdate from './admin/database/guest/GuestUpdate';
import TimelineList from './admin/database/timeline/TimelineList';
import TimelineInsert from './admin/database/timeline/TimelineInsert';
import StoryList from './admin/database/story/StoryList';
import StoryInsert from './admin/database/story/StoryInsert';
import StoryUpdate from './admin/database/story/StoryUpdate';
import TimelineUpdate from './admin/database/timeline/timelineUpdate';
import Indexx from './admin/Indexx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Story" element={<Story />}></Route>
      <Route path="/Timeline" element={<WeedingTimeline />}></Route>
      <Route path="/Gallery" element={<Gallery />}></Route>
      <Route path="/RSVP" element={<RSVP />}></Route>
      <Route path="/Book Attendance" element={<RSVP />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/index" element={<Indexx />}></Route>
      <Route path="/admin/gallerylist" element={< GalleryList />}></Route>
      <Route path="/admin/guestlist" element={< GuestList />}></Route>
      <Route path="/admin/storylist" element={< StoryList />}></Route>
      <Route path="/admin/timelinelist" element={< TimelineList />}></Route>
      <Route path="/admin/gallerylist/add" element={<GalleryInsert/>}></Route>
      <Route path="/admin/guestlist/add" element={<GuestInsert/>}></Route>
      <Route path="/admin/storylist/add" element={<StoryInsert/>}></Route>
      <Route path="/admin/timeline/add" element={<TimelineInsert/>}></Route>
      <Route path="/admin/gallerylist/update/:id" element={<GalleryUpdate/>}></Route>
      <Route path="/admin/guestlist/update/:id" element={<GuestUpdate/>}></Route>
      <Route path="/admin/storylist/update/:id" element={<StoryUpdate/>}></Route>
      <Route path="/admin/timelinelist/update/:id" element={<TimelineUpdate/>}></Route>
    </Route>
    <Route path="*" element={<NoPage />}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Subscriptions from "./pages/Subscriptions";
import Channel from "./pages/Channel";
import History from "./pages/History";
import Home from "./pages/Home";
import Library from "./pages/Library";
import SearchResults from "./pages/SearchResults";
import TrendingPage from "./pages/Trending";
import WatchVideoPage from "./pages/WatchVideo";
import Container from "./styles/Container";
import YourVideos from "./pages/YourVideos";
import LikedVideos from "./pages/LikedVideos";
import NotFound from "./pages/NotFound";
import { useLocationChange } from "./hooks/use-location-change";

function App() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const toggleSideBarOpen = () => setIsSidebarOpen(!isSideBarOpen);
  useLocationChange(handleCloseSidebar);
  return (
    <>
      <Navbar toggleSideBarOpen={toggleSideBarOpen} />
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <MobileNavbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/watch/:videoId" component={WatchVideoPage} />
          <Route path="/channel/:channelId" component={Channel} />
          <Route path="/results/:searchQuery" component={SearchResults} />
          <Route path="/feed/trending" component={TrendingPage} />
          <Route path="/feed/subscriptions" component={Subscriptions} />
          <Route path="/feed/library" component={Library} />
          <Route path="/feed/history" component={History} />
          <Route path="/feed/my_videos" component={YourVideos} />
          <Route path="/feed/liked_videos" component={LikedVideos} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;

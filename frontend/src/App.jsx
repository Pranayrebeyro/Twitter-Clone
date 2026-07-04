import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import MyTweets from "./pages/MyTweets";
import TweetDetails from "./pages/TweetDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/following" element={<Following />} />
      <Route path="/mytweets" element={<MyTweets />} />
      <Route path="/tweet/:id" element={<TweetDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
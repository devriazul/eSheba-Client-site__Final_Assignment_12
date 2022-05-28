import React from "react";
import "react-multi-carousel/lib/styles.css";
import Counter from "./Home/Counter";
import ReviewSec from "./Home/ReviewSec";
import Top10 from "./Home/Top10";
import FeatureTools from "./Home/FeatureTools";
import BannerSec from "./Home/BannerSec";
import Teams from "./Home/Teams";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../components/Loading";
const Home = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <BannerSec />
      <FeatureTools />
      <Counter />
      <Top10 />
      <Teams/>
      <ReviewSec />
    </div>
  );
};

export default Home;

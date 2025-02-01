import { useState, useEffect } from "react";
import { ButtonSwitch } from "./Components/Switch/switch";
import { SocialMediaCard } from "./Components/CardsUp/CardsUp";
import { CardsDown } from "./Components/CardsDown/CardsDown";

// Icon Cards Up Social Network
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Instagram from "../assets/icon-instagram.svg";
import Youtube from "../assets/icon-youtube.svg";

//Icon Arrow
import ArrowDown from "../assets/icon-down.svg";
import ArrowUp from "../assets/icon-up.svg";

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <main className="w-full mx-auto bg-White_BG dark:bg-VeryDarkBlue_BG pb-24">
        {/* bg-VeryPaleBlue_Top_BG_Pattern */}
        <div className="w-full h-60 pb-5 bg- bg-VeryPaleBlue_Top_BG_Pattern rounded-b-4xl px-10 lg:px-20 py-10 mb-10 dark:bg-VeryDarkBlue_BG flex flex-col justify-between md:flex-row">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold dark:text-White_Text">Social Media Dashboard</h1>
            <h6 className="text-xs lg:text-xl text-DarkGrayishBlue_Text font-bold dark:text-DesaturatedBlue_Text"> Total Followers: 23,004</h6>
          </div>
          <div className="flex items-center justify-between py-4 mb-6 lg:gap-4">
            <p className="text-sm text-Toggle font-bold dark:text-DesaturatedBlue_Text">Dark Mode</p>
            {/* Button Switch */}
            <ButtonSwitch
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        </div>

        <section className="flex flex-col items-center justify-center px-10 lg:px-20 md:grid md:grid-cols-2 md:justify-items-center lg:flex lg:flex-row mx-auto gap-y-5 md:gap-y-4 lg:gap-10">
          <SocialMediaCard
            platformColor="border-Facebook"
            iconSocialNetworkTop={Facebook}
            username="@nathanf"
            followersTxt="1987"
            labelFollowers="Followers"
            iconTrend={ArrowUp}
            trendTxt="12 Today"
            trendColorTxt="text-LimeGreen"
          />

          <SocialMediaCard
            platformColor="border-Twitter"
            iconSocialNetworkTop={Twitter}
            username="@nathanf"
            followersTxt="1044"
            labelFollowers="Followers"
            iconTrend={ArrowUp}
            trendTxt="99 Today"
            trendColorTxt="text-LimeGreen"
          />

          <SocialMediaCard
            platformColor="border-instagram"
            iconSocialNetworkTop={Instagram}
            username="@nathanf"
            followersTxt="11k"
            labelFollowers="Followers"
            iconTrend={ArrowUp}
            trendTxt="1099 Today"
            trendColorTxt="text-LimeGreen"
          />

          <SocialMediaCard
            platformColor="border-YouTube"
            iconSocialNetworkTop={Youtube}
            username="Nathan F."
            followersTxt="8239"
            labelFollowers="Subscribers"
            iconTrend={ArrowDown}
            trendTxt="144 Today"
            trendColorTxt="text-BrightRed"
          />
        </section>

        <h1 className="mt-12 text-2xl font-bold text-DarkGrayishBlue_Text mb-7 dark:text-White_Text px-10 lg:px-20">Overview - Today</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-4 lg:gap-y-10 items-center justify-center justify-items-center px-10 lg:px-20">
          <CardsDown
            txtTopLeft="Page Views"
            iconSocial={Facebook}
            numberSocialMedia="87"
            iconArrow={ArrowUp}
            trendTxt="3%"
            colorTrend="LimeGreen"
          />

          <CardsDown
            txtTopLeft="Likes"
            iconSocial={Facebook}
            numberSocialMedia="52"
            iconArrow={ArrowDown}
            trendTxt="2%"
            colorTrend="BrightRed"
          />

          <CardsDown
            txtTopLeft="Likes"
            iconSocial={Instagram}
            numberSocialMedia="5462"
            iconArrow={ArrowUp}
            trendTxt="2257%"
            colorTrend="LimeGreen"
          />

          <CardsDown
            txtTopLeft="Profile Views"
            iconSocial={Instagram}
            numberSocialMedia="52k"
            iconArrow={ArrowUp}
            trendTxt="1375%"
            colorTrend="LimeGreen"
          />

          <CardsDown
            txtTopLeft="Retweets"
            iconSocial={Twitter}
            numberSocialMedia="117"
            iconArrow={ArrowUp}
            trendTxt="303%"
            colorTrend="LimeGreen"
          />

          <CardsDown
            txtTopLeft="Likes"
            iconSocial={Twitter}
            numberSocialMedia="507"
            iconArrow={ArrowUp}
            trendTxt="553%"
            colorTrend="LimeGreen"
          />

          <CardsDown
            txtTopLeft="Likes"
            iconSocial={Youtube}
            numberSocialMedia="107"
            iconArrow={ArrowDown}
            trendTxt="19%"
            colorTrend="BrightRed"
          />

          <CardsDown
            txtTopLeft="Total Views"
            iconSocial={Youtube}
            numberSocialMedia="1407"
            iconArrow={ArrowDown}
            trendTxt="12%"
            colorTrend="BrightRed"
          />
        </div>
      </main>
    </>
  );
}

export default App;

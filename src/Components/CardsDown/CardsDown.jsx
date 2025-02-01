import React from "react";
const CardsDown = ({
  txtTopLeft,
  iconSocial,
  numberSocialMedia,
  iconArrow,
  trendTxt,
  colorTrend
}) => {
  return (
    <article className="bg-LightGrayishBlue_Card_BG hover:bg-CardBG_hover_light dark:bg-DarkDesaturatedBlue_Card_BG dark:hover:bg-CardBG_hover_dark py-7 px-8 rounded-lg flex flex-col gap-8 text-VeryDarkBlue_Text md:w-[255px] md:max-w-[255px] w-full hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="font-bold dark:text-White_Text text-xs">{txtTopLeft}</span>
        {/* <img src={`/assets/icon-${namePlatformIcon.toLowerCase()}.svg`} alt={`Icon ${namePlatformIcon}`} /> */}
        <img src={`${iconSocial}`} alt={`${iconSocial}`} />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-4xl dark:text-White_Text">{numberSocialMedia}</span>
        <div className="flex items-center gap-1">
          {/* <img src={`assets/icon-${iconArrow.toLowerCase()}.svg`} alt="Icon Arrow Up" /> */}
          <img src={`${iconArrow}`} alt={`${iconArrow}`} />
          <span className={`font-bold text-${colorTrend} text-md`}>{trendTxt}</span>
        </div>
      </div>
    </article>
  );
};

export { CardsDown };

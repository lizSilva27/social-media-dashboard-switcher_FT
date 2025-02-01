import React from 'react'

const SocialMediaCard = ({
  platformColor,
  iconSocialNetworkTop,
  username,
  followersTxt,
  labelFollowers,
  iconTrend,
  trendTxt,
  trendColorTxt
}) => {
  return (
    <article className={`w-full max-h-[220px] md:max-w-[255px] flex flex-col items-center justify-center gap-4 py-4 bg-LightGrayishBlue_Card_BG hover:bg-CardBG_hover_light dark:bg-DarkDesaturatedBlue_Card_BG dark:hover:bg-CardBG_hover_dark rounded-md border-t-4 border-solid hover:cursor-pointer ${platformColor}`}>

      <div className='flex items-center justify-center gap-2'>
        {/* <img className='w-5' src={`assets/icon-${namePlatformIcon.toLowerCase()}.svg`} alt={`Icon &${namePlatformIcon}`} /> */}
        <img className='w-5' src={`${iconSocialNetworkTop}`} alt={`${iconSocialNetworkTop}`} />
        <span className='text-sm font-bold text-DarkGrayishBlue_Text lowercase'>{username}</span>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-VeryDarkBlue_Text dark:text-White_Text dark-text-White_Text'>{followersTxt}</h1>
        <p className='text-DarkGrayishBlue_Text tracking-[4px] text-xs uppercase'>{labelFollowers}</p>
      </div>

      <div className={`flex items-center justify-center gap-2 px-3 py-1 rounded-full text-xs ${trendColorTxt} font-bold capitalize`}>
        {/* <img src={`assets/icon-${iconTrend.toLowerCase()}.svg`} alt={`Icon Arrow ${iconTrend}`} /> */}
        <img src={`${iconTrend}`} alt={`${iconTrend}`} />
       {trendTxt} 
      </div>

    </article>
  )
}

export { SocialMediaCard }
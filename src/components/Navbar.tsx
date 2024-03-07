import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Navbar() {
  const sliderRef = useRef<Slider>(null);

  const onHoverStyle = 'hover:text-blue-500 hover:underline';

  const sliderSettings: SliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 0) {
      sliderRef.current?.slickNext();
    } else {
      sliderRef.current?.slickPrev();
    }
  };

  return (
    <div className="mx-4" onWheel={handleWheel}>
      <Slider {...sliderSettings} ref={sliderRef}>
        <AnchorLink href="#performance">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Overview</div>
        </AnchorLink>
        <AnchorLink href="#fundamentals">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Fundamentals</div>
        </AnchorLink>
        <AnchorLink href='#newinsights'>
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>New insights</div>
        </AnchorLink>
        <AnchorLink href="#sentiments">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Sentiments</div>
        </AnchorLink>
        <AnchorLink href="#team">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Team</div>
        </AnchorLink>
        <AnchorLink href="#technicals">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Technicals</div>
        </AnchorLink>
        <AnchorLink href="#tokeconomics">
          <div className={`text-slate-600 text-sm font-semibold ${onHoverStyle}`}>Tokeconomics</div>
        </AnchorLink>
      </Slider>
      <hr className="bg-slate-500"></hr>
    </div>
  );
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }>;
}

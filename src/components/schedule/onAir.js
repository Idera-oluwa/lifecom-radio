"use client";
import React, { useEffect, useState, useRef } from "react";
import ReactHowler from "react-howler";
import BarVisualizer from "./barVisualizer";
import Link from "next/link";

const onAir = () => {
  const [playing, setPlaying] = useState(false);
  const [radioInfo, setRadioInfo] = useState({});
  const canvasRef = useRef(null);
  const url = "https://fastcast4u.com/player/lifecomradio/";
  const togglePlay = () => {
    setPlaying(!playing);
  };
  const handleOnPlay = () => {
    setPlaying(true);
  };
  async function RadioData() {
    const response = await fetch(
      "https://lifecom-proxyserver.onrender.com/api"
    );
    const data = await response.json();
    setRadioInfo(data);
  }

  useEffect(() => {
    RadioData();
  }, [radioInfo]);
  

  return (
    <div
      className={`${
        playing ? "bg-onAir-bg2" : "bg-onAir-bg"
      } bg-cover bg-no-repeat w-[100%] h-[350px] md:h-[552px] relative transition-all ease-out duration-500 flex flex-col justify-center items-center pt-[2rem]`}>
      <ReactHowler
        src="https://eu9.fastcast4u.com/proxy/lifecomradio/stream"
        html5={true}
        playing={playing}
        onPlay={handleOnPlay}
      />
      {playing && <div className="absolute top-0 mt-[119px] md:mt-[210px] right-0 mr-[calc(50%-9rem)] md:mr-[calc(50%-16rem)] transform -translate-y-1/2">
            <BarVisualizer />
          </div> }
      <div className="w-[178px] h-[181px] md:w-[246px] md:h-[250px] mx-auto bg-gradient-to-b from-[#004461] to-[#86890200] flex justify-center items-center rounded-[4px]">
      <Link href='/'><div className="hidden md:flex absolute top-0 left-0 mt-[2rem] md:mt-[4rem] ml-[5%] w-[100px] md:w-[146px] h-[29px] md:h-[39px] bg-[#324A5F] rounded-[4px] justify-center items-center text-white text-[10px] md:text-[14px] font-medium cursor-pointer">Back to Home</div></Link>
      <Link href='/'><div className="absolute top-0 left-0 mt-[1rem] md:mt-[4rem] ml-[5%] w-[60px] md:w-[146px] h-[29px] md:h-[39px] bg-[#324A5F] rounded-[4px] md:hidden flex justify-center items-center text-white text-[10px] md:text-[14px] font-medium cursor-pointer">Home</div></Link>
      <img
        src={
          radioInfo?.image
            ? radioInfo?.image.startsWith("tmp")
              ? `${url}${radioInfo?.image}`
              : radioInfo?.image
            : null
        }
        alt=""
        className="w-[167px] h-[170px] md:w-[235px] md:h-[239px]"
      />
      </div>
      <p className="text-[10px] text-[#CCC9DC] font-medium text-center mx-auto mt-[0.9rem]">Now Playing</p>
      <p className="font-semibold text-white text-[14px] lg:text-[16px] leading-3 lg:leading-[19px] mt-[0.5rem]">
            {radioInfo?.album ? radioInfo.album : "Nil"}
          </p>
          <div
          className="bg-transparent border-[#324A5F] border-[3px] w-[32px] h-[32px] lg:w-[55px] lg:h-[55px] rounded-full flex items-center justify-center cursor-pointer mt-[1.1rem]"
          onClick={() => togglePlay()}>
          <img
            src={
              playing ? "/images/podcasts/pause.png" : "/images/home/play.svg"
            }
            alt=""
            className={`${
              playing
                ? "w-[10px] h-[12.5px] lg:w-[22px] lg:h-[22px]"
                : "w-[10px] h-[12.5px] lg:w-[17.69px] lgh-[21.79px]"
            }`}
          />
        </div>
      {/* <img
        src={`${
          playing ? "/images/schedule/onair2.png" : "/images/schedule/onair.png"
        }`}
        alt=""
        className="absolute w-[110px] h-[113px] lg:w-auto lg:h-auto right-0 bottom-0  mb-[2rem] mr-[10%] md:mr-[6rem]"
      /> */}

      {/* <div className="flex flex-row absolute left-0 bottom-0 mb-[4rem] ml-[10%] md:ml-[20%] gap-4 md:gap-[3rem] items-center">
        <div
          className="bg-transparent border-[#324A5F] border-4 w-[32px] h-[32px] lg:w-[55px] lg:h-[55px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => togglePlay()}>
          <img
            src={
              playing ? "/images/podcasts/pause.png" : "/images/home/play.svg"
            }
            alt=""
            className={`${
              playing
                ? "w-[10px] h-[12.5px] lg:w-[22px] lg:h-[22px]"
                : "w-[10px] h-[12.5px] lg:w-[17.69px] lgh-[21.79px]"
            }`}
          />
        </div>
        <div className="">
          <p className="font-medium text-[10px] leading-3 md:text-[14px] text-[#CCC9DC] lg:leading-[17px]">
            ON AIR NOW
          </p>
          <p className="font-semibold text-white text-[12px] lg:text-[16px] leading-3 lg:leading-[19px] mt-[0.5rem]">
            {radioInfo?.album ? radioInfo.album : "Nil"}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default onAir;

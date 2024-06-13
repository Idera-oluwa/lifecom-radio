"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGlobalContext, AppContext } from "@/context/context";

const news = () => {
  const { blogs,getGlobal,getNational,filteredBlogs,getAllBlogs,global,national } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); 
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) { 
      setItemsPerPage(4);
    // } else if (screenWidth >= 1024) { 
    //   setItemsPerPage(7);
    } else { 
      setItemsPerPage(3);
  };
  } 

console.log(filteredBlogs)

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-[90vw] mx-auto mt-[6rem] md:mt-[9rem]">
      <div className="flex flex-row gap-[2rem]">
        <p className="font-semibold text-white text-[14px] md:text-[24px] leading-[24px] mb-[-2rem] md:mb-0 cursor-pointer" onClick={getAllBlogs}>
        News
      </p>
        <div className='flex flex-col'>
        <p className={`${national? 'text-[#145C9B]' : 'text-[#CCC9DC]'} hover:text-[#145C9B] text-[12px] md:text-[16px] leading-[24px] font-medium cursor-pointer transition-all ease-out duration-500`} onClick={getNational}>NATIONAL</p>
        <div className={`${national? 'w-[41px]' :'w-0'} h-[2px] bg-[#145C9B] mx-auto transition-all ease-out duration-500`}></div>
        </div>
        <div className='flex flex-col'>
      <p className={`${global? 'text-[#145C9B]' : 'text-[#CCC9DC]'} hover:text-[#145C9B] text-[12px] md:text-[16px] leading-[24px] font-medium cursor-pointer transition-all ease-out duration-500`} onClick={getGlobal}>GLOBAL</p>
      <div className={`${global? 'w-[41px]' :'w-0'} h-[2px] bg-[#145C9B] mx-auto transition-all ease-out duration-500`}></div>
        </div>
      </div>
      <div className="mt-[1rem] md:mt-[4rem] lg:flex grid grid-cols-2 md:grid-cols-3  lg:flex-col  gap-[0.7rem] sm:gap-5 md:gap-6 lg:gap-[4rem] w-full">
        {currentItems.map((news) => {
          const { slug, title, id, coverImage,category } = news;
          return (
            <div
              className="flex flex-col lg:flex-row gap-[10px] md:gap-[16px]  lg:gap-[4rem] items-center mt-[2rem] md:mt-0"
              key={id}
            >
              <img src={coverImage.url} className="w-full lg:w-auto" alt="" />
              <div className="flex flex-col justify-center items-center lg:items-start gap-[10px] md:gap-[16px] lg:gap-[1.5rem]">
                <p className="hidden md:block font-normal text-[12px] text-white leading-[14.5px]">
                  {category} NEWS
                </p>
                <p className="font-medium text-[10px] text-center lg:text-left leading-3 lg:text-[24px] lg:leading-[29px] text-[#F5F5F5] lg:w-[509px] w-[90%]">
                  {title.substring(0, 60) + "..."}
                </p>
                <Link href={`/explore/news/${slug}`} prefetch={false}>
                  <p className=" font-medium text-[10px] leading-3 lg:font-semibold text-[#114A7D] lg:text-[14px] lg:leading-[17px] cursor-pointer">
                    Read more
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:hidden flex flex-row gap-[0.5rem] mx-auto justify-center">
      <div
          className={` w-[19px] h-[19px]  rounded-[50%] flex flex-row justify-center items-center mt-[1rem] gap-[0.5rem] cursor-pointer ${
            currentPage === 1 ? " bg-[#3c3e42]" : " bg-[#1B2A41]"
          }`}
          onClick={prevPage}
        >
          <img src="/images/explore/arrow-left.svg" alt="" />{" "}
        </div>
        <div
          className={` h-[19px]  w-[19px] rounded-[50%] flex flex-row justify-center items-center mt-[1rem] bg-[#1B2A41] gap-[0.5rem] cursor-pointer ${
            currentPage === totalPages ? "bg-[#3c3e42]": "bg-[#1B2A41]"
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <img src="/images/explore/arrow-right.svg" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default news;

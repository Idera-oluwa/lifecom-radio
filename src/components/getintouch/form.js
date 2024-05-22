import React from 'react';
import Forminput from './forminput';
import initTranslations from "@/i18n";


const form = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["contact"]);

  return (
    <div className="mt-[4rem] lg:mt-[13rem] w-[90%] mx-auto flex flex-col gap-8 md:flex-row justify-between items-center">
      <div className="w-full lg:w-[50%]">
        <p className="text-[14px] lg:text-[32px] font-medium text-white px-4 max-w-full w-[360px] leading-[24px] lg:leading-[38.7px] lg:text-left text-center">
          {t("We Value Your")}{" "}
          <span className="font-normal text-[#1562A6]">{t("Feedback")}</span>
        </p>
        <p className="font-normal text-[10px] lg:text-[14px] text-[#CCC9DC] lg:leading-[17px] leading-[12px] text-center lg:text-left max-w-full px-4 lg:w-[416px] mt-2 lg:mt-[1rem]">
          {t(
            "Have a specific question or message for us? Fill out the form below, and a member of our team will get back to you as soon as possible"
          )}
        </p>
      </div>
      <Forminput/>
    </div>
  );
};

export default form;
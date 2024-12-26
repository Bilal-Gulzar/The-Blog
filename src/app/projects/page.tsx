import React from "react";
import Image from "next/image";
import ArrowSvg from "@/components/svg/arrowSvg";
import Link from "next/link";

function Projects() {
  return (
    <div className="lg:px-14 max-w-[1200px] mx-auto sm:px-7 px-5 flex flex-col gap-6 pb-14 ">
      <div className="border-y-2 mt-8 border-gray-300 ">
        <h1 className="lg:block hidden lg:leading-tight dark:text-white text-[15rem]  font-semibold text-center">
          PROJECTS
        </h1>
        <Link href="blogDetail/1">
          <div className="sm:py-10 py-6 px-2 lg:hidden">
            <Image
              src="/project-light.png"
              width={1600}
              height={1600}
              alt="the blog"
              className="dark:hidden"
            />
            <Image
              src="/Project.png"
              width={1600}
              height={1600}
              alt="the blog"
              className="dark:block hidden"
            />
          </div>
        </Link>
      </div>
      <h3 className="customh">List Project</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
        <div className="gap-6 flex flex-col">
          <Link href="blogDetail/1">
            <div>
              <Image
                src="/projects/Img1.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-[330px]"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <h3 className="customh3 flex justify-between items-center gap-4">
              UX review presentations
              <span>
                <ArrowSvg />
              </span>
            </h3>
            <p className="customP pe-5">
              n the context of user experience (UX) design, a hotel management
              dashboard should be designed with the needs and goals of the hotel
              staff in mind. This means creating a clear and intuitive interface
              that allows staff to easily access and use the various tools and
              features of the dashboard.
            </p>
            <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
              <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                Design
              </div>
              <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                Research
              </div>
              <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Presentation
              </div>
            </div>
          </div>
        </div>
        <div className="gap-6 flex flex-col">
          <Link href="blogDetail/1">
            <div>
              <Image
                src="/projects/Img2.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-[330px]"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <h3 className="customh3 flex justify-between items-center gap-4">
              Bring of User Experience Design to Policy Making, How to Impact
              Society
              <span>
                <ArrowSvg />
              </span>
            </h3>
            <p className="customP pe-5 ">
              User experience (UX) design is a discipline that focuses on
              creating products and services that are easy to use, efficient,
              and enjoyable for users. In the context of policy making, UX
              design can be used to create policies that are effect
            </p>
            <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
              <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                Research
              </div>
              <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-6 flex flex-col">
        <Link href="blogDetail/1">
          <div>
            <Image
              src="/projects/Img3.png"
              width={1280}
              height={1280}
              alt="blogImg"
              className="h-[250px] sm:h-[556px]"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-5">
          <h3 className="customh3 flex justify-between items-center gap-4">
            UX review presentatiBringing Design Process to Teams, How to Solve
            User Problems with Data & Inclusive Collaboration Designons
            <span>
              <ArrowSvg />
            </span>
          </h3>
          <p className="customP pe-5 ">
            There are many different design processes that can be followed when
            creating a hotel management dashboard. Here are some tips for
            bringing a design process to teams and using data and inclusive
            collaboration to solve user problems
          </p>
          <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
            <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
              Design
            </div>
            <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
              Research
            </div>
            <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
              Presentation
            </div>
            <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
              Collaboration
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 mt-8">
        <div className="gap-6 flex flex-col">
          <Link href="blogDetail/1">
            <div>
              <Image
                src="/projects/Img4.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-[330px]"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <h3 className="customh3 flex justify-between items-center gap-4">
              Icon Package of Slin Icon
              <span>
                <ArrowSvg />
              </span>
            </h3>
            <p className="customP pe-5 sm:line-clamp-2 ">
              An icon package is a collection of icons that can be used in
              various design projects, such as website design, app development,
              and graphic design.
            </p>
            <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
              <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                Design
              </div>
              <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                Branding
              </div>
              <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Identity
              </div>
            </div>
          </div>
        </div>
        <div className="gap-6 flex flex-col">
          <Link href="blogDetail/1">
            <div>
              <Image
                src="/projects/Img2.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-[330px]"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <h3 className="customh3 flex justify-between items-center gap-4">
              UX review presentations
              <span>
                <ArrowSvg />
              </span>
            </h3>
            <p className="customP pe-5 sm:line-clamp-2 ">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
              <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                Design
              </div>
              <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                Research
              </div>
              <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

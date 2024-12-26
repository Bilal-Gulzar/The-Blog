import React from "react";
import Image from "next/image";
import ArrowSvg from "../svg/arrowSvg";
import Link from "next/link";

function HomeSection() {
  const date = new Date();
  const getDate = {
    day: date.getDate(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: date.getFullYear(),
  };
  return (
    <div className="mt-5 pb-20">
      <section>
        <h2 className="customh">All blog posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8  mt-12 ">
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img1.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Alec Whitten • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex justify-between items-center gap-4">
                Bill Walsh leadership lessons{" "}
                <span>
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </p>
              <div className="flex items-center customxs  gap-3  ">
                <div className=" text-[#6941C6] px-3  shrink-0 py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Leadership
                </div>
                <div className=" text-[#363F72] shrink-0 px-3 font-medium  py-1 rounded-[16px] bg-[#F8F9FC]">
                  Management
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img2.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Demi WIlkinson • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex justify-between items-center gap-4">
                PM mental models{" "}
                <span>
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                Mental models are simple expressions of complex processes or
                relationships.
              </p>
              <div className="flex items-center customxs  gap-3 overflow-x-auto hide-scrollbar w-full ">
                <div className=" text-[#026AA2] px-3  shrink-0 py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Product
                </div>
                <div className=" text-[#3538CD] px-3 shrink-0 font-medium  py-1 rounded-[16px] bg-[#EEF4FF]">
                  Research
                </div>
                <div className=" text-[#C4320A] px-3 shrink-0 font-medium  py-1 rounded-[16px] bg-[#FFF6ED]">
                  Frameworks
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img3.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Candice Wu • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex justify-between items-center gap-4">
                What is Wireframing?{" "}
                <span>
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                Introduction to Wireframing and its Principles. Learn from the
                best in the industry.
              </p>
              <div className="flex items-center customxs  gap-3 overflow-x-auto hide-scrollbar w-full ">
                <div className=" text-[#6941C6] shrink-0 px-3  py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Design
                </div>
                <div className=" text-[#3538CD] shrink-0 px-3 font-medium  py-1 rounded-[16px] bg-[#EEF4FF]">
                  Management
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img4.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Natali Craig • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex justify-between items-center gap-4">
                How collaboration makes us better designers{" "}
                <span>
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                Collaboration can make our teams stronger, and our individual
                designs better.
              </p>
              <div className="flex items-center customxs  gap-3 overflow-x-auto hide-scrollbar w-full ">
                <div className="shrink-0 text-[#6941C6] px-3  py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Design
                </div>
                <div className="shrink-0 text-[#3538CD] px-3 font-medium  py-1 rounded-[16px] bg-[#EEF4FF]">
                  Management
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img5.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Drew Cano • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex lg:w-[344px] justify-between items-center gap-4">
                Our top 10 Javascript frameworks to use{" "}
                <span className="lg:-mt-5">
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                JavaScript frameworks make development easy with extensive
                features and functionalities.
              </p>
              <div className="flex overflow-x-auto hide-scrollbar w-full items-center customxs  gap-3">
                <div className=" text-[#027A48]  shrink-0 px-3  py-1 font-medium rounded-[16px]  bg-[#ECFDF3]">
                  Software Development
                </div>
                <div className=" text-[#C11574] px-3 shrink-0 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                  Tools
                </div>
                <div className=" text-[#C01048] px-3 shrink-0 font-medium  py-1 rounded-[16px] bg-[#FFF1F3]">
                  SaaS
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col">
            <Link href="blogDetail/1">
              <div>
                <Image
                  src="/homeSection/img6.png"
                  width={580}
                  height={580}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Orlando Diggs • {getDate.day} {getDate.month} {getDate.year}{" "}
              </div>
              <h3 className="customh3 flex justify-between items-center gap-4">
                Podcast: Creating a better CX Community{" "}
                <span>
                  <ArrowSvg />
                </span>
              </h3>
              <p className="customP pe-5 lg:w-[384px]">
                Starting a community doesn’t need to be complicated, but how do
                you get started?
              </p>
              <div className="flex items-center customxs  gap-3 overflow-x-auto hide-scrollbar w-full ">
                <div className=" text-[#6941C6] px-3  shrink-0 py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Podcasts
                </div>
                <div className=" text-[#363F72] px-3 shrink-0 font-medium  py-1 rounded-[16px] bg-[#F8F9FC]">
                  Customer Success
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;

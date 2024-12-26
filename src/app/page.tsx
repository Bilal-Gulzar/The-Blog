import HomeSection from "@/components/homeSection/homeSection";
import Pagination from "@/components/pagination/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = new Date()
  const getDate = {
    day: date.getDate(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: date.getFullYear(),
  };
  return (
    <div className=" lg:px-10 sm:px-7 px-5 mt-12">
      <section>
        <h3 className="customh">Recent blog posts</h3>
        <div className="grid pb-20 grid-cols-1  lg:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="flex flex-col gap-5">
              <Link href="blogDetail/1">
                <div className="shrink-0">
                  <Image
                    src="/homeImg/Img1.png"
                    alt="blogImg"
                    width={1092}
                    height={1092}
                    className="sm:block hidden"
                  />
                  <Image
                    src="/homeImg/Img1.png"
                    alt="blogImg"
                    width={1092}
                    height={1092}
                    className="sm:hidden w-full h-[250px] "
                  />
                </div>
              </Link>
              <div className="text-custom-xs text-[#6941C6] font-medium">
                Olive Rhye • {getDate.day} {getDate.month} {getDate.year}
              </div>
              <div className="customh">UX review presentations</div>
              <p className="customP">
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
          <div className="flex flex-col gap-6">
            <div className="flex sm:flex-row flex-col gap-6">
              <Link href="blogDetail/1">
              <div className="shrink-0">
                <Image
                  src="/homeImg/Img2.png"
                  alt="blogImg"
                  width={320}
                  height={320}
                  className="sm:block hidden"
                />
                <Image
                  src="/homeImg/Img2.png"
                  alt="blogImg"
                  width={320}
                  height={320}
                  className="sm:hidden w-full h-[250px]"
                />
              </div>
              </Link>
              <div className="flex flex-col gap-5 sm:gap-3">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  Phoenix Baker • {getDate.day} {getDate.month} {getDate.year}{" "}
                </div>
                <h3 className="customh3">Migrating to Linear 101</h3>
                <p className="customP lg:w-[248px]">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
                <div className="flex items-center customxs  gap-3">
                  <div className=" text-[#026AA2] px-3  py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                    Design
                  </div>
                  <div className=" text-[#C11574] px-3 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                    Research
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6  sm:flex-row flex-col">
              <Link href="blogDetail/1">
              <div className="shrink-0">
                <Image
                  src="/homeImg/Img3.png"
                  alt="blogImg"
                  width={320}
                  height={320}
                  className="sm:block hidden"
                />
                <Image
                  src="/homeImg/Img3.png"
                  alt="blogImg"
                  width={320}
                  height={320}
                  className="sm:hidden w-full h-[250px]"
                />
              </div>
              </Link>
              <div className="flex flex-col gap-5 sm:gap-3 ">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  Lana Steiner • {getDate.day} {getDate.month} {getDate.year}{" "}
                </div>
                <h3 className="customh3">Building your API Stack</h3>
                <p className="customP lg:w-[248px]">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
                <div className="flex items-center customxs  gap-3">
                  <div className=" text-[#027A48] px-3  py-1 font-medium rounded-[16px]  bg-[#ECFDF3]">
                    Design
                  </div>
                  <div className=" text-[#C11574] px-3 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                    Research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
           <Link href="blogDetail/1">
          <div className="shrink-0">
            <Image
              src="/homeImg/Img5.png"
              alt="blogImg"
              width={1092}
              height={1092}
              className="sm:block hidden"
            />
            <Image
              src="/homeImg/Img5.png"
              alt="blogImg"
              width={592}
              height={592}
              className="sm:hidden w-full h-[250px]"
            />
          </div>
          </Link>
          <div className="flex flex-col gap-5 sm:gap-3">
            <div className="text-custom-xs text-[#6941C6] font-medium">
              Olive Rhye • {getDate.day} {getDate.month} {getDate.year}
            </div>
            <h3 className="customh">
              Grid system for better Design User Interface
            </h3>
            <p className="customP  lg:w-[592px]">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements. Grid systems are used to create a
              consistent look and feel across a website, and can help to make
              the layout more visually appealing and easier to navigate.
            </p>
            <div className="flex items-center customxs  gap-3">
              <div className=" text-[#6941C6] px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                Design
              </div>

              <div className=" text-[#C11574] px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Interface
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSection />
      <Pagination />
    </div>
  );
}

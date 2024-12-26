import React from 'react'
import ArrowSvg from '@/components/svg/arrowSvg';
import Image from 'next/image';
import SubSection from '@/components/subSection/subSection';

export default function BlogDetail() {
    const year = new Date().getFullYear();
    const date = new Date();
    const getDate = {
      day: date.getDate(),
      month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
      year: date.getFullYear(),
      dayName : date.toLocaleString("en-US", { weekday: "long" })
    };
  return (
    <div className="lg:px-14 sm:px-7  h-screen mt-10  max-w-[1200px] mx-auto px-5">
      <div className="grid h-[40px] gap-6 pb-20 grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 md:order-1 order-2">
          <div className="grid grid-cols-1 gap-8 ">
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeImg/Img1.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  Olive Rhye • {getDate.day} {getDate.month} {getDate.year}
                </div>
                <h3 className="customh3 flex justify-between items-center gap-4">
                  UX review presentations
                  <span>
                    <ArrowSvg />
                  </span>
                </h3>
                <p className="customP pe-5 lg:w-[384px]">
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
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeImg/Img2.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-custom-xs font-medium text-[#6941C6]">
                  Phoenix Baker • {getDate.day} {getDate.month} {getDate.year}
                </div>
                <h3 className="customh3 flex justify-between items-center gap-4">
                  Migrating to Linear 101
                  <span>
                    <ArrowSvg />
                  </span>
                </h3>
                <p className="customP pe-5 lg:w-[384px]">
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
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeImg/Img3.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  Lana Steiner • {getDate.day} {getDate.month} {getDate.year}
                </div>
                <h3 className="customh3 flex justify-between items-center gap-4">
                  Migrating to Linear 101
                  <span>
                    <ArrowSvg />
                  </span>
                </h3>
                <p className="customP pe-5 lg:w-[384px]">
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
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeSection/img6.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img1.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img2.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img3.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img4.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img5.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
                  Starting a community doesn’t need to be complicated, but how
                  do you get started?
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
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeImg/Img3.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  Lana Steiner • {getDate.day} {getDate.month} {getDate.year}
                </div>
                <h3 className="customh3 flex justify-between items-center gap-4">
                  Migrating to Linear 101
                  <span>
                    <ArrowSvg />
                  </span>
                </h3>
                <p className="customP pe-5 lg:w-[384px]">
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
            <div className="gap-6 flex flex-col">
              <div>
                <Image
                  src="/homeSection/img6.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px] lg:h-auto"
                />
              </div>
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
              <div>
                <Image
                  src="/homeSection/img1.png"
                  width={780}
                  height={780}
                  alt="blogImg"
                  className="h-[250px]"
                />
              </div>
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
                <div className="sm:hidden">
                  <SubSection />
                </div>
                 <section className="flex sm:hidden gap-5 text-[20px] dark:text-gray-100 sm:flex-row flex-col items-center text-[#1A1A1A] pb-8 sm:px-7 px-5 lg:px-10 sm:order-1 order-2 ">
                <div className="sm:block hidden ">©{year}</div>
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>Email</div>
                <div>RSS feed</div>
                <div>Add to Feedly</div>
                <div className="sm:hidden">©{year}</div>
              </section>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 md:order-2 order-1 ">
          <div className="flex flex-col gap-4">
            <div className="text-custom-xs text-[#6941C6] font-medium">
              {getDate.dayName} {getDate.day} {getDate.month} {getDate.year}
            </div>
            <div className="customh">
              Grid system for better Design User Interface
            </div>
            <div>
              <Image
                src="/homeImg/img5.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>
            <div className="customP pb-5">
              <p>
                A grid system is a design tool used to arrange content on a
                webpage. It is a series of vertical and horizontal lines that
                create a matrix of intersecting points, which can be used to
                align and organize page elements. Grid systems are used to
                create a consistent look and feel across a website, and can help
                to make the layout more visually appealing and easier to
                navigate.
                <br />
                <br />
                If you’ve been to New York City and have walked the streets, it
                is easy to figure out how to get from one place to another
                because of the grid system that the city is built on. Just as
                the predictability of a city grid helps locals and tourists get
                around easily, so do webpage grids provide a structure that
                guides users and designers alike. Because of their consistent
                reference point, grids improve page readability and scannability
                and allow people to quickly get where they need to go.
                <br />
                <br />
              </p>
              <p className=" mx-auto text-center max-w-[500px]">
                Definition: A grid is made up of columns, gutters, and margins
                that provide a structure for the layout of elements on a page.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img10.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP ">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Definition: A grid is made up of columns, gutters, and margins
                that provide a structure for the layout of elements on a page.
              </p>
              <p>
                There are three common grid types used in websites and
                interfaces: column grid, modular grid, and hierarchical grid.
                <br />
                <br />
                Column grid involves dividing a page into vertical columns. UI
                elements and content are then aligned to these columns.
                <br />
                <br />
                Modular grid extends the column grid further by adding rows to
                it. This intersection of columns and rows make up modules to
                which elements and content are aligned. Modular grids are great
                for ecommerce and listing pages, as rows are repeatable to
                accommodate browsing.
                <br />
                <br />
                Hierarchical grid: Content is organized by importance using
                columns, rows, and modules. The most important elements and
                pieces of content take up the biggest pieces of the grid.
                <br />
                <br />
              </p>
              <h5 className="customh3">
                Breaking Down the Grid
                <br />
              </h5>
              <p>
                Regardless of the type of grid you are using, the grid is made
                up of three elements: columns, gutters, and margins.
                <br />
                <br />
              </p>
              <p>
                <span className="customh3">Columns:</span> Columns take up most
                of the real estate in a grid. Elements and content are placed in
                columns. To adapt to any screen size, column widths are
                generally defined with percentages rather than fixed values and
                the number of columns will vary. For example, a grid on a mobile
                device might have 4 columns and a grid on a desktop might have
                12 columns.
                <br />
                <br />
              </p>
              <p>
                <span className="customh3">Gutters:</span> The gutter is the
                space between columns that separates elements and content from
                different columns. Gutter widths are fixed values but can change
                based on different breakpoints. For example, wider gutters are
                appropriate for larger screens, whereas smaller gutters are
                appropriate for smaller screens like mobile.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img1.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4 ">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Three elements make up any grid: (1) columns, (2) gutters, and
                (3) margins.
              </p>

              <div className="customh3 mb-2">Examples of Grids in Use</div>
              <div className="customh3 mb-4">Example 1: Hierarchical Grid</div>
              <p>
                Our first example is from The New York Times. This screen
                utilizes a hierarchical grid to create a newspaper-like reading
                experience. At desktop screen size, two main columns make up the
                hierarchical grid. The most important news story takes up the
                most space in the grid, the left column, followed by secondary
                and tertiary stories, which take up the smaller column and
                modules on the right.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img2.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                The New York Times uses a hierarchical grid to achieve its
                newspaper-like reading experience. (We highlighted the columns
                in yellow, the gutters in blue, and the margins in purple.)
              </p>

              <div className="customh3 mb-4">Example 2: Column Grid</div>
              <p>
                Our second example is from Ritual.com, a vitamin company. This
                design uses a column grid to create an attractive visual
                experience. At this screen size, four consistently sized columns
                make up the grid structure and elements are aligned to and
                within these columns. The gutters, the spaces in between the
                columns, are also consistently sized and help the user visually
                separate the different products. The margins are independently
                sized and are the same between the left and right sides.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img4.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Ritual’s four-column grid makes scanning products easy. (We
                highlighted the columns in yellow, the gutters in blue, and the
                margins in purple.)
              </p>

              <div className="customh3 mb-4">Example 3: Modular Grid</div>
              <p>
                Our third example is from Behance, a design library. The site’s
                design uses a modular grid to create a pleasant browsing
                experience. At desktop size, rows are made up of 4 consistently
                sized modules. Horizontal gutters are slightly thicker than
                vertical gutters and the margins are consistently sized on the
                left and right of the design. Like in previous example, the
                gutters visually separate each element.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img5.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Behance’s design uses a modular grid, which allows users to
                easily browse. (We highlighted the columns in yellow, the
                gutters in blue, and the margins in purple.)
              </p>

              <div className="customh3 mb-4">Example 4: Breaking the Grid</div>
              <p>
                Our last example is Shrine from Google’s Material Studies. This
                design uses a column grid, as we can see based on the left
                navigation, which is 2 columns wide. Look closely and you will
                see that some product images settle to the margins, while others
                do not. Breaking the grid like this makes it challenging to
                focus or quickly scan product images and calls more attention to
                some products over others. It is okay to break the grid every so
                often, as long as you have a valid reason for it.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img6.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Breaking the grid produces a chaotic browsing experience for
                users. (We highlighted the columns in yellow, the gutters in
                blue, and the margins in purple.)
              </p>

              <div className="customh3 mb-3">Benefits of the Grid</div>
              <p className="customP mb-4">
                Using a grid benefits both end users and the designers alike:
              </p>
              <nav className="">
                <li>
                  Designers can quickly put together well-aligned interfaces.
                </li>
                <li>
                  Users can easily scan predictable grid-based interfaces.
                </li>
                <li>
                  A good grid is easy to adapt to various screen sizes and
                  orientations. In fact, grid layouts are an essential component
                  of responsive web design. Responsive design uses breakpoints
                  to determine the screen size threshold at which the layout
                  should change. For example, a desktop screen may have 12 grid
                  columns, which may be stacked on mobile so that the resulting
                  layout has only 4 columns.
                </li>
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img7.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                At the mobile size, Behance’s one-column grid (left) was
                reflowed into a four-column grid structure (right).
              </p>

              <p className="customP mb-4">
                Even more importantly, the grid is not a throw-away concept. It
                is used by both designers and developers alike. Be sure to
                communicate with your developers the grid structure used when
                creating the design, so they can implement it accordingly.
              </p>

              <div className="customh3 mb-3">
                Choosing and Setting Up Your Grid
              </div>
              <p className="customP mb-4">
                How you use and set up a grid is fundamental to creating well
                thought out layouts and experiences for your user.
              </p>
              <p className="customP mb-4">
                <span className="customh3">
                  Choose the right grid for your needs./span
                </span>{" "}
                Take time to think through what type of grid ­— column, modular,
                or hierarchical — best suits your needs. A hierarchical grid may
                be the best fit if one item on your page will always be more
                important than the surrounding elements. For example,
                hierarchical grids are great for online news platforms. If the
                content you need to display is highly variable, consider using a
                basic column or modular grid, as these provide lots of
                flexibility when designing. For example, elements and content
                can span across multiple columns or modules or just one to fit
                design needs.
              </p>
              <p className="customP mb-4">
                <span className="customh3">
                  Spend time setting up your grid.{" "}
                </span>
                Once you have figured out what type of grid will work well for
                your needs, start setting it up. Determine the number of columns
                and the margin and gutter sizes relative to your screen sizes.
                You will most likely want to prepare for mobile, tablet, and
                desktop screens. A 12-column grid at laptop or desktop size is
                generally flexible enough for most design needs. The number of
                columns will decrease as your device size decreases. Wireframing
                tools like Sketch and Figma have quick and easy ways to set up
                and edit your grid, even after you have started designing.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img8.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Easily set the number of columns, the gutter size, and margin
                size in Figma.
              </p>
              <p className="customP mb-4">
                <span className="customh3">
                  Always place content within columns, not gutters.
                </span>{" "}
                The gutters should remain empty as you place elements on the
                grid in order to clearly separate and align content and
                elements.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/blogDetail/img9.png"
                width={780}
                height={780}
                alt="blogImg"
                className="h-[250px] sm:h-auto"
              />
            </div>

            <div className="customP max-w-[780px] mb-4">
              <p className=" mx-auto text-center max-w-[500px] pb-5">
                Content or elements should be placed within and across columns,
                not gutters.
              </p>
              <p className="customP mb-4">
                <span className="customh3">
                  Consider using an 8px grid system.
                </span>{" "}
                For most common devices, the screen size in pixels is a multiple
                of 8. Keeping grid-component values at a multiple of 8 will
                generally make it easier to scale and implement a grid.
              </p>
              <div className="customh3 mb-3">Conclusion</div>
              <p className="customP mb-4">
                Grids not only provide designers a structure on which to base
                layouts, but they also improve readability and scannability for
                end users. Use a good grid system that easily adapts to various
                screen sizes.
              </p>
              <div className="flex items-center customxs mt-7 gap-3">
                <div className=" text-[#026AA2] px-3  py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                  Design
                </div>
                <div className=" text-[#C11574] px-3 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                  Research
                </div>
              </div>
              <div className="sm:block hidden">
                <SubSection />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

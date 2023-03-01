import React from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";

const Content = () => {
  return (
    <div>
      <section class="text-gray-600 body-font -mt-12">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class=" text-4xl font-medium text-transform: uppercase title-font mb-2 text-gray-900">
              Together we build world...
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nulla lectus, malesuada imperdiet libero a,
              condimentum auctor felis. Sed sem purus, venenatis at ante ac,
              sodales luctus nunc. Vestibulum et lacinia sapien. Donec eu
              tristique sapien. Duis id malesuada ex, a elementum sapien.
              Quisque ultrices volutpat condimentum. Vivamus ut porta felis.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <BsCart3 />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Add Cart
                </h2>
                <p class="leading-relaxed text-base">
                  A shopping cart on an online retailer's site is a piece of
                  software that{" "}
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class=" text-xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <AiOutlineRead />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Reader
                </h2>
                <p class="leading-relaxed text-base">
                  Open Library is an open, editable library catalog, building
                  towards a web{" "}
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <AiOutlineCar />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  vehicle
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever{" "}
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Country
                </h2>
                <p class="leading-relaxed text-base">
                  A country is a distinct part of the world, such as nation,
                  political entity.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <BsMoon />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Night
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-black p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;

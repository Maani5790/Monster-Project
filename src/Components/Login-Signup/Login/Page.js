
import React from "react";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/Homepage");
  };
  const goToSignup = () => {
    navigate("/Signup");
  };
  return (
    <section className="bg-black ">
      <div></div>
      <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:px-6 md:h-screen  lg:py-0 h-screen">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6">
            <h1 className="flex justify-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              LOGIN
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="sm:block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="sm:flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
</div>
                 </div>
                <a
                  href="#"
                  class=" text-sm  font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => gotoHomepage()}
              >
                Log In
              </Button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => goToSignup()}
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LogIn;





// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Button } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// const LogIn = () => {
//   const navigate = useNavigate();
//   const gotoHomepage = () => {
//     navigate("/Homepage");
//   };
//   const goToSignup = () => {
//     navigate("/Signup");
//   };
//   return (
//     <section class="bg-black">
//       <div></div>
//       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 class="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               LOGIN
//             </h1>
//             <form class="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   for="email"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   for="password"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required=""
//                 />
//               </div>
//               <div class="flex items-center justify-between">
//                 <div class="flex items-start">
//                   <div class="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required=""
//                     />
//                   </div>
//                   <div class="ml-3 text-sm">
//                     <label
//                       for="remember"
//                       class="text-gray-500 dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <a
//                   href="#"
//                   class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//               <Button
//                 type="submit"
//                 class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 onClick={() => gotoHomepage()}
//               >
//                 Log In
//               </Button>
//               <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet?
//                 <a
//                   href="#"
//                   class="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   onClick={() => goToSignup()}
//                 >
//                   Sign Up
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogIn;




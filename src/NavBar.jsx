import "./App.css";

const navBar = ({ isDarkThemed = false }) => {
  return (
    <>
      <nav className=" w-full  lg:px-12 lg:py-8">
        <div className="container flex justify-between">
          <a
            href="/"
            className={`justify-start mr-4 block cursor-pointer  text-2xl font-semibold ${
              isDarkThemed ? "text-white" : ""
            }`}
          >
            Bookmart
          </a>
          <div className="hidden lg:block justify-items-end">
            <ul
              className={`flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-items-end lg:gap-6 ${
                isDarkThemed ? "text-white" : ""
              }`}
            >
              <li className=" p-1 text-sm gap-x-2 ">
                <a href="/">Home</a>
              </li>
              <li className=" p-1 text-sm gap-x-2">
                <a href="/">Books</a>
              </li>
              <li className=" p-1 text-sm gap-x-2 ">
                <a href="/">Services</a>
              </li>
              <li className=" p-1 text-sm gap-x-2 ">
                <a href="/">About</a>
              </li>

              <li className=" p-1  text-sm gap-x-2  text-white">
                <button className="bg-gradient-to-r from-orange-500 to-blue-800 w-40 h-12 text-center -mt-4">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default navBar;

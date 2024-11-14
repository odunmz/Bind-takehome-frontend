import imageBook from "./assets/a3b7b3bf-428b-480d-a338-28ab95b72b33.png";

import { HiArrowRight } from "react-icons/hi2";

import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <div className="bg-black w-full">
        <NavBar isDarkThemed={true} />

        <div className="content flex flex-col py-2">
          <div className="flex items-center px-10">
            <div className="w-3/5 flex justify-center">
              <img className="w-3/4 h-dvh" src={imageBook} alt="" />
            </div>
            <div className="w-2/5 item-body px-4 py-36 text-white ">
              <h1 className="text-6xl">
                Find your <br />
                Favourite <span className="text-orange-600">
                  books
                </span> <br /> From our store
              </h1>

              <h3 className="py-12">
                Bookstores are treasure troves of imagination, where every shelf
                holds a new adventure, a hidden truth, or a glimpse into someone
                else's world.
              </h3>

              <a href="/BookExplorer">
                <div className="button bg-gradient-to-r from-orange-500 to-blue-800 w-40 h-12 text-center p-3 flex items-center justify-between">
                  Explore Now
                  <HiArrowRight className="h-6 w-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

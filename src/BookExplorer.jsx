import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import moment from "moment";
import DateSelector from "./DateSelector";
import { IoIosAdd } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import config from "./config";

const BookExplorer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublicationDate, setSelectedPublicationDate] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${config.backendBaseURl}/books`);
        setBooks(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    getBooks();
  }, []);

  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const clearForm = () => {
    setSearchQuery("");
  };
  const handleSearch = async (e) => {
    e.preventDefault();

    const url = new URL(`${config.backendBaseURl}/books/search`);

    if (searchQuery) {
      url.searchParams.append("searchQuery", searchQuery);
    }

    if (
      selectedPublicationDate &&
      selectedPublicationDate.startOfYear &&
      selectedPublicationDate.endOfYear
    ) {
      url.searchParams.append(
        "publicationDateStart",
        selectedPublicationDate.startOfYear
      );
      url.searchParams.append(
        "publicationDateEnd",
        selectedPublicationDate.endOfYear
      );
    }

    try {
      const { data } = await axios.get(url.toString());

      setBooks(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-black w-full h-lvh">
      <NavBar isDarkThemed={true} />
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 h-lvh">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 w-full">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden  mt-20">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <DateSelector
                setSelectedPublicationDate={setSelectedPublicationDate}
              />

              <div className="w-full md:w-1/2 text-white">
                <form className="flex items-center" onSubmit={handleSearch}>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <IoIosSearch />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={updateSearchQuery}
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="title,  author,  genre,  isbn"
                      required=""
                    />
                  </div>
                  <label for="simple-search">
                    <button
                      className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800 ml-2 mt-2"
                      type="submit"
                    >
                      {" "}
                      Search
                    </button>
                  </label>
                </form>
              </div>

              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  type="button"
                  className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  to="/AddBooks"
                >
                  <IoIosAdd className="h-6 w-6" />
                  Add a Book
                </Link>

                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <a
                    href={`${config.backendBaseURl}/books/export`}
                    className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <FiDownload className="h-4 w-4 mr-1" />
                    Export
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-4 py-3">
                      Title
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Author
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Genre
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Publication Date
                    </th>
                    <th scope="col" class="px-4 py-3">
                      ISBN
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map(
                    ({ id, title, author, genre, publicationDate, isbn }) => (
                      <tr className="border-b dark:border-gray-700" key={id}>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-white whitespace-nowrap"
                        >
                          {title}
                        </th>
                        <td className="px-4 py-3">{author}</td>
                        <td className="px-4 py-3">{genre}</td>
                        <td className="px-4 py-3">
                          {moment(publicationDate).format("MMM Do YYYY")}
                        </td>
                        <td classNamefil="px-4 py-3">{isbn}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookExplorer;

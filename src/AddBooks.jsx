import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBooks-form.css";
import NavBar from "./NavBar";
import axios from "axios";
import config from "./config";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [isbn, setISBN] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function validateForm() {
    if (title.length == 0) {
      return false;
    }

    if (author.length == 0) {
      return false;
    }
    if (genre.length == 0) {
      return false;
    }

    if (publicationDate.length == 0) {
      return false;
    }

    if (isbn.length == 0) {
      return false;
    }
    return true;
  }

  const updateTitle = (e) => {
    setTitle(e.target.value);
    setSubmitted(false);
  };

  const updateAuthor = (e) => {
    setAuthor(e.target.value);
    setSubmitted(false);
  };

  const updateGenre = (e) => {
    setGenre(e.target.value);
    setSubmitted(false);
  };
  const updatePublicationDate = (e) => {
    setPublicationDate(e.target.value);
    setSubmitted(false);
  };

  const updateISBN = (e) => {
    setISBN(e.target.value);
    setSubmitted(false);
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("");
    setPublicationDate("");
    setISBN("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (!isValidForm) {
      setError(true);
      setSubmitted(false);
    } else {
      try {
        const response = await axios.post(`${config.backendBaseURl}/addbook`, {
          title: title,
          author: author,
          genre: genre,
          publicationDate: publicationDate,
          isbn: isbn,
        });

        setSubmitted(true);
        setError(false);
        clearForm();
        navigate("/bookExplorer");
      } catch (e) {
        setError(true);
        setSubmitted(false);
      }
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1> {title} successfully added!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1 className="text-red-400">Please enter all the fields !</h1>
      </div>
    );
  };

  return (
    <>
      <div className="w-full pb-[10%]">
        <NavBar />
        <div className="form ">
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form className="group novalidate" onSubmit={handleSubmit}>
            <fieldset>
              <div className="Field ">
                <label className="label">Title</label>
                <input
                  onChange={updateTitle}
                  className="input peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  value={title}
                  type="text"
                  placeholder="title"
                  required
                  pattern="^[a-zA-Z0-9 ]+$"
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid Title
                </span>
              </div>

              <div className="Field">
                <label className="label">Author</label>
                <input
                  onChange={updateAuthor}
                  className="input peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  value={author}
                  type="text"
                  placeholder="author"
                  required
                  pattern="^[A-Za-z ]+$"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid Author
                </span>
              </div>

              <div className="Field">
                <label className="label">Genre</label>
                <input
                  onChange={updateGenre}
                  className="input peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  value={genre}
                  type="text"
                  placeholder="genre"
                  required
                  pattern="^[A-Za-z ]+$"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid Genre
                </span>
              </div>

              <div className="Field">
                <label className="label">Publication Date</label>
                <input
                  onChange={updatePublicationDate}
                  className="input peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  value={publicationDate}
                  type="date"
                  placeholder="publication date"
                  required
                  pattern="/^\d{4}-\d{2}-\d{2}$/"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid Date
                </span>
              </div>

              <div className="Field">
                <label className="label">ISBN</label>
                <input
                  onChange={updateISBN}
                  className="input peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  value={isbn}
                  type="number"
                  placeholder="ISBN"
                  required
                  pattern="/^\d+$/"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid ISBN
                </span>
              </div>
            </fieldset>
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn bg-gradient-to-r from-orange-500 to-blue-800 group-invalid:pointer-events-none group-invalid:opacity-30"
              type="submit"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBookForm;

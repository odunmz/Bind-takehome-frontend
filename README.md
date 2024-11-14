**About The Project**  
This Coding Challenge is a streamlined tool designed to help users efficiently manage and organize a book collection. It enables users to add new books with relevant details, such as title, author, genre, ISBN and publication date. Users can filter existing books based on various criteria to quickly find specific titles or groups of books. Additionally, the system includes a feature to export book data making it easy to share or archive information.  
The App is built in two parts, Frontend responsible for the user interface and the Backend which is responsible for communicating with the database and handling the book information.

**Built With**

- ReactJS : As the frontend Library
- TailwindCss : For designing the look and feel of the website
- momentJS : For manipulating date and time
- Axios : HTTP Client for making calls to remote servers like the backend

**Prerequisites**  
Ensure you have the latest version of NodeJS installed or upgrade your current version to the latest version.

**Installation**

- Clone both repos frontend and the backend
- Install NPM packages npm install
- Confirm the port on your computer where the backend application is running and change the port in

**Usage**  
To run the app in dev mode  
npm run dev  
Once the App is running you should be able to access it on port 5173 or whatever port displayed when it is running.  
From the homepage you can click the explore button which will take you to the explore page where you can see all the list of books or add new ones

**Features**  
Currently the App has the ability to:

- Create new book
- Filter books
- Search books
- List all books added
- Export books

**Improvements**

- Currently the site contains a single search form that searches across all fields except publication date and a single filter for publication date this is a bad user experience because you can not combine multiple filters with a search to improve this I would allow create more filters for more fields so we filter our searches better which will help find books more accurately.
- Currently if we create a lot of books the explore page could become really slow because we are fetching all books in the system a better user experience will bw to introduce a way of fetching the books bit by bit such as pagination

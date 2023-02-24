<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <h2>Book Directory App</h2>
 <p> Book-directory is a simple backend application built using NestJS framework. It serves as a book directory where users can add, edit, and delete books.</p>
<br>
<p>This application includes unit tests and snapshot tests to ensure its functionalities work as expected. The tests are written using Jest testing framework and can be run by executing the command npm run test.</p>

<p>The application uses a MongoDB database, and the dump of the database can be found in the folder dump/book-directory-dump/book-directory/books.metadata.json. To install and use the database dump in your project, follow the instructions below:</p>
<ol>
<li>Download the dump file from the repository.</li>
<li>
Start your MongoDB server.</li>
<li>
Run the following command to restore the dump:</li>

```
mongoimport --db <database-name> --collection <collection-name> --file books.metadata.json
```

<p>Replace <database-name> with the name of the database where you want to import the data and <collection-name> with the name of the collection where you want to store the data. For example, to import the data into a database named "book-directory" and a collection named "books", you can run the following command:</p>
<p>Note: Make sure to have MongoDB installed and added to your PATH environment variable before running the command.

Once the database is installed, you can start the application by executing the command npm start. The application will be available at http://localhost:3000.</p>

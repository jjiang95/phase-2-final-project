# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# My Book Collection

Welcome to my final project of phase 2 at Flatiron! This is a book collection/tracker app built with React that allows you to add/delete books to both the gallery and the database, view each book's details on a separately-routed page, and edit existing entries. Filter by genre, title, or read/unread status.  

# Installation

Fork this repository into your local files. `cd` into the app directory and run `npm start` in your terminal

# Usage

There will already be a collection of various books in the gallery. Click the 'delete' button below each book to remove it from both the gallery and the database (this cannot be undone!). Click the 'details' button to be directed to a page displaying that book's author, genre, rating, etc.

Click the 'edit' button on any Details page to be taken to a form pre-filled with the book's current details. Modify as you see fit and click 'update', or click 'cancel' to abort. There is input validation in place to ensure that all text fields are filled in and that the image URL is valid!

The Add Book navigation link next to Home takes you to a blank form. Once all the input fields are properly filled in, click 'add to collection'. The form will reset and allow you to add more books if you'd like. Visiting Home at any point afterwards will show the newly added book(s) in the gallery.

The various search and dropdown filters will sort the gallery according to the selected parameter. Typing in the title search field will generate matching entries in real time. The filters are nested and interact with each other to display accurate results!

# Contribution

No contributions desired.

# License

[MIT](https://choosealicense.com/licenses/mit/)
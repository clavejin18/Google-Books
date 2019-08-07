// Dependencies
import React from "react";
import API from "../utilities/API";
import SavedContainer from "../components/searchBookContainers";


// Creation of a saved book class
class SavedBooks extends React.Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",


    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = function() {
        API.getBooks()
            .then(function(res){
                this.setState({ books: res.data, title: "", author: "", description: "" })
            })
            .catch(err => console.log(err));
    };

    deleteBook = function(id) {
        console.log(id)
        API.deleteBook(id)
        .then(function(res){
            this.loadBooks()
        })
        .catch(function(err) {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <h1>Saved Books</h1>
                    {this.state.books.map(book => (
                        <div className="row" key={book._id}>
                            <div className="col-md-12 mx-auto">
                                <br />
                                <SavedContainer
                                    title={book.title}
                                    author={book.author}
                                    description={book.synopsis}
                                    id={book._id}
                                    hyperlink={book.link}
                                    image={book.img}
                                    deleteBook={this.deleteBook}
                                    />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

//export SavedBooks
export default SavedBooks;
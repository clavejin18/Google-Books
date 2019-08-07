// Dependencies
import React from "react";
import API from "../utilities/API";
import BooksContainer from "../components/savedBooksContainers";

// Search class 
class Search extends React.Component {

    state = {
        search: "",
        books: [],
        title: "",
        author: "",
        description: "",
        error: ""

    };

    componentDidMount() {

    }

    searchBooks = function(query) {
        API.search(query)
            .then(function(res) 
            {this.setState({ result: res.data })
        })
            .catch( function(err) {
                console.log(err)
            });
    }

    handleInputChange = function(event) {
        this.setState({ search: event.target.value });
        console.log(this.state.search);
    }

    saveBook = function(data){
        // Data is passed in from savedBooks.js props (all props) when the save button is clicked.
        // Data then passes into API save function
        API.save({
            title: data.title,
            author: data.author,
            description: data.description,
            hyperlink: data.hyperlink,
            image: data.image
        })
            .then(function(res) {
                console.log(res.data.config)
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log("what now?")
                console.log(res.data.config)
            })
            .catch(function(err) {
                console.log(err.response)
            });
    }

    handleFormSubmit = function(event) {
        event.preventDefault();
        API.search(this.state.search)
            .then(function(res) {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ books: res.data.items });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                    <h1>Search Books by Title</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="titleSearch" placeholder="Title" onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                {this.state.books.map(books => (
                    <div className="row" key={books.id}>
                        <div className="col-md-6 mx-auto">
                            <br />
                            <BooksContainer
                                title={books.volumeInfo.title}
                                author={books.volumeInfo.authors}
                                key={books.id}
                                id={books.id}
                                description={books.volumeInfo.description}
                                link={books.volumeInfo.previewLink}
                                image={books.volumeInfo.imageLinks.thumbnail}
                                saveBook={this.saveBook}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

// Export search
export default Search;

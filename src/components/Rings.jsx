import React, { Component } from "react";
import { Card, Row, Col, FormControl, Spinner, Alert } from "react-bootstrap";

class Rings extends Component {
  state = {
    movies: [],
    isLoading: true,
    searchQuery: "",
    isError: false,
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b9ab1ae9&s=Lord+of+the+Rings"
      );
      if (response.ok) {
        let data = await response.json();
        let dataArray = data.Search;
        console.log(dataArray);
        this.setState({
          movies: dataArray,
          isLoading: false,
        });
      } else {
        this.setState({
          isError: true,
        });
        console.log("an error ocurred");
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Row className="justify-content-between">
          <h5 className="m-3 text-white">Lord Of The Rings</h5>
          {this.state.isError && (
            <Alert variant="danger">Error please try again</Alert>
          )}
          {this.state.isLoading && (
            <Spinner animation="border" variant="info" />
          )}
          <Col md={3} className="mb-3">
            <FormControl
              type="text"
              placeholder="Search Lord of the rings..."
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Col>
        </Row>

        <Row>
          {this.state.movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((movie) => (
              <Col className="sm-6 md-4 xl-2 px-1" key={movie.imdbID}>
                <Card>
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt="slide"
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
export default Rings;

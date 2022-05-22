import React, { Component } from "react";
import { Card, Row, Col, Alert, Spinner } from "react-bootstrap";

class StarWars extends Component {
  state = {
    movies: [],
    isError: false,
    isLoading: true,
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b9ab1ae9&s=star+wars"
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
        <h5 className="text-white mt-4 ml-2 ">Star Wars</h5>
        {this.state.isError && (
          <Alert variant="danger">Error please try again</Alert>
        )}
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        <Row className="mx-n1">
          {this.state.movies.map((movie) => (
            <Col className="sm-6 md-4 xl-2 px-1" key={movie.imdbID}>
              <Card>
                <img
                  className="d-block w-100"
                  src={movie.Poster}
                  alt="Third slide"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default StarWars;

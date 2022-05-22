import { Dropdown } from "react-bootstrap";
import { FaBars, FaGripHorizontal } from "react-icons/fa";
import { Container } from "react-bootstrap";

const TvShows = () => (
  <Container fluid className="px-4 mt-4">
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h3 className="mb-4 text-white">TV Shows</h3>
        <div className="ml-4 mt-1">
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#221f1f" }}
              id="dropdownMenuButton"
              className="btn-secondary btn-sm dropdown-toggle rounded-0 text-white"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu bg="dark">
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="text-white">
        <FaBars size="1.3rem" style={{ marginRight: "20px" }} />
        <FaGripHorizontal size="1.5rem" style={{ marginRight: "15px" }} />
      </div>
    </div>
  </Container>
);
export default TvShows;

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Articles from "./components/Articles";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { APIKEY, COUNTRY, URLBASE } from "./utils/apis";

const App = () => {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const searchArticles = async () => {
      const url = `${URLBASE}/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    };
    searchArticles();
  }, [category]);

  /*
  useEffect(() => {
    const searchArticles = () => {
      const url = `${URLBASE}/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    };
    searchArticles();
  }, [category]);
  */
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Formulario setCategory={setCategory} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Articles articles={articles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

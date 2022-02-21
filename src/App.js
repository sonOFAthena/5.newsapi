import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Formulario from './components/Formulario';
import { useState } from 'react';
import { useEffect } from 'react';
import { APIKEY, COUNTRY, URLBASE } from './utils/apis';
import Articles from './components/Articles';

const App = () => {
  
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const searchArticles = async () =>{
      const url = `${URLBASE}/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;

      const response = await fetch(url);
      const data = await response.json();

      setArticles(data.articles);
    };

    searchArticles();

  }, [category])
  

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

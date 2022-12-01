import { useEffect, useState } from 'react'
import './index.css'
import { Container, Row, Col, Card, Button,Spinner, Form } from 'react-bootstrap'
import axios from 'axios'
const News = () => {
  const [news, setNews] = useState([])
  const [countrySelected,setCountrySelected]=useState("in")
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=${countrySelected}`)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err))
  }, [countrySelected])

  return (

    <Container>
      <Form.Select size="lg" style={{width:'300px',margin:'10px auto'}} value={countrySelected} onChange={(e)=>setCountrySelected(e.target.value)}>
        <option value='in' >India</option>
        <option value='us'>USA</option>
        <option value='ca'>CANADA</option>
        <option value='ae'>United Arab Emirates</option>
        <option value='ua'>Ukraine</option>
        <option value='gr'>Greece</option>
      </Form.Select>
      <Row>
       { news.length ? (news.map((singleNews,index) => (
          <Col md={4} className='mt-2 mb-2' key={index} >
            <Card className='news-card'>
            <Card.Header className='theme'>{singleNews.source.name}</Card.Header>
              <Card.Img variant="top" src={singleNews.urlToImage?singleNews.urlToImage:'https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000'} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title className='news-title'>{singleNews.title.length<=100?singleNews.title:`${singleNews.title.slice(0,100)}...`}</Card.Title>
                <Card.Text>
                  {singleNews.description?singleNews.description:"Please click on read more to know more about breaking news"}
                </Card.Text>
                <a href={singleNews.url} className='btn btn-dark btn-sm'>Read More</a>
              </Card.Body>
              <Card.Footer className="theme">{singleNews.publishedAt}</Card.Footer>
            </Card>
          </Col>
        ))):(<Spinner animation="border" role="status" style={{margin:"200px auto"}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>)}

        
      </Row>
    </Container>
  )
}
export default News
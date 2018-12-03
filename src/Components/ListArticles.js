import React, { Component } from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink , Table, Button} from 'reactstrap';
import axios from 'axios';

import { connect } from 'react-redux';
import { addOrderAction } from '../Actions/Actions'


export class ListArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      nbPages: 0
    }
    this.getArticlesPerPage(0);
    axios.get("http://localhost:6999/articles/pages")
    .then((result) => {
      console.log(result)
      this.setState({nbPages: result.data[0].pages})
    });
  }

  getArticlesPerPage = (page) => {
    axios.get(`http://localhost:6999/articles/page/${page}`)
    .then((result) => {
      this.setState({articles: result.data})
    });
  }

  pagination() {
    let pagination = [];
    for(let i = 0 ; i < this.state.nbPages; i++) {
      pagination = [...pagination, <PaginationItem onClick={() => {this.getArticlesPerPage(i)}}><PaginationLink className="text-purple">{i + 1}</PaginationLink></PaginationItem>]
    }
    console.log(pagination)
    return pagination
  }

  render() {
    return (
      <Col lg={8} className="mb-3">
        <h3 className="paytone text-purple">List Articles</h3>
        <Card>
          <CardBody className="p-0">
            <Table className="table-responsive-sm">
              <thead>
                <tr className="bg-light text-purple font-weight-bold">
                  <td className="font-weight-bold">Product</td>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map((article, key) => {
                  return (
                    <tr key={key} className="text-secondary">
                      <td>
                        <h5 className="paytone pr-5">{article.name}</h5>
                        <div className="d-flex justify-content-between w-100 m-0">
                          <div><span className="mr-3 text-purple font-weight-bold">{article.price} $</span>Quantity : {article.quantity}</div>
                          <div>
                            <Button className="float-right" color="success" size="sm" onClick={() => {this.props.addToOrder({name: article.name, price: article.price, quantity:1})}}>ADD</Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Col className="d-flex justify-content-center">
          <Pagination aria-label="Page navigation example" className="mt-3">
            <PaginationItem>
              <PaginationLink className="text-purple" previous href="#" />
            </PaginationItem>
            {this.pagination()}
            <PaginationItem>
              <PaginationLink className="text-purple" next href="#" />
            </PaginationItem>
          </Pagination>
        </Col>
      </Col>
    )
  }
}


const mapActionToProps = {
  addToOrder: addOrderAction
}

export default connect(null, mapActionToProps)(ListArticles)

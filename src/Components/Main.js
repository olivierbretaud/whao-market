import React, { Component } from 'react'
import ListArticles from './ListArticles';
import Order from './Order';
import { Row } from 'reactstrap'

export default class Main extends Component {
  render() {
    return (
      <Row className="mt-3">
        <ListArticles/>
        <Order/>
      </Row>
    )
  }
}

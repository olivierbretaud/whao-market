import React, { Component } from 'react';
import { Col, Card, CardBody, Table, Button} from 'reactstrap';

import { connect } from 'react-redux';
import { removeFromOrder } from '../Actions/Actions'
import { Link } from 'react-router-dom';
import { totalPrice } from './../Utils/Utils'

export class Order extends Component {
  render() {
    return (
      <Col lg={4} className="mb-3">
        <h3 className="paytone text-purple">My order</h3>
        <Card className="mb-3">
          <CardBody className="p-0">
            <Table className="mb-0">
              <tbody>
                <tr className="bg-light text-purple font-weight-bold">
                  <td className="d-flex align-items-center justify-content-between">
                    <span className="font-weight-bold text-purple">Total: {totalPrice(this.props.order)} $ </span>
                    {this.props.order.length === 0 ? null : <Link to="/PurchasePanel"><Button className="float-right" size="sm" color="success">Buy now</Button></Link>}
                  </td>
                </tr>
                {this.props.order.map((article, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <h6 className="paytone">{article.name}</h6>
                        <div className="d-flex justify-content-between w-100 m-0">
                          <div><span className="mr-3 text-purple font-weight-bold">{article.price} $</span><span className="text-secondary">Quantity : {article.quantity}</span></div>
                          <div>
                          <Button className="float-right" size="sm" color="warning"onClick={() => {this.props.removeArticle(index)}}>Remove</Button>
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
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.card
})

const mapActionToProps = {
  removeArticle: removeFromOrder
}

export default connect(mapStateToProps, mapActionToProps)(Order)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col, Card, Table, Button } from 'reactstrap';
import { totalPrice } from './../Utils/Utils'

class PurchasePanel extends Component {
  render () {
    if(this.props.order.length === 0) {
      return <Redirect to="/"/>
    } else {
      return (
        <Row className="mt-3">
          <Col md="12">
            <h3 className="paytone text-purple">My order</h3>
            <Card>
              <Table className="mb-0">
                <tbody>
                  {this.props.order.map((article, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6 className="paytone">{article.name}</h6>
                          <div className="d-flex justify-content-between w-100 m-0">
                            <div><span className="mr-3 text-purple font-weight-bold">{article.price} $</span><span className="text-secondary">Quantity : {article.quantity}</span></div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td>
                      <tr className="d-flex flex-column float-right">
                        <h6 className="font-weight-bold text-secondary">HT <span className="ml-5 float-right">  {(totalPrice(this.props.order) - totalPrice(this.props.order)*0.2).toFixed(2)} $</span></h6>
                        <h6 className="font-weight-bold text-secondary">TVA(20%)<span className="ml-5 float-right">  {(totalPrice(this.props.order)*0.2).toFixed(2)} $</span></h6>
                        <h6 className="font-weight-bold text-purple">total TTC <span className="ml-5 float-right">  {totalPrice(this.props.order)} $</span></h6>
                        <div>
                          <Button className="float-right" size="sm" color="success">Confirm</Button>
                          <Link to="/"><Button className="float-right mr-2" size="sm" color="warning">Cancel</Button></Link>
                        </div>
                      </tr>
                    </td>
                  </tr>
                </tbody>
             </Table>
            </Card>
          </Col>
        </Row>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  order: state.card
});


export default connect(mapStateToProps, null)(PurchasePanel);
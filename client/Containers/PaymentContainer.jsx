import React, {Component} from 'react';
import tenantPayments from '../Components/tenantPayments';
import manPayments from '../Components/manPayments';


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.role === 'Manager' ? manPayments : tenantPayments}
      </div>
    );
  }
}

export default PaymentContainer;
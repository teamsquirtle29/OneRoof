import React, {Component} from 'react';
import TenantPayments from '../Components/TenantPayments.jsx';
import ManPayments from '../Components/ManPayments.jsx';


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const manPayments = <ManPayments aptList={this.props.aptList} />;
    const tenantPayments = <TenantPayments userId={this.props.userId} />
    return (
      <div id='paymentDiv'>
        {this.props.role === 'Manager' ? manPayments : tenantPayments}
      </div>
    );
  }
}

export default PaymentContainer;
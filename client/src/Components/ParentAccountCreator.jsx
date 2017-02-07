import React, { Component } from 'react';
import Account from '../Models/Account.js';

class ParentAccountCreator extends Component {
  constructor(props) {
    super(props);

    this.handleAccountNameChange = this.handleAccountNameChange.bind(this);
    this.handlePercentageChange = this.handlePercentageChange.bind(this);
    this.addToParentAccounts = this.addToParentAccounts.bind(this);

    this.state = {
      accountName: '',
      percentage: 0,
    }
  }

  handleAccountNameChange(event) {
    this.setState({accountName: event.target.value});
  }

  handlePercentageChange(event) {
    this.setState({percentage: event.target.value});
  }

  addToParentAccounts() {
    var account = new Account(
      this.state.accountName, 
      this.props.incomeAfterBills,
      this.state.percentage)

    this.props.addToParentAccounts(account);
  }

  render() {
    return (
      <div className="AccountCreator">
        <fieldset>
          <legend>Enter Account name</legend>
          <input value={this.state.accountName}
            onChange={this.handleAccountNameChange} />

          <legend>Enter the percentage of each paycheck it gets</legend>
          <input value={this.state.percentage}
            onChange={this.handlePercentageChange} />

          <button onClick={this.addToParentAccounts}>Add Account</button>
        </fieldset>
      </div>

    )
  }
}

export default ParentAccountCreator ;

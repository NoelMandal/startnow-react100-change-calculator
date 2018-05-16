import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      amountDue: '',
      amountReceived: '',
      change: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const amount = parseFloat(this.state.amountReceived) - parseFloat(this.state.amountDue); 
    var cents = (amount*100); 
      if (isNaN (cents) || cents < 0 || cents > 99999 ) {
          alert ("DAS NOT MUNEYZ");
          cents = 0; // alert if non numbers are entered.
      }

      const twenty = Math.floor(cents/2000);     cents = cents % 2000;
      const ten = Math.floor(cents/1000);     cents = cents % 1000;
      const five= Math.floor(cents/500);     cents = cents % 500;
      const one = Math.floor(cents/100);     cents = cents % 100;
      const quarter = Math.floor(cents/25);     cents = cents % 25;
      const dime = Math.floor(cents/10);        cents = cents % 10;
      const nickel = Math.floor(cents/5);      
      const penny = Math.round(cents % 5);
      this.setState({
        change: amount.toFixed(2),
        twenties: twenty,
        tens: ten,
        fives: five,
        ones: one,
        quarters: quarter,
        dimes: dime,
        nickels: nickel,
        pennies: penny
      })
  }

  render() {
    return(
      <div className="container">
        <h1 className="text-white">Change Calculator</h1>
          <hr className="bg-white" />

        <div className="row">
          <div className="col-md-4">
            <div className="card">
            <div className="card-header text-muted font-weight-bold">Enter Information</div>

            <div className="card-body">

            <p className="text font-weight-bold">How much is due?
            <input name="amountDue" type="number" className="form-control" 
            value={this.state.amountDue} onChange={this.handleOnChange}placeholder="Enter Due Amount"/></p>
            
            <p className="text font-weight-bold">How much was received?
            <input name="amountReceived" type="number" className="form-control" 
            value={this.state.amountReceived} onChange={this.handleOnChange} placeholder="Received Amount"/></p>
            </div>

            <div className="card-footer text-center">
              <button type="button" name="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Calculate</button>
            </div>
            {/* within card 1 */}
            </div>
          {/* within col-4 */}
          </div>

          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-body">

                <div className="alert alert-success" role="alert">The total change due is ${this.state.change}</div>

                <div className="card-deck">

                  <div className="card bg-light">
                    <div className="card-body text-center">
                    <p className="card-text font-weight-bold">Twenties</p>
                    <p className="card-text" value={this.state.twenties}>{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Tens</p>
                      <p className="card-text" value={this.state.tens}>{this.state.tens}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Fives</p>
                      <p className="card-text" value={this.state.fives}>{this.state.fives}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Ones</p>
                      <p className="card-text" value={this.state.ones}>{this.state.ones}</p>
                    </div>
                  </div> 
                </div>
                <br/>
                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Quarters</p>
                      <p className="card-text" value={this.state.quarters}>{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Dimes</p>
                      <p className="card-text" value={this.state.dimes}>{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Nickels</p>
                      <p className="card-text" value={this.state.nickels}>{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold">Pennies</p>
                      <p className="card-text" value={this.state.pennies}>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              {/* within card-body */}
              </div>         
            {/* within card 2 */}
            </div>
          {/* within col-8 */}
          </div>
        {/* within row */}
        </div>
      {/* within container */}
      </div>
    )
  }
}

export default App;

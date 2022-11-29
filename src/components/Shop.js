import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { DecMobFun, DecLapFun, fetchUsers } from "./../redux/actions";
export class Shop extends Component {
  //   state = {
  //       numberOfMobiles : 100
  //   }
  //   const DecMobFun = () => {
  //     this.setState({numberOfMobiles : this.state.numberOfMobiles -1})
  // }

  render() {
    return (
      <>
        <center>
          <h1 className="heading">welcome to Vshop </h1>

          <div className="items">
            <div className="item">
              <p>Vivo Mobiles</p>
              <p>Available: {this.props.numberOfMobiles}</p>
              <button onClick={this.props.DecMobFunction}>BUY</button>
            </div>
            <div className="item">
              <p>Apple Laptops</p>
              <p>Available: {this.props.numberOfLaptops}</p>
              <button onClick={this.props.DecLapFunction}>BUY</button>
            </div>
            <div className="item">
              <p>Get User Data</p>
              <p>Count: {this.props.users.length}</p>
              <button onClick={this.props.fetchUsers}>Call API</button>
            </div>
          </div>
        </center>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfMobiles: state.mobiles.numberOfMobiles,
    numberOfLaptops: state.laptops.numberOfLaptops,
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DecMobFunction: () => dispatch(DecMobFun()),
    DecLapFunction: () => dispatch(DecLapFun()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

// first you can use connect and getting data from some component by use mapStateToProps function
// in connect we are use two functions.

// dispatch only using actions only

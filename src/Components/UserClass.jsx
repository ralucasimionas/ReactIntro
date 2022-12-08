import React from "react";

class UserClass extends React.Component {
  render() {
    const nume = this.props.nume;
    const varsta = this.props.varsta;
    const gender = this.props.gender;
    const address = this.props.address;

    // const {nume, varsta} = this.props;
    return (
      <div className="User">
        <h2>Nume: {nume} </h2>
        <p>Varsta: {varsta}</p>
        <p>Gender: {gender}</p>
        <p>Address: {address}</p>
      </div>
    );
  }
}
export default UserClass;

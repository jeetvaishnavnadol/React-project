import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  render() {
    return (
      <div className="ui main " style={{ marginTop: "50px" }}>
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="">name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              // onChange={(e) => this.setState(name:e.target.value)}
              placeholder="Name"
            />
          </div> 
          <div className="field">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <button className="ui button blue"> Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

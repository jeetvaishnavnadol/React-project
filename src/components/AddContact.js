import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all the fields are mandotory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div className="ui main " style={{ marginTop: "50px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="">name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="email"
            />
          </div>
          <button className="ui button blue"> Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

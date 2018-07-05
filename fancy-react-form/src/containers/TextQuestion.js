import React, { Component } from 'react';

export default class TextQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = { questionContent: '' };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render () {
    return (
      <form className="input-group">
        <input
          placeholder="Type your question here"
          className="form-control"
          value={this.state.questionContent}
          onChange={this.onInputChange}
        />
      </form>
    )
  }
}

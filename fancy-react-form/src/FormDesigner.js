import React, { Component } from 'react';
import FormDesignerNav from './FormDesignerNav.js';
import QuestionPane from './QuestionPane.js';
import PreviewPane from './PreviewPane.js';

class FormDesigner extends Component {
  render() {
    return (
      <div className="FormDesigner">
        <FormDesignerNav />
        <div class="row">
          <QuestionPane />
          <PreviewPane />
        </div>
      </div>
    );
  }
}

export default FormDesigner;

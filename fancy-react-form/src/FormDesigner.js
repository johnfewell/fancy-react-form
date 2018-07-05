import React, { Component } from 'react';
import FormDesignerNav from './FormDesignerNav.js';
import QuestionPane from './QuestionPane.js';
import PreviewPane from './PreviewPane.js';
import QuestionPaneMenu from './QuestionPaneMenu.js';


class FormDesigner extends Component {
  render() {
    return (
      <div id="wrapper">
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

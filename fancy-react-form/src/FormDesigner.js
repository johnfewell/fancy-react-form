import React, { Component } from 'react';
import './App.css';
import FormDesignerNav from './FormDesignerNav.js';
import QuestionPaneMenu from './QuestionPaneMenu.js';
import QuestionPane from './QuestionPane.js';
import PreviewPane from './PreviewPane.js';

class FormDesigner extends Component {
  render() {
    return (
      <div className="FormDesigner">
        <FormDesignerNav />
        <QuestionPaneMenu />
        <QuestionPane />
        <PreviewPane />
      </div>
    );
  }
}

export default FormDesigner;

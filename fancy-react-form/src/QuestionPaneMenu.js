import React from 'react';
import classNames from 'classnames/bind';

const QuestionPaneMenu = () => {

    return (
      <menu>
        <nav id="sidebar" >
            <div className="sidebar-header">
                <h3>Question menu</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li>
                    <a href="#">Add Question</a>
                </li>
                <li>
                    <a href="#">Add Question</a>
                </li>
                <li>
                    <a href="#">Add Question</a>
                </li>
            </ul>

        </nav>
      </menu>
    )
}

export default QuestionPaneMenu;

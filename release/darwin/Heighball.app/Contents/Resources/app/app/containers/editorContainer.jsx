import React from 'react';
import Editor from '../components/editor';
import Preview from '../components/preview';
import Header from '../components/header';

var EditorContainer = React.createClass({

  render: function() {
    return (
      <div>
        <Header title="oh ya!"/>
        <div className="editor-container">
          <div className="editor-container__folder">
            this is folder
          </div>
          <div className="editor-container__preview">
            this is preview
          </div>
          <div className="editor-container__editor">
            <Editor />
          </div>
          <a onClick={ this.getInputValue }>save</a>
        </div>
      </div>
    );
  }

});

module.exports = EditorContainer;

import React from 'react';
import Editor from '../components/editor';
import Preview from '../components/preview';
import Header from '../components/header';
import Tools from '../components/editors/tools';
import Folders from '../components/folderTrees/trees';

class editorContainer extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header actions={ this.props.actions } title="oh ya!"/>
        <div className="editor-container">
          <div className="editor-container__folder">
            this is folder
            <Folders aaa="444" />
          </div>
          <div className="editor-container__preview">
            this is preview
          </div>
          <div className="editor-container__tools">
            <Tools />
          </div>
          <div className="editor-container__editor">
            <Editor />
          </div>
          <a onClick={ this.getInputValue }>save</a>
        </div>
      </div>
    );
  }

};

export default editorContainer;

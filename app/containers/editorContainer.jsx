import React from 'react';
import Editor from '../components/editor';
import Preview from '../components/preview';
import Header from '../components/header';
import Tools from '../components/editors/tools';
import folderTree from '../utils/folderTree';

import Trees from '../components/folderTrees/react-trees';
// <Folders aaa="444" />
class editorContainer extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }
  componentDidMount() {
    var loadPath = "/Users/blue-mtk/mtk/highball-IDE/app/components";
    var treePath = folderTree(loadPath, false, null);
    console.log('==============')
    console.log(treePath)
    console.log('==============')
    this.setState({pathTree: [treePath]})
  }
  render () {
    return (
      <div>
        <Header actions={ this.props.actions } title="oh ya!"/>
        <div className="editor-container">
          <div className="editor-container__folder">
            <Trees data={ this.state.pathTree } />
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

var {PrismCode} = require("react-prism");
import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace-wrapper';
import '../styl/editor-container.styl';

require('brace/mode/javascript');
require('brace/theme/github');

var Editor = React.createClass({

  _project: {
    name: '123123123',
    content: 'console.log(123);'
  },

  _onChange(newValue){
    console.log('change:', newValue);
  },

  render: function() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        height="100%"
        onChange={ this._onChange }
        name="oh"
        wrapEnabled="true"
      />
    );
  }

});

module.exports = Editor;

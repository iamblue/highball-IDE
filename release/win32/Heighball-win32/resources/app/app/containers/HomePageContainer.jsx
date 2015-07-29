import React from 'react'
import { Link } from 'react-router'


export default class HomePageContainer extends React.Component {

  static getProps() {
    return {}
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>This is the homepage.123qwewe</p>
        <Link to="editor">to Editor</Link>
        <Link to="test">to test</Link>
      </div>
    )
  }

}

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import AppContainer from '../containers/AppContainer';
import HomePageContainer from '../containers/HomePageContainer';
import TestContainer from '../containers/testContainer';
import EditorContainer from '../containers/editorContainer';

export default (
  <Route path="/" handler={EditorContainer}>
    <DefaultRoute name="home" handler={ HomePageContainer } />
    <Route name="editor" handler={ EditorContainer } />
    <Route name="test" handler={ TestContainer } />
  </Route>
);

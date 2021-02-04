import React, { Component } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getApplicationsData } from '../../../api';
import { List } from '../../common';
import RenderUniqueApplicationPage from './RenderUniqueApplicationPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const UniqueApplication = () => {
  const { authState } = useOktaAuth();

  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={() => getApplicationsData(authState)}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Applications...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderUniqueApplicationPage}
    />
  );
};

export default UniqueApplication;

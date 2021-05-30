// import React form 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashin', () => {
  shallow(<App />)
});
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

it('works', () => {
  const wrap = shallow(<App />);

  expect(wrap.text()).toEqual('hello world');
});
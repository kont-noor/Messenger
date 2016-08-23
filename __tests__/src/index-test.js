import 'react-native';
import React from 'react';
import Messenger from '../../src';

import ReactTestUtils from 'react-addons-test-utils';

describe('Messenger', () => {
  it('renders', () => {
    const renderer = ReactTestUtils.createRenderer();
    const tree = renderer.render(
      <Messenger />
    );

    console.log(tree);
  });
});

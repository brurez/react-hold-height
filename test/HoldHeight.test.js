import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import HoldHeight from '../src/index';

describe('<HoldHeight />', () => {

  const List3Items = () =>
    <ul>
      <li>This is a list</li>
      <li>with 3 itens</li>
      <li>it takes some space</li>
    </ul>;

  it('render child with no props', () => {
    const wrapper = mount(<HoldHeight><List3Items/></HoldHeight>);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('render child with initialHeight prop', () => {
    const wrapper = mount(<HoldHeight initialHeight={200}><List3Items/></HoldHeight>);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.props().initialHeight).toBe(200);
    expect(wrapper).toMatchSnapshot();
  });

});

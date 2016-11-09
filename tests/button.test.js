import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/button/button';

describe('Button', function() {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Button>Follow</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Chinese characters correctly', () => {
    const tree = renderer.create(
      <Button>按钮</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

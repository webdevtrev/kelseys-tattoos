import React from 'react';

export default {
  title: 'SCSS/Typography',
  argTypes: {},
};

const Template = (args) => (
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h2 className='Subheading'>
      Here is a level 2 heading with{' '}
      <span className='Heading'>alternating</span> colors for emphasis
    </h2>

    <p>Here is some body text that will be most content</p>

    <a href='/'>Click me I'm a link!</a>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

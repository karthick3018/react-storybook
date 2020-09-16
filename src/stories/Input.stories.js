import React from 'react';

import {InputBox} from './Input';

export default {
  title: 'Example/Input',
  component: InputBox,
};


const Template = (args) => <InputBox {...args} />;

export const PlainInput = Template.bind({});
PlainInput.args = {
  label:'name',
  name: 'name',
  type:'string',
};

export const noLabel = Template.bind({});
noLabel.args = {
  name: 'name',
  type:'string',
  placeholder:'Enter the name'
};


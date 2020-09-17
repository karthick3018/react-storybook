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
  placeholder:'Enter your name'
};

export const number = Template.bind({});
number.args = {
  name: 'age',
  type:'number',
  placeholder:'Enter your age'
};

export const withPrefix = Template.bind({});
withPrefix.args = {
  name:'mobile',
  type:'number',
  placeholder:'Enter your mobile number',
  additionalClass:'padding-prefix'
}
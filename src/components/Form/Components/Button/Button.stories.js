import React from 'react';

import { Button } from './Button';

export default {
	argTypes: {
		click: { action: 'click' },
	},
	component: Button,
	title: 'MyComponents/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	disabled: false,
	label: 'Send message',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: 'Button disabled',
};
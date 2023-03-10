import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        classColor: { control: 'select' }
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});

AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});

Secondary.args = {
    size: 'normal',
    classColor: 'secondary'
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    size: 'normal',
    classColor: 'tertiary'
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    color: '#5517ac',
    size: 'h1'
}

export const CustomBgColor = Template.bind({});

CustomBgColor.args = {
    size: 'h1',
    color: 'white',
    backgroundColor: 'black'
}
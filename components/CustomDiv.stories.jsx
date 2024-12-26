
import  CustomDiv  from './CustomDiv';

export default {
  title: 'CustomDiv',
  component: CustomDiv,
  argTypes: {
    title: { control: 'text' },
  },
};

export const Default = {
  args: {
   title: 'By Default',
  },
};


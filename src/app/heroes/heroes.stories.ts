import { Meta, StoryObj } from '@storybook/angular';
import { HeroesComponent } from './heroes.component';

const meta: Meta<HeroesComponent> = {
  title: 'Heroes/Heroes',
  component: HeroesComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<HeroesComponent>;

export const Heroes: Story = {};

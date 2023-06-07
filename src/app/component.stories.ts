import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';

const meta: Meta<AppComponent> = {
  title: 'Heroes/NavBar',
  component: AppComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AppComponent>;
export const Component: Story = {};

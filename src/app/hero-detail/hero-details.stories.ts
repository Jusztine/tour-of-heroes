import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { HeroDetailComponent } from './hero-detail.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';

const meta: Meta<HeroDetailComponent> = {
  title: 'Heroes/Hero Detail',
  component: HeroDetailComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [DashboardComponent, HeroesComponent],
      // if the component has injected services,
      // need to import things usually
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<HeroDetailComponent>;

export const HeroDetails: Story = {};

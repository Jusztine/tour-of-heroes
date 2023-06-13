import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewChildren } from '@angular/core';

const meta: Meta<DashboardComponent> = {
  title: 'Heroes/Dashboard',
  component: DashboardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DashboardComponent>;

export const Dashboard: Story = {};

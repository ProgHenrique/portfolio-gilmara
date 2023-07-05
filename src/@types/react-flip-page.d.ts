declare module 'react-flip-page' {
  import { Component } from 'react';

  export interface FlipPageProps {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    showSwipeHint: boolean;
    uncutPages: boolean;
    children: React.ReactNode;
  }

  export default class FlipPage extends Component<FlipPageProps> {}
}

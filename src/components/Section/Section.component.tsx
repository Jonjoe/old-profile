/*
  | Section Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Section.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Module Imports
// ...

// Component Imports
// ...

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}

interface Props {
  layout?: LayoutOptions;
  children: JSX.Element | JSX.Element[];
}

type LayoutOptions = undefined | 'full-width' | 'centered';

// React Component Class ===========================================
// -----------------------------------------------------------------
class Section extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  // Event handlers
  // ...

  // Custom Methods
  getCSS = (layout: LayoutOptions) => {
    const baseCSS: string = 'Section';
    let constructedCSSClasses: string = baseCSS;

    switch (layout) {
      case 'full-width':
        constructedCSSClasses = `${constructedCSSClasses} ${baseCSS}-isFullWidth`;
        break;

      case 'centered':
        constructedCSSClasses = `${constructedCSSClasses} ${baseCSS}-isCentered`;
        break;
    }

    return constructedCSSClasses;
  };

  render(): JSX.Element {
    const { layout, children } = this.props;

    return <section className={this.getCSS(layout)}>{children}</section>;
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Section.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Section;

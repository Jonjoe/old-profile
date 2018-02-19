/*
  | Row Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Row.
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
  children: JSX.Element | JSX.Element[];
}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Row extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  // Event handlers
  // ...

  // Custom Methods
  // getCSS = (layout: LayoutOptions) => {
  //   const baseCSS: string = 'Row';
  //   let constructedCSSClasses: string = baseCSS;

  //   switch (layout) {
  //     case 'full-width':
  //       constructedCSSClasses = `${constructedCSSClasses} ${baseCSS}-isFullWidth`;
  //       break;
  //   }

  //   return constructedCSSClasses;
  // };

  render(): JSX.Element {
    const { children } = this.props;

    return <section className="Row">{children}</section>;
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Row.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Row;

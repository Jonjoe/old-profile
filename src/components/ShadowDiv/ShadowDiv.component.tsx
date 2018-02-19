/*
  | ShadowDiv Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a ShadowDiv.
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
  children: any;
}

// React Component Class ===========================================
// -----------------------------------------------------------------
class ShadowDiv extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return this.props.children;
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './ShadowDiv.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default ShadowDiv;

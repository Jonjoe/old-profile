/*
  | Divider Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Divider.
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
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Divider extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return <div className="Divider" />;
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Divider.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Divider;

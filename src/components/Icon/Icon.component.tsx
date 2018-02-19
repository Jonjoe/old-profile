/*
  | Icon Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Icon.
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
  name: string;
}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Icon extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
    const { name } = this.props;

    return <span className={`Icon fa fa-${name}`} />;
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Icon.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Icon;

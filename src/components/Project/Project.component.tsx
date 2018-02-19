/*
  | Project Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Project.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {
  data: any;
}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Project extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <article className="Project">
        <h4>{this.props.data.name}</h4>
      </article>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Project.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Project;

/*
  | Projects Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Projects.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';
import { Project } from '../../components';

// Module Imports
import projects from '../../data/projects';

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Projects extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <section className="Projects">
        {projects.map((project, index) => {
          return <Project key={index} data={project} />;
        })}
      </section>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Projects.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Projects;

/*
  | Skills Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Skills.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Module Imports
import skillsData from '../../data/skills';

// Component Imports
import { Skill } from '../../components';

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Skills extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <article className="Skills">
        {skillsData.map((skill, index) => {
          return <Skill key={index} name={skill.name} score={skill.score} />;
        })}
      </article>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Skills.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Skills;

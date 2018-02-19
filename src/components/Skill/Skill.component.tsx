/*
  | Skill Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Skill.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {
  name: string;
  score: number;
}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Skill extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  getBarWidth = (score: number): string => {
    return `${score}0%`;
  };

  render(): JSX.Element {
    const { name, score } = this.props;

    return (
      <div className="Skill">
        <span className="Skill_Name">{name}</span>
        <div style={{ width: this.getBarWidth(score) }} className="Skill_Bar">
          <span className="Skill_Score">{score}</span>
        </div>
      </div>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Skill.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Skill;

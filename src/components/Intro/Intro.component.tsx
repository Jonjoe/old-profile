/*
  | Intro Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a Intro.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Module Imports
import { ShadowDiv, SocialLinks } from '../../components';

// Component Imports
// ...

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class Intro extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <ShadowDiv>
        <h1 className="title">Jonjoe Whitfield</h1>
        <p style={{ marginTop: 50, marginBottom: 50 }}>
          Engineer, Hacker, Pretend Designer, JS/Typescript Fanboy, S.O.L.I.D
          Engineer & Craftsman
        </p>
        <SocialLinks />
      </ShadowDiv>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './Intro.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default Intro;

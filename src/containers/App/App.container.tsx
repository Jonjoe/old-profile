/*
  | App Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a list of notes.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';

// Module Imports
// import workedWith from '../../data/workedWith';

// Component Imports
import {
  Section,
  SocialLinks,
  Projects,
  Divider,
  Intro
} from '../../components';
// ...

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class App extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  // Event handlers
  // ...

  // Custom Methods
  // ...

  render(): JSX.Element {
    return (
      <main>
        <Section layout="centered">
          <Intro />
          <Divider />

          <Projects />
          <Divider />

          <SocialLinks />
        </Section>

        {/* <p>Current status</p>
        <p>Building the next generation british gas app</p> */}
        {/* <ContractTimer /> */}
        {/* This will be situational */}
        {/* <p> looking for: </p> */}

        {/* How to contact me */}
        {/* <p>Contact details</p> */}

        {/* <p>Project showcase</p>
        <ul>
          {projects.map((project, index) => {
            return <li key={index}>{project.name}</li>;
          })}
        </ul>

        <p>worked with</p>
        <ul>
          {workedWith.map((company, index) => {
            return <li key={index}>{company.name}</li>;
          })}
        </ul> */}
      </main>
    );
  }
}

// Exports =========================================================
// -----------------------------------------------------------------
export default App;

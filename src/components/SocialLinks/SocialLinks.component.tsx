/*
  | SocialLinks Component ============================================
  ------------------------------------------------------------------
  | Component for rendering a SocialLinks.
*/

// Imports =========================================================
// -----------------------------------------------------------------
// Base Imports
import * as React from 'react';
import { Icon } from '../../components';

// Interfaces ======================================================
// -----------------------------------------------------------------
interface State {}
interface Props {}

// React Component Class ===========================================
// -----------------------------------------------------------------
class SocialLinks extends React.Component<Props, State> {
  // Class constructor
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="SocialLinks">
        <a
          href="https://www.linkedin.com/in/jonjoe/"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="linkedin" />
        </a>

        <a
          href="https://twitter.com/_jonjoe"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="twitter" />
        </a>

        <a
          href="https://github.com/jonjoe"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="github" />
        </a>

        <a
          href="mailto:me@jonjoe.io"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="envelope" />
        </a>

        <a
          href="https://codepen.io/jonjoe/"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="codepen" />
        </a>

        <a
          href="https://dribbble.com/jonjoe"
          target="blank"
          className="SocialLinks_Link"
        >
          <Icon name="dribbble" />
        </a>
      </div>
    );
  }
}

// Styles ==========================================================
// -----------------------------------------------------------------
import './SocialLinks.css';

// Exports =========================================================
// -----------------------------------------------------------------
export default SocialLinks;

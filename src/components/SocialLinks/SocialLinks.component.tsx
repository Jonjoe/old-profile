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
        <a className="SocialLinks_Link">
          <Icon name="linkedin" />
        </a>

        <a className="SocialLinks_Link">
          <Icon name="twitter" />
        </a>

        <a className="SocialLinks_Link">
          <Icon name="github" />
        </a>

        <a className="SocialLinks_Link">
          <Icon name="envelope" />
        </a>

        <a className="SocialLinks_Link">
          <Icon name="phone" />
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

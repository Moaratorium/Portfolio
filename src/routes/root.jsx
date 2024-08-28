import {Outlet, Link} from "react-router-dom";

export default function Root() {
    return (
        <div id='parent'>
        <div id="sidebar">
          <h1>Portfolio Directory</h1>
          <nav>
            <ul>
              <li>
                <Link to={'pdf-view'}>Resume</Link>
              </li>
              <li>
                <Link to={`placeholder`}>Substack</Link>
              </li>
              <li>
                <Link to={'placeholder'}>GitHub</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id='detail'>
            <Outlet />
        </div>
    </div>
    );
  }
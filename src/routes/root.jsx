import {Outlet, Link} from "react-router-dom";

export default function Root() {
    return (
        <div id='parent'>
        <div id="sidebar">
          <h1>Portfolio Directory</h1>
          <nav>
            <ul>
              <li>
                <Link to={'about-me'}>About Me</Link>
              </li>
            <li>
                <Link to={import.meta.env.VITE_github}>GitHub</Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_blog}>Blog</Link>
              </li>
              <li>
              <Link to={'pdf-view'}>Resume</Link>
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
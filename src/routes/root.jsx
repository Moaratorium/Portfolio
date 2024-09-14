import {Outlet, Link} from "react-router-dom";
import { ThemeToggle } from "../../components/theme-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePen, faBook, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"

export default function Root() {
    return (
        <div id='parent'>
        <div id="sidebar">
          <div id="sidebar-head">
          <h1 className="center-align">{import.meta.env.VITE_name}</h1>
          <h2 className="center-align">{import.meta.env.VITE_title}</h2>
          <p>{import.meta.env.VITE_name_caption}</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={'about'}><FontAwesomeIcon icon={faBook} /> About</Link>
              </li>
            <li>
                <Link to={import.meta.env.VITE_github}><FontAwesomeIcon icon={faSquareGithub} /> GitHub</Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_blog}><FontAwesomeIcon icon={faSquarePen} /> {import.meta.env.VITE_blog_name}</Link>
              </li>
              <li>
              <Link to={'pdf-view'}><FontAwesomeIcon icon={faArrowTrendUp} /> Full Resume</Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        <div id='detail'>
            <Outlet />
        </div>
    </div>
    );
  }

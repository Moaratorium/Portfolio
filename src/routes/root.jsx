import { Outlet, Link } from "react-router-dom";
import { ThemeToggle } from "../../components/theme-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePen, faBook, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import config from '../../config.json';

export default function Root() {
    return (
        <div id='parent'>
        <div id="sidebar">
          <div id="sidebar-head">
          <h1 id="name-plate" className="center-align">{config.datastore.name}</h1>
          <h2 id="title-plate" className="center-align">{config.datastore.title}</h2>
          <p id="sidebar-caption">{config.datastore.nameCaption}</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={'about'}><FontAwesomeIcon icon={faBook} /> About</Link>
              </li>
            <li>
                <Link to={config.datastore.githubLink}><FontAwesomeIcon icon={faSquareGithub} /> GitHub</Link>
              </li>
              <li>
                <Link to={config.datastore.blogLink}><FontAwesomeIcon icon={faSquarePen} /> {config.datastore.blogName}</Link>
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

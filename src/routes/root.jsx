import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';

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
                <Link to={'about'}>About</Link>
              </li>
            <li>
                <Link to={import.meta.env.VITE_github}>GitHub</Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_blog}>{import.meta.env.VITE_blog_name}</Link>
              </li>
              <li>
              <Link to={'pdf-view'}>Full Resume</Link>
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

import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';

export default function Root() {
    return (
        <div id='parent'>
          
        <div id="sidebar">
          <h1>Directory</h1>
          <nav>
            <ul>
              <li>
                <Link to={'about'}>About</Link>
              </li>
            <li>
                <Link to={import.meta.env.VITE_github}>GitHub</Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_blog}>Blog</Link>
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

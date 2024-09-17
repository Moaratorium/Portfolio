import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { getTheme } from '../src/main';

export function ThemeToggle() {
    getTheme();
    const currentTheme = localStorage.getItem('theme');
    let checker = false;
    if (currentTheme === 'dark'){
        checker = false;
    }
    if (currentTheme === 'light'){
        checker = true;
    }
    const onChangeAction = () => {
        if (localStorage.getItem('theme') == 'dark') {
            localStorage.setItem('theme', 'light')
            console.log('test light')
        } else if (localStorage.getItem('theme')== 'light'){
            localStorage.setItem('theme', 'dark')
            console.log('test dark')
        }
        window.location.reload();
    }
    return (
        <div id="theme-toggle">
        <input type="checkbox" className="checkbox" id="checkbox"  defaultChecked={checker} onChange={onChangeAction}></input>
          <label htmlFor="checkbox" className="checkbox-label">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
          <span className="cover"></span>
        </label>
        </div>
    )
}

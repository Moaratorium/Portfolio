import { TagMaker } from "./tag-maker";
import config from '../config.json';

export function ProjectList() {
    const projectList = config.datastore.projects;
    return (
        projectList.map(item => {
            return (
                <div key={item.id} id={item.id}>
                    <h2 className="project-header">{item.name}<br></br><div className="project-subheader">{item.role}, {item.time}</div></h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    <div className="tag-holder">
                    <TagMaker tags={item.tagList}/>
                    </div>
                </div>
            )
        })
    )
}

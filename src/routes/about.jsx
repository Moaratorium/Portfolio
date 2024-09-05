export default function About() {
    const blurb = {
        text: `${import.meta.env.VITE_aboutme}`,
        name: `${import.meta.env.VITE_name}`
    };
    return (
        <div id="about-container">
        <div id="aboutme-text">
            <h1>About Me:</h1>
            <h2>{blurb.text}</h2>
        </div>
        <div id="work-history">
            <h1>My Projects</h1>
        </div>
        </div>
    )
};

export default function AboutMe() {
    const blurb = {
        text: `${import.meta.env.VITE_aboutme}`,
        name: `${import.meta.env.VITE_name}`
    };
    return (
        <div id="aboutme-text">
            <h1>About me:</h1>
            <h2>{blurb.text}</h2>
        </div>
    )
};

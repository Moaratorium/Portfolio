import config from '../../config.json';

export default function PDFView() {
    return (
        <div id="pdfframe">
            <h1>{config.database.name}'s Resume:</h1>
            <iframe src={config.database.pdfLink} title="environmentPDF" id="pdf-frame"></iframe>
        </div>
    )
};

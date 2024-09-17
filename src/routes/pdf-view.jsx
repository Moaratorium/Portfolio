import config from '../../config.json';

export default function PDFView() {
    return (
        <div id="pdfframe">
            <h1>{config.datastore.name}'s Resume:</h1>
            <iframe src={config.datastore.pdfLink} title="environmentPDF" id="pdf-frame"></iframe>
        </div>
    )
};

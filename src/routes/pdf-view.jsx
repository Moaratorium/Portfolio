import config from '../../config.json';

export default function PDFView() {
    return (
        <div id="pdfframe">
            <iframe src={config.datastore.pdfLink} title="environmentPDF" id="pdf-frame" style={{height: "70vh"}}></iframe>
        </div>
    )
};

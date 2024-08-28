import { Form } from "react-router-dom";

export default function PDFView() {
    const pdf = {
        location: "some uri"
    };
    return (
        <div id="pdfframe">
            <h1>this is a test: {pdf.location}</h1>
        </div>
    )
};

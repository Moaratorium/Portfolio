export default function PDFView() {
    const pdf = {
        location: `${import.meta.env.VITE_pdf_target}`,
        name: `${import.meta.env.VITE_name}`
    };
    return (
        <div id="pdfframe">
            <h1>{pdf.name}'s Resume:</h1>
            <iframe src={pdf.location} title="environmentPDF" id="pdf-frame"></iframe>
        </div>
    )
};

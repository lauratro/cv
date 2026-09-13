import { FaFilePdf } from "react-icons/fa6";

export const PdfVersions = () => {
  return (
    <div className="social-row my-2">
      <div className="social-items mr-4">
        <a
          href="/Laura-Tronchin-CV-ATS-EN.pdf"
          download="Laura-Tronchin-CV-EN.pdf"
        >
          <div className="social-item">
            <FaFilePdf className="social-icon" />
            <p className="m-0 p-0">pdf.en</p>
          </div>
        </a>
      </div>

      <div className="social-items">
        <a
          href="/Laura-Tronchin-Lebenslauf-ATS-DE.pdf"
          download="Laura-Tronchin-Lebenslauf-DE.pdf"
        >
          <div className="social-item">
            <FaFilePdf className="social-icon" />
            <p className="m-0 p-0">pdf.de</p>
          </div>
        </a>
      </div>
    </div>
  );
};

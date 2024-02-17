import React, { useRef } from "react";
import html2canvas from "html2canvas";
import img from "./logo.png";

function App() {
  const htmlContentRef = useRef(null);

  const handleDownloadClick = () => {
    html2canvas(htmlContentRef.current, {
      scale: 10, backgroundColor: null // Fixed scale factor to maintain consistent resolution
    }).then((canvas) => {
      const imageData = canvas.toDataURL('image/jpeg');
      const newData = imageData.replace(/^data:image\/jpeg/, 'data:application/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('download', 'image.jpg');
      downloadLink.setAttribute('href', newData);
      downloadLink.click();
    });
  };

  return (
    <div>
      <div
        ref={htmlContentRef}
        style={{
          background: "rgb(230, 173, 173)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
          height: "200px",
        }}
      >
        <img style={{width: '20px', height: '20px'}} src={img} />
        <h1>{text}</h1>
      </div>
      <button onClick={handleDownloadClick}>Download</button>
      <input type="text" />
      <button>ok</button>
    </div>
  );
}

export default App;

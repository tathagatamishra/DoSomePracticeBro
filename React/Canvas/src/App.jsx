import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import img2 from './1763.jpg'

function App() {
  const htmlContentRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = () => {
    html2canvas(htmlContentRef.current, {
      scale: 10,
      backgroundColor: null,
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
        <img src={img2} style={{
          background: "rgb(230, 173, 173)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
          height: "200px",
          zIndex: '0'
        }} />
        {imageData && <img style={{ width: '48px', height: '48px', zIndex: '1', position: 'absolute' }} src={imageData} alt="Uploaded" />}
        <h1>gg</h1>
      </div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleDownloadClick}>Download</button>
    </div>
  );
}

export default App;

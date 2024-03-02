const [cardUrl, setCardUrl] = useState("");
const [loading, setLoading] = useState(false);

const elementToCaptureRef = useRef(null);

const convertToPng = () => {
  const htmlContent = elementToCaptureRef.current;

  if (htmlContent) {
    html2canvas(htmlContent, {
      scale: 10,
      backgroundColor: null,
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        // Convert the canvas to a Blob
        if (blob) {
          const uploadCardToFirebase = async (blob) => {
            setLoading(true);
            const imageName = "customized-image.png"; // Set a name for your image
            const imageRef = ref(storage, `/customised-qviq-cards/images/${imageName}`);
            
            uploadBytes(imageRef, blob)
              .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                  .then((downloadURL) => {
                    // Once image is uploaded, get the download URL
                    setCardUrl(downloadURL);
                    setCustomization({ ...customization, customCard: downloadURL });
                    setLoading(false);
                  })
                  .catch((err) => {
                    console.error("Error getting download URL from Firebase", err);
                    setLoading(false);
                  });
              })
              .catch((err) => {
                console.error("Error uploading image to Firebase Storage", err);
                setLoading(false);
              });
          };
          uploadCardToFirebase(blob);
        }
      });
    });
  }
};

// App.js
import React, { useState } from 'react';
import ModelViewer from './ModelViewer';

const App = () => {
  const [modelPath, setModelPath] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setModelPath(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>3D GLB Model Viewer</h1>
      <input type="file" accept=".glb" onChange={handleFileChange} />
      {modelPath && <ModelViewer modelPath={modelPath} />}
    </div>
  );
};

export default App;

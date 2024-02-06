// ModelViewer.js
import React, { useRef, useState ,Suspense} from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { Environment } from '@react-three/drei'

import Model from './Model'
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ModelViewer = ({ modelPath }) => {
  //const modelRef = useRef();
  //const [modelInfo, setModelInfo] = useState(null);

  // Load the 3D model using GLTFLoader
  //const { scene } = useLoader(GLTFLoader, modelPath);

  // Extract materials and calculate size
  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas>
        <Suspense fallback={null}>
          <Model path={modelPath}/>
          <Environment preset="sunset" background />
          <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />

        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;

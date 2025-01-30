"use client";

import { useState } from "react";

export default function AIModelBuildPage() {
  const [modelName, setModelName] = useState("");
  const [dataset, setDataset] = useState<File | null>(null);
  const [trainingStatus, setTrainingStatus] = useState("Not Started");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDataset(event.target.files[0]);
    }
  };

  const startTraining = () => {
    if (!modelName || !dataset) {
      alert("Please provide a model name and dataset file.");
      return;
    }
    setTrainingStatus("Training in Progress...");
    setTimeout(() => {
      setTrainingStatus("Training Completed!");
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">AI Model Builder</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Model Name"
          className="border p-2 w-full"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input type="file" className="border p-2 w-full" onChange={handleFileChange} />
      </div>
      <button onClick={startTraining} className="bg-blue-500 text-white px-4 py-2 rounded">Start Training</button>
      <div className="mt-4 text-xl font-bold">Status: {trainingStatus}</div>
    </div>
  );
}

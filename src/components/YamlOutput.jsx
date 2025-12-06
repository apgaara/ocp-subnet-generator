import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const YamlOutput = ({ results }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Copy className="text-cyan-400" size={20} />
        YAML Configuration
      </h3>
      {results.map((result, idx) => (
        <div key={idx} className="mb-4">
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 relative border border-blue-400/30 shadow-lg">
            <button
              onClick={() => handleCopy(result.yaml)}
              className="absolute top-4 right-4 text-blue-300 hover:text-cyan-400 transition-colors p-2 bg-slate-800/80 rounded-lg hover:bg-slate-700/80 border border-blue-400/30"
              title="Copy YAML"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
            <pre className="text-blue-100 text-sm font-mono overflow-x-auto pr-12">
              {result.yaml}
            </pre>
          </div>
        </div>
      ))}
    </>
  );
};

export default YamlOutput;
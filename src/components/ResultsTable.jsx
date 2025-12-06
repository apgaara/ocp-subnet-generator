import React, { useState } from 'react';
import { Network, Copy, Check } from 'lucide-react';

const ResultsTable = ({ results }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const allYaml = results.map(r => r.yaml).join('\n\n');
    navigator.clipboard.writeText(allYaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Network className="text-cyan-400" size={24} />
          Generated Subnets
        </h2>
        <button
          onClick={handleCopyAll}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-2 px-5 rounded-xl transition-all shadow-lg shadow-cyan-500/40 flex items-center gap-2 transform hover:scale-105"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          Copy All YAML
        </button>
      </div>
      
      <div className="overflow-x-auto mb-8 rounded-xl border border-blue-400/30">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <th className="px-6 py-4 text-left font-semibold">Cluster #</th>
              <th className="px-6 py-4 text-left font-semibold">Cluster Network</th>
              <th className="px-6 py-4 text-left font-semibold">Host Prefix</th>
              <th className="px-6 py-4 text-left font-semibold">Service Network</th>
              <th className="px-6 py-4 text-left font-semibold">Max Nodes</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900/50 backdrop-blur-sm">
            {results.map((result, idx) => (
              <tr key={idx} className="border-b border-blue-400/20 hover:bg-blue-500/20 transition-colors">
                <td className="px-6 py-4 font-medium text-cyan-400">Cluster {result.number}</td>
                <td className="px-6 py-4 font-mono text-sm text-blue-200">{result.clusterNetwork}</td>
                <td className="px-6 py-4 text-blue-100">{result.hostPrefix}</td>
                <td className="px-6 py-4 font-mono text-sm text-blue-200">{result.serviceNetwork}</td>
                <td className="px-6 py-4 text-white font-bold text-lg">{result.maxNodes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultsTable;
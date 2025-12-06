import React, { useState } from 'react';
import { Network } from 'lucide-react';
import ConfigurationForm from './components/ConfigurationForm';
import CalculationBreakdown from './components/CalculationBreakdown';
import ResultsTable from './components/ResultsTable';
import YamlOutput from './components/YamlOutput';
import { calculateSubnets } from './utils/subnetLogic';
import './App.css';

function App() {
  const [config, setConfig] = useState({
    clusterNetworkBase: '11.12.0.0',
    clusterNetworkMask: '/14',
    hostPrefix: '23',
    serviceNetworkBase: '172.58.0.0',
    serviceNetworkMask: '/17',
    quantity: '1'
  });

  const [results, setResults] = useState([]);
  const [calculations, setCalculations] = useState(null);

  const handleGenerate = () => {
    const { results: newResults, calculations: newCalculations } = calculateSubnets(config);
    setResults(newResults);
    setCalculations(newCalculations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-6 px-4 font-ubuntu">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex items-center justify-center gap-3 mb-3 float-animation">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-glow-strong">
              <Network className="text-white" size={36} />
            </div>
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-2">
            OpenShift Subnet Generator
          </h1>
          <p className="text-blue-200 text-base font-light">
            Calculate and generate subnet configurations for your OpenShift clusters
          </p>
        </div>

        {/* Configuration Panel - Full Width */}
        <div className="mb-6 slide-in-left">
          <ConfigurationForm 
            config={config} 
            setConfig={setConfig} 
            onGenerate={handleGenerate} 
          />
        </div>

        {/* Calculation Breakdown - Below Config */}
        {calculations && (
          <div className="mb-6 slide-in-right">
            <CalculationBreakdown calculations={calculations} />
          </div>
        )}

        {/* Results Section */}
        {results.length > 0 && (
          <div className="fade-in">
            <div className="glass-card rounded-2xl shadow-2xl p-6">
              <ResultsTable results={results} />
              <YamlOutput results={results} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
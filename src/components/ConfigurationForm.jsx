import React from 'react';
import { Calculator } from 'lucide-react';

const ConfigurationForm = ({ config, setConfig, onGenerate }) => {
  const maskOptions = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  return (
    <div className="glass-card glass-card-hover rounded-2xl shadow-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Calculator className="text-cyan-400 icon-bounce-hover" size={20} />
        Network Configuration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Cluster Network Base
          </label>
          <input
            type="text"
            value={config.clusterNetworkBase}
            onChange={(e) => setConfig({...config, clusterNetworkBase: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm placeholder-blue-300/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            placeholder="11.12.0.0"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Cluster Network Mask
          </label>
          <select
            value={config.clusterNetworkMask}
            onChange={(e) => setConfig({...config, clusterNetworkMask: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          >
            {maskOptions.map(mask => (
              <option key={mask} value={`/${mask}`}>/{mask}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Host Prefix
          </label>
          <input
            type="number"
            value={config.hostPrefix}
            onChange={(e) => setConfig({...config, hostPrefix: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm placeholder-blue-300/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            placeholder="23"
            min="8"
            max="32"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Service Network Base
          </label>
          <input
            type="text"
            value={config.serviceNetworkBase}
            onChange={(e) => setConfig({...config, serviceNetworkBase: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm placeholder-blue-300/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            placeholder="172.58.0.0"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Service Network Mask
          </label>
          <select
            value={config.serviceNetworkMask}
            onChange={(e) => setConfig({...config, serviceNetworkMask: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          >
            {maskOptions.map(mask => (
              <option key={mask} value={`/${mask}`}>/{mask}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-blue-200 mb-1.5">
            Number of Clusters
          </label>
          <input
            type="number"
            value={config.quantity}
            onChange={(e) => setConfig({...config, quantity: e.target.value})}
            className="w-full px-3 py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white text-sm placeholder-blue-300/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            placeholder="1"
            min="1"
          />
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="btn-primary w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-glow flex items-center justify-center gap-2"
      >
        <Calculator size={18} />
        Generate Subnets
      </button>
    </div>
  );
};

export default ConfigurationForm;
import React from 'react';
import { Server } from 'lucide-react';

const CalculationBreakdown = ({ calculations }) => {
  return (
    <div className="gradient-border glass-card rounded-2xl shadow-2xl p-6 glow-effect">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Server className="text-cyan-400" size={20} />
        Calculation Breakdown
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-4 border border-blue-400/30">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Total IP Addresses</h4>
          <div className="text-blue-200 text-sm space-y-1 font-mono">
            <div>CIDR: <span className="text-white font-bold">/{calculations.clusterMask}</span></div>
            <div className="text-xs text-blue-300 mt-2">Rumus:</div>
            <div className="pl-2 text-blue-100">Total IP = 2^(32 - {calculations.clusterMask})</div>
            <div className="pl-2 text-blue-100">= 2^{calculations.totalIPsExponent}</div>
            <div className="pl-2 text-cyan-400 font-bold text-base">= {calculations.totalIPs.toLocaleString()} IP</div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-blue-400/30">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">IP per Node</h4>
          <div className="text-blue-200 text-sm space-y-1 font-mono">
            <div>Host Prefix: <span className="text-white font-bold">/{calculations.hostPrefix}</span></div>
            <div className="text-xs text-blue-300 mt-2">Rumus:</div>
            <div className="pl-2 text-blue-100">IP per node = 2^(32 - {calculations.hostPrefix})</div>
            <div className="pl-2 text-blue-100">= 2^{calculations.ipPerNodeExponent}</div>
            <div className="pl-2 text-cyan-400 font-bold text-base">= {calculations.ipPerNode.toLocaleString()} IP/node</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-4 border border-cyan-300/50 shadow-lg shadow-cyan-500/30">
          <h4 className="text-sm font-semibold text-white mb-2">Maximum Nodes</h4>
          <div className="text-white text-sm space-y-1 font-mono">
            <div className="text-xs text-blue-100 mt-2">Rumus:</div>
            <div className="pl-2 text-blue-50 text-xs">Max Nodes = Total IP / IP per node</div>
            <div className="pl-2 text-blue-50 text-xs">= {calculations.totalIPs.toLocaleString()} / {calculations.ipPerNode.toLocaleString()}</div>
            <div className="pl-2 text-3xl font-bold text-base mt-2 drop-shadow-lg">= {calculations.maxNodes.toLocaleString()} Nodes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationBreakdown;
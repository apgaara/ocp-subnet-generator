export const calculateSubnets = (config) => {
  const quantity = parseInt(config.quantity) || 1;
  const hostPrefix = parseInt(config.hostPrefix) || 23;
  const clusterMask = parseInt(config.clusterNetworkMask.replace('/', '')) || 14;

  // Calculate breakdown
  const totalIPs = Math.pow(2, 32 - clusterMask);
  const ipPerNode = Math.pow(2, 32 - hostPrefix);
  const maxNodes = Math.floor(totalIPs / ipPerNode);

  const calculations = {
    clusterMask,
    hostPrefix,
    totalIPs,
    ipPerNode,
    maxNodes,
    totalIPsExponent: 32 - clusterMask,
    ipPerNodeExponent: 32 - hostPrefix
  };

  const results = [];
  
  for (let i = 0; i < quantity; i++) {
    const clusterBase = config.clusterNetworkBase.split('.').map(Number);
    const serviceBase = config.serviceNetworkBase.split('.').map(Number);
    
    // Calculate offset for multiple clusters
    const offset = i * Math.pow(2, 32 - clusterMask);
    
    // Apply offset to cluster network
    let carry = offset;
    for (let j = 3; j >= 0; j--) {
      clusterBase[j] += carry % 256;
      carry = Math.floor((clusterBase[j] + carry) / 256);
      clusterBase[j] = clusterBase[j] % 256;
    }
    
    const clusterNetwork = `${clusterBase.join('.')}${config.clusterNetworkMask}`;
    const serviceNetwork = `${serviceBase.join('.')}${config.serviceNetworkMask}`;

    const yamlOutput = `# Cluster ${i + 1}
spec:
  clusterNetwork:
    - cidr: ${clusterNetwork}
      hostPrefix: ${hostPrefix}
  networkDiagnostics:
    mode: ''
    sourcePlacement: {}
    targetPlacement: {}
  networkType: OVNKubernetes
  serviceNetwork:
    - ${serviceNetwork}`;

    results.push({
      number: i + 1,
      clusterNetwork,
      hostPrefix,
      serviceNetwork,
      maxNodes: maxNodes.toLocaleString(),
      yaml: yamlOutput
    });
  }
  
  return { results, calculations };
};
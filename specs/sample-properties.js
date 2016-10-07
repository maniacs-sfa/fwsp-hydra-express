exports.value = {
  appServiceName: 'test-service',
  jwtPublicCert: '',
  cluster: false,
  maxSockets: 500,
  environment: 'development',
  logPath: '',
  logRequestHeader: true,
  logOutboundRequest: true,
  logglyConfig: {
    token: '{sometoken}',
    subdomain: 'fws'
  },
  hydra: {
    serviceName: 'test-service',
    serviceDescription: 'Raison d\'etre',
    serviceIP: '127.0.0.1',
    servicePort: 0,
    serviceType: 'test',
    redis: {
      url: '127.0.0.1',
      port: 6379
    }
  }
};
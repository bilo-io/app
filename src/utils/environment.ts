import { firebase } from './firebase.config';

export const apiBaseUrls = {
  DEV: 'https://api-octiv-test-dev.vercel.app/api',
  LOCAL: 'http://localhost:8001/api',
  PROD: 'https://api-octiv-test.vercel.app/api',
};

export const isLocal = origin.includes('localhost');
export const isDev = origin.includes('-dev');
export const isStaging = origin.includes('-staging');
export const isProd = origin.includes('https://visionstudio.ai') || origin.includes('vision-studio.vercel.app');

export const detectEnv = (): {
  envName: string,
  firebase: {
    apiKey: string,
    appId: string,
    authDomain: string,
    databaseURL?: string,
    messagingSenderId: string,
    projectId: string,
    storageBucket: string
  },
  serverUrl: string,
  siteUrl: string,
} => {

  if (isLocal) {
    return {
      envName: 'LOCAL (DEV)',
      firebase: firebase.config?.DEV,
      serverUrl: apiBaseUrls.LOCAL,
      siteUrl: 'http://localhost:4001',
    };
  }

  if (isDev) {
    return {
      envName: 'DEV',
      firebase: firebase.config?.DEV,
      serverUrl: apiBaseUrls.DEV,
      siteUrl: 'https://visionstudio-dev.vercel.app',
    };
  }


  if (isProd) {
    return {
      envName: 'PROD',
      firebase: firebase.config?.PROD,
      serverUrl: apiBaseUrls.PROD,
      siteUrl: 'https://visionstudio-prod.vercel.app',
    };
  }

  return {
    envName: 'PROD',
    firebase: firebase.config?.PROD,
    serverUrl: apiBaseUrls.PROD,
    siteUrl: 'https://visionstudio-prod.vercel.app',
  };
};
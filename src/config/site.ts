// src/config/site.ts

// Fallback to empty object if not defined
const _config = typeof (window as any) !== 'undefined' && (window as any).APP_CONFIG ? (window as any).APP_CONFIG : {};

export const APP_ENV = _config.environment === 'github-pages' ? 'github-pages' : 'local';
const defaultVal = APP_ENV === 'local';

// Helper to safely parse string boolean from Vite env
const getEnvBool = (val: string | undefined): boolean | undefined => {
  if (val === 'true') return true;
  if (val === 'false') return false;
  return undefined;
};

export const features = {
  // If the .env file has a VITE_ENABLE_UPLOAD variable, use it. Otherwise fallback to old behavior.
  enableUpload: getEnvBool(import.meta.env.VITE_ENABLE_UPLOAD) ?? (typeof _config.enableUpload === 'boolean' ? _config.enableUpload : defaultVal),
  enableDownloadAllZip: getEnvBool(import.meta.env.VITE_ENABLE_DOWNLOAD_ALL_ZIP) ?? (typeof _config.enableDownloadAllZip === 'boolean' ? _config.enableDownloadAllZip : defaultVal),
  enableDownloadCategoryZip: getEnvBool(import.meta.env.VITE_ENABLE_DOWNLOAD_CATEGORY_ZIP) ?? (typeof _config.enableDownloadCategoryZip === 'boolean' ? _config.enableDownloadCategoryZip : defaultVal),
  enableDownloadIndividualPdf: getEnvBool(import.meta.env.VITE_ENABLE_DOWNLOAD_INDIVIDUAL_PDF) ?? (typeof _config.enableDownloadIndividualPdf === 'boolean' ? _config.enableDownloadIndividualPdf : defaultVal),
};

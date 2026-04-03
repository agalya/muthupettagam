// Fallback to empty object if not defined
const _config = typeof (window as any) !== 'undefined' && (window as any).APP_CONFIG ? (window as any).APP_CONFIG : {};

export const APP_ENV = _config.environment === 'github-pages' ? 'github-pages' : 'local';
const defaultVal = APP_ENV === 'local';

export const features = {
  enableUpload: typeof _config.enableUpload === 'boolean' ? _config.enableUpload : defaultVal,
  enableDownloadAllZip: typeof _config.enableDownloadAllZip === 'boolean' ? _config.enableDownloadAllZip : defaultVal,
  enableDownloadCategoryZip: typeof _config.enableDownloadCategoryZip === 'boolean' ? _config.enableDownloadCategoryZip : defaultVal,
  enableDownloadIndividualPdf: typeof _config.enableDownloadIndividualPdf === 'boolean' ? _config.enableDownloadIndividualPdf : defaultVal,
};

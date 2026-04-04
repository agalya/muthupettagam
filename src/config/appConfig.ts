declare global {
    interface Window {
        APP_CONFIG: {
            environment: string;
            publicPath: string;
            enableUpload: boolean;
            enableDownloadAllZip: boolean;
            enableDownloadCategoryZip: boolean;
            enableDownloadIndividualPdf: boolean;
        };
    }
}

export const appConfig = window.APP_CONFIG || {
    environment: "local",
    publicPath: "/",
    enableUpload: true,
    enableDownloadAllZip: true,
    enableDownloadCategoryZip: true,
    enableDownloadIndividualPdf: true,
};

export const isProduction = appConfig.environment === "production";
export const isLocal = appConfig.environment === "local";

export default appConfig;
/**
 * Get the correct asset URL based on the public path
 * Works on both local development (/) and GitHub Pages (/muthupettagam/)
 */
export const useAssetUrl = (path: string): string => {
    // Get public path from window.APP_CONFIG (set by vite build) or environment variable
    const publicPath = (window as any).APP_CONFIG?.publicPath ||
        import.meta.env.VITE_PUBLIC_PATH ||
        '/muthupettagam/';

    // Remove leading slash from path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Remove trailing slash from publicPath
    const cleanPublicPath = publicPath.endsWith('/') ? publicPath.slice(0, -1) : publicPath;

    // Return full URL
    return `${cleanPublicPath}/${cleanPath}`;
};
export const useAssetUrl = (path: string): string => {
    const publicPath = (window as any).APP_CONFIG?.publicPath ||
        import.meta.env.VITE_PUBLIC_PATH ||
        '/muthupettagam/';

    // Remove leading slash from path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Remove trailing slash from publicPath
    const cleanPublicPath = publicPath.endsWith('/') ? publicPath.slice(0, -1) : publicPath;

    return `${cleanPublicPath}/${cleanPath}`;
};
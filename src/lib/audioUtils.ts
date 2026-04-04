import { useAssetUrl } from "@/hooks/useAssetUrl";

export const getAudioUrl = (audioPath: string | undefined): string | undefined => {
    if (!audioPath) return undefined;
    return useAssetUrl(audioPath);
};
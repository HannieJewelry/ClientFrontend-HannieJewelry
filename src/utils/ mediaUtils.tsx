import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

export const HlsPlayer = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let hls: Hls | null = null;
        const video = videoRef.current;

        if (video && src) {
            if (Hls.isSupported()) {
                hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = src;
            }
        }
        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop={true}
            style={{ width: '100%', height: '100%' }}
            poster=""
        />
    );
};

export function normalizeImages(images: any[]) {
    if (!Array.isArray(images)) return [];

    const firstImage = images.find(img =>
        img.src &&
        !img.src.includes("video/upload") &&
        /\.(jpg|jpeg|png|webp)$/i.test(img.src)
    );

    return images.map(img => {
        const isVideo = img.src?.includes("res.cloudinary.com/dvtcwbbck/video/upload");
        let src = img.src;

        if (isVideo && src.endsWith('.mp4')) {
            src = src.replace(/\.mp4$/i, '.m3u8');
        }

        let thumb = img.thumb || img.src;
        if (isVideo && firstImage) {
            thumb = firstImage.src;
        }

        return {
            type: isVideo ? "video" : "image",
            src,
            thumb,
        };
    });
}

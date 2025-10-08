// Shaka Player video component
import {useEffect, useRef} from "react";
// @ts-ignore
import shaka from "shaka-player";

const ShakaPlayer = ({
                         src,
                         autoPlay = true,
                         muted = true,
                         loop = true,
                         poster = "",
                         drmConfig = null,
                     }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !src) return;

        // Cleanup player if existed
        if (playerRef.current) {
            playerRef.current.destroy();
        }

        // Tạo instance Shaka
        const player = new shaka.Player(video);
        playerRef.current = player;

        // DRM nếu cần
        if (drmConfig) {
            player.configure({ drm: drmConfig });
        }

        player.addEventListener('error', (e) => {
            console.error('Shaka Player error', e.detail);
        });

        player.load(src)
            .then(() => {
                if (autoPlay) video.play().catch(() => {});
                video.muted = muted;
                video.loop = loop;
            })
            .catch((e) => {
                console.error('Error loading video', e);
            });

        return () => {
            player.destroy();
        };
    }, [src, drmConfig, autoPlay, muted, loop]);

    return (
        <video
            ref={videoRef}
            poster={poster}
            style={{ width: '100%', height: '100%' }}
            // controls
            autoPlay={true}
            loop={true}
            // playsInline
        />
    );
};
export default ShakaPlayer;
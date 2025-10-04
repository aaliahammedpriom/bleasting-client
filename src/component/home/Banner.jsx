import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Download, PictureInPicture2 } from "lucide-react";

const Banner = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    // Play / Pause
    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // Mute / Unmute
    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    // Download video
    const handleDownload = () => {
        if (!videoRef.current) return;

        const link = document.createElement("a");
        link.href = videoRef.current.src;
        link.download = "video.mp4";
        link.click();
    };

    // Fullscreen
    const handleFullscreen = () => {
        if (!videoRef.current) return;

        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            videoRef.current.msRequestFullscreen();
        }
    };

    // Picture-in-Picture
    const handlePictureInPicture = async () => {
        if (!videoRef.current) return;

        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await videoRef.current.requestPictureInPicture();
            }
        } catch (error) {
            console.error("Picture-in-Picture failed:", error);
        }
    };

    // Update current time and duration
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleLoadedMetadata = () => setDuration(video.duration);

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    // Helper: format time in mm:ss
    const formatTime = (time) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="pb-8">
            <div className="max-md:hidden relative w-[95vw] h-[600px] m-auto bg-black flex items-center justify-center shadow-lg overflow-hidden group">
                {/* Video */}
                {/* <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="https://video.wixstatic.com/video/6f7529_6303dda2be314e8a87216b848b76b9db/1080p/mp4/file.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                /> */}
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/FSZACuKZQwo?autoplay=1&mute=1&si=NPf9mGmlKMSvfNS5"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-between hidden group-hover:flex">
                    {/* Top Section */}
                    <div className="flex items-center justify-between p-4">
                        <span className="text-white font-semibold text-lg"></span>
                    </div>

                    {/* Center Play Button */}
                    <div className="flex justify-center items-center">
                        <button
                            onClick={togglePlay}
                            className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/40 text-white flex justify-center items-center"
                        >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                        </button>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex items-center justify-between px-4 py-3 bg-black/30">
                        {/* Left Controls */}
                        <div className="flex items-center gap-3 text-white">
                            <button onClick={togglePlay} className="text-white">
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </button>
                            <button onClick={toggleMute} className="text-white">
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <span className="text-sm">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-3 text-white">
                            <button onClick={handlePictureInPicture} className="text-white">
                                <PictureInPicture2 size={20} />
                            </button>
                            <button onClick={handleDownload} className="text-white">
                                <Download size={20} />
                            </button>
                            <button onClick={handleFullscreen} className="text-white">
                                <Maximize size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Fallback Image */}
            <div className="md:hidden">
                <img
                    src="https://static.wixstatic.com/media/2c0265_623f17f88f9c4f6998eb3a2dbbd08a26~mv2.jpg/v1/crop/x_103,y_596,w_2696,h_3186/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4172.jpg"
                    alt=""
                />
            </div>
        </div>

    );
};

export default Banner;

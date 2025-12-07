import { Youtube, ExternalLink, YoutubeIcon } from "lucide-react";
import { useState } from "react";

const MiscModal = () => {
  const [videoId, setVideoId] = useState("buoccfnBaPI"); // Replace with your video ID

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl font-bold text-gray-800">some memories</h2>
        </div>
      </div>

      {/* Video Player */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative w-full pt-[56.25%] bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <YoutubeIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  Currently playing video ID:{" "}
                  <span className="font-mono text-gray-800">{videoId}</span>
                </p>

                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-500 hover:text-red-600 underline flex items-center gap-1"
                >
                  watch on youtube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscModal;

import cv from "../assets/Bhavin_Patel Resume.pdf"

const DownloadButton = () => {
  return (
     <a href={cv} download>
    <button className="relative z-10 cursor-pointer rounded-md text-white font-semibold text-[15px] group hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] transition-all duration-500">
      {/* Docs Section */}
      <div className="flex items-center justify-between gap-2.5 h-15 px-3 rounded-md bg-cyan-500 border border-white/10 transition-all duration-500">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>

        <span>Download CV</span>
      </div>

      {/* Download Animation */}
      <div className="absolute inset-0 flex items-center justify-center max-w-[90%] mx-auto -z-10 rounded-md bg-green-500 border border-green-500/20 translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out">
        <svg
          className="animate-bounce"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
    </button>
    </a>
  );
};

export default DownloadButton;
import React, { useState } from 'react';
import { X, Download, FileCode, Folder, Check, Terminal, Package } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ProjectDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDownloadModal: React.FC<ProjectDownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  if (!isOpen) return null;

  const projectFiles = [
    { name: 'src/config/business.ts', desc: 'Central office location, Google Maps embed & contact configuration' },
    { name: 'src/data/spaData.ts', desc: 'Nandini Spa therapies catalog, prices (₹), durations, gallery & reviews' },
    { name: 'src/components/Header.tsx', desc: 'Top bar navigation with Nandini eucalyptus sage branding & logo' },
    { name: 'src/components/Footer.tsx', desc: 'Warm espresso footer with Bhopal local context, hours & brand details' },
    { name: 'src/components/Logo.tsx', desc: 'Scalable vector branding emblem and typography component' },
    { name: 'src/components/GoogleMapsEmbed.tsx', desc: 'Official Google Maps embed linked to centralized config' },
    { name: 'src/components/BookingModal.tsx', desc: 'Concierge appointment reservation form with validation' },
    { name: 'src/components/ServiceDetailModal.tsx', desc: 'Treatment breakdown with step-by-step protocols' },
    { name: 'src/components/ConfigEditorDrawer.tsx', desc: 'Live admin address/maps editor & code snippet generator' },
    { name: 'src/pages/HomePage.tsx', desc: 'Warm hero banner, 4-pillar trust strip, services grid & map' },
    { name: 'src/pages/AboutPage.tsx', desc: 'Nandini story, mindful restoration, hygiene & therapist standards' },
    { name: 'src/pages/ServicesPage.tsx', desc: 'Filtered treatments menu, search bar, prices & FAQs' },
    { name: 'src/pages/GalleryPage.tsx', desc: 'Interactive ambiance gallery with Lightbox zoom' },
    { name: 'src/pages/ContactPage.tsx', desc: 'Contact details, message inquiry form & map' },
    { name: 'src/App.tsx', desc: 'Main React Router routing and application layout' },
    { name: 'src/index.css', desc: 'Tailwind CSS theme with Warm Ivory & Eucalyptus Sage palette' },
    { name: 'package.json', desc: 'Project dependencies and build scripts' },
    { name: 'index.html', desc: 'HTML entry point with SEO metadata and Google Fonts' },
  ];

  const handleDownload = () => {
    setDownloadInitiated(true);
    const link = document.createElement('a');
    link.href = `/${BUSINESS_CONFIG.zipFileName}`;
    link.download = BUSINESS_CONFIG.zipFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadInitiated(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#201C17]/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E3DACD] overflow-hidden my-auto sm:my-8 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header — Warm Espresso (#201C17) */}
        <div className="bg-[#201C17] text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-[#332D26] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-[#2E2822] flex items-center justify-center shrink-0">
              <Package className="w-4 h-4 text-[#7A9988]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-medium text-[#FAF7F2] truncate">
                Download {BUSINESS_CONFIG.brandName} Codebase
              </h3>
              <p className="text-[11px] sm:text-xs text-[#7A9988] truncate">
                React 19 + Vite + Tailwind CSS v4 · Warm Ivory & Eucalyptus Sage
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close download modal"
            className="p-1.5 text-[#C5BBAF] hover:text-white rounded-md hover:bg-[#2E2822] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto space-y-5 sm:space-y-6 bg-[#FAF7F2]">
          
          {/* Main Download Callout */}
          <div className="p-5 bg-white rounded-xl border border-[#E3DACD] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-medium text-[#28231D]">
                {BUSINESS_CONFIG.zipFileName} (Full Source Bundle)
              </h4>
              <p className="text-xs text-[#685F53] mt-1">
                Complete, clean project files, configuration, styling, and assets.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="px-5 py-3 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
            >
              {downloadInitiated ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download ZIP</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Start Instructions */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#685F53] mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#446353]" />
              <span>How to run on your machine:</span>
            </h5>
            <div className="bg-[#201C17] text-[#FAF7F2] p-4 rounded-lg font-mono text-xs space-y-2 border border-[#3E362E]">
              <div className="text-[#7A9988]"># 1. Unzip the downloaded file:</div>
              <div>unzip {BUSINESS_CONFIG.zipFileName} -d nandini-spa && cd nandini-spa</div>
              <div className="text-[#7A9988] pt-1"># 2. Install dependencies:</div>
              <div>npm install</div>
              <div className="text-[#7A9988] pt-1"># 3. Start local development server:</div>
              <div className="text-[#7A9988]">npm run dev</div>
            </div>
          </div>

          {/* Project File Tree Inventory */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#685F53] mb-2 flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5 text-[#446353]" />
              <span>Included Project Files:</span>
            </h5>
            <div className="border border-[#E3DACD] bg-white rounded-lg overflow-hidden divide-y divide-[#F3EFE6] max-h-56 overflow-y-auto">
              {projectFiles.map((file, i) => (
                <div key={i} className="p-2.5 flex items-start gap-2.5 hover:bg-[#F3EFE6] transition-colors text-xs">
                  <FileCode className="w-4 h-4 text-[#446353] shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono font-medium text-[#28231D] truncate">{file.name}</div>
                    <div className="text-[11px] text-[#685F53] truncate">{file.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F3EFE6] border-t border-[#E3DACD] flex items-center justify-between">
          <span className="text-[11px] text-[#685F53]">
            {BUSINESS_CONFIG.brandName} · {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-[#E3DACD] text-[#28231D] text-xs font-medium rounded-sm transition-colors cursor-pointer border border-[#E3DACD]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

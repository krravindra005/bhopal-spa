import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Check, Copy, Settings, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface GoogleMapsEmbedProps {
  heightClass?: string;
  showCardOverlay?: boolean;
  onOpenConfig?: () => void;
}

export const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
  heightClass = 'h-[460px]',
  showCardOverlay = true,
  onOpenConfig,
}) => {
  const [copied, setCopied] = useState(false);

  const displayAddress = BUSINESS_CONFIG.isExactStreetAddressConfigured
    ? `${BUSINESS_CONFIG.streetAddressPlaceholder}, ${BUSINESS_CONFIG.city}, ${BUSINESS_CONFIG.state}`
    : `${BUSINESS_CONFIG.city}, ${BUSINESS_CONFIG.state}, ${BUSINESS_CONFIG.country} (${BUSINESS_CONFIG.streetAddressPlaceholder})`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(displayAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-[#E3DACD] shadow-xs bg-[#F3EFE6]">
      {/* Google Maps Official Responsive Embed */}
      <div className={`w-full ${heightClass} relative z-0`}>
        <iframe
          title="AuraNest Wellness Sanctuary Official Location Map"
          src={BUSINESS_CONFIG.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter saturate-[0.98] contrast-[1.01]"
        />
      </div>

      {/* Overlay Badge Bar / Controls */}
      {showCardOverlay && (
        <div className="absolute top-4 left-4 right-4 sm:right-auto z-10 max-w-md">
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md border border-[#E3DACD] text-[#28231D]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-full bg-[#E7EFEA] text-[#446353] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#28231D] text-base leading-snug">
                    {BUSINESS_CONFIG.brandName}
                  </h4>
                  <p className="text-xs text-[#685F53] mt-0.5">
                    {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}
                  </p>
                  <p className="text-[11px] text-[#685F53] mt-1 leading-normal">
                    {BUSINESS_CONFIG.streetAddressPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-3.5 pt-3 border-t border-[#F3EFE6] flex flex-wrap items-center gap-2">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-medium rounded-sm transition-colors shadow-xs"
              >
                <Navigation className="w-3 h-3" />
                <span>Get Directions</span>
                <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-80" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F3EFE6] hover:bg-[#E3DACD] text-[#28231D] text-xs font-medium rounded-sm transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-[#446353]" />}
                <span>{copied ? 'Copied' : 'Copy Address'}</span>
              </button>

              {onOpenConfig && (
                <button
                  onClick={onOpenConfig}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white hover:bg-[#F3EFE6] text-[#685F53] hover:text-[#28231D] text-xs rounded-sm transition-colors ml-auto cursor-pointer border border-[#E3DACD]"
                  title="Update address and maps in config"
                >
                  <Settings className="w-3 h-3 text-[#446353]" />
                  <span className="hidden sm:inline">Edit Location</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Centralized config indicator at bottom */}
      <div className="bg-[#F3EFE6] border-t border-[#E3DACD] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#28231D]">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#446353] shrink-0" />
          <span>
            Office location coordinates: {BUSINESS_CONFIG.maps.latitude.toFixed(4)}° N, {BUSINESS_CONFIG.maps.longitude.toFixed(4)}° E ({BUSINESS_CONFIG.city})
          </span>
        </div>
        <div className="text-[11px] text-[#685F53]">
          Editable via <code className="bg-white px-1.5 py-0.5 rounded text-[#28231D] border border-[#E3DACD]">src/config/business.ts</code>
        </div>
      </div>
    </div>
  );
};

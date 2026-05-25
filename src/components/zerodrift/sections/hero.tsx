import { Play } from "lucide-react";

import { ButtonLink } from "../button-link";
import { ZERODRIFT_ASSET_PATH } from "../constants";
import { SectionFrame } from "../section-frame";

export function Hero() {
  return (
    <SectionFrame>
      <div className="relative min-h-[812px] overflow-hidden rounded-[7px] bg-[#f65b35] p-8 text-white md:p-12">
        <video
          aria-hidden
          autoPlay
          className="absolute inset-0 size-full object-cover"
          loop
          muted
          playsInline
          poster={`${ZERODRIFT_ASSET_PATH}26-6983902256e7c4da0df2ff82_orange-gradient_poster.0000000.jpg`}
        >
          <source
            src={`${ZERODRIFT_ASSET_PATH}21-6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 flex min-h-[746px] flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[15px] font-bold uppercase">
              <span>Backed by</span>
              <span className="text-[22px] font-bold leading-none">a16z</span>
              <span className="h-7 w-px rotate-[18deg] bg-white" />
              <span className="text-[26px] font-bold italic leading-none">speedrun</span>
            </div>
            <h1 className="max-w-[820px] text-[54px] font-light leading-[0.96] tracking-normal md:text-[92px]">
              The AI Compliance Firewall
            </h1>
            <div className="mt-12">
              <ButtonLink>Get Demo</ButtonLink>
            </div>
          </div>
          <div className="grid items-end gap-8 md:grid-cols-[1fr_360px]">
            <div>
              <p className="max-w-full text-[17px] font-medium leading-[1.42] md:max-w-[570px] md:text-[20px]">
                ZeroDrift enforces SEC, FINRA, and firm policies on every message in real-time. Your team gets instant feedback. Issues get fixed at the source. Everyone moves faster.
              </p>
              <div className="mt-8 flex items-center gap-5 text-[13px] text-white/90">
                <span className="zd-seal">AICPA</span>
                <span className="zd-seal">ISO 27001</span>
                <span className="zd-stars">GDPR</span>
              </div>
            </div>
            <div className="relative h-[176px] overflow-hidden rounded-[10px] bg-black/30 shadow-2xl">
              <video autoPlay className="size-full object-cover opacity-80" loop muted playsInline>
                <source
                  src={`${ZERODRIFT_ASSET_PATH}22-1080--51892-zerodrift-hero-90s-16x9-10976572661-v3_2_v10--1080p-.mp4`}
                  type="video/mp4"
                />
              </video>
              <span className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111]">
                <Play className="ml-1 size-6 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

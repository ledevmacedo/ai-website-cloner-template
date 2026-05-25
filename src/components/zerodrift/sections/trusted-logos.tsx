import { trustedLogos } from "../data";

export function TrustedLogos() {
  return (
    <section className="py-24">
      <p className="mb-10 text-center font-mono text-[18px] text-[#101014]">
        Built by AI leaders from
      </p>
      <div className="mx-auto flex max-w-[1360px] gap-5 overflow-hidden px-5">
        {[...trustedLogos, ...trustedLogos].map((logo, index) => (
          <div
            className="flex h-[94px] min-w-[236px] items-center justify-center rounded-[8px] bg-white"
            key={`${logo.alt}-${index}`}
          >
            <span className="text-center text-[28px] font-bold leading-none text-[#171719]">
              {logo.alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SectionFrame } from "../section-frame";

export function SeeItWork() {
  return (
    <SectionFrame className="mt-8">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12 text-center">
        <h2 className="text-[38px] font-light leading-none">See It Work</h2>
        <p className="mx-auto mt-3 max-w-[460px] text-[13px] leading-[1.4] text-[#777b82]">
          Watch ZeroDrift catch a violation before it goes out. The sender fixes it instantly. Compliance never has to chase it down. This is how it should work.
        </p>
        <div className="relative mx-auto mt-10 aspect-video w-full max-w-[640px] rounded-[4px] border border-[#e6e6e6] bg-white shadow-[0_10px_30px_rgba(20,20,20,0.12)]" />
        <button
          className="mt-8 inline-flex h-9 items-center rounded-[6px] border border-[#171719] px-5 text-[10px] font-bold uppercase"
          type="button"
        >
          Pause
        </button>
      </div>
    </SectionFrame>
  );
}

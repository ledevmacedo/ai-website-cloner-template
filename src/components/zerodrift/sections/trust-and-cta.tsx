import { ZERODRIFT_ASSET_PATH } from "../constants";
import { SectionFrame } from "../section-frame";

export function TrustAndCta() {
  return (
    <>
      <SectionFrame className="mt-8">
        <div className="zd-grid flex min-h-[658px] flex-col items-center justify-center rounded-[7px] bg-white px-8 py-20 text-center">
          <h2 className="max-w-[430px] text-[40px] font-light leading-[1.05]">
            Engineered For Regulated Institutions
          </h2>
          <p className="mt-40 max-w-[440px] text-[14px] leading-[1.5] text-[#747780]">
            Built for firms where the stakes are high. SOC 2 certified. SEC and FINRA rules encoded. Ready for whatever comes next.
          </p>
          <a
            className="mt-7 inline-flex h-9 items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white"
            href="#"
          >
            View Trust Center
          </a>
        </div>
      </SectionFrame>
      <SectionFrame className="mt-8" id="demo">
        <div className="relative overflow-hidden rounded-[7px] bg-[#1343d8] px-8 py-12 text-white md:px-10">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 size-full object-cover"
            loop
            muted
            playsInline
            poster={`${ZERODRIFT_ASSET_PATH}30-69839085edb11a12b2ad6a95_blocker-gradient_poster.0000000.jpg`}
          >
            <source
              src={`${ZERODRIFT_ASSET_PATH}25-69839085edb11a12b2ad6a95_blocker-gradient_mp4.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="relative grid gap-8 md:grid-cols-[1fr_430px]">
            <div>
              <p className="text-[11px] font-bold uppercase">
                30 minutes. Your content. Live results.
              </p>
              <h2 className="mt-5 max-w-[470px] text-[42px] font-light leading-[1.05]">
                See ZeroDrift On Your Communications
              </h2>
              <p className="mt-5 max-w-[530px] text-[15px] font-medium leading-[1.45]">
                Run your real communications through ZeroDrift. Watch issues get caught and fixed at the source. See your team finally unblocked.
              </p>
              <div className="mt-8 flex max-w-[470px] flex-col gap-3 sm:flex-row">
                <input
                  aria-label="Work email"
                  className="h-11 flex-1 rounded-[6px] bg-white px-4 text-[13px] text-[#171719] outline-none"
                  placeholder="Work email"
                />
                <button
                  className="h-11 rounded-[6px] bg-white px-6 text-[11px] font-bold uppercase text-[#171719]"
                  type="button"
                >
                  Book Demo
                </button>
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase">
                30 min - no prep - your data never stored - response in 2 hours
              </p>
            </div>
            <blockquote className="self-center rounded-[8px] bg-white p-8 text-[#171719]">
              <p className="text-[20px] font-light leading-[1.35]">
                {`"Our team moves faster because they know exactly what's compliant. And our compliance team finally focuses on real work, not chasing down emails."`}
              </p>
              <footer className="mt-8 text-[11px] font-bold uppercase text-[#555]">
                Head of Compliance
                <br />
                Large Broker-Dealer
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

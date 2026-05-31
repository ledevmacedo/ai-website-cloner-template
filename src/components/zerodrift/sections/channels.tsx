import { channels } from "../data";
import { SectionFrame } from "../section-frame";

const channelTabs = ["Instituições", "Formandos", "Empresas"];

export function Channels() {
  return (
    <SectionFrame className="mt-8" id="publicos">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[380px] text-[38px] font-light leading-[1.05]">
              Para quem é o Impact Flow
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-[#747780]">
              O Impact Flow conecta perfis diferentes dentro da mesma operação: quem financia, quem coordena, quem forma, quem aprende e quem contrata.
            </p>
            <div className="mt-7 flex gap-3">
              {channelTabs.map((tab) => (
                <button
                  className="h-9 rounded-[6px] border border-[#d9d9d9] px-4 text-[10px] font-bold uppercase"
                  key={tab}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <article className="min-h-[132px] rounded-[8px] bg-[#f5f5f5] p-5" key={channel.title}>
                <div className="mb-5 flex gap-2">
                  {channel.icons.map((icon) => (
                    <span
                      className="inline-flex size-6 items-center justify-center rounded-[4px] bg-white text-[10px] font-bold text-[#2774ee]"
                      key={icon}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
                <h3 className="text-[16px] font-medium">{channel.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.35] text-[#747780]">
                  {channel.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

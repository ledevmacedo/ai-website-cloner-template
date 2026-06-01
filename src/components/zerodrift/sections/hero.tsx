import { ButtonLink } from "../button-link";
import { ZERODRIFT_ASSET_PATH } from "../constants";
import { SectionFrame } from "../section-frame";

export function Hero() {
  return (
    <SectionFrame>
      <div className="relative overflow-hidden rounded-[7px] bg-[#6F5BEF] px-8 py-20 text-white md:px-12 md:py-28">
        <video
          aria-label="Animação de fundo do Impact Flow"
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
        <div className="absolute inset-0 bg-[#6F5BEF] mix-blend-color" />
        <div className="relative z-10 max-w-[880px]">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[13px] font-bold uppercase">
            <span>MVP em validação</span>
            <span className="h-6 w-px rotate-[18deg] bg-white" />
            <span>ATS Social + Perfil de Competências</span>
          </div>
          <h1 className="text-[48px] font-light leading-[0.96] tracking-normal md:text-[92px]">
            Leve formação social da candidatura ao emprego
          </h1>
          <div className="mt-12 flex flex-wrap gap-4">
            <ButtonLink className="bg-white text-[#6F5BEF] hover:bg-white/90">
              Quero validar um piloto
            </ButtonLink>
            <ButtonLink
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
              href="/como-funciona"
              variant="outline"
            >
              Ver como funciona
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

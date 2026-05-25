import { CodePanel } from "../code-panel";
import { SectionFrame } from "../section-frame";

const requestExample = `curl -X POST "api.zerodrift.ai/v1/validate" \\
  -H "Authorization: Bearer zd_key_..." \\
  -d '{
    "text": "Our fund will outperform the market.",
    "document_type": "investor_letter",
    "audience": "retail_US",
    "rules": ["sec","finra"]
  }'`;

const responseExample = `{
  "status": "warning",
  "evidence_id": "ev_8f3k2j",
  "checks": { "passed": 12, "failed": 1 },
  "violations": [{
    "rule": "no_performance_projection",
    "ref": "FINRA 2210(d)(1)(F)",
    "severity": "high"
  }]
}`;

export function ApiInfrastructure() {
  return (
    <SectionFrame className="mt-8">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[380px] text-[38px] font-light leading-[1.05]">
              Build on ZeroDrift Infrastructure
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-[#747780]">
              Add compliance checks to any AI agent, copilot, or internal tool with one API. Every piece of content validated against regulations and firm policies before it reaches users.
            </p>
            <a
              className="mt-7 inline-flex h-9 w-fit items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white"
              href="#"
            >
              Learn More
            </a>
          </div>
          <div className="space-y-5">
            <CodePanel title="Request">{requestExample}</CodePanel>
            <CodePanel title="Response">{responseExample}</CodePanel>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

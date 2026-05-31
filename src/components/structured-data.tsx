import type { Thing, WithContext } from "schema-dts";

export function StructuredData<T extends Thing>({
  data,
}: Readonly<{ data: WithContext<T> }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

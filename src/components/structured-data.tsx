import type { Thing, WithContext } from "schema-dts";

type StructuredDataProps<T extends Thing> = Readonly<{
  data: WithContext<T>;
  id?: string;
}>;

export function StructuredData<T extends Thing>({
  data,
  id,
}: StructuredDataProps<T>) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { Archive } from "../../types";
import archives from "../theArchive.json";
import Image from "next/image";

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const fetchArchive = async () => {
    const { slug }: { slug: number } = await params;
    const archive = archives[slug];
    return archive;
  };
  const archive: Archive = await fetchArchive();
  return (
    <div className="flex flex-col items-center gap-4 bg-base-100 bg-opacity-40 overflow-scroll rounded-xl p-2">
      {archive.image && <Image src={archive.image} alt={archive.title} width={500} height={500} className="rounded-xl" />}
      <h1 className="text-2xl font-bold underline">{archive.title}</h1>
      <div className="m-2 p-2 bg-primary text-primary-content rounded-xl w-fit">
        <p className="m-2 bg-accent rounded-xl p-2 text-accent-content" 
        dangerouslySetInnerHTML={{ __html: archive.text }}
        />
      </div>
      <ul className="m-2 list-disc"> {archive.notes.map((note) => (
        <li key={note} dangerouslySetInnerHTML={{ __html: note }} />
      ))}</ul>
    </div>
  );
}

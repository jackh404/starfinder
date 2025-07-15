import archives from "./theArchive.json";
import ArchiveCard from "../components/archiveCard";
export default function ArchivesPage() {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4 p-8 bg-base-100 bg-opacity-40">
            <h1 className="text-2xl font-bold m-10 mt-0 text-center">Starfinder Archives</h1>
            {archives.map(element => (
                <ArchiveCard key={element.id} {...element} />
            ))}
        </div>
    )
}
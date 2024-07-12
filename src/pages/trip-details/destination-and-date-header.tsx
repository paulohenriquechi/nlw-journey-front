import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { format } from "date-fns";

interface DestinationAndDateHeaderProps {
    destination: string,
    startsAt: string,
    endsAt: string
}

export function DestinationAndDateHeader({
    destination,
    startsAt,
    endsAt
}: DestinationAndDateHeaderProps) {
    const displayedDate = startsAt && endsAt
        ? `${format(startsAt, "d' de 'LLL")} até ${format(endsAt, "d' de 'LLL")}`
        : null


    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className=" text-zinc-100">{destination}</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className=" text-zinc-100">{displayedDate}</span>
                </div>

                <div className='w-px h-6 bg-zinc-800' />
                <Button>
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            </div>
        </div>

    )
}
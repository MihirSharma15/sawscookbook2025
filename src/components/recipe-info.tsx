import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { ArrowUpRight, Clock, ExternalLink, GroupIcon, Link, Users } from "lucide-react"
import { Badge } from "./ui/badge";

export function RecipeDialog() {
    return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="w-full hover:opacity-70 transition-opacity duration-200">
                Open
                <ArrowUpRight />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Curry Chicken Tikka</DialogTitle>
                <DialogDescription className="py-2 space-x-2">
                    <Badge variant="outline">Vegetarian</Badge>
                    <Badge variant="outline">Heart Healthy</Badge>
                    <Badge variant="outline">One Pot</Badge>
                </DialogDescription>
                {/* quick stats */}
                <div className="flex flex-row items-center justify-start min-w-2/5 max-w-fit h-fit rounded-md px-2 space-x-3">
                    <div className="flex flex-row space-x-1 items-center">
                        <Clock size={16}/>
                        <p className="text-sm italic">15 Minutes</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center">
                        <Users size={16} />
                        <p className="text-sm italic">2-3</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center">
                        <ExternalLink size={16} />
                        <a className="text-sm italic" href="https://www.Example.com" target="_blank"
                            rel="noopener noreferrer">
                            Article
                        </a>
                    </div>
                </div>


            </DialogHeader>
        </DialogContent>
    </Dialog>
    );


}
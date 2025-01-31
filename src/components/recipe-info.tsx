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
import { ScrollArea } from "@/components/ui/scroll-area"

export function RecipeDialog() {
    return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="w-full hover:opacity-70 transition-opacity duration-200">
                Open
                <ArrowUpRight />
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-full lg:max-w-fit h-5/6 overflow-auto">
            <ScrollArea className="">
                
                <DialogHeader>
                        <DialogTitle className="scroll-m-20 text-3xl font-extrabold tracking-tight">Curry Chicken Tikka</DialogTitle>
                    <DialogDescription className="py-2 space-x-2">
                        <Badge variant="outline">Vegetarian</Badge>
                        <Badge variant="outline">Heart Healthy</Badge>
                        <Badge variant="outline">One Pot</Badge>
                    </DialogDescription>
                    {/* quick stats */}
                    <div className="flex flex-row items-center justify-center min-w-2/5 max-w-fit h-fit rounded-md px-2 space-x-3">
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
                <p className="text-sm italic my-2">
                    This is a delicious recipe for curry chicken tikka. It is a simple recipe that can be made in under 15 minutes.
                </p>
                <img
                        src="chicken-tikka-image.jpg"
                        alt="Curry Tikka Chicken"
                        className="h-48 w-full object-cover rounde=d-lg"
                />
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight py-4">
                    Cooking Instructions
                </h2>
                {/* cooking instructions go here */}
                <p className="leading-7">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra lacus placerat dictum pulvinar risus laoreet. Lectus tempus curabitur mattis risus nulla posuere. Inceptos vestibulum morbi facilisi interdum habitasse proin dolor potenti. Natoque curabitur morbi sagittis elementum, porttitor ante lacinia primis. Dignissim conubia habitasse eget aliquet metus himenaeos per. Nascetur egestas litora a primis cubilia semper id.
    
                        Ac malesuada penatibus vehicula hac aliquam morbi. Adipiscing quisque purus risus per blandit facilisis himenaeos tortor mattis! Mi primis primis odio, mauris magna dignissim purus blandit. Eget quisque platea proin; erat neque blandit. Est ex est nibh neque dignissim varius. Nunc nostra himenaeos potenti congue velit aliquam sem lectus. Turpis sapien odio neque lacus mauris malesuada elit per varius.
                </p>
                
    
            </ScrollArea>
        </DialogContent>
    </Dialog>
    );


}
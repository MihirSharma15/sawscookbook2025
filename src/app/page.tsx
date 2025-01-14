import { RecipeCard } from "@/components/recipe-card";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, InstagramIcon, LocateIcon, MapPin, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Main Home Page
    <div className="flex flex-col py-4 w-full min-h-[100vh] scroll-m-0">
      {/* top bar */}
      <div className="flex flex-row px-4 items-start justify-between">
        {/* SAWS + Chapel Hill, NC */}
        <div className="flex flex-col">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
            Spice & Wellness's <span className="hover:dark:text-orange-300 hover:text-orange-600 text-emerald-400 transition-colors duration-200 ease-in-out">2025 Cookbook</span>
          </h1>
          <div className="flex flex-row items-center justify-start mt-2 space-x-1">
            <MapPin strokeWidth={1}/>
            <h1 className="scroll-m-20 text-1xl tracking-tight">
              Chapel Hill, NC
            </h1>
          </div>
        </div>
        {/* all the right side buttons */}
        <div className="md:space-x-2">
          <Link href="https://www.instagram.com/unc_spiceandwellness/"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <InstagramIcon />
            </Button>
          </Link>
          <Link href="https://tarheels.live/saws/"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <ExternalLinkIcon />
            </Button>
          </Link>

          <ModeToggle />
        </div>
        
      </div>
      <div className="w-full h-1 my-12">
      </div>
      {/* Cards go here */}
      <RecipeCard />
    </div>
  );
}

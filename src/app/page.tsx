"use client"
import { RecipeCard } from "@/components/recipe-card";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, InstagramIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { recipes } from "@/data/recipes";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) {
      return recipes;
    }
    const query = searchQuery.toLowerCase();
    return recipes.filter((recipe) => 
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
      recipe.category.toLowerCase().includes(query) ||
      recipe.submittedBy.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    // Main Home Page
    <div className="flex flex-col py-4 w-full min-h-[100vh]">
      {/* top bar */}
      <div className="flex flex-row px-4 items-start justify-between">
        {/* SAWS + Chapel Hill, NC */}
        <div className="flex flex-col">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
            Spice &amp; Wellness&apos;s{" "}
            <span className="hover:dark:text-orange-300 hover:text-orange-600 text-emerald-400 transition-colors duration-200 ease-in-out">
              2025 Cookbook
            </span>
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

      {/* Search bar */}
      <div className="flex flex-row items-center justify-center p-4 w-full max-w-2xl mx-auto">
        <Input 
          type="search" 
          id="search" 
          placeholder="Search recipes by name, tag, category, or contributor..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Recipe count */}
      <div className="px-4 pb-2">
        <p className="text-sm text-muted-foreground">
          Showing {filteredRecipes.length} of {recipes.length} recipes
        </p>
      </div>

      {/* Recipe cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Empty state */}
      {filteredRecipes.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground text-lg">
            No recipes found matching &quot;{searchQuery}&quot;
          </p>
          <Button 
            variant="link" 
            onClick={() => setSearchQuery("")}
            className="mt-2"
          >
            Clear search
          </Button>
        </div>
      )}
    </div>
  );
}

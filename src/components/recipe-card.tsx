"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import { RecipeDialog } from "./recipe-info";
import { Recipe } from "@/types/recipe";
import { UtensilsCrossed } from "lucide-react";

interface RecipeCardProps {
    recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
    // Limit tags to first 3 for card display
    const displayTags = recipe.tags.slice(0, 3);

    return (
        <motion.div 
        initial={{ opacity: 0, y:10 }} 
        animate={{ opacity: 1, y:0 }} 
        transition={{ duration: 0.20, ease: easeInOut}}
        className="h-full">
            <Card className="h-full flex flex-col">
                <CardHeader className="min-h-[88px]">
                    <CardTitle className="line-clamp-2">{recipe.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 min-h-[24px]">
                        {displayTags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2 flex-1">
                    {recipe.imageUrl ? (
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="h-48 w-full object-cover rounded-lg"
                        />
                    ) : (
                        <div className="h-48 w-full rounded-lg bg-muted flex flex-col items-center justify-center text-muted-foreground">
                            <UtensilsCrossed size={48} strokeWidth={1} />
                            <span className="mt-2 text-sm">No image available</span>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="mt-auto">
                    <RecipeDialog recipe={recipe} />
                </CardFooter>
            </Card>
        </motion.div>
    );
}

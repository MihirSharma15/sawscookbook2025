import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { ArrowUpRight, Clock, ExternalLink, DollarSign, ChefHat, Users, UtensilsCrossed, Leaf, Package, HeartPulse } from "lucide-react"
import { Badge } from "./ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Recipe } from "@/types/recipe";

interface RecipeDialogProps {
    recipe: Recipe;
}

export function RecipeDialog({ recipe }: RecipeDialogProps) {
    return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="w-full hover:opacity-70 transition-opacity duration-200">
                Open
                <ArrowUpRight />
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-full lg:max-w-3xl h-5/6 overflow-auto">
            <ScrollArea className="pr-4">
                
                <DialogHeader>
                    <DialogTitle className="scroll-m-20 text-3xl font-extrabold tracking-tight">
                        {recipe.title}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">
                        Submitted by {recipe.submittedBy} {recipe.submissionDate && `on ${recipe.submissionDate}`}
                    </p>
                    <DialogDescription className="py-2 flex flex-wrap gap-2">
                        {recipe.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                    </DialogDescription>
                    {/* quick stats */}
                    <div className="flex flex-wrap items-center gap-4 py-2">
                        <div className="flex flex-row gap-1 items-center">
                            <Clock size={16}/>
                            <p className="text-sm italic">{recipe.cookingTime}</p>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <DollarSign size={16} />
                            <p className="text-sm italic">{recipe.budget}</p>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <ChefHat size={16} />
                            <p className="text-sm italic">{recipe.difficulty}</p>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <Users size={16} />
                            <p className="text-sm italic">Varies</p>
                        </div>
                        {recipe.sourceUrl && (
                            <div className="flex flex-row gap-1 items-center">
                                <ExternalLink size={16} />
                                <a 
                                    className="text-sm italic hover:underline" 
                                    href={recipe.sourceUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source
                                </a>
                            </div>
                        )}
                    </div>
                </DialogHeader>

                {/* Description */}
                <p className="text-sm italic my-4">
                    {recipe.description}
                </p>

                {/* Image */}
                {recipe.imageUrl ? (
                    <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="h-64 w-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="h-48 w-full rounded-lg bg-muted flex flex-col items-center justify-center text-muted-foreground">
                        <UtensilsCrossed size={48} strokeWidth={1} />
                        <span className="mt-2 text-sm">No image available</span>
                    </div>
                )}

                {/* Ingredients */}
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4 flex items-center gap-2">
                    <UtensilsCrossed size={24} />
                    Ingredients
                </h2>
                <pre className="leading-7 whitespace-pre-wrap font-sans text-sm bg-muted p-4 rounded-lg">
                    {recipe.ingredients}
                </pre>

                {/* Cooking Instructions */}
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4 flex items-center gap-2">
                    <ChefHat size={24} />
                    Cooking Instructions
                </h2>
                <pre className="leading-7 whitespace-pre-wrap font-sans text-sm">
                    {recipe.instructions}
                </pre>

                {/* Nutrition Info */}
                {recipe.nutritionInfo && (
                    <>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4 flex items-center gap-2">
                            <Leaf size={24} />
                            Nutrition Information
                        </h2>
                        <pre className="leading-7 whitespace-pre-wrap font-sans text-sm bg-muted p-4 rounded-lg">
                            {recipe.nutritionInfo}
                        </pre>
                    </>
                )}

                {/* Storage Info */}
                {recipe.storageInfo && (
                    <>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4 flex items-center gap-2">
                            <Package size={24} />
                            Storage Information
                        </h2>
                        <p className="leading-7 text-sm">
                            {recipe.storageInfo}
                        </p>
                    </>
                )}

                {/* Health Benefits */}
                {recipe.healthBenefits && (
                    <>
                        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4 flex items-center gap-2">
                            <HeartPulse size={24} />
                            Health Benefits
                        </h2>
                        <p className="leading-7 text-sm">
                            {recipe.healthBenefits}
                        </p>
                    </>
                )}

                {/* Category */}
                <div className="mt-6 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Category:</span> {recipe.category}
                    </p>
                </div>
            </ScrollArea>
        </DialogContent>
    </Dialog>
    );
}

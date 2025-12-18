"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { recipeSchema } from "./formschema"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function UploadForm() {
    
    const form = useForm<z.infer<typeof recipeSchema>>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            title: "Sample Recipe",
            ingredients: "",
            cookTime: 1,
            budget: 1,
            category: "breakfast", // Must be one of the defined enum values
            categories: "",
            difficulty: "easy", // One of "easy", "medium", "hard"
            nutrientInformation: "",
            howToStore: "",
            howToMake: "",
            description: "",
            linkToSource: "",
            // Provide a placeholder File object. In a real app this would be set via file input.
            photo: new File([""], "placeholder.png", { type: "image/png" }),
        },
    });

    function onSubmit(values: z.infer<typeof recipeSchema>) {
        // Handle form submission here
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="SAWS" {...field} />
                            </FormControl>
                            <FormDescription>This is the recipe title.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Ingredients */}
                <FormField
                    control={form.control}
                    name="ingredients"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ingredients</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="List ingredients"
                                    {...field}
                                    className="border rounded p-2 w-full"
                                />
                            </FormControl>
                            <FormDescription>Enter the list of ingredients.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Cook Time */}
                <FormField
                    control={form.control}
                    name="cookTime"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cook Time (minutes)</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="30" {...field} />
                            </FormControl>
                            <FormDescription>Enter the cook time in minutes.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Budget */}
                <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Budget</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="15" {...field} />
                            </FormControl>
                            <FormDescription>Enter the budget required.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Category */}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <select {...field} className="border rounded p-2 w-full">
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="lunch or dinner">Lunch or Dinner</option>
                                </select>
                            </FormControl>
                            <FormDescription>Select the recipe category.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Categories */}
                <FormField
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Quick, Easy" {...field} />
                            </FormControl>
                            <FormDescription>Enter additional categories or tags.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Difficulty */}
                <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Difficulty</FormLabel>
                            <FormControl>
                                <select {...field} className="border rounded p-2 w-full">
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </FormControl>
                            <FormDescription>Select the recipe difficulty.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Nutrient Information */}
                <FormField
                    control={form.control}
                    name="nutrientInformation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nutrient Information</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="Nutrient details"
                                    {...field}
                                    className="border rounded p-2 w-full"
                                />
                            </FormControl>
                            <FormDescription>Provide nutrient information.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* How To Store */}
                <FormField
                    control={form.control}
                    name="howToStore"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How to Store</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="Storage instructions"
                                    {...field}
                                    className="border rounded p-2 w-full"
                                />
                            </FormControl>
                            <FormDescription>
                                Provide instructions on how to store the recipe.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* How To Make */}
                <FormField
                    control={form.control}
                    name="howToMake"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How to Make</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="Step-by-step instructions"
                                    {...field}
                                    className="border rounded p-2 w-full"
                                />
                            </FormControl>
                            <FormDescription>
                                Provide step-by-step cooking instructions.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="Recipe description"
                                    {...field}
                                    className="border rounded p-2 w-full"
                                />
                            </FormControl>
                            <FormDescription>Enter a description for the recipe.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Link to Source */}
                <FormField
                    control={form.control}
                    name="linkToSource"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link to Source</FormLabel>
                            <FormControl>
                                <Input type="url" placeholder="https://example.com/recipe" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter a valid URL to the recipe source.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Photo */}
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Photo</FormLabel>
                            <FormControl>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files.length > 0) {
                                            field.onChange(e.target.files[0]);
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormDescription>Upload an image of the recipe.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );

}
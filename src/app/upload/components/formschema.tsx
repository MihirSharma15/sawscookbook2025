import { z } from "zod";

export const recipeSchema = z.object({
    title: z.string().nonempty("Title is required"),
    ingredients: z.string().nonempty("Ingredients are required"),
    // Cook time in minutes must be a number greater than 0
    cookTime: z.number().positive("Cook time must be greater than 0"),
    // Budget must be a number greater than 0
    budget: z.number().positive("Budget must be greater than 0"),
    // Category as an enum.
    category: z.enum([
        "breakfast",
        "lunch",
        "dinner",
        "snack",
        "dessert",
        "lunch or dinner",
    ]),
    // Categories field is now required
    categories: z.string().nonempty("Categories are required"),
    // Difficulty level is required
    difficulty: z.enum(["easy", "medium", "hard"]),
    // Nutrient information as a required long text box
    nutrientInformation: z.string().nonempty("Nutrient information is required"),
    // How to store as a required long text box
    howToStore: z.string().nonempty("How to store information is required"),
    // How to make as a required long text box
    howToMake: z.string().nonempty("How to make instructions are required"),
    // Description of the recipe is required
    description: z.string().nonempty("Description is required"),
    // Link to source must be a valid URL
    linkToSource: z.string().url("Must be a valid URL"),
    // Photo: assuming a File object is provided when uploading
    photo: z.instanceof(File),
});




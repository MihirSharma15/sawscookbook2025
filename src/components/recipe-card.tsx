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
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { RecipeDialog } from "./recipe-info";

export function RecipeCard() {
    return (
        <motion.div 
        initial={{ opacity: 0, y:10 }} 
        animate={{ opacity: 1, y:0 }} 
        transition={{ duration: 0.20, ease: easeInOut}} >
            <Card className="min-w-96 max-w-fit">
                <CardHeader>
                    <CardTitle>Curry Tikka Chicken</CardTitle>
                    <CardDescription className="">
                        <Badge variant="outline">Vegetarian</Badge>
                        <Badge variant="outline">Heart Healthy</Badge>
                        <Badge variant="outline">One Pot</Badge>
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2">
                    <img
                        src="chicken-tikka-image.jpg"
                        alt="Curry Tikka Chicken"
                        className="h-48 w-96 object-cover rounded-lg"
                    />
                </CardContent>
                <CardFooter>
                    <RecipeDialog />
                </CardFooter>
            </Card>
        </motion.div>
    );
}
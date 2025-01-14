import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "./ui/badge";

export function RecipeCard() {

    return (
        <Card className="min-w-96 max-w-fit">
            <CardHeader>
                <CardTitle>Curry Tikka Chicken</CardTitle>
                <CardDescription>
                    <Badge variant="outline">Vegetarian</Badge>
                    <Badge variant="outline">Heart Healthy</Badge>
                    <Badge variant="outline">One Pot</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <img />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
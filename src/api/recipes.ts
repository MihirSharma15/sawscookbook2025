// pages/api/recipes.js
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION,
}); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            // Assuming the body contains fields: title, ingredients, instructions and the image data is base64 encoded
            const { title, ingredients, instructions, imageBase64, imageType } = req.body;

            const bucketName = process.env.S3_BUCKET_NAME;
            if (!bucketName) {
                res.status(500).json({ error: "Missing S3_BUCKET_NAME env var" });
                return;
            }

            // Generate a unique ID for the recipe and image file name
            const recipeId = uuidv4();
            const imageKey = `recipes/${recipeId}.${imageType.split("/")[1]}`;

            // Prepare the image data for S3 upload
            const buffer = Buffer.from(imageBase64, "base64");

            // Upload the image to S3
            const s3Result = await s3
                .upload({
                    Bucket: bucketName,
                    Key: imageKey,
                    Body: buffer,
                    ContentType: imageType,
                    ACL: "public-read", // Adjust ACL as needed
                })
                .promise();

            // Create the recipe record in DynamoDB
            const recipeItem = {
                recipeId,
                title,
                ingredients,
                instructions,
                imageUrl: s3Result.Location, // S3 returns the URL in Location
                createdAt: new Date().toISOString(),
            };

            await dynamodb
                .put({
                    TableName: "YourDynamoDBTableName", // Replace with your table name
                    Item: recipeItem,
                })
                .promise();

            res.status(201).json({ message: "Recipe created", recipe: recipeItem });
        } catch (error) {
            console.error("Error creating recipe", error);
            res.status(500).json({ error: "Error creating recipe" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
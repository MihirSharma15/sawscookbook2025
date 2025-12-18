"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import UploadForm from "./components/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadPage() {
    const [isLocked, setIsLocked] = useState(false); // UPDATE FOR PROD
    const [passwordInput, setPasswordInput] = useState("");

    const MASTER_PASSWORD = "spiceandwellness15"; 

    const toggleLock = () => {
        setIsLocked(!isLocked);
    };

    const handleUnlock = () => {
        if (passwordInput === MASTER_PASSWORD) {
            toast.success("Unlocked! You can now upload recipes.");
            toggleLock();
        } else {
            toast.error("Incorrect password. Please try again.");
            setPasswordInput(""); // Clear the input on incorrect password
        }
    }

    // if it's locked
    if (isLocked) {
        return (
            <div className="flex flex-row items-center justify-center w-full min-h-screen">
                <Input
                    type="password"
                    placeholder="Enter Exec Password"
                    id="passwordbox"
                    className="w-auto mx-4"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                />
                <Button size="icon" onClick={handleUnlock}>
                    <ChevronRight />
                </Button>
            </div>
        )
        // if it's unlocked
    } else {
        return (
            <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
                <Card className="w-3/5">
                    <CardHeader>
                        <CardTitle>SAWS Recipe Upload</CardTitle>
                        <CardDescription>upload here. pls make sure all the info is correct before submitting.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UploadForm />
                    </CardContent>
                    <CardFooter>
                        <p>DOUBLE CHECK ALL THE WORK PLEASE!!!</p>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}
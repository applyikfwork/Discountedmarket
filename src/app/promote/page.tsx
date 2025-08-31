import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PromotePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Promote Your Brand</CardTitle>
                    <CardDescription>
                        Submit your promotion request and our team will get back to you.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="brandName">Brand Name</Label>
                        <Input id="brandName" placeholder="Your Brand Name" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Contact Email</Label>
                        <Input id="email" type="email" placeholder="contact@yourbrand.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="promotionDetails">Promotion Details</Label>
                        <Textarea id="promotionDetails" placeholder="Describe your promotion..." />
                    </div>
                    <Button type="submit" className="w-full">Submit Request</Button>
                </CardContent>
            </Card>
        </div>
    );
}

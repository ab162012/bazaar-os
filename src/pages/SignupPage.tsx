import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Chrome } from "lucide-react"; // Using Chrome for Google icon

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bazaarBackground-DEFAULT p-4">
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-bazaarBackground-foreground">Join BazaarOS</CardTitle>
          <CardDescription className="text-muted-foreground">
            Create your account to start building your store.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md">
              Sign Up
            </Button>
            <Separator className="my-4" />
            <Button variant="outline" className="w-full flex items-center gap-2 rounded-md">
              <Chrome className="h-4 w-4" /> Sign up with Google
            </Button>
            {/* Add more social signup options here if needed */}
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="underline text-bazaarPrimary-DEFAULT hover:text-bazaarPrimary-DEFAULT/80">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
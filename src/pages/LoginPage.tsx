import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Chrome } from "lucide-react"; // Using Chrome for Google icon

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bazaarBackground-DEFAULT p-4">
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-bazaarBackground-foreground">Welcome Back to BazaarOS</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to manage your store or explore products.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline text-bazaarPrimary-DEFAULT hover:text-bazaarPrimary-DEFAULT/80">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md">
              Login
            </Button>
            <Separator className="my-4" />
            <Button variant="outline" className="w-full flex items-center gap-2 rounded-md">
              <Chrome className="h-4 w-4" /> Login with Google
            </Button>
            {/* Add more social login options here if needed */}
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="underline text-bazaarPrimary-DEFAULT hover:text-bazaarPrimary-DEFAULT/80">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
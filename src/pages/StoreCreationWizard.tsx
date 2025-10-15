import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const StoreCreationWizard = () => {
  const [storeName, setStoreName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateStore = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In a real app, you would save this to your database (e.g., Supabase)
    // and associate it with the logged-in user.
    console.log("Creating store:", { storeName, subdomain });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (storeName && subdomain) {
      toast.success(`Store "${storeName}" created successfully at ${subdomain}.bazaaros.com!`);
      navigate("/seller-dashboard"); // Redirect to seller dashboard after store creation
    } else {
      toast.error("Please provide both a store name and a subdomain.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bazaarBackground-DEFAULT p-4">
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-bazaarBackground-foreground">Create Your Store</CardTitle>
          <CardDescription className="text-muted-foreground">
            Just a few steps to launch your online business!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateStore}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  type="text"
                  placeholder="My Awesome Store"
                  required
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subdomain">Subdomain</Label>
                <div className="flex items-center">
                  <Input
                    id="subdomain"
                    type="text"
                    placeholder="mystore"
                    required
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))} // Basic sanitization
                    className="rounded-r-none"
                  />
                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 bg-gray-50 text-gray-500 text-sm">
                    .bazaaros.com
                  </span>
                </div>
              </div>
              <Button type="submit" className="w-full bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md" disabled={loading}>
                {loading ? "Creating Store..." : "Create My Store"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoreCreationWizard;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bazaarBackground-DEFAULT p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-bazaarBackground-foreground">Seller Dashboard</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Welcome to your store management area! More features coming soon.
      </p>
      <Button asChild className="bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default SellerDashboard;
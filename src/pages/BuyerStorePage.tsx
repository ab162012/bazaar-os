import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuyerStorePage = () => {
  const { subdomain } = useParams<{ subdomain: string }>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bazaarBackground-DEFAULT p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-bazaarBackground-foreground">
        Welcome to {subdomain ? `${subdomain}'s` : 'a'} BazaarOS Store!
      </h1>
      <p className="text-xl text-muted-foreground mb-6">
        This is a public-facing store. Products and customization options will appear here.
      </p>
      <Button asChild className="bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md">
        <Link to="/">Back to BazaarOS Home</Link>
      </Button>
    </div>
  );
};

export default BuyerStorePage;
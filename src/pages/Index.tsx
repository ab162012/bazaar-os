import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bazaarBackground-DEFAULT p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-bazaarBackground-foreground leading-tight">
          BazaarOS: Your No-Code Commerce OS
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Create, customize, and manage your own eCommerce store with ease.
          Sell locally or internationally, all without coding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-8 py-3 text-lg bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md shadow-md transition-all duration-300">
            <Link to="/signup">Get Started - It's Free!</Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-lg border-bazaarPrimary-DEFAULT text-bazaarPrimary-DEFAULT hover:bg-bazaarPrimary-DEFAULT/10 rounded-md shadow-md transition-all duration-300">
            <Link to="/login">Login</Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Explore a demo store:{" "}
          <Link to="/store/demo" className="underline text-bazaarPrimary-DEFAULT hover:text-bazaarPrimary-DEFAULT/80">
            demo.bazaaros.com
          </Link>
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
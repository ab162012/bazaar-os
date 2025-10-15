import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-bazaarBackground-DEFAULT p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-bazaarBackground-foreground">Seller Dashboard</h1>
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to your Store!</CardTitle>
                <CardDescription>This is your central hub for managing your BazaarOS store.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Here you'll find an overview of your store's performance, recent orders, and quick links to important sections.</p>
                <Button asChild className="bg-bazaarPrimary-DEFAULT text-bazaarPrimary-foreground hover:bg-bazaarPrimary-DEFAULT/90 rounded-md">
                  <Link to="/store/my-store-example">View My Public Store</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Products Management</CardTitle>
                <CardDescription>Add, edit, or delete products in your store.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Product CRUD functionality will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and manage all orders placed in your store.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Order management features will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Configure your payment gateways and view transactions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Payment gateway integrations and transaction history will be here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Store Analytics</CardTitle>
                <CardDescription>Gain insights into your store's performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sales, views, and conversion analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="customization" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Store Customization</CardTitle>
                <CardDescription>Design and personalize your store's appearance.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Drag-and-drop theme builder, color/font picker, and custom code options will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Store Settings</CardTitle>
                <CardDescription>Manage general store information, domains, and plans.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>General settings, custom domain linking, and monetization plan management will be here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerDashboard;
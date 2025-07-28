import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShoppingBag, Sparkles, Heart } from "lucide-react";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchMug from "@/assets/merch-mug.jpg";
import merchWomens from "@/assets/merch-womens.jpg";
import merchBag from "@/assets/merch-bag.jpg";

const products = [
  {
    id: 1,
    name: "Premium Unisex Hoodie",
    description: "Ultra-soft premium hoodie perfect for cozy nights and lifestyle events",
    image: merchHoodie,
    price: "£49.99",
    originalPrice: "£59.99",
    rating: 4.9,
    reviews: 127,
    badge: "Bestseller",
    badgeColor: "bg-primary"
  },
  {
    id: 2,
    name: "SwingHub Coffee Mug",
    description: "Start your morning right with our premium ceramic mug",
    image: merchMug,
    price: "£14.99",
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    badge: "New",
    badgeColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Women's Cropped Sweatshirt",
    description: "Trendy and comfortable sweatshirt in beautiful mauve color",
    image: merchWomens,
    price: "£39.99",
    originalPrice: "£44.99",
    rating: 4.7,
    reviews: 156,
    badge: "Limited",
    badgeColor: "bg-purple-500"
  },
  {
    id: 4,
    name: "All-Over Print Tote Bag",
    description: "Stylish tote bag perfect for events, shopping, or everyday use",
    image: merchBag,
    price: "£19.99",
    originalPrice: null,
    rating: 4.6,
    reviews: 73,
    badge: "Eco-Friendly",
    badgeColor: "bg-emerald-500"
  }
];

const MerchandiseSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Official Merchandise
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Wear Your Lifestyle with Pride
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Show your SwingHub style with our premium collection of lifestyle merchandise. Quality products for the modern community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden bg-gradient-card shadow-premium hover-lift border border-white/50 rounded-3xl transition-all duration-500 h-full flex flex-col animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${product.badgeColor} text-white px-3 py-1 text-sm font-semibold shadow-card`}>
                    {product.badge}
                  </Badge>
                </div>

                {/* Wishlist Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white/30">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-muted-foreground/30'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Info */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <Badge variant="outline" className="border-red-500/30 text-red-600 bg-red-500/10 px-2 py-1 text-xs">
                      Save £{(parseFloat(product.originalPrice.replace('£', '')) - parseFloat(product.price.replace('£', ''))).toFixed(2)}
                    </Badge>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-card">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Free UK Shipping</p>
                <p className="text-sm text-muted-foreground">Orders over £35</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Premium Quality</p>
                <p className="text-sm text-muted-foreground">Ethically sourced materials</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Customer Love</p>
                <p className="text-sm text-muted-foreground">4.8/5 average rating</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 p-8 rounded-3xl text-center">
            <div className="space-y-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Time Offer
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">
                Get 20% Off Your First Order
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use code <span className="font-bold text-primary">NEWMEMBER20</span> at checkout and show your SwingHub pride with style!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Shop Now & Save
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
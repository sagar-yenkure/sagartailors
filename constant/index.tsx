import {
  Shirt,
  Zap,
  Palette,
  Crown,
  Users,
  Clock,
  Scissors,
  Award,
  Star,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: <Shirt className="h-8 w-8 text-amber-600" />,
    title: "Custom Stitching",
    description:
      "Expert stitching services for your own fabric with precision measurements and perfect fits.",
    features: ["Bring Your Fabric", "Perfect Fit", "Classic & Modern Styles"],
  },
  {
    icon: <Crown className="h-8 w-8 text-amber-600" />,
    title: "Wedding Attire",
    description:
      "Special occasion stitching including sherwanis, wedding suits, and traditional outfits.",
    features: ["Bridal Collection", "Groom Specials", "Traditional Wear"],
  },
  {
    icon: <Shirt className="h-8 w-8 text-amber-600" />,
    title: "Formal Wear",
    description:
      "Professional blazers, trousers, and formal shirts stitched from your fabric.",
    features: ["Business Suits", "Formal Shirts", "Corporate Wear"],
  },
  {
    icon: <Palette className="h-8 w-8 text-amber-600" />,
    title: "Alterations",
    description:
      "Expert alterations and modifications to make your existing garments fit perfectly.",
    features: ["Hemming", "Resizing", "Style Updates"],
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-600" />,
    title: "Express Service",
    description:
      "Quick turnaround for urgent requirements without compromising on quality.",
    features: ["Same Day Service", "Rush Orders", "Emergency Alterations"],
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600" />,
    title: "Bulk Orders",
    description:
      "Special packages for schools, companies, organizations, and group events.",
    features: ["School Uniforms", "Corporate Wear", "Event Packages"],
  },
];

export const heroStat = [
  {
    icon: <Star className="h-4 w-4 md:h-5 md:w-5 text-amber-600 mr-1" />,
    number: "25+",
    label: "Years Experience",
  },
  {
    icon: <Clock className="h-4 w-4 md:h-5 md:w-5 text-amber-600 mr-1" />,
    number: "5000+",
    label: "Happy Customers",
  },
  {
    icon: <Award className="h-4 w-4 md:h-5 md:w-5 text-amber-600 mr-1" />,
    number: "100%",
    label: "Quality Work",
  },
];

export const features = [
  {
    icon: <Award className="h-12 w-12 text-amber-600" />,
    title: "35+ Years of Excellence",
    description:
      "Decades of experience in creating perfect fits and satisfied customers across generations.",
  },
  {
    icon: <Scissors className="h-12 w-12 text-amber-600" />,
    title: "Master Craftsmanship",
    description:
      "Skilled artisans using traditional techniques combined with modern precision for superior quality.",
  },
  {
    icon: <Users className="h-12 w-12 text-amber-600" />,
    title: "Personalized Service",
    description:
      "Individual attention to every customer with custom solutions tailored to your unique style and needs.",
  },
  {
    icon: <Clock className="h-12 w-12 text-amber-600" />,
    title: "Timely Delivery",
    description:
      "Reliable delivery schedules with express services available for urgent requirements.",
  },
];

export const achievements = [
  { number: "5000+", label: "Happy Customers" },
  { number: "35+", label: "Years Experience" },
  { number: "15+", label: "Expert Tailors" },
  { number: "100%", label: "Quality Guarantee" },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Executive",
    content:
      "Sagar Tailors has been my go-to for over 15 years. The quality stitching is unmatched, and they always deliver on time. My wedding suit was absolutely perfect!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Priya Sharma",
    role: "Fashion Designer",
    content:
      "As someone in the fashion industry, I'm very particular about stitching. Sagar Tailors exceeds my expectations every time with their attention to detail.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Amit Patel",
    role: "Groom",
    content:
      "They stitched my entire wedding wardrobe from my fabric - from the engagement suit to the reception outfit. Every piece was perfect and I felt like a king!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Dr. Sunita Gupta",
    role: "Professional",
    content:
      "Their alterations service saved my expensive dress that didn't fit properly. The expertise and care they showed was exceptional.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Vikram Singh",
    role: "Corporate Manager",
    content:
      "Been getting all my formal wear stitched from Sagar Tailors for the past decade. Consistent quality, fair pricing, and excellent service every time.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Neha Joshi",
    role: "Bride",
    content:
      "They stitched the most beautiful lehenga from my fabric for my wedding. The embroidery work and fitting were absolutely flawless. Highly recommended!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export const ratingStats = [
  { label: "Quality Satisfaction", percentage: 98 },
  { label: "On-Time Delivery", percentage: 95 },
  { label: "Would Recommend", percentage: 99 },
  { label: "Return Customers", percentage: 92 },
];

export const catalogueItems = [
  {
    id: 1,
    name: "Shirt",
    description: "Custom tailored shirts with perfect fit and premium stitching",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Cotton & Linen", "Custom Fit", "Various Collars"],
    price: "Starting from ₹800",
  },
  {
    id: 2,
    name: "Pant",
    description: "Perfectly fitted trousers and casual pants from your fabric",
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Formal & Casual", "Perfect Fit", "Quality Stitching"],
    price: "Starting from ₹600",
  },
  {
    id: 3,
    name: "Shirt-Pant Set",
    description: "Complete coordinated shirt and pant combinations",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Matching Sets", "Coordinated Colors", "Complete Look"],
    price: "Starting from ₹1200",
  },
  {
    id: 4,
    name: "Safari Suit",
    description: "Traditional safari suits with authentic styling and comfort",
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Traditional Style", "Comfortable Fit", "Premium Fabric"],
    price: "Starting from ₹1500",
  },
  {
    id: 5,
    name: "Formal Suits",
    description:
      "Professional business suits and formal wear for special occasions",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Business Formal", "Wedding Suits", "Premium Quality"],
    price: "Starting from ₹2500",
  },
];

export const Info = {
  number: "8668535039",
}

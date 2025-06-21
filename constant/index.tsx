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
    title: "25+ Years of Excellence",
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
  { number: "25+", label: "Years Experience" },
  { number: "15+", label: "Expert Tailors" },
  { number: "100%", label: "Quality Guarantee" },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Executive",
    content:
      "I've trusted Sagar Tailors for over 15 years. From office wear to my wedding suit — their quality, fit, and timely delivery are unmatched.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=150", // Smart man in business attire
  },
  {
    name: "Priya Sharma",
    role: "Fashion Designer",
    content:
      "Being in fashion, I'm very particular — but Sagar Tailors always delivers impeccable work with fine detailing.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150", // Stylish female fashion type
  },
  {
    name: "Amit Patel",
    role: "Groom",
    content:
      "They designed every outfit for my wedding — each one tailored perfectly. I felt truly royal on my big day.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3775539/pexels-photo-3775539.jpeg?auto=compress&cs=tinysrgb&w=150", // Traditional groom look
  },
  {
    name: "Dr. Sunita Gupta",
    role: "Doctor",
    content:
      "Their alteration service saved an expensive outfit. The professionalism and care shown were outstanding.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150", // Mature professional woman
  },
  {
    name: "Vikram Singh",
    role: "Corporate Manager",
    content:
      "I've relied on Sagar Tailors for my formal wear for years. Consistent quality and great service every single time.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150", // Professional Indian man
  },
  {
    name: "Neha Joshi",
    role: "Bride",
    content:
      "They created the most elegant lehenga from my fabric. The fit and craftsmanship were beyond expectations.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2879839/pexels-photo-2879839.jpeg?auto=compress&cs=tinysrgb&w=150", // Smiling bride
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
      "https://images.pexels.com/photos/46212/men-s-shirt-shirt-attire-clothing-46212.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Cotton & Linen", "Custom Fit", "Various Collars"],
    price: "Starting from ₹300",
  },
  {
    id: 2,
    name: "Trousers & Casual Pants",
    description: "Perfectly fitted trousers and casual pants from your fabric",
    image:
      "https://images.pexels.com/photos/2897521/pexels-photo-2897521.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Formal & Casual", "Perfect Fit", "Quality Stitching"],
    price: "Starting from ₹400",
  },
  {
    id: 3,
    name: "Shirt-Casual Pant Set",
    description: "Complete coordinated shirt and Casual pant combinations",
    image:
      "https://images.pexels.com/photos/16567121/pexels-photo-16567121.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Matching Sets", "Coordinated Colors", "Complete Look"],
    price: "Starting from ₹700",
  },
  {
    id: 4,
    name: "Safari Suit",
    description: "Traditional safari suits with authentic styling and comfort",
    image:
      "https://images.pexels.com/photos/615003/pexels-photo-615003.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Traditional Style", "Comfortable Fit", "Premium Fabric"],
    price: "Starting from ₹1400",
  },
  {
    id: 5,
    name: "Formal Suits",
    description:
      "Professional business suits and formal wear for special occasions",
    image:
      "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Business Formal", "Wedding Suits", "Premium Quality"],
    price: "Starting from ₹3500",
  },
];

export const Info = {
  number: "8668535039",
}

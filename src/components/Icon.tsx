import {
  MapPin, MessageCircle, Ticket, Waves, Utensils, GlassWater, Coffee,
  Sparkles, Soup, Check, Leaf, UtensilsCrossed, BedDouble, BadgePercent,
  Users, Compass, MapPinned, HandHelping, UsersRound, Trees, Tag,
  PartyPopper, GraduationCap, Heart, Star, Route, CarFront, MessagesSquare,
  Plus, Mail, Clock, Camera, ThumbsUp, Navigation, ListChecks,
  MessageCircleHeart, MoveHorizontal, Umbrella, Landmark, Shell, Palmtree,
  Fish, CarTaxiFront, Bike, Map, CupSoda, Flower2, Apple, Footprints,
  ChefHat, ArrowRight, type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";

// Maps the design's kebab-case `data-lucide` names to lucide-react components.
const ICONS: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  "message-circle": MessageCircle,
  ticket: Ticket,
  waves: Waves,
  utensils: Utensils,
  "glass-water": GlassWater,
  coffee: Coffee,
  sparkles: Sparkles,
  soup: Soup,
  check: Check,
  leaf: Leaf,
  "utensils-crossed": UtensilsCrossed,
  "bed-double": BedDouble,
  "badge-percent": BadgePercent,
  users: Users,
  compass: Compass,
  "map-pinned": MapPinned,
  "hand-helping": HandHelping,
  "users-round": UsersRound,
  trees: Trees,
  tag: Tag,
  "party-popper": PartyPopper,
  "graduation-cap": GraduationCap,
  heart: Heart,
  star: Star,
  route: Route,
  "car-front": CarFront,
  "messages-square": MessagesSquare,
  plus: Plus,
  mail: Mail,
  clock: Clock,
  camera: Camera,
  "thumbs-up": ThumbsUp,
  navigation: Navigation,
  "list-checks": ListChecks,
  "message-circle-heart": MessageCircleHeart,
  "move-horizontal": MoveHorizontal,
  umbrella: Umbrella,
  landmark: Landmark,
  shell: Shell,
  palmtree: Palmtree,
  fish: Fish,
  "car-taxi-front": CarTaxiFront,
  bike: Bike,
  map: Map,
  "cup-soda": CupSoda,
  "flower-2": Flower2,
  apple: Apple,
  footprints: Footprints,
  "chef-hat": ChefHat,
  "arrow-right": ArrowRight,
};

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
  fill?: string;
  strokeWidth?: number;
};

/**
 * Renders a lucide icon inside an <i data-icon> wrapper. The wrapper inherits
 * the design system's `i { width/height/color }` rules; the svg fills it.
 */
export default function Icon({ name, className, style, fill, strokeWidth }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return (
    <i data-icon="" className={className} style={style}>
      <Cmp absoluteStrokeWidth strokeWidth={strokeWidth ?? 2} fill={fill ?? "none"} />
    </i>
  );
}

import { BookOpen, Gamepad2, Glasses, Lightbulb, Ticket } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
  { key: "guides", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "games", path: "/games", icon: Gamepad2, isContentType: true },
  { key: "vr", path: "/vr", icon: Glasses, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

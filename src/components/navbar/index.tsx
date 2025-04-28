import { ThemeToggler } from "@/components/theme/theme-toggler";
import { icons } from "@/components/icons";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-4 md:py-2 md:px-3 border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full mx-auto max-w-9xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <icons.logo width={40} height={40} className="m-1" />
          <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
        </div>
        <ThemeToggler />
      </div>
    </nav>
  );
}

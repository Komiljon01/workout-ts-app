import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] border-b fixed inset-0 z-50 bg-background">
      <div className="container max-w-6xl mx-auto h-full flex justify-between items-center">
        <h1 className="text-2xl font-bold uppercase">Workout</h1>

        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              href={link.path}
              key={link.path}
              className="font-medium hover:underline"
            >
              {link.label}
            </a>
          ))}
          <ModeToggle />
          <Button variant={"secondary"}>Join Free</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

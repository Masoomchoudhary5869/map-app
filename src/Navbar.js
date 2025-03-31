import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import "./Navbar.css"; 
export default function Navbar() {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const toggleAlert = () => setIsAlertActive(!isAlertActive);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          Alert
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {['Home', 'About', 'Team', 'Contact Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, '')}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item}
            </Link>
          ))}
          <button
            variant="ghost"
            size="icon"
            onClick={toggleAlert}
            className={isAlertActive ? "text-primary" : ""}
            aria-label="Alerts"
          >
            <Bell className="h-5 w-5" />
            {isAlertActive && <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

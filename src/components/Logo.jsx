import logo from "../assets/Sancharoo.png";

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Sancharoo Logo"
      className="h-16 w-auto object-contain"
    />
  );
}
import { ChatSupport } from "@/interface/components/suportchat";
import { Heart, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8">
      <div className="gap-20 flex items-center justify-between">
        <img className="w-full" src="./src/assets/logo.svg" alt="" />
        <div>
          <span className="flex gap-2">
            <MapPin /> Budapest
          </span>
        </div>
        <div>
          <ul
            id="menu"
            className="flex gap-8 h-full font-medium"
          >
            <li
              id="buy-tab"
              className="cursor-pointer border-b-2 py-4 border-orange-500 text-orange-500 transition-all duration-300 ease-in-out"
            >
              Buy
            </li>
            <li id="sell-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">
              Sell
            </li>
            <li id="about-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">
              About
            </li>
            <li id="reviews-tab" className="cursor-pointer py-4 transition-all duration-300 ease-in-out">
              Reviews
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2">
        <ChatSupport />
        <span className="w-8 bg-gray-100 flex items-center justify-center rounded-md mr-2">
          <Heart className="size-5" />
        </span>
        <div className="flex bg-gray-100 rounded-sm items-center justify-center">
          <img className="w-8 rounded-sm" src="https://github.com/almirjrdev.png" alt="" />
          <div className="flex items-center justify-center px-3">
            <h2>Almir Júnior</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

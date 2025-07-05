import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <div className="absolute top-4 right-[10%] z-50">
      <NavigationMenu className=" shadow-md rounded-md px-4 py-2">
        <NavigationMenuList className="flex gap-6">
          
          {/* About Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm bg-black font-medium text-white hover:text-blue-400 focus:text-blue-400 transition-colors">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black rounded-md shadow-lg p-4 w-48 ">
              <NavigationMenuLink
                href="#about"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                Who I Am
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Projects Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm bg-black font-medium text-white hover:text-blue-400 focus:text-blue-400 transition-colors">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black rounded-md shadow-lg p-4 w-56  space-y-1">
              <NavigationMenuLink
                href="#project1"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                Portfolio Website
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#project2"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                E-commerce App
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#project3"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                Chat Application
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Experience Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm bg-black font-medium text-white hover:text-blue-400 focus:text-blue-400 transition-colors">
              Experience
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black rounded-md shadow-lg p-4 w-56  space-y-1">
              <NavigationMenuLink
                href="#exp1"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                Frontend Intern @ ABC Corp
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#exp2"
                className="block px-2 py-1 rounded hover:bg-zinc-900 text-sm text-white"
              >
                React Developer @ Freelance
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar

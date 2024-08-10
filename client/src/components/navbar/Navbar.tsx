"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";



const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI-Powered Insights",
    href: "/docs/primitives/alert-dialog",
    description:
      "Leverage advanced AI algorithms to gain deep insights into learner performance, customize content, and predict educational trends.",
  },
  {
    title: "Adaptive Learning",
    href: "/docs/primitives/hover-card",
    description:
      "Tailor educational experiences to individual needs with personalized learning paths, dynamic assessments, and real-time feedback.",
  },
  {
    title: "Comprehensive Management Tools",
    href: "/docs/primitives/progress",
    description:
      "Streamline course creation, student tracking, and administrative workflows with our robust suite of management tools.",
  },
  {
    title: "Interactive Content",
    href: "/docs/primitives/scroll-area",
    description:
      "Engage learners with interactive multimedia, gamified elements, and collaborative activities that foster an immersive learning environment.",
  },
  {
    title: "Data-Driven Decisions",
    href: "/docs/primitives/tabs",
    description:
      " Utilize detailed analytics and reporting features to make informed decisions and continually improve educational strategies.",
  },
];

export const Navbar = ({loggedIn} : any) => {
  return (
    <div className="border-b-[1px] border-slate-500 p-5 flex justify-around">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <section className="flex items-end ">
                <h2
                  className="text-4xl bg-gradient-to-r bg-clip-text  text-transparent 
                          from-cyan-500 via-yellow-500 to-indigo-500
                            animate-text"
                >
                  Gamma
                </h2>
                <h3 className="text-lg text-green-300">.edu</h3>
              </section>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <img
                        src="https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-artificial-intelligence-robot-illustration-png-image_6654937.png"
                        alt="education"
                        className="w-25 h-25 rounded-full"
                      />
                      <div className="mb-2 mt-4 text-lg text-gray-400 font-medium text-left">
                        Gamma V1.1
                      </div>
                      <p className="text-xs leading-tight text-white/50 text-left">
                        Gamma is dedicated to transforming education by
                        integrating{" "}
                        <h3 className="hover:underline inline font-bold text-md text-purple-500">
                          AI technology
                        </h3>{" "}
                        with a powerful LMS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <section></section>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {loggedIn ? (
          <>
    
          </> 
          ) : (
              <>
              <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            {" "}
                            What makes us different ?{" "}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {components.map((component) => (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Our Vision & Mission
                          </NavigationMenuLink>
                        </NavigationMenuItem>
              </>
          )}
          
        </NavigationMenuList>
      </NavigationMenu>
      <section>
        
      </section>
    </div>
    
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block hover:bg-purple-600 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

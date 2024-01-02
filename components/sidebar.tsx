"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Box from "@/components/box";
import SidebarItem from "./sidebaritem";
import SongLibrary from "./songlibrary";

interface sidebarProps{
    children:React.ReactNode;
}

const Sidebar: React.FC<sidebarProps> = ({children}) => {
  const pathname = usePathname();
  const route = useMemo(()=>[
    {
        icon:HiHome,
        label:"Home",
        active:pathname !== '/search',
        href:'/',
    },
    {
        icon:BiSearch,
        label:"Search",
        active:pathname === '/search',
        href:'/search',
    }
  ],[pathname])
  return(
    <div className="flex h-full">
        <div className="
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
        ">
            <Box>
                <div className="
                flex
                flex-col
                gap-y-4
                px-5
                py-4
                ">
                    {route.map((item)=>(
                        <SidebarItem
                        key={item.label}
                        {...item}
                        />
                    ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                <SongLibrary/>
            </Box>
        </div>
        <main className=" h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
};
export default Sidebar;
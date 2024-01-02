"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import {FaPlay} from "react-icons/fa"

interface listItemsProps{
    name:string,
    image:string,
    href:string
}
const ListItems: React.FC<listItemsProps> = ({
  image,
  name,
  href
}) => {
  const router = useRouter();
  const onClick = () =>{
    router.push(href)
  }
  return (
    <button
      className="
          w-80
          relative
          group
          flex
          items-center
          rounded-md
          overflow-hidden
          gap-x-4
          bg-neutral-100/10
          hover:bg-neutral-100/20
          transition
          pr-4
        "
      >
        <div className="
          relative
          min-w-[64px]
          min-h-[64px]
        ">
          <Image
            className="object-cover"
            fill
           src={image} 
           alt={`Image`} 
          />
        </div>
        <p className="font-medium truncate py-5">
          {name}
        </p>
        <div
          className=" 
          absolute
          transition
          opacity-0
          rounded-full
          flex
          items-center
          justify-center
          bg-green-500
          p-4
          drop-shadow-md
          right-5
          group-hover:opacity-100
          hover:scale-110
          "
        >
          <FaPlay className=" text-black" />
        </div>
    </button>
  );
};
export default ListItems;
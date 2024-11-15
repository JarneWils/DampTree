"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ImSoundcloud, ImSpotify } from "react-icons/im";

const data = [

  //NEW RELEASES//


  //Lastest RELEASES//
  {
    title: "Releases",
      subtitle: "Playlist",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/All-Releases.png",
    url:"https://soundcloud.com/damp-3670/sets/releases?si=dd42f9668f3043cfba3d9095a9722732&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  
 //PLAYLISTS//
  {
    title: "Sets",
      subtitle: "Playlist",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Tegendraats.png",
    url:"https://soundcloud.com/damp-3670/sets/sets?si=bc7390c0addb4dd585d8d2b4534c27a2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "YOUR FAVORITE BØY BAND",
      subtitle: "Playlist",
      icon: <ImSpotify className="text-[#00E052] text-lg mt-0.5 mr-2"/>,
    image: "/assets/images/Your-Favorite-Boy-Band.png",
    url:"https://open.spotify.com/playlist/0FxXQd866AbRLolEwFKuL9?si=cfc6f60afbaf49d3",
  },

];

const Tracks = () => {
  const pathname = usePathname();
  return (

    <div className="mb-4">
      {/* Itereren over de data array */}
      {data.map((track, index) => (
        <div key={index}>

          {/* Link */}
          <div>
            <Link
            href={track.url}
            target="blank"
            className="flex flex-row bg-white/5 p-2 xl:p-3 mt-5 rounded-xl w-[350px] xl:w-[600px] border-solid border-white hover:bg-white/10 xl:hover:-ml-2 xl:hover:w-[605px] duration-150"
            >

              {/* Image */}
              <div className="relative w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]">
                <Image
                  src={track.image}
                  alt={track.title}
                  sizes="full"
                  fill
                  priority
                  quality={100}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Title */}
              <div className="ml-4 leading-normal">
                <p className="xl:font-semibold text-md xl:text-lg">{track.title}</p>
                <div className="flex flex-row">
                  <div className="mt-0.5">
                    {track.icon}
                  </div>
                  <p className="text-white/50 text-md xl:text-lg">{track.subtitle}</p>
                </div>
              </div>

            </Link>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Tracks;

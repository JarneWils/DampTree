"use client";


// Components
import Foto from "@/components/Foto";
import Socials from "@/components/Socials";
import Tracks from "@/components/Tracks";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center">

            {/*logo*/}
            <div className="-ml-[100px] mt-[50px] xl:-ml-[120px]">
              <Foto />
            </div>

            {/*naam*/}
            <div className="mt-[110px] xl:mt-[130px] -ml-1 justify-center items-center text-2xl xl:text-4xl gothic">
              D A M P
            </div>

            {/*Book Us*/}
            <div className="mt-[25px]">
              <a href="mailto:pntbookings@gmail.com?subject=Booking%20Request&body=Hi%2C%0D%0A%0D%0AI%20am%20interested%20in%20booking%20DAMP%20for%20an%20upcoming%20event.%0D%0ACould%20you%20please%20provide%20details%20on%20your%20pricing%3F%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Information%5D">
                <Button>Book us</Button>
              </a>
            </div>

            {/*Socials*/}
            <div>
              <Socials />
            </div>

            {/*Tracks*/}
            <div className="mt-5">
              <Tracks />
            </div>

            <div>
              <BackToTop />
            </div>


          </div>
        </div>
    </section> 
  );
}

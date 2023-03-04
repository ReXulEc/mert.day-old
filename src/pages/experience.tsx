import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import UserFetch from "@components/UserFetch";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex text-white justify-center">
      <div className="flex flex-col w-full items-center rounded-xl space-x-5 space-y-3 h-full">
        <div className="flex flex-col rounded-xl md:w-9/12 w-10/12 mobile:py-4 py-10">
          <div className="flex flex-col space-y-6 mobile:pt-3 ">
            <section id="experiances" className="space-y-6">
              <section>
                <div className="flex space-x-4 items-center">
                  <Image
                    src="/img/openanimetransp.png"
                    width={"100"}
                    height={"100"}
                    className="h-9 w-9 rounded-xl invert"
                    alt=""
                  />
                  <div>
                    <p className="text-blue-400 text-xl">OpenAnime</p>
                    <div className="text-sm flex space-x-2">
                      <p>2022</p>
                      <p>-</p>
                      <p className="text-green-400">Now</p>
                    </div>
                  </div>
                </div>
                <UserFetch org={"openanime"} />
                <div className="md:w-2/3 w-11/12 md:text-base text-sm space-y-2">
                  <p className="">
                    OpenAnime is an open source anime platform that aims on
                    community, security and speed. It provides some of the
                    unique features that you will rarely see on an anime
                    platform.
                  </p>
                  <li>Watch together system to create rooms and chat with your friends that you have invited to your room in realtime while watching your anime</li>
                  <li>Community section to publish your favorite anime clips</li>
                  <li>Ability to download anime videos right in your browser</li>
                  <li>Ability to listen anime musics and soundtracks</li>
                  <p>and many more feautres that you will love while using OpenAnime!</p>
                </div>
              </section>
              <section>
                <div className="flex space-x-4 items-center">
                  <Image
                    src="/img/isolation.png"
                    width={"100"}
                    height={"100"}
                    className="h-10 w-10 rounded-xl"
                    alt=""
                  />
                  <div>
                    <p className="text-blue-400 text-xl">Isolation</p>
                    <div className="text-sm flex space-x-2">
                      <p>2022</p>
                      <p>-</p>
                      <p className="text-orange-400">Under Development</p>
                    </div>
                  </div>
                </div>
                <UserFetch org={"settleco"} />
                <div className="md:w-2/3 w-11/12 md:text-base text-sm space-y-2">
                  <p className="">
                  Isolation is a start page with some widgets to keep you focused.
                  </p>
                  <li>Among the prominent features of the plugin, you can customize the background, favorites, weather widget.</li>
                  <li>You can also access crypto prices and music of the day with this extention.</li>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

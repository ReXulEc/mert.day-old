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
              <section className="space-y-2 group">
                <div className="flex space-x-4 items-center">
                  <Image
                    src="/img/openanimetransp.png"
                    width={"100"}
                    height={"100"}
                    className="h-9 w-9 rounded-xl invert"
                    alt=""
                  />
                  <div className="flex justify-between w-full items-center">
                    <a className="flex" href="https://openani.me">
                      <section>
                        <p className="text-blue-400 text-xl font-semibold">
                            OpenAnime
                          </p>
                          <div className="text-sm flex space-x-2">
                            <p>2022</p>
                            <p>-</p>
                            <p className="text-green-400 font-semibold">Now</p>
                          </div>
                      </section>
                      <section className="group-hover:opacity-100 opacity-0 transition-all">
                        <img src="/youcan.png" className="h-12" alt="" />
                      </section>
                    </a>
                  </div>
                </div>
                <section className="w-full border-b-[1px] border-stone-400/20">
                  <UserFetch className="group" org={"openanime"} />
                </section>
                <div className="md:w-2/3 w-11/12 md:text-base text-sm space-y-2 text-stone-300">
                  <p className="">
                    <b>OpenAnime</b> is an open source anime platform that aims
                    on
                    <b> community, security and speed</b>. It provides some of
                    the unique features that you will rarely see on an anime
                    platform.
                  </p>
                  <li>
                    Watch together system to <b>create rooms</b> and{" "}
                    <b>chat with your friends</b> that you have invited to your
                    room in realtime while watching your anime
                  </li>
                  <li>
                    Community section to publish{" "}
                    <b>your favorite anime clips</b>
                  </li>
                  <li>
                    Ability to download <b>anime videos</b> right in your
                    browser
                  </li>
                  <li>
                    Ability to listen <b>anime musics and soundtracks</b>
                  </li>
                  <p>
                    and many more feautres that you will love while using{" "}
                    <b>OpenAnime</b>!
                  </p>
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

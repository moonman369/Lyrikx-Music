import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  data,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        src={song?.images?.coverart}
        alt={song?.title}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base font-bold text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>

    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={() => {
        handlePlayClick(song, i, data);
      }}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const {data} = useGetTopChartsQuery()
  const data = {};
  data.tracks = [
    {
      layout: "5",
      type: "MUSIC",
      key: "40590926",
      title: "Mockingbird",
      subtitle: "Eminem",
      share: {
        subject: "Mockingbird - Eminem",
        text: "I used Shazam to discover Mockingbird by Eminem.",
        href: "https://www.shazam.com/track/40590926/mockingbird",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Mockingbird by Eminem.",
        html: "https://www.shazam.com/snippets/email-share/40590926?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/40590926",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
        joecolor: "b:000219p:fefefes:cac9ddt:cbcbd0q:a2a1b5",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440751633",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "eminem",
          id: "42",
          adamid: "111051",
        },
      ],
      url: "https://www.shazam.com/track/40590926/mockingbird",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/111051/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445837780",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1445837780?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "661986542",
      title: "Un Briciolo Di Allegria (con Blanco)",
      subtitle: "Mina & Blanco",
      share: {
        subject: "Un Briciolo Di Allegria (con Blanco) - Mina & Blanco",
        text: "I used Shazam to discover Un Briciolo Di Allegria (con Blanco) by Mina & Blanco.",
        href: "https://www.shazam.com/track/661986542/un-briciolo-di-allegria-con-blanco",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/36/97/bd/3697bdef-5240-a5bb-c039-defa597b5b47/8053614832682_cover.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Un Briciolo Di Allegria (con Blanco) by Mina & Blanco.",
        html: "https://www.shazam.com/snippets/email-share/661986542?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/17/5d/58/175d588c-9d59-700e-f631-e32375490cd2/mzl.qswgpbfa.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/661986542",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/17/5d/58/175d588c-9d59-700e-f631-e32375490cd2/mzl.qswgpbfa.jpg/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/36/97/bd/3697bdef-5240-a5bb-c039-defa597b5b47/8053614832682_cover.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/36/97/bd/3697bdef-5240-a5bb-c039-defa597b5b47/8053614832682_cover.jpg/400x400cc.jpg",
        joecolor: "b:c5baa8p:0f0d0ds:24221dt:33302cq:444039",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1682327283",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/61/ad/d8/61add8b0-986b-ecdc-b0fe-31f854025e3b/mzaf_9580145670701985857.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/un-briciolo-di-allegria-con-blanco/1682327269?i=1682327283&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/un-briciolo-di-allegria-con-blanco/1682327269?i=1682327283&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "mina",
          id: "42",
          adamid: "6428287",
        },
        {
          alias: "blanco",
          id: "42",
          adamid: "1483468424",
        },
      ],
      url: "https://www.shazam.com/track/661986542/un-briciolo-di-allegria-con-blanco",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/6428287/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "335874133",
      title: "Die For You",
      subtitle: "The Weeknd",
      share: {
        subject: "Die For You - The Weeknd",
        text: "I used Shazam to discover Die For You by The Weeknd.",
        href: "https://www.shazam.com/track/335874133/die-for-you",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Die For You by The Weeknd.",
        html: "https://www.shazam.com/snippets/email-share/335874133?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/335874133",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/55/f8/5c/55f85c40-3e34-e35f-ed2a-cf975e622059/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/400x400cc.jpg",
        joecolor: "b:0c0e00p:f8bf00s:e56409t:c99c00q:b95307",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440870395",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/91/61/d1/9161d19c-53fd-cdb2-3ef3-19f7f351cea8/mzaf_16887243413012521186.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/die-for-you/1440870373?i=1440870395&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/die-for-you/1440870373?i=1440870395&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "the-weeknd",
          id: "42",
          adamid: "479756766",
        },
      ],
      url: "https://www.shazam.com/track/335874133/die-for-you",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/479756766/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1596970745",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1596970745?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "498502624",
      title: "Under The Influence",
      subtitle: "Chris Brown",
      share: {
        subject: "Under The Influence - Chris Brown",
        text: "I used Shazam to discover Under The Influence by Chris Brown.",
        href: "https://www.shazam.com/track/498502624/under-the-influence",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Under The Influence by Chris Brown.",
        html: "https://www.shazam.com/snippets/email-share/498502624?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/498502624",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
        joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1643756110",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/15/a9/8f15a986-0cd0-4804-5335-85afddb45ec6/mzaf_842264860529529074.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "chris-brown",
          id: "42",
          adamid: "95705522",
        },
      ],
      url: "https://www.shazam.com/track/498502624/under-the-influence",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/95705522/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1650529451",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1650529451?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "632531170",
      title: "Unholy",
      subtitle: "Sam Smith & Kim Petras",
      share: {
        subject: "Unholy - Sam Smith & Kim Petras",
        text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
        href: "https://www.shazam.com/track/632531170/unholy",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
        html: "https://www.shazam.com/snippets/email-share/632531170?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/632531170",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
        joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1649325659",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3a/2e/99/3a2e99b8-ee01-7af0-f1e0-b189e54cf85c/mzaf_7494069049386285167.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "sam-smith",
          id: "42",
          adamid: "156488786",
        },
        {
          alias: "kim-petras",
          id: "42",
          adamid: "291697579",
        },
      ],
      url: "https://www.shazam.com/track/632531170/unholy",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/156488786/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1647565781",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1647565781?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "609260140",
      title: "As It Was",
      subtitle: "Harry Styles",
      share: {
        subject: "As It Was - Harry Styles",
        text: "I used Shazam to discover As It Was by Harry Styles.",
        href: "https://www.shazam.com/track/609260140/as-it-was",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover As It Was by Harry Styles.",
        html: "https://www.shazam.com/snippets/email-share/609260140?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/609260140",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
        joecolor: "b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1615585008",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "harry-styles",
          id: "42",
          adamid: "471260289",
        },
      ],
      url: "https://www.shazam.com/track/609260140/as-it-was",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/471260289/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1616896437",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1616896437?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "515224555",
      title: "Low Down",
      subtitle: "Lil Baby",
      share: {
        subject: "Low Down - Lil Baby",
        text: "I used Shazam to discover Low Down by Lil Baby.",
        href: "https://www.shazam.com/track/515224555/low-down",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/9f/8f/f9/9f8ff9e7-cbb4-efd6-1335-c0b001f2649a/20UMGIM30253.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Low Down by Lil Baby.",
        html: "https://www.shazam.com/snippets/email-share/515224555?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/18/4c/81/184c81bb-cedb-2f49-0b6f-ed5bc7805647/f5c5add6-2dbb-4e3d-bfd3-22064dc590b4_ami-identity-90063e2844a90b2c24595bab4b3e50d0-2022-10-12T17-56-32.639Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/515224555",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/18/4c/81/184c81bb-cedb-2f49-0b6f-ed5bc7805647/f5c5add6-2dbb-4e3d-bfd3-22064dc590b4_ami-identity-90063e2844a90b2c24595bab4b3e50d0-2022-10-12T17-56-32.639Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/9f/8f/f9/9f8ff9e7-cbb4-efd6-1335-c0b001f2649a/20UMGIM30253.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/9f/8f/f9/9f8ff9e7-cbb4-efd6-1335-c0b001f2649a/20UMGIM30253.rgb.jpg/400x400cc.jpg",
        joecolor: "b:10121ap:ebe4eds:c3bdd2t:bfbac2q:9f9bad",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1510840886",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2a/c6/f0/2ac6f0e7-1beb-cb6e-10db-0e614993b536/mzaf_10126296879875928278.plus.aac.p.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/low-down/1510840178?i=1510840886&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/low-down/1510840178?i=1510840886&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "lil-baby",
          id: "42",
          adamid: "1276656483",
        },
      ],
      url: "https://www.shazam.com/track/515224555/low-down",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1276656483/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "626708777",
      title: "Miss You",
      subtitle: "Oliver Tree & Robin Schulz",
      share: {
        subject: "Miss You - Oliver Tree & Robin Schulz",
        text: "I used Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
        href: "https://www.shazam.com/track/626708777/miss-you",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
        html: "https://www.shazam.com/snippets/email-share/626708777?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/34/e2/89/34e2892d-f812-db6a-1d24-b0c81e96849f/39ecba06-e143-4801-b33b-b5b8367b0474_ami-identity-3bd5d7c869befd01c574e84637437516-2022-11-14T18-17-57.618Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/626708777",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/34/e2/89/34e2892d-f812-db6a-1d24-b0c81e96849f/39ecba06-e143-4801-b33b-b5b8367b0474_ami-identity-3bd5d7c869befd01c574e84637437516-2022-11-14T18-17-57.618Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
        joecolor: "b:fea300p:090500s:4c1200t:3a2500q:6f2f00",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1638208778",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/78/d1/8f/78d18f9f-671b-3c3c-0033-917651170937/mzaf_14625856779470870222.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "oliver-tree",
          id: "42",
          adamid: "1140096017",
        },
        {
          alias: "robin-schulz",
          id: "42",
          adamid: "347433400",
        },
      ],
      url: "https://www.shazam.com/track/626708777/miss-you",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1140096017/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1651969464",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1651969464?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "406910425",
      title: "Помню твоё тело",
      subtitle: "Эллаи",
      share: {
        subject: "Помню твоё тело - Эллаи",
        text: "I used Shazam to discover Помню твоё тело by Эллаи.",
        href: "https://www.shazam.com/track/406910425/%D0%BF%D0%BE%D0%BC%D0%BD%D1%8E-%D1%82%D0%B2%D0%BE%D1%91-%D1%82%D0%B5%D0%BB%D0%BE",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/42/dc/04/42dc04b0-3384-bb8d-3d38-32ae4840bbdb/4610027697648.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Помню твоё тело by Эллаи.",
        html: "https://www.shazam.com/snippets/email-share/406910425?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/67/3a/58/673a5876-a973-f7e4-7117-4a89c05a9517/deec3e4d-381e-45dd-b548-ba754774a3ff_file_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/406910425",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/67/3a/58/673a5876-a973-f7e4-7117-4a89c05a9517/deec3e4d-381e-45dd-b548-ba754774a3ff_file_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/42/dc/04/42dc04b0-3384-bb8d-3d38-32ae4840bbdb/4610027697648.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/42/dc/04/42dc04b0-3384-bb8d-3d38-32ae4840bbdb/4610027697648.jpg/400x400cc.jpg",
        joecolor: "b:00065fp:eaeaecs:fe2935t:bbbcd0q:cb223d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1568505380",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/91/3b/52/913b521f-7045-fa2e-98f7-701330e994de/mzaf_2618934706213908850.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/%D0%BF%D0%BE%D0%BC%D0%BD%D1%8E-%D1%82%D0%B2%D0%BE%D1%91-%D1%82%D0%B5%D0%BB%D0%BE/1568505376?i=1568505380&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/%D0%BF%D0%BE%D0%BC%D0%BD%D1%8E-%D1%82%D0%B2%D0%BE%D1%91-%D1%82%D0%B5%D0%BB%D0%BE/1568505376?i=1568505380&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "%D1%8D%D0%BB%D0%BB%D0%B0%D0%B8",
          id: "42",
          adamid: "1040537851",
        },
      ],
      url: "https://www.shazam.com/track/406910425/%D0%BF%D0%BE%D0%BC%D0%BD%D1%8E-%D1%82%D0%B2%D0%BE%D1%91-%D1%82%D0%B5%D0%BB%D0%BE",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1040537851/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "650906965",
      title: "Last Night",
      subtitle: "Morgan Wallen",
      share: {
        subject: "Last Night - Morgan Wallen",
        text: "I used Shazam to discover Last Night by Morgan Wallen.",
        href: "https://www.shazam.com/track/650906965/last-night",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/86/cc/00/86cc001c-2efc-9ebb-8290-17f4f3ba3e4a/23UMGIM08087.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Last Night by Morgan Wallen.",
        html: "https://www.shazam.com/snippets/email-share/650906965?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/2e/6b/fa/2e6bfaff-96d6-3ed9-eb7f-bd8e05e43d2e/e96cec60-987f-4db4-96ee-0aed8fd04f22_ami-identity-9e8a6aedf0dca3c60ecb0d44b67ae82b-2023-03-03T14-00-46.492Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/650906965",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/2e/6b/fa/2e6bfaff-96d6-3ed9-eb7f-bd8e05e43d2e/e96cec60-987f-4db4-96ee-0aed8fd04f22_ami-identity-9e8a6aedf0dca3c60ecb0d44b67ae82b-2023-03-03T14-00-46.492Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/86/cc/00/86cc001c-2efc-9ebb-8290-17f4f3ba3e4a/23UMGIM08087.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/86/cc/00/86cc001c-2efc-9ebb-8290-17f4f3ba3e4a/23UMGIM08087.rgb.jpg/400x400cc.jpg",
        joecolor: "b:171312p:ece2e3s:d3d2cbt:c1b9b9q:adaba6",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1667990774",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/89/1e/03/891e03c1-98b8-3cbc-a10a-612427bf354a/mzaf_6519185680716377585.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/last-night/1667990565?i=1667990774&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/last-night/1667990565?i=1667990774&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "morgan-wallen",
          id: "42",
          adamid: "829142092",
        },
      ],
      url: "https://www.shazam.com/track/650906965/last-night",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/829142092/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "661459358",
      title: "Classy 101 (Mixed)",
      subtitle: "Feid & Young Miko",
      share: {
        subject: "Classy 101 (Mixed) - Feid & Young Miko",
        text: "I used Shazam to discover Classy 101 (Mixed) by Feid & Young Miko.",
        href: "https://www.shazam.com/track/661459358/classy-101",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/31/ee/51/31ee513b-fed4-2827-ee30-075b48c33e5d/23UMGIM36009.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Classy 101 (Mixed) by Feid & Young Miko.",
        html: "https://www.shazam.com/snippets/email-share/661459358?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/9f/c3/8a/9fc38aba-bc58-a831-f5b0-b1281e588099/744ee554-b72a-4956-9384-274321c6b9ce_ami-identity-3b6171ac786da31711952722cc41532a-2022-12-01T22-27-49.045Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/661459358",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/9f/c3/8a/9fc38aba-bc58-a831-f5b0-b1281e588099/744ee554-b72a-4956-9384-274321c6b9ce_ami-identity-3b6171ac786da31711952722cc41532a-2022-12-01T22-27-49.045Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/31/ee/51/31ee513b-fed4-2827-ee30-075b48c33e5d/23UMGIM36009.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/31/ee/51/31ee513b-fed4-2827-ee30-075b48c33e5d/23UMGIM36009.rgb.jpg/400x400cc.jpg",
        joecolor: "b:e6e200p:000b00s:1b1e0et:2e3600q:43450b",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1679990038",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d0/33/51/d03351df-cc3c-24c9-5c47-802dbed09362/mzaf_2203945619037271217.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/classy-101/1679990036?i=1679990038&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/classy-101/1679990036?i=1679990038&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "feid",
          id: "42",
          adamid: "194502100",
        },
        {
          alias: "young-miko",
          id: "42",
          adamid: "1576521417",
        },
      ],
      url: "https://www.shazam.com/track/661459358/classy-101",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/194502100/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1680087001",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1680087001?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "638593014",
      title: "BAILAR CONTIGO",
      subtitle: "Black Eyed Peas & Daddy Yankee",
      share: {
        subject: "BAILAR CONTIGO - Black Eyed Peas & Daddy Yankee",
        text: "I used Shazam to discover BAILAR CONTIGO by Black Eyed Peas & Daddy Yankee.",
        href: "https://www.shazam.com/track/638593014/bailar-contigo",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover BAILAR CONTIGO by Black Eyed Peas & Daddy Yankee.",
        html: "https://www.shazam.com/snippets/email-share/638593014?lang=en-US&country=US",
        avatar:
          "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/bd/48/51/bd485116-05fc-e6a8-f546-8702bdccba3c/626ec0a6-c499-4813-b32b-0990a7bf9d13_ami-identity-03c769e8900fce36c934e8f3fa55c9d8-2022-10-28T16-37-01.964Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/638593014",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/bd/48/51/bd485116-05fc-e6a8-f546-8702bdccba3c/626ec0a6-c499-4813-b32b-0990a7bf9d13_ami-identity-03c769e8900fce36c934e8f3fa55c9d8-2022-10-28T16-37-01.964Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
        joecolor: "b:71605dp:ffffffs:ecddcet:e2dfdeq:d3c4b8",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1651268063",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a5/f4/bc/a5f4bc7e-cbc7-2c27-36e3-98c13e7bb046/mzaf_12359111785248418950.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/bailar-contigo/1651267735?i=1651268063&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/bailar-contigo/1651267735?i=1651268063&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "black-eyed-peas",
          id: "42",
          adamid: "360391",
        },
        {
          alias: "daddy-yankee",
          id: "42",
          adamid: "25514958",
        },
      ],
      url: "https://www.shazam.com/track/638593014/bailar-contigo",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/360391/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1653867416",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1653867416?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "581828191",
      title: "Until I Found You",
      subtitle: "Stephen Sanchez",
      share: {
        subject: "Until I Found You - Stephen Sanchez",
        text: "I used Shazam to discover Until I Found You by Stephen Sanchez.",
        href: "https://www.shazam.com/track/581828191/until-i-found-you",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Until I Found You by Stephen Sanchez.",
        html: "https://www.shazam.com/snippets/email-share/581828191?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/581828191",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
        joecolor: "b:b3c1cap:1f1f16s:242821t:3d3f3aq:414743",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1638404502",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/20/2e/9a/202e9ab2-56f6-1bcf-0f57-c5eea436bf1e/mzaf_8577263287954913095.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "stephen-sanchez",
          id: "42",
          adamid: "1276541872",
        },
      ],
      url: "https://www.shazam.com/track/581828191/until-i-found-you",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1276541872/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1631950014",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1631950014?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "662278184",
      title: "Jericho",
      subtitle: "Iniko",
      share: {
        subject: "Jericho - Iniko",
        text: "I used Shazam to discover Jericho by Iniko.",
        href: "https://www.shazam.com/track/662278184/jericho",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ac/3c/b6/ac3cb600-a647-5fcc-c7e1-baf2e745dd6c/196871066082.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Jericho by Iniko.",
        html: "https://www.shazam.com/snippets/email-share/662278184?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/b0/dd/5e/b0dd5e89-c9ee-c648-7d1f-ccf76e49b7fb/dbf8ac40-f7f5-48d5-a580-ec78846c3d26_file_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/662278184",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/b0/dd/5e/b0dd5e89-c9ee-c648-7d1f-ccf76e49b7fb/dbf8ac40-f7f5-48d5-a580-ec78846c3d26_file_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ac/3c/b6/ac3cb600-a647-5fcc-c7e1-baf2e745dd6c/196871066082.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ac/3c/b6/ac3cb600-a647-5fcc-c7e1-baf2e745dd6c/196871066082.jpg/400x400cc.jpg",
        joecolor: "b:182329p:efeee9s:e3e4d4t:c4c5c3q:babdb1",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1682564938",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ef/b7/e5/efb7e553-d389-3b32-cb25-8d67220290a8/mzaf_9863213806052529732.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/jericho/1682564934?i=1682564938&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/jericho/1682564934?i=1682564938&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "iniko",
          id: "42",
          adamid: "1514597834",
        },
      ],
      url: "https://www.shazam.com/track/662278184/jericho",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1514597834/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "615511623",
      title: "Rollercoaster (feat. J Balvin)",
      subtitle: "Burna Boy",
      share: {
        subject: "Rollercoaster (feat. J Balvin) - Burna Boy",
        text: "I used Shazam to discover Rollercoaster (feat. J Balvin) by Burna Boy.",
        href: "https://www.shazam.com/track/615511623/rollercoaster-feat-j-balvin",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Rollercoaster (feat. J Balvin) by Burna Boy.",
        html: "https://www.shazam.com/snippets/email-share/615511623?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/615511623",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg",
        joecolor: "b:620404p:e1baafs:e2b48dt:c8968dq:c89172",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1623677918",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/57/49/a2/5749a22c-ed0c-fb5b-2c20-0fa5cfaffa9b/mzaf_6904930191642466625.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/rollercoaster-feat-j-balvin/1623677591?i=1623677918&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/rollercoaster-feat-j-balvin/1623677591?i=1623677918&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "burna-boy",
          id: "42",
          adamid: "591899010",
        },
      ],
      url: "https://www.shazam.com/track/615511623/rollercoaster-feat-j-balvin",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/591899010/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1677647240",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1677647240?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "658953364",
      title: "BESO",
      subtitle: "ROSALÍA & Rauw Alejandro",
      share: {
        subject: "BESO - ROSALÍA & Rauw Alejandro",
        text: "I used Shazam to discover BESO by ROSALÍA & Rauw Alejandro.",
        href: "https://www.shazam.com/track/658953364/beso",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/b0/e4/ac/b0e4ac99-eb38-7370-ea50-0bcf0bcbb054/196589949080.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover BESO by ROSALÍA & Rauw Alejandro.",
        html: "https://www.shazam.com/snippets/email-share/658953364?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/658953364",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/b0/e4/ac/b0e4ac99-eb38-7370-ea50-0bcf0bcbb054/196589949080.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/b0/e4/ac/b0e4ac99-eb38-7370-ea50-0bcf0bcbb054/196589949080.jpg/400x400cc.jpg",
        joecolor: "b:3a0606p:e9848fs:ea5d69t:c66b74q:c74b55",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1676343411",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/48/6f/95/486f9539-bca5-3b41-888b-8c12dae6c8e6/mzaf_4355188276182978938.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/beso/1676343408?i=1676343411&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/beso/1676343408?i=1676343411&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "rosal%C3%ADa",
          id: "42",
          adamid: "313845115",
        },
        {
          alias: "rauw-alejandro",
          id: "42",
          adamid: "1107186883",
        },
      ],
      url: "https://www.shazam.com/track/658953364/beso",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/313845115/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1678643071",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1678643071?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "60695704",
      title: "Take On Me",
      subtitle: "a-ha",
      share: {
        subject: "Take On Me - a-ha",
        text: "I used Shazam to discover Take On Me by a-ha.",
        href: "https://www.shazam.com/track/60695704/take-on-me",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music/c6/e1/c8/mzi.ixgzfcmc.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Take On Me by a-ha.",
        html: "https://www.shazam.com/snippets/email-share/60695704?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/31/0e/e8/310ee8f4-08dc-2884-d5cc-03d9e5045ae7/mzl.bjyjghez.jpeg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/60695704",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/31/0e/e8/310ee8f4-08dc-2884-d5cc-03d9e5045ae7/mzl.bjyjghez.jpeg/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music/c6/e1/c8/mzi.ixgzfcmc.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music/c6/e1/c8/mzi.ixgzfcmc.jpg/400x400cc.jpg",
        joecolor: "b:e3e2dep:0d0e0fs:222223t:383838q:484848",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "380907765",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/d4/4f/6b/d44f6b5d-b44e-fb3b-3131-fc4de6cb7dd8/mzaf_6518680689350248047.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/take-on-me/380907762?i=380907765&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/take-on-me/380907762?i=380907765&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "a-ha",
          id: "42",
          adamid: "166566",
        },
      ],
      url: "https://www.shazam.com/track/60695704/take-on-me",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/166566/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=392429637",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/392429637?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "514611398",
      title: "Gaichite",
      subtitle: "Misha Xramovi",
      share: {
        subject: "Gaichite - Misha Xramovi",
        text: "I used Shazam to discover Gaichite by Misha Xramovi.",
        href: "https://www.shazam.com/track/514611398/gaichite",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/32/45/2c/32452cdd-7fa3-251a-59b3-dee87c7557ed/cover.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Gaichite by Misha Xramovi.",
        html: "https://www.shazam.com/snippets/email-share/514611398?lang=en-US&country=US",
        avatar:
          "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/80/2f/96/802f96db-e23e-de55-5b80-0184936b21cb/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/514611398",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/80/2f/96/802f96db-e23e-de55-5b80-0184936b21cb/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/32/45/2c/32452cdd-7fa3-251a-59b3-dee87c7557ed/cover.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/32/45/2c/32452cdd-7fa3-251a-59b3-dee87c7557ed/cover.jpg/400x400cc.jpg",
        joecolor: "b:d4cfcbp:090907s:281e1at:32302eq:4a413d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1508982990",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/1c/4a/9d/1c4a9dff-2870-5bc2-cf0b-b6d517148874/mzaf_5141350126721105047.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/gaichite/1508982983?i=1508982990&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/gaichite/1508982983?i=1508982990&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "misha-xramovi",
          id: "42",
          adamid: "1195225293",
        },
      ],
      url: "https://www.shazam.com/track/514611398/gaichite",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1195225293/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "660498510",
      title: "FLOWER",
      subtitle: "JISOO",
      share: {
        subject: "FLOWER - JISOO",
        text: "I used Shazam to discover FLOWER by JISOO.",
        href: "https://www.shazam.com/track/660498510/flower",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/61/13/1f/61131f6c-d12a-19cb-333c-9c34eec0f23e/23UMGIM29712.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover FLOWER by JISOO.",
        html: "https://www.shazam.com/snippets/email-share/660498510?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a9/04/cb/a904cb7c-4669-8317-6cf1-32a993994cfe/5284e032-034f-402b-b015-a1746349501a_ami-identity-27ce329449e330082219af194269e317-2023-03-28T00-52-11.917Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/660498510",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a9/04/cb/a904cb7c-4669-8317-6cf1-32a993994cfe/5284e032-034f-402b-b015-a1746349501a_ami-identity-27ce329449e330082219af194269e317-2023-03-28T00-52-11.917Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/61/13/1f/61131f6c-d12a-19cb-333c-9c34eec0f23e/23UMGIM29712.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/61/13/1f/61131f6c-d12a-19cb-333c-9c34eec0f23e/23UMGIM29712.rgb.jpg/400x400cc.jpg",
        joecolor: "b:024a0ap:ebd3c4s:dbcccct:bcb79fq:afb2a5",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1679414587",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b2/18/5e/b2185ef0-49c5-fef2-55da-4711a40fff44/mzaf_11271335445075758380.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/flower/1679414586?i=1679414587&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/flower/1679414586?i=1679414587&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "jisoo",
          id: "42",
          adamid: "1548008317",
        },
      ],
      url: "https://www.shazam.com/track/660498510/flower",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1548008317/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "650103162",
      title: "Whistle",
      subtitle: "Jax Jones & Calum Scott",
      share: {
        subject: "Whistle - Jax Jones & Calum Scott",
        text: "I used Shazam to discover Whistle by Jax Jones & Calum Scott.",
        href: "https://www.shazam.com/track/650103162/whistle",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/7e/c0/62/7ec0625d-c81a-585f-2b86-0413aca3d93b/22UM1IM35541.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Whistle by Jax Jones & Calum Scott.",
        html: "https://www.shazam.com/snippets/email-share/650103162?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/63/23/c1/6323c110-3b90-37bf-5401-b5569feca00b/11a39408-a21c-4693-abb8-474c54c5c5bd_ami-identity-a8e1212cecce49f9ab4b4fa8106d5d56-2023-02-10T09-36-20.968Z_cropped.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/650103162",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/63/23/c1/6323c110-3b90-37bf-5401-b5569feca00b/11a39408-a21c-4693-abb8-474c54c5c5bd_ami-identity-a8e1212cecce49f9ab4b4fa8106d5d56-2023-02-10T09-36-20.968Z_cropped.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/7e/c0/62/7ec0625d-c81a-585f-2b86-0413aca3d93b/22UM1IM35541.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/7e/c0/62/7ec0625d-c81a-585f-2b86-0413aca3d93b/22UM1IM35541.rgb.jpg/400x400cc.jpg",
        joecolor: "b:ecececp:000000s:282828t:2f2f2fq:4f4f4f",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1668106394",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3f/96/c8/3f96c87a-7c55-e8ba-1789-e50a588e1565/mzaf_7788425804285755745.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/whistle/1668106391?i=1668106394&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/whistle/1668106391?i=1668106394&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          alias: "jax-jones",
          id: "42",
          adamid: "1201228278",
        },
        {
          alias: "calum-scott",
          id: "42",
          adamid: "190876590",
        },
      ],
      url: "https://www.shazam.com/track/650103162/whistle",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1201228278/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1670191084",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1670191084?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
  ];

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const topPlays = data?.tracks?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i, data) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">see more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays.map((song, i) => (
            <TopChartCard
              song={song}
              i={i}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
              data={data.tracks}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col mt-8">
          {" "}
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl">Top Artists</h2>
            <Link to="/top-artists">
              <p className="text-gray-300 text-base cursor-pointer">see more</p>
            </Link>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topPlays?.map((song, i) => (
              <SwiperSlide
                key={song.key}
                style={{ width: "25%", height: "auto" }}
                className="shadow-lg rounded-full animate-slideright"
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img
                    src={song?.images.background}
                    alt="name"
                    className="rounded-full w-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default TopPlay;

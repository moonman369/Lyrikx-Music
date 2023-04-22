import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  console.log(songid);

  //   const { data, isFetching } = useGetSongDetailsQuery(Number(songid));
  const data = {
    layout: "5",
    type: "MUSIC",
    key: "632531170",
    title: "Unholy",
    subtitle: "Sam Smith & Kim Petras",
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
    },
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
    hub: {
      type: "APPLEMUSIC",
      image:
        "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
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
              uri: "https://music.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
        {
          caption: "BUY",
          actions: [
            {
              type: "uri",
              uri: "https://itunes.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios",
            },
          ],
          beacondata: {
            type: "buy",
            providername: "itunes",
          },
          image:
            "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
          type: "buy",
          listcaption: "Buy on iTunes",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
          colouroverflowimage: false,
          providername: "itunes",
        },
      ],
      providers: [
        {
          caption: "Open in Spotify",
          images: {
            overflow:
              "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
            default:
              "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png",
          },
          actions: [
            {
              name: "hub:spotify:searchdeeplink",
              type: "uri",
              uri: "spotify:search:Unholy%20Sam%20Smith",
            },
          ],
          type: "SPOTIFY",
        },
        {
          caption: "Open in Deezer",
          images: {
            overflow:
              "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
            default:
              "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png",
          },
          actions: [
            {
              name: "hub:deezer:searchdeeplink",
              type: "uri",
              uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Unholy%27%20artist%3A%27Sam+Smith++Kim+Petras%27%7D",
            },
          ],
          type: "DEEZER",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    url: "https://www.shazam.com/track/632531170/unholy",
    artists: [
      {
        id: "42",
        adamid: "156488786",
      },
    ],
    isrc: "GBUM72205415",
    genres: {
      primary: "Pop",
    },
    urlparams: {
      "{tracktitle}": "Unholy",
      "{trackartist}": "Sam+Smith+%26+Kim+Petras",
    },
    myshazam: {
      apple: {
        actions: [
          {
            name: "myshazam:apple",
            type: "uri",
            uri: "https://music.apple.com/us/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
          },
        ],
      },
    },
    albumadamid: "1649325651",
    sections: [
      {
        type: "SONG",
        metapages: [
          {
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
            caption: "Sam Smith",
          },
          {
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
            caption: "Unholy",
          },
        ],
        tabname: "Song",
        metadata: [
          {
            title: "Album",
            text: "Gloria",
          },
          {
            title: "Label",
            text: "Capitol Records UK / EMI",
          },
          {
            title: "Released",
            text: "2022",
          },
        ],
      },
      {
        type: "LYRICS",
        text: [
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy",
          "",
          "He lucky, lucky, yeah (ooh)",
          "He lucky, lucky, yeah (ye-yeah)",
          "He lucky, lucky, yeah",
          "He lucky, lucky, yeah",
          "",
          "A lucky, lucky girl",
          "She got married to a boy like you",
          "She'd kick you out if she ever, ever knew",
          "'Bout all the - you tell me that you do",
          "",
          "Dirty, dirty boy",
          "You know everyone is talking on the scene",
          "I hear them whispering 'bout the places that you've been",
          "And how you don't know how to keep your business clean",
          "",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy",
          "He's sat back while she's dropping it, she be popping it",
          "Yeah, she put it down slowly",
          "Oh-ee-oh-ee-oh, he left his kids at",
          "Ho-ee-oh-ee-ome, so he can get that",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy (woo)",
          "",
          "Mmm, daddy, daddy, if you want it, drop the add'y (yuh)",
          "Give me love, give me Fendi, my Balenciaga daddy",
          "You gon' need to bag it up, 'cause I'm spending on Rodeo (woo)",
          "You can watch me back it up, I'll be gone in the a.m.",
          "And he, he get me Prada, get me Miu Miu like Rihanna (ah)",
          "He always call me 'cause I never cause no drama",
          "And when you want it, baby, I know I got you covered",
          "And when you need it, baby, just jump under the covers",
          "",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doin' somethin' unholy",
          "He's sat back while she's dropping it, she be popping it",
          "Yeah, she put it down slowly",
          "Oh-ee-oh-ee-oh, he left his kids at",
          "Ho-ee-oh-ee-ome, so he can get that",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doin' something unholy",
        ],
        footer:
          "Writer(s): Ilya Salmanzadeh, Kim Petras, Samuel Frederick Smith, Jimmy Napes, Omer Fedi, Henry Russell Walter, Blake Slatkin\nLyrics powered by www.musixmatch.com",
        tabname: "Lyrics",
        beacondata: {
          lyricsid: "30897220",
          providername: "musixmatch",
          commontrackid: "152048112",
        },
      },
      {
        type: "VIDEO",
        tabname: "Video",
        youtubeurl: {
          caption: "Sam Smith, Kim Petras - Unholy (Official Music Video)",
          image: {
            dimensions: {
              width: 1280,
              height: 720,
            },
            url: "https://i.ytimg.com/vi/Uq9gPaIzbe8/maxresdefault.jpg",
          },
          actions: [
            {
              name: "video:youtube",
              type: "webview",
              share: {
                subject: "Unholy - Sam Smith & Kim Petras",
                text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
                href: "https://www.shazam.com/track/632531170/unholy",
                image:
                  "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
                twitter:
                  "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
                html: "https://www.shazam.com/snippets/email-share/632531170?lang=-&country=US",
                avatar:
                  "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/de/0c/5f/de0c5f88-722a-32d8-ff95-51ea2d98cd33/9fd6e963-6b85-446e-aeb9-871641d96659_ami-identity-a9d9c72c23307ab2a64018246fe99b36-2022-11-11T11-06-33.418Z_cropped.png/800x800cc.jpg",
                snapchat: "https://www.shazam.com/partner/sc/track/632531170",
              },
              uri: "https://youtu.be/Uq9gPaIzbe8?autoplay=1",
            },
          ],
        },
      },
      {
        type: "RELATED",
        tabname: "Related",
      },
    ],
  };
  console.log(data);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={data} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {data?.sections[1].type === "LYRICS" ? (
            data.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, lyrics aren't available for this song
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;

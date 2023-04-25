import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  console.log(songid);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = ({ song, data, i }) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  //   const { data, isFetching } = useGetSongDetailsQuery(songid);
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
  const isFetching = false;
  // console.log(data);

  // const {
  //   data: relatedData,
  //   isFetching: isFetchingRelated,
  //   error,
  // } = useGetSongRelatedQuery(songid);

  const relatedData = {
    data: [
      {
        id: "track-similarities-id-632531170",
        type: "shazam-song-lists",
      },
    ],
    resources: {
      "shazam-song-lists": {
        "track-similarities-id-632531170": {
          id: "track-similarities-id-632531170",
          type: "shazam-song-lists",
          relationships: {
            tracks: {
              data: [
                {
                  id: "53510886",
                  type: "shazam-songs",
                },
                {
                  id: "628935200",
                  type: "shazam-songs",
                },
                {
                  id: "648859694",
                  type: "shazam-songs",
                },
                {
                  id: "643726163",
                  type: "shazam-songs",
                },
                {
                  id: "601555046",
                  type: "shazam-songs",
                },
                {
                  id: "626708777",
                  type: "shazam-songs",
                },
                {
                  id: "498502624",
                  type: "shazam-songs",
                },
                {
                  id: "607917333",
                  type: "shazam-songs",
                },
                {
                  id: "639053666",
                  type: "shazam-songs",
                },
                {
                  id: "614204083",
                  type: "shazam-songs",
                },
                {
                  id: "70679146",
                  type: "shazam-songs",
                },
                {
                  id: "606589047",
                  type: "shazam-songs",
                },
                {
                  id: "630520607",
                  type: "shazam-songs",
                },
                {
                  id: "609260140",
                  type: "shazam-songs",
                },
                {
                  id: "640613166",
                  type: "shazam-songs",
                },
                {
                  id: "40590926",
                  type: "shazam-songs",
                },
                {
                  id: "628712770",
                  type: "shazam-songs",
                },
                {
                  id: "636972694",
                  type: "shazam-songs",
                },
                {
                  id: "514260283",
                  type: "shazam-songs",
                },
                {
                  id: "308021058",
                  type: "shazam-songs",
                },
              ],
            },
          },
        },
      },
      songs: {
        687868140: {
          id: "687868140",
          type: "songs",
        },
        1055074639: {
          id: "1055074639",
          type: "songs",
        },
        1440751633: {
          id: "1440751633",
          type: "songs",
        },
        1440824272: {
          id: "1440824272",
          type: "songs",
        },
        1612321591: {
          id: "1612321591",
          type: "songs",
        },
        1614063459: {
          id: "1614063459",
          type: "songs",
        },
        1615585008: {
          id: "1615585008",
          type: "songs",
        },
        1621817894: {
          id: "1621817894",
          type: "songs",
        },
        1638208778: {
          id: "1638208778",
          type: "songs",
        },
        1640501238: {
          id: "1640501238",
          type: "songs",
        },
        1642613664: {
          id: "1642613664",
          type: "songs",
        },
        1643756110: {
          id: "1643756110",
          type: "songs",
        },
        1646526227: {
          id: "1646526227",
          type: "songs",
        },
        1649563461: {
          id: "1649563461",
          type: "songs",
        },
        1651763192: {
          id: "1651763192",
          type: "songs",
        },
        1660134392: {
          id: "1660134392",
          type: "songs",
        },
        1663558166: {
          id: "1663558166",
          type: "songs",
        },
        1663973562: {
          id: "1663973562",
          type: "songs",
        },
        1678878113: {
          id: "1678878113",
          type: "songs",
        },
        1680740761: {
          id: "1680740761",
          type: "songs",
        },
      },
      "track-highlights": {
        1281370544: {
          id: "1281370544",
          type: "track-highlights",
        },
        1445837780: {
          id: "1445837780",
          type: "track-highlights",
        },
        1520434039: {
          id: "1520434039",
          type: "track-highlights",
        },
        1616896437: {
          id: "1616896437",
          type: "track-highlights",
        },
        1617758121: {
          id: "1617758121",
          type: "track-highlights",
        },
        1623893089: {
          id: "1623893089",
          type: "track-highlights",
        },
        1643167420: {
          id: "1643167420",
          type: "track-highlights",
        },
        1646266064: {
          id: "1646266064",
          type: "track-highlights",
        },
        1647609220: {
          id: "1647609220",
          type: "track-highlights",
        },
        1648922849: {
          id: "1648922849",
          type: "track-highlights",
        },
        1650414355: {
          id: "1650414355",
          type: "track-highlights",
        },
        1650529451: {
          id: "1650529451",
          type: "track-highlights",
        },
        1651276204: {
          id: "1651276204",
          type: "track-highlights",
        },
        1651904457: {
          id: "1651904457",
          type: "track-highlights",
        },
        1651969464: {
          id: "1651969464",
          type: "track-highlights",
        },
        1652104610: {
          id: "1652104610",
          type: "track-highlights",
        },
      },
      artists: {
        111051: {
          id: "111051",
          type: "artists",
        },
        5557599: {
          id: "5557599",
          type: "artists",
        },
        28721078: {
          id: "28721078",
          type: "artists",
        },
        63346553: {
          id: "63346553",
          type: "artists",
        },
        95705522: {
          id: "95705522",
          type: "artists",
        },
        137057909: {
          id: "137057909",
          type: "artists",
        },
        260414340: {
          id: "260414340",
          type: "artists",
        },
        277293880: {
          id: "277293880",
          type: "artists",
        },
        358714030: {
          id: "358714030",
          type: "artists",
        },
        471260289: {
          id: "471260289",
          type: "artists",
        },
        524929515: {
          id: "524929515",
          type: "artists",
        },
        528928008: {
          id: "528928008",
          type: "artists",
        },
        670534462: {
          id: "670534462",
          type: "artists",
        },
        1140096017: {
          id: "1140096017",
          type: "artists",
        },
        1191850724: {
          id: "1191850724",
          type: "artists",
        },
        1304716885: {
          id: "1304716885",
          type: "artists",
        },
        1358539712: {
          id: "1358539712",
          type: "artists",
        },
        1400730578: {
          id: "1400730578",
          type: "artists",
        },
        1580652660: {
          id: "1580652660",
          type: "artists",
        },
      },
      albums: {
        687867700: {
          id: "687867700",
          type: "albums",
          attributes: {
            artistName: "Tom Odell",
            name: "Long Way Down",
            releaseDate: "2012",
          },
        },
        1055074478: {
          id: "1055074478",
          type: "albums",
          attributes: {
            artistName: "Sia",
            name: "This Is Acting",
            releaseDate: "2016",
          },
        },
        1440751265: {
          id: "1440751265",
          type: "albums",
          attributes: {
            artistName: "Eminem",
            name: "Encore",
            releaseDate: "2004",
          },
        },
        1440824019: {
          id: "1440824019",
          type: "albums",
          attributes: {
            artistName: "Lady Gaga",
            name: "Born This Way",
            releaseDate: "2011",
          },
        },
        1612321587: {
          id: "1612321587",
          type: "albums",
          attributes: {
            artistName: "Imagine Dragons",
            name: "Bones - Single",
            releaseDate: "2021",
          },
        },
        1614063395: {
          id: "1614063395",
          type: "albums",
          attributes: {
            artistName: "Rema",
            name: "Rave & Roses",
            releaseDate: "2022",
          },
        },
        1615584999: {
          id: "1615584999",
          type: "albums",
          attributes: {
            artistName: "Harry Styles",
            name: "Harry's House",
            releaseDate: "2022",
          },
        },
        1621817793: {
          id: "1621817793",
          type: "albums",
          attributes: {
            artistName: "OneRepublic",
            name: "Top Gun: Maverick (Music from the Motion Picture)",
            releaseDate: "2022",
          },
        },
        1638208775: {
          id: "1638208775",
          type: "albums",
          attributes: {
            artistName: "Oliver Tree & Robin Schulz",
            name: "Miss You - Single",
            releaseDate: "2022",
          },
        },
        1640501237: {
          id: "1640501237",
          type: "albums",
          attributes: {
            artistName: "Rema & Selena Gomez",
            name: "Calm Down - Single",
            releaseDate: "2022",
          },
        },
        1642613175: {
          id: "1642613175",
          type: "albums",
          attributes: {
            artistName: "Lil Nas X",
            name: "STAR WALKIN' (League of Legends Worlds Anthem) - Single",
            releaseDate: "2022",
          },
        },
        1643755888: {
          id: "1643755888",
          type: "albums",
          attributes: {
            artistName: "Chris Brown",
            name: "Under The Influence - Single",
            releaseDate: "2019",
          },
        },
        1646526226: {
          id: "1646526226",
          type: "albums",
          attributes: {
            artistName: "Rosa Linn",
            name: "SNAP PACK",
            releaseDate: "2022",
          },
        },
        1649563458: {
          id: "1649563458",
          type: "albums",
          attributes: {
            artistName: "JIN",
            name: "The Astronaut - Single",
            releaseDate: "2022",
          },
        },
        1651763191: {
          id: "1651763191",
          type: "albums",
          attributes: {
            artistName: "Rihanna",
            name: "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Single",
            releaseDate: "2022",
          },
        },
        1660133085: {
          id: "1660133085",
          type: "albums",
          attributes: {
            artistName: "Metro Boomin, The Weeknd & 21 Savage",
            name: "HEROES & VILLAINS (Heroes Version)",
            releaseDate: "2022",
          },
        },
        1663558165: {
          id: "1663558165",
          type: "albums",
          attributes: {
            artistName: "Coi Leray",
            name: "Players - EP",
            releaseDate: "2022",
          },
        },
        1663973555: {
          id: "1663973555",
          type: "albums",
          attributes: {
            artistName: "Miley Cyrus",
            name: "Endless Summer Vacation",
            releaseDate: "2023",
          },
        },
        1678877550: {
          id: "1678877550",
          type: "albums",
          attributes: {
            artistName: "David Guetta & Bebe Rexha",
            name: "Bebe",
            releaseDate: "2022",
          },
        },
        1680740657: {
          id: "1680740657",
          type: "albums",
          attributes: {
            artistName: "Glass Animals",
            name: "Dreamland (Real Life Edition)",
            releaseDate: "2020",
          },
        },
      },
      lyrics: {
        29282474: {
          id: "29282474",
          type: "lyrics",
          attributes: {
            text: [
              "I don't know what you've been told",
              "But time is running out, no need to take it slow",
              "I'm stepping to you toe-to-toe",
              "I should be scared, honey, maybe so",
              "",
              "But I ain't worried 'bout it right now (right now)",
              "Keeping dreams alive (hey!), 1999, heroes",
              "I ain't worried 'bout it right now (right now)",
              "Swimmin' in the floods (hey!), dancing on the clouds below",
              "I ain't worried 'bout it",
              "",
              "I ain't worried 'bout it",
              "Hey!",
              "",
              "I don't know what you've been told",
              "But time is running out, so spend it like it's gold",
              "I'm living like I'm nine-zeros",
              "Got no regrets, even when I'm broke, yeah",
              "",
              "I'm at my best when I got something I'm wanting to steal",
              "Way too busy for them problems and problems to feel (yeah-yeah)",
              "No stressing, just obsessin' with sealin' the deal",
              "I'll take it in and let it go",
              "",
              "But I ain't worried 'bout it right now (right now)",
              "Keeping dreams alive (hey!), 1999, heroes",
              "I ain't worried 'bout it right now (right now)",
              "Swimmin' in the floods (hey!), dancing on the clouds below",
              "",
              "I ain't worried 'bout it",
              "",
              "I ain't worried 'bout it",
              "",
              "Hey!",
              "",
              "(Ooh-ooh, ooh-ooh)",
              "I ain't worried",
              "(Ooh-ooh, oh-oh, ooh-ooh)",
              "Oh, no-no",
              "",
              "I ain't worried 'bout it right now (right now)",
              "Keeping dreams alive (hey!), 1999, heroes",
              "I ain't worried 'bout it right now (right now)",
              "Swimmin' in the floods (hey!), dancing on the clouds below",
              "I ain't worried 'bout it (ooh-aah, aah-ooh)",
              "",
              "Hey!",
              "I ain't worried 'bout it (ooh-ahh, aah-ooh)",
              "Hey!",
              "",
              "I ain't worried 'bout it",
            ],
            footer:
              "Writer(s): Tyler Spry, Brent Kutzle, Bjorn Yttling, Peter Moren, John Eriksson, Ryan Tedder\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "143245955",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        29353439: {
          id: "29353439",
          type: "lyrics",
          attributes: {
            text: [
              "(Vibez)",
              "",
              "Another banger",
              "",
              "Baby, calm down, calm down",
              "Girl, this your body e put my heart for lockdown",
              "For lockdown, oh, lockdown",
              "Girl, you sweet like Fanta, Fanta",
              "If I tell you say I love you no dey form yanga, oh, yanga",
              "No tell me no, no, no, no, whoa-whoa-whoa-whoa",
              "Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh",
              "Baby, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love",
              'You got me like, "Whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa"',
              "Shawty come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, mm-mm",
              "",
              "I see this fine girl, for my party she wear yellow",
              "Every other girl they dey do too much, but this girl mellow",
              "Naim I dey find situation I go use take tell am hello",
              "Finally I find way to talk to the girl but she no wan follow",
              "",
              "Who you come dey form for? (Mm-hm)",
              "Why you no wan comform? (Mm-hm)",
              "Then I start to feel her bum-bum (mm-hm)",
              "But she dey gimme small-small",
              "I know say she sabi pass that one (mm-hm)",
              "But she feeling insecure",
              "'Cause her friends go dey gum her like chewing gum",
              "Go dey gum her like chewing gum",
              "",
              "Baby, calm down, calm down",
              "Girl, this your body e put my heart for lockdown",
              "For lockdown, oh, lockdown",
              "Girl, you sweet like Fanta, Fanta",
              "If I tell you say I love you no dey form yanga, oh, yanga",
              "No tell me no, no, no, no, whoa-whoa-whoa-whoa",
              "",
              "Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh",
              "Baby, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love",
              'You got me like, "Whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa"',
              "Shawty come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, mm-mm",
              "",
              "As I reach my house I say make I rest small (make I rest small)",
              "As me I wake up na she dey my mind (na she dey my mind)",
              "Day one, day two, I no fit focus (I no fit focus)",
              "Na so me I call am, say make we link up (say make we link up)",
              "As I start to dey tell her how I feel, na my heart dey race",
              "Baby girl, if you leave me I no go love again",
              "Because e get many girls wey put my heart for pain",
              "Shebi, you feel my pain?",
              "",
              "Baby, calm down, calm down",
              "Girl, this your body e put my heart for lockdown",
              "For lockdown, oh, lockdown",
              "Girl, you sweet like Fanta, Fanta",
              "If I tell you say I love you no dey form yanga, oh, yanga",
              "No tell me no, no, no, no, whoa-whoa-whoa-whoa",
              "Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh",
              "Baby come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love",
              'You got me like, "Whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa-whoa"',
              "Shawty come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, mm-mm",
            ],
            footer:
              "Writer(s): Divine Ikubor, Michael Ovie Hunter, Alexander Uwaifo\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "139681095",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        29371213: {
          id: "29371213",
          type: "lyrics",
          attributes: {
            text: [
              "Gimme, gimme, gimme some time to think",
              "I'm in the bathroom, looking at me",
              "Face in the mirror is all I need (ooh-ooh)",
              "Wait until the reaper takes my life",
              "Never gonna get me out alive",
              "I will live a thousand million lives (ooh-ooh)",
              "",
              "My patience is waning, is this entertaining?",
              "Our patience is waning, is this entertaining?",
              "",
              "I-I-I got this feeling, yeah, you know",
              "Where I'm losing all control",
              "'Cause there's magic in my bones",
              "I-I-I got this feeling in my soul",
              "Go ahead and throw your stones",
              "'Cause there's magic in my bones",
              "",
              "Playing with the stick of dynamite",
              "There was never gray in black and white",
              "There was never wrong 'til there was right (ooh-ooh)",
              "Feeling like a boulder hurtling",
              "Seeing all the vultures circling",
              "Burning in the flames, I'm working in",
              "Turning in a bed, that's darkening",
              "",
              "My patience is waning, is this entertaining?",
              "Our patience is waning, is this entertaining?",
              "",
              "I-I-I got this feeling, yeah, you know",
              "Where I'm losing all control",
              "'Cause there's magic in my bones (in my bones)",
              "I-I-I got this feeling in my soul",
              "Go ahead and throw your stones",
              "'Cause there's magic in my bones",
              "",
              "'Cause there's magic in my bones",
              "",
              "Look in the mirror of my mind",
              "Turning the pages of my life",
              "Walking the path so many paced a million times",
              "Drown out the voices in the air",
              "Leaving the ones that never cared",
              "Picking the pieces up and building to the sky",
              "",
              "My patience is waning, is this entertaining?",
              "My patience is waning, is this entertaining?",
              "",
              "I-I-I got this feeling, yeah, you know",
              "Where I'm losing all control",
              "'Cause there's magic in my bones (magic in my bones)",
              "I-I-I got this feeling in my soul (soul)",
              "Go ahead and throw your stones",
              "'Cause there's magic in my bones",
              "",
              "There goes my mind (I-I-I) don't mind",
              "There goes my mind (there it goes, there it goes)",
              "There goes my mind (I-I-I) don't mind",
              "There goes my mind (there it goes)",
              "'Cause there's magic in my bones",
            ],
            footer:
              "Writer(s): Daniel Coulter Reynolds, Daniel Wayne Sermon, Benjamin Arthur Mckee, Mattias Per Larsson, Daniel James Platzman, Robin Lennart Fredriksson\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "140815485",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        29382097: {
          id: "29382097",
          type: "lyrics",
          attributes: {
            text: [
              "It's 4 a.m., I can't turn my head off",
              "Wishing these memories would fade, they never do",
              "Turns out people lie",
              'They said, "Just snap your fingers"',
              "As if it was really that easy for me to get over you",
              "I just need time",
              "",
              "Snapping one, two, where are you?",
              "You're still in my heart",
              "Snapping three, four, don't need you here anymore",
              "Get out of my heart",
              "'Cause I might snap",
              "",
              "I'm writing a song",
              'Said, "This is the last one"',
              "How many last songs are left? I'm losing count",
              "Since June 22nd, my heart's been on fire",
              "I've been spending my nights in the ring tryna put it out",
              "",
              "So I'm snapping one, two, where are you?",
              "You're still in my heart",
              "Snapping three, four, don't need you here anymore",
              "Get out of my heart",
              "'Cause I might snap",
              "",
              "(Oh-ooh-oh-oh)",
              "'Cause I might snap (oh-ooh-oh-oh-oh-oh)",
              "",
              'And if one more person says, "You should get over it"',
              "Oh, I might stop talking to people before I snap, snap, snap",
              "Oh, I might stop talking to people before I snap",
              "",
              "Snapping one, two, where are you? (Where are you?)",
              "You're still in my heart (still in my heart)",
              "Snapping three, four, don't need you here anymore (need you here anymore)",
              "Get out of my heart",
              "",
              "'Cause I might sna-, yeah-yeah-yeah, might snap (oh-ooh-oh-oh)",
              "'Cause I might sna-, yeah-yeah-yeah, might snap (oh-ooh-oh-oh-oh-oh)",
              "Get out of my heart, yeah-yeah-yeah, yeah, heart (oh-ooh-oh-oh)",
              "'Cause I might snap (oh-ooh-oh-oh-oh-oh)",
              "Get out of my heart, yeah",
              "",
              "'Cause I might snap",
            ],
            footer:
              "Writer(s): Courtney Harrell, Lawrence Principato, Jeremy Dussolliet, Roza Kostandyan, Tamar Mardirossian, Allison Crystal\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "141232935",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        29547308: {
          id: "29547308",
          type: "lyrics",
          attributes: {
            text: [
              "Last night, all I think about is you",
              "Don't stop, baby, you can walk through",
              "Don't wanna, but I think about you",
              "You know that I'm never gonna lose",
              "",
              "Road shimmer, wiggling the vision",
              "",
              "Heat, heat waves, I'm swimming in a mirror",
              "Road shimmer, wiggling the vision",
              "Heat, heat waves, I'm swimmin' in a-",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "Usually, I put something on TV",
              "So we never think about you and me",
              "But today, I see our reflections clearly in Hollywood",
              "Laying on the screen",
              "",
              "You just need a better life than this",
              "You need something I can never give",
              "Fake water all across the road",
              "It's gone now, the night has come, but",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "You can't fight it, you can't breathe",
              "You say something so loving, but",
              "Now I gotta let you go",
              "You'll be better off with someone new",
              "",
              "I don't wanna be alone",
              "You know it hurts me too",
              "You look so broken when you cry",
              "One more and then I say goodbye",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "I just wonder what you're dreaming of",
              "When you sleep and smile so comfortable",
              "I just wish that I could give you that",
              "That look that's perfectly un-sad",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Heat waves been faking me out",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "Sometimes all I think about is you",
              "Late nights in the middle of June",
              "Heat waves been faking me out",
              "Can't make you happier now",
              "",
              "Road shimmer wiggling the vision",
              "Heat, heat waves, I'm swimming in a mirror",
              "Road shimmer wiggling the vision",
              "Heat, heat waves, I'm swimming in a mirror",
            ],
            footer:
              "Writer(s): Dave Bayley\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "110434091",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30047022: {
          id: "30047022",
          type: "lyrics",
          attributes: {
            text: [
              "All smiles, I know what it takes to fool this town",
              "I'll do it 'til the sun goes down",
              "And all through the nighttime",
              "Oh, yeah",
              "Oh, yeah, I'll tell you what you wanna hear",
              "Leave my sunglasses on while I shed a tear",
              "It's never the right time",
              "Yeah, yeah",
              "",
              "I put my armor on, show you how strong I am",
              "I put my armor on, I'll show you that I am",
              "",
              "I'm unstoppable",
              "I'm a Porsche with no brakes",
              "I'm invincible",
              "Yeah, I win every single game",
              "I'm so powerful",
              "I don't need batteries to play",
              "I'm so confident",
              "Yeah, I'm unstoppable today",
              "",
              "Unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "I'm unstoppable today",
              "",
              "Break down, only alone I will cry out loud",
              "You'll never see what's hiding out",
              "Hiding out deep down",
              "Yeah, yeah",
              "I know, I've heard that to let your feelings show",
              "Is the only way to make friendships grow",
              "But I'm too afraid now",
              "Yeah, yeah",
              "",
              "I put my armor on, show you how strong I am",
              "I put my armor on, I'll show you that I am",
              "",
              "I'm unstoppable",
              "I'm a Porsche with no brakes",
              "I'm invincible",
              "Yeah, I win every single game",
              "I'm so powerful",
              "I don't need batteries to play",
              "I'm so confident",
              "Yeah, I'm unstoppable today",
              "",
              "Unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "I'm unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "I'm unstoppable today",
              "",
              "I put my armor on, show you how strong I am",
              "I put my armor on, I'll show you that I am",
              "",
              "I'm unstoppable",
              "I'm a Porsche with no brakes",
              "I'm invincible",
              "Yeah, I win every single game",
              "I'm so powerful",
              "I don't need batteries to play",
              "I'm so confident",
              "Yeah, I'm unstoppable today",
              "",
              "Unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "I'm unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "Unstoppable today",
              "I'm unstoppable today",
            ],
            footer:
              "Writer(s): Chris Braide, Sia Furler\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "47319389",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30143864: {
          id: "30143864",
          type: "lyrics",
          attributes: {
            text: [
              "Kiddo, Kiddo",
              "K-Kiddominant on the beat, better run it back",
              "",
              "Fuckin' Robitussin",
              "I don't know why this shit got me lazy right now, yeah",
              "Can't do Percocets or Molly",
              "I'm turnin' one, tryna live it up here right, right, right",
              "",
              "Baby, you can",
              "Ride it, ooh yeah",
              "Bring it over to my place",
              'And you be like, "Baby, who cares?"',
              "But I know you care",
              "Bring it over to my place",
              "",
              "You don't know what you did, did to me",
              "Your body lightweight, speaks to me",
              "I don't know what you did, did to me",
              "Your body lightweight, speaks to me",
              "",
              "Yeah",
              "Yeah",
              "",
              "I can make it hurricane on it",
              "Hunnid bands, make it rain on it",
              "Tie it up, put a chain on it",
              "Make you tattoo my name on it, oh",
              "",
              "Make you cry like a baby, yeah",
              "Let's Go Pro and make a video, yeah",
              "Make you cry like a baby, yeah",
              "Let's Go Pro and make a video",
              "Oh, yeah, yeah, yeah",
              "",
              "Baby, you can",
              "Ride it, ooh yeah",
              "Bring it over to my place",
              'And you be like, "Baby, who cares?"',
              "But I know you care",
              "Bring it over to my place",
              "",
              "You don't know what you did, did to me",
              "Your body lightweight, speaks to me",
              "I don't know what you did, did to me",
              "Your body lightweight, speaks to me",
              "",
              "Baby, you can",
              "Ride it, ooh yeah",
              'And you be like, "Baby, who cares?"',
              "But I know you care",
            ],
            footer:
              "Writer(s): Chris Brown, David Adeleke, Ayoola Agboola, Tiffany Mckie\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "101362448",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30339017: {
          id: "30339017",
          type: "lyrics",
          attributes: {
            text: [
              "You and me, 끝나지 않을 history",
              "Oh, 나의 우주가 돼 준 우리의 이야기",
              "목적지 없이 흘러가는 저 소행성처럼",
              "나도 그저 떠내려가고 있었어",
              "어둠 속에 찾은 나의 모든 dream",
              "새롭게 시작될 story",
              "",
              "When I'm with you, there is no one else",
              "And I get heaven to myself",
              "When I'm with you, there is no one else",
              "I feel this way I've never felt",
              "",
              "You and me, 깨지지 않는 별처럼",
              "너의 꿈이 되어 우주를 여행하는",
              "어두운 길을 비춰주는 저 은하수처럼",
              "너는 나를 향해 빛나고 있었어",
              "어둠 속에 찾은 단 하나의 빛",
              "너에게 향하는 나의 길",
              "",
              "When I'm with you, there is no one else",
              "And I get heaven to myself",
              "When I'm with you, there is no one else",
              "I feel this way I never felt",
              "",
              "I feel this way I never felt",
              "(Oh-oh-oh-oh-oh-oh-oh)",
              "",
              "When I'm with you, there is no one else",
              "And I get heaven to myself",
              "When I'm with you, there is no one else",
              "",
              "A life, a sparkle in your eyes",
              "Heaven comin' through",
              "And I love you",
              "",
              "And I love you",
              "",
              "(Oh-oh-oh-oh-oh-oh-oh)",
            ],
            footer:
              "Writer(s): Composer Author Unknown, Guy Rupert Berryman, Chris Martin, Jin, William Champion, Jonathan Mark Buckland, Kyrre Goervell-dahll\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "154251406",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30448711: {
          id: "30448711",
          type: "lyrics",
          attributes: {
            text: [
              'Come on, Harry, we wanna say "good night" to you!',
              "",
              "Holding me back",
              "Gravity's holding me back",
              "I want you to hold out the palm of your hand",
              "Why don't we leave it at that?",
              "",
              "Nothing to say",
              "When everything gets in the way",
              "Seems you cannot be replaced",
              "And I'm the one who will stay",
              "Oh-oh-oh",
              "",
              "In this world",
              "It's just us",
              "You know it's not the same as it was",
              "",
              "In this world",
              "It's just us",
              "You know it's not the same as it was",
              "",
              "As it was",
              "As it was",
              "You know it's not the same",
              "",
              "Answer the phone",
              "Harry, you're no good alone",
              "Why are you sitting at home on the floor?",
              "What kind of pills are you on?",
              "",
              "Ringing the bell",
              "And nobody's coming to help",
              "Your daddy lives by himself",
              "He just wants to know that you're well",
              "Oh-oh-oh",
              "",
              "In this world",
              "It's just us",
              "You know it's not the same as it was",
              "",
              "In this world",
              "It's just us",
              "You know it's not the same as it was",
              "",
              "As it was",
              "As it was",
              "You know it's not the same",
              "",
              "Go home, get ahead, light-speed internet",
              "I don't wanna talk about the way that it was",
              "Leave America, two kids follow her",
              "I don't wanna talk about who's doing it first",
              "",
              "Hey!",
              "",
              "As it was",
              "You know it's not the same as it was",
              "As it was",
              "As it was",
            ],
            footer:
              "Writer(s): Thomas Edward Percy Hull, Harry Joseph Hudson-taylor, Alfred Simon Hudson-taylor\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "141571537",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30485850: {
          id: "30485850",
          type: "lyrics",
          attributes: {
            text: [
              "Money",
              "Oh",
              "",
              "Love is just a history that they may prove",
              "And when you're gone",
              "I'll tell them my religion's you",
              "When Punktious comes to kill the king upon his throne",
              "I'm ready for their stones",
              "",
              "I'll dance, dance, dance",
              "With my hands, hands, hands",
              "Above my head, head, head",
              "Like Jesus said",
              "I'm gonna dance, dance, dance",
              "With my hands, hands, hands above my head",
              "Hands together, forgive him before he's dead, because",
              "",
              "I won't cry for you",
              "I won't crucify the things you do",
              "I won't cry for you",
              "See, when you're gone, I'll still be Bloody Mary",
              "",
              "Love",
              "",
              "We are not just art for Michelangelo to carve",
              "He can't rewrite the aggro of my furied heart",
              "I'll wait on mountain tops in Paris, cold",
              "J'veux pas mourir toute seule",
              "",
              "I'll dance, dance, dance",
              "With my hands, hands, hands",
              "Above my head, head, head",
              "Like Jesus said",
              "I'm gonna dance, dance, dance",
              "With my hands, hands, hands above my head",
              "Hands together, forgive him before he's dead, because",
              "",
              "I won't cry for you",
              "I won't crucify the things you do",
              "I won't cry for you",
              "See, when you're gone, I'll still be Bloody Mary",
              "",
              "Love",
              "",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "Gaga, Gaga",
              "",
              "Dum dum, da-di-da",
              "Dum dum, da-di-da-dadda-da-di-da",
              "Dum dum, da-di-da",
              "Dum dum, da-di-da",
              "Dum dum, da-di-da-dadda-da-di-da",
              "Dum dum, da-di-da",
              "",
              "I won't cry for you",
              "I won't crucify the things you do, do, do",
              "I won't cry for you",
              "See, when you're gone, I'll still be Bloody Mary",
              "",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "Oh-oh-oh-oh-oh",
              "",
              "Líberate, mi amor",
            ],
            footer:
              "Writer(s): Fernando Garibay, Lady Gaga, Zach Blair\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "9701438",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30514024: {
          id: "30514024",
          type: "lyrics",
          attributes: {
            text: [
              "Yeah, 'cause girls is players too, uh",
              "Yeah, yeah, 'cause girls is players too (keep it player, baby)",
              "'Cause girls is players too",
              "Bitches gettin' money all around the world",
              "'Cause girls is players too",
              "",
              "What you know 'bout livin' on the top?",
              "Penthouse suites, lookin' down on the opps?",
              "Took him for a test drive, left him on the lot",
              "Time is money, so I spent it on a watch, hol' on",
              "Lil' titties showin' through the white tee",
              "You can see the thong bussin' out my tight jeans (okay)",
              "Rocks on my fingers like a nigga wifed me",
              "Got another shorty? She ain't nothin' like me, yeah",
              "",
              "'Bout to catch another fade (yeah)",
              "The apple bottom make 'em wanna bite (yeah)",
              "I just wanna have a good night",
              "I just wanna have a good night (hold up)",
              "If you don't know, now you know",
              "If he broke, then you gotta let him go",
              "You could have anybody, eeny, miny, moe",
              "'Cause when you a boss, you could do what you want",
              "",
              "Yeah, 'cause girls is players too, uh",
              "Yeah, yeah, 'cause girls is players too (keep it player, baby)",
              "'Cause girls is players too",
              "Bitches gettin' money all around the world",
              "'Cause girls is players too",
              "",
              "I go on, and on, and on again",
              "He blowin' up my phone, but I'm ignorin' him",
              "He thinkin' he the one, I got like four of him",
              "Yeah, I'm sittin' first class, like Valedictorian, uh",
              "Came a long way from rag to riches",
              "Five-star bitch, yeah, I taste so delicious",
              "Let him lick the plate, yeah, I make him do the dishes",
              "Now he on news talk 'cause a bitch went missin', sheesh (yeah)",
              "",
              "'Bout to catch another fade (yeah)",
              "The apple bottom make 'em wanna bite (yeah)",
              "I just wanna have a good night",
              "I just wanna have a good night (hold up)",
              "If you don't know, now you know",
              "If he broke, then you gotta let him go",
              "You could have anybody, eeny, miny, moe",
              "'Cause when you a boss, you could do what you want",
              "",
              "Yeah, 'cause girls is players too, uh",
              "(It is time that we let 'em know that)",
              "Girls is players too (keep it player, baby)",
              "'Cause girls is players too",
              "Bitches gettin' money all around the world",
              "'Cause girls is players too",
            ],
            footer:
              "Writer(s): Sylvia Robinson, Clifton Chase, Melvin Glover, Edward Fletcher, Yonatan Goldstein, Akil King, Feli Ferraro, Coi Leray Collins\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "156259152",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30568373: {
          id: "30568373",
          type: "lyrics",
          attributes: {
            text: [
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "On the mission to get high up, I know that I'ma die",
              "Reaching for a life that I don't really need at all (at all)",
              "Never listened to replies, learned a lesson from the wise",
              "You should never take advice from a nigga that ain't try",
              "",
              "They said I wouldn't make it out alive",
              "They told me I would never see the rise",
              "That's why I gotta kill 'em every time",
              "Gotta watch 'em bleed too",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "Been that nigga since I came out my mama (hoo)",
              "Thanking God, daddy never wore a condom (hoo)",
              "Prove 'em wrong every time 'til it's normal",
              "Why worship legends when you know that you can join 'em?",
              "",
              "These niggas don't like me, they don't like me",
              "Likely, they wanna fight me, come on, try it out, try me",
              'They put me down, but I never cried out, "Why me?"',
              "Word from the wise, don't put worth inside a nigga that ain't try",
              "",
              "They said I wouldn't make it out alive",
              "They told me I would never see the rise",
              "That's why I gotta kill 'em every time",
              "Gotta watch 'em bleed too",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
              "",
              "I'm star walkin'",
              "",
              "Don't ever say it's over if I'm breathing",
              "Racing to the moonlight, and I'm speeding",
              "I'm headed to the stars, ready to go far",
              "I'm star walkin'",
            ],
            footer:
              "Writer(s): Henry Russell Walter, Atia Boggs, Montero Lamar Hill, Omer Fedi\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "152046965",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        30840256: {
          id: "30840256",
          type: "lyrics",
          attributes: {
            text: [
              "Don't remind me",
              "I'm minding my own damn business",
              "Don't try to find me",
              "I'm better left alone than in this",
              "It doesn't surprise me",
              "Do you really think that I could care",
              "If you really don't like me",
              "Find somebody else",
              "It could be anyone else out there",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "One thing",
              "When you're angry, you're a jerk",
              "And then you treat me like I'm worth nothing",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "It'll happen again",
              "I watch it happen over and over again",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "One thing",
              "When you're angry, you're a jerk",
              "And then you treat me like I'm worth nothing",
              "",
              "Don't remind me",
              "I'm minding my own damn business",
              "Don't try to find me",
              "I'm better left alone than in this",
              "It doesn't surprise me",
              "Do you really think that I could care",
              "If you really don't like me",
              "Find somebody else",
              "It could be anyone else out there",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "One thing",
              "When you're angry, you're a jerk",
              "And then you treat me like I'm worth nothing",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "It'll happen again",
              "I watch it happen over and over again",
              "",
              "Don't fret",
              "I don't ever wanna see you",
              "And I never wanna miss you again",
              "One thing",
              "When you're angry, you're a jerk",
              "And then you treat me like I'm worth nothing",
            ],
            footer:
              "Writer(s): David Pramik, Oliver Tree Nickell, 2\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "149517902",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        31117593: {
          id: "31117593",
          type: "lyrics",
          attributes: {
            text: [
              "Oooh",
              "Just can't believe this man",
              "(Metro Boomin want some more nigga)",
              "",
              "Somebody said they saw you",
              "The person you were kissing wasn't me",
              "And I would never ask you, I just kept it to myself",
              "",
              "I don't wanna know, if you're playing me",
              "Keep it on the low",
              "Cause my heart can't take it anymore",
              "And if you creeping, please don't let it show",
              "Oh baby, I don't wanna know",
              "",
              "I think about it when I hold you",
              "When looking in your eyes, I can't believe",
              "And I don't need to know the truth",
              "But baby keep it to yourself",
              "",
              "I don't wanna know, if you're playing me",
              "Keep it on the low",
              "Cause my heart can't take it anymore",
              "And if you creeping, please don't let it show",
              "Oh baby, I don't wanna know",
              "",
              "Did he touch you better than me? (touch you better than me?)",
              "Did he watch you fall asleep (watch you fall asleep?)",
              "Did you show him all those things that you used to do to me?",
              "If you're better off that way (better off that way)",
              "Baby all that I can say (all that I can say)",
              "If you're gonna do your thing, then don't come back to me",
              "Ooh",
              "",
              "Woah, woah, woah",
              "21",
              "Had me crushing, I was cuffing like the precinct",
              "How you go from housewife to a sneaky link",
              "Got you ridin round in all types of benz's and rovers",
              "Girl you used to ride in a rinky dink",
              "I'm the one put you in Eliante (on God)",
              "Fashion Nova model, I put you on the runway (on God)",
              "You was rocking coach bags, got you chanaynay",
              "Side bitch in frisco, I call her my bae bae (21)",
              "I got a girl but I still feel alone",
              "If you playing me that mean my home aint home",
              "Having nightmares of going through your phone (21)",
              "Can't even record you got me out my zone",
              "",
              "I don't wanna know, if you're playing me",
              "Keep it on the low",
              "Cause my heart can't take it anymore",
              "And if you creeping, please don't let it show",
              "Oh baby",
              "I don't wanna know, if you're playing me",
              "Keep it on the low",
              "Cause my heart can't take it anymore",
              "And if you creeping, please don't let it show",
              "Oh baby I don't wanna know",
              "",
              "If you creeping just don't let me find out (on God)",
              "Get a hotel never bring him to the house (on God)",
              "If you're better off that way (better off that way)",
              "Baby all that I can say (all that I can say)",
              "If you're gonna do your thing, then don't come back to me",
            ],
            footer:
              "Writer(s): Mario Winans, Michael Jones, Chauncey Hawkins, Erick Sermon, Parrish Joseff Smith, Eithne Ni Bhraonain, Roma Ryan, Nicky Ryan\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "156263139",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        31327778: {
          id: "31327778",
          type: "lyrics",
          attributes: {
            text: [
              "I wanna take you somewhere so you know I care",
              "But it's so cold, and I don't know where",
              "I brought you daffodils in a pretty string",
              "But they won't flower like they did last spring",
              "",
              "And I wanna kiss you, make you feel alright",
              "I'm just so tired to share my nights",
              "I wanna cry and I wanna love",
              "But all my tears have been used up",
              "",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "",
              "Oh, ooh",
              "",
              "And if somebody hurts you, I wanna fight",
              "But my hands been broken, one too many times",
              "So I'll use my voice, I'll be so fucking rude",
              "Words, they always win, but I know I'll lose",
              "",
              "And I'd sing a song, that'd be just ours",
              "But I sang 'em all to another heart",
              "And I wanna cry I wanna learn to love",
              "But all my tears have been used up",
              "",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "Oh, oh, oh",
              "",
              "(Oh, need a love, now, my heart is thinking of)",
              "I wanna sing a song, that'd be just ours",
              "But I sang 'em all to another heart",
              "And I wanna cry, I wanna fall in love",
              "But all my tears have been used up",
              "",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "On another love, another love",
              "All my tears have been used up",
              "Oh, oh",
            ],
            footer:
              "Writer(s): Tom Peter Odell\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "11560975",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
        31570750: {
          id: "31570750",
          type: "lyrics",
          attributes: {
            text: [
              "We were good, we were gold",
              "Kinda dream that can't be sold",
              "We were right 'til we weren't",
              "Built a home and watched it burn",
              "",
              "Mmm, I didn't wanna leave you, I didn't wanna lie",
              "Started to cry, but then remembered I",
              "",
              "I can buy myself flowers",
              "Write my name in the sand",
              "Talk to myself for hours",
              "Say things you don't understand",
              "I can take myself dancing",
              "And I can hold my own hand",
              "Yeah, I can love me better than you can",
              "",
              "Can love me better, I can love me better, baby",
              "Can love me better, I can love me better, baby",
              "",
              "Paint my nails cherry red",
              "Match the roses that you left",
              "No remorse, no regret",
              "I forgive every word you said",
              "",
              "Ooh, I didn't wanna leave you, baby, I didn't wanna fight",
              "Started to cry, but then remembered I",
              "",
              "I can buy myself flowers",
              "Write my name in the sand",
              "Talk to myself for hours, yeah",
              "Say things you don't understand",
              "I can take myself dancing, yeah",
              "I can hold my own hand",
              "Yeah, I can love me better than you can",
              "",
              "Can love me better, I can love me better, baby",
              "Can love me better, I can love me better, baby",
              "Can love me better, I can love me better, baby",
              "Can love me better, I (ooh, I)",
              "",
              "I didn't wanna leave you, I didn't wanna fight",
              "Started to cry, but then remembered I",
              "",
              "I can buy myself flowers (uh-huh)",
              "Write my name in the sand",
              "Talk to myself for hours (yeah)",
              "Say things you don't understand (you never will)",
              "I can take myself dancing, yeah",
              "I can hold my own hand",
              "Yeah, I can love me better than",
              "Yeah, I can love me better than you can",
              "",
              "Can love me better, I can love me better, baby (uh)",
              "Can love me better, I can love me better, baby (than you can)",
              "Can love me better, I can love me better, baby",
              "Can love me better, I",
            ],
            footer:
              "Writer(s): Michael Pollack, Miley Cyrus, Gregory Aldae Hein\nLyrics powered by www.musixmatch.com",
            musixmatchLyricsId: "157191703",
            providerName: "musixmatch",
            syncAvailable: false,
          },
        },
      },
      "artist-highlights": {
        111051: {
          id: "111051",
          type: "artist-highlights",
        },
        5557599: {
          id: "5557599",
          type: "artist-highlights",
        },
        28721078: {
          id: "28721078",
          type: "artist-highlights",
        },
        63346553: {
          id: "63346553",
          type: "artist-highlights",
        },
        95705522: {
          id: "95705522",
          type: "artist-highlights",
        },
        137057909: {
          id: "137057909",
          type: "artist-highlights",
        },
        260414340: {
          id: "260414340",
          type: "artist-highlights",
        },
        277293880: {
          id: "277293880",
          type: "artist-highlights",
        },
        358714030: {
          id: "358714030",
          type: "artist-highlights",
        },
        471260289: {
          id: "471260289",
          type: "artist-highlights",
        },
        524929515: {
          id: "524929515",
          type: "artist-highlights",
        },
        528928008: {
          id: "528928008",
          type: "artist-highlights",
        },
        670534462: {
          id: "670534462",
          type: "artist-highlights",
        },
        1140096017: {
          id: "1140096017",
          type: "artist-highlights",
        },
        1191850724: {
          id: "1191850724",
          type: "artist-highlights",
        },
        1304716885: {
          id: "1304716885",
          type: "artist-highlights",
        },
        1358539712: {
          id: "1358539712",
          type: "artist-highlights",
        },
        1400730578: {
          id: "1400730578",
          type: "artist-highlights",
        },
        1580652660: {
          id: "1580652660",
          type: "artist-highlights",
        },
      },
      "shazam-artists": {
        42: {
          id: "42",
          type: "shazam-artists",
        },
      },
      "related-tracks": {
        "track-similarities-id-636972694": {
          id: "track-similarities-id-636972694",
          type: "related-tracks",
        },
        "track-similarities-id-53510886": {
          id: "track-similarities-id-53510886",
          type: "related-tracks",
        },
        "track-similarities-id-609260140": {
          id: "track-similarities-id-609260140",
          type: "related-tracks",
        },
        "track-similarities-id-628935200": {
          id: "track-similarities-id-628935200",
          type: "related-tracks",
        },
        "track-similarities-id-648859694": {
          id: "track-similarities-id-648859694",
          type: "related-tracks",
        },
        "track-similarities-id-626708777": {
          id: "track-similarities-id-626708777",
          type: "related-tracks",
        },
        "track-similarities-id-614204083": {
          id: "track-similarities-id-614204083",
          type: "related-tracks",
        },
        "track-similarities-id-514260283": {
          id: "track-similarities-id-514260283",
          type: "related-tracks",
        },
        "track-similarities-id-643726163": {
          id: "track-similarities-id-643726163",
          type: "related-tracks",
        },
        "track-similarities-id-498502624": {
          id: "track-similarities-id-498502624",
          type: "related-tracks",
        },
        "track-similarities-id-308021058": {
          id: "track-similarities-id-308021058",
          type: "related-tracks",
        },
        "track-similarities-id-601555046": {
          id: "track-similarities-id-601555046",
          type: "related-tracks",
        },
        "track-similarities-id-70679146": {
          id: "track-similarities-id-70679146",
          type: "related-tracks",
        },
        "track-similarities-id-640613166": {
          id: "track-similarities-id-640613166",
          type: "related-tracks",
        },
        "track-similarities-id-607917333": {
          id: "track-similarities-id-607917333",
          type: "related-tracks",
        },
        "track-similarities-id-639053666": {
          id: "track-similarities-id-639053666",
          type: "related-tracks",
        },
        "track-similarities-id-628712770": {
          id: "track-similarities-id-628712770",
          type: "related-tracks",
        },
        "track-similarities-id-606589047": {
          id: "track-similarities-id-606589047",
          type: "related-tracks",
        },
        "track-similarities-id-630520607": {
          id: "track-similarities-id-630520607",
          type: "related-tracks",
        },
        "track-similarities-id-40590926": {
          id: "track-similarities-id-40590926",
          type: "related-tracks",
        },
      },
      "shazam-songs": {
        40590926: {
          id: "40590926",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Mockingbird",
            artist: "Eminem",
            primaryArtist: "Eminem",
            label: "Aftermath",
            explicit: true,
            isrc: "USIR10400813",
            webUrl:
              "https://www.shazam.com/track/40590926/mockingbird?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
              coverArt:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Mockingbird - Eminem",
              text: "I used Shazam to discover Mockingbird by Eminem.",
              image:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Mockingbird by Eminem.",
              html: "https://www.shazam.com/snippets/email-share/40590926?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/40590926",
            },
            genres: {
              primary: "Hip-Hop/Rap",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "111051",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1445837780",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-40590926",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1440751633",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1440751265",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "111051",
                  type: "artists",
                },
              ],
            },
          },
        },
        53510886: {
          id: "53510886",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Bloody Mary",
            artist: "Lady Gaga",
            primaryArtist: "Lady Gaga",
            label: "Interscope",
            explicit: false,
            isrc: "USUM71106449",
            webUrl:
              "https://www.shazam.com/track/53510886/bloody-mary?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/65/1b/f6/651bf621-fcf2-e3ba-4ef4-22645f26e0a0/11UMGIM12477.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/65/1b/f6/651bf621-fcf2-e3ba-4ef4-22645f26e0a0/11UMGIM12477.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Bloody Mary - Lady Gaga",
              text: "I used Shazam to discover Bloody Mary by Lady Gaga.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/65/1b/f6/651bf621-fcf2-e3ba-4ef4-22645f26e0a0/11UMGIM12477.rgb.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Bloody Mary by Lady Gaga.",
              html: "https://www.shazam.com/snippets/email-share/53510886?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/53510886",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c7/b0/df/c7b0dfe8-e1dc-1bda-88b0-0dc9b67e1b1b/mzaf_15572490037611837314.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/bloody-mary/1440824019?i=1440824272&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "277293880",
                  type: "artist-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-53510886",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1440824272",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1440824019",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "277293880",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30485850",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        70679146: {
          id: "70679146",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Another Love",
            artist: "Tom Odell",
            primaryArtist: "Tom Odell",
            label: "ITNO/Columbia",
            explicit: true,
            isrc: "GBARL1300522",
            webUrl:
              "https://www.shazam.com/track/70679146/another-love?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Another Love - Tom Odell",
              text: "I used Shazam to discover Another Love by Tom Odell.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Another Love by Tom Odell.",
              html: "https://www.shazam.com/snippets/email-share/70679146?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/70679146",
            },
            genres: {
              primary: "Singer/Songwriter",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e2/18/b7/e218b7c2-5650-2e40-7a63-5c4ca08018fe/mzaf_3776950118914761382.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/another-love/687867700?i=687868140&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "524929515",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1281370544",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-70679146",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "687868140",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "687867700",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "524929515",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "31327778",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        308021058: {
          id: "308021058",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Unstoppable",
            artist: "Sia",
            primaryArtist: "Sia",
            label: "Monkey Puzzle Records/RCA Records",
            explicit: false,
            isrc: "USRC11502934",
            webUrl:
              "https://www.shazam.com/track/308021058/unstoppable?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/fa/52/dd/fa52ddb2-730b-c79d-4b6d-9590a9d75e52/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Unstoppable - Sia",
              text: "I used Shazam to discover Unstoppable by Sia.",
              image:
                "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Unstoppable by Sia.",
              html: "https://www.shazam.com/snippets/email-share/308021058?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/308021058",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/bd/e5/1d/bde51d50-f37e-e019-9c54-c32ef6ef7ca5/mzaf_2494221124566835972.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/unstoppable/1055074478?i=1055074639&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "28721078",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1651276204",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-308021058",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1055074639",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1055074478",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "28721078",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30047022",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        498502624: {
          id: "498502624",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Under The Influence",
            artist: "Chris Brown",
            primaryArtist: "Chris Brown",
            label: "Chris Brown Entertainment/RCA Records",
            explicit: true,
            isrc: "USRC11902743",
            webUrl:
              "https://www.shazam.com/track/498502624/under-the-influence?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Under The Influence - Chris Brown",
              text: "I used Shazam to discover Under The Influence by Chris Brown.",
              image:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Under The Influence by Chris Brown.",
              html: "https://www.shazam.com/snippets/email-share/498502624?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/498502624",
            },
            genres: {
              primary: "R&B/Soul",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/15/a9/8f15a986-0cd0-4804-5335-85afddb45ec6/mzaf_842264860529529074.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "95705522",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1650529451",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-498502624",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1643756110",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1643755888",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "95705522",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30143864",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        514260283: {
          id: "514260283",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Heat Waves",
            artist: "Glass Animals",
            primaryArtist: "Glass Animals",
            label: "Polydor Records",
            explicit: false,
            isrc: "GBUM72000433",
            webUrl:
              "https://www.shazam.com/track/514260283/heat-waves?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/06/b3/09/06b30967-8ba7-2206-79d4-e2011f18d599/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/00/b5/53/00b553e2-fbd4-1def-92aa-1d1635697bbb/22UMGIM84423.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/00/b5/53/00b553e2-fbd4-1def-92aa-1d1635697bbb/22UMGIM84423.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Heat Waves - Glass Animals",
              text: "I used Shazam to discover Heat Waves by Glass Animals.",
              image:
                "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/00/b5/53/00b553e2-fbd4-1def-92aa-1d1635697bbb/22UMGIM84423.rgb.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Heat Waves by Glass Animals.",
              html: "https://www.shazam.com/snippets/email-share/514260283?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/514260283",
            },
            genres: {
              primary: "Alternative",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6c/53/5d/6c535d2b-2f76-9d59-dc0b-0639a7fb2687/mzaf_15095229188415863996.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/heat-waves/1680740657?i=1680740761&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "528928008",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1520434039",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-514260283",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1680740761",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1680740657",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "528928008",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "29547308",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        601555046: {
          id: "601555046",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Calm Down",
            artist: "Rema",
            primaryArtist: "Rema",
            label: "Mavin Records / Jonzing World",
            explicit: false,
            isrc: "NGA3B2214004",
            webUrl:
              "https://www.shazam.com/track/601555046/calm-down?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/0e/bc/cb/0ebccb7c-af52-7962-7583-96d95e677f6d/718012c7-9b6a-4153-9334-54f84d2935e3_ami-identity-9e987f39368f9dd37966c136969aac14-2023-02-11T08-30-18.286Z_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Calm Down - Rema",
              text: "I used Shazam to discover Calm Down by Rema.",
              image:
                "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Calm Down by Rema.",
              html: "https://www.shazam.com/snippets/email-share/601555046?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/601555046",
            },
            genres: {
              primary: "World",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1304716885",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1650414355",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-601555046",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1614063459",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1614063395",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1304716885",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "29353439",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        606589047: {
          id: "606589047",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Bones",
            artist: "Imagine Dragons",
            primaryArtist: "Imagine Dragons",
            label: "KIDinaKORNER/Interscope Records",
            explicit: false,
            isrc: "USUM72201759",
            webUrl:
              "https://www.shazam.com/track/606589047/bones?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Bones - Imagine Dragons",
              text: "I used Shazam to discover Bones by Imagine Dragons.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Bones by Imagine Dragons.",
              html: "https://www.shazam.com/snippets/email-share/606589047?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/606589047",
            },
            genres: {
              primary: "Alternative",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/85/bd/1e/85bd1eaa-8aa2-2f8c-d84d-bd66a525faf9/mzaf_17880216165394527644.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "358714030",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1617758121",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-606589047",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1612321591",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1612321587",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "358714030",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "29371213",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        607917333: {
          id: "607917333",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "SNAP",
            artist: "Rosa Linn",
            primaryArtist: "Rosa Linn",
            label: "Columbia",
            explicit: false,
            isrc: "USSM12207342",
            webUrl:
              "https://www.shazam.com/track/607917333/snap?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/800x800cc.jpg",
            },
            share: {
              subject: "SNAP - Rosa Linn",
              text: "I used Shazam to discover SNAP by Rosa Linn.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover SNAP by Rosa Linn.",
              html: "https://www.shazam.com/snippets/email-share/607917333?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/607917333",
            },
            genres: {
              primary: "Indie Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/3f/51/6f/3f516f8f-aff1-2ccd-151a-e417ed5e934e/mzaf_4321344331127641664.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1580652660",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1648922849",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-607917333",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1646526227",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1646526226",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1580652660",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "29382097",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        609260140: {
          id: "609260140",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "As It Was",
            artist: "Harry Styles",
            primaryArtist: "Harry Styles",
            label: "Columbia",
            explicit: false,
            isrc: "USSM12200612",
            webUrl:
              "https://www.shazam.com/track/609260140/as-it-was?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/800x800cc.jpg",
            },
            share: {
              subject: "As It Was - Harry Styles",
              text: "I used Shazam to discover As It Was by Harry Styles.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover As It Was by Harry Styles.",
              html: "https://www.shazam.com/snippets/email-share/609260140?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/609260140",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "471260289",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1616896437",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-609260140",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1615585008",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1615584999",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "471260289",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30448711",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        614204083: {
          id: "614204083",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "I Ain't Worried",
            artist: "OneRepublic",
            primaryArtist: "OneRepublic",
            label: "Interscope Records",
            explicit: false,
            isrc: "USUM72206227",
            webUrl:
              "https://www.shazam.com/track/614204083/i-aint-worried?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "I Ain't Worried - OneRepublic",
              text: "I used Shazam to discover I Ain't Worried by OneRepublic.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover I Ain't Worried by OneRepublic.",
              html: "https://www.shazam.com/snippets/email-share/614204083?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/614204083",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/f0/8a/5cf08acf-596f-c264-affa-9c387a7410e8/mzaf_2952444090080507083.plus.aac.p.m4a",
              deeplink:
                "intent://music.apple.com/us/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "260414340",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1623893089",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-614204083",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1621817894",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1621817793",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "260414340",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "29282474",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        626708777: {
          id: "626708777",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Miss You",
            artist: "Oliver Tree & Robin Schulz",
            primaryArtist: "Oliver Tree",
            label: "Atlantic Records",
            explicit: true,
            isrc: "USAT22211992",
            webUrl:
              "https://www.shazam.com/track/626708777/miss-you?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/34/e2/89/34e2892d-f812-db6a-1d24-b0c81e96849f/39ecba06-e143-4801-b33b-b5b8367b0474_ami-identity-3bd5d7c869befd01c574e84637437516-2022-11-14T18-17-57.618Z_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Miss You - Oliver Tree & Robin Schulz",
              text: "I used Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
              image:
                "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
              html: "https://www.shazam.com/snippets/email-share/626708777?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/626708777",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/78/d1/8f/78d18f9f-671b-3c3c-0033-917651170937/mzaf_14625856779470870222.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1140096017",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1651969464",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-626708777",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1638208778",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1638208775",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1140096017",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30840256",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        628712770: {
          id: "628712770",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Calm Down",
            artist: "Rema & Selena Gomez",
            primaryArtist: "Rema",
            label: "Mavin Records / Jonzing World",
            explicit: false,
            isrc: "NGA3B2214021",
            webUrl:
              "https://www.shazam.com/track/628712770/calm-down?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/0e/bc/cb/0ebccb7c-af52-7962-7583-96d95e677f6d/718012c7-9b6a-4153-9334-54f84d2935e3_ami-identity-9e987f39368f9dd37966c136969aac14-2023-02-11T08-30-18.286Z_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Calm Down - Rema & Selena Gomez",
              text: "I used Shazam to discover Calm Down by Rema & Selena Gomez.",
              image:
                "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Calm Down by Rema & Selena Gomez.",
              html: "https://www.shazam.com/snippets/email-share/628712770?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/628712770",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/21/6a/f7/216af760-4f00-d65e-5176-d3b76ff1143d/mzaf_10299316430509002343.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/calm-down/1640501237?i=1640501238&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1304716885",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1643167420",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-628712770",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1640501238",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1640501237",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1304716885",
                  type: "artists",
                },
              ],
            },
          },
        },
        628935200: {
          id: "628935200",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "I'm Good (Blue)",
            artist: "David Guetta & Bebe Rexha",
            primaryArtist: "David Guetta",
            label: "Warner Records",
            explicit: false,
            isrc: "UKWLG2200057",
            webUrl:
              "https://www.shazam.com/track/628935200/im-good-blue?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
              coverArt:
                "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/55/21/67/55216795-948a-9fc5-7ae8-f95b6d0093ba/093624854555.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/55/21/67/55216795-948a-9fc5-7ae8-f95b6d0093ba/093624854555.jpg/800x800cc.jpg",
            },
            share: {
              subject: "I'm Good (Blue) - David Guetta & Bebe Rexha",
              text: "I used Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
              image:
                "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/55/21/67/55216795-948a-9fc5-7ae8-f95b6d0093ba/093624854555.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
              html: "https://www.shazam.com/snippets/email-share/628935200?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/628935200",
            },
            genres: {
              primary: "Dance",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3b/89/0a/3b890a97-7763-9068-323e-9e11085ed374/mzaf_5650712663528084469.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/im-good-blue/1678877550?i=1678878113&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "5557599",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1646266064",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-628935200",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1678878113",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1678877550",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "5557599",
                  type: "artists",
                },
              ],
            },
          },
        },
        630520607: {
          id: "630520607",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "STAR WALKIN' (League of Legends Worlds Anthem)",
            artist: "Lil Nas X",
            primaryArtist: "Lil Nas X",
            label: "Columbia",
            explicit: true,
            isrc: "USSM12208809",
            webUrl:
              "https://www.shazam.com/track/630520607/star-walkin-league-of-legends-worlds-anthem?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cc/71/d7/cc71d772-a807-6943-b4e2-c1b92b7b99b8/pr_source.png/800x800cc.jpg",
              coverArt:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/800x800cc.jpg",
            },
            share: {
              subject:
                "STAR WALKIN' (League of Legends Worlds Anthem) - Lil Nas X",
              text: "I used Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
              image:
                "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
              html: "https://www.shazam.com/snippets/email-share/630520607?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/630520607",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6d/4b/66/6d4b6697-57ec-f34c-a56d-53c7fe48acea/mzaf_14430168494514608993.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1400730578",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1647609220",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-630520607",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1642613664",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1642613175",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1400730578",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30568373",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        636972694: {
          id: "636972694",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "The Astronaut",
            artist: "JIN",
            primaryArtist: "JIN",
            label: "BIGHIT MUSIC",
            explicit: false,
            isrc: "USA2P2230326",
            webUrl:
              "https://www.shazam.com/track/636972694/the-astronaut?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/800x800cc.jpg",
            },
            share: {
              subject: "The Astronaut - JIN",
              text: "I used Shazam to discover The Astronaut by JIN.",
              image:
                "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover The Astronaut by JIN.",
              html: "https://www.shazam.com/snippets/email-share/636972694?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/636972694",
            },
            genres: {
              primary: "K-Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/the-astronaut/1649563458?i=1649563461&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1191850724",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1651904457",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-636972694",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1649563461",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1649563458",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1191850724",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30339017",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        639053666: {
          id: "639053666",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title:
              "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)",
            artist: "Rihanna",
            primaryArtist: "Rihanna",
            label: "Black Panther 2 Rihanna Recordings",
            explicit: false,
            isrc: "QMJMT2204481",
            webUrl:
              "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg",
              coverArt:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject:
                "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Rihanna",
              text: "I used Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
              image:
                "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
              html: "https://www.shazam.com/snippets/email-share/639053666?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/639053666",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/ec/71/37ec7188-c1f5-47c1-43a7-28d32e26f172/mzaf_7868625517086999040.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: true,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "63346553",
                  type: "artist-highlights",
                },
              ],
            },
            "track-highlights": {
              data: [
                {
                  id: "1652104610",
                  type: "track-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-639053666",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1651763192",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1651763191",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "63346553",
                  type: "artists",
                },
              ],
            },
          },
        },
        640613166: {
          id: "640613166",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Players",
            artist: "Coi Leray",
            primaryArtist: "Coi Leray",
            label: "Uptown / Republic Records",
            explicit: true,
            isrc: "USUM72222387",
            webUrl:
              "https://www.shazam.com/track/640613166/players?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages123/v4/c2/d0/68/c2d068ce-b3ec-f888-de7f-ae3f6bcf27fb/bf01dc25-39fc-4d63-9229-d0b69fa718b4_file_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/e1/f8/88/e1f88885-262a-3c37-6b43-90b6d35f8c99/22UM1IM37104.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/e1/f8/88/e1f88885-262a-3c37-6b43-90b6d35f8c99/22UM1IM37104.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Players - Coi Leray",
              text: "I used Shazam to discover Players by Coi Leray.",
              image:
                "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/e1/f8/88/e1f88885-262a-3c37-6b43-90b6d35f8c99/22UM1IM37104.rgb.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Players by Coi Leray.",
              html: "https://www.shazam.com/snippets/email-share/640613166?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/640613166",
            },
            genres: {
              primary: "Hip-Hop/Rap",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d4/60/92/d4609241-0bb2-4b59-1e97-c2e671a0139c/mzaf_14378477710218482188.plus.aac.p.m4a",
              deeplink:
                "intent://music.apple.com/us/album/players/1663558165?i=1663558166&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "1358539712",
                  type: "artist-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-640613166",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1663558166",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1663558165",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "1358539712",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "30514024",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        643726163: {
          id: "643726163",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Creepin'",
            artist: "Metro Boomin, The Weeknd & 21 Savage",
            primaryArtist: "Metro Boomin",
            label: "Republic Records",
            explicit: true,
            isrc: "USUG12208791",
            webUrl:
              "https://www.shazam.com/track/643726163/creepin?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/10/ea/1e/10ea1e97-487d-e802-3da0-f5f5ec112a03/mzl.sxemrluw.jpg/800x800cc.jpg",
              coverArt:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/6e/fc/48/6efc48ad-d371-c4d6-62ff-1655c2be943d/22UM1IM40165.rgb.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/6e/fc/48/6efc48ad-d371-c4d6-62ff-1655c2be943d/22UM1IM40165.rgb.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Creepin' - Metro Boomin, The Weeknd & 21 Savage",
              text: "I used Shazam to discover Creepin' by Metro Boomin, The Weeknd & 21 Savage.",
              image:
                "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/6e/fc/48/6efc48ad-d371-c4d6-62ff-1655c2be943d/22UM1IM40165.rgb.jpg/400x400cc.jpg",
              twitter:
                "I used @Shazam to discover Creepin' by Metro Boomin, The Weeknd & 21 Savage.",
              html: "https://www.shazam.com/snippets/email-share/643726163?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/643726163",
            },
            genres: {
              primary: "Hip-Hop/Rap",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cc/01/f1/cc01f1b7-7f87-0ce5-3e0a-bdcc48cb5c25/mzaf_2509141783693089572.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/creepin/1660133085?i=1660134392&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "670534462",
                  type: "artist-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-643726163",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1660134392",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1660133085",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "670534462",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "31117593",
                  type: "lyrics",
                },
              ],
            },
          },
        },
        648859694: {
          id: "648859694",
          type: "shazam-songs",
          attributes: {
            type: "MUSIC",
            title: "Flowers",
            artist: "Miley Cyrus",
            primaryArtist: "Miley Cyrus",
            label: "Columbia",
            explicit: false,
            isrc: "USSM12209777",
            webUrl:
              "https://www.shazam.com/track/648859694/flowers?co=US&offsetInMilliseconds=&timeSkew=&trackLength=",
            images: {
              artistAvatar:
                "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages123/v4/b0/37/e1/b037e1f1-cf37-419e-66b2-2ecda585be40/c0ef2b77-e0ce-4518-b1a3-60596c96c801_ami-identity-b057dd0940cbcd4300602f5bf8130c3d-2023-01-05T15-01-46.780Z_cropped.png/800x800cc.jpg",
              coverArt:
                "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/400x400cc.jpg",
              coverArtHq:
                "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/800x800cc.jpg",
            },
            share: {
              subject: "Flowers - Miley Cyrus",
              text: "I used Shazam to discover Flowers by Miley Cyrus.",
              image:
                "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/400x400cc.jpg",
              twitter: "I used @Shazam to discover Flowers by Miley Cyrus.",
              html: "https://www.shazam.com/snippets/email-share/648859694?lang=en-US&country=US",
              snapchat: "https://www.shazam.com/partner/sc/track/648859694",
            },
            genres: {
              primary: "Pop",
            },
            streaming: {
              preview:
                "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3e/57/ef/3e57efa9-0572-82f5-0e92-ea5fef33982a/mzaf_14012893767887586921.plus.aac.ep.m4a",
              deeplink:
                "intent://music.apple.com/us/album/flowers/1663973555?i=1663973562&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end",
              store:
                "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am",
            },
            classicalAvailability: false,
          },
          relationships: {
            "artist-highlights": {
              data: [
                {
                  id: "137057909",
                  type: "artist-highlights",
                },
              ],
            },
            "related-tracks": {
              data: [
                {
                  id: "track-similarities-id-648859694",
                  type: "related-tracks",
                },
              ],
            },
            songs: {
              data: [
                {
                  id: "1663973562",
                  type: "songs",
                },
              ],
            },
            albums: {
              data: [
                {
                  id: "1663973555",
                  type: "albums",
                },
              ],
            },
            "shazam-artists": {
              data: [
                {
                  id: "42",
                  type: "shazam-artists",
                },
              ],
            },
            artists: {
              data: [
                {
                  id: "137057909",
                  type: "artists",
                },
              ],
            },
            lyrics: {
              data: [
                {
                  id: "31570750",
                  type: "lyrics",
                },
              ],
            },
          },
        },
      },
    },
  };

  const error = null;
  const isFetchingRelated = false;

  console.log(Object.values(relatedData.resources["shazam-songs"]));

  if (isFetching || isFetchingRelated)
    return <Loader title="Fetching song details" />;

  if (error) return <Error />;

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

      <RelatedSongs
        artistId={0}
        data={Object.values(relatedData.resources["shazam-songs"])}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetails;

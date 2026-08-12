import React, {useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import {Search, Menu, X, ExternalLink, Play, Music2, ChevronRight, Clock3} from "lucide-react";
import "./styles.css";

const songs = [
  {
    "id": 1,
    "title": "Aayega Aanewala",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aayega+Aanewala%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 2,
    "title": "Aaja Re Pardesi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Re+Pardesi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 3,
    "title": "Barsaat Mein Humse Mile Tum Sajan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Barsaat+Mein+Humse+Mile+Tum+Sajan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 4,
    "title": "Hawa Mein Udta Jaye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hawa+Mein+Udta+Jaye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 5,
    "title": "Jiya Beqarar Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jiya+Beqarar+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 6,
    "title": "Chup Chup Khade Ho",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chup+Chup+Khade+Ho%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 7,
    "title": "Dil Mera Toda",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Mera+Toda%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 8,
    "title": "Uthaye Ja Unke Sitam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Uthaye+Ja+Unke+Sitam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 9,
    "title": "Mere Liye Tu",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Liye+Tu%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 10,
    "title": "Ghar Aaya Mera Pardesi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ghar+Aaya+Mera+Pardesi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 11,
    "title": "Bichhde Sabhi Bari Bari",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Bichhde+Sabhi+Bari+Bari%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 12,
    "title": "Mohabbat Ki Jhooti Kahani",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mohabbat+Ki+Jhooti+Kahani%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 13,
    "title": "Tumhare Bulane Ko Jee Chahta Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tumhare+Bulane+Ko+Jee+Chahta+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 14,
    "title": "Chanda Re Ja Re Ja",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chanda+Re+Ja+Re+Ja%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 15,
    "title": "Mere Piya Se Koi Ja Ke Keh De",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Piya+Se+Koi+Ja+Ke+Keh+De%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 16,
    "title": "Duniya Mein Hum Aaye Hain",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Duniya+Mein+Hum+Aaye+Hain%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 17,
    "title": "O Mujhe Kisi Se Pyar Ho Gaya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22O+Mujhe+Kisi+Se+Pyar+Ho+Gaya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 18,
    "title": "Tadbeer Se Bigdi Hui Taqdeer",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tadbeer+Se+Bigdi+Hui+Taqdeer%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 19,
    "title": "Chali Gori Pee Ke Milan Ko",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chali+Gori+Pee+Ke+Milan+Ko%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 20,
    "title": "Ang Ang Mein Umang",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ang+Ang+Mein+Umang%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 21,
    "title": "Jawan Hai Mohabbat",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Morning Energy",
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jawan+Hai+Mohabbat%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 22,
    "title": "Barso Re",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Barso+Re%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 23,
    "title": "Koi Mere Dil Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Koi+Mere+Dil+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 24,
    "title": "Chhod Gaya Balam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhod+Gaya+Balam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 25,
    "title": "Zindagi Ki Yahi Reet Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Zindagi+Ki+Yahi+Reet+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 26,
    "title": "Kahe Koyal Shor Machaye Re",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kahe+Koyal+Shor+Machaye+Re%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 27,
    "title": "Aaja Re Ab Mera Dil Pukare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Re+Ab+Mera+Dil+Pukare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 28,
    "title": "Aaja Sanam Madhur Chandni Mein Hum",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Sanam+Madhur+Chandni+Mein+Hum%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 29,
    "title": "Aaja Tujhe Mohabbat Ka Sahara",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Tujhe+Mohabbat+Ka+Sahara%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 30,
    "title": "Aankhon Mein Sama Jao",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aankhon+Mein+Sama+Jao%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 31,
    "title": "Aansoo Bhari Hai Yeh Jeevan Ki Rahein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aansoo+Bhari+Hai+Yeh+Jeevan+Ki+Rahein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 32,
    "title": "Aap Ki Nazron Ne Samjha",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aap+Ki+Nazron+Ne+Samjha%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 33,
    "title": "Aapne Yaad Dilaya To Mujhe Yaad Aaya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aapne+Yaad+Dilaya+To+Mujhe+Yaad+Aaya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 34,
    "title": "Aaja Re O Mere Dilbar Aaja",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Re+O+Mere+Dilbar+Aaja%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 35,
    "title": "Ab Raat Guzarne Wali Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ab+Raat+Guzarne+Wali+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 36,
    "title": "Ae Malik Tere Bande Hum",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ae+Malik+Tere+Bande+Hum%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 37,
    "title": "Ae Mere Watan Ke Logon",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ae+Mere+Watan+Ke+Logon%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 38,
    "title": "Aye Dil Mujhe Bata De",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aye+Dil+Mujhe+Bata+De%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 39,
    "title": "Badi Door Se Aayi Hoon",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Badi+Door+Se+Aayi+Hoon%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 40,
    "title": "Chhup Gaya Koi Re Door Se Pukaar Ke",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhup+Gaya+Koi+Re+Door+Se+Pukaar+Ke%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 41,
    "title": "Chhod Do Aanchal",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhod+Do+Aanchal%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 42,
    "title": "Chalo Dildar Chalo",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chalo+Dildar+Chalo%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 43,
    "title": "Chand Phir Nikla",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chand+Phir+Nikla%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 44,
    "title": "Chandni Raat Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chandni+Raat+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 45,
    "title": "Chanda Ja Re Ja",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chanda+Ja+Re+Ja%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 46,
    "title": "Chhoti Si Yeh Duniya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhoti+Si+Yeh+Duniya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 47,
    "title": "Dil Mein Sama Gaye Sajan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Mein+Sama+Gaye+Sajan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 48,
    "title": "Dil Se Teri Nigah",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Se+Teri+Nigah%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 49,
    "title": "Haal Kaisa Hai Janab Ka",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Haal+Kaisa+Hai+Janab+Ka%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 50,
    "title": "Hai Sabse Madhur Woh Geet",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hai+Sabse+Madhur+Woh+Geet%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 51,
    "title": "Hum Aapki Aankhon Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hum+Aapki+Aankhon+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 52,
    "title": "Hum Bekhudi Mein Tumko Pukare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hum+Bekhudi+Mein+Tumko+Pukare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 53,
    "title": "Humse Aaya Na Gaya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Humse+Aaya+Na+Gaya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 54,
    "title": "Jaane Na Nazar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaane+Na+Nazar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 55,
    "title": "Jaane Kahan Gaye Woh Din",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaane+Kahan+Gaye+Woh+Din%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 56,
    "title": "Jaate Ho To Jao",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaate+Ho+To+Jao%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 57,
    "title": "Jeevan Ke Safar Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jeevan+Ke+Safar+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 58,
    "title": "Jeevan Mein Piya Tera Saath Rahe",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jeevan+Mein+Piya+Tera+Saath+Rahe%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 59,
    "title": "Kaisi Haseen Raat",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kaisi+Haseen+Raat%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 60,
    "title": "Kahin Deep Jale Kahin Dil",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kahin+Deep+Jale+Kahin+Dil%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 61,
    "title": "Kadar Jaane Na",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kadar+Jaane+Na%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 62,
    "title": "Kaise Koi Jiye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kaise+Koi+Jiye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 63,
    "title": "Kitna Haseen Hai Mausam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kitna+Haseen+Hai+Mausam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 64,
    "title": "Lag Ja Gale",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Lag+Ja+Gale%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 65,
    "title": "Main Chali Main Chali",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Main+Chali+Main+Chali%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 66,
    "title": "Man Dole Mera Tan Dole",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Man+Dole+Mera+Tan+Dole%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 67,
    "title": "Mera Joota Hai Japani",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mera+Joota+Hai+Japani%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 68,
    "title": "Milte Hi Aankhen Dil Hua",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Milte+Hi+Aankhen+Dil+Hua%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 69,
    "title": "Mohe Bhool Gaye Sanwariya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mohe+Bhool+Gaye+Sanwariya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 70,
    "title": "Na Jao Saiyan Chhuda Ke Baiyan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Jao+Saiyan+Chhuda+Ke+Baiyan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 71,
    "title": "Na Jaane Kahan Tum The",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Jaane+Kahan+Tum+The%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 72,
    "title": "Nain So Nain",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Nain+So+Nain%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 73,
    "title": "O Sajna Barkha Bahar Aayi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22O+Sajna+Barkha+Bahar+Aayi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 74,
    "title": "O Sajna",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22O+Sajna%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 75,
    "title": "Piya Aiso Jiya Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Piya+Aiso+Jiya+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 76,
    "title": "Pyar Hua Iqrar Hua",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Pyar+Hua+Iqrar+Hua%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 77,
    "title": "Rasik Balma",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Rasik+Balma%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 78,
    "title": "Rimjhim Ke Tarane Leke Aayi Barsaat",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Rimjhim+Ke+Tarane+Leke+Aayi+Barsaat%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 79,
    "title": "Satyam Shivam Sundaram",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Satyam+Shivam+Sundaram%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 80,
    "title": "Suno Sajna Papihe Ne",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Suno+Sajna+Papihe+Ne%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 81,
    "title": "Tere Bina Aag Yeh Chandni",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Bina+Aag+Yeh+Chandni%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 82,
    "title": "Tere Sadke Balam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Sadke+Balam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 83,
    "title": "Tum Na Jaane Kis Jahan Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tum+Na+Jaane+Kis+Jahan+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 84,
    "title": "Woh Chand Khila Woh Taare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Woh+Chand+Khila+Woh+Taare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 85,
    "title": "Yeh Raat Bheegi Bheegi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Raat+Bheegi+Bheegi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 86,
    "title": "Yeh Zindagi Usi Ki Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Zindagi+Usi+Ki+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 87,
    "title": "Ajeeb Dastan Hai Yeh",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ajeeb+Dastan+Hai+Yeh%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 88,
    "title": "Dil Tadap Tadap Ke",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Tadap+Tadap+Ke%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 89,
    "title": "Do Hanson Ka Joda",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Do+Hanson+Ka+Joda%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 90,
    "title": "Ganga Aaye Kahan Se",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ganga+Aaye+Kahan+Se%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 91,
    "title": "Jahan Mein Aisa Kaun Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jahan+Mein+Aisa+Kaun+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 92,
    "title": "Nain Tumhare Mazedaar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Nain+Tumhare+Mazedaar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 93,
    "title": "Tum Jiyo Hazaron Saal",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tum+Jiyo+Hazaron+Saal%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 94,
    "title": "Uden Jab Jab Zulfen Teri",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Uden+Jab+Jab+Zulfen+Teri%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 95,
    "title": "Chhup Gaya Koi Re",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhup+Gaya+Koi+Re%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 96,
    "title": "Bheegi Bheegi Fiza",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Bheegi+Bheegi+Fiza%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 97,
    "title": "Yeh Sama Yeh Rut",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Sama+Yeh+Rut%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 98,
    "title": "Jhoomta Mausam Mast Mahina",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jhoomta+Mausam+Mast+Mahina%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 99,
    "title": "Ek Ladki Bheegi Bhaagi Si",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ek+Ladki+Bheegi+Bhaagi+Si%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 100,
    "title": "Tera Mera Pyar Amar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tera+Mera+Pyar+Amar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 101,
    "title": "Woh Jab Yaad Aaye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Woh+Jab+Yaad+Aaye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 102,
    "title": "Tumhi Mere Mandir",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tumhi+Mere+Mandir%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 103,
    "title": "Aaja Tujhko Pukare Mera Pyar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Tujhko+Pukare+Mera+Pyar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 104,
    "title": "Jeevan Dor Tumhi Sang Bandhi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jeevan+Dor+Tumhi+Sang+Bandhi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 105,
    "title": "Aap Ki Aankhon Mein Kuch",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aap+Ki+Aankhon+Mein+Kuch%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 106,
    "title": "Bedardi Balma Tujhko",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Bedardi+Balma+Tujhko%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 107,
    "title": "Koi Matwala Aaya Mere Dware",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Koi+Matwala+Aaya+Mere+Dware%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 108,
    "title": "Ajeeb Dastaan Hai Yeh",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ajeeb+Dastaan+Hai+Yeh%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 109,
    "title": "Aaja Piya Tohe Pyar Doon",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Piya+Tohe+Pyar+Doon%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 110,
    "title": "Aap Mujhe Achhe Lagne Lage",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aap+Mujhe+Achhe+Lagne+Lage%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 111,
    "title": "Abhi Na Jao Chhod Kar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Abhi+Na+Jao+Chhod+Kar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 112,
    "title": "Bahon Mein Chale Aao",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Bahon+Mein+Chale+Aao%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 113,
    "title": "Bindiya Chamkegi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Bindiya+Chamkegi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 114,
    "title": "Chalte Chalte Yun Hi Koi Mil Gaya Tha",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chalte+Chalte+Yun+Hi+Koi+Mil+Gaya+Tha%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 115,
    "title": "Chhod Kar Tere Pyar Ka Daman",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhod+Kar+Tere+Pyar+Ka+Daman%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 116,
    "title": "Dil Apna Aur Preet Parai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Apna+Aur+Preet+Parai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 117,
    "title": "Dil Pukare Aare Aare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Pukare+Aare+Aare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 118,
    "title": "Gumnaam Hai Koi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Gumnaam+Hai+Koi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 119,
    "title": "Hai Tere Saath Meri Wafa",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hai+Tere+Saath+Meri+Wafa%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 120,
    "title": "Husn Pahadon Ka",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Husn+Pahadon+Ka%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 121,
    "title": "Inhin Logon Ne",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Inhin+Logon+Ne%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 122,
    "title": "Jab Deep Jale Aana",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jab+Deep+Jale+Aana%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 123,
    "title": "Jaane Bahaar Husn Tera",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaane+Bahaar+Husn+Tera%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 124,
    "title": "Kora Kagaz Tha Yeh Man Mera",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kora+Kagaz+Tha+Yeh+Man+Mera%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 125,
    "title": "Lag Ja Gale Se Phir",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Lag+Ja+Gale+Se+Phir%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 126,
    "title": "Lo Aa Gayi Unki Yaad",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Lo+Aa+Gayi+Unki+Yaad%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 127,
    "title": "Mere Mehboob Tujhe",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Mehboob+Tujhe%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 128,
    "title": "Mere Naseeb Mein Tu Hai Ki Nahin",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Naseeb+Mein+Tu+Hai+Ki+Nahin%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 129,
    "title": "Mujhe Teri Mohabbat Ka Sahara",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mujhe+Teri+Mohabbat+Ka+Sahara%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 130,
    "title": "Na Tum Bewafa Ho",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Tum+Bewafa+Ho%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 131,
    "title": "Naina Barse Rimjhim Rimjhim",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Naina+Barse+Rimjhim+Rimjhim%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 132,
    "title": "Pardesiyon Se Na Ankhiyan Milana",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Pardesiyon+Se+Na+Ankhiyan+Milana%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 133,
    "title": "Piya Tose Naina Laage Re",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Piya+Tose+Naina+Laage+Re%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 134,
    "title": "Sawan Ka Mahina",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Sawan+Ka+Mahina%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 135,
    "title": "Tere Bina Zindagi Se",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Bina+Zindagi+Se%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 136,
    "title": "Tere Mere Sapne",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Mere+Sapne%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 137,
    "title": "Tere Mere Pyar Amar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Mere+Pyar+Amar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 138,
    "title": "Tum Hi Mere Mandir",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tum+Hi+Mere+Mandir%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 139,
    "title": "Woh Kaun Thi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Woh+Kaun+Thi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 140,
    "title": "Yeh Sama",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Sama%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 141,
    "title": "Aaj Phir Jeene Ki Tamanna Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaj+Phir+Jeene+Ki+Tamanna+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 142,
    "title": "Allah Tero Naam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Allah+Tero+Naam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 143,
    "title": "Jyoti Kalash Chhalke",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jyoti+Kalash+Chhalke%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 144,
    "title": "Mora Gora Ang Laile",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mora+Gora+Ang+Laile%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 145,
    "title": "O Basanti Pawan Pagal",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22O+Basanti+Pawan+Pagal%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 146,
    "title": "Unko Yeh Shikayat Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Unko+Yeh+Shikayat+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 147,
    "title": "Aap Ki Parchhaiyan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aap+Ki+Parchhaiyan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 148,
    "title": "Humne Dekhi Hai Un Aankhon Ki Mehakti Khushboo",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Humne+Dekhi+Hai+Un+Aankhon+Ki+Mehakti+Khushboo%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 149,
    "title": "Milo Na Tum To Hum Ghabraye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Milo+Na+Tum+To+Hum+Ghabraye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 150,
    "title": "Woh Bhooli Dastaan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Woh+Bhooli+Dastaan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 151,
    "title": "Na Tum Hamein Jaano",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Tum+Hamein+Jaano%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 152,
    "title": "Chandan Sa Badan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chandan+Sa+Badan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 153,
    "title": "Chhod De Sari Duniya Kisi Ke Liye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhod+De+Sari+Duniya+Kisi+Ke+Liye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 154,
    "title": "Dil Ek Mandir",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Ek+Mandir%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 155,
    "title": "Ham Tere Pyar Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ham+Tere+Pyar+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 156,
    "title": "Ruk Ja Raat",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ruk+Ja+Raat%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 157,
    "title": "Teri Aankhon Ke Siva",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Teri+Aankhon+Ke+Siva%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 158,
    "title": "Tum Kamsin Ho Nadaan Ho",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tum+Kamsin+Ho+Nadaan+Ho%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 159,
    "title": "Yaad Mein Teri",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yaad+Mein+Teri%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 160,
    "title": "Yeh Mera Prem Patra",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Mera+Prem+Patra%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 161,
    "title": "Kya Jaanu Sajan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kya+Jaanu+Sajan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 162,
    "title": "Saawan Ka Mahina",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Saawan+Ka+Mahina%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 163,
    "title": "Sajan Sajan O Mere Sajan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Sajan+Sajan+O+Mere+Sajan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 164,
    "title": "Aye Dil-e-Nadaan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aye+Dil-e-Nadaan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 165,
    "title": "Baghon Mein Bahar Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Baghon+Mein+Bahar+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 166,
    "title": "Chhoti Si Mulaqat Pyar Ban Gayi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhoti+Si+Mulaqat+Pyar+Ban+Gayi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 167,
    "title": "Gairon Pe Karam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Gairon+Pe+Karam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 168,
    "title": "Jaane Kya Tune Kahi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaane+Kya+Tune+Kahi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 169,
    "title": "Jaane Kyun Log Mohabbat Kiya Karte Hain",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jaane+Kyun+Log+Mohabbat+Kiya+Karte+Hain%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 170,
    "title": "Jiya O Jiya Kuch Bol Do",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jiya+O+Jiya+Kuch+Bol+Do%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 171,
    "title": "Mere Mehboob Qayamat Hogi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Mehboob+Qayamat+Hogi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 172,
    "title": "Na Koi Umang Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Koi+Umang+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 173,
    "title": "O Mere Sanam",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22O+Mere+Sanam%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 174,
    "title": "Raat Aur Din Diya Jale",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Raat+Aur+Din+Diya+Jale%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 175,
    "title": "Shokhiyon Mein Ghola Jaye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Shokhiyon+Mein+Ghola+Jaye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 176,
    "title": "Tere Bina Zindagi Se Koi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tere+Bina+Zindagi+Se+Koi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 177,
    "title": "Tum Aa Gaye Ho Noor Aa Gaya",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tum+Aa+Gaye+Ho+Noor+Aa+Gaya%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 178,
    "title": "Woh Hai Zara Khafa Khafa",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Woh+Hai+Zara+Khafa+Khafa%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 179,
    "title": "Yeh Dil Aur Unki Nigahon Ke Saaye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Dil+Aur+Unki+Nigahon+Ke+Saaye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 180,
    "title": "Aaj Kal Tere Mere Pyar Ke Charche",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaj+Kal+Tere+Mere+Pyar+Ke+Charche%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 181,
    "title": "Aapne Yaad Dilaya To",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aapne+Yaad+Dilaya+To%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 182,
    "title": "Chhup Gaye Saare Nazare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chhup+Gaye+Saare+Nazare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 183,
    "title": "Dekho Rootha Na Karo",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dekho+Rootha+Na+Karo%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 184,
    "title": "Dilbar Dil Se Pyare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dilbar+Dil+Se+Pyare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 185,
    "title": "Ek Pyaar Ka Nagma Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ek+Pyaar+Ka+Nagma+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 186,
    "title": "Haye Re Haye",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Haye+Re+Haye%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 187,
    "title": "Jo Tumko Ho Pasand",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jo+Tumko+Ho+Pasand%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 188,
    "title": "Kya Yahi Pyar Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kya+Yahi+Pyar+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 189,
    "title": "Mere Naseeb Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Naseeb+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 190,
    "title": "Na Jiya Lage Na",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Deep Focus",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Na+Jiya+Lage+Na%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 191,
    "title": "Ni Sultana Re",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Ni+Sultana+Re%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 192,
    "title": "Piya Bina Piya Bina",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Piya+Bina+Piya+Bina%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 193,
    "title": "Rimjhim Gire Sawan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Rimjhim+Gire+Sawan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 194,
    "title": "Tumse Achha Kaun Hai",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Tumse+Achha+Kaun+Hai%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 195,
    "title": "Yeh Kahan Aa Gaye Hum",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yeh+Kahan+Aa+Gaye+Hum%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 196,
    "title": "Zindagi Ki Na Toote Ladi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Zindagi+Ki+Na+Toote+Ladi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 197,
    "title": "Aaja Sanam Madhur Chandni Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Aaja+Sanam+Madhur+Chandni+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 198,
    "title": "Chalte Chalte Yun Hi Koi",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Chalte+Chalte+Yun+Hi+Koi%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 199,
    "title": "Dil Hoom Hoom Kare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+Hoom+Hoom+Kare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 200,
    "title": "Dil To Hai Dil",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Dil+To+Hai+Dil%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 201,
    "title": "Do Dil Toote Do Dil Haare",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Do+Dil+Toote+Do+Dil+Haare%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 202,
    "title": "Hum Bhool Gaye Har Baat",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Hum+Bhool+Gaye+Har+Baat%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 203,
    "title": "Is Reshmi Pazeeb Ki Jhankar",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Is+Reshmi+Pazeeb+Ki+Jhankar%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 204,
    "title": "Jab Hum Jawan Honge",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Motivation",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jab+Hum+Jawan+Honge%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 205,
    "title": "Jo Wada Kiya Woh Nibhana Padega",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Jo+Wada+Kiya+Woh+Nibhana+Padega%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 206,
    "title": "Kabhi Kabhi Mere Dil Mein",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kabhi+Kabhi+Mere+Dil+Mein%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 207,
    "title": "Kaise Piya Se Main Kahoon",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Kaise+Piya+Se+Main+Kahoon%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 208,
    "title": "Main Hoon Khushrang Henna",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Focus at Work",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Main+Hoon+Khushrang+Henna%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 209,
    "title": "Mere Haathon Mein Nau Nau Choodiyan",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Morning Energy",
      "Friday Vibes",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Mere+Haathon+Mein+Nau+Nau+Choodiyan%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 210,
    "title": "Naam Gum Jayega",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Naam+Gum+Jayega%22+Lata+Mangeshkar+original+movie+song+Saregama"
  },
  {
    "id": 211,
    "title": "Yaara Seeli Seeli",
    "artist": "Lata Mangeshkar",
    "categories": [
      "Relax & Unwind",
      "Bollywood Favourites"
    ],
    "youtubeSearch": "https://www.youtube.com/results?search_query=%22Yaara+Seeli+Seeli%22+Lata+Mangeshkar+original+movie+song+Saregama"
  }
];
const playlistDefs = [
  ["Focus at Work","Gentle melodies for a steady workday"],
  ["Morning Energy","Bright, lively classics to start strong"],
  ["Deep Focus","Calmer, introspective melodies"],
  ["Motivation","Uplifting, spiritual and inspirational selections"],
  ["Relax & Unwind","Soft, timeless melodies"],
  ["Friday Vibes","Lively and celebratory favourites"],
  ["Marathi Classics","Marathi catalogue — language-tagged entries only"],
  ["Bollywood Favourites","The complete Hindi favourites catalogue"]
];

function App() {
 const [query,setQuery]=useState("");
 const [playlist,setPlaylist]=useState("Bollywood Favourites");
 const [selected,setSelected]=useState(songs[0]);
 const [show,setShow]=useState(false);
 const filtered=useMemo(()=>songs.filter(s=>{
   const q=query.toLowerCase();
   return !q || s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q);
 }).filter(s=>s.categories.includes(playlist)),[query,playlist]);
 const pick=(s)=>{setSelected(s);setShow(false);};
 return <main className="app">
  <div className="bg"/><div className="shade"/>
  <header className="top">
   <div className="time">ACG SOUND</div>
   <div className="status"><span/> 211 songs curated for ACG employees</div>
   <button className="icon" onClick={()=>setShow(true)}><Menu size={19}/></button>
  </header>
  <section className="hero">
   <img src="/assets/acg-logo.svg" className="logo" onError={e=>e.currentTarget.style.display="none"}/>
   <div className="kicker">LATA MANGESHKAR • ORIGINAL MOVIE SONGS</div>
   <h1>WORK. LISTEN. <em>INSPIRE.</em></h1>
   <p>Timeless melodies for the people who make it happen.</p>
   <button className="browse" onClick={()=>setShow(true)}><Menu size={17}/> Browse playlists</button>
  </section>
  <section className="library">
   <div className="library-head">
    <div><span className="kicker">ACG EMPLOYEE MUSIC LOUNGE</span><h2>{playlist}</h2></div>
    <div className="search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Lata songs..."/></div>
   </div>
   <div className="songs">
    {filtered.slice(0,14).map((s,i)=><button className={"song "+(selected.id===s.id?"selected":"")} key={s.id} onClick={()=>pick(s)}>
      <span className="num">{String(i+1).padStart(2,"0")}</span><span className="songicon"><Music2 size={15}/></span>
      <span className="songtitle"><strong>{s.title}</strong><small>Lata Mangeshkar</small></span>
      <span className="songcats">{s.categories.slice(0,2).join(" · ")}</span><ChevronRight size={16} className="arrow"/>
    </button>)}
   </div>
   <div className="count">{filtered.length} songs in this playlist</div>
  </section>
  <footer className="player">
    <div className="selected-art"><Music2/></div>
    <div className="selected-text"><strong>{selected.title}</strong><span>Lata Mangeshkar</span></div>
    <div className="player-note"><Clock3 size={15}/> YouTube source</div>
    <a className="play" href={selected.youtubeSearch} target="_blank" rel="noreferrer"><Play size={18} fill="currentColor"/> Find original movie song on YouTube <ExternalLink size={15}/></a>
  </footer>
  {show && <div className="overlay" onClick={()=>setShow(false)}><div className="modal" onClick={e=>e.stopPropagation()}>
    <div className="modalhead"><div><span className="kicker">ACG SOUND</span><h2>Choose a playlist</h2></div><button className="icon" onClick={()=>setShow(false)}><X/></button></div>
    <div className="grid">{playlistDefs.map(([name,desc])=><button key={name} className={"playlist "+(name===playlist?"active":"")} onClick={()=>{setPlaylist(name);setQuery("");setShow(false)}}><div className="dot">♪</div><div><strong>{name}</strong><span>{desc}</span><small>{songs.filter(s=>s.categories.includes(name)).length} songs</small></div><ChevronRight/></button>)}</div>
    <p className="notice">YouTube search is pre-filled for the selected song. Choose the official/original movie recording where available. The site does not download or store copyrighted recordings.</p>
  </div></div>}
 </main>
}
createRoot(document.getElementById("root")).render(<App/>);

import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Traveling",
      cover:
        "https://cms.chillhop.com/media/73677/squarelb1f13b18de0af32a1bf083bc7fd4fd3a2033406d.jpg",
      artist: "Anbuu",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      color: ["#D54848", "#2E9F99"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Sunny in Saint Petersburg",
      cover:
        "https://cms.chillhop.com/media/16252/squarel75adfe0661d06a9ea66d9c2e99b31e92ae450ebe.jpg",
      artist: "Saib",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16075",
      color: ["#D45C4C", "#FAEE78"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Playful Obsession",
      cover:
        "https://cms.chillhop.com/media/14929/squareld12927eedcc2f5afba2ab049a4a1ea46c2266ae3.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
      color: ["#483160", "#7194C1"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Paved Paths",
      cover:
        "https://cms.chillhop.com/media/634/squarel6e722fd3ec0283a30b55e16b5c7228f311555133.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9918",
      color: ["#91C1B2", "#C88D65"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Libra",
      cover:
        "https://cms.chillhop.com/media/12213/squarel33a2a875828118a3ff260638a88362936104879a.jpg",
      artist: "Oatmello, Guavas",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1936",
      color: ["#2B9F99", "#6C937A"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Flashback",
      cover:
        "https://cms.chillhop.com/media/9797/squarel7ba352cafecae63aa3f09a52e125ea615d2c1f9b.jpg",
      artist: "Toofpick",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11226",
      color: ["#AFA8DB", "#111111"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;

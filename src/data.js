import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Traveling",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      artist: "Anbuu",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      color: ["#D54848", "#2E9F99"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Sunny in Saint Petersburg",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/7945133f0b1f4f167f056fe0c369f05f2ef415f2-1024x1024.jpg",
      artist: "Saib",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16075",
      color: ["#D45C4C", "#FAEE78"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Playful Obsession",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-300x300.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
      color: ["#483160", "#7194C1"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Paved Paths",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9918",
      color: ["#91C1B2", "#C88D65"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Libra",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      artist: "Oatmello, Guavas",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1936",
      color: ["#2B9F99", "#6C937A"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Flashback",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-300x300.jpg",
      artist: "Toofpick",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11226",
      color: ["#AFA8DB", "#111111"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;

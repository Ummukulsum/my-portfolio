import kiraKiraImg from '../images/KiraKira.png'
import KiraKiraSC from '../images/KK1.png'
import KK2 from '../images/KK2.png'
import lumisImg from '../images/Lumis.png'
import Lumi1 from '../images/Lumi1.png'
import Lumi2 from '../images/Lumi2.png'
import Lumi3 from '../images/Lumi3.png'
import researchImg from '../images/Research.jpg'
import Litmap from '../images/Litmap.png'
import existingsystem from '../images/existing systems rmct.jpg'
import kiraKiraVideo from '../images/KiraKiraGuest.mp4'
import lumisVideo from '../images/Lumisvideo.mp4'
import researchVideo from '../images/Reasearch.mp4'
import researchDoc from '../documents/UMMUKULSUMMAHMUDPART2.pdf'

export const projects = [
  {
    id: 'kirakira',
    title: 'KiraKira: SPM Maths Platform',
    summary:
      'A Gen-Z friendly web platform for SPM Mathematics that layers missions, streaks, and analytics on top of core lessons.',
    description:
      'KiraKira rethinks how Malaysian students revise for SPM Mathematics. I co-designed the site architecture, shipped the responsive public pages, and collaborated on the instructional pathway so lessons, quizzes, and rewards feel cohesive. The platform lets students explore topics, take adaptive quizzes, and review actionable feedback.',
    impact:
      'Developed this for the module Web Applications Programming at APU as a semester-long group project. We conducted user research with SPM students to identify pain points in existing learning resources, and iterated on wireframes based on feedback to ensure usability and engagement.',
    technologies: ['HTML', 'CSS', 'C#', 'MySQL', 'Educational UX'],
    coverImage: kiraKiraVideo,
    previewVideo: kiraKiraVideo,
    gallery: [
      kiraKiraImg,
      KiraKiraSC,
      KK2,
    ],
  },
  {
    id: 'lumis-adventure',
    title: "Lumi's Adventure",
    summary:
      'A 2D narrative platformer focused on deliberate movement, animated sprites, and accessible combat loops. The below video is 5x speedrun.',
    description:
      'Prototyped an original platformer in Pygame where Lumi crosses dreamlike environments to rekindle lost constellations. I built reusable tilemaps, tuned jump physics, layered parallax backgrounds, and scripted narrative beats that respond to the player\'s performance. The custom toolchain lets me drop in new levels fast.',
    impact:
      'Made this with my team for the module Imaging and Special Effects at APU. Lot of hard work went into the pixel art and animation, and I learnt a lot about game design through this project.',
    technologies: ['Python', 'Pygame', 'Pixel Art', 'Narrative Design'],
    coverImage: lumisVideo,
    previewVideo: lumisVideo,
    gallery: [
      lumisImg,
      Lumi1,
      Lumi2,
      Lumi3,
    ],
  },
  {
    id: 'ai-skincare',
    title: 'AI Skincare Research Proposal',
    summary:
      'A literature review of ConvLSTM-based personalization for skincare recommendations.',
    description:
      'Outlined a research direction that blends ConvLSTM architectures with user diaries to personalize skincare guidance. I mapped the data pipeline, fairness considerations, and evaluation plan, highlighting how temporal modelling uncovers seasonal patterns. The paper also examines deployability in clinics and consumer apps.',
    impact:
      'This was my research topics for the module Research Methods for Computing & Technology at APU. I decided to combine my two favourite passions which is Skincare and Artificial Intelligence.',
    technologies: ['ConvLSTM', 'Research Writing', 'Data Ethics'],
    coverImage: researchVideo,
    previewVideo: researchVideo,
    gallery: [
      researchImg,
      Litmap,
      existingsystem,
    ],
    documentUrl: researchDoc,
  },
]

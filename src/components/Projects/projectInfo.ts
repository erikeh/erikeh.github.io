const project1 = {
  name: 'Note-JS',
  description:
    'A gravity based, geometric musical playground where collisions of various shapes create different notes and sounds based on the shape of the bodies. Heavily inspired by music making techniques of modular synthesis.',
  technologies: [
    'React',
    'Node.js',
    'Express',
    'MatterJS',
    'HowlerJS',
    'Docker',
    'AWS',
  ],
  img: 'https://github.com/erikeh/erikeh-demo-assets/blob/master/noteJS-demo_jul29.gif?raw=true',
};

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  img: string;
}

export default [project1];

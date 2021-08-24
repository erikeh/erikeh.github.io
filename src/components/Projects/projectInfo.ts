export interface Project {
  name: string;
  description: string;
  technologies: string[];
  img: string;
}

const project1: Project = {
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
  img: 'https://github.com/erikeh/erikeh-demo-assets/blob/master/Group-foodie_demo_aug23.gif?raw=true',
};

const project2: Project = {
  name: 'Group Foodie',
  description: `Group Foodie is an application built around the idea of starting and sharing a group food order among friends or coworkers, with the ability to start an order, chat about the order, and add onto an existing order with a persistent timer that ultimately "submits" the order.`,
  technologies: [
    'React/Redux',
    'Node.js',
    'TypeScript',
    'Express',
    'PostgreSQL',
    'Knex',
  ],
  img: 'https://github.com/erikeh/erikeh-demo-assets/blob/master/Group-foodie_demo_aug24.gif?raw=true',
};

export default [project1, project2];

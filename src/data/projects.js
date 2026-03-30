import Lagbuy from '../assets/lagbuy.png';
import RPS from '../assets/rock-paper-scissors.png';
import ColorGame from '../assets/color-game.png';

export const projectsData = [
  {
    id: 1,
    title: 'Lagbuy | E-commerce Website',
    description:
      'A full-featured e-commerce website built with React, TypeScript, and Tailwind CSS, including product listings, cart management, checkout flow, payment integration, and authentication.',
    image: Lagbuy,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubURL: '',
    liveURL: 'https://shop.lagbuy.com/',
    isGithubAvailable: false,
    isLiveAvailable: true,
  },
  {
    id: 2,
    title: 'Rock, Paper, Scissors Game',
    description:
      'A simple Rock, Paper, Scissors game built using HTML, CSS, and JavaScript. The player competes against the computer, and the first to reach 5 points wins the game.',
    image: RPS,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubURL: 'https://github.com/Esther-Omono/rock-paper-scissors',
    liveURL: 'https://rock-paper-scissors-estheromonos-projects.vercel.app/',
    isGithubAvailable: true,
    isLiveAvailable: true,
  },
  {
    id: 3,
    title: 'Color Guessing Game',
    description:
      'An interactive web-based game where players test their color recognition skills by selecting the correct color from multiple options. It is a project from the HNG12 internship.',
    image: ColorGame,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubURL: 'https://github.com/Esther-Omono/hngx-stage1-color-game',
    liveURL: 'https://color-game-psi-orcin.vercel.app/',
    isGithubAvailable: true,
    isLiveAvailable: true,
  },
];

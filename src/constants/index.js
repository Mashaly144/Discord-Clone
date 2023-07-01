// import { bell, chat, mail, setting } from '../assets/TopAction';
// import {
//   logo,
//   iconAdd,
//   iconExplore,
//   group1,
//   group2,
//   group3,
// } from '../assets/Logo';
// import {
//   education,
//   entertainment,
//   game,
//   music,
//   student,
//   tect,
// } from '../assets/Cagetories';

import group1 from '../assets/Logo/group1.svg';
import group2 from '../assets/Logo/group2.svg';
import group3 from '../assets/Logo/group3.svg';
import iconExplore from '../assets/Logo/iconExplore.svg';
import iconAdd from '../assets/Logo/iconAdd.svg';
export const sidebarGroup = [group1, group2, group3, iconExplore, iconAdd];

import education from '../assets/Cagetories/Education.svg';
import entertainment from '../assets/Cagetories/Entertainment.svg';
import game from '../assets/Cagetories/Game.svg';
import music from '../assets/Cagetories/Music.svg';
import student from '../assets/Cagetories/Student Hub.svg';
import tect from '../assets/Cagetories/Tech.svg';

export const exploreMenu = [
  {
    id: 'music',
    icon: music,
    title: 'music',
  },
  {
    id: 'gaming',
    icon: game,
    title: 'gaming',
  },
  {
    id: 'education',
    icon: education,
    title: 'education',
  },
  {
    id: 'science',
    icon: tect,
    title: 'science',
  },
  {
    id: 'entertainment',
    icon: entertainment,
    title: 'entertainment',
  },
  {
    id: 'student',
    icon: student,
    title: 'student',
  },
];

import user1 from '../assets/users/user1.png';
import user2 from '../assets/users/user2.png';
import user3 from '../assets/users/user3.png';
import user4 from '../assets/users/user4.png';
import user5 from '../assets/users/user5.png';
import user6 from '../assets/users/user6.png';
import user7 from '../assets/users/user7.png';
import user8 from '../assets/users/user8.png';

export const newMembers = [
  {
    id: 'name-1',
    name: 'Anne Couture',
    icon: user1,
    lastScene: '5',
  },
  {
    id: 'name-2',
    name: 'Mariam Soleil',
    icon: user1,
    lastScene: '20',
  },
  {
    id: 'name-3',
    name: 'Marie Lavel',
    icon: user2,
    lastScene: '35',
  },
  {
    id: 'name-4',
    name: 'Mark Morain',
    icon: user3,
    lastScene: '40',
  },
  {
    id: 'name-5',
    name: 'Anne Couture',
    icon: user4,
    lastScene: '20',
  },
];

export const memberActivity = [
  {
    id: 'member-1',
    name: 'Hola Spine',
    activity: 'invited you to a channel',
    icon: user5,
    lastScene: '2',
  },
  {
    id: 'member-2',
    name: 'Eva Solain',
    activity: 'invited you to a channel',
    icon: user6,
    lastScene: '15',
  },
  {
    id: 'member-3',
    name: 'Pierre Ford',
    activity: 'started following you',
    icon: user7,
    lastScene: '20',
  },
  {
    id: 'member-4',
    name: 'Steve Ater',
    activity: 'started following you',
    icon: user8,
    lastScene: '8',
  },
];

import avater from '../assets/TopAction/avater.svg';
import bell from '../assets/TopAction/bell.svg';
import chat from '../assets/TopAction/chat.svg';
import mail from '../assets/TopAction/mail.svg';
import setting from '../assets/TopAction/setting.svg';

export const notifications = [bell, chat, mail, setting];
export const profiles = [
  {
    id: 'user-1',
    name: 'Abdallah Mashaly',
    userName: 'abdallahMashaly',
    avater: avater,
  },
];

import movie from '../assets/card/movie.png';
import science from '../assets/card/science.png';
import space from '../assets/card/space.png';
export const recentlyCards = [
  {
    title: 'Movie Recaaper',
    icon: '',
    content: 'Discuss your favourite movies and TV series here.',
    valueMember: '3',
    background: movie,
    symbolMember,
  },
  {
    title: 'Science',
    icon: '',
    content: 'A community for a scientific exploration enthusiast.',
    valueMember: '58',
    background: science,
    symbolMember,
  },
  {
    title: 'Space',
    icon: '',
    content: 'A community for the space enthusiast.',
    valueMember: '30',
    background: space,
    symbolMember,
  },
];
import populerCard from '../assets/card/populer1.png';
import artAvater from '../assets/card/artAvater.png';
import nftAvater from '../assets/card/nftAvater.png';
export const popularCards = [
  {
    id: 'populer-1',
    title: '3D Art',
    icon: artAvater,
    background: populerCard,
    content: 'A great place to discuss art.',
    value: '10,109,278',
    symbolMember,
  },
  {
    id: 'populer-2',
    title: 'NFT',
    icon: nftAvater,
    background: populerCard,
    content: 'An NFT community so that everyone can share their NFTs.',
    value: '109,278',
    symbolMember,
  },
];

import feature1 from '../assets/card/feature1.png';
import feature2 from '../assets/card/feature2.png';
import symbolMember from '../assets/card/SymbolMember.svg';
import symbolOnline from '../assets/card/SymbolOnline.svg';
export const featureCards = [
  {
    title: 'Virtual Reality',
    icon: '',
    background: feature1,
    content:
      'A community for VR  fans and novices alike, regular events and friendly chat.',
    valueOnline: '10,109,278',
    valueMember: '10,109,278',
    symbolOnline,
    symbolMember,
  },
  {
    title: 'NFT',
    icon: '',
    background: feature2,
    content: 'An NFT community so that everyone can share their NFTs.',
    valueOnline: '10,109,278',
    valueMember: '10,109,278',
    symbolOnline,
    symbolMember,
  },
];

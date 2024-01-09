import { Post } from './type/Post.types';
import { User } from './type/User.types';

export const Users: User[] = [
  {
    _id: '1',
    username: 'John',
    email: '',
    password: '',
    profilePicture: '/person/1.jpeg',
    coverPicture: '/post/5.jpeg',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    desc: '',
  },
  {
    _id: '2',
    username: 'Yamaki',
    email: '',
    password: '',
    profilePicture: '/person/2.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    desc: '',
  },
  {
    _id: '3',
    username: 'Koga',
    email: '',
    password: '',
    profilePicture: '/person/3.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    desc: '',
  },
  {
    _id: '4',
    username: 'Matukubo',
    email: '',
    password: '',
    profilePicture: '/person/4.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    desc: '',
  },
  {
    _id: '5',
    username: 'Kikukawa',
    email: '',
    password: '',
    profilePicture: '/person/5.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    desc: '',
  },
];

export const Posts: Post[] = [
  {
    _id: '1',
    userId: '1',
    desc: '積み重ねが大事。',
    img: '/post/1.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: ['1', '2', '3', '4', '5'],
    __v: 4,
  },
  {
    _id: '2',
    userId: '2',
    desc: '休憩中',
    img: '/post/2.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: ['1', '3', '5'],
    __v: 13,
  },
  {
    _id: '3',
    userId: '3',
    desc: 'エンジョイなう',
    img: '/post/3.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: ['2', '4'],
    __v: 29,
  },
  {
    _id: '4',
    userId: '4',
    desc: 'えもい',
    img: '/post/4.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: ['1', '5'],
    __v: 1,
  },
  {
    _id: '5',
    userId: '5',
    desc: '定期的に散歩した方が生産性が上がる。',
    img: '/post/5.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: ['3'],
    __v: 3,
  },
];

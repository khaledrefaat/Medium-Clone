import { ImageLoaderProps } from 'next/image';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = (date: string) =>
  `${monthNames[new Date(date).getMonth()]}${new Date(date).getDate()}`;

export const getDay = (date: string) => new Date(date).getDate();

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) =>
  `${src}/?w=${width}&q${quality || 100}`;

export const calculateDaysFromToday = (date: string) => {
  const DIFFERENCE_IN_DAYS = 1000 * 3600 * 24;
  const dateDifference = new Date().getTime() - new Date(date).getTime();
  return Math.floor(dateDifference / DIFFERENCE_IN_DAYS);
};

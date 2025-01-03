import placesData from '@/data/places.csv?raw';
import { parse } from 'csv-parse/sync';

export interface Place {
  title: string;
  totalScore: number;
  reviewsCount: number;
  imageUrl: string;
  placeId: string;
}

export function getPlaceData(): Place {
  const records = parse(placesData, {
    columns: true,
    skip_empty_lines: true
  });

  const place = records[0];
  
  return {
    title: place.title,
    totalScore: parseFloat(place.totalScore),
    reviewsCount: parseInt(place.reviewsCount),
    imageUrl: place.imageUrl,
    placeId: place.placeId
  };
}
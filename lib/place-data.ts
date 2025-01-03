import { promises as fs } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Place {
  title: string;
  totalScore: number;
  reviewsCount: number;
  imageUrl: string;
  placeId: string;
}

export async function getPlaceData(): Promise<Place> {
  const csvPath = path.join(process.cwd(), 'data/places.csv');
  const fileContents = await fs.readFile(csvPath, 'utf-8');
  
  const records = parse(fileContents, {
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
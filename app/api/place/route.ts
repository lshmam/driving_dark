import { getPlaceData } from '@/lib/place-data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const place = await getPlaceData();
    return NextResponse.json(place);
  } catch (error) {
    console.error('Error fetching place data:', error);
    return NextResponse.json({ error: 'Failed to fetch place data' }, { status: 500 });
  }
}
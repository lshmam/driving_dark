import { getGoogleReviews } from '@/lib/google';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const reviews = await getGoogleReviews();
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
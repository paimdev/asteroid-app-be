import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();
  async serviceFetchAsteroids(): Promise<string> {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.API_KEY}`,
    );
    return response.data.near_earth_objects;
  }

  async serviceFetchAsteroidsByDate(
    startDate: string,
    endDate: string,
  ): Promise<string> {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`,
    );
    return response.data.near_earth_objects;
  }

  async serviceAddFavoriteAsteroid(id: string, name: string, url: string) {
    return this.prisma.favoriteAsteroid.create({
      data: {
        id,
        name,
        url,
      },
    });
  }

  async serviceFetchFavoriteAsteroids() {
    return this.prisma.favoriteAsteroid.findMany();
  }
}

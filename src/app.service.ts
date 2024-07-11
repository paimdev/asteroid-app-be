import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async serviceFetchAsteroids(): Promise<string> {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=Cpwplej7wHG1wtnO9ITZnKZD6qEmVZTBAH0imYfZ`,
    );
    return response.data.near_earth_objects;
  }

  async serviceFetchAsteroidsByDate(
    startDate: string,
    endDate: string,
  ): Promise<string> {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=Cpwplej7wHG1wtnO9ITZnKZD6qEmVZTBAH0imYfZ`,
    );
    return response.data.near_earth_objects;
  }
}

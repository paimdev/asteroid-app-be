import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('asteroids')
  async fetchAsteroids() {
    const asteroids = await this.appService.serviceFetchAsteroids();
    return asteroids;
  }

  @Get('asteroids/:startDate/:endDate')
  async fetchAsteroidsByDate(
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ) {
    const asteroids = await this.appService.serviceFetchAsteroidsByDate(
      startDate,
      endDate,
    );
    return asteroids;
  }

  @Post('favorites')
  async addFavoriteAsteroid(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('url') url: string,
  ) {
    return this.appService.serviceAddFavoriteAsteroid(id, name, url);
  }

  @Get('favorites')
  async fetchFavoriteAsteroids() {
    return this.appService.serviceFetchFavoriteAsteroids();
  }
}

import { Controller, Get, Render } from '@nestjs/common';

/**
 * Events Controller - UI Routes
 * Module 4: Event Ingestion & Scoring Engine
 */
@Controller('scoring')
export class EventsController {
  /**
   * Live Scoring Dashboard
   */
  @Get()
  @Render('scoring/index')
  index() {
    return {
      title: 'Live Scoring',
      layout: 'layouts/main',
      isScoring: true,
      pageTitle: 'Live Scoring',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }

  /**
   * Cricket Scorer Interface
   */
  @Get('cricket')
  @Render('scoring/cricket')
  cricket() {
    return {
      title: 'Cricket Scorer',
      layout: 'layouts/main',
      isScoring: true,
      pageTitle: 'Cricket Scorer',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }
}

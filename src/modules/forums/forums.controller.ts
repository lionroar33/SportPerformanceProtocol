import { Controller, Get, Render } from '@nestjs/common';

/**
 * Forums Controller - UI Routes
 * Module 5: Community Discussion Space
 */
@Controller('forums')
export class ForumsController {
  /**
   * Forums List Page
   */
  @Get()
  @Render('forums/index')
  index() {
    return {
      title: 'Forums',
      layout: 'layouts/main',
      isForums: true,
      pageTitle: 'Community Forums',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }
}

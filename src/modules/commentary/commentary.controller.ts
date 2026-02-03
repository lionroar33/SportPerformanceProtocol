import { Controller, Get, Render } from '@nestjs/common';

/**
 * Commentary Controller - UI Routes
 * Module 10: Real-Time Commentary Engine
 */
@Controller('commentary')
export class CommentaryController {
  /**
   * Commentary Settings Page
   */
  @Get()
  @Render('commentary/index')
  index() {
    return {
      title: 'Commentary',
      layout: 'layouts/main',
      isCommentary: true,
      pageTitle: 'Commentary Settings',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }
}

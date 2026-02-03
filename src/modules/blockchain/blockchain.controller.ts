import { Controller, Get, Render } from '@nestjs/common';

/**
 * Blockchain Controller - UI Routes
 * Module 9: Blockchain & Tokenomics
 */
@Controller('tokens')
export class BlockchainController {
  /**
   * Token Rewards Dashboard
   */
  @Get()
  @Render('blockchain/index')
  index() {
    return {
      title: 'Token Rewards',
      layout: 'layouts/main',
      isTokens: true,
      pageTitle: 'Token Rewards',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }

  /**
   * Transaction History
   */
  @Get('history')
  @Render('blockchain/history')
  history() {
    return {
      title: 'Transaction History',
      layout: 'layouts/main',
      isTokens: true,
      pageTitle: 'Transaction History',
      user: { name: 'John Doe', initials: 'JD' },
    };
  }
}

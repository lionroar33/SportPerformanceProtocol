import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { BlockchainService } from './blockchain.service';

/**
 * Module 9 - Blockchain & Tokenomics (Solana)
 * Verifiable data points and token burn mechanics.
 *
 * Features:
 * - Finalized match data as Verifiable Data Points on Solana
 * - Token burns proportional to performance-to-effort ratio
 * - Reward tiers: Nifty Fifty, Gayle Storm, 5-Wicket Haul, Hat-trick, etc.
 * - Immutable, auditable on-chain transactions
 * - Wallet connection and balance management
 * - Leaderboard and statistics
 */
@Module({
  controllers: [BlockchainController],
  providers: [BlockchainService],
  exports: [BlockchainService],
})
export class BlockchainModule {}

import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';

/**
 * Module 9 - Blockchain & Tokenomics (Solana)
 * Verifiable data points and token burn mechanics.
 *
 * Features:
 * - Finalized match data as Verifiable Data Points on Solana
 * - Token burns proportional to performance-to-effort ratio
 * - Reward tiers: Nifty Fifty, Gayle Storm, 5-Wicket Haul, Hat-trick, etc.
 * - Immutable, auditable on-chain transactions
 */
@Module({
  controllers: [BlockchainController],
  providers: [],
})
export class BlockchainModule {}

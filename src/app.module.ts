import { Module } from '@nestjs/common';

// Feature Modules (9 Modules - Excluding E-Commerce & AI Analytics)
import { AuthModule } from './modules/auth/auth.module';
import { SportsModule } from './modules/sports/sports.module';
import { MatchesModule } from './modules/matches/matches.module';
import { EventsModule } from './modules/events/events.module';
import { ForumsModule } from './modules/forums/forums.module';
import { SocialModule } from './modules/social/social.module';
import { BlockchainModule } from './modules/blockchain/blockchain.module';
import { CommentaryModule } from './modules/commentary/commentary.module';
import { WearablesModule } from './modules/wearables/wearables.module';

/**
 * Sport Performance Protocol - Main Application Module
 *
 * Module Structure (Phase 1 & 2 - UI Only):
 * 1. Auth Module - User Account & Profile System
 * 2. Sports Module - Sport Selection & Skill Integration
 * 3. Matches Module - Match & Tournament Management
 * 4. Events Module - Event Ingestion & Scoring Engine
 * 5. Forums Module - Community Discussion Space
 * 6. Social Module - Follow System & Social Feed
 * 9. Blockchain Module - Tokenomics (Solana)
 * 10. Commentary Module - Real-Time Commentary Engine
 * 11. Wearables Module - Calorie Integration
 *
 * Note: Module 7 (E-Commerce) and Module 8 (AI Analytics) are excluded from scope.
 */
@Module({
  imports: [
    AuthModule,
    SportsModule,
    MatchesModule,
    EventsModule,
    ForumsModule,
    SocialModule,
    BlockchainModule,
    CommentaryModule,
    WearablesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

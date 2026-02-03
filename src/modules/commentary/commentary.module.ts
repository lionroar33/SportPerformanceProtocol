import { Module } from '@nestjs/common';
import { CommentaryController } from './commentary.controller';

/**
 * Module 10 - Real-Time Commentary Engine
 * NLG-powered automated commentary.
 *
 * Features:
 * - NLG pipeline subscribing to match events via Redis pub/sub
 * - Templated, localized commentary lines
 * - Cooldown logic to prevent spam
 * - Persona toggles: Play-by-play, Energetic, Coaching
 * - 12 cricket-specific commentary triggers
 */
@Module({
  controllers: [CommentaryController],
  providers: [],
})
export class CommentaryModule {}

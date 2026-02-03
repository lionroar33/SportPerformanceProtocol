import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';

/**
 * Module 4 - Event Ingestion & Scoring Engine
 * Core scoring engine - the heart of the system.
 *
 * Features:
 * - Ball-by-ball event ingestion for cricket
 * - Append-only, immutable event store
 * - Real-time score computation
 * - Support for all sport-specific events
 */
@Module({
  controllers: [EventsController],
  providers: [],
})
export class EventsModule {}

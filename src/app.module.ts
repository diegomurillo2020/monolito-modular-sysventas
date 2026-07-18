import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SalesModule } from './modules/sales/sales.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(), // El bus de eventos global de la app
    SalesModule,
    InventoryModule,
  ],
})
export class AppModule {}
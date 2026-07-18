import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { SalesListener } from './listeners/sales.listener';

@Module({
  providers: [InventoryService, SalesListener],
})
export class InventoryModule {}
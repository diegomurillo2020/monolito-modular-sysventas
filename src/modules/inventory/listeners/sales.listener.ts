import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InventoryService } from '../inventory.service';

@Injectable()
export class SalesListener {
  constructor(private readonly inventoryService: InventoryService) {}

  // 🎧 El "centinela" escucha el evento global
  @OnEvent('sales.created')
  handleSalesCreatedEvent(payload: { productoId: string; cantidadVendida: number }) {
    console.log(`[Inventario - Listener] Reaccionando a sales.created. Payload recibido:`, payload);
    
    // Le pasa el trabajo al servicio de inventario de forma limpia
    this.inventoryService.reducirStock(payload.productoId, payload.cantidadVendida);
  }
}
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SalesService {
  // Inyectamos el emisor de eventos de NestJS
  constructor(private eventEmitter: EventEmitter2) {}

  crearVenta(productoId: string, cantidad: number) {
    console.log(`[Ventas] Registrando venta de ${cantidad} unidades del producto: ${productoId}...`);
    
    // Aquí iría la lógica de guardar en base de datos en el futuro.
    const ventaSimulada = { id: 'vnt-100', productoId, cantidad, total: 150.00 };

    // 🔥 DISPARAMOS EL EVENTO EN CALIENTE
    // Cualquiera en el sistema puede escuchar 'sales.created'
    this.eventEmitter.emit('sales.created', {
      productoId: ventaSimulada.productoId,
      cantidadVendida: ventaSimulada.cantidad,
    });

    return { mensaje: 'Venta procesada con éxito', venta: ventaSimulada };
  }
}
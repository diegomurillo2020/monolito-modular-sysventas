import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  // Inventario en memoria simulado para la prueba
  private stockMock = { 'prod-bici': 10 };

  reducirStock(productoId: string, cantidad: number) {
    if (this.stockMock[productoId] !== undefined) {
      this.stockMock[productoId] -= cantidad;
      console.log(`[Inventario] 📉 Stock actualizado para ${productoId}. Nuevo stock: ${this.stockMock[productoId]}`);
    } else {
      console.log(`[Inventario] El producto ${productoId} no requiere control de stock o no existe.`);
    }
  }
}
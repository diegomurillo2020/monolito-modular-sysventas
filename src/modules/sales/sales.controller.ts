import { Controller, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  crear(@Body() body: { productoId: string; cantidad: number }) {
    return this.salesService.crearVenta(body.productoId, body.cantidad);
  }
}
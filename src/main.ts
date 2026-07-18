import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

// Creamos un módulo raíz rápido directamente aquí para la prueba inicial
@Module({
  imports: [
    EventEmitterModule.forRoot() // Activamos el sistema de eventos globales
  ],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Una ruta de prueba simple para el navegador
  const server = app.getHttpAdapter().getInstance();
  server.get('/', (req, res) => res.send('¡Monolito Modular funcionando desde Docker! 🚀'));

  await app.listen(3000);
  console.log('El backend está listo en http://localhost:3000');
}
bootstrap();
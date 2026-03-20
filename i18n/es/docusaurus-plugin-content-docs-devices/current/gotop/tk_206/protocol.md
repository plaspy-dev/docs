---
slug: /gotop/tk_206/protocol
id: tk_206-protocol
sidebar_label: Protocol
title: GOTOP - TK-206 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GOTOP TK 206 y cómo se comunica con Plaspy con ajustes comunes de conexión
keywords:
  - Protocolo GOTOP TK-206
  - Protocolo GPS GOTOP TK-206
  - GOTOP TK-206 para Plaspy
  - Protocolo rastreador GPS GOTOP
  - Protocolo de comunicación TK-206
  - Protocolo de rastreo TK-206
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos TK-206
  - Rastreo de flotas GOTOP
  - Compatibilidad del protocolo GOTOP
---

# GOTOP - Protocolo TK-206

Esta página explica el contexto público del protocolo para usar el rastreador GOTOP TK-206 con Plaspy. Se enfoca en cómo el equipo se comunica con la plataforma Plaspy a alto nivel, qué ajustes de conexión son habituales y qué revisar al integrar el dispositivo. El TK-206 es un rastreador vehicular compacto GSM/GPRS/GPS que envía ubicación, alarmas y estados a servidores remotos y es compatible con Plaspy de fábrica.

Plaspy utiliza ajustes de conexión compartidos entre los rastreadores soportados y detecta automáticamente el protocolo cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que, aunque Plaspy gestiona la detección del protocolo y el enrutamiento del servicio, la configuración del dispositivo y los detalles del firmware proporcionados por el fabricante son relevantes para un funcionamiento fiable.

## Resumen del protocolo

El protocolo de reportes del TK-206 define cómo el equipo se identifica ante un servidor remoto, envía actualizaciones periódicas o por eventos, y transmite alarmas e información de estado que Plaspy puede mostrar y procesar. Esta página describe esas interacciones en términos generales sin exponer detalles privados o internos de firmware.

- Permite al TK-206 enviar coordenadas, velocidad, hora y banderas de estado a un servidor para mapeo y reproducción de historial.
- Transporta mensajes de alarma y eventos como SOS, salida de geocerca, corte de alimentación y vibración para que Plaspy genere alertas y notificaciones.
- Permite al servidor asociar los datos entrantes con una identidad de dispositivo específica para almacenar la telemetría en el registro correcto del vehículo.
- Soporta múltiples métodos de transporte para que el rastreador informe vía datos celulares o use mecanismos alternativos cuando estén disponibles.
- Proporciona la comunicación básica necesaria para acciones remotas como control de inmovilizador cuando esas capacidades están habilitadas desde la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes en un único endpoint y puerto compartidos y realiza detección automática de protocolo para los rastreadores conectados. Cuando un TK-206 está configurado para reportar a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de Plaspy para que el reporte básico funcione.

- Plaspy recibe reportes de dispositivos en el dominio público d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma usa el puerto 8888 como puerto de escucha para los reportes de dispositivos en todos los equipos soportados.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reduce errores.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy.
- Si un dispositivo apunta correctamente al endpoint de Plaspy usando un transporte soportado, la plataforma enrutará e interpretará los datos entrantes sin necesidad de selección manual de protocolo en la mayoría de los casos.

## Transporte y contexto de conexión

La selección del transporte y el método exacto de reporte dependen de cómo se configure el TK-206 y de la conectividad disponible. Plaspy soporta dispositivos que reportan a su endpoint compartido usando cualquiera de las opciones de transporte comunes en muchos rastreadores GSM/GPRS.

- El TK-206 puede configurarse para usar UDP o TCP en el puerto 8888 según lo soporte el dispositivo y la preferencia del instalador.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para alcanzar el endpoint de ingestión de Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, por lo que los instaladores normalmente configuran ese puerto en el equipo al indicar la dirección del servidor.
- Los datos GPRS son el transporte habitual para actualizaciones continuas, y el SMS se emplea frecuentemente como respaldo de configuración cuando el dispositivo lo soporta.
- Verifique ajustes de red como el APN y la conectividad de datos en la tarjeta SIM para asegurar que el equipo pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- La variación de firmware importa: distintas versiones de firmware en la familia TK-206 pueden modificar intervalos de reporte, texto de alarmas o comandos soportados.
- Las revisiones de hardware pueden cambiar los transportes soportados o el comportamiento de E/S; confirme el modelo y la revisión exacta al solucionar problemas.
- Los comandos de configuración del fabricante y las secuencias de ajuste por SMS/GPRS pueden variar; siempre consulte el manual del dispositivo para la sintaxis correcta de los ajustes del servidor.
- Elegir UDP frente a TCP afecta la entrega y la retransmisión; seleccione el transporte que coincida con lo esperado por el firmware instalado.
- Al integrar sensores adicionales o entradas externas, confirme cómo el firmware del dispositivo codifica esos eventos antes de depender de ellos en los flujos de trabajo de Plaspy.
- Valide la compatibilidad de funciones de control remoto como comandos de inmovilizador tanto con Plaspy como con la instalación del dispositivo para garantizar una operación segura.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK-206 ayuda a instaladores y gestores de flotas a obtener telemetría fiable en Plaspy, resolver problemas de configuración más rápido y mantener un comportamiento consistente del equipo a lo largo del tiempo.

- Facilita una configuración inicial más fluida al asegurar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy con el transporte adecuado.
- Ayuda a diagnosticar problemas de conectividad y datos al acotar si el inconveniente es de red, transporte o firmware del dispositivo.
- Permite configurar adecuadamente intervalos de alarma y reporte para equilibrar frecuencia de actualización con uso de datos y consideraciones de batería.
- Facilita la validación correcta de funciones de control remoto como señales de inmovilizador para alinearlas con procedimientos de seguridad operativa.
- Proporciona una ruta más clara para actualizaciones de firmware y planificación del ciclo de vida del dispositivo al identificar cuándo el comportamiento del protocolo puede cambiar.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TK-206 con Plaspy ofrece a las organizaciones visibilidad práctica del vehículo, gestión de alarmas y capacidades de respuesta remota. La forma compacta del TK-206 y su telemetría probada se combinan con la plataforma centralizada de Plaspy para ofrecer seguimiento en tiempo real, reproducción de historial y notificaciones accionables que apoyan operaciones de flota, flujos de seguridad y acciones de recuperación.

Para saber más sobre Plaspy y cómo se integra con rastreadores como el TK-206 visite https://www.plaspy.com. Para obtener los últimos detalles del protocolo específico del dispositivo, notas de firmware y la sintaxis de configuración consulte la documentación del fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

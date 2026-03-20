---
slug: /cantrack/gf20/protocol
id: gf20-protocol
sidebar_label: Protocol
title: CanTrack - GF20 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del CanTrack GF20 y cómo comunica con Plaspy para rastreo y alertas
keywords:
  - CanTrack GF20
  - protocolo GF20
  - protocolo rastreador CanTrack
  - compatibilidad GF20 Plaspy
  - comunicación CanTrack GF20
  - protocolo de rastreo GF20
  - protocolo GPS CanTrack GF20
  - geocerca GF20
  - función escucha de voz CanTrack
  - alarma batería GF20
---

# CanTrack - Protocolo GF20

Esta página describe el contexto público del protocolo para usar el mini rastreador magnético CanTrack GF20 con Plaspy. Explica de manera general cómo se comunica el dispositivo, qué papel juega el protocolo de reporte del rastreador al enviar ubicaciones y eventos a Plaspy, y qué ajustes de conexión se usan para la integración sin exponer detalles privados de implementación.

El GF20 es un equipo compacto que soporta reportes de posición por GPS real, LBS y AGPS, escucha remota de voz opcional, geocercas, alarmas por batería baja y vibración, múltiples modos de funcionamiento y memoria interna para almacenar datos cuando no hay cobertura GSM. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo que usa el GF20 define cómo el rastreador informa la posición, alarmas y eventos auxiliares a un servidor remoto para que la plataforma pueda interpretar esos mensajes como telemetría utilizable. En la práctica, esto significa que el dispositivo transmite periódicamente actualizaciones de ubicación y notificaciones de eventos especiales para que Plaspy muestre estado, movimiento y alertas.

- Transporta telemetría esencial como fijaciones de ubicación por GPS o LBS y marcas de tiempo para que Plaspy las ubique en el mapa.
- Codifica el estado del dispositivo y tipos de eventos como entrada/salida de geocerca, batería baja, vibración y solicitudes de escucha remota.
- Proporciona datos de identificación para que Plaspy asocie los mensajes recibidos con la unidad GF20 y la cuenta de cliente correctas.
- Soporta almacenamiento temporal en el dispositivo cuando se pierde la conectividad celular, evitando la pérdida del historial.
- Funciona sobre canales de transporte comunes para que el rastreador envíe datos a los endpoints de Plaspy para su procesamiento automático.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un único endpoint compartido y usa detección incorporada para identificar automáticamente el protocolo entrante del rastreador. Dado que Plaspy detecta el protocolo automáticamente, los usuarios normalmente no necesitan seleccionar manualmente el protocolo en la plataforma cuando el dispositivo está configurado para reportar a Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos.
- Si el GF20 apunta al endpoint de Plaspy y el dispositivo está operativo, Plaspy detectará y procesará su protocolo automáticamente.
- Una identidad de dispositivo adecuada y intervalos de reporte definidos ayudan a Plaspy a emparejar mensajes con dispositivos para un rastreo confiable.

## Contexto de transporte y conexión

El contexto de conexión se refiere a cómo el GF20 alcanza la plataforma Plaspy más que a la estructura interna de los mensajes una vez establecido el enlace. El GF20 puede usar UDP o TCP según su firmware y configuración, y puede apuntarse a Plaspy por nombre de dominio o por dirección IP.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Usar el puerto compartido 8888 entre dispositivos reduce la complejidad de configuración al desplegar múltiples tipos de rastreadores.
- Consideraciones de red como NAT, bloqueo por parte del operador o enlaces celulares inestables pueden afectar la fiabilidad del transporte y deben evaluarse durante la puesta en marcha.
- Confirme que el GF20 esté registrado o identificado correctamente en Plaspy tras el primer reporte para asegurar que los datos fluyen como se espera.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes envía el GF20 y cómo lo hace, por lo que el comportamiento puede variar entre dispositivos con firmware distinto.
- Revisiones de hardware o funciones opcionales como la escucha de voz pueden afectar los eventos disponibles y la configuración necesaria.
- Algunas opciones de configuración del GF20 pueden alternar el modo de transporte entre UDP y TCP; verifique que el dispositivo esté en el modo que mejor se ajuste a sus necesidades de red.
- Los comandos SMS o de la app proporcionados por el fabricante pueden usarse para apuntar el dispositivo al endpoint de Plaspy; consulte las instrucciones del fabricante para la sintaxis de comandos.
- Al usar geocercas o alertas de batería baja, valide que esos tipos de eventos estén habilitados y probados con el firmware actual.
- Siempre valide compatibilidad y comportamiento contra la documentación oficial más reciente de CanTrack.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GF20 ayuda a asegurar que los dispositivos estén configurados correctamente, que Plaspy reciba telemetría útil y que las notificaciones de eventos funcionen según lo esperado en operaciones reales.

- Permite una configuración precisa para que el dispositivo reporte a d.plaspy.com o 54.85.159.138 en el puerto correcto.
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte, la red celular o la configuración del endpoint.
- Orienta las pruebas de tipos de eventos como alertas de geocerca, advertencias de batería baja, alarmas por vibración y comportamiento de escucha de voz.
- Facilita la planificación de retención de datos del dispositivo e intervalos de reporte esperados cuando la conectividad GSM es intermitente.
- Reduce el tiempo de integración al alinear la configuración del dispositivo con las expectativas de Plaspy y su detección automática.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack GF20 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de rastreo y eventos de corto plazo desde rastreadores magnéticos compactos. La combinación del GF20 de GPS, LBS, AGPS y memoria interna lo hace apropiado para monitoreo temporal de activos donde la visibilidad persistente y las alertas por eventos son importantes.

Para conocer más sobre Plaspy y cómo procesa los datos de rastreadores visite https://www.plaspy.com. Para los detalles más recientes sobre protocolo específico del dispositivo, notas de firmware y comandos de configuración consulte al fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

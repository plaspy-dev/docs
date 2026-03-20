---
slug: /coban/bn_108b/protocol
id: bn_108b-protocol
sidebar_label: Protocol
title: Coban - BN-108B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Coban BN-108B y su comunicación con Plaspy para seguimiento y alertas confiables
keywords:
  - protocolo Coban BN-108B
  - protocolo GPS Coban BN-108B
  - compatibilidad BN-108B Plaspy
  - protocolo rastreador Coban
  - protocolo de rastreo BN-108B
  - protocolo de comunicación BN-108B
  - protocolo de dispositivo Plaspy
  - rastreador GSM GPRS Plaspy
  - rastreador GPS portátil BN-108B
  - rastreador de activos BN-108B
---

# Coban - Protocolo BN-108B

Esta página explica el contexto público del protocolo para usar el rastreador Coban BN-108B con Plaspy. Describe, en términos generales, cómo se comunica el equipo, qué ajustes de conexión se utilizan habitualmente y cómo Plaspy procesa los reportes para ofrecer seguimiento en vivo, alertas y reproducción histórica.

El BN-108B es un rastreador portátil 2G compatible con Plaspy, con una batería de gran capacidad de 10,000 mAh, carcasa con imanes y varios modos de reporte como tiempo real, modo Smart y modo ahorro de energía. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta el protocolo automáticamente, aunque el comportamiento exacto puede variar según la versión de firmware, revisión de hardware y la implementación del fabricante. Se recomienda verificar los detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El BN-108B envía posición, estado e información de eventos hacia un endpoint de servidor para que Plaspy pueda mostrar ubicaciones en tiempo real, alertas y telemetría. El protocolo define cómo el rastreador se identifica, reporta posiciones GPS y transmite eventos o alarmas que Plaspy interpreta para funciones de gestión de flotas y activos.

- Proporciona datos de identificación y sesión para que el servidor asocie los mensajes con una unidad BN-108B y la cuenta del cliente.
- Reporta coordenadas GPS y telemetría como estado de batería, detección de movimiento y tipos de alarma para que Plaspy los convierta en posiciones en el mapa y eventos.
- Envía notificaciones de eventos para alarmas como desconexión de alimentación externa, SOS, exceso de velocidad y movimiento, permitiendo alertas inmediatas.
- Soporta múltiples modos de reporte para equilibrar frecuencia de actualización y duración de batería en despliegues de largo plazo.
- Usa métodos de transporte estándar soportados por el equipo para que los mensajes lleguen de forma confiable al endpoint de Plaspy a través de redes celulares.

## Cómo detecta Plaspy el protocolo

Plaspy recibe la telemetría entrante en un endpoint compartido y un puerto, y detecta automáticamente el protocolo que utiliza el BN-108B cuando llegan los datos. En la mayoría de implementaciones, el equipo se configura para reportar directamente al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración y el enrutamiento en el servidor.
- El BN-108B puede apuntarse al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 al configurar el equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint compartido.
- Debido a que la detección se realiza en el servidor, normalmente no necesita seleccionar una opción de protocolo en Plaspy si el dispositivo está configurado correctamente.
- Si un dispositivo no reporta como se espera, revisar la dirección de reporte y el tipo de transporte es el primer paso para verificar la configuración.

## Transporte y conexión

El BN-108B soporta reportes por TCP, UDP y SMS, y puede configurarse para usar TCP o UDP para alcanzar el endpoint de Plaspy en el puerto común. El comportamiento de conexión depende de los ajustes del dispositivo y del modo de reporte seleccionado, por lo que elegir el transporte adecuado ayuda a equilibrar confiabilidad y vida útil de la batería.

- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- El rastreador puede apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración.
- TCP suele preferirse cuando se valora la entrega confiable y la gestión de sesiones, mientras que UDP puede elegirse para reportes más simples y sin conexión según el soporte del equipo.
- El reporte por SMS también está soportado por el BN-108B para configuración y como alternativa, pero la ingestión de telemetría en Plaspy normalmente se realiza por TCP o UDP.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades BN-108B pueden modificar funciones disponibles y el comportamiento exacto de los reportes, por lo que confirme la versión de firmware al validar compatibilidad.
- Las revisiones de hardware y accesorios opcionales pueden influir en qué telemetría o alarmas se reportan a Plaspy.
- La selección de transporte TCP versus UDP afecta las características de entrega de mensajes y debe coincidir con lo que el dispositivo tiene configurado.
- La configuración por defecto del fabricante puede apuntar a otro servidor, por lo que actualice el destino de reportes a d.plaspy.com o 54.85.159.138 según sea necesario.
- Algunas funciones como inmovilización remota, armado vía Bluetooth o monitoreo de voz requieren activación en el equipo y pueden variar según el firmware regional.
- Siempre valide el reporte de extremo a extremo en una prueba controlada antes de un despliegue amplio para confirmar que Plaspy recibe los eventos y posiciones esperados.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el BN-108B ayuda a agilizar la configuración, solucionar problemas y mantener la confiabilidad a largo plazo cuando el equipo se gestiona a través de Plaspy. Tener claro el transporte, los modos de reporte y los tipos de eventos comunes reduce el tiempo de integración y favorece un comportamiento predecible en producción.

- Acelera la configuración inicial asegurando que el equipo reporte al dominio o IP correctos y use el puerto soportado.
- Facilita el diagnóstico de problemas de conectividad al acotar si la causa es el transporte, la dirección del servidor o el firmware.
- Permite ajustar los modos de reporte para equilibrar la vida de la batería con la precisión de la posición según el caso de uso.
- Mejora el manejo de alarmas al mapear los eventos del dispositivo a los flujos de alerta de Plaspy.
- Ayuda a planificar actualizaciones de firmware y revisiones de hardware que puedan cambiar la semántica de reporte o las funciones disponibles.

## Por qué usar Plaspy con este protocolo

Usar el BN-108B con Plaspy ofrece a las organizaciones una combinación práctica de batería de larga duración, instalación discreta y modos de reporte flexibles que encajan en muchos escenarios de rastreo de activos y antirrobo. Plaspy ingiere los datos del rastreador, detecta el protocolo automáticamente y presenta posiciones, alertas y reproducción en un entorno unificado de gestión de flotas.

Para saber más sobre cómo Plaspy trabaja con dispositivos como el BN-108B visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la documentación del fabricante en https://www.coban.net/ ya que los detalles de implementación pueden cambiar con el tiempo.

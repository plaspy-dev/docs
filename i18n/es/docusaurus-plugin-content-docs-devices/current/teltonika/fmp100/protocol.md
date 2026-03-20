---
slug: /teltonika/fmp100/protocol
id: fmp100-protocol
sidebar_label: Protocol
title: Teltonika - FMP100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo FMP100 de Teltonika, configuración del servidor Plaspy y contexto de transporte
keywords:
  - protocolo Teltonika FMP100
  - protocolo GPS Teltonika FMP100
  - comunicación Teltonika FMP100
  - compatibilidad FMP100 Plaspy
  - protocolo de rastreador Teltonika
  - protocolo de rastreador GPS Plaspy
  - seguimiento de vehículos FMP100
  - telemetría de sensores BLE FMP100
  - rastreador GPS plug and play
  - seguimiento de flotas Teltonika
---

# Teltonika - Protocolo FMP100

Esta página ofrece una descripción pública y de alto nivel del contexto de comunicación para usar el Teltonika FMP100 con Plaspy. Explica cómo el equipo informa posicionamiento, eventos y telemetría de sensores BLE a Plaspy, y qué considerar al configurar el dispositivo para enviar datos a la plataforma. El foco está en el contexto público del protocolo y los ajustes de conexión, no en detalles sensibles del parser o información interna del fabricante.

El FMP100 es un rastreador compacto plug and play con posicionamiento GPS nativo, soporte para sensores Bluetooth Low Energy y señales de evento sencillas mediante botón integrado, LED RGB y zumbador. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración específica del equipo y los detalles de firmware deben validarse con los recursos oficiales de Teltonika cuando sea necesario.

## Descripción general del protocolo

El protocolo que utiliza el FMP100 regula cómo el dispositivo se identifica, envía actualizaciones de ubicación, transmite telemetría de sensores BLE y reporta eventos locales a un servidor remoto como Plaspy. Esta sección explica el papel público de ese canal de comunicación sin reproducir formatos de paquetes del proveedor ni la lógica interna de parseo.

- Transporta informes periódicos de posición GPS y actualizaciones de estado del dispositivo que Plaspy ingestará para mapeo e informes.
- Transmite lecturas de sensores BLE y telemetría de accesorios emparejados cuando están disponibles para que esos datos ambientales aparezcan en los paneles de Plaspy.
- Reenvía pulsaciones de botón y señales de eventos locales, como pánico o interacciones del conductor, como eventos discretos a la plataforma.
- Permite iniciar flujos de configuración remota y firmware mediante herramientas del fabricante mientras el dispositivo informa su estado operativo a Plaspy.
- Habilita a Plaspy para correlacionar identidad del dispositivo y telemetría con objetos de la flota para alertas, geovallas y reproducción histórica.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo de rastreador apropiado para los dispositivos configurados correctamente para reportar. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está apuntando al endpoint de Plaspy y usa el transporte soportado.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma recibe los reportes a través de ese único puerto.
- El puerto configurado para el reporte de dispositivos es 8888 y los dispositivos pueden usar UDP o TCP para alcanzar Plaspy.
- Cuando un dispositivo envía datos al endpoint de Plaspy, la plataforma realiza una detección automática del protocolo para asociar la telemetría entrante con la identidad y el formato correctos.
- La configuración adecuada del dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 suele ser el requisito para que la detección automática tenga éxito.

## Contexto de transporte y conexión

La elección de conexión, como TCP frente a UDP, y el endpoint DNS o IP que utilice el dispositivo determinan cómo la telemetría llega al servidor de Plaspy, pero no cambian el propósito general del protocolo. El FMP100 soporta opciones de transporte móviles estándar y puede apuntarse a Plaspy usando el nombre de dominio o la IP del servidor.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- El servidor de Plaspy puede alcanzarse por dominio en d.plaspy.com o directamente por IP en 54.85.159.138.
- Plaspy emplea el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el aprovisionamiento a nivel de flota.
- La selección del transporte puede afectar las características de confiabilidad bajo diferentes condiciones de red; elija el transporte que se ajuste a sus prioridades operativas y a las capacidades del dispositivo.
- Asegúrese de que cualquier firewall de red o configuración APN usada por la SIM permita conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos de telemetría disponibles y las banderas de funciones; siempre verifique la versión de firmware del dispositivo al solucionar problemas de compatibilidad.
- Las variantes de hardware o los SKUs regionales del producto pueden exponer diferentes bandas de radio o comportamientos de los sensores que afectan los datos reportados a Plaspy.
- Las herramientas de configuración del fabricante y los flujos FOTA pueden ser necesarios para habilitar la telemetría BLE o para cambiar el transporte de UDP a TCP.
- Las condiciones de red y las restricciones del operador móvil pueden influir en la entrega y el comportamiento de las sesiones aun cuando el dispositivo esté configurado correctamente.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es el paso de conexión estándar, pero confirme los ajustes según el manual del dispositivo para conocer los nombres exactos de los parámetros y los campos.
- Valide cualquier necesidad de integración avanzada, como mapeo de eventos personalizado, tanto con la documentación de Plaspy como con los recursos de Teltonika.

## Por qué es importante comprender el protocolo

Conocer el alcance y los límites del protocolo de comunicación del FMP100 ayuda a asegurar reportes confiables, agilizar la resolución de problemas y mejorar los resultados operativos cuando se usa el dispositivo con Plaspy. Una comprensión práctica reduce el tiempo de integración y previene configuraciones erróneas comunes.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el puerto 8888 para que la detección automática pueda ocurrir.
- Permite a los administradores elegir el modo de transporte apropiado, UDP o TCP, según la confiabilidad de la red y las capacidades del dispositivo.
- Facilita la interpretación de logs de dispositivo y flujos de eventos en Plaspy al mapear alertas, telemetría BLE y eventos de botón.
- Acelera el diagnóstico cuando la telemetría deja de llegar o cuando los campos de datos cambian tras una actualización de firmware.
- Orienta las decisiones sobre configuración remota y procedimientos FOTA que pueden modificar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMP100 con Plaspy ofrece una solución de rastreo rápida de desplegar para flotas que necesitan aprovisionamiento ágil, telemetría de sensores BLE y señalización básica de eventos sin cableado. La forma plug and play, combinada con soporte BLE para sensores de temperatura y movimiento, hace que el FMP100 sea adecuado para alquileres a corto plazo, car sharing y programas piloto donde la rapidez de despliegue y la portabilidad son prioridad.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el FMP100 visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y guía de configuración consulte al fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

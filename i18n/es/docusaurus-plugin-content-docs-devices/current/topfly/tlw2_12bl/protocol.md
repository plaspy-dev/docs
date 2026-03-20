---
slug: /topfly/tlw2_12bl/protocol
id: tlw2_12bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-12BL Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del TopFly TLW2-12BL para compatibilidad e integración con Plaspy
keywords:
  - Protocolo TopFly TLW2-12BL
  - Protocolo GPS TopFly TLW2-12BL
  - Compatibilidad TLW2-12BL Plaspy
  - Protocolo rastreador TopFly
  - Protocolo rastreo vehicular
  - Protocolo GPS gestión de flotas
  - Comunicación TLW2-12BL
  - Telemetría BLE TopFly
  - Rastreador compatible con Plaspy
  - Protocolo de seguimiento TLW2-12BL
---

# TopFly - Protocolo TLW2-12BL

Esta página describe el contexto público del protocolo para usar el rastreador TopFly TLW2-12BL con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo de forma general, cómo Plaspy recibe los datos del equipo y ofrece guía práctica de conexión para la integración. El TLW2-12BL es un rastreador vehicular 4G LTE de cableado fijo con actualizaciones de alta frecuencia, soporte BLE para sensores, entradas y salidas extensas y almacenamiento en el dispositivo; aquí se explica cómo esas capacidades se traducen en Plaspy sin exponer detalles sensibles.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Para instalaciones TLW2-12BL, los dispositivos pueden configurarse para reportar al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto 8888. Dependiendo de la configuración, el dispositivo puede usar UDP o TCP en el puerto 8888, y Plaspy trata dicho puerto como punto de entrada común para todos los dispositivos mientras selecciona automáticamente el parser de protocolo correcto para los rastreadores compatibles. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; verifique los detalles del equipo al diagnosticar problemas.

## Descripción general del protocolo

El protocolo de reporte del rastreador define cómo el TLW2-12BL se identifica, transmite posición y telemetría, y notifica eventos a un backend como Plaspy. En la práctica, el protocolo permite actualizaciones continuas de ubicación, notificaciones de eventos, cargas almacenadas tras pérdida de conectividad y comandos de control de salidas o relés a través de la plataforma.

- Permite la transmisión de coordenadas GNSS, sellos de tiempo y telemetría de movimiento a Plaspy para vistas en tiempo real e históricas.
- Informa cambios de estado de entradas y salidas como encendido, puerta y alarmas para que Plaspy genere alertas y reportes.
- Reenvía telemetría BLE de accesorios emparejados para que datos ambientales y de condición de activos estén disponibles en Plaspy.
- Soporta almacenamiento en búfer en el dispositivo para que mensajes perdidos se suban automáticamente cuando regresa la conectividad.
- Permite control remoto de salidas, como relés de inmovilizador, a través de canales de comando cuando el dispositivo y el firmware soportan acciones remotas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo una vez que el equipo reporta. Esto elimina la necesidad de seleccionar el protocolo manualmente en la plataforma para la mayoría de los dispositivos bien configurados y simplifica la incorporación de equipos.

- Plaspy escucha reportes de dispositivos en el mismo puerto para todos los rastreadores soportados para optimizar la ingestión.
- Los dispositivos pueden reportar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto 8888.
- Plaspy selecciona automáticamente el manejador de protocolo compatible cuando los datos recibidos coinciden con formatos conocidos y soportados.
- En la mayoría de los casos, un TLW2-12BL configurado para reportar al endpoint de Plaspy será detectado y comenzará a entregar telemetría utilizable sin configuración adicional en la plataforma.
- Si un dispositivo no aparece en línea, verifique la configuración de reporte, la selección de transporte y la versión de firmware antes de escalar el incidente.

## Contexto de transporte y conexión

Las elecciones de conexión y transporte determinan cómo el TLW2-12BL llega a Plaspy y pueden afectar la latencia, la fiabilidad y el comportamiento durante transiciones de red. El TLW2-12BL soporta múltiples opciones de transporte; elegir UDP o TCP en el puerto 8888 es un paso de configuración en el equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy según el firmware y las preferencias de instalación.
- Al configurar el endpoint de reporte, los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138.
- Usar TCP puede mejorar la fiabilidad de entrega para ciertos tipos de telemetría; UDP puede reducir la sobrecarga en actualizaciones de alta frecuencia según las condiciones de red.
- El TLW2-12BL también soporta canales alternativos como MQTT o SMS para telemetría en entornos con conectividad IP limitada, sujeto a la configuración del dispositivo.
- Asegúrese de que las reglas de firewall y del operador permitan conexiones salientes al puerto 8888 para el transporte elegido en el módem del vehículo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las personalizaciones del fabricante pueden cambiar comandos disponibles, intervalos de reporte y codificación de eventos. Confirme la versión de firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware y las combinaciones de accesorios, como sensores BLE o cableado adicional de E/S, pueden modificar qué campos de telemetría aparecen en los reportes.
- La selección de transporte (TCP versus UDP) es configurable en el dispositivo y puede afectar cómo Plaspy recibe las actualizaciones de alta frecuencia del rastreador.
- La capacidad de almacenamiento en búfer del dispositivo y el comportamiento de subida dependen de la configuración y el firmware; los TLW2-12BL ofrecen gran almacenamiento a bordo, pero el timing de subida puede variar.
- Opciones del fabricante como disponibilidad de actualizaciones remotas y soporte de comandos remotos pueden requerir builds de firmware específicos o banderas de configuración.
- Siempre valide la configuración del dispositivo con la documentación oficial de TopFly y las notas de la versión antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el TLW2-12BL ayuda a garantizar una incorporación confiable, monitoreo robusto y resolución efectiva de problemas cuando el rastreador se usa con Plaspy. Tener claro el contexto de comunicación reduce el tiempo de integración y ayuda a mantener el comportamiento esperado en producción.

- Confirma la configuración correcta de endpoint y transporte para que los dispositivos lleguen al servidor Plaspy de forma confiable.
- Ayuda a identificar si la falta de telemetría es un problema del dispositivo, de la red o de la configuración al diagnosticar datos fuera de línea o retrasados.
- Orienta la elección de transporte e intervalos de reporte para equilibrar frecuencia de actualizaciones y uso de datos móviles.
- Informa la planificación de actualizaciones de firmware y las verificaciones de compatibilidad cuando se introducen nuevas funciones o correcciones.
- Facilita el cableado correcto y el emparejamiento de accesorios para E/S, sensores BLE y control de relés, asegurando que los datos aparezcan en Plaspy según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el TLW2-12BL con Plaspy ofrece un camino práctico hacia la visibilidad de flota en tiempo real, alertas por eventos e integración de telemetría para operaciones vehiculares. Plaspy ingiere las posiciones GNSS del TLW2-12BL, eventos de acelerómetro, estado de E/S y datos de sensores BLE para presentar información accionable en mapas, cuadros de mando y reportes que apoyan flujos de trabajo de antirrobo, monitoreo de combustible, cadena de frío y conducta del conductor.

Si desea conocer más sobre cómo trabaja Plaspy con dispositivos como el TLW2-12BL, visite https://www.plaspy.com para detalles de la plataforma y guía de incorporación. Para la información más actualizada sobre protocolos específicos del dispositivo y firmware, consulte la documentación del fabricante en https://www.topflytech.com/ porque el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del equipo pueden cambiar con el tiempo y deben verificarse con las fuentes oficiales.

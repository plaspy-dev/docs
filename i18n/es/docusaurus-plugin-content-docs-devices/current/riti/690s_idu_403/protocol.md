---
slug: /riti/690s_idu_403/protocol
id: 690s_idu_403-protocol
sidebar_label: Protocol
title: Riti - 690s (IDU-403) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Riti 690s IDU-403 y su comunicación con Plaspy para rastreo de flotas y telemetría
keywords:
  - Protocolo Riti 690s
  - Protocolo GPS Riti 690s
  - Compatibilidad Riti 690s con Plaspy
  - Protocolo de rastreo Riti 690s
  - Protocolo IDU-403
  - Protocolo rastreador GPS Riti
  - Comunicación Riti 690s
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas Riti
  - Protocolo telemático Riti
---

# Riti - 690s (IDU-403) Protocolo

Esta página ofrece un resumen público sobre el uso del Riti Locator 690s (IDU-403) con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy para reportes de posición, telemetría y eventos, sin exponer detalles internos de firmware ni parsers privados. La información está dirigida a gestores de flota, integradores y personal técnico que necesite entender el comportamiento de conexión y las consideraciones de integración.

El Locator 690s incluye GNSS integrado y múltiples opciones de transporte, y es compatible con Plaspy desde fábrica. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las diferencias a nivel de dispositivo deben verificarse con la documentación oficial de Riti.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador define cómo el Locator 690s se identifica ante un backend y transmite datos de ubicación, sensores y eventos. Al integrarse con Plaspy, el protocolo permite actualizaciones periódicas de posición, notificaciones de eventos del sensor G, telemetría como voltaje de batería y odómetro, y cargas en búfer tras cortes de red.

- Permite que el dispositivo reporte soluciones GNSS y métodos adicionales de localización como A-GPS y ubicación por celular a un backend central.
- Transmite registros de eventos como alertas del sensor G, activaciones de SOS y notificaciones de fallas del vehículo para su manejo inmediato.
- Envía valores de telemetría como odómetro por segundo, voltaje de batería y otros diagnósticos que Plaspy usa para informes y alertas.
- Soporta almacenamiento local en búfer para que los registros guardados se carguen cuando se restablece la conectividad y así preservar la continuidad.
- Utiliza métodos de transporte comunes soportados por el equipo para la entrega confiable de telemetría a un endpoint de backend.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando un dispositivo se conecta al endpoint de Plaspy. En la mayoría de implementaciones, usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para enviar datos al servidor de Plaspy.

- Plaspy escucha en un único endpoint compartido del servidor para la telemetría de dispositivos y determina automáticamente el protocolo usado por el dispositivo entrante.
- El dominio del servidor de Plaspy para reporte de dispositivos es d.plaspy.com, que resuelve a una dirección pública del servidor.
- La plataforma usa un solo puerto compartido para todos los dispositivos soportados, de modo que la configuración de puertos es consistente entre modelos.
- Cuando el dispositivo está apuntado correctamente al endpoint de Plaspy, la detección ocurre sin que el usuario seleccione el protocolo manualmente.
- Una configuración adecuada del dispositivo y un firmware actualizado facilitan la detección automática y reducen el tiempo de integración.

## Transporte y contexto de conexión

El Locator 690s soporta varios modos de transporte y puede configurarse para reportar a Plaspy mediante transportes de red comunes. Los detalles de conexión se mantienen intencionalmente sencillos para integradores: apunte el dispositivo al endpoint de Plaspy y seleccione el transporte que soporte la unidad y el despliegue.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de instalación.
- El dispositivo puede apuntarse al host de reporte de Plaspy d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 como destino.
- Todos los dispositivos usan el mismo puerto dentro de Plaspy, por lo que el puerto 8888 es común entre los rastreadores soportados para mantener consistencia.
- La selección del transporte (UDP versus TCP) típicamente afecta las garantías de entrega y el comportamiento durante condiciones de red pobres; elija según las capacidades del dispositivo y los requisitos operativos.
- El Locator 690s también soporta transportes adicionales como HTTP, FTP y SMS para otros backends o escenarios de respaldo donde esos transportes sean apropiados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, formatos de eventos o campos de telemetría; confirme la versión de firmware del dispositivo al resolver compatibilidades.
- Revisiones de hardware u opciones accesorias pueden añadir o eliminar funciones que afectan lo que el dispositivo reporta a Plaspy.
- El modo de transporte seleccionado en el dispositivo debe coincidir con el método de conexión elegido y el entorno de red para asegurar una entrega fiable.
- La capacidad de búfer local y el comportamiento de carga pueden variar según el firmware y deben validarse en despliegues con conectividad intermitente.
- Ajustes del fabricante como configuración APN, comportamiento de la SIM y opciones de actualización remota influyen en el reporte en tiempo real y deben verificarse.
- Siempre valide el comportamiento del dispositivo con la documentación oficial de Riti para conocer límites específicos del modelo y las funciones soportadas.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador ayuda a asegurar una configuración exitosa, un diagnóstico eficiente y una operación confiable a largo plazo dentro de Plaspy. Saber qué transporte utiliza el dispositivo y cómo reporta eventos clave reduce el tiempo de inactividad y mejora la precisión de las alertas e informes.

- Acelera la configuración inicial al asegurar que los ajustes de reporte del dispositivo coincidan con las expectativas de Plaspy.
- Ayuda a diagnosticar problemas relacionados con la red, como pérdida de paquetes, almacenamiento en búfer o desajustes de transporte.
- Mejora la fidelidad de las alertas al confirmar qué tipos de eventos y campos de telemetría están disponibles desde el dispositivo.
- Apoya la planificación de escala y retención de datos al comprender el comportamiento de búfer y las cargas.
- Permite tomar decisiones informadas sobre la selección de transporte para la confiabilidad de entrega en el entorno de despliegue.

## Por qué usar Plaspy con este protocolo

Usar el Locator 690s con Plaspy ofrece un camino directo hacia mapas en vivo, reproducción de rutas, alertas de eventos y telemetría de vehículos en una plataforma unificada de gestión de flotas. El odómetro por segundo del dispositivo, los eventos del sensor G y el almacenamiento local complementan las funciones de Plaspy para monitoreo, seguridad y análisis operativo.

Plaspy simplifica la integración de backend al ofrecer un único endpoint compartido y detección automática de protocolo para los dispositivos soportados. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware e implementación, verifique la información con el fabricante en https://www.riti.com.tw/.

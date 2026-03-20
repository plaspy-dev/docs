---
slug: /xirgo/xt24/protocol
id: xt24-protocol
sidebar_label: Protocol
title: Xirgo - XT24 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Xirgo XT24 con el servidor Plaspy y el contexto de conexión
keywords:
  - protocolo Xirgo XT24
  - protocolo GPS Xirgo XT24
  - protocolo de comunicación XT24
  - protocolo de rastreo XT24
  - compatibilidad Xirgo OBD
  - integración de dispositivos Plaspy
  - detección de protocolo Plaspy
  - protocolo de telemática vehicular
  - guía de protocolo para rastreadores GPS
  - protocolo para rastreadores LTE Cat M1
---

# Xirgo - Protocolo XT24

Esta página describe el contexto público del protocolo para usar el rastreador OBD GPS Xirgo XT24 con la plataforma Plaspy. Explica cómo las transmisiones de telemetría del XT24 —posición GNSS, parámetros vehiculares por OBD y eventos del acelerómetro— se entregan a Plaspy y qué papel desempeña el protocolo de comunicación del equipo en ese proceso.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo cuando éste está configurado para reportar al endpoint de Plaspy. El XT24 es compatible con Plaspy de manera estándar, pero el comportamiento del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para notas específicas de firmware consulte la documentación del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo del rastreador define cómo el XT24 formatea y transmite el estado, la posición y la telemetría del bus del vehículo para que Plaspy pueda ingerir y presentar datos útiles de ubicación y diagnóstico. El protocolo es el puente entre el dispositivo físico y los servicios de Plaspy, habilitando visibilidad en tiempo real y flujos de trabajo basados en eventos.

- Identificación y registro del dispositivo que permiten a Plaspy asociar los mensajes con el registro vehicular correcto.
- Entrega de telemetría de posición GNSS, velocidad y PIDs OBD para que Plaspy muestre ubicación y parámetros del vehículo.
- Reporte de eventos y alarmas como eventos de movimiento detectados por el acelerómetro de 3 ejes para movimiento, impactos o señales de manipulación.
- Latidos periódicos y actualizaciones de estado que comunican la salud del dispositivo y su conectividad a Plaspy.
- Rutas opcionales de comandos y respuestas usadas por la gestión remota de dispositivos cuando el equipo y el fabricante lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un endpoint unificado y determina automáticamente el protocolo del dispositivo a partir del patrón de tráfico entrante y la información de registro. En la mayoría de las implementaciones usted no necesita seleccionar un protocolo dentro de Plaspy si el XT24 está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP de servidor asociada 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración y los despliegues a gran escala.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un XT24 correctamente apuntado será identificado sin selección manual de protocolo.
- Verifique que el XT24 esté configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que los mensajes lleguen al servicio de ingestión de Plaspy.
- Tanto UDP como TCP son transportes soportados por los dispositivos según la configuración del firmware y del equipo.

## Transporte y contexto de conexión

Las decisiones de transporte y conexión influyen en cómo el XT24 entrega datos a Plaspy, pero no cambian el rol de alto nivel del protocolo. El dispositivo puede usar UDP o TCP en el puerto compartido de Plaspy según lo permitan el firmware y la configuración del operador móvil.

- El XT24 puede configurarse para reportar por UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las capacidades del firmware.
- Los dispositivos pueden apuntar al nombre de host de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración durante el despliegue.
- Factores de la red celular como NAT, tiempos de expiración de sesión y comportamiento del operador pueden influir en la fiabilidad de TCP frente a UDP en un despliegue específico.
- Al configurar una flota, verifique que la provisión de la SIM y los ajustes APN permitan conexiones salientes a d.plaspy.com en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué PIDs OBD y parámetros OEM reporta el XT24; espere variaciones entre versiones de firmware.
- Revisión de hardware o características opcionales del XT24 pueden añadir o eliminar flujos de telemetría, como ciertos eventos del acelerómetro o reporte de batería de respaldo.
- Algunos vehículos exponen solo un subconjunto de PIDs OBD; la disponibilidad de telemetría OBD depende tanto del vehículo como del firmware del rastreador.
- La elección del transporte entre TCP y UDP puede verse limitada por redes de los operadores o por la configuración del firmware del dispositivo.
- Variaciones por parte del fabricante o compilaciones regionales de firmware pueden causar diferencias sutiles en cómo los mensajes aparecen en Plaspy.
- Siempre valide la compatibilidad en despliegues masivos probando dispositivos con modelos de vehículo representativos y builds de firmware aplicables.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del XT24 ayuda a garantizar una configuración confiable, telemetría precisa y una resolución de problemas más eficiente al integrar dispositivos con Plaspy. Tener claro qué entrega el protocolo facilita interpretar el comportamiento del dispositivo y escalar los despliegues de forma predecible.

- Puesta en servicio más rápida, porque puede confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y usa el transporte previsto.
- Mejora en la resolución de problemas cuando ocurren problemas de conectividad, telemetría faltante o eventos inesperados.
- Expectativas claras sobre qué parámetros OBD y qué eventos del acelerómetro estarán disponibles según la combinación de hardware y firmware.
- Mejor planificación del comportamiento de red, incluyendo keepalives, persistencia de sesión e implicaciones de la provisión celular.
- Operaciones de flota más fiables mediante la validación proactiva de diferencias de firmware y notas del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT24 con Plaspy ofrece a los operadores de flotas una solución compacta y plug and play para recopilar posición GNSS, telemetría vehicular desde el puerto OBD y eventos de movimiento desde un acelerómetro integrado. La conexión directa al OBD y el enlace celular LTE Cat M1 del XT24 lo hacen adecuado para flotas de vehículos de pasajeros y de ligera carga que requieren ubicación oportuna, estado de ignición y parámetros selectos del motor con bajo consumo.

Plaspy simplifica la configuración de dispositivos al escuchar en un único puerto y detectar automáticamente los protocolos de los rastreadores. Para saber más sobre cómo Plaspy trabaja con dispositivos como el XT24 visite https://www.plaspy.com. Para el comportamiento más reciente específico por dispositivo, cambios de firmware y detalles de implementación del fabricante, verifique la información en el sitio de Xirgo en https://xirgo.com/.

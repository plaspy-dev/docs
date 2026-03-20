---
slug: /wp/vt_360/protocol
id: vt_360-protocol
sidebar_label: Protocol
title: WP - VT-360 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS WP VT-360 y su comunicación con Plaspy para seguimiento fiable de vehículos
keywords:
  - protocolo WP VT-360
  - protocolo GPS WP VT-360
  - protocolo de rastreo WP VT-360
  - protocolo de comunicación WP VT-360
  - compatibilidad WP VT-360 Plaspy
  - rastreador GPS VT-360
  - protocolo rastreador de vehículos WP
  - protocolo de dispositivo Plaspy
  - protocolo de seguimiento de vehículos WP
  - guía del protocolo VT-360
---

# WP - Protocolo VT-360

Esta página describe el contexto público del protocolo para usar el rastreador WP VT-360 con Plaspy. Se enfoca en cómo el dispositivo se comunica a alto nivel, qué papel juega el protocolo de reporte del rastreador y qué debe verificar al integrar el VT-360 en la plataforma Plaspy. El VT-360 es un rastreador compacto GNSS (GPS y GLONASS) para vehículos con soporte 2G y 3G, seguimiento en tiempo real, registro de recorridos con más de 100,000 puntos, detección de encendido, reportes configurables y capacidad de configuración OTA.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. Los dispositivos compatibles con Plaspy, incluido el VT-360, pueden configurarse para apuntar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que la integración práctica requiere atención a la configuración del equipo y a los detalles del firmware.

## Resumen del protocolo

El protocolo define cómo el VT-360 informa posiciones, eventos y estado a un servidor remoto y cómo el servidor puede enviar configuraciones o actualizaciones de firmware. En términos prácticos, el protocolo es el conjunto de intercambios de mensajes y las opciones de transporte que hacen útil al rastreador para monitoreo en tiempo real y reporte de eventos.

- Permite que el VT-360 envíe fijaciones de posición GNSS y actualizaciones de ubicación con marcas de tiempo a un servidor.
- Transporta telemetría de eventos e entradas como estado de encendido, alarmas de geocerca, avisos de remolque, notificaciones de exceso de velocidad e informes de kilometraje.
- Permite la identificación del dispositivo y la asociación de sesiones para que Plaspy asigne los mensajes al activo correcto.
- Soporta la entrega de configuración remota y disparadores de actualización OTA cuando el dispositivo y el firmware lo permiten.
- Proporciona el mecanismo para reportar datos de accesorios, como sensores de temperatura o eventos RFID, cuando están disponibles.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el VT-360 está configurado para reportar al endpoint de Plaspy. La detección se basa en observar los mensajes del dispositivo en el endpoint compartido de Plaspy y mapear esos mensajes a comportamientos de dispositivos conocidos, de modo que la plataforma pueda interpretar la telemetría sin selección manual del protocolo.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la dirección IP equivalente 54.85.159.138, usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento.
- Si el VT-360 está configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy intentará la detección automática del protocolo.
- En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Si un dispositivo no aparece como detectado, verifique la configuración de envío del equipo, la conectividad de la SIM y que el tráfico saliente hacia el host y puerto de Plaspy esté permitido por la red.

## Transporte y contexto de la conexión

El VT-360 puede usar la red celular para establecer una conexión con Plaspy y puede configurarse para usar UDP o TCP según las capacidades del dispositivo y los parámetros elegidos. La capa de transporte y la configuración del endpoint son detalles esenciales de la conexión, pero no cambian el hecho de que Plaspy centraliza la escucha en un único host y puerto.

- Los dispositivos pueden configurarse para enviar reportes usando UDP o TCP en el puerto 8888.
- Plaspy acepta conexiones y reportes en d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reducir la complejidad de configuración entre modelos.
- Asegúrese de que el perfil de SIM y el APN del VT-360 permitan conexiones salientes al host de Plaspy en el puerto 8888.
- Considere restricciones de firewall, NAT y del operador móvil al diagnosticar problemas de conectividad.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden alterar la frecuencia de mensajes, los eventos disponibles o los campos exactos incluidos en los reportes.
- Revisiones de hardware o módulos accesorios pueden añadir o cambiar la telemetría disponible, como entradas adicionales, funciones de voz o sensores externos.
- La selección del transporte (UDP vs TCP) se configura en el dispositivo y puede afectar el comportamiento de entrega bajo ciertas condiciones de red.
- Algunas funciones avanzadas, como voz bidireccional o integraciones de accesorios, pueden requerir configuración adicional o builds de firmware específicos.
- Valide que la versión de firmware del VT-360 en sus unidades soporte las funciones que espera antes de desplegar a gran escala.
- Siempre contraste la documentación del fabricante para confirmar disponibilidad de características y notas específicas del proveedor.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración confiable, una interpretación precisa de los datos y una resolución de problemas más fluida al integrar el VT-360 con Plaspy. Tener claro qué envía el dispositivo y cómo se conecta reduce el tiempo de configuración y contribuye a mantener la fiabilidad operativa a largo plazo.

- Acelera la configuración inicial confirmando el nombre de host o IP correctos y los ajustes de transporte.
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, APN incorrecto o transporte mal configurado.
- Asegura que eventos esperados como cambios de encendido, activaciones de geocerca y registros de viaje lleguen correctamente a Plaspy.
- Orienta la planificación de actualizaciones de firmware y la validación de características para que el despliegue cumpla con los requisitos operativos.
- Apoya la planificación de accesorios y extensiones como hardware de voz, lectores RFID o sensores de temperatura.

## Por qué usar Plaspy con este protocolo

Usar el VT-360 con Plaspy proporciona una vía directa para obtener visibilidad de vehículos en tiempo real, alertas de eventos e historial de recorridos que muchas flotas y operaciones requieren. El endpoint unificado de Plaspy y la detección automática de protocolo reducen la carga de configuración por dispositivo y facilitan la incorporación masiva de unidades VT-360.

Si desea saber más sobre cómo Plaspy funciona con el VT-360 y otros rastreadores compatibles, visite https://www.plaspy.com. Tenga en cuenta que el soporte del protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información más reciente del dispositivo en el sitio del fabricante http://www.wondeproud.com/.

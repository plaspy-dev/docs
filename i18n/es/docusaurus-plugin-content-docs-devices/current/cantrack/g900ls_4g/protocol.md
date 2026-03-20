---
slug: /cantrack/g900ls_4g/protocol
id: g900ls_4g-protocol
sidebar_label: Protocol
title: CanTrack - G900LS-4G Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo CanTrack G900LS-4G y su comunicación con Plaspy para rastreo y telemetría confiables
keywords:
  - Protocolo CanTrack G900LS-4G
  - Protocolo GPS G900LS-4G
  - Compatibilidad G900LS-4G Plaspy
  - Protocolo de rastreo CanTrack
  - Comunicación G900LS-4G
  - Protocolo de seguimiento G900LS-4G
  - Integración de dispositivos Plaspy
  - Guía protocolo rastreador GPS
  - Rastreo de vehículos G900LS-4G
  - Rastreo de flotas CanTrack
---

# CanTrack - Protocolo G900LS-4G

Esta página describe el contexto público del protocolo para usar el tracker CanTrack G900LS-4G con Plaspy. Resume cómo el dispositivo se comunica con Plaspy para ubicación en tiempo real, telemetría, alarmas y control remoto cuando está soportado. La información se centra en conceptos de conexión y protocolo útiles para integración y resolución de problemas sin exponer detalles propietarios o sensibles de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo reporta a la plataforma. El G900LS-4G suele implementar reportes al estilo GT06 y envío por TCP/IP según lo descrito por el fabricante, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Para tramas, comandos específicos del dispositivo e historial de cambios de firmware consulte la documentación oficial de CanTrack.

## Visión general del protocolo

El protocolo G900LS-4G es el conjunto de reglas que el tracker usa para enviar posiciones GPS, telemetría del vehículo, alarmas y actualizaciones de estado a un servidor remoto. A grandes rasgos, el protocolo permite que el dispositivo se identifique ante el servidor, transmita telemetría con sello de tiempo e indique eventos como cambio de ignición, pérdida de alimentación o accionamiento de sensores. Plaspy procesa esos mensajes para mostrar mapas, alertas e informes a los administradores.

- Proporciona identificación del dispositivo y contexto de sesión para que el servidor asocie los reportes con el activo correcto.
- Transmite posición GNSS, velocidad, rumbo y hora para que Plaspy muestre ubicación y datos de viaje precisos.
- Incluye campos de telemetría como estado ACC/ignición, estado de alimentación y batería auxiliar, y eventos de alarma para alertas en mapa e informes.
- Soporta mensajes por evento para movimiento, cambio de ángulo, vibración y corte de energía que permiten alertas en tiempo real.
- Emplea patrones de reporte TCP/IP comúnmente encontrados en dispositivos tipo GT06 para entregar mensajes de forma confiable a un endpoint remoto.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos modelos de trackers y determinar automáticamente el protocolo que usa el dispositivo cuando los datos llegan al endpoint de la plataforma. Esto reduce la configuración manual dentro de Plaspy para la mayoría de instalaciones estándar y acelera la incorporación inicial de dispositivos.

- Los equipos deben configurarse para reportar al endpoint de Plaspy en d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la plataforma escucha en el puerto 8888 para conexiones entrantes de trackers.
- Los trackers pueden configurarse para usar transporte UDP o TCP hacia el puerto 8888 según la capacidad del dispositivo y la configuración del sitio.
- Cuando un tracker correctamente configurado envía sus primeros reportes al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del tracker y enruta los mensajes a la lógica de ingestión adecuada.
- En la mayoría de los casos usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está reportando correctamente al endpoint y puerto requeridos.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el G900LS-4G llega a Plaspy más que los detalles internos de los paquetes. El tracker soporta transportes estándar de redes móviles y normalmente se configura con una dirección de servidor remoto y un puerto para reenviar su telemetría.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración seleccionada.
- Plaspy acepta conexiones dirigidas al dominio d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha, lo que simplifica la configuración de APN y servidor en flotas mixtas.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega y suele elegirse según el comportamiento de la red y las opciones del firmware del dispositivo.
- Asegúrese de que el APN y las sesiones de datos móviles estén correctamente configuradas en el tracker para que pueda establecer conexiones salientes TCP o UDP al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El G900LS-4G suele implementar reportes al estilo GT06, pero existen variantes de GT06 y extensiones del fabricante que pueden diferir entre versiones de firmware.
- Las actualizaciones de firmware, revisiones de hardware y personalizaciones OEM pueden cambiar comandos disponibles, el orden de campos o campos de telemetría opcionales.
- La elección del transporte importa: algunas instalaciones prefieren TCP por la fiabilidad de sesión mientras que otras usan UDP por menor overhead; confirme el soporte del dispositivo para el transporte que usted prefiera.
- Funciones opcionales como control remoto de relé para inmovilización, reporte de corte de energía e entradas de sensores dependen de la variante de cableado instalada y de la configuración.
- Valide los ajustes de envío del tracker (dominio o IP del servidor y puerto 8888) según los requisitos de Plaspy y verifique las notas del fabricante para cambios de comportamiento específicos por firmware.
- Al mezclar dispositivos de diferentes lotes de producción, pruebe una unidad representativa para asegurar que los campos de telemetría y el comportamiento de las alarmas sean los esperados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los administradores a configurar los equipos correctamente, solucionar conectividad e interpretar los datos que recibe Plaspy. Aunque Plaspy detecte automáticamente el protocolo del tracker, conocer las expectativas básicas de protocolo y transporte reduce el tiempo de configuración y las falsas alarmas.

- Acelera la incorporación asegurando que APN, dirección del servidor y puerto del dispositivo coincidan con los requisitos de Plaspy.
- Aclara qué campos de telemetría y alarmas enviará el tracker para que Plaspy presente alertas e informes precisos.
- Ayuda a diagnosticar problemas de conectividad al identificar si el tracker está alcanzando d.plaspy.com o 54.85.159.138 en el puerto 8888 y si usa UDP o TCP.
- Informa decisiones sobre actualizaciones de firmware y confirma si un cambio de firmware alteró el contenido de los mensajes o el comportamiento del transporte.
- Facilita la configuración correcta de funciones opcionales como control de relé y alarmas por entrada para que coincidan con las políticas operativas.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G900LS-4G con Plaspy ofrece a los gerentes de flota y operadores una vía práctica para integrar posiciones GNSS, telemetría y alarmas en una sola plataforma. El hardware compacto del tracker, su amplio rango de voltaje y su reporte común al estilo GT06 lo hacen adecuado para flotas mixtas donde se requieren actualizaciones de posición fiables, monitoreo de ignición y alertas antirrobo.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configurar múltiples tipos de dispositivos. Para conocer más sobre cómo Plaspy puede trabajar con dispositivos como el G900LS-4G visite https://www.plaspy.com. Para la documentación específica más reciente del protocolo del dispositivo, notas de firmware y detalles de implementación verifique los recursos del fabricante en https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

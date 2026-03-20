---
slug: /teltonika/fmm230/protocol
id: fmm230-protocol
sidebar_label: Protocol
title: Teltonika - FMM230 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública de protocolo para integrar Teltonika FMM230 con Plaspy en rastreo GPS y telemetría
keywords:
  - Protocolo Teltonika FMM230
  - Protocolo GPS Teltonika FMM230
  - Compatibilidad FMM230 Plaspy
  - Protocolo de comunicación FMM230
  - Protocolo de rastreo FMM230
  - Protocolo rastreador de activos Teltonika
  - Compatibilidad de dispositivo Plaspy
  - Protocolo de rastreo vehicular Teltonika
  - Integración sensores BLE FMM230
  - Rastreo de flotas Teltonika
---

# Teltonika - Protocolo FMM230

Esta página describe, a nivel público y operativo, el contexto del protocolo para usar el Teltonika FMM230 con Plaspy. Explica cómo el dispositivo comunica datos al servidor de Plaspy y qué papel juega el protocolo de reporte del rastreador para garantizar la entrega correcta de la información. El enfoque está en la integración y las consideraciones de funcionamiento, no en detalles propietarios internos del protocolo.

Plaspy comparte configuraciones de conexión entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página sirve como guía de interoperabilidad y no como especificación técnica exhaustiva.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el FMM230 transmite ubicación, telemetría, lecturas de sensores y notificaciones de eventos a un servidor remoto. En la práctica, esto significa que el dispositivo da formato y envía mensajes que Plaspy recibe y asocia con los activos en la interfaz de gestión de flotas. El protocolo permite identificación, reportes periódicos y por eventos, además de la transmisión de datos accesorios como lecturas de sensores BLE y estados de entradas/salidas.

- Permite al FMM230 enviar actualizaciones de ubicación y telemetría que Plaspy puede procesar para seguimiento en tiempo real.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda vincular los mensajes con el registro de activo correcto.
- Lleva datos auxiliares como valores de sensores BLE, estados de IO y eventos de batería para alertas e informes.
- Soporta reportes periódicos y mensajes disparados por eventos para balancear volumen de datos y capacidad de respuesta.
- Permite configuración remota y mecanismos de actualización de firmware mediante las herramientas del fabricante mientras los datos operativos fluyen a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador según el tráfico que llega desde el dispositivo. En la mayoría de las implementaciones no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy con los ajustes de transporte soportados.

- Plaspy escucha en un endpoint público común para el tráfico de dispositivos, lo que simplifica la configuración.
- Cuando el FMM230 apunta al endpoint de Plaspy y comienza a reportar, Plaspy identificará los mensajes y asignará el manejador adecuado.
- Los usuarios normalmente configuran el dispositivo para reportar al servidor de Plaspy y no necesitan seleccionar un parser en la plataforma.
- La detección automática reduce pasos de puesta en marcha y ayuda a acomodar diversas conductas de firmware de Teltonika.
- Si no llegan reportes, valide primero la red del dispositivo y la configuración del destino del servidor antes de cambiar opciones de parser.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el FMM230 alcanza a Plaspy y qué endpoints configurar en el dispositivo. El FMM230 puede usar transportes celulares para entregar datos y comúnmente se configura para apuntar a la dirección del servidor Plaspy para el uplink de telemetría. Mantenga la configuración de conexión y DNS coherente con su plan de red y las capacidades de firmware del dispositivo.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy para el tráfico de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- El FMM230 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del sitio
- Use las herramientas de configuración del dispositivo para establecer el dominio o IP del servidor y el tipo de transporte que coincida con su red y firmware
- Confirme el perfil celular y los ajustes de APN para que el dispositivo pueda alcanzar el endpoint de Plaspy de manera fiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, los campos disponibles y las funciones opcionales que afectan la interoperabilidad con Plaspy.
- Las revisiones de hardware y las configuraciones de accesorios, como la adición de sensores BLE, pueden influir en el conjunto de datos reportados.
- La selección de transporte entre UDP y TCP modifica la semántica de entrega y debería coincidir con lo que su despliegue y red prefieren.
- Las utilidades de configuración del fabricante y las actualizaciones FOTA pueden añadir o cambiar características del protocolo con el tiempo.
- Valide el reporte del dispositivo al endpoint de Plaspy después de la configuración para confirmar que los mensajes llegan y que el dispositivo es reconocido.
- Consulte la documentación de Teltonika para comportamientos específicos de firmware al planear implementaciones o migraciones a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación facilita la configuración, la resolución de problemas y asegura la confiabilidad a largo plazo al usar el FMM230 con Plaspy. Tener expectativas claras sobre lo que el rastreador reportará y cómo el servidor recibe los mensajes reduce el tiempo de integración y mejora la visibilidad operativa.

- Acelera la incorporación inicial al asegurar que se usan los servidores, transportes y ajustes de APN correctos
- Simplifica la resolución de problemas al acotar fallas a la red, el transporte o la configuración del dispositivo
- Ayuda a ajustar la frecuencia de reportes y las reglas de eventos para equilibrar la vida útil de la batería y las necesidades de telemetría
- Asegura que los datos de sensores BLE y las entradas/salidas se mapeen correctamente en las alertas y paneles de Plaspy
- Facilita la planificación de actualizaciones de firmware y variaciones de hardware en una flota

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM230 con Plaspy ofrece a las organizaciones visibilidad confiable de activos y vehículos que operan en entornos exigentes. El diseño robusto del FMM230, sus opciones multi red celular, soporte de sensores BLE y batería de respaldo lo hacen adecuado para flotas, transporte refrigerado y seguimiento de equipos. Cuando el dispositivo reporta al servidor de Plaspy, los operadores obtienen acceso a ubicación en tiempo real, telemetría y flujos de eventos para supervisión operativa y alertas.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y orientación del fabricante, verifique la información actual en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

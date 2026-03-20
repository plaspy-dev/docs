---
slug: /teltonika/fmm003/protocol
id: fmm003-protocol
sidebar_label: Protocol
title: Teltonika - FMM003 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMM003 y cómo comunica con Plaspy para rastreo de flotas
keywords:
  - protocolo teltonika fmm003
  - protocolo gps teltonika fmm003
  - protocolo de comunicación fmm003
  - protocolo teltonika plaspy
  - protocolo de rastreo fmm003
  - protocolo obd teltonika
  - compatibilidad gps fmm003
  - integración teltonika fmm003
  - protocolo dispositivo plaspy
  - rastreo de flotas teltonika
---

# Teltonika - Protocolo FMM003

Esta página describe el contexto público del protocolo para usar el Teltonika FMM003 con Plaspy. Se centra en cómo el dispositivo comunica con la plataforma Plaspy en términos generales, qué papel juega el protocolo de reporte del tracker para obtener telemetría confiable y qué esperar al integrar un FMM003 en una solución de gestión de flotas. Los detalles técnicos están limitados a información pública y no sensible; su objetivo es ayudar con la configuración y la resolución de problemas, no reemplazar la documentación del fabricante.

El Teltonika FMM003 es un tracker 4G LTE Cat M1 con lectura OBD OEM y conectividad multibanda diseñado para uso en flotas. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. El comportamiento preciso del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que lo que usted observe en campo puede diferir de lo descrito aquí.

## Resumen del protocolo

El protocolo de comunicación que utiliza el FMM003 define cómo el tracker reporta ubicación, parámetros OBD, telemetría y estado del dispositivo a un servidor remoto como Plaspy. A grandes rasgos, el protocolo permite que el equipo se identifique, transmita datos de posición y del vehículo útiles, y apoye flujos de configuración remota mediante el endpoint del servidor.

- Transmite ubicación GNSS, parámetros derivados de OBD y estado del dispositivo para que Plaspy presente telemetría utilizable.
- Incluye datos de identificación que permiten al servidor asociar los mensajes entrantes con un dispositivo y cuenta específicos.
- Soporta frecuencia de reporte y mensajes por eventos para supervisión en tiempo real.
- Permite comportamientos de respaldo para que el rastreo continúe cuando las redes primarias no estén disponibles.
- Funciona junto con ajustes del dispositivo como modos de suspensión y optimización de energía para equilibrar batería y reporte.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint público compartido y detecta automáticamente el protocolo del tracker que usa una conexión entrante. Mientras un FMM003 esté configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, que es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según capacidad y ajustes del equipo.
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta al endpoint de la plataforma.
- Si un dispositivo está enviando al endpoint de Plaspy y no aparece en su cuenta, verifique la configuración de reporte del dispositivo y el enrutamiento de red hacia d.plaspy.com.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el dispositivo alcanza el endpoint de Plaspy y qué opciones de transporte están disponibles. El FMM003 soporta transportes celulares modernos y puede configurarse para usar UDP o TCP para el reporte, por lo que seleccionar el transporte y endpoint correctos es una parte importante de la configuración.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del dispositivo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración.
- Problemas a nivel de red como restricciones del operador, configuración del APN y reglas de firewall pueden afectar la conectividad al endpoint de Plaspy.
- Asegúrese de que la SIM del dispositivo y el APN estén provisionados para datos y que el tráfico saliente hacia d.plaspy.com esté permitido por el operador.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los parámetros OBD disponibles y el comportamiento de las funciones; siempre anote el firmware activo en el tracker.
- Las revisiones de hardware y las implementaciones OEM del OBD pueden afectar qué parámetros del fabricante están disponibles vía la interfaz OBD.
- Algunas funciones, como parámetros avanzados del vehículo, pueden requerir modelos de vehículo específicos o una lista de vehículos soportados por el fabricante.
- La selección de transporte (UDP vs TCP) puede influir en las características de entrega y debe ajustarse a la configuración del dispositivo y las condiciones de red.
- Valide la compatibilidad y las funcionalidades soportadas contra la documentación oficial de Teltonika para el FMM003 antes de un despliegue a gran escala.
- La detección automática de Plaspy simplifica la integración pero no reemplaza verificar que el tracker esté configurado para reportar al endpoint de Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un despliegue fluido y operaciones confiables al usar el FMM003 con Plaspy. Conocer claramente el comportamiento del reporte, las opciones de transporte y las capacidades del dispositivo reduce el tiempo de resolución de problemas y mejora la calidad de los datos para la supervisión de la flota.

- Permite configurar con precisión los intervalos de reporte y los desencadenantes de eventos para cumplir requisitos operativos.
- Ayuda a resolver problemas de conectividad confirmando transporte y ajustes de endpoint como UDP o TCP y el host de Plaspy.
- Aclara qué parámetros OBD y del vehículo serán visibles en Plaspy según el firmware y las listas de vehículos soportados.
- Facilita la planificación de actualizaciones de firmware y cómo pueden alterar el comportamiento del dispositivo o la telemetría soportada.
- Fomenta pasos de validación adecuados al desplegar dispositivos en una flota mixta o en regiones con soporte de red variable.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM003 con Plaspy ofrece una vía directa para centralizar datos GNSS, OBD y estado del dispositivo. Para organizaciones que necesitan visibilidad de vehículos, telemetría de combustible y odómetro, y alertas basadas en eventos, Plaspy recibe los reportes del FMM003 en un endpoint compartido y los presenta junto con otros datos de flota para supervisión operativa.

Si desea saber más sobre Plaspy y cómo la plataforma trabaja con dispositivos como el Teltonika FMM003, visite https://www.plaspy.com. Para la documentación de protocolo más actual y específica del dispositivo, notas de firmware y listas de vehículos soportados, verifique los detalles con el fabricante en https://www.teltonika-gps.com/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda revisar la documentación oficial del fabricante antes del despliegue.

---
slug: /teltonika/fm_2100/protocol
id: fm_2100-protocol
sidebar_label: Protocol
title: Teltonika - FM 2100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Teltonika FM 2100 con servidores Plaspy y plataformas de gestión de flotas
keywords:
  - protocolo Teltonika FM 2100
  - Teltonika FM 2100 GPS
  - protocolo de rastreo FM 2100
  - protocolo Teltonika Plaspy
  - compatibilidad FM 2100
  - rastreo de vehículos FM 2100
  - gestión de flotas Teltonika
  - rastreador GPS FM 2100
  - protocolo de comunicación FM 2100
  - compatibilidad GPS Plaspy
---

# Teltonika - FM 2100 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FM 2100 con Plaspy. Se enfoca en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales y qué considerar al configurar los reportes hacia la plataforma. El objetivo es aclarar la conexión y el comportamiento de reporte sin exponer detalles de implementación sensibles.

El FM 2100 es un rastreador compacto basado en GSM, diseñado para el seguimiento de vehículos y activos. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento del dispositivo puede diferir ligeramente en campo.

## Visión general del protocolo

El protocolo de reporte del FM 2100 define cómo el rastreador envía ubicación, estado e información de entradas y salidas a un servidor remoto. Garantiza que el dispositivo pueda identificarse, transmitir telemetría útil y permitir el monitoreo remoto y control básico cuando estén disponibles.

- Permite la transmisión periódica o por eventos de coordenadas GPS y estado del dispositivo a un servidor remoto
- Incluye información de identificación para que Plaspy pueda asociar los datos entrantes con el activo correcto
- Transmite el estado de entradas y salidas (E/S) para monitorizar sensores y controles externos
- Soporta tanto datos GPRS como respaldo por SMS para la entrega de actualizaciones de rastreo
- Funciona con redes GSM estándar y es típicamente configurable en cuanto a transporte y destino

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de los dispositivos usando un punto de conexión compartido y determina automáticamente el protocolo del rastreador a partir de las características de la conexión y la carga útil entrante. En la mayoría de los casos, cuando el FM 2100 está configurado para reportar a Plaspy, no se requiere seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha las conexiones de dispositivos en un puerto común utilizado por todos los equipos compatibles
- El endpoint de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138
- La plataforma detecta automáticamente el protocolo del rastreador a partir de los datos que envía el dispositivo
- Por lo general, usted solo debe apuntar el dispositivo al endpoint de Plaspy y escoger el tipo de transporte
- Una configuración correcta del dispositivo garantiza que Plaspy pueda identificar y parsear los reportes entrantes

## Transporte y contexto de conexión

El FM 2100 puede configurarse para usar transporte UDP o TCP según la configuración y las condiciones de la red. Para la integración con Plaspy, el dispositivo debe apuntar al endpoint de reporte de Plaspy y usar el puerto compartido del servicio.

- El dispositivo puede configurarse para conectarse a d.plaspy.com o directamente a 54.85.159.138
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos en Plaspy usan ese mismo puerto
- El FM 2100 puede usar UDP o TCP en el puerto 8888 según las preferencias de configuración y red
- Elija el transporte según la fiabilidad y las características del proveedor de red para su despliegue
- Asegúrese de que la APN y los ajustes GPRS estén correctos en el dispositivo para una entrega de datos fiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y los campos disponibles; verifique el firmware que corre en su FM 2100
- Las revisiones de hardware y las variantes regionales pueden afectar interfaces disponibles u opciones de reporte
- Las configuraciones por defecto del fabricante pueden usar transporte o destinos distintos; confirme la configuración del dispositivo antes del despliegue
- El respaldo por SMS está disponible en el FM 2100, pero su comportamiento depende de la configuración del dispositivo y del soporte del proveedor
- En caso de duda, valide el comportamiento esperado con la documentación oficial de Teltonika y las notas de versión
- La detección automática de Plaspy reduce pasos de configuración, pero aún se requiere el endpoint y transporte correctos en el dispositivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FM 2100 ayuda a asegurar una integración fluida con Plaspy y reduce el tiempo dedicado a solucionar problemas de conectividad o interpretación de datos.

- Agiliza la configuración inicial al clarificar qué opciones de conexión y transporte debe usar el dispositivo
- Facilita la resolución de problemas al acotar si los fallos son de red, configuración o firmware del dispositivo
- Mejora la fiabilidad al orientar decisiones sobre selección de transporte y frecuencias de reporte
- Apoya el mantenimiento a largo plazo ante actualizaciones de firmware o cambios de equipos
- Permite configurar de forma informada las entradas y salidas para que coincidan con las necesidades de monitoreo y control

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FM 2100 con Plaspy ofrece a las organizaciones una solución práctica para recolectar ubicación, estado y telemetría básica de E/S de vehículos y activos remotos. El diseño compacto del FM 2100, sus opciones de conectividad GSM y las E/S auxiliares lo hacen apto para diversos escenarios de rastreo, mientras que Plaspy proporciona un endpoint centralizado y detección automática de protocolo que simplifican la integración.

Para conocer más sobre cómo funciona Plaspy con rastreadores GPS y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la guía más reciente del fabricante, verifique la información en el sitio de Teltonika en https://www.teltonika-gps.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

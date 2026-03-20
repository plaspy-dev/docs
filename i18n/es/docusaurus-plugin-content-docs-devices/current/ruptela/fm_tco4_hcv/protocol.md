---
slug: /ruptela/fm_tco4_hcv/protocol
id: fm_tco4_hcv-protocol
sidebar_label: Protocol
title: Ruptela - FM-Tco4 HCV Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Ruptela FM-Tco4 HCV que explica cómo se comunica con Plaspy para integrar flotas
keywords:
  - Protocolo Ruptela FM-Tco4 HCV
  - Protocolo GPS FM-Tco4 HCV
  - Protocolo Ruptela Plaspy
  - Protocolo de rastreo de vehículos
  - Telemetría de flotas
  - Rastreador GPS para camiones
  - Integración CANbus FMS
  - Tacógrafo Doble CAN
  - Compatibilidad de dispositivos Plaspy
  - Integración monitoreo de flotas
---

# Ruptela - Protocolo FM-Tco4 HCV

Esta página describe el contexto público del protocolo para usar el Ruptela FM-Tco4 HCV con Plaspy. Aquí se explica, en términos generales y sin detalles sensibles, cómo el equipo suele comunicarse con los servidores de Plaspy y se listan los ajustes de conexión que deberá usar para apuntar los dispositivos a Plaspy y así recopilar datos de telemetría y rastreo de flota.

El FM-Tco4 HCV es un rastreador con muchas funciones para camiones y vehículos comerciales pesados; soporta lectura CANbus en estándares J1708 y FMS, operación Dual Can, puertos RS232 y RS485, soporte 1-Wire para accesorios y monitoreo de unidades de refrigeración. Plaspy usa ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del FM-Tco4 HCV define cómo el rastreador formatea y envía su telemetría, estado e información diagnóstica a un servidor remoto. En términos públicos, el protocolo es el conjunto de comportamientos y tipos de mensajes que permiten a Plaspy recibir posiciones GPS, parámetros CANbus, indicadores de tacógrafo y entradas de accesorios sin exponer detalles internos del fabricante.

- Permite que el dispositivo se identifique y transmita ubicación y telemetría del vehículo a Plaspy.
- Incluye datos relacionados con CANbus y tacógrafo junto con eventos básicos de GPS y E/S.
- Facilita la configuración remota y ocasionales acuses de recibo de comandos cuando el equipo lo soporta.
- Permite que los reportes de accesorios y sensores, como temperatura y entradas digitales, lleguen a Plaspy para su monitoreo.
- Proporciona marcas de tiempo y metadatos de estado que Plaspy utiliza para mostrar y analizar la actividad del vehículo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de dispositivos en un endpoint compartido y determina automáticamente el protocolo correcto para los rastreadores soportados, incluido el FM-Tco4 HCV. Esta detección automática significa que la mayoría de los usuarios no necesitan seleccionar un protocolo dentro de Plaspy cuando el equipo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com así como en la IP de servidor conocida 54.85.159.138.
- La plataforma usa un único puerto para todos los dispositivos, lo que simplifica la configuración en flotas.
- Los equipos pueden configurarse para enviar datos por UDP o TCP según sus capacidades y la configuración local.
- Cuando un FM-Tco4 HCV correctamente configurado reporta a Plaspy, la plataforma asocia automáticamente los datos entrantes con la lógica de procesamiento adecuada.
- Normalmente, los usuarios solo deben asegurarse de que el equipo apunte al endpoint de Plaspy y utilice el transporte y puerto soportados.

## Transporte y contexto de conexión

El contexto de conexión trata sobre cómo el equipo llega al servicio de Plaspy, más que sobre el formato interno de los mensajes. Para una configuración práctica, adapte la red y el transporte para que el FM-Tco4 HCV pueda alcanzar de forma fiable los servidores de Plaspy en el puerto estándar.

- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888, según lo permita el dispositivo y los requisitos del sitio.
- Plaspy acepta conexiones dirigidas a d.plaspy.com así como a la IP pública 54.85.159.138 en el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que las reglas de firewall y los mapeos NAT pueden simplificarse a nivel de flota.
- La selección de transporte (UDP vs TCP) afecta las características de entrega, pero no el hecho de que el equipo reporte al endpoint y puerto de Plaspy.
- Asegúrese de que los firewalls de red y la configuración APN móvil permitan tráfico saliente hacia el servidor de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, cambiar o eliminar campos de telemetría específicos; confirme la versión de firmware en cada FM-Tco4 HCV antes de asumir paridad de funciones.
- Las revisiones de hardware y los módulos accesorios opcionales (por ejemplo sensores de temperatura o interfaces CAN adicionales) pueden afectar qué campos de datos están disponibles.
- El equipo puede usar UDP o TCP; seleccione el modo de transporte compatible con la configuración del dispositivo y la red móvil.
- Las herramientas de configuración del fabricante o comandos vía SMS pueden cambiar intervalos de reporte, contenido de mensajes e interfaces habilitadas; estas opciones se gestionan por la configuración del equipo y no por el servidor de Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando éste reporta al endpoint compartido, pero una mala configuración en el equipo puede impedir la detección correcta.
- Valide la compatibilidad contra la documentación más reciente de Ruptela al planear despliegues grandes o actualizaciones de firmware.

## Por qué es importante comprender el protocolo

Conocer cómo el FM-Tco4 HCV se comunica con Plaspy facilita el despliegue exitoso, la resolución de incidentes y la confiabilidad a largo plazo. Entender los límites de la detección automática y el papel de las configuraciones de transporte reduce el tiempo de configuración y evita sorpresas operativas.

- Agiliza la provisión inicial asegurando que los dispositivos apunten al endpoint y puerto correctos de Plaspy.
- Ayuda a diagnosticar problemas de conexión relacionados con la selección de transporte, reglas de firewall o restricciones del APN.
- Aclara qué tipos de datos de vehículo y sensores puede esperar según firmware y accesorios.
- Informa decisiones sobre intervalos de muestreo, volumen de datos y uso de datos móviles al escalar una flota.
- Facilita la gestión segura de cambios de firmware y configuración al ajustar expectativas sobre cambios de comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-Tco4 HCV con Plaspy ofrece una forma práctica de reunir datos completos del vehículo y sensores en una sola plataforma. Plaspy recibe reportes de GPS, CANbus, tacógrafo y accesorios y los presenta en una vista unificada de la flota, ayudando a los equipos de operaciones a monitorear rutas, comportamiento del conductor, condiciones de activos y el estado de carga refrigerada.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores como el FM-Tco4 HCV visite https://www.plaspy.com. Para detalles actuales del protocolo del dispositivo, versiones de firmware y notas de implementación, por favor verifique las especificaciones en el sitio del fabricante https://ruptela.com/ ya que el comportamiento del equipo y el soporte del protocolo pueden cambiar con el tiempo.

---
slug: /thingsys/ts_vb05/protocol
id: ts_vb05-protocol
sidebar_label: Protocol
title: ThingSys - TS-VB05 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar ThingSys TS-VB05 con Plaspy para rastreo y telemetría OBD
keywords:
  - Protocolo ThingSys TS-VB05
  - Protocolo GPS TS-VB05
  - Tracker GPS ThingSys compatibilidad Plaspy
  - Protocolo de comunicación TS-VB05
  - Protocolo de rastreo TS-VB05
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de GPS OBDII
  - Rastreo de vehículos TS-VB05
  - Protocolo para gestión de flotas
  - Posicionamiento híbrido GPS AGPS LBS
---

# ThingSys - Protocolo TS-VB05

Esta página documenta el contexto público del protocolo para usar el rastreador OBD II ThingSys TS-VB05 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que integradores y gestores de flota comprendan el papel del protocolo del tracker en despliegues exitosos.

El TS-VB05 es un rastreador OBDII plug and play con conectividad celular 3G y 4G y posicionamiento híbrido GPS AGPS LBS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. El comportamiento exacto de los mensajes y los campos disponibles puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles del firmware con ThingSys cuando sea necesario.

## Resumen del protocolo

El protocolo del TS-VB05 define cómo el tracker informa ubicación, telemetría OBD y alarmas a un servidor remoto, y cómo la plataforma puede enviar solicitudes o comandos de configuración bajo demanda. En términos generales, el protocolo permite que el dispositivo se identifique, transmita ubicaciones y telemetría de vehículo útiles, y genere notificaciones de eventos que Plaspy procesa para paneles y alertas.

- Permite que el tracker reporte posiciones GPS/AGPS/LBS y marcas de tiempo a Plaspy para monitoreo en tiempo real e historial de rutas.
- Transporta telemetría OBDII como consumo de combustible y datos de conducta de manejo para que Plaspy genere diagnósticos y análisis comprensibles.
- Transmite eventos de seguridad, incluidos sabotaje y alarmas de batería, para alertas y respuestas inmediatas.
- Proporciona el mecanismo para solicitudes remotas o consultas, de modo que lecturas OBD bajo demanda y diagnósticos puedan iniciarse desde el servidor.
- Asegura que el dispositivo sea detectable por Plaspy cuando esté configurado para enviar datos al endpoint compartido de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los mensajes de los dispositivos en un endpoint de red compartido y detecta automáticamente el protocolo del tracker TS-VB05 cuando el dispositivo está configurado correctamente para reportar a Plaspy. En la mayoría de los casos el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el tracker apunta al endpoint correcto con los ajustes de transporte adecuados.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138 para enrutamiento directo.
- El puerto usado por Plaspy para todos los dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de red.
- Tras apuntar el tracker al endpoint de Plaspy y confirmar la conectividad celular y GNSS, Plaspy detectará el protocolo automáticamente y comenzará a ingerir mensajes.
- Si no llegan mensajes, verifique el APN y los ajustes de transporte en el tracker y consulte las notas de firmware de ThingSys para los comandos de configuración específicos del dispositivo.

## Contexto de transporte y conexión

Los ajustes de transporte y conexión controlan cómo el TS-VB05 alcanza Plaspy. El dispositivo se conecta a través de redes celulares y puede usar UDP o TCP hacia el puerto único de Plaspy. Elegir el transporte adecuado y verificar el endpoint son pasos comunes en la puesta en marcha exitosa del dispositivo.

- El TS-VB05 puede configurarse usando UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración del dispositivo.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138 para la ingestión en Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y reduce la necesidad de ajustes por modelo.
- Asegúrese de que el tracker tenga una conexión de datos celular funcional en 3G o 4G para alcanzar Plaspy y que el APN del dispositivo esté configurado correctamente.
- Confirme los ajustes de GNSS y de posicionamiento híbrido para que las fijaciones de posición y las alternativas por LBS estén disponibles cuando el GPS sea limitado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los intervalos de reporte, los campos de telemetría disponibles y el comportamiento de transporte. Verifique las notas de la versión de firmware del TS-VB05 al diagnosticar diferencias.
- Revisiones de hardware o variantes regionales del módulo pueden afectar las bandas de red soportadas y, por ende, la alcanzabilidad del dispositivo.
- La selección de transporte UDP versus TCP puede afectar las características de entrega sobre redes celulares; elija el transporte que soporte el dispositivo y que sea adecuado para su entorno.
- Los comandos de configuración en el lado del fabricante y los ajustes por defecto pueden variar según el distribuidor o la región; revise la configuración de la unidad específica antes de un despliegue a gran escala.
- Plaspy detecta automáticamente el protocolo, pero el dispositivo debe estar configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para una detección exitosa.
- Valide la compatibilidad con la documentación oficial de ThingSys para obtener las notas más actuales sobre firmware e implementación.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TS-VB05 ayuda a garantizar una instalación confiable, telemetría precisa y un diagnóstico eficaz al integrar dispositivos con Plaspy. Aunque Plaspy simplifica la detección y la ingestión, tener nociones básicas del protocolo reduce el tiempo de configuración y facilita aislar problemas con rapidez.

- Facilita la configuración correcta del dispositivo para que la telemetría y las actualizaciones de posición aparezcan en Plaspy sin selección manual de protocolo.
- Acelera la resolución de problemas al acotar si un fallo es de transporte de red, APN, falta de fijación GNSS o relacionado con el firmware.
- Ayuda a planificar despliegues de flota al clarificar qué campos de telemetría estarán disponibles para análisis e informes en Plaspy.
- Mejora la fiabilidad operativa al informar decisiones sobre elección de transporte, frecuencia de reporte y políticas de actualización de firmware.
- Respaldan flujos de trabajo de seguridad y alertas al garantizar que notificaciones de eventos como sabotaje y alarmas de batería se transmitan y comprendan correctamente.

## Por qué usar Plaspy con este protocolo

Usar el TS-VB05 con Plaspy brinda a los gestores de flota y propietarios de vehículos una vista combinada de ubicación, telemetría OBDII y eventos de seguridad sin una instalación invasiva. La naturaleza plug and play del TS-VB05, junto con la detección automática de protocolo de Plaspy y su endpoint de ingestión unificado, facilita añadir rastreo en tiempo real, monitoreo de combustible y análisis de comportamiento del conductor a un programa telemático existente.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como el TS-VB05, visite https://www.plaspy.com. Para los detalles más recientes del protocolo del dispositivo, comportamiento de firmware y notas de implementación del fabricante, verifique la información en el sitio de ThingSys en https://www.thingsys.com/ ya que las funciones del dispositivo y el firmware pueden evolucionar con el tiempo.

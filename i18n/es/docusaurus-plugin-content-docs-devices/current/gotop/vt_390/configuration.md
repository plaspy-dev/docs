---
slug: /gotop/vt_390/configuration
id: vt_390-configuration
sidebar_label: Configuration
title: GOTOP - VT-390 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador GOTOP VT-390 con Plaspy, incluye ajustes de servidor, flujo de trabajo y notas de configuración
keywords:
  - configuración GOTOP VT-390
  - instalación GOTOP VT-390
  - configuración servidor VT-390
  - integración VT-390 Plaspy
  - rastreador GOTOP Plaspy
  - configuración rastreador GPS VT-390
  - configuración seguimiento vehicular
  - configuración rastreador gestión de flotas
  - ajustes servidor rastreador GPS
  - guía configuración rastreador
---

# GOTOP - VT-390 Configuración

Esta página presenta el contexto público de configuración para usar el rastreador GOTOP VT-390 con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo recomendado para apuntar un VT-390 a la plataforma Plaspy, de manera que el dispositivo pueda reportar ubicación y eventos a su cuenta. La orientación aquí se centra en ajustes públicos a nivel de plataforma y no en detalles propietarios internos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información aquí para preparar el VT-390 para su integración con Plaspy y consulte la documentación de GOTOP para controles específicos del dispositivo e instrucciones de firmware.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar al GOTOP VT-390 listo para enviar datos de posición y eventos a Plaspy de forma fiable y que sea visible en la plataforma. Los pasos enfatizan ingresar la información del servidor Plaspy, seleccionar el transporte si es necesario y validar la transmisión después de configurar el dispositivo.

- Ingresar la información del servidor Plaspy para que el rastreador sepa dónde enviar la telemetría.
- Elegir el modo de transporte (UDP o TCP) si el rastreador exige una selección explícita.
- Guardar y aplicar la configuración mediante el método oficial de GOTOP.
- Reiniciar o cortar la alimentación del rastreador si el firmware lo requiere para activar los nuevos ajustes.
- Verificar que el VT-390 aparezca y reporte correctamente en Plaspy.

## Ajustes de servidor para Plaspy

Use los siguientes ajustes públicos de servidor al configurar el VT-390 para que reporte a Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad VT-390 con alimentación y accesible, con antenas externas y cableado del vehículo instalados según corresponda.
- Conexión de datos celulares activa cuando aplique (el VT-390 soporta seguimiento por SMS o GPRS).
- Acceso al método o software oficial de configuración GOTOP suministrado por el proveedor para este modelo.
- El IMEI o identificador del dispositivo disponible para registro y verificación en sus registros de flota.
- Conocimiento básico de si su instalación o firmware requiere seleccionar UDP o TCP para el transporte al servidor.
- Permiso para reiniciar o cortar la alimentación del rastreador durante la instalación.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para usar Plaspy, el VT-390 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma los muestre y procese. La detección automática de protocolos de Plaspy significa que solo necesita proporcionar el endpoint y el puerto; la plataforma reconocerá el protocolo del rastreador cuando el dispositivo se conecte.

- El VT-390 reporta posiciones y actualizaciones de estado a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Puede configurar el dispositivo para usar transporte UDP o TCP según lo requiera el firmware.
- Los informes de eventos como movimiento, SOS, geovalla o alertas de sensores se envían al endpoint de Plaspy para su procesamiento.
- Plaspy recibe el flujo del dispositivo y asocia el VT-390 a la cuenta o flota correspondiente en función del identificador del dispositivo.
- Después de la configuración, la plataforma ofrece visibilidad del historial de ubicaciones y monitoreo en tiempo real.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del GOTOP VT-390 según la documentación del dispositivo o lo proveído por su vendedor.
2. En los ajustes de servidor o reporte del equipo, ingrese el dominio de servidor d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (este es el puerto estándar de Plaspy utilizado por los dispositivos compatibles).
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según su instalación o preferencia de firmware.
5. Aplique o guarde la configuración en la herramienta GOTOP o mediante el método de configuración del dispositivo.
6. Reinicie el VT-390 si el firmware lo exige para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y la ubicación en vivo desde su cuenta Plaspy o a través de las herramientas de administración de flota.

## Ejemplos de comandos de configuración

El VT-390 puede configurarse usando la herramienta oficial de GOTOP, comandos SMS o software provisto por el vendedor dependiendo del firmware y la región. Dado que los formatos de comandos y las herramientas del fabricante varían según el firmware y las compilaciones locales, no se incluyen aquí cadenas de comandos exactas. Use la interfaz de configuración de GOTOP para ingresar los valores del servidor Plaspy:

- Server: d.plaspy.com o 54.85.159.138
- Port: 8888
- Transport: UDP o TCP (si es necesario)

Si ha recibido documentación de comandos SMS o un script de configuración de GOTOP, aplique esos comandos proporcionados por el fabricante para establecer servidor y puerto y luego verifique el reporte a Plaspy. Siga siempre el orden documentado por GOTOP al aplicar múltiples comandos.

## Notas de configuración

- Variaciones de firmware y revisiones de hardware pueden cambiar la ubicación de los ajustes de servidor en la herramienta GOTOP o la sintaxis de comandos SMS; consulte el manual actual de GOTOP para procedimientos exactos.
- Elija UDP o TCP según la guía de su red y del firmware; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Si configura el VT-390 vía SMS, tenga en cuenta el orden de los comandos y la necesidad de reiniciar el dispositivo tras aplicar los ajustes.
- El VT-390 soporta seguimiento por SMS o GPRS, asegúrese de que el plan de datos de la SIM y el APN estén configurados correctamente según la guía de GOTOP antes de apuntar a Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica despliegues multi-dispositivo y reduce la gestión de puertos por unidad.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-390 con Plaspy ofrece una vía directa hacia la visibilidad de la flota y el monitoreo de eventos. Al apuntar el VT-390 al endpoint y puerto compartidos de Plaspy, las organizaciones pueden consolidar datos de ubicación, alarmas e historial en una sola plataforma de gestión de flotas para una mejor supervisión operativa.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos más recientes del VT-390, notas de firmware e instrucciones del fabricante verifique los detalles específicos del dispositivo en el sitio de GOTOP https://www.gotop.cc/ ya que el comportamiento del firmware y los métodos de configuración del fabricante pueden cambiar con el tiempo.

---
slug: /gotop/l18/configuration
id: l18-configuration
sidebar_label: Configuration
title: GOTOP - L18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj GPS GOTOP L18 con Plaspy, incluye ajustes de servidor y pasos prácticos
keywords:
  - configuración GOTOP L18
  - instalación GOTOP L18
  - GOTOP L18 Plaspy
  - configuración servidor GOTOP L18
  - GPS wearable GOTOP
  - configuración dispositivo Plaspy
  - ajustes servidor Plaspy
  - configuración rastreador GPS wearable
  - configuración seguimiento de personal
  - configuración alertas de emergencia
---

# GOTOP - Configuración del L18

Esta página describe el contexto público de configuración para usar el reloj rastreador GOTOP L18 con Plaspy. Resume los ajustes de servidor prácticos, los pasos recomendados de preparación y el flujo típico que usted seguirá para apuntar un dispositivo L18 a Plaspy, de modo que el dispositivo pueda enviar ubicación, alertas SOS y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta guía para aplicar la configuración de servidor común y, posteriormente, consulte la documentación de GOTOP o las herramientas del proveedor para comandos o interfaces específicas del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es preparar el L18 para que se comunique de forma fiable con Plaspy y así la ubicación, las alarmas SOS y la telemetría de salud aparezcan en su cuenta Plaspy. El proceso se centra en indicarle al dispositivo dónde enviar los datos y en validar que el dispositivo se registre correctamente con Plaspy.

- Configure el L18 para que reporte a Plaspy ingresando el endpoint del servidor Plaspy y el puerto compartido.
- Seleccione el transporte de red (UDP o TCP) en el dispositivo si la herramienta de configuración lo requiere.
- Aplique y guarde los ajustes; reinicie el reloj si la herramienta o el firmware lo solicitan.
- Valide la conectividad confirmando que el L18 aparezca como dispositivo activo en Plaspy y que se reciba telemetría de prueba o un evento SOS.
- Actualice el firmware cuando sea necesario y confirme que los parámetros específicos del fabricante coincidan con las expectativas de Plaspy.

## Ajustes de servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el GOTOP L18:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar los protocolos compatibles sin mapeo manual por dispositivo

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y exige que el dispositivo apunte a d.plaspy.com o a la IP del servidor en el puerto 8888.

## Requisitos típicos antes de la configuración

- Un dispositivo L18 cargado con el reloj encendido y accesible para la configuración.
- Una suscripción de datos móviles activa en el dispositivo mediante nano SIM o eSIM provisionada si se requiere reporte celular.
- Acceso al método oficial de configuración GOTOP o a la herramienta del proveedor para el L18 (aplicación, comandos SMS, portal web o software de configuración).
- Una cuenta en Plaspy y la capacidad de ver la telemetría entrante del dispositivo en su panel de Plaspy.
- Conocimientos básicos para seleccionar UDP o TCP si la configuración del dispositivo solicita elegir un transporte.
- Firmware actualizado en el L18 si el fabricante recomienda una actualización OTA antes del aprovisionamiento.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el L18 envía sus posiciones, alertas SOS y la telemetría de sensores disponible al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los presenta en mapas, alertas e informes históricos para monitoreo y respuesta a incidentes.

- El L18 reporta ubicaciones periódicas y soluciones GNSS a d.plaspy.com usando el puerto 8888.
- Las alertas de emergencia SOS se transmiten al mismo servidor Plaspy para que las alertas aparezcan en sus flujos de incidentes de Plaspy.
- Telemetría de salud como frecuencia cardíaca, presión arterial y SpO2 se envía como mensajes periódicos o por evento a Plaspy para su monitoreo.
- El dispositivo puede usar UDP o TCP para enviar datos a Plaspy según la elección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que no se requiere seleccionar el protocolo por dispositivo en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración GOTOP para el L18 (app del fabricante, conjunto de comandos SMS o herramienta de aprovisionamiento del proveedor).
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o, de forma opcional, utilice la IP del servidor 54.85.159.138 si su herramienta lo requiere.
3. Establezca el puerto del servidor en 8888.
4. Elija el transporte UDP o TCP si el dispositivo exige seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
6. Reinicie o haga un ciclo de energía del L18 si el proceso de configuración o el firmware requieren un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la conexión del dispositivo y la telemetría en su panel de Plaspy.

## Ejemplos de comandos de configuración

Los comandos y pasos exactos para configurar el L18 dependen del firmware de GOTOP y del método de aprovisionamiento del proveedor. Dado que las herramientas del fabricante varían, consulte la documentación de GOTOP o la interfaz de configuración provista por su proveedor para la sintaxis precisa y el orden de los comandos. Plaspy requiere apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y elegir UDP o TCP cuando corresponda.

Si dispone de comandos de ejemplo proporcionados por GOTOP o por su vendedor, aplíquelos en el orden recomendado por GOTOP y utilice los ajustes de servidor Plaspy indicados arriba.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de menú disponibles o los nombres de comandos SMS; confirme siempre la sintaxis exacta de los comandos según las notas de la versión del firmware.
- La plataforma usa el mismo puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo, por lo que evite puertos no estándar a menos que Plaspy soporte lo indique.
- TCP puede ofrecer una entrega orientada a sesión más confiable, mientras que UDP suele ser más liviano; elija el transporte que mejor se ajuste a sus necesidades operativas y a las capacidades del dispositivo.
- Si usa eSIM o aprovisionamiento SIM, confirme que el plan de datos permite conexiones salientes al dominio o IP del servidor Plaspy.
- En caso de duda, siga la guía oficial de configuración GOTOP y las herramientas de aprovisionamiento del proveedor para el L18.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP L18 con Plaspy permite a las organizaciones consolidar la ubicación de wearables, alertas SOS y telemetría de salud en una única plataforma de monitoreo. Esta combinación facilita la respuesta rápida a incidentes, el seguimiento de personal en tiempo real y la supervisión operativa para equipos de cuidado, personal de campo y operaciones de seguridad.

Para obtener más información sobre Plaspy y las opciones de integración de dispositivos compatibles visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique los detalles específicos de configuración y el comportamiento del firmware más recientes en el sitio de GOTOP https://www.gotop.cc/.

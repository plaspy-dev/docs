---
slug: /thinkrace/traxbean_palm/configuration
id: traxbean_palm-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean Palm Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el ThinkRace Traxbean Palm con los ajustes compartidos de servidor de Plaspy y verificar la conexión
keywords:
  - Configuración ThinkRace Traxbean Palm
  - Instalación Traxbean Palm
  - Integración Traxbean Palm Plaspy
  - Configuración servidor Traxbean Palm
  - Configuración GPS Traxbean Palm
  - Software de rastreo Traxbean Palm
  - Configuración de dispositivo Plaspy
  - Configuración rastreador portátil GPS
  - Configuración SOS Traxbean Palm
  - Configuración telemetría Traxbean Palm
---

# ThinkRace - Configuración del Traxbean Palm

Esta página documenta el contexto público de configuración para usar el ThinkRace Traxbean Palm con Plaspy. Se enfoca en los ajustes de servidor compartidos de Plaspy y en los pasos prácticos necesarios para apuntar el Palm a Plaspy, de modo que la plataforma reciba posiciones, eventos SOS y otra telemetría. Esta guía se basa en los detalles públicos de conexión de Plaspy y la descripción del Traxbean Palm como referencia principal.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas o flujos del proveedor. Utilice esta página para preparar el Palm para Plaspy y para conocer los valores mínimos de servidor que deberá ingresar en el método de configuración ThinkRace que utilice.

## Resumen de la configuración

Configurar el Traxbean Palm para Plaspy consiste principalmente en indicarle al dispositivo a dónde enviar la telemetría y en garantizar que tenga conectividad celular o de red fiable. Una vez que el Palm esté apuntado al endpoint de Plaspy y la conectividad esté validada, el dispositivo enviará ubicaciones, eventos SOS y otra telemetría compatible a Plaspy para monitoreo, alertas y seguimiento histórico.

- Proporcione al Palm una conexión celular funcional y, si es necesario, el APN correcto para que pueda acceder a Internet.
- Ingrese el servidor de Plaspy como el endpoint de reporte del dispositivo y establezca el puerto compartido que usa Plaspy.
- Elija el tipo de transporte que requiera el firmware del dispositivo, UDP o TCP, y guarde los cambios.
- Valide la conectividad confirmando que el dispositivo reporte a Plaspy y que las ubicaciones y eventos SOS aparezcan en la plataforma.
- Mantenga a mano las instrucciones de firmware y del proveedor, ya que los pasos pueden variar según la versión del firmware y las herramientas del vendedor.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para reporte de dispositivos e ingestión de telemetría
- IP del servidor 54.85.159.138 como punto alternativo para solución de problemas o herramientas del proveedor
- Puerto 8888 usado por Plaspy para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los mismos valores de puerto y servidor aplican a múltiples dispositivos

## Requisitos típicos antes de la configuración

- Un Traxbean Palm cargado y con alimentación disponible para la configuración y pruebas iniciales
- Una tarjeta SIM activa y un plan de datos capaz de enviar telemetría del dispositivo por 4G LTE cuando sea necesario
- Conocimiento de los ajustes APN del operador de la SIM si el dispositivo requiere una entrada manual del APN
- Acceso al método oficial de configuración ThinkRace o la herramienta del proveedor que utilizará para establecer servidor y transporte
- El IMEI del dispositivo u otro identificador a mano para registrar o verificar el dispositivo en Plaspy si su flujo de trabajo de cuenta lo requiere
- Cobertura celular o Wi‑Fi adecuada en la ubicación de prueba del dispositivo para validar el reporte

## Cómo se conecta este rastreador a Plaspy

El Traxbean Palm envía datos de ubicación y eventos por su enlace de datos celulares al endpoint y puerto del servidor Plaspy. Plaspy ingiere las posiciones GPS, señales de ubicación asistida, eventos SOS y otra telemetría para que los equipos de operaciones puedan monitorear ubicaciones, recibir alertas de incidentes y acceder al contexto visual capturado por la cámara del dispositivo.

- El Palm se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138
- Todos los dispositivos se conectan usando el puerto 8888, que es el puerto estándar de Plaspy para los rastreadores compatibles
- El dispositivo utiliza transporte UDP o TCP según la configuración que seleccione en el equipo
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante
- Una vez activo el reporte, los eventos SOS y las actualizaciones de ubicación aparecerán en Plaspy para los flujos de trabajo de monitoreo y respuesta

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThinkRace o al software provisto con el Traxbean Palm, por ejemplo la herramienta web del proveedor, la aplicación móvil o el método de comandos SMS utilizado por su distribuidor.
2. Verifique que el dispositivo tenga una SIM activa y que los ajustes APN estén configurados si el firmware requiere ingreso manual del APN.
3. En los ajustes de servidor o reporte, ingrese el servidor de Plaspy como d.plaspy.com o como el endpoint alternativo 54.85.159.138.
4. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
5. Elija UDP o TCP como transporte si el firmware del dispositivo solicita seleccionar un protocolo.
6. Aplique o guarde la configuración dentro de la herramienta ThinkRace y siga cualquier mensaje específico del dispositivo para enviar los ajustes al Palm.
7. Reinicie el dispositivo si las instrucciones del proveedor indican que es necesario para que los nuevos ajustes surtan efecto.
8. Valide que el dispositivo reporte a Plaspy comprobando entradas de GPS, un latido inicial o un evento de prueba SOS en su vista de Plaspy.

## Ejemplos de comandos de configuración

No se proporcionan comandos públicos específicos de dispositivo en esta guía. Los formatos exactos de comando y el método de configuración dependen de la herramienta ThinkRace o de la versión de firmware que utilice. En la práctica, deberá usar la interfaz oficial de configuración ThinkRace o las instrucciones suministradas por el proveedor para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888 con UDP o TCP según sea necesario. Si su proveedor ofrece comandos SMS o una utilidad de configuración local, siga exactamente esos comandos del proveedor para aplicar los valores de servidor y puerto.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la forma en que se ingresan servidor, puerto y transporte; consulte siempre la herramienta ThinkRace o las notas de la versión del firmware para pasos exactos.
- Elija UDP o TCP según la opción del dispositivo; Plaspy aceptará cualquiera de los dos y detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración masiva y el aprovisionamiento por parte del proveedor.
- Asegúrese de que el APN y los ajustes del operador sean correctos para la SIM utilizada por el Palm, de modo que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138.
- Mantenga una copia de las instrucciones de aprovisionamiento del proveedor y de cualquier comando por SMS o basado en herramientas, en caso de que necesite reprovisionar o solucionar problemas de dispositivos en campo.

## Por qué usar Plaspy con esta configuración

Usar el Traxbean Palm con Plaspy ofrece una forma sencilla de incorporar la telemetría de personal en terreno, eventos SOS y contexto visual en un único flujo de trabajo de monitoreo. Apuntar el Palm al servidor y puerto de Plaspy garantiza que las actualizaciones de posición y las señales de incidente se entreguen de forma confiable a la plataforma para alertas, manejo de geocercas y seguimiento histórico.

Para obtener más información sobre Plaspy y cómo integrar la telemetría de dispositivos en sus operaciones, visite https://www.plaspy.com. Para la guía de configuración específica más actual, notas de firmware y herramientas del fabricante, consulte el sitio oficial de ThinkRace en https://www.thinkrace.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.

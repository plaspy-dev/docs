---
slug: /ulbotech/t360/configuration
id: t360-configuration
sidebar_label: Configuration
title: Ulbotech - T360 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ulbotech T360 con los ajustes de servidor Plaspy y pasos para integración backend
keywords:
  - Configuración Ulbotech T360
  - Instalación Ulbotech T360
  - Configuración T360 Plaspy
  - Configuración rastreador GPS T360
  - Ajustes servidor rastreador Ulbotech
  - Integración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración GPS OBD II
  - Rastreo de flotas T360
  - Configuración telemática vehicular
---

# Ulbotech - Configuración del T360

Esta página documenta el contexto público de configuración para usar el rastreador OBD Ulbotech T360 con Plaspy. Resume los valores del servidor Plaspy que debe aplicar en el dispositivo o mediante la herramienta de configuración del fabricante y explica los pasos prácticos para validar que el rastreador esté reportando correctamente a Plaspy. Use esta guía junto con la documentación oficial de Ulbotech al aplicar ajustes en hardware real.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T360 es compatible con Plaspy para una integración de backend directa y soporta cargas periódicas e inmediatas de posición, alarmas, eventos de geovalla y reportes de comportamiento de conducción cuando está configurado para enviar datos al endpoint de Plaspy.

## Resumen de la configuración

El objetivo al configurar un T360 para Plaspy es apuntar el dispositivo al backend de Plaspy, asegurar conectividad celular fiable y confirmar que el dispositivo aparece y reporta correctamente en la plataforma. La configuración normalmente se realiza con la utilidad del fabricante, mediante conexión física o enviando al dispositivo los ajustes de servidor necesarios.

- Apunte el T360 al endpoint del servidor Plaspy para que los paquetes de posición y eventos lleguen a la plataforma.
- Verifique que el dispositivo tenga una SIM funcional y acceso a datos móviles para que las subidas por GPRS se realicen con éxito.
- Seleccione la opción de transporte que requiera el firmware del dispositivo y guarde la configuración.
- Valide la conectividad y los mensajes entrantes en Plaspy para confirmar la visibilidad y la ingestión de telemetría.
- Mantenga el firmware y la configuración APN actualizados para reducir problemas de configuración y asegurar reportes fiables.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los mensajes entrantes
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para conexiones de dispositivo

## Requisitos previos comunes

- Acceso sencillo al puerto OBD II del vehículo para instalar o retirar el T360.
- Una tarjeta SIM estándar funcionando con un plan de datos activo y APN correcto para la región.
- Acceso al método oficial de configuración de Ulbotech, como conexión micro USB, software de configuración o herramientas proporcionadas por el proveedor.
- Alimentación aplicada al dispositivo y cobertura celular adecuada en el lugar de la instalación.
- Credenciales o acceso a una cuenta de Plaspy para el registro del dispositivo y verificación de visibilidad, si su flujo de despliegue lo requiere.
- Confirmación de la versión de firmware del dispositivo y su compatibilidad con las prácticas de integración de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el T360 envía posiciones GPS, eventos del acelerómetro y mensajes de alarma al backend de Plaspy a través de GPRS. El dispositivo debe apuntar al endpoint de Plaspy y usar el puerto y transporte acordados para que la plataforma pueda ingerir y procesar la telemetría automáticamente.

- El T360 se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o a la IP 54.85.159.138.
- Todo el tráfico del dispositivo se envía al puerto 8888 del endpoint de Plaspy.
- El transporte puede ser UDP o TCP, según el firmware y las opciones de configuración del dispositivo.
- Una vez recibidos los paquetes, Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro de dispositivo correcto.
- La telemetría como actualizaciones de posición, eventos de geovalla, alarmas y reportes de comportamiento de conducción quedan disponibles en los paneles y alertas de Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Ulbotech para el T360, como la utilidad del proveedor, la interfaz micro USB o los comandos SMS documentados.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888 como puerto de destino para el reporte.
4. Seleccione el modo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Configure o verifique los ajustes APN para que el T360 pueda establecer conectividad de datos GPRS si es necesario.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie el rastreador para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría reciente en Plaspy después del reinicio del rastreador.

## Ejemplos de comandos de configuración

El contenido de modelConfiguration del T360 no se proporciona aquí, por lo que la sintaxis exacta de los comandos depende del firmware de Ulbotech y del método oficial de configuración. Ulbotech ofrece herramientas de configuración y comandos documentados para establecer servidor, puerto, transporte y valores de APN. Use la utilidad del fabricante o el manual del dispositivo para aplicar los siguientes elementos según corresponda:

- Establecer servidor a d.plaspy.com o 54.85.159.138
- Establecer puerto de destino a 8888
- Seleccionar UDP o TCP como transporte si se requiere
- Configurar el APN y guardar los ajustes
- Reiniciar el dispositivo si el firmware requiere reboot para aplicar cambios

Consulte la documentación de Ulbotech para formatos precisos de comandos o contacte a su proveedor para obtener el conjunto de comandos correcto para su revisión de firmware.

## Notas de configuración

- Las diferencias de firmware entre lotes de producción pueden cambiar la interfaz de configuración o la sintaxis de comandos; confirme siempre la versión de firmware antes de aplicar ajustes.
- El T360 soporta detección automática de APN, pero es buena práctica verificar y establecer explícitamente el APN cuando los dispositivos no logran conectarse.
- Elija UDP para menor sobrecarga cuando sea viable, o TCP cuando prefiera entrega ordenada y gestión de sesión; Plaspy aceptará ambos transportes en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que recibe paquetes, lo que simplifica la incorporación al backend.
- Mantenga el firmware del dispositivo actualizado mediante FOTA cuando esté disponible para beneficiarse de correcciones de protocolo y mejoras de estabilidad.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T360 con Plaspy ofrece un camino directo hacia la visibilidad de la flota y el monitoreo de eventos. El factor de forma OBD II plug and play reduce el tiempo de instalación, mientras que el feed telemático del T360 suministra actualizaciones de posición, eventos de comportamiento de conducción y notificaciones de alarma que Plaspy ingiere para paneles, alertas y flujos de informes. Para operadores de flotas y propietarios de vehículos que necesitan supervisión operativa, la combinación del hardware T360 y el backend de Plaspy entrega telemetría práctica y soporte antirrobo.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time so verify the current setup instructions with Ulbotech at http://www.ulbotech.com/ before wide scale deployment.

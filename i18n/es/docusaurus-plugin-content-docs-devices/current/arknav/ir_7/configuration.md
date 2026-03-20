---
slug: /arknav/ir_7/configuration
id: ir_7-configuration
sidebar_label: Configuration
title: ArkNav - IR-7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ArkNav IR-7 híbrido satélite/GSM y apuntarlo a Plaspy para visibilidad en la plataforma
keywords:
  - Configuración ArkNav IR-7
  - Configuración IR-7 para Plaspy
  - Configuración de rastreador ArkNav
  - Configuración servidor IR-7
  - Configuración rastreador híbrido satélite GSM
  - Guía configuración rastreador GPS
  - Configuración plataforma seguimiento de flotas
  - Configuración software seguimiento vehicular
  - ARKNAV IR7 configuración
  - Configuración rastreador Plaspy
---

# ArkNav - Configuración del IR-7

Esta página reúne la información pública necesaria para usar el rastreador híbrido satelital/GSM ArkNav IR-7 con Plaspy. Aquí encontrará ajustes prácticos y pasos de trabajo para apuntar el equipo al endpoint de Plaspy y lograr que el rastreador sea visible y reporte datos en la plataforma. El contenido se centra en valores de servidor compartidos y en los pasos comunes relevantes para integrar el IR-7 con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas que proporcione el proveedor. Use esta guía junto con la documentación de ArkNav y la interfaz o software de configuración del dispositivo para completar la integración.

## Resumen de la configuración

Esta configuración prepara el IR-7 para enviar su posición y datos de eventos a Plaspy usando el endpoint compartido y el puerto de la plataforma. El objetivo es configurar el rastreador para que Plaspy reciba actualizaciones regulares, identifique automáticamente el protocolo y muestre el dispositivo en la interfaz para su monitoreo.

- Apunte el rastreador al servidor de Plaspy (dominio o IP) para que los datos lleguen a la plataforma.
- Configure el puerto de comunicación usado por Plaspy y confirme la selección del transporte si es necesario.
- Asegúrese de que el equipo disponga del acceso a la red requerido por GSM o por servicio satelital Iridium según el despliegue.
- Guarde y aplique la configuración en el IR-7 y verifique que Plaspy detecte el protocolo y empiece a recibir mensajes.
- Valide que las actualizaciones de ubicación y los eventos del dispositivo aparezcan en Plaspy para confirmar la conectividad de extremo a extremo.

## Ajustes de servidor de Plaspy

Al configurar el IR-7 para su uso con Plaspy, utilice los siguientes ajustes públicos tal como se indican:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy behavior: Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo del rastreador automáticamente una vez establecida la conexión.

## Requisitos habituales antes de comenzar

- Confirme que el IR-7 esté alimentado y accesible (instalado o en banco) con sus antenas correctamente conectadas.
- Asegúrese de que el dispositivo tenga un método de conectividad activo apropiado para el despliegue: una SIM GSM/GPRS válida con servicio o una suscripción activa de satélite Iridium.
- Tenga acceso al método oficial de configuración de ArkNav, como el software del fabricante, la interfaz web o el protocolo de comandos/SMS documentado.
- Obtenga los datos necesarios de APN, la provisión de Iridium y la información de cuenta para el método de conectividad que vaya a usar.
- Prepare una computadora portátil o dispositivo para ejecutar herramientas de configuración o enviar SMS/comandos si el IR-7 admite configuración por SMS.
- Mantenga a mano el firmware del dispositivo y las guías de configuración de ArkNav como referencia.

## Cómo se conecta este rastreador a Plaspy

El IR-7 se configura para enviar datos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Una vez que el equipo esté apuntando a Plaspy, la plataforma detectará el protocolo y comenzará a procesar los mensajes entrantes.

- El rastreador envía paquetes periódicos de posición y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; seleccione el transporte que requiera su despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al parser correspondiente.
- Cuando los mensajes llegan al endpoint de Plaspy, el dispositivo aparece en la plataforma y las actualizaciones de ubicación quedan disponibles para su monitoreo.
- El reporte de eventos del rastreador (alertas, entradas digitales, pérdida de energía) se reenvía a Plaspy para visibilidad operativa cuando está correctamente configurado.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de ArkNav para el IR-7 (herramienta web, app de configuración o interfaz de comandos/SMS documentada).
2. Ingrese el endpoint de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 según las opciones de la interfaz de configuración.
3. Establezca el puerto de comunicación en 8888, como lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte y su despliegue tiene una preferencia.
5. Aplique o guarde la configuración en el IR-7 usando la herramienta del fabricante o la secuencia de comandos.
6. Reinicie o haga un ciclo de energía del equipo si el método de configuración o el firmware requiere reinicio para aplicar los ajustes de red.
7. Verifique que el dispositivo reporte a Plaspy confirmando la llegada de mensajes y la visibilidad del equipo en la plataforma; permita unos minutos para que aparezcan los primeros reportes.

## Ejemplos de comandos de configuración

El IR-7 puede configurarse con las herramientas oficiales de ArkNav o mediante métodos por comandos, que pueden basarse en SMS o en utilitarios de configuración para escritorio/móvil. Los comandos exactos y la sintaxis varían según el firmware y el conjunto de herramientas del proveedor, por lo que debe seguir la documentación de ArkNav para el método preciso de su equipo.

Al usar una interfaz de configuración, introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y configure el puerto en 8888. Seleccione UDP o TCP si el dispositivo lo requiere. Si su despliegue utiliza SMS o una interfaz de comandos en texto plano, consulte la referencia de ArkNav para la sintaxis correcta y conserve los marcadores de posición como APN o credenciales según lo indiquen el fabricante.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre verifique los comandos con el manual actual del ArkNav IR-7.
- Elija UDP o TCP según las condiciones de red y las necesidades de confiabilidad; UDP es ligero mientras que TCP ofrece entrega orientada a conexión cuando esté disponible.
- Para operación híbrida, asegúrese de que el IR-7 tenga la provisión correcta tanto para GSM/GPRS (ajustes de APN) como para el servicio satelital Iridium según el área de cobertura requerida.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador una vez que el equipo envíe datos al endpoint de Plaspy.
- Las capacidades FOTA y COTA en el IR-7 pueden simplificar las actualizaciones y la configuración remota cuando forman parte de su flujo de integración.

## Por qué usar Plaspy con esta configuración

Configurar el ArkNav IR-7 para reportar a Plaspy ofrece a las organizaciones visibilidad continua de activos que operan en zonas remotas o con cobertura limitada. Las capacidades híbridas satelitales y GSM del IR-7, combinadas con la detección automática de protocolos y el modelo de endpoint unificado de Plaspy, permiten escalar despliegues sin necesidad de endpoints de servidor personalizados para cada tipo de dispositivo.

Para obtener más información sobre Plaspy y cómo soporta rastreadores híbridos como el IR-7, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y soporte del fabricante más actualizados, verifique los detalles con ArkNav en https://www.arknavgps.com.tw/ ya que el comportamiento del equipo y los procedimientos de configuración pueden cambiar con el tiempo.

---
slug: /falcom/fox3_3g/configuration
id: fox3_3g-configuration
sidebar_label: Configuration
title: Falcom - FOX3-3G Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Falcom FOX3-3G para usarlo con Plaspy con ajustes de servidor compartido y guía práctica de instalación
keywords:
  - Configuración Falcom FOX3-3G
  - Instalación Falcom FOX3-3G
  - Configuración FOX3-3G Plaspy
  - Instalación rastreador GPS FOX3-3G
  - Ajustes de servidor rastreador Falcom
  - Configuración telemática vehicular
  - Integración con plataforma GPS
  - Configuración rastreador gestión de flotas
  - Configuración GNSS FOX3-3G
  - Guía Falcom FOX3-3G
---

# Falcom - FOX3-3G Configuración

Esta página resume el contexto público de configuración para usar la serie Falcom FOX3-3G con Plaspy. Se centra en los ajustes compartidos de servidor y los pasos prácticos necesarios para apuntar un dispositivo FOX3-3G a Plaspy y habilitar el seguimiento y la telemetría. Use este documento para entender qué requiere Plaspy y cómo preparar el dispositivo antes de registrarlo en la plataforma.

Plaspy emplea un endpoint de servidor común y ajustes compartidos entre los rastreadores compatibles, y detecta automáticamente el protocolo del dispositivo cuando se conecta al endpoint de Plaspy. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Falcom que utilice, así que siga esta guía junto con la documentación de Falcom y los procedimientos de su instalador.

## Resumen de la configuración

El objetivo de la configuración es preparar un dispositivo FOX3-3G para que se comunique de forma fiable con Plaspy y aparezca en la plataforma de gestión de flotas. Esto implica actualizar el destino del servidor en el dispositivo, verificar las opciones de transporte y confirmar que el dispositivo informa correctamente a Plaspy.

- Configure el dispositivo para enviar datos al endpoint y puerto del servidor de Plaspy
- Seleccione el protocolo de transporte apropiado (UDP o TCP) si el equipo lo requiere
- Verifique la conectividad de datos celulares y la recepción GNSS antes de probar
- Aplique y guarde la configuración y reinicie el equipo cuando sea necesario para activar los cambios
- Valide que el rastreador aparezca y reporte en Plaspy tras la configuración

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos al configurar dispositivos FOX3-3G para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los ajustes compartidos que Plaspy usa para todos los dispositivos compatibles y deben ingresarse en la herramienta de configuración de Falcom o en la interfaz de configuración del dispositivo cuando se le solicite.

## Requisitos típicos antes de la configuración

- Asegúrese de que el FOX3-3G tenga una fuente de alimentación estable y esté encendido
- Confirme que el dispositivo tenga conexión de datos móviles activa y una SIM válida si usa datos celulares
- Tenga acceso al método de configuración de Falcom o al software oficial requerido para el FOX3-3G
- Verifique la instalación de la antena GNSS y la recepción de señal para el reporte de ubicación
- Conozca la versión de firmware del equipo y mantenga la documentación del fabricante disponible
- Tenga a mano los ajustes del servidor de Plaspy para ingresarlos durante la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FOX3-3G envía ubicación y telemetría del equipo al endpoint de Plaspy para que los vehículos puedan monitorearse y los eventos registrarse. El rastreador se dirige al servidor y puerto compartidos de Plaspy y utiliza el método de transporte seleccionado para transmitir datos.

- El dispositivo transmite mensajes de posición y estado a d.plaspy.com o 54.85.159.138
- La comunicación se envía al puerto 8888 usando UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo entrante del rastreador y parsea los mensajes
- Los reportes y eventos se vuelven visibles en Plaspy para supervisión operativa
- Una configuración exitosa habilita la telemetría continua y la entrega de alertas a la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Falcom o al software para el FOX3-3G (herramienta USB, interfaz web o herramienta del proveedor).
2. En los ajustes de servidor, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor en 8888 como destino para los datos del rastreador.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la confiabilidad de la red y la preferencia del instalador.
5. Aplique o guarde la configuración en la herramienta de Falcom o en la interfaz del equipo.
6. Reinicie el dispositivo si el flujo de trabajo del equipo lo exige para activar los nuevos ajustes.
7. Valide que el FOX3-3G reporte a Plaspy revisando el estado del equipo en la plataforma Plaspy y confirmando la llegada de mensajes.

## Ejemplos de comandos de configuración

La serie FOX3-3G se configura típicamente mediante herramientas de Falcom o software del proveedor y los comandos exactos pueden variar según el firmware y el método de configuración. Dado que Falcom ofrece múltiples interfaces y opciones, la sintaxis precisa depende de la herramienta que utilice.

Consulte el manual de configuración de Falcom o la herramienta de su instalador para conocer los formatos exactos de los comandos. Si dispone de comandos específicos de línea de comandos o SMS de Falcom provenientes de materiales oficiales, inclúyalos aquí en el orden requerido y use la herramienta de configuración para enviarlos. Los marcadores de posición que puedan aparecer en los comandos del fabricante, como {{apn}}, {{apnu}} y {{apnp}}, representan valores de APN y autenticación para la conexión de datos celulares y deben reemplazarse por los valores de su operador móvil.

## Notas de configuración

- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse.
- Las diferencias de firmware y de herramientas de configuración entre revisiones del dispositivo pueden cambiar los elementos del menú y la sintaxis de los comandos; siempre verifique con la documentación vigente de Falcom.
- Elija TCP o UDP según la confiabilidad de su red y las recomendaciones del instalador; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Si su instalación incluye cajas de expansión Falcom u modelos con audio, confirme el cableado y las características específicas del modelo con los materiales de Falcom.
- Después de guardar los ajustes, comúnmente se requiere un reinicio o un ciclo de energía para aplicar los cambios de red.

## Por qué usar Plaspy con esta configuración

Usar el Falcom FOX3-3G con Plaspy ofrece una forma práctica de centralizar los datos de ubicación y el reporte de eventos para operaciones de flota. Apuntar el FOX3-3G al endpoint compartido de Plaspy permite una ingestión consistente de telemetría en una sola plataforma, simplificando el monitoreo, las alertas y el análisis histórico cuando se gestionan múltiples vehículos o tipos de dispositivos.

Learn more about Plaspy and how it integrates with tracker hardware on the Plaspy website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details refer to Falcom documentation at https://www.falcom.de.

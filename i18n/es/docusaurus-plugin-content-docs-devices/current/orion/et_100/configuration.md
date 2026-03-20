---
slug: /orion/et_100/configuration
id: et_100-configuration
sidebar_label: Configuration
title: Orion - ET-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Orion ET-100 para conectarse a Plaspy con ajustes compartidos y detección automática de protocolo
keywords:
  - Configuración Orion ET-100
  - Configuración ET-100
  - Configuración de servidor ET-100
  - Configuración tracker Plaspy
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración rastreador de activos
  - Tracker Orion Plaspy
  - Configuración plataforma GPS ET-100
---

# Orion - Configuración del ET-100

Esta página describe el contexto público de configuración para usar el rastreador GPS Orion ET-100 con Plaspy. Se concentra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar datos de ubicación y eventos a la plataforma. Use esta guía como referencia práctica para aplicar los ajustes compartidos de Plaspy al ET-100; no sustituye la documentación oficial del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica los requisitos del servidor. Los pasos de configuración en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que confirme el método exacto provisto por Orion o su vendedor antes de realizar cambios.

## Resumen de la configuración

El objetivo al configurar un ET-100 para Plaspy es preparar el rastreador para que envíe sus actualizaciones de ubicación y estado a Plaspy y verificar que sea visible en la plataforma. El proceso se centra en apuntar el equipo al endpoint compartido de Plaspy y confirmar que el dispositivo llegue correctamente a la plataforma.

- Configure el ET-100 para reportar al endpoint del servidor de Plaspy para que los datos fluyan hacia la plataforma.
- Elija el método de transporte que el dispositivo soporte (UDP o TCP) y configúrelo en consecuencia.
- Aplique los valores de host y puerto del servidor usados por Plaspy para que el rastreador sepa dónde enviar los mensajes.
- Guarde y, si el dispositivo lo requiere, reinicie el rastreador para aplicar los nuevos ajustes.
- Valide la conectividad confirmando que el dispositivo aparece y reporta en Plaspy.

## Ajustes públicos del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el ET-100:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP (el ET-100 puede configurarse con cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos

Estos valores son el objetivo central para que el ET-100 entregue los datos de ubicación y eventos a Plaspy.

## Requisitos habituales antes de la configuración

- El ET-100 debe estar alimentado y accesible para su configuración o contar con el instalador presente.
- Se requiere acceso al método oficial de configuración de Orion o al software del fabricante para cambiar los ajustes de servidor y transporte.
- Se recomienda tener una cuenta de Plaspy o acceso a la instancia de Plaspy donde se registrarán los dispositivos para validar la conexión.
- Una conexión de red confiable para el dispositivo, de modo que pueda alcanzar d.plaspy.com o 54.85.159.138.
- Anote la versión de firmware del dispositivo y cualquier instrucción específica del proveedor antes de realizar cambios.
- Conocimiento básico sobre si el equipo requiere seleccionar UDP o TCP durante la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el ET-100 envía sus mensajes de ubicación y eventos a la plataforma usando el endpoint y puerto compartidos de Plaspy. Plaspy procesa los mensajes entrantes y hace que el rastreador sea visible en la interfaz para monitoreo y uso operativo.

- El rastreador se apunta al dominio o a la IP del servidor de Plaspy (d.plaspy.com o 54.85.159.138).
- Los mensajes se envían al puerto 8888 según la configuración del dispositivo.
- El transporte se elige como UDP o TCP según los requerimientos del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador al recibir los datos, por lo que el mismo puerto funciona para todos los modelos compatibles.
- Tras la conexión exitosa, las actualizaciones de ubicación, eventos de geocerca y señales SOS se vuelven visibles en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del Orion ET-100 o al software del fabricante según lo descrito por Orion o su proveedor.
2. Localice la opción de servidor u host y escriba d.plaspy.com o, cuando se requiera un host numérico, utilice 54.85.159.138.
3. Configure el puerto del servidor en 8888, que es el puerto usado por todos los dispositivos en Plaspy.
4. Seleccione UDP o TCP si el dispositivo exige una selección explícita del transporte.
5. Aplique o guarde los cambios de configuración en la interfaz del dispositivo o en la herramienta de configuración.
6. Reinicie el ET-100 si el firmware del dispositivo lo requiere para aplicar los nuevos ajustes.
7. Valide que el rastreador reporte a Plaspy comprobando la presencia del dispositivo y los mensajes recientes en la plataforma.

## Comandos de ejemplo para la configuración

Las herramientas del fabricante y el firmware del ET-100 determinan la sintaxis exacta de los comandos de configuración. Dado que los comandos y procedimientos varían según el firmware y la utilidad del proveedor, consulte la documentación de Orion o la utilidad de configuración del dispositivo para pasos exactos. Cuando un dispositivo requiera entrada de comandos en texto, use el dominio o la IP y el puerto del servidor Plaspy indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888), y seleccione UDP o TCP según corresponda.

Si recibe o encuentra comandos de ejemplo proporcionados por el fabricante para el ET-100, preserve los marcadores de posición exactamente como fueron suministrados (por ejemplo {{apn}} u otros) y siga la guía de Orion al sustituir valores.

## Notas de configuración

- El firmware y las utilidades de configuración difieren según las revisiones de hardware; siempre verifique la versión de firmware del ET-100 antes de aplicar cambios.
- Elija TCP cuando su instalación requiera un transporte orientado a conexión y mayor confiabilidad; elija UDP para menor sobrecarga cuando esté soportado. Plaspy acepta ambos en el mismo puerto.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante, por lo que la consistencia del puerto del servidor es importante.
- Siempre guarde o aplique los ajustes en la herramienta del fabricante y, si es necesario, realice un reinicio del dispositivo para asegurar que los valores se apliquen.
- Consulte la documentación de Orion para comandos específicos del dispositivo o pasos en GUI cuando estén disponibles.

## Por qué usar Plaspy con esta configuración

Usar el Orion ET-100 con Plaspy ofrece una forma sencilla de integrar los datos de ubicación y eventos del ET-100 en una plataforma única de monitoreo. Apuntar el rastreador al endpoint compartido de Plaspy simplifica el onboarding y permite a las organizaciones centralizar la visibilidad para la gestión de activos, supervisión de flotas o monitoreo de seguridad personal.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most up-to-date device-specific configuration methods, firmware behavior, and manufacturer details, verify information on the official Orion website at http://www.oriontech.com.tw/ as vendor instructions and firmware can change over time.

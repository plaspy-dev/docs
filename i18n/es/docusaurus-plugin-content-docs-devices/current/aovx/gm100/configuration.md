---
slug: /aovx/gm100/configuration
id: gm100-configuration
sidebar_label: Configuration
title: AOVX - GM100 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AOVX GM100 en Plaspy con ajustes de servidor público, pasos de instalación y guía práctica
keywords:
  - configuración AOVX GM100
  - instalación AOVX GM100 para Plaspy
  - configuración de servidor AOVX GM100
  - configuración de plataforma GPS AOVX GM100
  - configuración de software de rastreo AOVX GM100
  - compatibilidad GM100 con Plaspy
  - instalación de rastreador GPS GM100
  - configuración de rastreador AOVX
  - instalación de rastreador GPS Plaspy
  - configuración de rastreador para envíos
---

# AOVX - GM100 Configuration

Esta página cubre el contexto de configuración pública para usar el AOVX GM100 con Plaspy. El GM100 es un rastreador ultradelgado de carga compatible con Plaspy, diseñado para el monitoreo discreto de envíos y activos, y el proceso de configuración pública se centra en preparar el dispositivo para reportar a Plaspy mediante el endpoint compartido del servidor.

Plaspy utiliza el mismo puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Esto simplifica la configuración en la plataforma, aunque el procedimiento exacto del fabricante puede variar según el firmware, la revisión del hardware, el tipo de instalación y la herramienta oficial de configuración de AOVX o el flujo de comandos por SMS.

## Panorama de configuración

El GM100 se configura para que pueda enviar información de rastreo y estado a Plaspy usando los ajustes públicos de servidor que se indican a continuación. En términos prácticos, el objetivo es apuntar el rastreador al servidor de Plaspy, confirmar el intervalo de actualización y verificar que el dispositivo pueda reportar datos de forma consistente.

- Prepare el dispositivo para que pueda comunicarse con el endpoint del servidor de Plaspy.
- Configure el rastreador para usar el puerto compartido de Plaspy utilizado por los dispositivos compatibles.
- Use el método de configuración del fabricante para aplicar los ajustes públicos de conexión.
- Confirme que el rastreador esté enviando actualizaciones de ubicación y estado después de la configuración.
- Revise la respuesta del dispositivo con el comando de verificación disponible donde sea compatible.
- Consulte la documentación del fabricante si el firmware presenta nombres de menú o manejo de comandos diferentes.

## Ajustes del servidor en Plaspy

- El dominio del servidor usado por Plaspy es d.plaspy.com
- La IP del servidor usada por Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para configuración y comunicación

## Requisitos comunes antes de configurar

- Asegúrese de que el GM100 tenga energía y esté listo para configurarse.
- Tenga acceso al método o herramienta oficial de configuración de AOVX para el dispositivo.
- Confirme que puede ingresar los valores públicos del servidor de Plaspy durante la configuración.
- Verifique que el firmware del dispositivo admita el flujo de configuración mostrado para este modelo.
- Mantenga disponible la documentación del fabricante en caso de que la sintaxis de comandos cambie según la revisión.
- Planee validar el dispositivo después de guardar la configuración para confirmar que reporte en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El GM100 se configura para enviar sus datos de rastreo y del dispositivo a Plaspy mediante el endpoint y puerto compartidos del servidor. Una vez que el dispositivo apunta al servidor de Plaspy, Plaspy puede identificar automáticamente el protocolo y empezar a interpretar la comunicación del rastreador sin necesitar puertos distintos en la plataforma para cada dispositivo.

- El rastreador reporta al dominio del servidor d.plaspy.com o a la IP del servidor 54.85.159.138.
- La comunicación se envía a través del puerto 8888, que es el mismo puerto que Plaspy usa para los dispositivos compatibles.
- El dispositivo puede usar UDP o TCP si la configuración del fabricante requiere seleccionar el transporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a comunicarse.
- Una vez conectado, el rastreador puede aparecer en Plaspy para visibilidad de ubicación y monitoreo operativo.
- La validación de la configuración ayuda a confirmar que el dispositivo quedó vinculado correctamente a la plataforma.

## Flujo típico de configuración

1. Abra el método o software oficial de configuración de AOVX para el GM100.
2. Ingrese la información APN del operador si su implementación la requiere.
3. Configure la dirección del servidor como d.plaspy.com o, si lo prefiere, 54.85.159.138.
4. Establezca el puerto de comunicación en 8888.
5. Seleccione UDP o TCP si el dispositivo o la herramienta le pide elegir un tipo de transporte.
6. Aplique o guarde los cambios de configuración en la interfaz del fabricante.
7. Reinicie el dispositivo si el proceso de configuración lo requiere.
8. Valide que el dispositivo esté reportando a Plaspy y confirme que la conexión esté activa.

## Ejemplos de comandos de configuración

El flujo público de configuración para este modelo usa comandos por mensaje de texto. El método exacto puede variar según la herramienta del fabricante o el firmware, pero los comandos siguientes muestran la secuencia pública disponible para la configuración.

- Configurar el APN del operador

  `APN,{{apn}}#`

  Si su operador requiere usuario y contraseña, inclúyalos con los valores APN proporcionados por el proveedor.

  `APN,{{apn}},{{apnu}},{{apnp}}#`

- Definir el servidor GPRS para Plaspy

  `SERVER,1,d.plaspy.com,8888,0#`

- Definir el intervalo de actualización

  `TIMER,60,60#`

- Cambiar el dispositivo a modo GPRS

  `GPRSON,1#`

- Consultar la configuración actual

  `PARAM#`

- Consultar el estado del rastreador

  `STATUS#`

## Notas de configuración

- El flujo público de comandos mostrado aquí se basa en SMS, por lo que el método exacto de envío puede depender del firmware del dispositivo y del flujo de trabajo del fabricante.
- Los valores de APN son datos proporcionados por el operador y deben reemplazarse por la configuración correcta de red para su SIM o plan de servicio.
- La selección entre UDP o TCP puede ser importante a nivel del dispositivo, pero Plaspy seguirá usando el mismo puerto compartido y detectará automáticamente el protocolo del rastreador.
- Las revisiones de firmware pueden presentar un manejo de comandos ligeramente diferente, por lo que la documentación del fabricante debe seguir siendo la referencia para el comportamiento específico del dispositivo.
- Si el rastreador ya está desplegado, valide la configuración después de guardar los cambios para asegurarse de que el dispositivo comience a reportar en Plaspy como se espera.

## Por qué usar Plaspy con esta configuración

Usar el AOVX GM100 con Plaspy le ofrece una forma práctica de centralizar la visibilidad de envíos y mercancías en una sola plataforma de rastreo. La configuración de servidor compartido mantiene la implementación sencilla, mientras que la detección automática del protocolo ayuda a simplificar la integración de la plataforma entre dispositivos compatibles.

Para los equipos de logística, el resultado es un flujo operativo más limpio para monitorear actualizaciones de ubicación, revisar el estado del rastreador y confirmar que los dispositivos se estén comunicando correctamente. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración específicos del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la documentación vigente en https://www.aovx.com/.

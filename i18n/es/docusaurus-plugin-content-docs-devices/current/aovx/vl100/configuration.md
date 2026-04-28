---
slug: /aovx/vl100/configuration
id: vl100-configuration
sidebar_label: Configuration
title: AOVX - VL100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AOVX VL100 para Plaspy con ajustes de servidor y pasos prácticos de integración
keywords:
  - configuración AOVX VL100
  - configuración AOVX VL100 para Plaspy
  - configuración de servidor AOVX VL100
  - configuración de rastreador GPS AOVX VL100
  - configuración de software de rastreo AOVX VL100
  - configuración de plataforma GPS AOVX VL100
  - rastreador GPS compatible con Plaspy
  - configuración de rastreador vehicular
  - configuración de servidor para rastreador GPS
  - configuración de rastreador GT06
---

# AOVX - VL100 Configuration

Esta página explica el contexto de configuración pública para usar el AOVX VL100 con Plaspy. El VL100 se presenta como un rastreador GPS compacto y económico, diseñado para monitoreo vehicular, y puede prepararse para Plaspy apuntándolo a los ajustes compartidos del servidor de Plaspy y aplicando los comandos públicos de configuración del rastreador cuando el fabricante lo permita.

Plaspy utiliza el mismo puerto de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la implementación en flotas mixtas. Al mismo tiempo, el proceso exacto de configuración del lado del fabricante puede variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para enviar comandos o guardar ajustes.

## Panorama de la configuración

El objetivo principal del proceso de configuración del VL100 es hacer que el rastreador reporte de forma confiable a Plaspy usando el punto de acceso público del servidor y el método de comunicación compatible del equipo. En términos prácticos, esto significa ingresar el servidor de Plaspy, confirmar el modo de transporte cuando sea necesario y validar que el dispositivo esté enviando datos correctamente después de guardar la configuración.

- Dirija el dispositivo al punto de acceso del servidor de Plaspy usado para los rastreadores compatibles.
- Use el puerto compartido que Plaspy aplica a todos los dispositivos compatibles.
- Elija UDP o TCP si el rastreador o la herramienta de instalación requiere seleccionar un transporte.
- Aplique los comandos públicos de APN y servidor del fabricante cuando la configuración sea por SMS.
- Confirme que el dispositivo reporte datos después de guardar los ajustes.
- Use la detección automática de protocolo de Plaspy para simplificar la activación y la incorporación.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- Dirección IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte compatible: UDP o TCP
- Manejo de protocolo en Plaspy: detección automática de protocolo
- Comportamiento compartido de la plataforma: se usa el mismo puerto para todos los dispositivos compatibles en Plaspy

## Requisitos habituales antes de empezar

- Asegúrese de que el rastreador esté instalado y alimentado según las indicaciones del fabricante.
- Confirme que tiene acceso al método o software oficial de configuración de AOVX.
- Verifique que el dispositivo esté listo para aceptar comandos de configuración antes de enviar los ajustes del servidor.
- Revise la documentación actual del fabricante para conocer el comportamiento de configuración específico del modelo.
- Prepare los datos públicos del servidor de Plaspy antes de iniciar la configuración.
- Si va a usar configuración por SMS, asegúrese de que el emisor de comandos pueda comunicarse con el dispositivo de forma confiable.
- Planee validar el resultado después de guardar la configuración para confirmar que el rastreador está reportando.

## Cómo se conecta este rastreador con Plaspy

El AOVX VL100 se conecta con Plaspy enviando datos del rastreador al punto de acceso compartido del servidor de Plaspy en el puerto 8888. Una vez configurado, el dispositivo puede reportar en Plaspy para ofrecer visibilidad en tiempo real, gestión de eventos y monitoreo operativo, mientras Plaspy identifica automáticamente el protocolo usado por el rastreador.

- El rastreador se dirige a d.plaspy.com o a la IP correspondiente del servidor 54.85.159.138.
- La comunicación se configura para usar el puerto 8888, que es el mismo puerto utilizado en los dispositivos compatibles de Plaspy.
- El dispositivo puede usar UDP o TCP, según el flujo de configuración del fabricante y el comportamiento del firmware.
- Después de la configuración, el rastreador puede empezar a enviar datos a Plaspy para visualización en mapa y monitoreo.
- Plaspy detecta automáticamente el protocolo, lo que reduce la necesidad de elegirlo manualmente en la plataforma.
- Cualquier retraso en el reporte o falta de datos debe revisarse primero en la configuración del dispositivo y luego validarse en Plaspy.

## Flujo típico de configuración

1. Abra el método o software oficial de configuración de AOVX diseñado para el VL100.
2. Configure el dispositivo para usar el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto en 8888 para que el rastreador envíe datos al punto de acceso compartido de Plaspy.
4. Elija UDP o TCP si el rastreador o la herramienta le exige seleccionar un modo de transporte.
5. Aplique la configuración y guarde los ajustes en la herramienta del fabricante o mediante el método de comandos compatible.
6. Si el dispositivo lo requiere, reinicie el rastreador para que los nuevos ajustes del servidor entren en vigor.
7. Valide que el VL100 esté reportando a Plaspy y confirme que el rastreador aparezca con los datos esperados.
8. Si es necesario, envíe los comandos públicos de verificación para revisar la configuración y el estado actuales del dispositivo.

## Ejemplos de comandos de configuración

El flujo público de configuración del VL100 incluye comandos SMS para APN, servidor, intervalo y modo GPRS. Los campos de ejemplo en el comando de APN deben reemplazarse con los valores proporcionados por el operador móvil.

- Configurar el APN del operador

```text
APN,{{apn}}#
```

Si el APN requiere usuario y contraseña, el formato del comando del dispositivo puede incluir los campos adicionales.

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Establecer el servidor GPRS en Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Definir el intervalo de actualización

```text
TIMER,60,60#
```

- Cambiar el rastreador a modo GPRS

```text
GPRSON,1#
```

- Revisar la configuración actual

```text
PARAM#
```

- Revisar el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- El flujo público de comandos disponible para el VL100 es por SMS, pero el proceso exacto puede variar según el firmware o la herramienta del instalador.
- Plaspy usa detección automática de protocolo, por lo que la plataforma no requiere una configuración separada del protocolo cuando el rastreador reporta correctamente.
- El puerto 8888 es el puerto compartido de Plaspy para dispositivos compatibles, lo que ayuda a mantener una implementación consistente en toda la flota.
- Se puede seleccionar UDP o TCP según el método de configuración o el comportamiento del dispositivo, así que siga las instrucciones públicas del fabricante si se requiere un modo específico.
- Para conocer el comportamiento específico del modelo, consulte siempre la documentación actual de AOVX antes de una implementación final.

## Por qué usar Plaspy con esta configuración

Usar el AOVX VL100 con Plaspy ofrece a las organizaciones una forma práctica de incorporar un rastreador vehicular compacto a un flujo centralizado de monitoreo. Con el rastreador apuntando a los ajustes compartidos del servidor de Plaspy, los equipos pueden concentrarse en la visibilidad, los reportes y el seguimiento diario de la flota, en lugar de gestionar detalles de integración personalizados del servidor.

El modelo de puerto compartido de Plaspy y la detección automática de protocolo ayudan a simplificar la incorporación de rastreadores compatibles, mientras que el flujo de comandos públicos del VL100 ofrece una ruta clara para la configuración inicial y la verificación. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre configuración específica del dispositivo, comportamiento del firmware y guía del fabricante, verifique la información actual en el sitio oficial de AOVX en https://www.aovx.com/.

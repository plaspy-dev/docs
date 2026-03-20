---
slug: /teltonika/fmm00a/configuration
id: fmm00a-configuration
sidebar_label: Configuration
title: Teltonika - FMM00A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMM00A y reportar a Plaspy con ajustes de servidor, APN de ejemplo y comandos
keywords:
  - Configuración Teltonika FMM00A
  - Configuración FMM00A Plaspy
  - Configuración rastreador Teltonika
  - Ajustes de servidor FMM00A
  - Configuración rastreador Plaspy
  - Configuración Teltonika OBD II
  - Guía configuración rastreador GPS
  - Configuración rastreo vehicular Plaspy
  - Comandos Teltonika FMM00A
  - Configuración rastreo de flotas
---

# Teltonika - FMM00A: Configuración

Esta página ofrece contexto público para la configuración del Teltonika FMM00A con Plaspy. Recopila los datos de servidor de Plaspy que necesitará, explica los requisitos habituales y muestra los comandos comunes para apuntar un rastreador FMM00A al endpoint de Plaspy. Utilícela como referencia práctica para integrar el FMM00A en una implementación de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración Teltonika que emplee. Los ejemplos a continuación muestran cómo configurar APN y parámetros de servidor usando el comando público estilo setparam que aceptan los dispositivos Teltonika en sus interfaces de configuración.

## Resumen de la configuración

Configurar el FMM00A para Plaspy prepara el dispositivo para enviar ubicación y telemetría OBD a la plataforma Plaspy y garantiza que el rastreador sea accesible y visible en su cuenta Plaspy. El objetivo es definir los detalles de APN de la red, apuntar el dispositivo al endpoint de Plaspy y verificar el transporte y el comportamiento de reporte.

- Configure las credenciales APN del dispositivo para que pueda obtener conexión de datos móviles.
- Establezca el endpoint del servidor en d.plaspy.com o la IP del servidor de Plaspy para encaminar correctamente la telemetría.
- Use el puerto 8888, que Plaspy emplea para todos los dispositivos para simplificar la provisión.
- Seleccione transporte UDP o TCP cuando la interfaz de configuración del dispositivo lo requiera.
- Aplique los ajustes y confirme que el dispositivo aparece y reporta correctamente en Plaspy.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo correcto una vez que el dispositivo está enviando datos a d.plaspy.com en el puerto 8888.

## Requisitos típicos antes de la configuración

- Un FMM00A alimentado e instalado en el puerto OBD II del vehículo o en la ubicación de montaje correspondiente.
- Una tarjeta SIM activa con un plan de datos y los valores APN correctos para su operador móvil.
- Acceso a métodos o herramientas de configuración Teltonika, como la gestión remota de Teltonika o utilidades locales descritas por el fabricante.
- Los marcadores de APN o valores que usará, como {{apn}} {{apnu}} y {{apnp}} para completar los campos APN del dispositivo.
- Acceso básico a Plaspy para validar que el dispositivo aparece y que se recibe telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El FMM00A transmite telemetría GNSS y OBD a través de la red celular al endpoint compartido y al puerto de Plaspy. Plaspy recibe las cargas útiles del dispositivo, normaliza la telemetría y ofrece seguimiento en tiempo real, eventos e informes históricos en la plataforma.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o a la dirección IP 54.85.159.138.
- Todos los dispositivos reportan al puerto 8888, lo que unifica la provisión y el enrutamiento en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se requiere una mínima selección de protocolo por dispositivo en la plataforma.
- El rastreador envía paquetes periódicos de posición y telemetría OBD que Plaspy ingiere y muestra para monitoreo e informes.
- El transporte se configura en el dispositivo como UDP o TCP según su preferencia de provisión y las herramientas disponibles.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración Teltonika adecuado para su despliegue, como las herramientas remotas de Teltonika o las interfaces locales de configuración.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte durante la configuración.
5. Proporcione los valores APN del operador usando los marcadores de APN como {{apn}} {{apnu}} y {{apnp}} cuando se le solicite.
6. Aplique o guarde la configuración y reinicie el dispositivo si su herramienta o firmware requiere un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad del dispositivo y la telemetría en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su dispositivo Teltonika, puede usar el siguiente comando de estilo público en las interfaces de configuración compatibles con Teltonika. Reemplace los marcadores por sus valores reales de APN cuando sea necesario.

- establecer APN y parámetros del servidor Plaspy usando el comando estilo setparam de Teltonika

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de los marcadores y campos en el comando anterior
- {{apn}} es el APN de datos móviles de su operador
- {{apnu}} es el nombre de usuario del APN si lo requiere el operador
- {{apnp}} es la contraseña del APN si lo requiere
- d.plaspy.com es el dominio del servidor Plaspy usado para recibir telemetría
- 8888 es el puerto de Plaspy utilizado por todos los dispositivos
- 2006 es el parámetro de selección de transporte en esta cadena de comando; use la documentación del fabricante para confirmar los valores numéricos para UDP o TCP si es necesario

Si su método de provisión requiere usar la IP del servidor en lugar del dominio, reemplace d.plaspy.com por 54.85.159.138 en la misma secuencia de comandos según su herramienta de configuración.

## Notas de configuración

- Las versiones de firmware y las herramientas de provisión de Teltonika pueden cambiar los nombres de parámetros y los códigos numéricos, por lo que siempre confirme el significado de los parámetros numerados con la documentación actual de Teltonika.
- Use UDP o TCP según su red y prácticas de provisión. Plaspy acepta ambos y realiza detección automática de protocolo en las conexiones entrantes.
- Conserve los marcadores de APN durante la provisión masiva y reemplácelos por los valores específicos del operador al provisionar SIM individuales o perfiles de operador.
- Algunas herramientas de Teltonika ofrecen FOTA WEB o gestión remota que pueden usarse para actualizaciones masivas y provisión en lote de ajustes de servidor y APN.
- Si debe usar la IP del servidor en lugar del dominio por cualquier motivo, utilice 54.85.159.138 con el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM00A con Plaspy ofrece a los operadores de flotas una solución OBD II de rápida implementación que transmite GNSS y telemetría vehicular a una única plataforma para seguimiento en vivo, diagnóstico e informes. La configuración compartida del servidor de Plaspy simplifica los despliegues a gran escala porque todos los dispositivos apuntan al mismo puerto y Plaspy detecta automáticamente el protocolo cuando los dispositivos empiezan a enviar datos.

Para obtener más información sobre Plaspy y cómo gestiona la ingestión de dispositivos y la telemetría de flotas visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo más recientes, notas de firmware y definiciones de parámetros, verifique los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que los métodos de configuración y los códigos numéricos de Teltonika pueden cambiar con el tiempo.

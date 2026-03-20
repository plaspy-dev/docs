---
slug: /calmamp/lmu_900/configuration
id: lmu_900-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-900 con ajustes de servidor y comandos SMS para conectar el tracker a Plaspy
keywords:
  - Configuración CalmAmp LMU-900
  - Configuración LMU-900
  - Tracker GPS CalmAmp
  - Integración Plaspy
  - Configuración rastreo vehicular
  - Comandos SMS tracker GPS
  - Ajustes servidor GPRS
  - Configuración APN LMU-900
  - Configuración flota
  - Configuración plataforma de rastreo
---

# CalmAmp - Configuración LMU-900

Esta página documenta el contexto público de configuración para conectar un tracker CalmAmp LMU-900 a la plataforma Plaspy. Reúne el endpoint del servidor Plaspy y los comandos de configuración públicos del LMU-900 para que integradores e instaladores preparen el dispositivo y logren comunicación fiable con Plaspy. Cuando los comandos del fabricante son de dominio público, los incluimos aquí de forma práctica.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-900 admite métodos de configuración por SMS y GPRS; en esta página encontrará los comandos SMS comunes publicados para el modelo junto con orientación para aplicar los valores compartidos de servidor de Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el LMU-900 listo para reportar a Plaspy de forma fiable a través de la red celular. Esto implica configurar el APN del operador y las credenciales cuando sean necesarias, establecer el servidor y el puerto GPRS con los valores de Plaspy, seleccionar el transporte (UDP o TCP) si aplica y validar que la unidad sea visible en la plataforma Plaspy.

- Configurar el APN del operador y, si corresponde, usuario y contraseña del APN para que la unidad pueda conectarse a datos móviles.
- Establecer la dirección del servidor GPRS y el puerto para apuntar el dispositivo a Plaspy.
- Elegir el transporte UDP o TCP en el dispositivo si el firmware lo requiere.
- Reiniciar o aplicar la configuración para que el LMU-900 comience a reportar a Plaspy.
- Verificar los ajustes y la conectividad usando el comando de verificación del dispositivo y comprobando la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker, por lo que se usa un único puerto para los dispositivos compatibles

Estos valores son el endpoint público de Plaspy al que debe reportar el LMU-900.

## Requisitos típicos antes de la configuración

- Un LMU-900 con alimentación, instalado o conectado a la alimentación del vehículo para configurar y probar.
- Una SIM celular activa con datos y capacidad de recibir/enviar SMS si va a usar comandos por SMS.
- Datos del APN del operador y, opcionalmente, usuario y contraseña del APN si el operador los exige.
- Acceso a la interfaz SMS del dispositivo o a la herramienta de configuración del fabricante para enviar comandos al LMU-900.
- El MID o ID del dispositivo disponible desde la respuesta del comando de información del equipo.
- Conocimiento de los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888.

## Cómo se conecta este tracker a Plaspy

El LMU-900 se configura para enviar ubicación y mensajes al endpoint y puerto compartido de Plaspy. Una vez aplicados APN y ajustes de servidor y con una conexión de datos activa, el tracker envía su telemetría a Plaspy donde queda disponible para monitoreo y reportes de eventos.

- Los datos del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El tracker puede usar transporte UDP o TCP en el puerto 8888 según la configuración seleccionada.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que los dispositivos que reportan al puerto compartido se procesan sin necesidad de configurar puertos individuales por dispositivo.
- El SMS se utiliza para comandos de configuración inicial en muchas instalaciones LMU-900 cuando la provisión GPRS aún no está activa.
- Una vez que el reporte funciona, Plaspy recibe los mensajes del dispositivo para visibilidad, alarmas y monitoreo operativo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CalmAmp para el LMU-900, típicamente comandos SMS o la herramienta del fabricante según la instalación y el firmware.
2. Obtenga el MID o ID del dispositivo usando el comando de información para incluir el contexto correcto en los comandos si es requerido.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
4. Configure el puerto del servidor a 8888 en el dispositivo.
5. Elija UDP o TCP en el dispositivo si el firmware solicita seleccionar el transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo necesita un reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy, que aparezca en la plataforma y confirme el flujo de mensajes y los eventos esperados.

## Comandos de configuración de ejemplo

Los siguientes comandos LMU-900 son los comandos SMS públicos usados para establecer APN, servidor y puerto. El dispositivo espera el contexto MID o ID cuando es necesario; obtenga el MID consultando la respuesta de información del dispositivo con el comando de info. Preserve los marcadores de posición al enviar estos comandos y reemplácelos por sus valores de operador.

- Establecer el APN del operador
```text
!RP,2306,0,{{apn}}
```

- Establecer el nombre de usuario del APN (opcional, solo si su operador lo requiere)
```text
!RP,2314,0,{{apnu}}
```

- Establecer la contraseña del APN (opcional, solo si su operador lo requiere)
```text
!RP,2315,0,{{apnp}}
```

- Establecer el servidor GPRS a Plaspy por IP
```text
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor a Plaspy
```text
!RP,769,0,8888
```

- Reiniciar el tracker para aplicar la configuración (etiquetado aquí como paso de reinicio)
```text
!R3,70,0
```

- Revisar los ajustes actuales del dispositivo
```text
!RO
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN suministrada por el proveedor de red móvil.
- {{apnu}} es el usuario del APN cuando el operador lo requiere.
- {{apnp}} es la contraseña del APN cuando el operador lo requiere.

Envíe estos comandos por SMS al número de teléfono del dispositivo. El equipo devuelve mensajes de confirmación; use el comando !RO para revisar los ajustes aplicados. El comando de reinicio es comúnmente necesario para activar los nuevos parámetros GPRS.

## Notas de configuración

- Las versiones de firmware y revisiones de hardware pueden cambiar el soporte de comandos y los IDs de parámetros; verifique los comandos en el dispositivo antes de un despliegue masivo.
- Los campos de usuario y contraseña del APN son opcionales y solo se necesitan cuando el operador móvil los exige.
- Elija TCP o UDP según la preferencia del instalador y las indicaciones del firmware; Plaspy acepta ambos en el puerto compartido 8888 y detectará el protocolo automáticamente.
- La configuración por SMS es un método habitual para la provisión del LMU-900 cuando la configuración remota por GPRS no está disponible o durante la configuración inicial.
- Confirme siempre el MID o ID del dispositivo usando la respuesta de información antes de enviar comandos de configuración que requieran contexto de dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el LMU-900 para reportar a Plaspy ofrece una vía directa para obtener visibilidad vehicular y monitoreo operativo. El enfoque de servidor compartido y la detección automática de protocolos simplifican la integración porque todos los dispositivos compatibles reportan al mismo puerto y Plaspy identifica el protocolo sin cambios de puerto por equipo. Esto reduce la complejidad de configuración y ayuda a los equipos a desplegar trackers a escala.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions consult the manufacturer documentation at http://www.calamp.com/ since manufacturer specifications and setup methods can change over time.

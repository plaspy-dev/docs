---
slug: /calmamp/lmu_4200/configuration
id: lmu_4200-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-4200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-4200 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración CalmAmp LMU 4200
  - Instalación CalmAmp LMU 4200
  - Configuración de servidor CalmAmp LMU 4200
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador gestión de flotas
  - Comandos de configuración CalmAmp
  - Configuración SMS LMU 4200
---

# CalmAmp - Configuración del LMU-4200

Esta página describe el contexto público de configuración para usar el rastreador CalmAmp LMU-4200 con Plaspy. Reúne los ajustes prácticos del servidor y el flujo de configuración habitual que puede aplicar para que el LMU-4200 reporte sus datos a Plaspy. Cuando existen comandos públicos del fabricante se muestran como ejemplos que usted puede usar o adaptar.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-4200 soporta múltiples opciones de conectividad y los comandos de ejemplo que se muestran a continuación reflejan procedimientos comunes basados en SMS que están documentados públicamente.

## Resumen de la configuración

El objetivo de este proceso es preparar el LMU-4200 para que establezca conectividad IP y envíe datos de ubicación y eventos al endpoint de Plaspy. Use los pasos y comandos como referencia práctica al aprovisionar unidades para Plaspy.

- Configure los parámetros de red del equipo para que pueda alcanzar el dominio o la IP del servidor de Plaspy
- Establezca el puerto del servidor usado por Plaspy y seleccione UDP o TCP si el dispositivo lo requiere
- Valide la conectividad y la identidad de la unidad con el comando de verificación del fabricante
- Reinicie o aplique los ajustes para que el dispositivo comience a reportar al endpoint compartido de Plaspy
- Confirme visibilidad en Plaspy y supervise la telemetría inicial para asegurar el comportamiento esperado

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for supported devices

## Requisitos típicos antes de la configuración

- Una unidad LMU-4200 con alimentación y acceso al vehículo o a una bancada de pruebas para la configuración
- Una SIM celular activa y un plan de datos móviles si va a configurar GPRS o reporte por IP celular
- Acceso a los métodos de configuración CalmAmp, como comandos SMS o la herramienta de configuración del fabricante
- Documentación de la revisión de firmware y hardware del LMU-4200 para confirmar los comandos soportados
- Un método para recibir las respuestas del equipo, por ejemplo un número de teléfono capaz de recibir SMS
- Conocimientos básicos de los ajustes APN del operador móvil si la SIM lo requiere

## Cómo se conecta este rastreador a Plaspy

El LMU-4200 se configura para enviar sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma reciba ubicación y eventos para seguimiento y monitoreo. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo al conectarse.

- El rastreador se apunta a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- El rastreador usa el puerto 8888 para enviar datos salientes hacia Plaspy
- En dispositivos que requieren selección de transporte puede elegir UDP o TCP
- Una vez configurada, la unidad establece conectividad IP y comienza a reportar a Plaspy
- Plaspy recibe los datos y asigna el dispositivo a una cuenta usando la identidad del rastreador que devuelve el equipo

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de CalmAmp, ya sea comandos SMS o la herramienta de configuración que provea el instalador o el distribuidor
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o servidor GPRS
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo
4. Elija UDP o TCP si el equipo requiere seleccionar el transporte para el reporte GPRS
5. Guarde o aplique la configuración mediante la herramienta del fabricante o enviando los comandos SMS correspondientes
6. Reinicie o haga el reboot del equipo si es necesario para que los ajustes tomen efecto
7. Valide que la unidad reporte a Plaspy revisando las respuestas del equipo y confirmando la visibilidad en la plataforma Plaspy

## Comandos de configuración de ejemplo

Envíe los siguientes comandos por mensajes SMS. El ID del dispositivo es el MID de 10 dígitos que devuelve el equipo en la respuesta al comando !R0.

- Establecer el APN del operador
```text
!RP,2306,0,[apn]
```

- Establecer el usuario del APN si es requerido
```text
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN si es requerida
```text
!RP,2315,0,[apnp]
```

- Configurar el servidor GPRS a Plaspy usando la IP pública del servidor
```text
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor usado por Plaspy
```text
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes
```text
!R3,70,0
```
Tenga en cuenta que el comando de reinicio suele ser necesario para aplicar cambios realizados por SMS en muchas unidades CalmAmp. Úselo cuando lo indique el instalador o si los cambios no surten efecto.

- Comprobar los ajustes actuales en el equipo
```text
!RO
```

Explicación de los marcadores
- [apn] es el APN de su operador móvil
- [apnu] es el usuario del APN si su operador lo requiere
- [apnp] es la contraseña del APN si es necesaria
Mantenga estos marcadores y reemplácelos por los valores proporcionados por su operador móvil.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme los comandos exactos con CalmAmp para la revisión de su unidad
- El LMU-4200 soporta múltiples opciones de conectividad y la configuración por SMS es un método común para el aprovisionamiento inicial
- Cuando el equipo o la herramienta requieran seleccionar el transporte, elija UDP o TCP según las necesidades de integración y las características de la red
- Use el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto compartido 8888 exactamente como se indica para asegurar que el equipo alcance Plaspy
- Mantenga una SIM de prueba y un equipo de prueba en bancada antes de desplegar unidades en campo para reducir problemas de instalación

## Por qué usar Plaspy con esta configuración

Utilizar Plaspy con el CalmAmp LMU-4200 ofrece una forma sencilla de centralizar los datos de seguimiento de vehículos y activos empresariales. Configurar el LMU-4200 para que reporte al endpoint compartido de Plaspy simplifica la incorporación y aprovecha la detección automática de protocolos de Plaspy para que los equipos empiecen a reportar con una configuración mínima por unidad.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific commands, firmware notes, and detailed technical documentation verify current information on the manufacturer site http://www.calamp.com/ as firmware behavior and setup methods can change over time.

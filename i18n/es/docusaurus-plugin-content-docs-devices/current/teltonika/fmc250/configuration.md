---
slug: /teltonika/fmc250/configuration
id: fmc250-configuration
sidebar_label: Configuration
title: Teltonika - FMC250 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMC250 y reportar a Plaspy con comandos y ajustes de servidor
keywords:
  - Configuración Teltonika FMC250
  - Guía de instalación FMC250
  - Configuración servidor FMC250
  - Configuración rastreador Teltonika
  - Configuración dispositivo Plaspy
  - Guía configuración GPS tracker
  - Configuración telemática vehicular
  - Integración FMC250 Plaspy
  - Configuración telemetría CAN
  - Configuración rastreo flotas
---

# Teltonika - FMC250 Configuration

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMC250 con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar en el equipo y muestra el comando público de ejemplo para la configuración básica de parámetros. Utilice esta guía para preparar el FMC250 para que reporte a Plaspy y para saber qué validar durante la instalación y la puesta en marcha.

Plaspy usa el mismo punto de conexión y puerto en todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los ajustes de servidor son coherentes y sencillos de aplicar. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso combine esta orientación con la documentación de Teltonika y su proceso de instalación.

## Resumen de configuración

El objetivo de esta configuración es preparar el FMC250 para enviar datos de posición y telemetría a Plaspy y verificar la conectividad fiable. Siga este proceso para establecer el punto de conexión del servidor, confirmar el transporte y validar que el dispositivo aparece en Plaspy.

- Apunte el dispositivo al endpoint del servidor Plaspy para que los datos lleguen a los paneles y reportes.
- Configure el puerto compartido usado por Plaspy para que el FMC250 se comunique en el canal esperado.
- Seleccione el método de transporte si el equipo requiere elegir entre UDP y TCP.
- Aplique y guarde los ajustes mediante el método de configuración del fabricante que tenga disponible.
- Valide la conectividad y que el rastreador sea visible en Plaspy tras el reinicio o en el siguiente checkin.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS y uso recomendado como hostname
- IP del servidor 54.85.159.138 como endpoint alternativo cuando DNS no esté disponible
- Puerto 8888 que usa Plaspy para todos los dispositivos compatibles
- Soporte de transporte para UDP o TCP según las opciones de configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usen el reporte estándar de Teltonika serán reconocidos

## Requisitos previos típicos

- Confirme que el FMC250 tiene una tarjeta SIM instalada y activa con plan de datos compatible con LTE Cat 1 y fallback 2G
- Asegúrese de que el dispositivo esté alimentado y conectado según lo requerido para la configuración y las pruebas
- Tenga acceso al método de configuración de Teltonika que vaya a utilizar, como comandos SMS o la herramienta Teltonika Configurator
- Conozca el APN del operador, el nombre de usuario y la contraseña para completar los marcadores de APN cuando sea necesario
- Un entorno de prueba claro para validar la recepción GNSS y el reporte inicial de datos a Plaspy
- Acceso a la documentación de producto y firmware de Teltonika para verificar IDs de parámetros y mapeos de transporte

## Cómo se conecta este rastreador a Plaspy

El FMC250 se configura para reportar ubicación GNSS y telemetría derivada del CAN al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir datos de ubicación, telemetría y eventos para paneles y alertas. Una vez configurado, el dispositivo establecerá una sesión de datos con el endpoint de Plaspy y enviará reportes periódicos.

- El rastreador envía paquetes de posición y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte del dispositivo puede usar UDP o TCP según la configuración del rastreador y las condiciones de la red local
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere un mapeo manual de protocolos en Plaspy
- Los datos observados estarán disponibles en Plaspy para seguimiento en vivo, reportes de eventos y flujos de trabajo de mantenimiento
- La confirmación del reporte exitoso se hace verificando la visibilidad del dispositivo y los paquetes recientes en Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Teltonika que planea usar para esta unidad, por ejemplo comandos SMS o la herramienta Teltonika Configurator.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según requiera su método de configuración.
3. Ajuste el puerto a 8888 para que el rastreador reporte al puerto compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración y siga cualquier aviso del fabricante para confirmar los cambios.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio o si es necesario para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece y envía telemetría reciente en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos de red y servidor en el FMC250 usando el formato público de comandos de Teltonika provisto para la configuración básica de parámetros, use el siguiente comando. Este ejemplo conserva los marcadores de APN.

- Comando público de ejemplo proporcionado por Teltonika para la configuración básica de parámetros

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores
- [apn] es el APN del operador móvil. Reemplácelo por la cadena de APN de su operador.
- [apnu] es el nombre de usuario del APN si su operador lo requiere. Déjelo vacío si no es necesario.
- [apnp] es la contraseña del APN si su operador la requiere. Déjela vacía si no es necesaria.
- 2004 está configurado a d.plaspy.com en este ejemplo. Puede sustituir 54.85.159.138 si necesita usar la IP directamente.
- 2005 establece el puerto del servidor a 8888 que Plaspy usa para todos los dispositivos compatibles.
- 2006 es un parámetro de transporte o modo en el comando de ejemplo. Confirme el mapeo numérico para la selección de transporte en la documentación de Teltonika o en las notas de la versión de su firmware antes de cambiarlo.
- Este comando puede enviarse usando el método SMS de Teltonika o introducirse mediante la herramienta de configuración Teltonika según su flujo de aprovisionamiento de dispositivos.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones del equipo pueden cambiar los IDs de parámetros y los formatos de comando; revise siempre la documentación de producto de Teltonika ante cualquier duda.
- Si usar UDP o TCP depende de la fiabilidad de su red y del comportamiento del operador; pruebe ambos en su entorno si el dispositivo soporta las dos opciones.
- La configuración vía SMS es útil para unidades remotas sin sesión de datos actual, pero confirme el soporte de comandos SMS y el formato correcto para su firmware.
- Usar la IP del servidor 54.85.159.138 puede ayudar cuando el DNS es poco fiable, pero se prefieren los dominios para permitir cambios futuros en la infraestructura.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que ajustes de servidor consistentes simplifican el aprovisionamiento de flotas.

## Por qué usar Plaspy con esta configuración

Usar el FMC250 con Plaspy ofrece a los operadores de flota ubicación consolidada y telemetría CAN en una sola plataforma, habilitando visibilidad operativa, diagnóstico y flujos de trabajo de mantenimiento. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy simplifica despliegues a gran escala porque los mismos ajustes de servidor aplican a múltiples dispositivos y Plaspy detectará los protocolos de rastreadores compatibles de forma automática.

Para obtener más información sobre Plaspy y cómo gestiona la telemetría y la administración de flotas, visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más recientes, referencias de comandos y detalles de firmware, verifique la documentación del fabricante en https://www.teltonika-gps.com/ antes de desplegar a gran escala.

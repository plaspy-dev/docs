---
slug: /zilogic/fleet/configuration
id: fleet-configuration
sidebar_label: Configuration
title: Zilogic - Fleet Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Zilogic Fleet y dirigirlo a Plaspy para validar conectividad
keywords:
  - Configuración Zilogic Fleet
  - Configuración servidor Zilogic Fleet
  - Configuración Zilogic Fleet para Plaspy
  - Rastreador GPS Zilogic Fleet
  - Configuración SMS Zilogic Fleet
  - Configuración Plaspy para rastreador de flota
  - Configuración rastreador GPS Plaspy
  - Configuración GPRS Zilogic Fleet
  - Configuración APN Zilogic Fleet
  - Configuración software seguimiento Zilogic Fleet
---

# Zilogic - Configuración del Fleet

Esta página documenta el contexto público de configuración para usar el tracker Zilogic Fleet con Plaspy. Reúne los comandos prácticos provistos por el fabricante y los ajustes de servidor compartidos por Plaspy que necesitará para apuntar un dispositivo Fleet a Plaspy y validar la conectividad. Utilice esta página como referencia para los pasos comunes necesarios para que el tracker reporte a Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, por lo que el mismo endpoint y puerto de Plaspy se emplean para todos los dispositivos compatibles. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las utilidades del proveedor. Cuando esté disponible, esta página incluye los comandos SMS de configuración del Fleet publicados por el fabricante y explica cómo se mapean a los ajustes de Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar un tracker Zilogic Fleet para comunicarse de forma fiable con la plataforma Plaspy, de modo que la ubicación de los activos, los estados de entradas y el estado del dispositivo sean visibles en Plaspy. El flujo de configuración publicado a continuación muestra los comandos SMS comunes para ajustar la zona horaria, APN, servidor GPRS y modo operativo, y cómo guardar y verificar los ajustes.

- Configure el acceso de red para que el tracker pueda alcanzar Plaspy mediante GPRS o un equivalente de datos móviles.
- Apunte el tracker al endpoint del servidor Plaspy para que la telemetría se envíe a d.plaspy.com o a la dirección IP de Plaspy.
- Seleccione el transporte correcto (UDP o TCP) y configure el puerto compartido de Plaspy para que los mensajes lleguen a la plataforma.
- Guarde la configuración del dispositivo y, si procede, reinicie el tracker para aplicar los cambios.
- Verifique la conectividad usando los comandos de verificación del dispositivo y confirme que la unidad aparece en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar un tracker Zilogic Fleet:

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del tracker una vez que el dispositivo empiece a enviar datos al endpoint del servidor.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM operativa con datos móviles y capacidad SMS configurada para el dispositivo.
- Acceso breve al dispositivo Fleet para enviar y recibir los SMS de configuración o acceso a la herramienta de configuración aprobada por el fabricante.
- Los ajustes APN correctos del operador móvil que proporcionará conectividad de datos.
- Saber si su firmware Fleet acepta nombres de dominio para el servidor o requiere una dirección IP numérica.
- Un dispositivo alimentado e instalado con recepción GPS y energía confiables para la configuración inicial.
- Acceso a una cuenta Plaspy o contacto en su organización para confirmar la activación y visibilidad del dispositivo después de la configuración.

## Cómo se conecta este tracker a Plaspy

El tracker Zilogic Fleet se configura para enviar datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el APN y los parámetros GPRS del dispositivo son correctos y el servidor está apuntando a Plaspy, el tracker transmite telemetría y se vuelve visible y explotable en la plataforma Plaspy.

- El tracker envía actualizaciones periódicas de ubicación y mensajes de estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ajustarse a UDP o TCP según las opciones del dispositivo y los requisitos de la red.
- Las entradas y eventos del dispositivo, como ignición, batería o pánico, pueden reportarse a Plaspy cuando estén configurados en el tracker.
- Plaspy detecta automáticamente el protocolo del tracker adecuado para que los mensajes que lleguen al puerto compartido sean parseados correctamente.
- La plataforma muestra el estado de conectividad y registra las actualizaciones entrantes para la supervisión operativa.

## Flujo común de configuración

1. Acceda al método oficial de configuración Zilogic para el dispositivo Fleet, normalmente mediante comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese el servidor de Plaspy por dominio d.plaspy.com o por la IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Configure el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN necesarios para su operador celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo está reportando a Plaspy usando los comandos de verificación y confirme que la unidad aparece en Plaspy.

## Ejemplos de comandos de configuración

El tracker Fleet puede configurarse enviando mensajes SMS con los siguientes comandos públicos. Envíelos en el orden indicado cuando el orden sea importante:

- Ajustar la zona horaria a UTC
```
SET TZ +00:00
```

- Configurar el APN del operador. Mantenga los marcadores y reemplace con los valores de su operador
```
SET APN {{apn}},{{apnu}},{{apnp}}
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN del operador
- {{apnu}} es el usuario del APN si es requerido
- {{apnp}} es la contraseña del APN si es requerida

- Establecer el servidor GPRS a la dirección IP y puerto de Plaspy
```
SET SERVER 54.85.159.138,8888
```

- Cambiar el dispositivo al modo GPRS
```
SET GPRS 1
```

- Establecer el intervalo de actualización periódico (el ejemplo usa reportes cada 60 segundos)
```
SET PERIOD 60,60
```

- Guardar la configuración en la memoria del dispositivo
```
SAVE
```

Para comprobar y verificar la configuración actual, envíe estos comandos de lectura/diagnóstico:
```
GET APN
```
```
GET GPRS
```
```
GET SERVER
```
```
STATUS
```

Nota: Algunas versiones de firmware del Fleet pueden aceptar un nombre de dominio en el comando SET SERVER en lugar de una IP numérica. Si su firmware soporta dominios puede usar:
```
SET SERVER d.plaspy.com,8888
```
Use la forma con dominio solo si el firmware de su dispositivo soporta explícitamente nombres de servidor.

## Notas de configuración

- El dispositivo Fleet soporta configuración por SMS como se muestra arriba; confirme el formato de los comandos SMS con la documentación del firmware actual.
- Los marcadores del APN deben reemplazarse por los valores de su operador móvil; dejarlos impedirá la conectividad GPRS.
- Elija UDP o TCP según las características de la red y las recomendaciones de su operador o instalador; Plaspy acepta ambos.
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de comandos o las opciones disponibles; verifique los comandos contra la documentación actual de Zilogic.
- Siempre guarde la configuración con el comando SAVE del dispositivo y reinicie si su firmware lo recomienda para asegurar que los ajustes se apliquen.

## Por qué usar Plaspy con esta configuración

Configurar un tracker Zilogic Fleet para enviar datos a Plaspy brinda a los gestores de flotas un endpoint consistente para la telemetría, el estado de los dispositivos y el reporte de eventos. Usar el servidor y puerto compartidos de Plaspy simplifica la incorporación de múltiples dispositivos, ya que Plaspy detecta automáticamente el protocolo del tracker y realiza el parsing para los modelos compatibles.

Para obtener más información sobre Plaspy y cómo soporta trackers GPS y monitoreo de flotas, visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio de Zilogic https://zilogic.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

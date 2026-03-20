---
slug: /dct/solar_asset_tracker/configuration
id: solar_asset_tracker-configuration
sidebar_label: Configuration
title: DCT - Solar Asset Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Notas públicas de configuración del DCT Solar Asset Tracker para Plaspy con ajustes de servidor y ejemplo de script Syrus
keywords:
  - configuración DCT Solar Asset Tracker
  - configuración Solar Asset Tracker Plaspy
  - configuración DCT SPA4G
  - script Syrus Plaspy
  - configuración servidor tracker GPS
  - guía instalación asset tracker
  - ajustes servidor Plaspy
  - configuración GPS gestión de flotas
  - asset tracker 4G Plaspy
  - configuración tracker solar GPS
---

# DCT - Configuración del Solar Asset Tracker

Esta página describe el contexto público de configuración para usar el DCT Solar Asset Tracker con Plaspy. Resume los ajustes prácticos del servidor, los pasos habituales de preparación y un ejemplo de script Syrus SB para la configuración inicial. Utilice esta guía para preparar un Solar Asset Tracker para la telemetría en Plaspy y aplicar el endpoint y puerto compartidos que usa la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere el script y los ejemplos aquí como punto de partida y verifique los detalles específicos del equipo con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el Solar Asset Tracker para enviar ubicación, telemetría y eventos a Plaspy usando el endpoint compartido de la plataforma. El objetivo es establecer el APN del equipo y el destino del servidor remoto, elegir la opción de transporte adecuada si es necesario y confirmar que el tracker reporta correctamente a Plaspy.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que el tracker use la conexión celular.
- Ajuste la dirección y el puerto del servidor AVL remoto para apuntar al endpoint de Plaspy.
- Seleccione la configuración de transporte en el dispositivo si requiere una elección explícita entre TCP o UDP.
- Aplique y guarde la configuración del equipo y reinícielo cuando sea necesario.
- Verifique que el tracker aparezca en Plaspy y que envíe los eventos y la telemetría esperados.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker
- Plaspy usa el mismo puerto para todos los dispositivos soportados para simplificar la configuración

## Requisitos habituales antes de la instalación

- Un Solar Asset Tracker cargado y con energía, con acceso a su interfaz de configuración o a la herramienta del fabricante.
- Tarjeta SIM activa con plan de datos móviles y los datos de APN correctos para la red del dispositivo.
- Acceso a la utilidad de configuración del fabricante o a un servicio como Syrus Desk si se usan scripts de estilo Syrus.
- Firmware que permita la configuración de servidor remoto y que soporte los comandos usados en el script de ejemplo.
- Conocimientos básicos del flujo de trabajo de configuración del dispositivo y acceso a la unidad para aplicar y probar ajustes.

## Cómo se conecta este tracker a Plaspy

Al configurarlo para Plaspy, el Solar Asset Tracker enviará su telemetría al endpoint y puerto compartidos de Plaspy. La plataforma detecta automáticamente el protocolo del dispositivo y acepta conexiones en el mismo puerto que otros trackers soportados.

- El tracker envía ubicación y telemetría a d.plaspy.com o a la IP del servidor 54.85.159.138 por el puerto 8888.
- Plaspy acepta datos por UDP o TCP según la selección de transporte del tracker.
- Notificaciones de eventos como movimiento o alertas de manipulación se reenvían a Plaspy para su procesamiento inmediato.
- Indicadores de salud del dispositivo, como reportes de batería baja, se transmiten a la plataforma para su monitoreo.
- Una vez que el dispositivo reporta, Plaspy ofrece visibilidad en tiempo real, reproducción histórica y enrutamiento de alertas para el activo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software como Syrus Desk o la utilidad web del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como servidor remoto.
3. Establezca el puerto remoto en 8888. Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si su equipo requiere una selección de transporte explícita.
5. Configure el APN del dispositivo y las credenciales APN necesarias según su proveedor celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante exige un reboot.
7. Valide que el equipo reporta a Plaspy confirmando que los mensajes de telemetría y eventos llegan a la plataforma.

## Comandos de configuración de ejemplo

El fabricante proporcionó un ejemplo de script Syrus SB. Puede copiar este texto en un archivo vacío con extensión .tmf y cargarlo usando Syrus Desk o la herramienta del proveedor que acepte scripts Syrus SB. El ejemplo a continuación conserva el orden original de comandos y los campos de marcador.

1. Script Syrus SB completo de ejemplo
```text
# Syrus SB script
# Getting Started example

# Delete any previous configuration
SRT;CONFIG
SXADP**U

# configuring the APN
SRFA{{apn}}
SRFI
SRFL{{apnu}}
SRFP{{apnp}}

# The remote AVL server address and port
SXADP0000d.plaspy.com;8888

# A Destination Address holding the server destination
SDA4;P00

# Time-only Time And Distance signal definition
STD80300

# Event triggered by T&D signal
SED37NV4;TD8+

# Input report event
SED05NV4;IP3+

# end
```

2. Puntos clave de los comandos y breves explicaciones
- Eliminando la configuración previa o iniciando desde cero
```text
SRT;CONFIG
```
Paso opcional inicial o de restablecimiento para borrar configuraciones anteriores antes de aplicar un nuevo perfil.

- Entrada relacionada con adaptador o transporte (ejemplo extraído del script)
```text
SXADP**U
```
Incluido en el script de ejemplo. Consulte la documentación del fabricante para el significado exacto al seleccionar parámetros de transporte o adaptador.

- Configuración del APN con marcadores
```text
SRFA{{apn}}
SRFL{{apnu}}
SRFP{{apnp}}
SRFI
```
Mantenga los marcadores {{apn}} para el APN de su operador, {{apnu}} para el nombre de usuario del APN si se requiere y {{apnp}} para la contraseña del APN si se requiere. La línea SRFI finaliza la configuración del APN en este ejemplo.

- Servidor remoto y puerto apuntando a Plaspy
```text
SXADP0000d.plaspy.com;8888
```
Esto configura el dispositivo para enviar telemetría a d.plaspy.com en el puerto 8888. Plaspy también acepta la IP 54.85.159.138 si prefiere direccionamiento numérico.

- Definición de destino y eventos
```text
SDA4;P00
STD80300
SED37NV4;TD8+
SED05NV4;IP3+
```
Estas líneas son ejemplos de definiciones de destino y desencadenadores de evento del script. Manténgalas en orden si usa el script de ejemplo.

Nota sobre los marcadores
- {{apn}} Reemplace con el APN de la red móvil para su operador.
- {{apnu}} Reemplace con el usuario del APN si su operador lo requiere.
- {{apnp}} Reemplace con la contraseña del APN si su operador lo requiere.

Confirme siempre la sintaxis exacta que requiere su versión de firmware o Syrus Desk antes de aplicar comandos.

## Notas de configuración

- Las diferencias en firmware y herramientas pueden cambiar la sintaxis y el comportamiento de los comandos. Verifique la sintaxis con la documentación actual del fabricante o las notas de la versión de Syrus Desk.
- Algunos dispositivos o firmwares requieren selección explícita de transporte para UDP o TCP. El script de ejemplo incluye entradas relacionadas con el transporte, pero consulte la documentación oficial para conocer las banderas exactas.
- Use el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según necesite. Ambos apuntan a Plaspy y el puerto 8888 se usa de forma consistente entre los dispositivos soportados.
- El script proporcionado es un ejemplo de inicio. Ajuste las definiciones de eventos y los intervalos de reporte para adecuarlos a su despliegue y al uso de datos.
- Si usa SMS o herramientas de software para configurar el dispositivo, confirme las diferencias en el encoding de comandos o en los delimitadores para ese método.

## Por qué usar Plaspy con esta configuración

Usar el DCT Solar Asset Tracker con Plaspy brinda a los equipos visibilidad unificada sobre activos remotos alimentados por energía solar para seguimiento, alertas antirrobo y monitoreo operativo. El tracker reenvía ubicación, banderas de evento y estado del equipo al endpoint de Plaspy, donde esas señales se transforman en notificaciones en tiempo real, reproducción histórica e informes de flota.

Para saber más sobre Plaspy y las configuraciones soportadas visite https://www.plaspy.com. Para los comandos específicos de dispositivo, el comportamiento de firmware y la guía del fabricante más actual, verifique la documentación más reciente en https://www.digitalcomtech.com/ antes de aplicar configuraciones en producción.

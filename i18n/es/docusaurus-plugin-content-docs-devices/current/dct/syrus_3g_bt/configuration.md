---
slug: /dct/syrus_3g_bt/configuration
id: syrus_3g_bt-configuration
sidebar_label: Configuration
title: DCT - Syrus 3G+ BT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el DCT Syrus 3G+ BT con Plaspy, mostrando ajustes de servidor, comandos de ejemplo y pasos prácticos
keywords:
  - Configuración DCT Syrus 3G+ BT
  - Instalación DCT Syrus 3G+ BT
  - Syrus 3G+ BT con Plaspy
  - Configuración del tracker DCT
  - Configuración servidor Syrus 3G+ BT
  - Tracker GPS Syrus 3G+ BT
  - Configuración rastreo flota DCT
  - Integración Syrus 3G+ BT
  - Configuración tracker Plaspy
  - Integración Pegasus Gateway
---

# DCT - Syrus 3G+ BT - Configuración

Esta página documenta el contexto público de configuración para usar el tracker DCT Syrus 3G+ BT con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los pasos típicos del lado del dispositivo que usted empleará para apuntar el equipo a Plaspy y permitir que el tracker reporte ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como Syrus Desk. El ejemplo que sigue incluye un script compatible con Syrus Desk ofrecido como ejemplo público y explica cómo incorporar los valores del servidor de Plaspy.

## Resumen de la configuración

Este proceso prepara el Syrus 3G+ BT para enviar telemetría y datos de ubicación a Plaspy configurando el APN del dispositivo, el endpoint del servidor Plaspy y activando los eventos de reporte relevantes. El objetivo es asegurarse de que Plaspy pueda alcanzar al tracker y que la plataforma interprete automáticamente el protocolo del dispositivo.

- Configure el APN del dispositivo y los parámetros de red relacionados para que tenga datos celulares disponibles.
- Apunte la telemetría del dispositivo al endpoint y puerto del servidor Plaspy.
- Habilite o defina reglas de reporte por tiempo y distancia y los eventos que disparan los envíos.
- Guarde y cargue la configuración en el dispositivo usando la herramienta del fabricante, por ejemplo Syrus Desk.
- Valide la conectividad del equipo y confirme que el dispositivo aparece en Plaspy cuando comience a reportar.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Acceso a la herramienta oficial del fabricante o a un método de configuración como Syrus Desk para cargar scripts o archivos .tmf.
- Un Syrus 3G+ BT instalado y con alimentación, con una SIM celular válida y servicio de datos activo para conectividad 3G.
- Los datos del APN del operador móvil; los marcadores de posición en los ejemplos conservan los campos APN para su reemplazo.
- Conocimiento básico de si su instalación requerirá selección de transporte UDP o TCP.
- Acceso administrativo a Plaspy para verificar que el dispositivo se vuelva visible después de la configuración.

## Cómo se conecta este tracker a Plaspy

El Syrus 3G+ BT se configura para reenviar telemetría y datos de ubicación al endpoint y puerto compartidos de Plaspy. Una vez que el tracker apunte a Plaspy, la plataforma detectará automáticamente el protocolo del equipo y procesará los mensajes entrantes para visibilidad, alertas e informes.

- El tracker establece conexiones salientes a d.plaspy.com o a la IP del servidor y envía telemetría al puerto 8888.
- Plaspy recibe flujos de ubicación y sensores y los correlaciona con el registro del dispositivo según su protocolo.
- Los reportes basados en eventos, como los disparadores por tiempo y distancia, se transmiten a Plaspy cuando están configurados en el dispositivo.
- Plaspy proporciona visibilidad en el mapa, registros históricos de posiciones y notificaciones de eventos a partir de los datos recibidos.

## Flujo común de configuración

1. Prepare el dispositivo físicamente y abra la herramienta de configuración del fabricante, por ejemplo Syrus Desk.
2. Cree o edite un script de configuración o un archivo .tmf e ingrese el endpoint del servidor Plaspy como d.plaspy.com o como 54.85.159.138.
3. Establezca el puerto de destino en 8888 en la configuración del dispositivo.
4. Elija el transporte UDP o TCP si el equipo requiere una selección explícita.
5. Configure el APN del dispositivo y los parámetros de red relacionados usando los marcadores de posición proporcionados si es necesario.
6. Aplique o guarde la configuración y cargue el script .tmf en el dispositivo con Syrus Desk.
7. Reinicie el equipo si las instrucciones del fabricante lo requieren.
8. Valide que el tracker reporte a Plaspy y que el dispositivo aparezca en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El siguiente ejemplo es un script Syrus SB provisto como ejemplo público para comenzar. Puede copiar y pegar este contenido en un archivo de texto nuevo, guardarlo con extensión .tmf y cargarlo con Syrus Desk. Conserve los marcadores de posición [apn], [apnu] y [apnp] y reemplácelos por los valores de APN de su operador.

- Script de ejemplo completo para Syrus Desk

```text
# Syrus SB script
# Getting Started example

# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U

# configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<

# The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<

# A Destination Address holding the server destination
>SDA4;P00<

# Time-only Time And Distance signal definition
>STD80300<

# Event triggered by T&D signal
>SED37NV4;TD8+<

# Input report event
>SED05NV4;IP3+<

# end
```

Notas sobre los marcadores de posición usados en el script:
- [apn] es la cadena APN de la red móvil requerida para la conectividad de datos.
- [apnu] y [apnp] son marcadores de posición opcionales para nombre de usuario y contraseña del APN si su operador requiere autenticación.
- El script incluye una eliminación inicial de la configuración previa (>SRT;CONFIG\<) que puede usar para un montaje limpio durante despliegues iniciales; considere esto opcional durante actualizaciones incrementales.

## Observaciones de configuración

- Las versiones de firmware y de Syrus Desk pueden cambiar la sintaxis de comandos o los elementos soportados en los scripts; verifique con el fabricante si algún comando falla.
- Elija TCP o UDP según los requisitos de su red; Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo del dispositivo.
- Reemplace los marcadores de posición del APN por los valores exactos proporcionados por su operador móvil antes de cargar el script.
- El script de ejemplo es adecuado para cargarse mediante Syrus Desk como se muestra, pero los instaladores pueden preferir despliegues por etapas o flujos de aprovisionamiento remoto.
- Confirme la revisión de firmware del dispositivo y la compatibilidad de accesorios si utiliza hardware opcional como sensores BLE o respaldo satelital.

## Por qué usar Plaspy con esta configuración

Usar el Syrus 3G+ BT con Plaspy ofrece a las organizaciones una puerta de enlace telemática robusta que reenvía telemetría de vehículos y sensores a una plataforma en la nube unificada. Con el endpoint compartido de Plaspy y la detección automática del protocolo, usted puede estandarizar los ajustes de servidor en una flota mixta y agilizar la incorporación de nuevas unidades a la plataforma.

Para obtener más información sobre Plaspy y cómo maneja la visibilidad de la flota, la telemetría y las alertas visite https://www.plaspy.com. Para detalles específicos de configuración de dispositivos, notas de firmware y descargas, consulte la documentación oficial de DCT en https://www.digitalcomtech.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.

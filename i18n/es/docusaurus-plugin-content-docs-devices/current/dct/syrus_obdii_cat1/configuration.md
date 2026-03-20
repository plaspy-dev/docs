---
slug: /dct/syrus_obdii_cat1/configuration
id: syrus_obdii_cat1-configuration
sidebar_label: Configuration
title: DCT - SYRUS OBDII-CAT1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SYRUS OBDII-CAT1 con Plaspy incluyen ejemplos de script y ajustes de servidor
keywords:
  - configuración DCT SYRUS OBDII-CAT1
  - configuración DCT OBDII Plaspy
  - configuración Syrus OBDII Plaspy
  - instalación SYRUS OBDII CAT1
  - configuración seguimiento vehicular
  - configuración telemática OBDII
  - configuración rastreador Plaspy
  - guía instalación dongle OBDII
  - script Syrus Desk
  - configuración GPS flotas
---

# DCT - SYRUS OBDII-CAT1 Configuración

Esta página documenta el contexto público de configuración para usar el DCT SYRUS OBDII-CAT1 con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos, un ejemplo de script Syrus SB apto para Syrus Desk, y los pasos de flujo de trabajo que puede seguir para preparar el dispositivo y que reporte a Plaspy para seguimiento e ingestión de telemetría.

Plaspy usa valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página combina los valores públicos de configuración de Plaspy con un ejemplo de script de Syrus Desk proporcionado por el fabricante para ofrecer una guía práctica.

## Resumen de la configuración

El objetivo de la configuración es preparar el SYRUS OBDII-CAT1 para comunicarse de manera fiable con Plaspy, de modo que la ubicación del vehículo y la telemetría OBD aparezcan en su espacio de trabajo de Plaspy. El ejemplo de script Syrus SB que aparece más abajo muestra un punto de partida común para el aprovisionamiento con Syrus Desk.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que el módem celular integrado pueda intercambiar datos.
- Apunte el dispositivo al servidor Plaspy d.plaspy.com o a la IP equivalente para que los paquetes lleguen a la plataforma.
- Establezca el puerto común de Plaspy para que el dispositivo use el mismo endpoint que otros rastreadores soportados.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración desde Syrus Desk.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de un reinicio exitoso o al iniciar la sesión.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com es el endpoint principal que debe usar al configurar el rastreador.
- La IP del servidor 54.85.159.138 puede usarse en lugar del dominio cuando la herramienta de aprovisionamiento lo requiera.
- El puerto 8888 es el puerto de Plaspy y es usado por todos los dispositivos soportados por la plataforma.
- Se admite transporte por UDP o TCP; seleccione el que prefiera su dispositivo o red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, de modo que la plataforma pueda interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBDII del vehículo para insertar el dispositivo y alimentarlo con la batería del vehículo.
- Una SIM celular activa y un plan de datos compatible con las bandas del radio del dispositivo y la región de operación.
- Acceso a Syrus Desk o a la herramienta oficial del fabricante para cargar un script .tmf o introducir comandos de configuración.
- Los ajustes de servidor de Plaspy indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) para copiarlos en la configuración del dispositivo.
- Una cuenta de Plaspy o las credenciales de plataforma apropiadas para verificar que el dispositivo aparece y reporta después de la configuración.
- Conocimientos básicos de los valores APN de su operador móvil para completar los marcadores {{apn}}, {{apnu}} y {{apnp}} si son necesarios.

## Cómo se conecta este rastreador a Plaspy

Una vez aprovisionado, el SYRUS OBDII-CAT1 utiliza su conexión celular para enviar ubicación GNSS, telemetría OBD y eventos del acelerómetro al endpoint de la red Plaspy. Plaspy ingiere esos mensajes y los mapea a telemetría de dispositivo, registros de eventos y actualizaciones de ubicación para la monitorización de flotas.

- El dispositivo se configura para reportar al endpoint de servidor compartido de Plaspy y al puerto (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Las comunicaciones pueden usar UDP o TCP dependiendo de la selección y de las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del dispositivo para que los mensajes se analicen y se asocien con el registro del dispositivo.
- Eventos como reportes por tiempo y distancia o reportes activados por entradas se reenvían a Plaspy para alertas y registro.
- Una configuración correcta hace que el dispositivo sea visible en Plaspy para ubicación en tiempo real, diagnóstico e informes históricos.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial del fabricante, como Syrus Desk, y prepare un nuevo script .tmf o una sesión para el dispositivo.
2. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor remoto en la configuración del dispositivo.
3. Establezca el puerto 8888 como puerto de destino usado por Plaspy en todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y la red lo admite.
5. Configure el APN y, opcionalmente, el usuario y la contraseña del APN con los datos de su operador (use los marcadores {{apn}}, {{apnu}}, {{apnp}} donde corresponda).
6. Aplique o guarde la configuración y cargue el script .tmf en el dispositivo con Syrus Desk o la herramienta del proveedor.
7. Reinicie el dispositivo si la herramienta del proveedor lo requiere o después de guardar la configuración.
8. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta de Plaspy y que envía la telemetría esperada.

## Ejemplo de comandos de configuración

El fabricante proporciona un ejemplo de script Syrus SB que puede guardarse como archivo .tmf y cargarse con Syrus Desk. El script muestra cómo eliminar configuraciones anteriores, establecer valores de APN y apuntar al servidor y puerto de Plaspy. Conserve los marcadores cuando vaya a introducir los valores de su operador.

- Guarde el siguiente script como un archivo de texto nuevo con extensión .tmf y cárguelo en Syrus Desk:

```
# Syrus SB script
# Getting Started example

# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<

# configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<

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

- Explicación de los elementos clave:
  - >SRT;CONFIG< y >SXADP**U< se usan para eliminar o resetear entradas de configuración anteriores y preparar el dispositivo para nuevos ajustes. Trate la eliminación como un paso inicial opcional si necesita limpiar entradas de servidor previas.
  - >SRFA{{apn}}< establece la cadena APN. Reemplace {{apn}} por el valor APN de su operador.
  - >SRFL{{apnu}}< y >SRFP{{apnp}}< establecen el usuario y la contraseña del APN si son requeridos. Si no se necesitan credenciales, deje los marcadores en blanco o omita según lo indique su operador.
  - >SXADP0000d.plaspy.com;8888< apunta el dispositivo al dominio del servidor Plaspy y al puerto compartido 8888. Puede sustituir la IP del servidor 54.85.159.138 si su herramienta de aprovisionamiento requiere una dirección numérica.
  - Las líneas de eventos y señales como >STD80300<, >SED37NV4;TD8+< y >SED05NV4;IP3+< configuran los desencadenantes y las definiciones de reporte que el dispositivo utiliza para enviar datos a Plaspy.

## Notas de configuración

- Las versiones de Syrus Desk y el firmware del dispositivo pueden afectar la sintaxis exacta de los comandos y los campos de configuración disponibles; use siempre la herramienta recomendada por el fabricante para la revisión de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y las políticas de firewall; Plaspy acepta ambos transportes y detectará el protocolo automáticamente.
- Conserve y reemplace los marcadores {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador móvil al configurar el acceso celular.
- El script de ejemplo incluye una eliminación inicial de entradas de configuración previas; realice este reset solo cuando pretenda borrar ajustes de servidor existentes.
- Use el dominio d.plaspy.com cuando sea posible; sustituya por 54.85.159.138 únicamente si el sistema de aprovisionamiento requiere una dirección numérica.

## Por qué usar Plaspy con esta configuración

Configurar el SYRUS OBDII-CAT1 para que reporte a Plaspy ofrece una vía rápida hacia la visibilidad centralizada de vehículos, la recolección de telemetría y la monitorización de eventos. La forma plug and play del conector OBDII combinada con la ingestión de Plaspy permite a los equipos de flota capturar ubicación, diagnósticos OBD y eventos de conducción en una plataforma unificada para análisis de rutas, planificación de mantenimiento y alertas operativas.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official DCT product pages at https://www.digitalcomtech.com/

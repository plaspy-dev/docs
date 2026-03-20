---
slug: /tk_star/pet_tracker/configuration
id: pet_tracker-configuration
sidebar_label: Configuration
title: TK-Star - Pet Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star Pet Tracker con Plaspy, incluyendo ajustes de servidor y comandos SMS
keywords:
  - Configuración TK-Star Pet Tracker
  - Instalación TK-Star Pet Tracker
  - Configuración servidor rastreador para mascotas
  - Configuración de dispositivo Plaspy
  - Guía instalación rastreador GPS
  - Comandos SMS para rastreador
  - Ajustes servidor GPRS
  - Detección de protocolo de rastreador
  - Configuración APN TK-Star
  - Configuración plataforma GPS
---

# TK-Star - Configuración del Pet Tracker

Esta página describe el contexto público de configuración para usar el TK-Star Pet Tracker con Plaspy. Reúne los ajustes prácticos y los comandos SMS más comunes para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda informar ubicación y estado a la plataforma. El contenido aquí se enfoca en pasos prácticos de configuración pública y no sustituye el manual oficial del fabricante.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando corresponda, esta página incluye comandos SMS de ejemplo proporcionados por el fabricante y explica marcadores de posición como los parámetros APN para que los adapte a la configuración de su operador.

## Resumen de la configuración

Este proceso prepara el TK-Star Pet Tracker para comunicarse con la plataforma Plaspy, de modo que las actualizaciones de ubicación y los eventos aparezcan en su cuenta. La acción clave es dirigir el dispositivo al endpoint de Plaspy y confirmar que puede enviar datos a través de la red.

- Configure el dispositivo para usar Plaspy como su servidor GPRS para que los informes se reenvíen a la plataforma.
- Proporcione los valores correctos de APN, nombre de usuario APN y contraseña APN para la tarjeta SIM del dispositivo.
- Defina un intervalo de subida adecuado para que las actualizaciones de ubicación se envíen con la frecuencia requerida.
- Opcionalmente, restablezca los valores de fábrica si necesita un estado de configuración limpio.
- Valide que el dispositivo informe a Plaspy comprobando la visibilidad del dispositivo y la hora de última conexión en la plataforma.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may be configured to use either UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un TK-Star Pet Tracker con batería cargada y una tarjeta SIM activa instalada según la documentación del dispositivo.
- Conocimiento del APN del operador de la SIM y, si aplica, del nombre de usuario y la contraseña del APN.
- Acceso al método de configuración proporcionado por el fabricante, comúnmente vía SMS o la app del proveedor.
- La contraseña predeterminada del dispositivo si los comandos SMS requieren autenticación (en los ejemplos más abajo se muestra la contraseña por defecto).
- Un teléfono capaz de enviar SMS al número de la SIM del rastreador para la configuración basada en SMS.
- Paciencia para permitir que el dispositivo se registre en la red móvil y establezca la conexión GPRS.

## Cómo se conecta este rastreador a Plaspy

El TK-Star Pet Tracker se configura para enviar su ubicación y estado al endpoint y puerto compartidos de Plaspy a través de la conexión de datos del dispositivo. Una vez que el dispositivo apunte al endpoint de Plaspy y el modo GPRS esté habilitado, Plaspy recibirá las actualizaciones y determinará automáticamente el protocolo correcto.

- El rastreador informa a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte de datos puede ser TCP o UDP según la selección del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere un mapeo manual en el lado de Plaspy.
- El dispositivo envía mensajes periódicos según el intervalo de subida configurado para que las actualizaciones de ubicación aparezcan en Plaspy.
- Las notificaciones de eventos como alertas de geocerca o batería baja se reenviarán a la plataforma una vez que el dispositivo esté conectado.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial del fabricante para el TK-Star Pet Tracker, normalmente la interfaz por comandos SMS o la app del proveedor.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; ambos son compatibles y Plaspy se encargará de la detección del protocolo.
5. Configure el APN, el usuario APN y la contraseña APN del dispositivo para que la SIM pueda establecer la conexión GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si éste lo requiere para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo informe a Plaspy comprobando la visibilidad del dispositivo y los reportes de ubicación recientes en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son el conjunto público de ejemplo proporcionado por el fabricante para este modelo. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Envíe cada comando como un único mensaje SMS al número de la SIM del rastreador. Mantenga y reemplace los marcadores de posición donde se indica.

- Reinicio inicial opcional a los valores de fábrica (solo cuando necesite un inicio limpio):

```
begin123456
```

- Establecer el APN del operador (reemplace {{apn}} con el APN de su operador):

```
apn123456 {{apn}}
```

- Establecer el usuario APN si su operador lo requiere (reemplace {{apnu}} con su usuario APN):

```
apnuser123456 {{apnu}}
```

- Establecer la contraseña APN si su operador la requiere (reemplace {{apnp}} con su contraseña APN):

```
apnpasswd123456 {{apnp}}
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto 8888:

```
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida a 60 segundos (ajuste según sea necesario):

```
upload123456 60
```

- Cambiar el dispositivo a modo GPRS para que use la conexión de datos:

```
gprs123456
```

Notas sobre marcadores de posición y comandos:
- {{apn}} es la cadena APN del operador móvil necesaria para datos GPRS.
- {{apnu}} y {{apnp}} son marcadores opcionales para el usuario y la contraseña APN si su operador los exige.
- La contraseña predeterminada usada en estos ejemplos es 123456. Reemplace la contraseña en cada SMS si la ha cambiado en el dispositivo.

## Observaciones de configuración

- La configuración por SMS está soportada en los comandos públicos anteriores; el formato exacto del SMS puede variar según la versión de firmware, así que confirme la sintaxis con el fabricante si los comandos son rechazados.
- Diferentes revisiones de firmware o variantes de hardware pueden alterar los comandos disponibles o las contraseñas por defecto; verifique la etiqueta del dispositivo y la documentación antes de configurar múltiples unidades.
- El dispositivo puede configurarse para usar TCP o UDP en el puerto 8888; pruebe ambos si tiene problemas de conectividad, ya que algunos operadores de red favorecen un transporte sobre otro.
- Plaspy emplea un puerto compartido para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando este se conecta.
- Los valores APN y la configuración del operador móvil varían según el mercado y la tarjeta SIM; utilice los datos APN correctos para la SIM inserta en el rastreador.

## Por qué usar Plaspy con esta configuración

Usar el TK-Star Pet Tracker con Plaspy ofrece una forma sencilla de centralizar el reporte de ubicaciones, la visibilidad y la monitorización de eventos. Apuntar el rastreador al endpoint de Plaspy permite a organizaciones y propietarios de mascotas consolidar los datos de seguimiento en una única plataforma para visualización en tiempo real, reproducción histórica y supervisión operativa.

Para obtener más información sobre Plaspy y las opciones de configuración compatibles visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de TK-Star https://www.tk-star.com/ ya que las especificaciones y pasos de instalación pueden cambiar con el tiempo.

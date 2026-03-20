---
slug: /concox/ll303_pro/configuration
id: ll303_pro-configuration
sidebar_label: Configuration
title: Concox - LL303 Pro Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox LL303 Pro en Plaspy con SMS y ajustes de servidor para reportes GPRS
keywords:
  - Configuración Concox LL303 Pro
  - Configuración LL303 Pro
  - Rastreador Concox Plaspy
  - Configuración servidor LL303 Pro
  - Comandos SMS LL303 Pro
  - Configuración rastreador de activos
  - Configuración rastreador GPS solar
  - Configuración seguimiento de flotas
  - Configuración GPRS LL303 Pro
  - Compatibilidad rastreador vehicular Plaspy
---

# Concox - LL303 Pro Configuration

Esta página documenta el contexto público de configuración para usar el Concox LL303 Pro con Plaspy. Se centra en los pasos de configuración y en los ajustes de servidor que permiten al LL303 Pro reportar posición GNSS y telemetría a la plataforma Plaspy. Cuando está disponible, esta guía incluye los comandos SMS públicos del dispositivo que los instaladores emplean para preparar el rastreador para el reporte GPRS hacia Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El LL303 Pro soporta configuración por SMS y reporte por GPRS, por lo que esta página incluye los comandos SMS más comunes y el flujo de trabajo que los instaladores usan como orientación pública.

## Resumen de configuración

Esta sección explica el propósito de configurar el LL303 Pro para su uso con Plaspy y los resultados prácticos que debe esperar.

- Preparar el LL303 Pro para comunicarse con Plaspy aplicando los ajustes compartidos de servidor y GPRS.
- Configurar el APN y el acceso a la red para que el dispositivo pueda establecer una conexión de datos.
- Validar la conectividad y el reporte para que el dispositivo sea visible en la plataforma Plaspy.
- Ajustar el intervalo de reporte y el modo GPRS para equilibrar la visibilidad en tiempo real y la vida útil de la batería.
- Usar métodos de configuración del fabricante, como SMS, para aplicar ajustes en entornos sin acceso físico inmediato.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un LL303 Pro instalado y con batería, con visibilidad GNSS básica para pruebas iniciales.
- Una tarjeta SIM válida con datos móviles habilitados y capacidad de enviar/recibir SMS para la configuración basada en SMS.
- Acceso al método de configuración oficial de Concox para su versión de dispositivo, como comandos SMS o software del proveedor.
- Una cuenta o flota registrada en Plaspy para confirmar que el dispositivo aparece y reporta correctamente.
- Tome nota de la versión de firmware y de la revisión de hardware del dispositivo para poder cotejar la documentación del proveedor con los comandos que planea utilizar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LL303 Pro usa su enlace celular para enviar datos de posición y telemetría al endpoint y puerto compartido del servidor Plaspy. Plaspy recibe los reportes del dispositivo y los mapea en la vista de flota o de activos para visibilidad, alertas y reproducción histórica.

- El rastreador se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El dispositivo envía reportes GPRS periódicos o por eventos a Plaspy según los temporizadores y el modo configurado.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se puede usar el mismo puerto para todos los dispositivos compatibles.
- La conexión y el reporte exitosos hacen que el dispositivo sea visible en Plaspy para monitoreo, alertas e informes.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador o las opciones del equipo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Concox para el firmware y la región de su LL303 Pro, normalmente comandos SMS o la herramienta del proveedor indicada en la guía del dispositivo.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Configure el puerto de reporte a 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Configure el APN y cualquier parámetro requerido por el operador para que el dispositivo pueda usar datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Verifique que el LL303 Pro reporte a Plaspy y aparezca en su lista de flota o activos en Plaspy.

## Ejemplos de comandos de configuración

El LL303 Pro soporta configuración por SMS. A continuación están los comandos SMS públicos más comunes en el orden que los instaladores suelen emplear. Conserve los marcadores de posición cuando sea necesario.

1. Restablecimiento de fábrica opcional para la configuración inicial
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
- APN básico solamente
```
APN,{{apn}}#
```
- APN con nombre de usuario y contraseña (marcadores de posición)
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Explicación: conserve los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, usuario y contraseña de su operador según sea necesario.)

4. Configurar el servidor GPRS para usar el dominio de Plaspy en el puerto 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor usando la IP de Plaspy en el puerto 8888
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización cada 60 segundos
- Forma de un solo parámetro
```
TIMER,60#
```
- Forma de doble parámetro (según firmware)
```
TIMER,60,60#
```

6. Habilitar el modo GPRS
```
GPRSON,1#
```

7. Verificar los parámetros GPRS actuales
```
GPRSSET#
```

Nota: El orden anterior es intencional para una configuración inicial típica. Utilice el restablecimiento de fábrica solo cuando sea necesario. El dispositivo puede aceptar la forma de dominio o la forma de IP en el comando SERVER; ambos ejemplos apuntan a Plaspy en el puerto 8888.

## Notas de configuración

- La configuración vía SMS es una vía pública y ampliamente utilizada para el LL303 Pro. Utilice un teléfono o un gateway SMS que pueda enviar mensajes de texto plano a la SIM del dispositivo.
- Plaspy soporta tanto UDP como TCP en el puerto 8888 y detecta automáticamente el protocolo del rastreador, pero la elección entre UDP y TCP por parte del instalador puede afectar la retransmisión y la latencia.
- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Confirme el formato exacto de los comandos SMS con la documentación del firmware del dispositivo cuando sea posible.
- Si prefiere usar dominio de servidor o IP de servidor, ambas opciones aparecen arriba. Usar d.plaspy.com resulta conveniente para cambios dinámicos desde la plataforma, mientras que la variante IP proporciona una dirección directa.
- Siempre verifique la documentación oficial de Concox para cualquier diferencia específica del dispositivo antes de desplegar a gran escala.

## Por qué usar Plaspy con esta configuración

Configurar el LL303 Pro para reportar a Plaspy ofrece visibilidad centralizada para activos fuera de la red y para operaciones de campo a largo plazo. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue al utilizar el mismo puerto y la detección automática de protocolo entre dispositivos compatibles, reduciendo la complejidad por dispositivo y ayudando a que los equipos operativos comiencen a recibir reportes rápidamente.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos, el reporte y la administración de flotas visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante, verifique la información en el sitio oficial de Concox https://www.iconcox.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.

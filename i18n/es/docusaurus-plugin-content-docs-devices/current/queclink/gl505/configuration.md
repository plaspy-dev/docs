---
slug: /queclink/gl505/configuration
id: gl505-configuration
sidebar_label: Configuration
title: QuecLink - GL505 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el QuecLink GL505 en Plaspy, con comandos, parámetros de servidor y flujo de instalación
keywords:
  - configuración QuecLink GL505
  - instalación QuecLink GL505
  - configuración GL505 Plaspy
  - configuración rastreador GPS QuecLink
  - configuración servidor GL505
  - configuración rastreador Plaspy
  - configuración software seguimiento GL505
  - integración QuecLink GL505 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreador ganado
---

# QuecLink - Configuración del GL505

Esta página explica el contexto público de configuración para usar el rastreador QuecLink GL505 con Plaspy. Describe los ajustes del servidor, el flujo de configuración habitual y ejemplos de comandos SMS que se emplean públicamente para apuntar un GL505 hacia Plaspy, de modo que la telemetría y los eventos aparezcan en su cuenta Plaspy. El GL505 es un equipo compatible con Plaspy diseñado para el monitoreo prolongado de ganado y la seguridad de activos en exteriores; algunos pasos del fabricante que se muestran aquí usan comandos SMS como ejemplo de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que se muestran a continuación provienen de contenido público de configuración y usan la contraseña del dispositivo queclink como contraseña por defecto de ejemplo. Confirme siempre los procedimientos actuales del dispositivo con la documentación del fabricante antes de desplegar a gran escala.

## Resumen de la configuración

El objetivo de esta configuración es preparar el GL505 para que reporte de forma fiable la ubicación y los eventos a Plaspy, permitiendo monitoreo en vivo y análisis histórico. Los comandos y ajustes públicos normalmente configuran el APN, el endpoint del servidor, el intervalo de reporte y las entradas de eventos para que Plaspy reciba telemetría oportuna.

- Configure el APN y los ajustes GPRS para que el rastreador tenga conectividad de datos móviles y alcance Plaspy.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y al puerto compartido de reporte para que la telemetría llegue a la plataforma.
- Establezca intervalos de reporte y entradas de evento para gestionar la duración de la batería y los tipos de alertas que se envían a Plaspy.
- Verifique la conectividad y confirme que el dispositivo aparece en el panel de Plaspy para seguimiento en vivo e historial.
- Opcionalmente restaure o ajuste los valores por defecto del dispositivo cuando prepare una unidad para un nuevo despliegue.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente solo necesita proporcionar el endpoint del servidor y el transporte si el dispositivo lo requiere

## Requisitos típicos antes de la configuración

- Un GL505 con batería cargada y alimentado, y el hardware de instalación asegurado al animal o activo.
- Una SIM celular operativa configurada para datos y SMS si va a usar configuración por SMS o reporte GPRS.
- Credenciales APN correctas del operador móvil para configurar el dispositivo en GPRS.
- Acceso al método oficial de configuración de QuecLink o a la herramienta del proveedor, o la capacidad de enviar comandos SMS al dispositivo.
- La contraseña del dispositivo si se requiere autorización para comandos; los comandos de ejemplo públicos usan la contraseña por defecto queclink.
- Acceso básico a Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el GL505 envía mensajes periódicos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que posiciones, eventos de geocerca y alertas de SOS o movimiento sean visibles en la plataforma. Plaspy recibe la telemetría entrante y aplica detección automática de protocolo para que los dispositivos sean visibles sin selección manual de protocolo en la mayoría de los casos.

- El rastreador envía posiciones GNSS y datos de eventos a d.plaspy.com o a la IP del servidor en el puerto compartido.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo y los requisitos de red.
- Plaspy usa detección automática de protocolo para interpretar los mensajes del rastreador y mostrar el dispositivo en la plataforma.
- Las entradas de evento como SOS o alertas de movimiento se reenvían a Plaspy como notificaciones o eventos para el monitoreo operativo.
- Los intervalos de reporte regulares controlan la frecuencia de telemetría para equilibrar la vida de la batería y la visibilidad en tiempo real.

## Flujo de configuración común

1. Acceda al método oficial de configuración de QuecLink, como el conjunto de comandos SMS del proveedor, el software del fabricante o la herramienta de instalador aprobada.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor GPRS del dispositivo.
3. Establezca el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte; el GL505 puede configurarse con cualquiera de los dos.
5. Configure el APN y las credenciales del operador reemplazando los valores de ejemplo por los de su operador, y aplique o guarde la configuración.
6. Reinicie el dispositivo si el fabricante o el método de configuración lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando en el panel de Plaspy la aparición del nuevo equipo y confirmando la llegada de telemetría.

## Comandos de configuración de ejemplo

Los comandos públicos de configuración a continuación se proporcionan como ejemplos de SMS extraídos de contenido público de configuración. Estos comandos usan la contraseña de ejemplo queclink mostrada en el contenido público. Reemplace los marcadores de posición como [apn], [apnu] y [apnp] por el APN, el usuario APN y la contraseña APN de su operador antes de enviar. Envíe estos comandos como mensajes SMS al número del dispositivo según lo requiera el fabricante.

1. Restauración de fábrica inicial opcional
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar APN del operador
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el APN de su operador de red
- [apnu] es el nombre de usuario del APN si se requiere
- [apnp] es la contraseña del APN si se requiere

4. Establecer el servidor GPRS a Plaspy (se indican dominio e IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para contactar Plaspy usando d.plaspy.com y la IP 54.85.159.138 en el puerto 8888

5. Establecer intervalo de actualización/reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Estos comandos SMS son ejemplos tomados de contenido público de configuración. Verifique la sintaxis exacta con la documentación actual de QuecLink y la versión de firmware del dispositivo antes de aplicarlos masivamente.

## Observaciones sobre la configuración

- Los comandos públicos para GL505 mostrados arriba usan SMS para la configuración; confirme que su dispositivo soporta configuración por SMS y que el servicio SMS está habilitado en la SIM.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los parámetros disponibles; revise siempre la documentación de QuecLink para su firmware específico.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega y los reintentos de red; configure el transporte según sus necesidades de conectividad y fiabilidad.
- Reemplace los marcadores de APN con los valores del operador antes de enviar comandos y verifique la conectividad de datos móviles tras configurar el APN.
- Considere cambiar la contraseña del dispositivo desde la muestra por defecto queclink después de la configuración inicial por razones de seguridad, siguiendo el procedimiento del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el GL505 para reportar en Plaspy ofrece a las organizaciones visibilidad centralizada sobre la ubicación de animales y activos, alertas automáticas por incidentes de geocerca o inactividad, y telemetría histórica para análisis operativos. En despliegues pastoriles y remotos, Plaspy combinado con el GL505 ayuda a reducir mantenimientos en campo y a mejorar los tiempos de respuesta ante robos, lesiones o movimientos inesperados.

Para saber más sobre Plaspy y la integración de dispositivos compatibles visite https://www.plaspy.com. Para obtener las instrucciones más actuales de dispositivos QuecLink, notas de firmware y sintaxis de comandos, verifique los detalles en el sitio oficial de QuecLink https://www.queclink.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.

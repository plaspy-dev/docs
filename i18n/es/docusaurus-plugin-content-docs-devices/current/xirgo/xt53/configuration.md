---
slug: /xirgo/xt53/configuration
id: xt53-configuration
sidebar_label: Configuration
title: Xirgo - XT53 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Xirgo XT53 con ajustes de servidor Plaspy, comandos SMS y flujo de instalación para integración
keywords:
  - configuración Xirgo XT53
  - configuración XT53 para Plaspy
  - configuración rastreador GPS XT53
  - configuración servidor XT53
  - configuración software de seguimiento XT53
  - instalación rastreador de activos Xirgo
  - configuración rastreador Plaspy
  - configuración servidor rastreador GPS
  - seguimiento de activos XT53
  - configuración rastreador celular
---

# Xirgo - Configuración del XT53

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT53 con la plataforma Plaspy. Explica los ajustes de servidor que Plaspy requiere, muestra los comandos SMS públicos que se usan comúnmente para apuntar un XT53 a Plaspy y detalla los pasos prácticos que los instaladores suelen seguir para integrar el equipo en Plaspy y habilitar el rastreo y los reportes en tiempo real.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo empieza a reportar. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión del hardware y las herramientas del proveedor; el XT53 admite la configuración por SMS como una opción documentada, por lo que esta guía incluye los comandos SMS públicos que se usan con frecuencia para configurar el dispositivo y que pueda comunicarse con Plaspy.

## Resumen de la configuración

Configurar un XT53 para Plaspy prepara el equipo para enviar ubicaciones y mensajes de estado a la plataforma, de modo que usted pueda visualizar y administrar sus activos. El proceso público de configuración se centra en establecer la conectividad GPRS, apuntar el rastreador al endpoint de Plaspy y validar que el dispositivo reporte correctamente a la plataforma.

- Configure el dispositivo para usar Plaspy como endpoint GPRS para que los uplinks lleguen a d.plaspy.com o a la IP del servidor Plaspy.
- Proporcione el APN correcto y, si aplica, las credenciales del APN para que el dispositivo se conecte a la red de datos móviles.
- Asegúrese de que el dispositivo use el puerto 8888 y seleccione UDP o TCP si el XT53 requiere elegir el transporte.
- Guarde y aplique la configuración, luego verifique que el XT53 reporte a Plaspy y aparezca en la plataforma.
- Use los comandos SMS publicados cuando la provisión por SMS sea el método soportado por el fabricante.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo del rastreador de forma automática cuando el dispositivo comience a reportar.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional con capacidad de datos instalada en el XT53 y SMS habilitado si va a usar provisión por SMS.
- Valores APN y cualquier credencial APN que exija el operador móvil (en los comandos se usan marcadores de posición donde corresponde).
- Acceso al método o software de configuración del fabricante, como la interfaz de comandos SMS del XT53 o las herramientas de provisión del proveedor.
- El dispositivo con batería cargada o conectado a alimentación para completar el registro y los procedimientos de attach GPRS.
- Un plan claro para probar y validar que el dispositivo reporta en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT53 envía uplinks periódicos de ubicación y mensajes de estado a través de la red celular al endpoint y puerto del servidor Plaspy para que la plataforma procese los datos, muestre posiciones en el mapa y genere eventos e informes. Los parámetros en el dispositivo le indican que use Plaspy como servidor GPRS y definen el protocolo de transporte y el puerto de comunicación.

- El rastreador se configura para reportar a Plaspy usando el endpoint compartido d.plaspy.com o la IP del servidor 54.85.159.138.
- Las comunicaciones utilizan el puerto 8888, que es el puerto estándar que Plaspy acepta para todos los dispositivos.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador; Plaspy detectará el protocolo automáticamente.
- Una vez que el reporte está activo, Plaspy convierte los uplinks en posiciones en el mapa, eventos y telemetría visibles en la plataforma.
- La validación en Plaspy confirma la conectividad y que el equipo está enviando los check-ins esperados.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de Xirgo o al software proporcionado por el vendedor (para el XT53 esto comúnmente incluye comandos SMS).
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 según el campo que solicite el dispositivo.
3. Establezca el puerto del servidor en 8888, como lo requiere Plaspy.
4. Seleccione UDP o TCP si el firmware del dispositivo exige elegir el transporte.
5. Proporcione la configuración APN y las credenciales APN necesarias según el operador móvil.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si la documentación del proveedor indica que es necesario.
7. Valide que el dispositivo reporte en Plaspy revisando la actividad del equipo y las actualizaciones de ubicación en la plataforma.

Si utiliza provisión por SMS, enviar los comandos publicados en el orden correcto suele ser suficiente para establecer el APN y el servidor GPRS para Plaspy.

## Ejemplos de comandos de configuración

El XT53 puede configurarse mediante comandos SMS. Los siguientes comandos públicos se presentan en el mismo orden en que se usan comúnmente. Preserve y reemplace los marcadores de posición donde se indica.

- Establecer el APN del operador (reemplace los marcadores con los valores de su operador)
```
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación: {{apnu}} es el nombre de usuario del APN si se requiere, {{apnp}} es la contraseña del APN si se requiere, y {{apn}} es la cadena del APN del operador. Proporcione valores vacíos para usuario o contraseña si su operador no los solicita.

- Establecer el servidor GPRS para apuntar el dispositivo a Plaspy
```
+XT:1001,8888,54.85.159.138,4,0,0
```
Explicación: Este comando configura el servidor GPRS del dispositivo e incluye el puerto y la IP del servidor Plaspy. Las banderas numéricas al final son parámetros específicos del XT53 según el conjunto de comandos publicado por el fabricante; no altere el orden de los campos.

Envíe estos comandos SMS desde un número autorizado o siguiendo el procedimiento del fabricante para la provisión por SMS. Mantenga el orden indicado cuando el firmware lo requiera.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; confirme siempre los comandos con la documentación del dispositivo para su unidad XT53 específica.
- El XT53 admite la provisión por SMS en el conjunto de comandos públicos mostrado, pero algunas instalaciones pueden preferir software del proveedor o un servicio de provisión para despliegues masivos.
- Donde el transporte sea seleccionable, elija UDP o TCP según su plan de red e integración; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo en la primera conexión.
- Después de aplicar cambios de configuración, reinicie el dispositivo si el fabricante lo recomienda y verifique que los uplinks aparezcan en Plaspy.
- Mantenga un registro del APN y de los ajustes de servidor utilizados durante la provisión para facilitar la resolución de problemas y futuros despliegues.

## Por qué usar Plaspy con esta configuración

Usar el XT53 con Plaspy proporciona visibilidad centralizada y consistente de activos desplegados a largo plazo mediante un único endpoint y puerto de servidor. El diseño de bajo mantenimiento del XT53 y su conectividad celular lo hacen apropiado para implementaciones con reportes poco frecuentes y larga vida de batería, mientras que Plaspy se encarga de la detección del protocolo e ingesta de los uplinks del dispositivo para mapeo, alertas e informes históricos.

Para conocer más sobre cómo Plaspy soporta dispositivos como el Xirgo XT53 y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación de instalación verifique la información actual con el fabricante en https://xirgo.com/. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que le recomendamos confirmar los detalles antes de desplegar a gran escala.

---
slug: /coban/bn_401a/configuration
id: bn_401a-configuration
sidebar_label: Configuration
title: Coban - BN-401A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Coban BN-401A y compatibilidad con Plaspy, con ajustes de servidor y comandos SMS prácticos
keywords:
  - Configuración Coban BN-401A
  - Configuración BN-401A Plaspy
  - Configuración servidor rastreador Coban
  - Comandos SMS BN-401A
  - Configuración GPS para motocicleta
  - Configuración rastreador Plaspy
  - Guía integración rastreador GNSS
  - Configuración GPRS BN-401A
  - Configuración plataforma seguimiento vehicular
  - Manual Coban BN 401A
---

# Coban - Configuración del BN-401A

Esta página recopila el contexto público de configuración para usar el rastreador Coban BN-401A con Plaspy. Incluye los ajustes de servidor prácticos, el flujo de configuración y los comandos SMS públicos que habitualmente se usan para preparar el equipo para el seguimiento en vivo y el envío de eventos a Plaspy. Las indicaciones se enfocan en la información que puede aplicar directamente al integrar el BN-401A en una flota con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del distribuidor. El BN-401A soporta configuración por SMS y ajustes locales por Bluetooth; cuando existen comandos SMS públicos se muestran a continuación con los marcadores de posición preservados para valores del operador como credenciales APN.

## Resumen de configuración

Preparar el BN-401A para la integración con Plaspy asegura que el dispositivo entregue de forma fiable la posición y los eventos a la plataforma y que aparezca correctamente en su flota. Los pasos públicos de configuración suelen establecer el acceso a la red, el endpoint del servidor GPRS y el comportamiento de reporte para que Plaspy pueda recibir e interpretar los mensajes.

- Configure el equipo para usar los ajustes del servidor de Plaspy y que la telemetría y las alarmas lleguen a la plataforma.
- Defina el APN del operador y las credenciales para que el rastreador tenga conectividad de datos móviles para el reporte por GPRS.
- Establezca el endpoint y el puerto del servidor GPRS apuntando a Plaspy (dominio o IP).
- Seleccione el modo de transporte (UDP o TCP) y configure los intervalos de reporte para equilibrar la frecuencia de actualizaciones y el consumo de datos.
- Valide la conectividad y el envío mediante comandos de verificación del dispositivo o la vista de dispositivo en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint configurado

## Requisitos típicos antes de la configuración

- Tarjeta SIM válida provisionada para datos y SMS con un APN funcional para su operador móvil.
- Alimentar el BN-401A desde la toma del vehículo o con fuente de banco de pruebas según las instrucciones del fabricante.
- Conocimiento de la contraseña del dispositivo (los comandos de ejemplo públicos abajo usan la contraseña por defecto 123456).
- Acceso a los métodos de configuración del fabricante que usará, como SMS, Bluetooth o una herramienta de instalador.
- Una cuenta de Plaspy o una flota configurada para recibir e identificar el dispositivo cuando este reporte al servidor.
- Un plan de prueba simple para confirmar que el rastreador aparece en Plaspy después de la configuración (ubicación en vivo o un evento de prueba).

## Cómo se conecta este rastreador a Plaspy

El BN-401A suele enviar posición GNSS y telemetría de eventos a Plaspy por IP usando el transporte configurado. Cuando se ajusta para reportar al endpoint y puerto compartidos de Plaspy, las actualizaciones de posición y los mensajes de alarma se reenvían a la plataforma para mapas en vivo, alertas y reproducción histórica.

- El rastreador se configura para reportar al dominio o IP compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según el transporte configurado en el dispositivo.
- Se transmiten correcciones de posición, estado de ACC/ignición y eventos de alarma a Plaspy para visibilidad inmediata.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro del dispositivo.
- Los intervalos de reporte y las transmisiones activadas por alarmas controlan la frecuencia con la que el rastreador envía actualizaciones a Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante que vaya a utilizar (comandos SMS, herramienta Bluetooth o software de instalador).
2. Ingrese la información del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure el APN y cualquier usuario y contraseña de APN necesarios para que el dispositivo establezca datos GPRS.
6. Aplique o guarde la configuración y reinicie el rastreador si el fabricante lo recomienda.
7. Valide que el dispositivo esté reportando a Plaspy enviando un comando de verificación o observando datos en vivo en Plaspy.

## Ejemplos de comandos de configuración

El BN-401A soporta configuración mediante SMS. A continuación se muestran ejemplos públicos de comandos SMS extraídos de la documentación del fabricante. La contraseña por defecto usada en estos ejemplos es 123456. Reemplace los marcadores y valores del operador antes de enviar.

- Reinicio de fábrica inicial opcional (use sólo si necesita volver a los ajustes por defecto):
```
begin123456
```

- Establecer la zona horaria a UTC+0:
```
time zone123456 0
```

- Definir el APN del operador (reemplace {{apn}} con el APN de su operador):
```
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (reemplace {{apnu}} y {{apnp}} si el operador los exige):
```
up123456 {{apnu}} {{apnp}}
```

- Establecer el servidor GPRS por IP y puerto para reportar a Plaspy (el ejemplo público usa la IP y el puerto de Plaspy):
```
adminip123456 54.85.159.138 8888
```
Nota: El dispositivo también puede configurarse para usar el dominio d.plaspy.com cuando la herramienta del fabricante acepta nombres de dominio.

- Establecer un intervalo periódico de actualización (formato de ejemplo proporcionado por el fabricante):
```
fix060s060s***n123456
```
(Conserve esto exactamente según lo requiera su firmware si adopta el mismo patrón de intervalo; consulte la documentación del fabricante para el significado de cada campo.)

- Cambiar a modo GPRS y especificar transporte cuando aplique. Se muestran dos variantes públicas:
```
gprs123456,1,1
```
o
```
gprs123456
```
(Utilice la variante que coincida con la sintaxis de su firmware. La primera forma puede incluir banderas de transporte y modo; verifique el manual del dispositivo.)

- Verificar los ajustes actuales:
```
check123456
```

- Habilitar protocolo extendido o mejoras en el reporte de sensores (ejemplo público establece índice de protocolo 18):
```
protocol123456 18
```

Explicación de marcadores:
- {{apn}} = nombre del APN del operador requerido para datos móviles
- {{apnu}} = usuario del APN si el operador lo solicita
- {{apnp}} = contraseña del APN si el operador lo solicita

Confirme siempre la sintaxis de los comandos para su versión de firmware y región antes de enviar comandos SMS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; verifique el formato exacto de SMS con el manual del fabricante antes de aplicar comandos.
- El BN-401A soporta transporte TCP y UDP; elija el que mejor se adapte a su red y requisitos de fiabilidad y configúrelo para apuntar a d.plaspy.com o 54.85.159.138 puerto 8888.
- La configuración por SMS es útil para ajustes en campo, pero Bluetooth o las herramientas oficiales de instalador suelen ofrecer una configuración por lotes más sencilla y menos propensa a errores tipográficos.
- Los ejemplos de comandos usan la contraseña pública por defecto 123456; los fabricantes suelen permitir cambiar la contraseña: considere actualizarla después de la configuración inicial por seguridad.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este empiece a reportar al endpoint configurado.

## Por qué usar Plaspy con esta configuración

Usar el BN-401A con Plaspy ofrece una integración sencilla para flotas de motocicletas y vehículos pequeños que requieren seguimiento continuo de ubicación, alertas por eventos y telemetría básica. Al apuntar el BN-401A al endpoint y puerto compartidos de Plaspy y ajustar los intervalos de reporte, los operadores de flota pueden equilibrar la visibilidad en tiempo real con el uso de datos, manteniendo las alarmas y los eventos críticos visibles de inmediato en la plataforma.

Conozca más sobre Plaspy y cómo gestiona los datos de los dispositivos y la visibilidad de la flota en https://www.plaspy.com. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo; verifique la configuración y la sintaxis de comandos más recientes en el sitio oficial de Coban https://www.coban.net/.

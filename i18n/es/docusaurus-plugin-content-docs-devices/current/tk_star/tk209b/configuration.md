---
slug: /tk_star/tk209b/configuration
id: tk209b-configuration
sidebar_label: Configuration
title: TK-Star - TK209B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK‑Star TK209B con ajustes de servidor Plaspy, comandos SMS y pasos para seguimiento de flotas
keywords:
  - Configuración TK Star TK209B
  - Configuración TK209B para Plaspy
  - Configuración de rastreador GPS TK Star
  - Configuración de servidor TK209B
  - Configuración de rastreador en Plaspy
  - Comandos SMS TK209B
  - Configuración APN TK209B
  - Configuración plataforma rastreador GPS
  - Seguimiento de flotas TK209B
  - Configuración GPRS TK209B
---

# TK-Star - Configuración del TK209B

Esta página ofrece el contexto público de configuración para conectar el TK‑Star TK209B a Plaspy. Resume los ajustes prácticos del servidor, los requisitos comunes y los comandos por SMS que se usan con más frecuencia en este equipo, para que usted pueda preparar el rastreador y que envíe ubicación y telemetría a Plaspy. Cuando los comandos del fabricante son públicos, se incluyen aquí por conveniencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto y punto de recepción para todos los dispositivos en la plataforma. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate las instrucciones siguientes como un punto de partida práctico y confirme los detalles con la documentación oficial de TK‑Star cuando sea necesario.

## Resumen de configuración

Este proceso prepara el TK209B para enviar paquetes de posición y telemetría a Plaspy, de modo que el dispositivo sea visible y reportable en la plataforma. Los comandos públicos por SMS que aparecen a continuación son un ejemplo de cómo dirigir el equipo al endpoint de Plaspy y ajustar la frecuencia de envío.

- Configure el APN y el modo GPRS del dispositivo para que pueda abrir una sesión de datos hacia Plaspy
- Establezca el endpoint y el puerto del servidor Plaspy para que los paquetes lleguen a su cuenta
- Ajuste el intervalo de envío para equilibrar la vida útil de la batería y la granularidad de los reportes
- Valide la conectividad para asegurar que el dispositivo aparezca en Plaspy y envíe actualizaciones periódicas
- Opcionalmente, restaure o asegure la contraseña del equipo durante la configuración inicial

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used depending on device firmware and preference
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos a la configuración

- Un TK209B con batería suficiente o conectado a alimentación para permitir la configuración y las pruebas
- Una tarjeta SIM válida con plan de datos activo y los datos APN correctos
- Acceso a un teléfono con capacidad SMS o a una herramienta de configuración del proveedor para enviar comandos al rastreador
- Conocer la contraseña del dispositivo (en los ejemplos públicos la contraseña por defecto es 123456) y poder cambiarla si es necesario
- Una cuenta en Plaspy y acceso para revisar la conectividad del dispositivo desde la plataforma
- Comprender si usará UDP o TCP para el transporte si el dispositivo requiere selección explícita

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK209B abre una sesión de datos GPRS y envía periódicamente paquetes de ubicación y telemetría al endpoint del servidor Plaspy en el puerto compartido. Plaspy recibe los paquetes, normaliza fuentes de posicionamiento y muestra el dispositivo en la plataforma para seguimiento en tiempo real e informes históricos.

- El rastreador envía ubicación y telemetría al endpoint y puerto configurados en el dispositivo
- Plaspy acepta paquetes entrantes en el puerto 8888 y detecta automáticamente el protocolo del dispositivo
- Los intervalos de subida periódicos determinan la frecuencia de actualización de la posición en Plaspy
- Alertas como movimiento o manipulación se reenvían a Plaspy para notificaciones e historial
- El historial en servidor y la visibilidad del dispositivo estarán disponibles en Plaspy una vez que el rastreador informe correctamente

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK‑Star para su dispositivo, normalmente mediante comandos SMS o la herramienta del proveedor documentada por TK‑Star.
2. Introduzca el endpoint del servidor Plaspy especificando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del equipo.
3. Establezca el puerto en 8888 en el dispositivo.
4. Elija UDP o TCP si el rastreador requiere selección explícita del transporte para el reporte por GPRS.
5. Aplique o guarde la configuración en el equipo y cambie al modo GPRS si es necesario.
6. Reinicie el dispositivo si el rastreador o las instrucciones del fabricante recomiendan un reinicio para aplicar cambios.
7. Valide que el rastreador reporte a Plaspy revisando el estado del dispositivo y los paquetes recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TK209B suele configurarse enviando mensajes SMS al equipo. Los siguientes comandos públicos por SMS se muestran en el orden recomendado para la configuración inicial. La contraseña de ejemplo usada en los comandos es 123456, que aparece como valor por defecto en los ejemplos públicos.

1. Reinicio opcional para restaurar valores de fábrica (usar solo cuando sea necesario)
```
begin123456
```

2. Establecer el APN del operador (reemplazar {{apn}} por el APN de su proveedor)
```
apn123456 {{apn}}
```

3. Establecer el usuario del APN si el operador lo requiere (reemplazar {{apnu}} por el usuario)
```
apnuser123456 {{apnu}}
```

4. Establecer la contraseña del APN si el operador la requiere (reemplazar {{apnp}} por la contraseña)
```
apnpasswd123456 {{apnp}}
```

5. Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```
adminip123456 54.85.159.138 8888
```
Nota: Si su firmware admite nombres de host en el comando de servidor, podría usar d.plaspy.com en lugar de la IP. Confirme el soporte de hostname en la documentación de TK‑Star.

6. Establecer el intervalo de subida a 60 segundos (ajuste según la autonomía deseada)
```
upload123456 60
```

7. Cambiar el dispositivo al modo de reporte GPRS
```
gprs123456
```

Explicación de marcadores:
- {{apn}} = cadena APN de su operador móvil
- {{apnu}} = usuario APN cuando lo solicita el operador
- {{apnp}} = contraseña APN cuando lo solicita el operador

Estos comandos son ejemplos públicos; el formato exacto y el comportamiento pueden variar según firmware y variantes regionales. El comando de reinicio es opcional y debe emplearse solo cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disponibilidad o sintaxis de comandos; verifique los comandos con la documentación de su versión de firmware.
- La configuración por SMS es comúnmente soportada en el TK209B, pero pueden existir herramientas del proveedor o interfaces de instalador según su canal de compra.
- Elija UDP o TCP según condiciones de red y soporte de firmware; Plaspy acepta ambos y detecta automáticamente el protocolo en el puerto 8888.
- Mantenga la contraseña del dispositivo segura y considere cambiar la contraseña por defecto tras la configuración inicial.
- Verifique las credenciales APN con su operador móvil antes de poner el dispositivo en modo GPRS para evitar retrasos de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el TK209B con Plaspy permite a las organizaciones recibir actualizaciones de ubicación fiables y notificaciones de eventos para la monitorización prolongada de activos y vehículos. La combinación de intervalos de subida configurables, ajustes de endpoint de servidor y la detección automática de protocolo de Plaspy ayuda a que los operadores integren dispositivos rápidamente y mantengan visibilidad operativa.

Para conocer más sobre Plaspy y cómo administrar rastreadores TK209B a escala, visite https://www.plaspy.com. Para manuales específicos del dispositivo, notas de firmware y referencias de comandos, confirme siempre los detalles en el sitio oficial de TK‑Star https://www.tk-star.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.

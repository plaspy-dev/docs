---
slug: /suntech/st_210/configuration
id: st_210-configuration
sidebar_label: Configuration
title: Suntech - ST 210 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Suntech ST 210 para Plaspy con servidor compartido y comandos SMS para APN e intervalo de reporte
keywords:
  - configuración Suntech ST 210
  - instalación Suntech ST 210
  - configuración rastreador GPS Suntech
  - configuración ST 210 para Plaspy
  - configuración seguimiento de vehículos
  - configuración rastreador de flotas
  - configuración servidor Suntech
  - configuración SMS del rastreador
  - configuración GPRS del rastreador
  - configuración plataforma rastreador GPS
---

# Suntech - Configuración del ST 210

Esta página documenta el contexto público de configuración para usar el rastreador Suntech ST 210 con Plaspy. Se centra en los pasos y ajustes prácticos y públicos necesarios para apuntar un ST 210 al servidor de Plaspy y validar la conectividad. Cuando aplica, incluye plantillas de comandos SMS extraídas de contenidos públicos de configuración del dispositivo.

Plaspy utiliza un único endpoint y puerto compartido para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo. Los pasos de configuración en el lado del fabricante para el ST 210 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor; consulte la documentación oficial de Suntech cuando necesite procedimientos específicos del dispositivo o los formatos de comando más recientes.

## Resumen de la configuración

Preparar el ST 210 para Plaspy consiste principalmente en asegurar que el rastreador pueda conectarse a Plaspy por GPRS y reportar posición y eventos de forma fiable. El flujo público de configuración para este dispositivo suele incluir establecer el APN del operador y el servidor GPRS, asignar el ID del dispositivo derivado del IMEI y ajustar los intervalos de reporte para que la unidad aparezca y se actualice correctamente en la plataforma Plaspy.

- Configure el APN del operador y el servidor GPRS para que el rastreador pueda abrir una conexión de datos hacia Plaspy.
- Asigne y verifique el ID del rastreador, que para el ST 210 se deriva del IMEI en los comandos SMS.
- Defina un intervalo de reporte que equilibre visibilidad en tiempo real y consumo de datos.
- Valide la conectividad y el alcance al servidor para que el dispositivo sea visible en Plaspy.
- Use los comandos SMS proporcionados o las herramientas del fabricante para aplicar los ajustes cuando estén disponibles.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de comenzar

- Un Suntech ST 210 instalado y con alimentación, con acceso a la ranura de la SIM y a las conexiones de antena según lo requiera la instalación.
- Una tarjeta SIM GSM con un plan de datos activo y las credenciales APN correctas del operador móvil.
- Disponer del IMEI del dispositivo; la configuración por SMS del ST 210 usa un ID de dispositivo derivado del IMEI para la sintaxis de comandos.
- Acceso al método de configuración del fabricante que vaya a usar, típicamente SMS o una herramienta de configuración del proveedor.
- Credenciales o acceso a una cuenta de Plaspy para validar el dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST 210 se configura para reportar datos de posición y eventos al endpoint y puerto compartido de Plaspy. En la práctica, esto implica ajustar el rastreador para usar el APN del operador para GPRS, apuntar los campos del servidor GPRS a Plaspy y asegurarse de que el transporte elegido (UDP o TCP) y el puerto sean correctos.

- El rastreador abre una conexión de datos GPRS usando el APN del operador y envía datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que la plataforma puede interpretar los mensajes sin selección manual del protocolo en el servidor.
- El rastreador envía actualizaciones periódicas de posición y eventos según el intervalo de reporte configurado.
- Las geocercas y eventos disparados por entradas del ST 210 son reenviados a Plaspy cuando se activan.
- SMS puede usarse para comandos de configuración y verificación si aún no hay acceso a datos en la red.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Suntech que vaya a utilizar, como comandos SMS o la herramienta de configuración del proveedor que se suministra con el ST 210.
2. Determine el ID de dispositivo que usa el formato de comandos SMS del ST 210. Para este modelo, el ID es los 6 dígitos del IMEI que empiezan en la posición 9 y terminan en la posición 14 (se excluye el último dígito del IMEI). Ejemplo: IMEI 123456789012345 da el ID 901234.
3. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o IP 54.85.159.138 en el campo del servidor GPRS.
4. Configure el puerto del servidor a 8888.
5. Seleccione UDP o TCP en el dispositivo si el ST 210 requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta Plaspy, ajustando el APN o el intervalo de reporte según sea necesario.

## Ejemplos de comandos de configuración

El ST 210 soporta configuración por SMS. Las plantillas de comandos públicas a continuación se presentan en el orden típico de aplicación. Reemplace los marcadores antes de enviar por SMS. El marcador de ID de dispositivo {{device_id}} debe calcularse desde el IMEI como se describió más arriba. Mantenga [apn], [apnu] y [apnp] como marcadores para el nombre del APN del operador, el usuario del APN y la contraseña del APN.

1) Configurar el APN del operador y el servidor GPRS (plantilla de ejemplo)

```
SA200NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Propósito: Configurar el APN del operador y apuntar el dispositivo a la IP y puerto del servidor Plaspy.
- Notas: El cuarto campo en la plantilla original indica si hay nombre de usuario/contraseña del APN. Use 1 si proporciona [apnu] o [apnp], de lo contrario use 0.

2) Establecer el intervalo de reporte a 60 segundos

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Propósito: Configurar los intervalos de reporte periódico. El ejemplo fija el intervalo de reporte en 60 segundos para los modos relevantes en el formato de comando del ST 210.

3) Verificar ajustes con una consulta de preset

```
SA200CMD;{{device_id}};02;PresetA
```

- Propósito: Solicitar la configuración actual del preset A al dispositivo para confirmar los ajustes.

Explicaciones importantes de los marcadores:
- {{device_id}} — el ID de 6 dígitos del dispositivo derivado del IMEI como se describió más arriba.
- [apn] — la cadena APN de su operador móvil.
- [apnu] — usuario del APN si es requerido por el operador.
- [apnp] — contraseña del APN si es requerida por el operador.

Envíe estos comandos como mensajes SMS desde un número autorizado si su instalación usa configuración por SMS. Siga las indicaciones de Suntech sobre el formato requerido de comandos, los números de remitente autorizados y cualquier PIN o token de seguridad si aplica.

## Notas de configuración

- Las diferencias de firmware y las revisiones regionales de hardware pueden cambiar formatos de comandos exactos o los parámetros disponibles; confirme siempre con las notas de la versión del firmware del dispositivo.
- El ST 210 soporta configuración por SMS como se muestra en plantillas públicas, pero también pueden existir herramientas del proveedor o software de configuración para PC que simplifiquen la configuración masiva.
- Elija UDP o TCP según las preferencias de su instalación; ambos son soportados por Plaspy en el puerto 8888, y Plaspy detectará automáticamente el protocolo del dispositivo.
- Asegúrese de que las credenciales APN sean correctas antes de apuntar el rastreador a d.plaspy.com o 54.85.159.138 para evitar fallos de conectividad.
- Tras aplicar los ajustes, espere un breve periodo para que el dispositivo se registre en la red y confirme su visibilidad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Suntech ST 210 ofrece una forma sencilla de centralizar la localización de vehículos, el reporte de eventos y el monitoreo operativo. La capacidad GPRS del ST 210 y sus entradas de eventos, combinadas con el endpoint unificado de Plaspy, facilitan la gestión de dispositivos en flotas con ajustes de servidor consistentes.

Para saber más sobre Plaspy y cómo gestiona las integraciones de rastreadores visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, la sintaxis de comandos y las notas de firmware, verifique la documentación oficial de Suntech en http://www.suntechint.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.

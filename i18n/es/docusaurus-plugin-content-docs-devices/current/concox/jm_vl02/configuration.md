---
slug: /concox/jm_vl02/configuration
id: jm_vl02-configuration
sidebar_label: Configuration
title: Concox - JM-VL02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox JM-VL02 con ajustes de servidor Plaspy, comandos SMS y pasos para integrarlo al seguimiento de flotas
keywords:
  - Concox JM-VL02 configuración
  - Configuración JM-VL02
  - Rastreador Concox Plaspy
  - Configuración servidor JM-VL02
  - Configuración GPS tracker
  - Configuración rastreador vehicular
  - Configuración seguimiento de flotas
  - Configuración GPS Concox
  - Configuración SMS JM-VL02
  - Configuración tracker Plaspy
---

# Concox - JM-VL02 Configuración

Esta página documenta el contexto público de configuración para usar el Concox JM-VL02 con la plataforma Plaspy. Reúne los ajustes de servidor de Plaspy que debe aplicar al dispositivo y presenta los comandos SMS y los pasos de configuración disponibles públicamente para que el rastreador reporte a Plaspy. Úsela como referencia práctica para la integración y verificación antes de registrar dispositivos en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que debe combinar la información aquí con la documentación oficial de Concox y los procedimientos específicos del instalador para su implementación.

## Resumen de la configuración

El proceso de configuración prepara el JM-VL02 para comunicarse con Plaspy, valida la conectividad y permite que el dispositivo aparezca y reporte en la plataforma. El flujo público de configuración para este modelo frecuentemente utiliza comandos SMS para establecer parámetros de red, endpoints de servidor e intervalos de reporte.

- Configure el APN del equipo para que pueda abrir una conexión de datos GPRS/paquetes.
- Ajuste el servidor GPRS para apuntar a Plaspy usando el dominio o la IP proporcionada.
- Seleccione el transporte UDP o TCP en el dispositivo y establezca el puerto compartido de Plaspy.
- Defina los intervalos de reporte (timer) para que el dispositivo envíe actualizaciones de ubicación con la frecuencia deseada.
- Active el modo de datos GPRS y verifique los parámetros con el comando de verificación del dispositivo.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la detección de protocolo se maneja automáticamente en la plataforma.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM funcional con un plan de datos activo y el APN correcto del operador móvil.
- Capacidad para enviar SMS al dispositivo para la configuración por SMS según los comandos públicos mostrados.
- Acceso al dispositivo (con alimentación e instalado) o a un instalador que pueda operar la unidad durante la configuración.
- Información de cuenta y documentación del fabricante para el JM-VL02 para confirmar pasos específicos de firmware.
- Lista de datos del APN incluyendo usuario y contraseña opcionales si el operador los requiere.

## Cómo se conecta este rastreador a Plaspy

El JM-VL02 se configura para reportar posición GNSS, localización asistida por red celular (LBS) y telemetría del estado del vehículo al endpoint y puerto compartidos de Plaspy. Una vez configurado con el APN y los ajustes de servidor correctos, el rastreador envía paquetes periódicos a Plaspy, donde la detección de protocolo asigna el dispositivo al manejador correspondiente y hace visibles sus datos en la plataforma.

- El dispositivo envía posiciones basadas en GNSS y LBS al endpoint de Plaspy.
- Datos de estado del vehículo y eventos como cambios de ACC/ignición, pulsaciones del botón SOS y eventos de relé se incluyen en los reportes a Plaspy.
- El rastreador usa datos GPRS para publicar actualizaciones a d.plaspy.com o 54.85.159.138 en el puerto 8888 sobre UDP o TCP.
- Plaspy detecta automáticamente el protocolo del dispositivo por lo que puede usar el mismo puerto en distintos equipos.
- Los reportes permiten visibilidad en el mapa en tiempo real, alertas de eventos y reportes históricos en Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox para el JM-VL02 (comandos SMS o la herramienta OEM) tal como lo documenta el fabricante.
2. Verifique que la SIM esté instalada, con alimentación y que tenga los datos del APN correctos disponibles.
3. Configure el APN en el dispositivo con el APN del operador y las credenciales opcionales.
4. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 y establezca el puerto 8888.
5. Elija transporte UDP o TCP si el dispositivo requiere selección de transporte.
6. Establezca un intervalo de reporte apropiado (timer), active el modo GPRS y guarde/aplique la configuración.
7. Reinicie o haga un ciclo de alimentación del dispositivo si el equipo o el firmware lo requieren.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma usando la visibilidad de Plaspy y el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

La configuración pública del JM-VL02 utiliza comandos SMS. Envíe cada comando como un SMS al número de la SIM del dispositivo. Conserve los marcadores de posición al ingresar las credenciales del APN.

- Reset de fábrica opcional (solo cuando sea necesario en el proceso de configuración):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores con el APN de su operador y el usuario y contraseña opcionales:
```
APN,[apn]#
```
O, si su APN requiere usuario y contraseña:
```
APN,[apn],[apnu],[apnp]#
```
(Donde [apn] es el APN del operador, [apnu] es el usuario del APN y [apnp] es la contraseña del APN.)

- Configurar el servidor GPRS para usar el dominio y puerto de Plaspy:
```
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP y el puerto de Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos (se muestran dos formatos presentes en la documentación pública):
```
TIMER,60#
```
O:
```
TIMER,60,60#
```

- Activar el modo GPRS:
```
GPRSON,1#
```

- Verificar los parámetros GPRS actuales en el dispositivo:
```
GPRSSET#
```

Envíe estos comandos SMS en el orden mostrado cuando el orden sea importante (por ejemplo, APN antes de activar GPRS). Si emite el comando FACTORY#, trátelo como un reinicio inicial opcional y vuelva a aplicar los ajustes de APN y servidor después.

## Notas de configuración

- Los comandos mostrados son la sintaxis SMS documentada públicamente para el JM-VL02. El soporte y la sintaxis exacta de los comandos pueden variar según la revisión de firmware.
- Se ofrecen entradas tanto por dominio como por IP; usar d.plaspy.com es preferible para mantenimiento, mientras que la IP 54.85.159.138 es una alternativa.
- Elija UDP o TCP según la preferencia del instalador o los requisitos del dispositivo; Plaspy admite ambos y detecta automáticamente el protocolo en la plataforma.
- La configuración por SMS requiere que el dispositivo esté encendido y que la recepción de SMS esté habilitada para mensajes de configuración.
- Tras aplicar los ajustes, puede ser necesario reiniciar o hacer un ciclo de alimentación corto para que los cambios entren en vigor.

## Por qué usar Plaspy con esta configuración

Usar el Concox JM-VL02 con Plaspy permite una visibilidad centralizada y casi en tiempo real de la ubicación del vehículo y su estado operativo, combinando posición GNSS y telemetría de entradas/salidas del vehículo para el control de flotas, monitoreo de seguridad y flujos de trabajo anti-robo. Los comandos SMS disponibles públicamente y los ajustes de servidor compartidos de Plaspy facilitan la provisión de dispositivos a escala y mantienen la configuración consistente en toda la flota.

Conozca más sobre Plaspy y sus funcionalidades en https://www.plaspy.com. Para pasos de configuración precisos por dispositivo, comportamiento de firmware y los detalles más recientes del fabricante, verifique la información en el sitio de Concox en https://www.iconcox.com/ ya que la documentación del fabricante y los cambios de firmware pueden afectar procedimientos exactos.

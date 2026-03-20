---
slug: /concox/ll301/configuration
id: ll301-configuration
sidebar_label: Configuration
title: Concox - LL301 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox LL301 para conectar con Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Concox LL301 configuración
  - LL301 configuración Plaspy
  - configuración de rastreador Concox
  - configuración de servidor LL301
  - comandos SMS LL301
  - configuración dispositivo Plaspy
  - guía configuración rastreador GPS
  - ajustes APN LL301
  - configuración rastreador de activos
  - configuración plataforma rastreo GPS
---

# Concox - LL301 Configuración

Esta página explica el contexto público de configuración para usar el rastreador Concox LL301 con Plaspy. Incluye los valores de servidor compartido de Plaspy y presenta los comandos SMS públicos y el flujo de trabajo práctico publicados por el fabricante, que normalmente se utilizan para apuntar dispositivos LL301 a Plaspy para seguimiento en vivo y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LL301 admite configuración vía SMS (y configuración por Bluetooth mediante la aplicación del proveedor); esta página se concentra en los comandos SMS públicos y los valores de servidor necesarios para conectar el equipo a Plaspy.

## Resumen de la configuración

Configurar un LL301 para Plaspy prepara el equipo para enviar posiciones GNSS, telemetría y alertas de evento a Plaspy usando el endpoint y el puerto compartidos de la plataforma. Los comandos SMS de ejemplo que se muestran a continuación son los comandos públicos proporcionados por el fabricante y muestran los parámetros típicos que debe ajustar para que el rastreador informe correctamente en Plaspy.

- Apuntar el rastreador a Plaspy usando el host o IP del servidor compartido y el puerto común de Plaspy.
- Configurar el APN y los ajustes GPRS del dispositivo para que el rastreador pueda establecer una conexión de datos.
- Definir intervalos de reporte y habilitar el reporte por GPRS para que las actualizaciones de ubicación lleguen a Plaspy con la frecuencia deseada.
- Validar la configuración y verificar el dispositivo en Plaspy para confirmar el reporte en vivo y la visibilidad de eventos.
- Utilizar los comandos de verificación del fabricante para comprobar los parámetros GPRS y del servidor antes y después de los cambios.

## Valores de servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en hostname
- IP del servidor 54.85.159.138 como alternativa al hostname
- Puerto 8888 que se usa para todos los dispositivos en Plaspy
- Soporte de transporte por UDP o TCP según la opción de transporte del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta la conexión e interpreta el protocolo del dispositivo de forma automática

## Requisitos típicos antes de la configuración

- Un LL301 con batería y una nano SIM activa instalada con datos habilitados para el APN del operador
- Acceso para enviar mensajes SMS desde un número de gestión al rastreador para la configuración por SMS
- La información del APN del operador (nombre del APN y usuario y contraseña opcionales) para datos GPRS
- Decidir si va a configurar el rastreador por SMS o mediante la app Bluetooth del proveedor; los comandos SMS abajo reflejan el método público por SMS
- Posibilidad momentánea de reiniciar o cortar la alimentación del equipo después de aplicar nuevos ajustes de red si fuera necesario
- Acceso a Plaspy para confirmar que el dispositivo aparece y reporta una vez aplicada la configuración

## Cómo se conecta este rastreador a Plaspy

El LL301 se configura para reportar posiciones GNSS, telemetría y eventos a Plaspy enviando datos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y el GPRS está habilitado, Plaspy recibe la información y detecta automáticamente el protocolo del rastreador para interpretar correctamente la ubicación y los eventos.

- El dispositivo abre una sesión GPRS usando el APN configurado y luego establece transporte de datos hacia d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del rastreador; elija el transporte requerido por su implementación
- Plaspy detecta automáticamente el protocolo LL301 cuando el dispositivo se conecta al puerto compartido de Plaspy
- Los fixes de ubicación y las alertas de eventos (por ejemplo manipulación, vibración, batería baja) se envían a Plaspy para monitoreo en tiempo real
- Una configuración exitosa hace que el dispositivo sea visible en Plaspy para seguimiento en vivo y reproducción histórica

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Concox que vaya a utilizar, por ejemplo comandos SMS desde un teléfono de gestión o la herramienta de configuración Bluetooth del proveedor.
2. Ingrese el servidor de Plaspy por hostname d.plaspy.com o por IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Configure el puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere selección explícita del transporte.
5. Aplique o guarde la configuración y, si la documentación del equipo lo recomienda, reinicie o corte la alimentación para asegurar que los ajustes entren en vigor.
6. Valide que el dispositivo reporte a Plaspy revisando el rastreador en la plataforma Plaspy o usando el comando de verificación vía SMS.
7. Monitoree el dispositivo en Plaspy para confirmar que las actualizaciones de ubicación, alertas y telemetría llegan con el intervalo esperado.

## Comandos de configuración de ejemplo

El LL301 soporta configuración por SMS con los siguientes comandos públicos. Envíe cada línea como un SMS al número IMEI del rastreador o a la interfaz telefónica de gestión exactamente como se muestra. Conserve los marcadores de posición cuando correspondan.

- Reinicio opcional a valores de fábrica (usar solo si necesita borrar ajustes previos):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

- Establecer el APN del operador. Reemplace los marcadores de posición con los valores de su operador:
```
APN,[apn]#
```
Si su operador requiere usuario y contraseña del APN inclúyalos así:
```
APN,[apn],[apnu],[apnp]#
```
Explicación de los marcadores de posición:
- [apn] = el nombre del APN proporcionado por su operador móvil
- [apnu] = usuario del APN opcional si es requerido
- [apnp] = contraseña del APN opcional si es requerida

- Configurar el servidor GPRS para usar el hostname y puerto de Plaspy:
```
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP de Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer intervalo de reporte cada 60 segundos (se muestran dos sintaxis comunes):
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS para que el dispositivo use reporte por datos móviles:
```
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor:
```
GPRSSET#
```

Siga los comandos en el orden adecuado cuando corresponda: típicamente configure primero el APN, luego el servidor, luego el timer y finalmente habilite GPRS. Use el comando de verificación para confirmar los parámetros después de la configuración.

## Notas de configuración

- La configuración por SMS está documentada públicamente para el LL301; use un número de teléfono confiable y confirme la entrega del SMS antes de continuar.
- Las revisiones de firmware y las variantes de hardware pueden cambiar el soporte o la sintaxis de los comandos; confirme la sintaxis exacta si algún comando no se comporta como espera.
- Elija UDP o TCP según su preferencia de transporte; Plaspy admite ambos y detectará automáticamente el protocolo del dispositivo en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles; esto simplifica la configuración del servidor cuando se despliegan flotas mixtas.
- Si utiliza el hostname d.plaspy.com el dispositivo resolverá DNS; si no dispone de resolución DNS en su entorno use la IP alternativa de Plaspy indicada en los comandos.

## Por qué usar Plaspy con esta configuración

Usar el LL301 con Plaspy ofrece una solución de rastreo práctica y de bajo mantenimiento para organizaciones que necesitan larga duración de batería, alertas de eventos y visibilidad centralizada. Apuntar el rastreador al servidor y puerto compartidos de Plaspy facilita consolidar datos de ubicación y telemetría en una sola plataforma para monitoreo en tiempo real, análisis histórico y generación de alertas.

Conozca más sobre Plaspy y cómo gestiona la conectividad de dispositivos y el monitoreo de flotas en https://www.plaspy.com. Para obtener los comandos más recientes por dispositivo, notas de firmware y orientación del fabricante, verifique siempre la información en la web de Concox en https://www.iconcox.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.

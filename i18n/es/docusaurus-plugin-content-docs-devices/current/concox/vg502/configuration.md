---
slug: /concox/vg502/configuration
id: vg502-configuration
sidebar_label: Configuration
title: Concox - VG502 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el tracker OBDII Concox VG502 a Plaspy con servidor compartido y comandos SMS
keywords:
  - configuración Concox VG502
  - configuración VG502
  - Concox VG502 Plaspy
  - configuración servidor VG502
  - tracker OBDII Concox
  - configuración GPS VG502
  - configuración rastreador Plaspy
  - rastreo vehicular VG502
  - configuración OBD II VG502
  - comandos SMS Concox VG502
---

# Concox - Configuración del VG502

Esta página describe la configuración pública para utilizar el tracker OBDII GNSS Concox VG502 con Plaspy. Explica los valores de servidor y los comandos prácticos proporcionados por el fabricante que puede usar para apuntar un VG502 a Plaspy, de modo que el dispositivo envíe posición y telemetría para monitoreo en tiempo real y análisis histórico.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice los comandos y procedimientos aquí como punto de partida práctico y confirme los detalles con la documentación del firmware y del fabricante.

## Resumen de la configuración

El objetivo de este proceso es preparar el VG502 para que comunique de manera consistente fijaciones GNSS y telemetría OBD a Plaspy para visibilidad, alertas e informes. El contenido público de configuración que sigue muestra los comandos SMS comunes que usan los dispositivos Concox para ajustar APN, servidor, temporizadores y modo GPRS.

- Configure el dispositivo para usar Plaspy como su servidor GPRS para que las posiciones GNSS y la telemetría lleguen a la plataforma.
- Proporcione los ajustes del APN del operador necesarios para la conectividad de datos móviles y active el modo GPRS.
- Defina un intervalo de reporte para que la posición y la telemetría se envíen con la frecuencia requerida.
- Valide que el dispositivo pueda alcanzar d.plaspy.com o la IP de servidor equivalente y confirme que se registre en Plaspy.
- Opcionalmente, restablezca o verifique parámetros del dispositivo antes del despliegue en la flota para garantizar un comportamiento homogéneo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte si el dispositivo requiere una selección explícita
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para la conectividad

## Requisitos previos habituales

- Un dispositivo VG502 instalado en el puerto OBDII del vehículo y alimentado por el encendido del vehículo o la batería
- Una Nano SIM operativa con plan de datos y capacidad de SMS configurada para el dispositivo
- Acceso al método de configuración del fabricante, como comandos SMS, herramientas BLE o software del proveedor
- Conocimiento de los valores APN del operador móvil para su proveedor de SIM
- Un proceso para enviar y recibir comandos SMS desde el dispositivo para la configuración inicial si no utiliza BLE o una app de configuración

## Cómo se conecta este tracker a Plaspy

El VG502 se configura para enviar fijaciones GNSS y telemetría OBD al endpoint y puerto compartidos de Plaspy. Una vez configurado, el tracker enviará mensajes regulares de posición y eventos para que Plaspy pueda mostrar la ubicación en vivo, generar alertas y producir informes históricos.

- El dispositivo apunta a d.plaspy.com o a la IP del servidor de Plaspy y usa el puerto compartido 8888
- Las fijaciones de posición GNSS y la telemetría derivada del OBD se reenvían a Plaspy para mapeo e informes
- Notificaciones de eventos como cambios de encendido, alertas e informes de diagnóstico se envían a Plaspy para su procesamiento
- Plaspy detecta automáticamente el protocolo del dispositivo para aplicar el parseo e ingestión correctos
- Los intervalos de reporte y temporizadores controlan la frecuencia con la que el VG502 envía actualizaciones a Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox para el VG502, por ejemplo comandos SMS o la utilidad BLE del proveedor.
2. Introduzca los ajustes de servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección de servidor.
3. Configure el puerto en 8888 y, si el dispositivo lo requiere, seleccione UDP o TCP como transporte.
4. Configure el APN del operador móvil y active el modo GPRS para que el dispositivo pueda usar datos celulares.
5. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo solicita.
6. Valide que el dispositivo informe a Plaspy comprobando la conectividad del equipo y las actualizaciones en vivo de posición en Plaspy.
7. Ajuste el intervalo de reportes y parámetros adicionales según la política de la flota y el uso de datos.

## Comandos de configuración de ejemplo

El VG502 puede configurarse mediante comandos SMS. Los comandos que siguen se presentan en el orden recomendado para la configuración inicial. El comando de restablecimiento de fábrica es opcional y debe usarse sólo cuando necesite devolver el equipo a los valores predeterminados antes del aprovisionamiento.

1. Restablecimiento de fábrica opcional (usar sólo si es necesario)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
```
APN,{{apn}}# 
```
Si su operador requiere usuario o contraseña de APN, incluya los marcadores opcionales según lo indique su operador:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} = nombre del APN del operador
- {{apnu}} = usuario del APN si se requiere
- {{apnp}} = contraseña del APN si se requiere

4. Establecer el servidor GPRS a Plaspy usando dominio
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS usando la IP del servidor de Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

5. Configurar el intervalo de actualización a cada 60 segundos (dos formatos aceptados)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

6. Activar el modo GPRS
```
GPRSON,1#
```

7. Verificar ajustes GPRS y de servidor
```
GPRSSET#
```

Siga la sintaxis SMS exacta que exige el firmware del dispositivo y confirme que el equipo reconoce cada comando. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores específicos de su operador.

## Notas de configuración

- El aprovisionamiento por SMS es un método común para configurar el VG502, pero pueden estar disponibles BLE y herramientas del proveedor para configuración local y actualizaciones de firmware.
- Las versiones de firmware pueden cambiar la sintaxis y el comportamiento de los comandos SMS; confirme siempre el soporte de comandos con la versión de firmware actual del dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy soporta ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte.
- Mantenga a mano las credenciales del APN y los detalles del plan de datos de la SIM durante la configuración para evitar retrasos de conectividad.
- Use el comando GPRSSET# para verificar que el dispositivo está usando el servidor y el APN esperados.

## Por qué usar Plaspy con esta configuración

Usar el Concox VG502 con Plaspy ofrece una vía de despliegue rápida y de baja fricción para rastreo vehicular y telemetría OBD. El factor de forma plug-and-play OBDII del VG502 simplifica la instalación, mientras que Plaspy proporciona un endpoint central que ingiere datos GNSS y de diagnóstico para monitoreo en tiempo real, generación de reportes y alertas.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration and firmware details at the manufacturer site https://www.iconcox.com/ as setup methods and firmware behavior can change over time.

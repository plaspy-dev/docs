---
slug: /eelink/tk116/configuration
id: tk116-configuration
sidebar_label: Configuration
title: EElink - TK116 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GPS EElink TK116 para reportar a Plaspy mediante ajustes de servidor compartidos y comandos SMS
keywords:
  - Configuración EElink TK116
  - Rastreador GPS EElink TK116
  - Configuración TK116 en Plaspy
  - Configuración de servidor TK116
  - Configuración de rastreador GPS Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreo de vehículos
  - Configuración de rastreador para gestión de flotas
  - Comandos SMS TK116
  - Ajustes de servidor Plaspy
---

# EElink - Configuración del TK116

Esta página documenta el contexto público de configuración para usar el rastreador GPS EElink TK116 con Plaspy. Reúne los ajustes de servidor de Plaspy que debe ingresar en el dispositivo y presenta los comandos SMS comunes que aceptan los equipos EElink para la configuración inicial. Use esta guía para preparar el TK116 y que informe posiciones y eventos a Plaspy, de modo que el dispositivo aparezca en su panel de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El TK116 soporta configuración por SMS y reporte por GPRS; los comandos de ejemplo a continuación reflejan los comandos SMS públicos que se usan comúnmente para establecer el APN y los ajustes de servidor en este modelo.

## Resumen de la configuración

El objetivo de la configuración del TK116 es apuntar el dispositivo hacia Plaspy para que envíe datos de ubicación y eventos de forma confiable. La configuración normalmente incluye confirmar la conectividad móvil, especificar el APN para datos y dirigir la telemetría al endpoint y puerto del servidor de Plaspy.

- Configure el TK116 para usar Plaspy como endpoint de servidor para que los datos de ubicación se enruten a la plataforma.
- Establezca el APN móvil correcto y las credenciales para datos GPRS en el rastreador para habilitar la conectividad a Internet.
- Seleccione el transporte (UDP o TCP) y configure el puerto que usa Plaspy para que los datos lleguen correctamente.
- Valide la conectividad y el reporte revisando los parámetros del dispositivo y confirmando que el rastreador sea visible en Plaspy.
- Utilice comandos SMS para una configuración rápida en campo cuando no estén disponibles las herramientas del fabricante.

## Ajustes de servidor de Plaspy

Para que el TK116 informe a Plaspy, utilice los siguientes ajustes públicos de servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Estos valores son los ajustes compartidos del endpoint de Plaspy que debe ingresar en el rastreador durante la configuración.

## Requisitos típicos antes de la configuración

- Una unidad TK116 con alimentación accesible, tarjeta SIM insertada y servicio de datos activo.
- Conocimiento del APN del operador móvil y, opcionalmente, del nombre de usuario y contraseña del APN para la SIM.
- Capacidad para enviar y recibir SMS al rastreador para la configuración vía SMS.
- Acceso al método o software oficial de configuración de EElink y su documentación correspondiente a su versión de firmware.
- Una cuenta en Plaspy y la expectativa de que el dispositivo será registrado en la plataforma después de reportar correctamente.

## Cómo se conecta este rastreador a Plaspy

El TK116 utiliza GPRS 2G para enviar mensajes de posición GPS y eventos del dispositivo a un servidor remoto. Cuando se configura para Plaspy, el rastreador envía actualizaciones periódicas de ubicación y mensajes de alarma al endpoint compartido de Plaspy para que la plataforma pueda mostrar, alertar e informar sobre el dispositivo.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte de datos puede configurarse en UDP o TCP según las opciones del rastreador; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no necesita elegir un perfil específico de protocolo en la plataforma.
- Las actualizaciones de posición, el estado ACC y los eventos de alarma enviados por el TK116 quedan visibles en Plaspy para monitoreo e informes.
- Confirmar que el dispositivo reporta correctamente garantiza que aparecerá y se actualizará en el panel de Plaspy.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de EElink para el TK116 o prepárese para usar los comandos SMS documentados por el fabricante.
2. Configure el APN del equipo usando el comando SMS o la herramienta de configuración con el valor de APN de su operador.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Seleccione el protocolo de transporte UDP o TCP en el rastreador si el dispositivo requiere una selección de transporte.
5. Aplique o guarde la configuración en el rastreador y realice el reinicio o ciclo de energía recomendado.
6. Valide que el dispositivo reporte a Plaspy comprobando los parámetros (por ejemplo con un comando PARAM) y confirmando que el dispositivo sea visible y se actualice en Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS públicos se usan comúnmente con el TK116. Envíe cada comando como SMS al número del dispositivo. Preserve los marcadores de posición donde se indican.

1. Reinicio de fábrica opcional
```
FACTORY#
```
2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```
3. Establecer el APN del operador
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: [apn] es el APN del operador. Si su APN requiere usuario y contraseña incluya [apnu] y [apnp] respectivamente; omita los campos de usuario y contraseña si no los requiere su operador.

4. Configurar el servidor GPRS para usar el dominio de Plaspy (preferido)
```
SERVER,1,d.plaspy.com,8888#
```
o configurar el servidor GPRS para usar la dirección IP de Plaspy
```
SERVER,0,54.85.159.138,8888#
```

5. Establecer el intervalo de subida/actualización a 60 segundos
```
TIMER,60#
```

6. Verificar los parámetros actuales
```
PARAM#
```

Envíe estos comandos en el orden indicado cuando el orden sea importante, por ejemplo configure primero el APN antes de establecer el servidor. El FACTORY# es opcional y debe usarse únicamente cuando necesite restaurar los valores de fábrica.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware de EElink pueden cambiar el comportamiento de los comandos y la sintaxis SMS disponible; siempre verifique los comandos contra la documentación del firmware de su dispositivo.
- La configuración vía SMS es práctica para instalaciones en campo, pero el software del fabricante o las herramientas USB pueden estar disponibles para aprovisionamiento masivo o fuera de línea.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Use el dominio d.plaspy.com para un enrutamiento más sencillo basado en DNS o la IP 54.85.159.138 si no dispone de DNS en el entorno de instalación.
- El TK116 típicamente utiliza GPRS sobre redes 2G para reportar; confirme la cobertura de red y la adecuación del plan de datos con su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el TK116 con Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real, alertas por eventos y reportes operativos. Configurar el rastreador para que informe al endpoint y puerto compartidos de Plaspy permite a los administradores de flota monitorear centralizadamente la ubicación, el estado ACC y las alarmas, y aplicar reglas de la plataforma para notificaciones y análisis histórico.

Para saber más sobre Plaspy y cómo recibe datos de rastreadores compatibles como el EElink TK116 visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y guía de instalación consulte la documentación del fabricante en https://www.eelink.com.cn/ para verificar los pasos de configuración y la sintaxis de comandos, ya que el comportamiento del dispositivo puede cambiar con actualizaciones de firmware y hardware.

---
slug: /atrack/ax7/configuration
id: ax7-configuration
sidebar_label: Configuration
title: ATrack - AX7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ATrack AX7 a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración ATrack AX7
  - Configuración AX7 Plaspy
  - Guía ATrack AX7
  - Ajustes de servidor AX7
  - Configuración GPRS AX7
  - Rastreador GPS ATrack
  - Rastreador OBDII AX7
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos AX7
  - Comandos de configuración AX7
---

# ATrack - Configuración AX7

Esta página describe el contexto público de configuración para usar el ATrack AX7 con Plaspy. Consolida los ajustes de servidor que debe aplicar en el dispositivo, ofrece un flujo de trabajo práctico y muestra comandos de ejemplo cuando existen comandos de configuración públicos disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación del fabricante del AX7 y sus procedimientos de instalación.

## Resumen de la configuración

Este proceso prepara el AX7 para enviar datos de ubicación y eventos a Plaspy, de modo que los dispositivos queden visibles y gestionables en la plataforma. A continuación encontrará los detalles del endpoint de servidor que Plaspy requiere, un flujo de trabajo típico para aplicar los ajustes y comandos públicos de ejemplo en el formato proporcionado por el fabricante.

- Configure el AX7 para usar el endpoint de Plaspy y que los datos se dirijan a su cuenta.
- Establezca el transporte del dispositivo (UDP o TCP) y el puerto para que el rastreador pueda abrir una sesión GPRS hacia Plaspy.
- Active los reportes periódicos y por evento (por ejemplo, intervalos de seguimiento de 60 segundos y eventos ACC).
- Verifique el APN y la conectividad GPRS para asegurar que el dispositivo pueda alcanzar Plaspy desde la red móvil.
- Valide que el dispositivo esté reportando a Plaspy y consulte el estado del equipo con el comando de estado del AX7.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: supported over UDP or TCP; choose the transport required by your deployment
- Plaspy automatically detects the tracker protocol for incoming device connections

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBDII del vehículo o al dispositivo AX7 instalado para configurar o reiniciar.
- Una tarjeta SIM activa con datos habilitados y las credenciales APN correctas del operador móvil.
- Acceso al método o software de configuración del fabricante AX7; conserve las instrucciones del fabricante.
- Conocer el IMEI o identificador del dispositivo para confirmar qué unidad está reportando a Plaspy.
- Una cuenta Plaspy y acceso a la plataforma para verificar que el dispositivo sea visible tras la configuración.
- Familiaridad básica con la interfaz de comandos del AX7 o con la herramienta del proveedor usada para enviar comandos de configuración.

## Cómo se conecta este rastreador a Plaspy

El AX7 se configura para abrir una sesión GPRS y enviar datos de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico de los dispositivos en el mismo puerto para todos los rastreadores compatibles y determina automáticamente el protocolo del dispositivo.

- Informes de seguimiento periódicos enviados según el intervalo configurado (por ejemplo, cada 60 segundos).
- Reportes por eventos, como ACC encendido/apagado, que puede activar para reducir informes cuando el vehículo está inactivo.
- El formato de datos puede ajustarse a modo binario o a un modo compatible con la plataforma antes de enviar la información.
- El AX7 establece la conexión GPRS al IP o dominio del servidor Plaspy usando TCP o UDP en el puerto 8888.
- Plaspy procesa los paquetes entrantes y mapea el dispositivo por protocolo e identificador para que aparezca en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de ATrack para el AX7 (herramienta del fabricante, interfaz serie o canal de comandos remotos soportado).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la dirección IP 54.85.159.138 en la configuración del servidor del equipo.
3. Establezca el puerto del servidor en 8888 según lo requerido por Plaspy.
4. Elija UDP o TCP si el dispositivo requiere especificar el protocolo de transporte.
5. Proporcione las credenciales APN del operador móvil y cualquier ajuste relacionado con la SIM que el AX7 necesite para la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo de trabajo del AX7 lo exige.
7. Valide que el equipo reporte a Plaspy y que aparezca en la plataforma usando su cuenta Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo provienen del contenido público de configuración del fabricante para el AX7. Se muestran en el orden indicado por el fabricante. Reemplace los marcadores de posición por los datos del APN de su operador cuando sea necesario.

- Configure el reporte de eventos ACC y las acciones
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Defina el intervalo de seguimiento a 60 segundos
```
AT$TRAC=1,60,,,,,2
```

- Configure el formato de datos en modo binario
```
AT$FORM=1,@P,0,""
```

- Configure el servidor GPRS hacia Plaspy usando marcadores de APN y la IP y puerto de Plaspy
```
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Nota: [apn] es el nombre del APN del operador. [apnu] y [apnp] son los marcadores opcionales para usuario y contraseña del APN. Reemplace estos marcadores con las credenciales que exija su servicio móvil.

- Verificar el estado del dispositivo
```
AT$INFO=?
```

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y el orden de los parámetros; siempre verifique los comandos con la documentación del fabricante del AX7.
- La línea AT$GPRS en el ejemplo usa la IP y el puerto 8888 de Plaspy. Alternativamente, puede ingresar d.plaspy.com en herramientas de proveedor que acepten un nombre de dominio.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos transportes y detecta automáticamente el comportamiento del protocolo.
- Mantenga las credenciales APN seguras y verifique la conectividad de datos antes de depender del rastreo en producción.
- Si su instalación utiliza un servicio del proveedor o una herramienta de integrador, siga el método recomendado por ellos para escribir los parámetros en el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el ATrack AX7 ofrece un endpoint de servidor simple y estandarizado para que múltiples dispositivos se puedan configurar de forma coherente, mejorando la visibilidad de la flota y la supervisión operativa. Los ajustes compartidos de Plaspy reducen la complejidad en los despliegues y le permiten concentrarse en la colocación del dispositivo, la configuración del APN y las políticas de eventos.

Learn more about Plaspy and how it handles device ingestion and fleet management at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information and command reference on the ATrack site https://www.atrack.com.tw/.

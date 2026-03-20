---
slug: /jointech/jt707a/configuration
id: jt707a-configuration
sidebar_label: Configuration
title: Jointech - JT707A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT707A con ajustes de servidor Plaspy, comandos SMS y pasos de verificación
keywords:
  - Configuración Jointech JT707A
  - Configuración JT707A para Plaspy
  - Configuración de servidor Jointech JT707A
  - Configuración rastreador GPS JT707A
  - Dispositivos compatibles con Plaspy
  - Configuración SMS JT707A
  - Configuración rastreador de sello GPS
  - Seguimiento de flotas JT707A
  - Configuración APN JT707A
  - Configuración plataforma de rastreo
---

# Jointech - Configuración del JT707A

Esta página ofrece una visión pública de la configuración necesaria para usar el Jointech JT707A con la plataforma de rastreo Plaspy. Consolida la información esencial disponible públicamente, incluyendo ajustes de servidor, comandos de configuración por SMS que proporciona el fabricante y el flujo de verificación que usted usará para confirmar la conectividad con Plaspy.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JT707A puede configurarse usando comandos SMS del fabricante como los que se muestran a continuación, así que revise esta guía y la documentación oficial de Jointech al aplicar los ajustes.

## Resumen de la configuración

El proceso de configuración prepara el JT707A para enviar ubicación GNSS y telemetría de estado de sello a Plaspy. El objetivo principal es apuntar el dispositivo al endpoint compartido de Plaspy y verificar que los reportes lleguen a la plataforma.

- Configure el rastreador para enviar datos GPRS a Plaspy usando el endpoint y puerto compartidos del servidor.
- Proporcione el APN del dispositivo y, si es necesario, el usuario y la contraseña del APN mediante comandos SMS o la herramienta del fabricante.
- Seleccione transporte UDP o TCP en el dispositivo si es requerido; Plaspy acepta ambos en el mismo puerto.
- Guarde y aplique los ajustes, luego verifique que el rastreador aparezca en Plaspy y envíe eventos de ubicación y estado de sello.
- Valide las alertas por manipulación/desellado y los intervalos de reporte para que coincidan con los requisitos de batería y auditoría del despliegue.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte: UDP o TCP (el dispositivo puede configurarse usando UDP o TCP en el puerto 8888)  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de configurar

- Un dispositivo JT707A con alimentación y con ID del dispositivo conocido para acceso vía SMS o herramienta de configuración.  
- Una SIM activa con datos habilitados y el APN correcto para el operador de la SIM. Es necesario que la SIM permita enviar y recibir SMS si va a usar configuración por SMS.  
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración del JT707A.  
- Un teléfono o consola capaz de enviar SMS al dispositivo, o acceso al software del proveedor usado para el aprovisionamiento.  
- Conocimientos básicos del formato del ID de dispositivo usado en los comandos y de las credenciales APN de su operador.

## Cómo se conecta este rastreador a Plaspy

El JT707A se configura para enviar fixes GNSS y actualizaciones de estado de sello al endpoint y puerto del servidor Plaspy para que la plataforma registre ubicación, registros de eventos y alertas.

- El dispositivo reporta al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos en el mismo puerto.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo servidor y puerto se usan para múltiples modelos.  
- Las actualizaciones de ubicación y los eventos de sello/manipulación se mapean en los paneles de Plaspy para monitoreo y alertas.  
- Una conectividad correcta brinda visibilidad continua y un historial de eventos auditable en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el JT707A (comandos SMS o herramienta de aprovisionamiento del proveedor).  
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según las opciones de entrada del dispositivo.  
3. Establezca el puerto del servidor en 8888. Recuerde que todos los dispositivos en Plaspy usan el mismo puerto.  
4. Seleccione el transporte UDP o TCP en el dispositivo si este requiere que elija un protocolo de transporte.  
5. Proporcione los datos APN y cualquier usuario o contraseña del APN que requiera su SIM usando los comandos del fabricante.  
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo necesita reiniciarse para aplicar los ajustes de red.  
7. Valide que el dispositivo reporta a Plaspy y que los eventos de ubicación y sello aparezcan en la plataforma.

## Ejemplos de comandos de configuración

La documentación del fabricante del JT707A provee comandos SMS para establecer el servidor GPRS y el APN. Reemplace los marcadores antes de enviar. Envíe estos mensajes SMS al número configurado del dispositivo.

1. Establecer el servidor GPRS y el APN (reemplace [trackerID] y [apn]):
```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
- Explicación: [trackerID] es el identificador del dispositivo requerido por el formato de comando SMS del JT707A. [apn] es el nombre del punto de acceso (Access Point Name) del operador de la SIM.

2. (Opcional) Establecer usuario y contraseña del APN si su operador requiere credenciales (reemplace [trackerID], [apnu] y [apnp]):
```
([trackerID],2,S24,129,1,[apnu],[apnp])
```
- Explicación: [apnu] es el nombre de usuario del APN y [apnp] es la contraseña del APN. Omita este comando si el APN no requiere usuario ni contraseña.

Nota: El orden anterior es importante para configuraciones típicas: primero establezca el servidor y el APN, luego proporcione las credenciales del APN si son necesarias. Las herramientas del fabricante pueden ofrecer campos equivalentes en una interfaz gráfica en lugar de SMS.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos SMS disponibles o el formato de los parámetros. Confirme siempre los comandos contra la documentación del dispositivo para su firmware específico.  
- La configuración por SMS es pública y se usa comúnmente para el aprovisionamiento del JT707A; una herramienta de aprovisionamiento del proveedor puede ofrecer los mismos ajustes en una GUI.  
- Elija UDP o TCP según la confiabilidad de su red local y la guía del dispositivo; Plaspy acepta cualquiera de los dos en el puerto 8888.  
- Mantenga los marcadores de posición cuando prepare los comandos y reemplácelos por valores específicos del dispositivo como el ID del rastreador y las credenciales APN del operador.  
- Después de aplicar los ajustes de red, espere el tiempo necesario para que el dispositivo se registre en la red móvil y para que los primeros paquetes lleguen a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el JT707A con Plaspy ofrece visibilidad centralizada tanto de la ubicación como de la integridad del sello para carga y activos, lo que permite a los equipos de operaciones detectar manipulaciones y seguir movimientos en tiempo real. Apuntar el JT707A al endpoint compartido de Plaspy simplifica el aprovisionamiento en una flota mixta porque Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

Aprenda más sobre Plaspy y cómo puede integrarse con el JT707A en el sitio principal https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, notas de firmware y la sintaxis de comandos más recientes, siempre verifique los detalles en el sitio del fabricante https://www.jointcontrols.com/

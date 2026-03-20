---
slug: /jointech/jt704/configuration
id: jt704-configuration
sidebar_label: Configuration
title: Jointech - JT704 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Jointech JT704 y conectarlo a Plaspy con los ajustes de servidor necesarios
keywords:
- Jointech JT704
- Configuración JT704
- Configuración Jointech JT704
- Configuración JT704 para Plaspy
- Configuración del tracker Jointech
- Configuración de rastreador de contenedores
- Configuración de rastreador GPS
- Guía de configuración Plaspy
- Configuración de seguimiento de flotas
- Configuración GPS para contenedores
---

# Jointech - Configuración del JT704

Esta página explica cómo configurar públicamente el tracker de contenedores Jointech JT704 para integrarlo con Plaspy. Resume los pasos prácticos y los comandos públicos necesarios para que el dispositivo envíe ubicación y estado a Plaspy, usando los ajustes de servidor compartidos que Plaspy espera.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JT704 admite configuración vía SMS tal como se muestra en los ejemplos más abajo; siga la documentación oficial del fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es preparar el JT704 para comunicarse de forma fiable con Plaspy, de modo que la ubicación, los reportes programados y el estado del dispositivo sean visibles en la plataforma. Los ajustes públicos que aparecen a continuación son los valores que deberá aplicar en el equipo o mediante las herramientas de Jointech para que Plaspy reciba e interprete los mensajes del tracker.

- Configure el tracker para que reporte a Plaspy introduciendo el dominio o IP del servidor de Plaspy y el puerto compartido que usa Plaspy.  
- Asegúrese de que el APN y, si procede, las credenciales del APN estén configuradas para que el tracker pueda usar datos móviles y reportar por GPRS.  
- Seleccione UDP o TCP como transporte en el dispositivo si requiere una selección explícita; Plaspy admite ambos.  
- Guarde y aplique la configuración, reinicie el tracker si es necesario y valide que el dispositivo aparece y reporta en Plaspy.  
- Use comandos SMS o la herramienta de configuración del fabricante proporcionada por Jointech para aplicar los ajustes cuando sea necesaria configuración remota.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (All devices in Plaspy use the same port)  
- Transport: UDP or TCP supported by the device on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol for incoming connections

## Requisitos típicos antes de empezar

- El tracker debe estar alimentado y accesible para la configuración (batería cargada o conectado a una fuente de energía según sea necesario).  
- SIM celular activa con datos y SMS habilitados y con el APN conocido del operador.  
- Identificador del dispositivo o ID de fábrica del tracker (necesario en algunos comandos SMS para modelos Jointech).  
- Acceso al método oficial de configuración de Jointech, como la interfaz de comandos SMS o el software del fabricante.  
- Cobertura celular en la ubicación de instalación para permitir conexiones GPRS a Plaspy.  
- Permiso para enviar SMS al dispositivo o para usar la herramienta de aprovisionamiento del fabricante.

## Cómo se conecta este tracker a Plaspy

Al configurarlo, el JT704 envía ubicación y estado al endpoint del servidor Plaspy para que la plataforma muestre posiciones en tiempo real, check-ins programados y el estado del dispositivo.

- El tracker se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Los reportes pueden usar transporte UDP o TCP según la configuración del dispositivo y el comportamiento de la red.  
- Plaspy detecta y decodifica automáticamente el protocolo del tracker para los mensajes entrantes.  
- Los reportes incluyen mensajes de check-in del dispositivo que Plaspy procesa para vistas en mapa en tiempo real y reproducción histórica.  
- El soporte para estado del dispositivo y reportes programados permite que Plaspy muestre alertas como batería baja o check-ins faltantes.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Jointech o al software, o prepárese para enviar comandos SMS soportados por el JT704.  
2. Introduzca la dirección del servidor Plaspy en la configuración del equipo: d.plaspy.com o la IP 54.85.159.138.  
3. Ajuste el puerto del dispositivo a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).  
4. Seleccione UDP o TCP si el dispositivo exige una selección explícita de transporte.  
5. Aplique o guarde la configuración en el tracker y envíe los SMS necesarios para confirmar los ajustes si es requerido.  
6. Reinicie el equipo si el fabricante lo recomienda o si el dispositivo necesita un reinicio para aplicar la configuración de red.  
7. Valide que el tracker reporta a Plaspy y aparece en la plataforma con la ubicación y los reportes programados esperados.

## Comandos de configuración de ejemplo

El JT704 soporta configuración vía SMS. Los comandos públicos de Jointech que se muestran abajo indican cómo establecer el servidor GPRS y el APN, y opcionalmente las credenciales del APN. Reemplace los marcadores por sus valores reales y envíe cada línea como un SMS desde un número autorizado al tracker.

1. Establecer servidor GPRS y APN (reemplace {{trackerID}} y [apn]):
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```

2. (Opcional) Establecer usuario y contraseña del APN si su operadora los requiere (reemplace {{trackerID}}, [apnu] y [apnp]):
```text
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores:
- {{trackerID}} — el ID del dispositivo o identificador que usa el JT704 para dirigir los comandos. Obténgalo del equipo o de la documentación de Jointech.  
- [apn] — la cadena APN de la red móvil necesaria para el acceso de datos GPRS.  
- [apnu] — nombre de usuario del APN opcional cuando el operador requiere autenticación.  
- [apnp] — contraseña del APN opcional cuando el operador la requiere.

Si su implementación requiere seleccionar UDP o TCP explícitamente y el conjunto de comandos SMS anterior no incluye un parámetro de transporte, use la herramienta de configuración de Jointech o consulte el manual del dispositivo para el parámetro SMS específico que ajusta el modo de transporte.

## Notas de configuración

- La configuración vía SMS es soportada por el JT704 y es un método común para provisionar dispositivos en campo.  
- Los comandos de usuario y contraseña del APN son opcionales y solo deben enviarse si el operador exige autenticación.  
- Diferentes versiones de firmware o variantes regionales del JT704 pueden usar formatos de comando ligeramente distintos; verifique los comandos contra el manual del equipo.  
- Elija UDP o TCP según la fiabilidad de la red y las reglas de firewall; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Revise siempre la documentación oficial de Jointech para la sintaxis SMS exacta y parámetros adicionales antes de desplegar masivamente.

## Por qué usar Plaspy con esta configuración

Usar el JT704 con Plaspy proporciona a los equipos logísticos visibilidad centralizada del movimiento de contenedores con soporte tanto para reportes en tiempo real como programados. Los ajustes de servidor compartidos de Plaspy simplifican el aprovisionamiento en flotas, ya que todos los dispositivos compatibles reportan al mismo endpoint y puerto mientras Plaspy se encarga de la detección de protocolo, reduciendo la complejidad de parseo por dispositivo.

Para saber más sobre Plaspy y cómo gestiona la conectividad y el rastreo de dispositivos, visite https://www.plaspy.com. Los métodos de configuración por dispositivo, el comportamiento del firmware y detalles del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar las instrucciones más recientes del JT704 y la sintaxis de comandos en el sitio oficial de Jointech https://www.jointcontrols.com/.

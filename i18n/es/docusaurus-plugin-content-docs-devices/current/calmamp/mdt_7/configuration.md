---
slug: /calmamp/mdt_7/configuration
id: mdt_7-configuration
sidebar_label: Configuration
title: CalmAmp - MDT-7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CalmAmp MDT-7 con Plaspy, incluye ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración CalmAmp MDT-7
  - Instalación CalmAmp MDT-7
  - Configuración MDT-7 Plaspy
  - Configuración rastreador Plaspy
  - Configuración GPS CalmAmp
  - Ajustes servidor MDT-7
  - Integración rastreo vehicular
  - Configuración GSM SMS
  - Configuración GPRS servidor
  - Configuración gestor de flotas
---

# CalmAmp - Configuración del MDT-7

Esta página describe el contexto público de configuración para usar el CalmAmp MDT-7 con Plaspy. Resume los ajustes compartidos del servidor de Plaspy, pasos prácticos de preparación y ejemplos de comandos SMS basados en información pública del dispositivo. Use esta guía para preparar el MDT-7 para que reporte a Plaspy y para identificar la información que necesitará antes de comenzar.

Plaspy emplea ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; trate los comandos y el flujo aquí como una guía práctica pública y confirme con la documentación actual de CalmAmp.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el MDT-7 listo para comunicarse de forma confiable con la plataforma Plaspy, de modo que la ubicación y los eventos aparezcan en su cuenta. El MDT-7 puede configurarse mediante comandos SMS o herramientas del fabricante para definir las credenciales de red, el servidor GPRS y el puerto de reporte, de forma que el dispositivo o el LMU conectado envíen telemetría a Plaspy.

- Configure el APN del operador y, si aplica, las credenciales APN para habilitar el tráfico GPRS.
- Apunte el dispositivo o el LMU conectado al endpoint del servidor de Plaspy para enrutar los reportes.
- Establezca el puerto compartido de Plaspy y elija UDP o TCP según lo requiera el equipo.
- Reinicie el dispositivo para aplicar los ajustes y valide la conectividad con Plaspy.
- Utilice los comandos de respuesta del dispositivo para verificar el MID o la configuración actual antes y después de los cambios.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado: UDP o TCP según las opciones de configuración del equipo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un MDT-7 con alimentación y accesible, y cualquier LMU CalAmp conectado que transporte telemetría por la red celular
- Una tarjeta SIM con datos y servicio SMS activo insertada en el dispositivo o en el LMU según corresponda
- El MID del dispositivo o el ID único obtenido mediante el comando de consulta del fabricante
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración del MDT-7 o del LMU conectado
- Cobertura de red y conectividad GPRS del operador móvil instalado
- Credenciales del APN del operador, como apn, nombre de usuario apn y contraseña apn si son necesarias

## Cómo se conecta este rastreador a Plaspy

La plataforma MDT-7 normalmente envía la información capturada a través de la red celular mediante un LMU CalAmp conectado o por el canal de datos del propio dispositivo hacia un servidor GPRS configurado. Para integrar con Plaspy, el dispositivo se apunta al endpoint y puerto del servidor de Plaspy para que los mensajes de ubicación y eventos lleguen automáticamente.

- El rastreador o el LMU conectado se configura para enviar tráfico GPRS al endpoint o IP del servidor Plaspy
- Los reportes llegan al puerto compartido de Plaspy para que la plataforma reciba la telemetría
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo inicia el reporte
- Los eventos y el estado del dispositivo se vuelven visibles en Plaspy después de que el dispositivo se registre y envíe datos
- La verificación se realiza comprobando las respuestas del dispositivo y observando los datos entrantes en Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CalmAmp para el MDT-7 o el LMU conectado, como comandos SMS o la herramienta de configuración de CalmAmp.  
2. Obtenga el MID del dispositivo usando el comando de consulta del fabricante antes de hacer cambios, de modo que pueda dirigir comandos SMS si es necesario.  
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo o del LMU.  
4. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.  
6. Guarde o aplique la configuración y reinicie el dispositivo o el LMU si es necesario para aplicar los ajustes.  
7. Valide que el dispositivo reporte a Plaspy comprobando las respuestas del equipo y monitoreando los datos entrantes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El MDT-7 y algunos dispositivos CalAmp pueden configurarse por SMS. Los siguientes comandos públicos se ofrecen en el mismo orden que la guía del fabricante. Los comandos suponen que incluye la identificación del dispositivo requerida al enviar SMS si su flujo de trabajo lo exige. El ID del dispositivo es el MID de 10 dígitos que devuelve el comando de consulta !R0.

- Establecer el APN del operador
```
!RP,2306,0,[apn]
```

- Establecer el nombre de usuario del APN (si es necesario)
```
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN (si es necesario)
```
!RP,2315,0,[apnp]
```

- Configurar el servidor GPRS a la IP de Plaspy
```
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor a 8888 de Plaspy
```
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes
```
!R3,70,0
```

- Consultar la configuración actual (comando de verificación)
```
!RO
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN del operador móvil necesaria para la conectividad de datos.  
- [apnu] es el nombre de usuario del APN si su operador lo exige.  
- [apnp] es la contraseña del APN si su operador la exige.  
Mantenga los marcadores visibles y reemplácelos por los valores correctos de su operador al enviar comandos SMS.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los parámetros disponibles; confirme los comandos según el firmware instalado en su equipo.  
- El entorno del MDT-7 a menudo utiliza un LMU CalAmp conectado para el transporte celular; siga el flujo de comandos específico del LMU o del dispositivo según su instalación.  
- Elija UDP o TCP según la red local y la capacidad del dispositivo; ambos transportes son compatibles con Plaspy pero el comportamiento del equipo puede variar.  
- La configuración por SMS es útil en instalaciones de campo donde el acceso a herramientas directas del equipo es limitado; asegúrese de enviar los SMS al dispositivo correcto y de usar el MID cuando se requiera.  
- Después de configurar, valide el reporte observando el dispositivo en Plaspy y confirmando que aparece y actualiza ubicación o estado.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp MDT-7 con Plaspy ofrece una manera práctica de centralizar flujos de trabajo de vehículo y conductor y de capturar telemetría y eventos en una sola plataforma de gestión de flotas. Configurar el rastreador o su LMU para que apunte a Plaspy brinda visibilidad operacional de ubicaciones y estados sin necesidad de servidores específicos por dispositivo.

Learn more about Plaspy and available integrations at https://www.plaspy.com. Please verify the latest device specific configuration steps, firmware behavior, and command syntax with the manufacturer at http://www.calamp.com/ since device methods and details can change over time.

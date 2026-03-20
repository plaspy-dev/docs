---
slug: /calmamp/lmu_3000/configuration
id: lmu_3000-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-3000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del CalmAmp LMU-3000 para ajustes de servidor Plaspy y pasos prácticos por SMS y GPRS
keywords:
  - configuración CalmAmp LMU-3000
  - instalación CalmAmp LMU-3000
  - configuración de seguimiento CalmAmp
  - configuración LMU-3000 Plaspy
  - configuración de servidor LMU-3000
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS
  - instalación de rastreador de vehículo
  - configuración de rastreador OBD II
  - configuración GPRS UDP LMU-3000
---

# CalmAmp - Configuración del LMU-3000

Esta página explica el contexto público de configuración para usar el CalAmp LMU-3000 con Plaspy. Detalla los ajustes de servidor prácticos y los comandos públicos de configuración que se emplean comúnmente para apuntar el rastreador al endpoint de Plaspy, de modo que el dispositivo pueda enviar ubicación y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-3000 soporta GPRS y UDP, y puede configurarse mediante comandos SMS o herramientas de CalAmp según el flujo de trabajo del instalador.

## Visión general de la configuración

El proceso de configuración prepara el LMU-3000 para comunicarse de forma fiable con Plaspy indicando el servidor y puerto correctos, seleccionando el transporte y verificando la conectividad. Cuando todo está configurado correctamente, el rastreador comenzará a reportar la ubicación del vehículo y los eventos a Plaspy para su visualización y monitoreo.

- Establecer los parámetros GPRS y de red del rastreador para que pueda alcanzar Plaspy
- Configurar el endpoint de servidor y el puerto usados por Plaspy para todos los dispositivos
- Seleccionar el transporte (UDP o TCP) si el dispositivo exige una elección
- Reiniciar o reiniciar el dispositivo para aplicar los ajustes y comenzar a reportar
- Verificar el envío de datos del dispositivo para confirmar visibilidad dentro de Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el LMU-3000:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la detección automática de protocolo ayuda a la plataforma a aceptar conexiones de diversas implementaciones de rastreadores.

## Requisitos típicos antes de configurar

- Un LMU-3000 instalado y con alimentación, con acceso al puerto OBD II del vehículo o conexión de instalador
- SIM activa con datos habilitados y valores APN correctos para el operador móvil
- Acceso al método de configuración del fabricante para el dispositivo, como comandos SMS o software de configuración de CalAmp
- Conocimiento básico del ID del dispositivo o MID requerido por algunos flujos de configuración por SMS
- Ventana de mantenimiento para reiniciar o probar el dispositivo y validar el reporte a la plataforma
- Permisos apropiados para cambiar ajustes del dispositivo y administrar dispositivos dentro de Plaspy

## Cómo se conecta este rastreador a Plaspy

El LMU-3000 está configurado para enviar mensajes de ubicación y eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo apunta a Plaspy, entregará actualizaciones de posición y eventos configurados, y Plaspy interpretará los mensajes entrantes detectando el protocolo de forma automática.

- El dispositivo envía mensajes GPRS al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138
- Los mensajes se envían al puerto 8888, que usa Plaspy para todos los dispositivos compatibles
- El transporte puede ser UDP o TCP según la configuración del rastreador y el comportamiento de la red
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los datos entrantes
- El reporte permite la visibilidad de la posición y los eventos en Plaspy para monitoreo y análisis

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el LMU-3000 (comandos SMS, herramienta de CalAmp o aprovisionamiento del proveedor)
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera la herramienta
3. Configure el puerto del servidor a 8888 en la configuración del dispositivo
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte
5. Aplique o guarde los cambios de configuración en el dispositivo
6. Reinicie o vuelva a arrancar el rastreador si es necesario para aplicar los nuevos ajustes
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma

## Comandos de configuración de ejemplo

El LMU-3000 puede configurarse enviando comandos SMS al dispositivo. Los comandos siguientes son los comandos públicos para establecer APN, servidor, puerto y reiniciar el rastreador. El dispositivo responde con un valor MID; el ID es el MID de 10 dígitos que responde el comando !R0. Mantenga los marcadores tal como aparecen al reemplazarlos por los valores del operador.

- Establecer el APN del operador
```
!RP,2306,0,[apn]
```

- Establecer el nombre de usuario del APN del operador (si se requiere)
```
!RP,2314,0,[apnu]
```

- Establecer la contraseña del APN del operador (si se requiere)
```
!RP,2315,0,[apnp]
```

- Establecer el servidor GPRS a Plaspy usando la IP pública
```
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor usado por Plaspy
```
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar cambios (opcional cuando sea necesario)
```
!R3,70,0
```

- Verificar la configuración actual del dispositivo
```
!RO
```

Notas sobre los marcadores
- [apn] es la cadena APN del operador móvil
- [apnu] es el usuario APN cuando el operador lo requiere
- [apnp] es la contraseña APN cuando el operador la requiere

Envíe cada comando como un SMS al rastreador siguiendo las instrucciones del fabricante. El orden anterior es convencional: primero configure el APN y las credenciales, luego el servidor y puerto, y finalmente reinicie para aplicar. El MID devuelto por el comando !R0 se usa en algunos flujos como identificador del dispositivo.

## Notas de configuración

- Las diferencias de firmware y de herramientas pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme siempre el conjunto exacto de comandos para la revisión de firmware instalada.
- El LMU-3000 soporta configuración vía SMS como se muestra arriba; los instaladores también pueden usar las herramientas de aprovisionamiento de CalAmp cuando estén disponibles.
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Use d.plaspy.com o la IP 54.85.159.138 de forma indistinta cuando la herramienta de configuración lo permita; asegúrese de aplicar el puerto 8888.
- Cuando sea posible, realice una prueba de conectividad en el vehículo después del reinicio para confirmar que el dispositivo alcanza Plaspy correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el CalAmp LMU-3000 para reportar a Plaspy ofrece una vía sencilla hacia la visibilidad de la flota, el monitoreo de eventos y la supervisión operativa. Usar los ajustes de servidor compartidos y el mismo puerto facilita el despliegue en múltiples dispositivos, mientras que la detección automática de protocolos de Plaspy reduce la necesidad de seleccionar manualmente el protocolo.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup, firmware behavior, and manufacturer details at the CalAmp website http://www.calamp.com/ to ensure your installation follows current guidance.

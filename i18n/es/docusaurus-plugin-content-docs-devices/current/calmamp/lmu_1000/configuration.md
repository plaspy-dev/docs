---
slug: /calmamp/lmu_1000/configuration
id: lmu_1000-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-1000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-1000 con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración CalmAmp LMU 1000
  - Configuración LMU 1000 CalmAmp
  - LMU 1000 Plaspy
  - Configuración servidor LMU 1000
  - Configuración rastreador GPS CalmAmp
  - Comandos SMS LMU 1000
  - Ajustes servidor Plaspy
  - Configuración rastreo vehicular
  - Configuración APN proveedor LMU 1000
  - Configuración plataforma rastreador GPS
---

# CalmAmp - Configuración LMU-1000

Esta página ofrece información pública de configuración para usar el CalmAmp LMU-1000 con Plaspy. Resume los pasos prácticos y los comandos públicos que se emplean comúnmente para apuntar el rastreador a Plaspy, explica qué preparar antes de la integración e incluye ejemplos de comandos SMS extraídos de contenido público de configuración del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del LMU-1000 y los comandos proporcionados sirven de base para la orientación que sigue, pero siempre verifique las instrucciones específicas del dispositivo en la documentación del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el LMU-1000 para que se conecte de forma fiable al backend de Plaspy, reporte datos de ubicación y eventos, y aparezca en su flota en Plaspy. Para unidades LMU-1000, la configuración documentada públicamente suele usar comandos por SMS para establecer el APN y los detalles del servidor GPRS, y reiniciar el dispositivo para que los cambios surtan efecto.

- Configure el APN del operador para que el dispositivo pueda establecer conectividad de datos GPRS.
- Apunte el dispositivo al dominio o IP del servidor de Plaspy para que la telemetría llegue al backend.
- Establezca el puerto compartido de Plaspy para que el rastreador envíe datos al endpoint correcto.
- Opcionalmente, configure el usuario y la contraseña del APN si el proveedor móvil requiere autenticación.
- Reinicie o reinicie el rastreador tras aplicar los ajustes para asegurar que se usen los nuevos valores.
- Verifique la configuración usando el comando de lectura del dispositivo para confirmar los valores.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port

Estos valores son los ajustes públicos de conexión de Plaspy que debe aplicar al configurar el LMU-1000 para que el dispositivo pueda entregar sus datos a Plaspy.

## Requisitos típicos antes de configurar

- Una tarjeta SIM funcional con datos y capacidad de SMS instalada en el LMU-1000, y señal suficiente del operador.
- Capacidad para enviar comandos SMS al dispositivo desde un teléfono o un gateway SMS si la configuración se realiza por SMS.
- Acceso al ID del dispositivo (MID) tal como lo devuelve el comando de respuesta del dispositivo.
- El dispositivo debe estar alimentado o disponer de batería de respaldo suficiente para recibir y aplicar comandos de configuración por SMS.
- Documentación del fabricante o guía de configuración para la revisión de firmware específica del LMU-1000.
- Un plan de pruebas para confirmar que el dispositivo reporta correctamente a Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el LMU-1000 envía su telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar y mostrar los datos. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente, por lo que los puntos clave de configuración son el APN y el endpoint del servidor.

- El rastreador utiliza datos GPRS para conectarse al dominio o IP del servidor configurado.
- Los mensajes de telemetría y eventos se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede seleccionar transporte UDP o TCP en el dispositivo si fuera necesario; Plaspy soporta ambos.
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador.
- Una vez conectado, la visibilidad del dispositivo y los reportes básicos estarán disponibles en Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de CalAmp para su LMU-1000, usando comandos SMS o la herramienta de configuración aprobada por CalAmp según lo requiera su dispositivo y firmware.
2. Configure el APN del operador móvil para que la unidad pueda establecer conexión GPRS.
3. Introduzca el servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar transporte.
5. Guarde o aplique la configuración en el dispositivo o mediante comandos SMS.
6. Reinicie el rastreador si es necesario para que se apliquen los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y confirme su visibilidad en la plataforma.

## Ejemplos de comandos de configuración

Los siguientes comandos de ejemplo proceden del contenido público de configuración del modelo LMU-1000. Son comandos SMS enviados al dispositivo. El ID del dispositivo es el MID de 10 dígitos que responde al comando !R0. Mantenga y reemplace los marcadores según corresponda para su operador y equipo.

- Set the operator APN
```text
!RP,2306,0,[apn]
```

- Set the APN operator username (if required)
```text
!RP,2314,0,[apnu]
```

- Set the APN operator password (if required)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to the Plaspy server IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker (use when required to apply changes)
```text
!R3,70,0
```

- Check the current settings
```text
!RO
```

Notas sobre los marcadores:
- [apn] es la cadena APN del operador móvil requerida por el proveedor.
- [apnu] es el nombre de usuario del APN cuando el proveedor exige autenticación.
- [apnp] es la contraseña del APN cuando el proveedor exige autenticación.

Siga el orden anterior cuando el orden importe y verifique las respuestas del dispositivo después de cada paso. El dispositivo puede responder con su MID o mensajes de estado; el MID suele devolverse con el comando !R0.

## Notas de configuración

- La configuración por SMS aparece en el contenido público del modelo; algunos instaladores usan herramientas del proveedor o un método de configuración cableado según el hardware y el firmware.
- Las revisiones de firmware pueden cambiar la sintaxis de los comandos y los parámetros disponibles; confirme los formatos de comando para su versión de firmware del LMU-1000.
- Elija UDP o TCP según sus necesidades de diagnóstico y el comportamiento de la red; Plaspy soporta ambos y detecta protocolos automáticamente.
- Los ajustes del servidor Plaspy emplean el mismo puerto para todos los dispositivos, por lo que siempre defina el puerto 8888 al configurar un rastreador para Plaspy.
- Si el proveedor móvil requiere autenticación del APN, incluya los comandos de nombre de usuario y contraseña del APN con los marcadores adecuados.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-1000 para que reporte a Plaspy ofrece a las organizaciones una forma directa de integrar datos económicos de gestión de activos y rastreo vehicular en una plataforma unificada. Usar los ajustes compartidos de servidor Plaspy y los comandos SMS de ejemplo arriba permite a instaladores y administradores de flota apuntar múltiples unidades al mismo backend con rapidez, confiando en que Plaspy detectará e interpretará el protocolo del rastreador.

Para obtener más información sobre Plaspy y cómo puede mostrar y gestionar dispositivos como el LMU-1000, visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo más recientes, detalles de firmware y la guía del fabricante, verifique la información en el sitio oficial de CalAmp http://www.calamp.com/ ya que las especificaciones y los pasos de instalación pueden cambiar con el tiempo.

---
slug: /calmamp/ttu_700/configuration
id: ttu_700-configuration
sidebar_label: Configuration
title: CalmAmp - TTU-700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CalmAmp TTU-700 y apuntarlo a los servidores de Plaspy vía UDP o TCP en el puerto 8888
keywords:
  - CalmAmp TTU 700 configuración
  - Configuración CalmAmp TTU 700
  - TTU 700 configuración Plaspy
  - TTU 700 configuración servidor
  - Comandos SMS TTU 700
  - configuración rastreo remolque
  - configuración seguimiento flota
  - ajustes servidor rastreador GPS
  - integración rastreador activos
  - configuración rastreador Plaspy
---

# CalmAmp - Configuración TTU-700

Esta página ofrece el contexto público de configuración para usar el CalmAmp TTU-700 con la plataforma de gestión de flotas Plaspy. Reúne los comandos públicos conocidos del fabricante y los ajustes de servidor requeridos por Plaspy para que pueda preparar el TTU-700 y reportar a Plaspy sin depender de documentación privada o propietaria.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TTU-700 admite métodos de configuración por SMS y GPRS y los comandos mostrados aquí reflejan ejemplos publicados de comandos SMS para establecer APN, servidor y puerto.

## Resumen de la configuración

El objetivo de esta configuración es apuntar el TTU-700 a Plaspy para que el dispositivo envíe sus datos de ubicación y eventos de forma fiable a la plataforma y aparezca como un activo activo en su cuenta Plaspy. El TTU-700 puede configurarse mediante comandos SMS (según lo publicado) o con herramientas del fabricante que soporten actualizaciones OTA como PULS cuando estén disponibles.

- Configure el APN del dispositivo y las credenciales de APN opcionales para que la unidad pueda establecer conexión de datos móviles
- Establezca el endpoint GPRS del servidor en Plaspy para enrutar la telemetría a la plataforma
- Configure el puerto para que coincida con Plaspy y elija transporte UDP o TCP si el dispositivo lo requiere
- Reinicie o vuelva a arrancar el dispositivo para aplicar los cambios y verifique con el comando de estado del equipo
- Valide que el dispositivo esté reportando a Plaspy y sea visible en la plataforma Plaspy

## Ajustes de servidor de Plaspy

Al configurar el TTU-700 para Plaspy, use los siguientes ajustes públicos de servidor exactamente como se muestran:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar el alta de dispositivos.

## Requisitos típicos antes de la configuración

- Asegúrese de que el TTU-700 esté alimentado y en un estado listo para recibir comandos de configuración
- Una tarjeta SIM con un plan de datos válido y el APN correcto para su operador móvil
- Capacidad para enviar SMS al dispositivo si usa configuración por SMS, o acceso a la herramienta de configuración del fabricante o PULS si usa OTA
- Cobertura de red GSM GPRS en la ubicación de la unidad
- Acceso al MID del dispositivo o al método de identificación que use CalmAmp para autenticación de comandos
- Un plan para validar la conectividad en la plataforma Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TTU-700 envía datos de ubicación y eventos al endpoint de Plaspy configurado en el dispositivo para que sus activos aparezcan en la plataforma y generen alertas y eventos de telemetría. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, y Plaspy detecta el protocolo automáticamente para los modelos compatibles.

- El dispositivo establece la conexión de datos móviles usando el APN configurado
- El rastreador envía mensajes UDP o TCP a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy recibe los mensajes y asigna el dispositivo a su cuenta según el ID reportado
- La telemetría y los eventos se vuelven visibles en Plaspy para monitoreo e informes
- La detección automática de protocolo en Plaspy reduce la necesidad de seleccionar manualmente el protocolo del rastreador en la mayoría de los casos

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración CalmAmp para el TTU-700 usando comandos SMS o las herramientas suministradas por el fabricante como PULS o el software del proveedor.
2. Obtenga el MID o ID del dispositivo según lo requiera el equipo enviando el comando de estado o ID a la unidad.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 y elija transporte UDP o TCP si la configuración del equipo exige seleccionar un protocolo de transporte.
5. Configure el APN del operador y el nombre de usuario y contraseña de APN opcionales para que la unidad pueda abrir sesión GPRS.
6. Guarde o aplique la configuración y reinicie o reinicie el dispositivo si es necesario para que los ajustes surtan efecto.
7. Valide que el TTU-700 reporte a Plaspy y aparezca como dispositivo activo en la plataforma.

## Ejemplos de comandos de configuración

El TTU-700 ofrece una interfaz pública de comandos SMS para configuración. A continuación están los comandos SMS publicados comúnmente en orden. El dispositivo responde con un MID cuando solicita información usando el comando !R0 y ese MID puede ser requerido por el equipo para comandos autenticados.

- Para solicitar el MID o ID del dispositivo, envíe:
```
!R0
```

- Establecer el APN del operador (reemplazar {{apn}} con el APN de su operador):
```
!RP,2306,0,{{apn}}
```

- Opcionalmente establecer el usuario del APN si su operador lo requiere (reemplazar {{apnu}}):
```
!RP,2314,0,{{apnu}}
```

- Opcionalmente establecer la contraseña del APN si su operador lo requiere (reemplazar {{apnp}}):
```
!RP,2315,0,{{apnp}}
```

- Establecer el servidor GPRS a Plaspy usando la IP pública de Plaspy:
```
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor a 8888:
```
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes (recomendado después de la configuración):
```
!R3,70,0
```

- Para verificar la configuración actual en la unidad:
```
!RO
```

Notas sobre los marcadores
- {{apn}} es la cadena APN de su operador
- {{apnu}} es el usuario APN si su operador lo requiere
- {{apnp}} es la contraseña APN si su operador lo requiere

Al enviar comandos SMS, obtenga el MID del dispositivo usando el comando !R0 e incluya el ID del equipo si su unidad lo requiere para aceptar comandos. El formato exacto de autenticación por SMS puede depender del firmware y la región.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los códigos de parámetros o el formato de comandos; siempre verifique la guía actual de CalmAmp para el TTU-700.
- Puede elegir UDP o TCP cuando el dispositivo requiera selección de transporte; Plaspy aceptará cualquiera de los dos y detectará automáticamente el protocolo usado.
- La configuración por SMS está documentada públicamente para este equipo y puede ser útil para instalaciones remotas o en campo cuando no hay herramientas OTA disponibles.
- Use el comando de estado o verificación del dispositivo después de la configuración para confirmar que los valores de APN, servidor y puerto se aplicaron.
- Las prácticas de los instaladores varían; cuando sea posible, realice una prueba escalonada para validar la conectividad a Plaspy antes de desplegar un gran número de unidades.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp TTU-700 con Plaspy ofrece una forma directa de integrar datos de seguimiento a largo plazo de remolques y activos en una sola plataforma para visibilidad, alertas y análisis operativo. La combinación del hardware de bajo mantenimiento del TTU-700 y la detección del lado servidor de Plaspy, con soporte para UDP y TCP, simplifica el alta y reduce la carga de configuración.

Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para los comandos específicos de dispositivo más recientes, notas de firmware y orientación de instalación, siempre verifique los detalles en el sitio del fabricante http://www.calamp.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.

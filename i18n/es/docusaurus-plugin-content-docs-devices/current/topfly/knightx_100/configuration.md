---
slug: /topfly/knightx_100/configuration
id: knightx_100-configuration
sidebar_label: Configuration
title: TopFly - KnightX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopFly KnightX 100 con Plaspy, incluyendo comandos SMS y ajustes de servidor compartidos
keywords:
  - Configuración TopFly KnightX 100
  - Instalación TopFly KnightX 100
  - Configuración KnightX 100 Plaspy
  - Guía de configuración de rastreador GPS
  - Ajustes de servidor TopFly
  - Configuración de rastreadores Plaspy
  - Comandos SMS KnightX 100
  - Configuración de seguimiento de activos
  - Integración de dispositivo GPS Plaspy
  - Configuración de seguimiento de flotas
---

# TopFly - KnightX 100 Configuración

Esta página describe el contexto público de configuración para usar el TopFly KnightX 100 con Plaspy. Reúne los datos compartidos del servidor y las indicaciones prácticas que necesitará para apuntar el dispositivo a Plaspy y verificar que está reportando. Cuando están disponibles, se muestran ejemplos de comandos SMS documentados por TopFly para la configuración desde el propio equipo.

Plaspy utiliza el mismo punto de conexión y puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para comprender los ajustes requeridos por Plaspy y seguir un flujo de trabajo seguro y práctico; confirme siempre el comportamiento específico del dispositivo con la documentación de TopFly si encuentra diferencias.

## Resumen de la configuración

El objetivo de la configuración es preparar el KnightX 100 para que envíe ubicación y telemetría a Plaspy y así el dispositivo aparezca y reporte correctamente en la plataforma. Esto implica especificar el punto de conexión de Plaspy, garantizar conectividad del dispositivo y validar que los uplinks sean recibidos por el servicio de Plaspy. Plaspy usa un puerto compartido para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente una vez que el dispositivo comience a reportar.

- Apunte el KnightX 100 al dominio o IP del servidor Plaspy para que los datos se enruten a Plaspy.
- Configure los parámetros de red del dispositivo, como APN y detalles de GPRS, para que los datos móviles y los comandos SMS funcionen.
- Ajuste el intervalo de reporte según sus necesidades de seguimiento y el perfil de batería.
- Valide la conectividad y confirme que el dispositivo es visible en Plaspy tras la configuración.
- Use los comandos SMS proporcionados o la herramienta del fabricante según corresponda para su versión de firmware.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy determinará automáticamente el protocolo correcto cuando el rastreador se conecte.

## Requisitos previos habituales

- Un dispositivo KnightX 100 con batería cargada y acceso a sus comandos SMS o al método de configuración del fabricante.
- Una SIM celular con datos activos y capacidad de SMS insertada en el equipo.
- Credenciales APN del operador listas para introducir en la configuración del dispositivo (vea los marcadores de posición abajo).
- Acceso a las instrucciones o herramientas de configuración de TopFly para su revisión de firmware específica.
- Una cuenta administrativa en Plaspy para validar el reporte del dispositivo una vez configurado.
- Un plan para el intervalo de reporte que equilibre necesidades en tiempo real y vida de batería.

## Cómo se conecta este rastreador a Plaspy

El KnightX 100 se configura para enviar su posición y telemetría al punto de conexión y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir las actualizaciones, generar alertas y mostrar el historial del dispositivo. El equipo utilizará el transporte configurado (UDP o TCP) y subirá según el intervalo de reporte establecido en el dispositivo.

- El dispositivo envía uplinks de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega el primer paquete válido.
- Los reportes incluyen ubicación y telemetría para que el dispositivo sea visible en los paneles de Plaspy.
- Mensajes de evento como alertas de movimiento, manipulación o pánico pueden reenviarse a Plaspy para notificaciones.
- El almacenamiento en búfer del dispositivo sube posiciones almacenadas cuando se restablece la conectividad celular.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de TopFly para su KnightX 100 usando comandos SMS o el software del fabricante según corresponda.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si su dispositivo requiere selección explícita de transporte; Plaspy acepta ambos y detectará el protocolo automáticamente.
5. Configure el APN y cualquier parámetro GPRS requerido para que el equipo pueda alcanzar el endpoint de Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo exige la herramienta del fabricante o el flujo por SMS.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la consola de Plaspy y confirmando actualizaciones de ubicación recientes.

El fabricante puede proporcionar comandos SMS o una herramienta de escritorio/móvil para estos pasos. Use el método recomendado para su firmware y revisión de hardware.

## Ejemplo de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos por SMS. El ejemplo muestra la contraseña del dispositivo como 0000, que es la contraseña predeterminada en este ejemplo. Reemplace los marcadores de posición donde sea necesario.

- Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador con marcadores de posición para APN, usuario y contraseña
```
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el nombre del APN del operador, [apnu] es el nombre de usuario del APN si se requiere, y [apnp] es la contraseña del APN si se requiere. Deje en blanco usuario o contraseña si su operador no los utiliza.

- Establecer el servidor GPRS usando la IP y el puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
Esto configura el dispositivo para enviar datos al servidor Plaspy en el puerto requerido. Alternativamente, puede usar el dominio d.plaspy.com mediante herramientas del fabricante que acepten un hostname.

- Establecer el intervalo de actualización a 60 segundos
```
TIMER,0000,60:60:0:0#
```
Este ejemplo fija intervalos de reporte; adapte los valores a su política de seguimiento y requisitos de batería.

Nota: Estos comandos son representativos de la secuencia de configuración por SMS proporcionada por TopFly. Si su equipo o firmware usa una sintaxis de comando diferente o una herramienta de configuración, siga las instrucciones del fabricante.

## Notas de configuración

- Las revisiones de firmware de TopFly y las variaciones regionales pueden afectar la sintaxis de los comandos SMS y los parámetros soportados; confirme los comandos exactos con la documentación del fabricante.
- Algunos pasos de configuración pueden ser más sencillos a través de la utilidad oficial de TopFly en lugar de SMS, según el firmware y la disponibilidad de herramientas.
- Elija TCP o UDP según sus necesidades de despliegue; Plaspy acepta ambos y detecta el protocolo automáticamente, pero la selección de transporte puede influir en el orden de los paquetes y el comportamiento de retransmisión.
- Al usar comandos SMS, asegúrese de que el dispositivo acepte SMS desde su número y de que la contraseña del dispositivo (ejemplo 0000) sea la correcta para su unidad.
- Todos los dispositivos en Plaspy usan el puerto 8888, así que confirme que su equipo esté configurado para utilizar ese puerto o el dominio de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el KnightX 100 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad confiable y monitoreo operativo de activos. El posicionamiento híbrido del dispositivo, su almacenamiento en búfer y los intervalos de reporte flexibles, junto con la detección automática de protocolos y la configuración unificada de servidor de Plaspy, simplifican la integración y aceleran el despliegue.

Learn more about Plaspy and how it supports fleet and asset workflows at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup instructions and command syntax with TopFly at https://www.topflytech.com/.

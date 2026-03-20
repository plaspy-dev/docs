---
slug: /lk_gps/lk300/configuration
id: lk300-configuration
sidebar_label: Configuration
title: LK-GPS - LK300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK300 y apuntarlo a los servidores Plaspy para validar conectividad y seguimiento en tiempo real
keywords:
  - Configuración LK-GPS LK300
  - Guía de configuración LK300
  - Configuración LK300 en Plaspy
  - Configuración de servidor LK300
  - Configuración del rastreador LK300
  - Configuración de dispositivo Plaspy
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS LK300
  - Configuración LK300 para rastreo vehicular
  - Configuración SMS LK300
---

# LK-GPS - Configuración del LK300

Esta página explica el contexto público de configuración para usar el rastreador LK-GPS LK300 con Plaspy. Aquí encontrará los valores públicos de servidor de Plaspy a los que debe apuntar el dispositivo, qué verificar antes de la integración y el flujo práctico para introducir ubicación y telemetría básica en su cuenta de Plaspy. Esta guía está pensada para técnicos e integradores que preparan el LK300 para monitoreo centralizado en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se usan para dispositivos LK300. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. Use esta página para conocer los valores públicos de Plaspy y un flujo de configuración seguro, y confirme los comandos y menús específicos del dispositivo con la documentación de LK-GPS.

## Visión general de la configuración

Preparar el LK300 para Plaspy implica configurar el dispositivo para que envíe sus mensajes de GPS y estado al endpoint de Plaspy y validar que esos mensajes lleguen y sean parseados por la plataforma. El objetivo es lograr reportes periódicos y confiables de posición y eventos de manipulación para que el dispositivo sea visible y gestionable desde Plaspy.

- Apunte el LK300 al dominio o IP del servidor Plaspy y configure el puerto compartido que usa Plaspy.
- Seleccione el modo de transporte que soporte el dispositivo (UDP o TCP) y configúrelo.
- Use SMS o la herramienta del fabricante para aplicar los ajustes cuando no haya acceso a datos durante la instalación.
- Verifique que el dispositivo reporte posición y eventos en Plaspy y confirme que aparezca en su cuenta.
- Confirme alimentación, servicio de SIM y calidad de señal en el sitio de instalación para asegurar reportes estables.

## Ajustes de servidor de Plaspy

Use estos valores públicos de conexión de Plaspy al configurar el LK300. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (configure either if the LK300 requires a transport selection)
- Plaspy automatically detects the tracker protocol after the device connects

## Requisitos previos típicos

- Confirme que el LK300 está alimentado e instalado según las indicaciones del fabricante.
- Asegúrese de que el equipo tenga una tarjeta SIM activa con datos y SMS habilitados si va a usar configuración por SMS.
- Tenga acceso al método o software oficial de configuración LK-GPS para el LK300 (comandos SMS, herramienta web o utilidad del proveedor).
- Conozca el endpoint de Plaspy que utilizará: d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Verifique la calidad de la señal celular en el lugar de instalación para evitar reportes intermitentes.
- Tenga una cuenta de Plaspy y el procedimiento listo para validar el dispositivo una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El LK300-2G transmite la ubicación GPS y el estado del equipo a través de la red celular hacia servidores remotos. Al configurarlo con el endpoint y puerto de Plaspy, esos mensajes son recibidos por Plaspy y asociados a su cuenta para seguimiento en vivo y alertas.

- El rastreador envía actualizaciones periódicas de posición al endpoint y puerto de Plaspy.
- Eventos de manipulación y activaciones por vibración se reportan a Plaspy para generar alertas.
- El estado de batería y telemetría básica se reenvían a Plaspy para supervisión operativa.
- Se puede usar configuración y consultas por SMS para cambiar parámetros de servidor de forma remota cuando sea necesario.
- Una vez activo el reporte, el dispositivo será visible en Plaspy para seguimiento en tiempo real y reproducción histórica.

## Flujo de configuración típico

Siga una secuencia práctica al configurar el LK300 para Plaspy. Los pasos pueden variar ligeramente según el firmware del LK300 y las herramientas del proveedor.

1. Acceda al método o software oficial de configuración LK-GPS para el LK300 (herramienta web del fabricante, utilidad del proveedor o comandos SMS).
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el LK300 requiere elegir un transporte y la instalación tiene preferencia por uno de los protocolos.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS de configuración si utiliza SMS.
6. Reinicie el LK300 si la documentación del fabricante indica que es necesario para que los ajustes de red surtan efecto.
7. Valide que el rastreador reporte a Plaspy confirmando que el dispositivo aparece en su cuenta y que se ven posiciones y eventos recientes.

## Comandos de ejemplo para configuración

No se incluyen comandos específicos del fabricante aquí. La sintaxis exacta y los menús de configuración varían según el firmware del LK300 y las herramientas provistas por LK-GPS. En general, al usar ajustes por SMS o una utilidad del proveedor, deberá proporcionar los valores del servidor de Plaspy que se muestran arriba:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Si utiliza comandos SMS proporcionados por LK-GPS, siga la sintaxis descrita en el manual del LK300 y reemplace los marcadores de host y puerto por los valores de Plaspy arriba. Para obtener sintaxis de ejemplo por SMS consulte la documentación oficial de LK-GPS o su proveedor para obtener el formato exacto de comandos según su firmware.

## Notas de configuración

- Las versiones de firmware del LK300 y las utilidades de configuración del proveedor pueden cambiar la sintaxis de comandos y la disposición de menús; siempre verifique con el manual de LK-GPS.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy acepta ambos y detectará automáticamente el protocolo entrante.
- La configuración por SMS puede ser útil en instalaciones de campo donde no hay conexión de datos, pero confirme el soporte de comandos SMS para su variante de LK300.
- Dado que Plaspy usa un puerto compartido para todos los dispositivos, no necesita asignaciones de puertos únicas para unidades LK300 cuando usa Plaspy.
- Verifique la compatibilidad de bandas celulares y la disponibilidad del plan de datos de la SIM antes de completar un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el LK300 con Plaspy ofrece visibilidad centralizada de ubicación, eventos de manipulación y telemetría básica, de modo que propietarios de vehículos y operadores de flotas pueden monitorear activos desde una sola plataforma. El diseño compacto del LK300, su activación por vibración y soporte de configuración por SMS lo hacen una opción práctica para instalaciones discretas donde se requiere un reporte sencillo hacia Plaspy.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para la sintaxis de configuración específica por dispositivo, notas de firmware y detalles de hardware más recientes consulte al fabricante en https://www.lk-gps.com. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, así que verifique el comportamiento del dispositivo frente a la documentación más reciente de LK-GPS antes de un despliegue amplio.

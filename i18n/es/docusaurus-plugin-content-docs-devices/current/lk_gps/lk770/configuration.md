---
slug: /lk_gps/lk770/configuration
id: lk770-configuration
sidebar_label: Configuration
title: LK-GPS - LK770 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK770 con Plaspy, incluyendo ajustes de servidor y pasos prácticos
keywords:
  - configuración LK-GPS LK770
  - instalación LK-GPS LK770
  - configuración servidor LK770
  - configuración LK770 Plaspy
  - configuración rastreador LK-GPS
  - rastreador vehicular LK770
  - configuración GPS LK770
  - plataforma seguimiento LK770
  - configuración rastreador Plaspy
  - rastreador GPS LK770
---

# LK-GPS - Configuración del LK770

Esta página documenta el contexto público de configuración para usar el rastreador LK-GPS LK770 con la plataforma Plaspy. Resume los ajustes del servidor Plaspy que deberá aplicar, qué preparar antes de la configuración y un flujo práctico para lograr que el dispositivo reporte correctamente a Plaspy. Utilice esta guía junto con el manual del dispositivo y las herramientas del proveedor para el LK770.

El LK770 es un rastreador cableado para vehículos con antenas GPS y GSM integradas y varias funciones de seguridad como alarma SOS, alarma por vibración y corte remoto de combustible o energía. Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor.

## Resumen de la configuración

Esta configuración prepara el LK770 para enviar datos de ubicación y eventos a Plaspy, de modo que vehículos y activos sean visibles en la plataforma. El proceso se centra en apuntar el equipo al endpoint compartido de Plaspy, elegir el transporte correcto y validar que el dispositivo esté reportando.

- Configure el dispositivo para enviar datos al endpoint y puerto del servidor Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si la interfaz del equipo lo requiere.
- Guarde la configuración y reinicie la unidad cuando sea necesario para aplicar los cambios.
- Valide la conectividad y el reporte para que el rastreador sea visible en Plaspy.
- Verifique que los eventos como SOS, alarma por vibración y notificaciones de corte de energía o combustible lleguen a Plaspy correctamente.

## Ajustes del servidor Plaspy

Configure el LK770 para reportar al servidor de Plaspy usando los siguientes ajustes públicos:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y gestiona la detección del protocolo de forma automática.

## Requisitos típicos antes de la configuración

- Un LK770 alimentado e instalado con acceso a su interfaz de configuración del fabricante o al conjunto de comandos SMS.
- Una tarjeta SIM operativa y conectividad celular compatible con las capacidades de red del dispositivo según el fabricante.
- Acceso al manual del usuario del LK770 o al software de configuración del proveedor para introducir el servidor y los ajustes de transporte.
- Conocimientos básicos sobre si su instalación prefiere transporte UDP o TCP para la telemetría.
- Un método para reiniciar o cortar y restaurar la alimentación del dispositivo tras aplicar cambios.
- Acceso a la cuenta Plaspy o a las instrucciones de incorporación (si necesita confirmar la presencia del dispositivo en su instancia Plaspy).

## Cómo se conecta este rastreador a Plaspy

El LK770 envía posiciones GPS y datos de eventos del dispositivo al endpoint y puerto compartidos de Plaspy para que los vehículos puedan supervisarse dentro de la plataforma. Una vez apuntado a Plaspy, la plataforma detectará el protocolo del rastreador automáticamente y comenzará a procesar la telemetría.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP como transporte cuando el dispositivo lo requiera; Plaspy acepta ambos.
- Las actualizaciones de ubicación y las notificaciones de eventos como señales SOS y alarmas por vibración se transmiten a Plaspy para su visualización y alertas.
- Eventos remotos como cortes de combustible o energía (reportados como cambios de estado del dispositivo) son visibles en Plaspy cuando el rastreador envía actualizaciones de estado.
- Plaspy detecta automáticamente el protocolo del equipo, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.

## Flujo de configuración recomendado

Siga estos pasos prácticos para configurar un LK770 para su uso con Plaspy:

1. Acceda al método de configuración oficial del LK770 proporcionado por el fabricante o proveedor (app del fabricante, herramienta web, software de escritorio o conjunto de comandos SMS).
2. En los ajustes de servidor del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo solicita una elección.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o mediante comandos SMS.
6. Reinicie o corte y restaure la alimentación del LK770 si el dispositivo o las instrucciones requieren un reinicio para que los ajustes surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta o en la lista de dispositivos de Plaspy.

## Comandos de configuración de ejemplo

El LK770 admite ajustes por parámetros vía SMS y funciones de consulta según la descripción del dispositivo. Los comandos y formatos exactos varían según el firmware y la herramienta del proveedor, por lo que debe seguir la documentación del fabricante o la lista de comandos suministrada por el vendedor para el LK770. Plaspy requiere el servidor y puerto objetivo listados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888), y la selección de UDP o TCP cuando corresponda.

Si utiliza configuración por SMS con el LK770, los pasos públicos típicos consisten en enviar cadenas de configuración por SMS desde un número autorizado al dispositivo. Dado que la sintaxis de los comandos del fabricante varía, consulte el manual del LK770 o el soporte del proveedor para obtener las plantillas SMS exactas o los comandos de la utilidad de configuración antes de aplicarlos en equipos en producción.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos y los menús de configuración; confirme siempre los comandos con el manual del LK770 o con el proveedor.
- Elija UDP o TCP según su red y requisitos de instalación; ambos transportes son aceptados por Plaspy en el puerto 8888.
- La configuración vía SMS suele estar disponible como alternativa a las herramientas de software para el LK770; cuando use SMS, verifique los números telefónicos autorizados y el formato de los comandos.
- Asegúrese de que el dispositivo tenga alimentación estable durante la configuración y los ciclos de reinicio para evitar una aplicación incompleta de los ajustes.
- Como Plaspy detecta automáticamente el protocolo y usa un único puerto para todos los dispositivos, los cambios principales en el equipo son la dirección del servidor y la selección del transporte.

## Por qué usar Plaspy con esta configuración

Usar el LK770 con Plaspy ofrece una forma sencilla de centralizar la ubicación de los vehículos y los eventos de seguridad en una única plataforma de gestión de flotas. Apuntar el rastreador al endpoint compartido de Plaspy permite visibilidad en tiempo real, monitoreo de eventos y supervisión centralizada sin necesidad de configurar servidores por dispositivo en la plataforma.

Para obtener más información sobre Plaspy y cómo gestiona la ingesta de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, detalles de firmware y referencias de comandos para el LK770, verifique la información actual en el sitio del fabricante https://www.lk-gps.com.

---
slug: /laipac/s911_enforcer/configuration
id: s911_enforcer-configuration
sidebar_label: Configuration
title: Laipac - S911 Enforcer Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Laipac S911 Enforcer y conectarlo a Plaspy con la configuración compartida del servidor
keywords:
  - Configuración Laipac S911 Enforcer
  - Configuración S911 Enforcer
  - Configuración S911 Enforcer Plaspy
  - Configuración rastreador GPS Laipac
  - Ajustes servidor S911 Enforcer
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS wearable
  - Configuración monitoreo electrónico
  - Integración dispositivo Laipac
  - Configuración servidor Plaspy
---

# Laipac - Configuración del S911 Enforcer

Esta página aborda el contexto de configuración pública para usar el rastreador GPS de muñeca Laipac S911 Enforcer con Plaspy. Explica los ajustes del servidor compartido que Plaspy requiere y los pasos prácticos que suelen seguir los instaladores y administradores para registrar y validar el dispositivo en la plataforma. El S911 Enforcer es un wearable diseñado para uso específico que combina GNSS, conectividad celular, AGPS y BLE, e incluye funciones de seguridad como voz bidireccional, SOS, detección de caída, detección de manipulación y resistencia al agua IP68.

Plaspy utiliza un único endpoint y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para configurar el S911 Enforcer pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para comprender los ajustes que Plaspy requiere y el flujo de trabajo típico; siempre confirme las instrucciones específicas del dispositivo con la documentación de Laipac cuando sea necesario.

## Resumen de configuración

Configurar el S911 Enforcer para Plaspy implica preparar la unidad de muñeca para que reporte ubicación y telemetría de eventos a Plaspy y verificar que esos mensajes lleguen a la plataforma. El objetivo es garantizar que el rastreador pueda alcanzar el endpoint de Plaspy de forma fiable y que los administradores puedan ver la posición del dispositivo, las alertas y el historial de breadcrumbs en la consola de monitoreo.

- Apunte el dispositivo a los ajustes del servidor de Plaspy para que envíe datos GNSS y eventos a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad celular operativa y pueda enviar paquetes al endpoint de Plaspy.
- Seleccione el protocolo de transporte adecuado en el dispositivo si es necesario y guarde la configuración.
- Valide el reporte comprobando actualizaciones de posición en tiempo real y mensajes de eventos en Plaspy.
- Confirme las rutas de OTA y gestión remota si planea usar LocationNow u otras herramientas para mantener firmware y ajustes del equipo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el S911 Enforcer:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Un S911 Enforcer encendido y con batería, con la variante celular regional correcta instalada.
- Una tarjeta SIM activa y cobertura celular adecuada para la variante del dispositivo que se va a desplegar.
- Acceso al método o software oficial de configuración de Laipac para el S911 Enforcer.
- Una cuenta de Plaspy con permisos para añadir y verificar nuevos dispositivos en su espacio de monitoreo.
- Conocimiento de la versión de firmware del dispositivo y de las herramientas del proveedor utilizadas para el aprovisionamiento.
- Un plan de pruebas sencillo para validar el reporte en vivo y el manejo de eventos después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el S911 Enforcer envía fixes de posición, mensajes de evento y paquetes de estado del dispositivo al endpoint y puerto compartidos de Plaspy para que el personal de monitoreo reciba telemetría en tiempo real y el historial de breadcrumbs. Plaspy recibe esos mensajes sobre el transporte seleccionado y reconoce automáticamente el protocolo entrante para interpretar los datos del dispositivo.

- El rastreador reporta fixes de posición GNSS y el historial de breadcrumbs a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Mensajes de evento como SOS, detección de caída, manipulación y batería baja se reenvían a Plaspy para alertas y registro.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint funcionan con los dispositivos compatibles.
- El transporte puede configurarse como UDP o TCP en el dispositivo según las opciones de firmware y la preferencia del instalador.
- Una vez que llegan los mensajes, el dispositivo se vuelve visible en Plaspy y los administradores pueden revisar telemetría en vivo e histórica.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Laipac o al software del S911 Enforcer proporcionado por el proveedor o el kit de instalador.
2. Asegúrese de que el dispositivo esté encendido, tenga una SIM activa si la variante lo requiere, y cuente con cobertura celular.
3. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según permita la interfaz de configuración del dispositivo.
4. Configure el puerto de destino en 8888, que es el que Plaspy usa para todos los dispositivos compatibles.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir una opción; guarde la selección.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante indican que es necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo y notificaciones de eventos en su espacio de monitoreo Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el S911 Enforcer dependen de las herramientas de aprovisionamiento de Laipac, del firmware y de la interfaz usada (por ejemplo, comandos SMS, utilidades USB o un servicio de aprovisionamiento OTA). Dado que esta página pública no incluye conjuntos de comandos del fabricante, consulte la documentación de Laipac o su kit de instalador para el formato preciso. Si recibe una lista de comandos de Laipac o de su proveedor, aplique los valores del servidor Plaspy que aparecen a continuación al reemplazar los campos de endpoint y puerto:

- server domain or IP field: d.plaspy.com or 54.85.159.138
- port field: 8888
- transport option: UDP or TCP

Si le proporcionan comandos estilo SMS o CLI por parte de Laipac, conserve cualquier marcador de posición como {{apn}}, {{apnu}} o {{apnp}} en el texto del comando y reemplace esos valores por el APN del operador, nombre de usuario o contraseña según lo requiera su SIM.

## Notas de configuración

- Las diferencias de firmware y de las herramientas de aprovisionamiento pueden cambiar la sintaxis de los comandos y la ubicación de los menús. Consulte las notas de la versión del firmware de Laipac cuando sea posible.
- Use TCP si necesita entrega orientada a conexión para funciones específicas del proveedor, o UDP si prefiere menor sobrecarga; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Debido a que Plaspy utiliza un puerto compartido y detección automática de protocolo, en la mayoría de los casos solo necesita configurar el endpoint y el puerto correctos en el dispositivo.
- La gestión remota mediante la plataforma LocationNow o herramientas del proveedor puede simplificar el aprovisionamiento masivo y las actualizaciones OTA; verifique las opciones de integración con su representante de Laipac.
- Siempre verifique la conectividad de red del dispositivo y la configuración del APN antes de dar por concluida la configuración si su variante de dispositivo requiere un perfil de datos celulares.

## Por qué usar Plaspy con esta configuración

Usar el Laipac S911 Enforcer con Plaspy brinda a los equipos de monitoreo visibilidad continua de la ubicación del portador, alertas de eventos y rutas históricas de breadcrumbs apropiadas para programas de supervisión y seguridad. El modelo de endpoint compartido de Plaspy simplifica la configuración a nivel de flota al usar un único servidor y puerto, mientras que la detección automática de protocolos de Plaspy reduce la carga de selección de protocolos por dispositivo.

Para obtener más información sobre Plaspy y cómo admite el seguimiento de wearables y vehículos, visite https://www.plaspy.com. Para métodos de configuración de dispositivos, comportamiento de firmware y detalles del fabricante más actuales, verifique la información más reciente en https://laipac.com/ antes del despliegue.

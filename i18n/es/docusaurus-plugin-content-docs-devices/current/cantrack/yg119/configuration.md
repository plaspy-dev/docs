---
slug: /cantrack/yg119/configuration
id: yg119-configuration
sidebar_label: Configuration
title: CanTrack - YG119 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack YG119 con Plaspy, con ajustes de servidor requeridos y pasos prácticos de instalación
keywords:
- Configuración CanTrack YG119
- Configuración YG119 para Plaspy
- Rastreador CanTrack Plaspy
- Configuración de servidor YG119
- Configuración GPS CanTrack YG119
- Configuración de software de rastreo YG119
- Configuración de plataforma CanTrack YG119
- Guía de configuración CanTrack
- Guía de instalación YG119
- Integración de rastreador con Plaspy
---

# CanTrack - YG119 Configuración

Esta página explica el contexto público de configuración para usar el rastreador CanTrack YG119 con Plaspy. Se centra en los ajustes prácticos del servidor y en los pasos generales necesarios para apuntar el dispositivo al endpoint de ingestión de Plaspy, de modo que las subidas de posiciones y los eventos del dispositivo aparezcan en la plataforma Plaspy.

Plaspy emplea un endpoint de servidor compartido y un puerto consistente entre los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice esta guía junto con la documentación de CanTrack para instrucciones específicas del dispositivo.

## Resumen de la configuración

Preparar un YG119 para Plaspy consiste principalmente en configurar el dispositivo para que informe al endpoint compartido de Plaspy y en verificar que el rastreador esté llegando a la plataforma. Los siguientes puntos describen los objetivos prácticos del proceso de configuración.

- Configurar el dispositivo para que envíe paquetes TCP o UDP a Plaspy para que los datos de posición y evento se reciban en tiempo real.
- Asegurar que el rastreador tenga conectividad celular activa y una SIM funcional para que las subidas alcancen el servidor de Plaspy.
- Validar la conectividad y el reporte de eventos para que el rastreador aparezca en los mapas y registros de Plaspy.
- Habilitar el modo de reporte deseado en el dispositivo, por ejemplo reportes por movimiento o por intervalo, para equilibrar la rapidez de los datos y la duración de la batería.
- Confirmar que alertas como activación de geo-cercas, batería baja, escucha remota por voz y eventos de buzzer se reenvíen a Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el YG119 o al ingresar los detalles del servidor en la herramienta del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices use the same port and Plaspy will interpret incoming packets

## Requisitos previos para la configuración

- Asegúrese de que la batería del YG119 esté cargada y que el dispositivo esté encendido.
- Inserte una tarjeta SIM activa con plan de datos si la variante celular regional lo requiere.
- Verifique que el dispositivo tenga cobertura celular en el área donde operará.
- Tenga acceso al método de configuración CanTrack provisto para este modelo, ya sea software, herramienta web o canal de configuración.
- Defina el modo de reporte deseado y los umbrales de evento que quiera activar antes de aplicar los ajustes.
- Tenga acceso a la cuenta de Plaspy para validar el dispositivo una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El YG119 sube datos de posición y estado a través de la conexión celular del dispositivo hacia el endpoint de ingestión de Plaspy. Una vez apuntado al endpoint y puerto compartidos, Plaspy detecta y analiza automáticamente los paquetes subidos para su visualización y notificación en tiempo real.

- El rastreador envía paquetes TCP/IP o UDP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy ingiere las actualizaciones de posición y las integra en sesiones de seguimiento en vivo.
- Alertas como eventos de geo-cerca, advertencias de batería baja y reportes por movimiento se reenvían a Plaspy para notificación e historial.
- La función de escucha remota por voz y las activaciones del buzzer se registran como eventos en el historial de Plaspy cuando el dispositivo lo soporta.
- La detección automática de protocolo de Plaspy elimina la necesidad de seleccionar un protocolo en el lado del servidor; el dispositivo se configura al endpoint compartido y Plaspy interpreta los datos entrantes.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración CanTrack para el YG119 provisto por el fabricante o distribuidor.
2. Confirme que el dispositivo tiene una SIM válida instalada, registro en la red y alimentación.
3. Ingrese la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o como la IP 54.85.159.138 según la herramienta del fabricante.
4. Establezca el puerto del servidor en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte al configurar el endpoint del servidor.
6. Aplique o guarde la configuración dentro de la herramienta del dispositivo y siga cualquier indicación del equipo para confirmar los cambios.
7. Reinicie el dispositivo si el flujo del fabricante requiere un reboot para aplicar los ajustes de red.
8. Valide que el dispositivo reporta a Plaspy revisando las actualizaciones de posición en vivo, registros de eventos o reportes de prueba en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

Los comandos de configuración del modelo YG119 varían según el firmware de CanTrack y el método de configuración del proveedor. Dado que las herramientas del fabricante y los formatos de comando difieren entre revisiones de firmware, aquí no se proporciona la sintaxis exacta. Use la utilidad oficial de CanTrack o el manual del dispositivo para aplicar los siguientes ajustes públicos de servidor:

- Apunte el dispositivo a d.plaspy.com o 54.85.159.138
- Use el puerto 8888
- Seleccione UDP o TCP si es necesario

Si recibe ejemplos de comandos suministrados por CanTrack que incluyen marcadores como [apn], [apnu] o [apnp], mantenga esos marcadores al emitir los comandos y reemplácelos por los ajustes APN de su operador móvil. Consulte la documentación de CanTrack para ejemplos de comandos apropiados a su firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden usar interfaces de configuración o formatos de comando distintos; siempre consulte el manual del CanTrack YG119 para su revisión específica.
- Elegir TCP o UDP puede afectar el comportamiento de entrega; seleccione el transporte requerido o recomendado por la herramienta del proveedor y considere probar ambos si surgen problemas de conectividad.
- Las variantes regionales del YG119 pueden tener bandas celulares o firmware de módem diferentes; verifique que la variante de su dispositivo funcione en las redes locales antes del despliegue.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente los protocolos entrantes, así que enfóquese en apuntar el dispositivo a d.plaspy.com o 54.85.159.138 con el puerto 8888.
- Buenas prácticas de instalación como confirmar la intensidad de la señal, habilitar reportes por movimiento o por intervalo y validar las notificaciones de eventos reducirán problemas en el despliegue.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack YG119 con Plaspy ofrece una vía práctica y de bajo fricción para convertir los reportes de movimiento, alertas de geo-cerca y ayudas de recuperación del dispositivo en telemetría y notificaciones accionables. Para quienes necesitan seguimiento en tiempo real confiable y datos históricos de ubicación, configurar el YG119 para que apunte a Plaspy brinda visibilidad y flujos de recuperación más rápidos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las últimas instrucciones de configuración del YG119 y las especificaciones técnicas en el sitio oficial de CanTrack https://www.cantrackgps.com/ antes del despliegue.

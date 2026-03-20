---
slug: /teltonika/fmm13a/protocol
id: fmm13a-protocol
sidebar_label: Protocol
title: Teltonika - FMM13A Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para conectar el Teltonika FMM13A a servidores Plaspy para seguimiento y telemetría
keywords:
  - Protocolo Teltonika FMM13A
  - Protocolo GPS Teltonika FMM13A
  - Compatibilidad FMM13A Plaspy
  - Protocolo de comunicación FMM13A
  - Protocolo de rastreo FMM13A
  - Protocolo rastreador Teltonika
  - Rastreo de vehículos Plaspy
  - Rastreo de flotas FMM13A
  - Protocolo rastreador LTE Cat M1
  - Telemetría CAN Plaspy
---

# Teltonika - FMM13A Protocol

Esta página ofrece el contexto público del protocolo para usar el Teltonika FMM13A con Plaspy. Resume cómo el dispositivo se comunica con los servidores de Plaspy en términos generales, qué opciones de conectividad son habituales y qué comportamientos son relevantes para una integración exitosa. La información aquí está pensada para ayudar a los equipos técnicos a planificar despliegues y resolver problemas comunes de conexión sin exponer detalles sensibles de implementación.

El Teltonika FMM13A es un rastreador compacto 4G LTE Cat M1, común en despliegues de vehículos y activos en América del Norte. En pedidos estándar incluye un módem BG95-M1, batería de respaldo interna para mantener reportes durante pérdida de energía, entradas y salidas flexibles para monitoreo de combustible e ignición, y soporte de adaptador CAN para telemetría vehicular. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del rastreador define cómo el FMM13A envía telemetría, estado e información de eventos a un servidor remoto y cómo el servidor responde a comandos o solicitudes de gestión. Para la compatibilidad con Plaspy, este protocolo permite al dispositivo identificarse, entregar ubicación GNSS y telemetría del vehículo, y reportar entradas y eventos que Plaspy convierte en paneles útiles y alertas.

- Transporta ubicación GNSS y telemetría con marca de tiempo al endpoint de Plaspy para seguimiento en tiempo real e informes históricos.
- Reporta datos a nivel vehículo, como estado de ignición, lecturas de impulsos de combustible y parámetros del bus CAN que Plaspy normaliza.
- Envía notificaciones de eventos por pérdida de energía, manipulación, acciones de inmovilizador y otras alertas útiles para la supervisión de flotas.
- Expone la identidad del dispositivo y la información de sesión para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Soporta canales remotos de comando y configuración que Plaspy puede usar para control operativo y actualizaciones cuando el dispositivo y el firmware ofrecen esas funciones.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador usado por cada dispositivo. Cuando un FMM13A se configura para reportar a Plaspy, normalmente solo requiere el destino correcto, conectividad de red y ajustes en el dispositivo para comenzar a reportar sin una selección manual de protocolo dentro de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo al endpoint.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar un protocolo en la interfaz de Plaspy si el dispositivo apunta al endpoint correcto.
- APN correcto, provisión de SIM y visibilidad en la red son los prerrequisitos más comunes para una detección automática exitosa.

## Contexto de transporte y conexión

Comprender el contexto de transporte y conexión ayuda a garantizar que el FMM13A alcance Plaspy de forma fiable. El FMM13A utiliza su módem LTE Cat M1 para enviar telemetría a través de la red móvil al endpoint de Plaspy. Los ajustes de red en el dispositivo y cualquier configuración del operador o firewall entre el dispositivo y Plaspy deben permitir conexiones salientes al endpoint y al puerto de Plaspy.

- El dispositivo puede configurarse para enviar datos vía UDP o TCP al puerto 8888, dependiendo del transporte elegido y de las opciones del firmware.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 como destino.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica reglas de firewall y políticas de red para flotas.
- Asegúrese de que el APN del dispositivo y la SIM estén provisionados para permitir datos IP y que cualquier NAT o filtrado del operador no bloquee el transporte elegido.
- Para una llegada fiable de la telemetría, considere la señal de la red móvil, los ajustes de keepalive del dispositivo y cualquier equipo intermedio de inspección de paquetes.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, campos opcionales o conjuntos de comandos disponibles. Revise las notas de versión del firmware al solucionar problemas.
- Las revisiones de hardware o accesorios opcionales, como adaptadores CAN, pueden afectar qué canales de telemetría están disponibles para Plaspy.
- Los ajustes de transporte en el dispositivo (UDP vs TCP) varían según la configuración; en algunos despliegues se prefiere un transporte por razones de confiabilidad de red.
- Las herramientas de gestión remota del fabricante y los flujos FOTA pueden alterar el comportamiento tras una actualización; coordine las actualizaciones en flotas de producción.
- Las variantes regionales de firmware o requisitos regulatorios a veces modifican las bandas o funciones soportadas, así que valide la variante del dispositivo según sus necesidades de despliegue.
- Siempre confirme que el dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 antes de asumir compatibilidad.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica de cómo el FMM13A se comunica con Plaspy reduce el tiempo de configuración y ayuda a aislar problemas cuando la telemetría falta o es inesperada. Saber qué elementos maneja la capa de transporte, cuáles son influenciados por el firmware y qué normaliza Plaspy mantiene el proceso de resolución de problemas enfocado y eficiente.

- Ayuda a confirmar que el dispositivo alcanza el endpoint y puerto de Plaspy esperados y usa el transporte adecuado.
- Guía la verificación del APN, la provisión de SIM y las condiciones de la red móvil que afectan la conectividad.
- Aclara qué campos de telemetría se esperan del dispositivo frente a lo que Plaspy normalizará o derivará.
- Apoya la planificación del uso de comandos remotos y flujos de inmovilizador cuando el dispositivo los soporta.
- Reduce el tiempo de inactividad permitiendo comprobaciones precisas de compatibilidad de firmware o accesorios que podrían afectar la calidad de los datos.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM13A con Plaspy ofrece a las flotas un camino optimizado desde la telemetría del dispositivo hasta la información operativa. La conectividad LTE Cat M1 del FMM13A, la batería de respaldo, las E/S flexibles y el soporte CAN proveen los canales de telemetría y control que Plaspy ingiere, normaliza y presenta para enrutamiento, alertas e informes. Dado que Plaspy usa un único puerto compartido y detección automática de protocolo, desplegar un gran número de dispositivos resulta más sencillo operativamente.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.teltonika-gps.com/

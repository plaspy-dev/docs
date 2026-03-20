---
slug: /ev/ev_05/protocol
id: ev_05-protocol
sidebar_label: Protocol
title: EV - EV-05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador wearable EV EV-05 y su comunicación con los servidores de Plaspy
keywords:
  - EV EV-05
  - protocolo EV-05
  - rastreador GPS EV-05
  - rastreador EV Plaspy
  - rastreador wearable EV-05
  - protocolo de rastreo EV-05
  - compatibilidad Plaspy EV-05
  - protocolo GPS wearable
  - protocolo rastreador seguridad personal
  - comunicación EV-05
---

# EV - Protocolo EV-05

Esta página ofrece una descripción pública y no sensible del protocolo de reporte del rastreador EV EV-05 en relación con Plaspy. Explica el contexto de comunicación necesario para configurar los dispositivos y comprender cómo el reloj envía posición, eventos SOS, detección de caídas y telemetría de salud a la plataforma Plaspy sin exponer detalles privados o propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en conceptos públicos comunes del protocolo y en el contexto de conexión necesario para integrar el EV-05 con Plaspy.

## Resumen del protocolo

El protocolo implementado por el EV-05 regula cómo el reloj codifica y envía datos de ubicación, eventos y telemetría a un servidor remoto. A grandes rasgos, permite que el dispositivo reporte actualizaciones periódicas de posición, eventos de alta prioridad como SOS y alertas de caída, además de telemetría de salud como lecturas de frecuencia cardíaca, para que Plaspy presente una vista integrada del estado del usuario.

- Permite al EV-05 transmitir reportes de ubicación basados en GPS, Wi‑Fi, balizas y LBS al servidor.
- Entrega eventos sensibles al tiempo como SOS, detección de caídas y alertas de no movimiento para atención inmediata del operador.
- Envía telemetría de salud y actividad del wearable, incluyendo frecuencia cardíaca y conteo de pasos para monitoreo y reglas.
- Asocia información de identidad y estado del dispositivo para que Plaspy pueda correlacionar los mensajes entrantes con el registro correcto del equipo.
- Soporta tasas de reporte configurables para que el reloj aumente la frecuencia de actualizaciones en emergencias, conservando energía en operación normal.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes en un único endpoint y puerto compartidos y usa la lógica de la plataforma para identificar los formatos de datos entrantes de los rastreadores. En la mayoría de los casos, un EV-05 correctamente configurado comenzará a reportar a Plaspy sin que sea necesario seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138 para los reportes de dispositivos.
- La plataforma recibe tráfico de dispositivos en el puerto 8888, que es usado por todos los dispositivos soportados.
- Los dispositivos pueden enviar usando UDP o TCP hacia el puerto 8888 según la configuración del equipo y las condiciones de red.
- Cuando un EV-05 está configurado para reportar a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo general sin intervención manual.
- Si un dispositivo no aparece, verifique que la configuración de reporte y la conectividad de red sean correctas y que el dispositivo apunte al endpoint de Plaspy.

## Transporte y contexto de conexión

El EV-05 soporta múltiples transportes de red y métodos de ubicación; la capa de conexión determina cómo los mensajes del dispositivo llegan a Plaspy. Esta sección cubre las opciones públicas de conexión que comúnmente se usan al configurar un EV-05 para reportar a Plaspy.

- El EV-05 puede configurarse para enviar datos mediante UDP o TCP en el puerto 8888, según el firmware y las opciones seleccionadas.
- Los dispositivos pueden resolver DNS hacia el dominio d.plaspy.com o apuntar directamente a la IP 54.85.159.138 cuando no hay DNS disponible.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de firewall y la red en despliegues mixtos.
- Elegir UDP puede reducir la sobrecarga para reportes frecuentes de posición, mientras que TCP puede ofrecer transporte más confiable para la entrega de eventos importantes según el comportamiento de la red.
- Asegúrese de que el APN, los datos celulares y cualquier regla de firewall local permitan conexiones salientes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes y los campos de telemetría disponibles; confirme siempre el firmware del dispositivo al validar compatibilidad.
- Variaciones de hardware entre modelos regionales pueden alterar bandas o sensores soportados, lo que a su vez afecta los datos que el dispositivo envía.
- Las herramientas de configuración del fabricante o la provisión de la SIM pueden tener transportes por defecto distintos; verifique que el EV-05 esté configurado para reportar al endpoint de Plaspy.
- Plaspy detecta automáticamente los protocolos entrantes, pero se requieren direccionamiento de red y selección de transporte correctos para una detección exitosa.
- Restricciones de red locales como NAT del operador, firewalls corporativos o puertos bloqueados pueden impedir que el dispositivo alcance Plaspy.
- Para obtener resultados más fiables, pruebe un dispositivo en el entorno de despliegue previsto antes de realizar implementaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del EV-05 y el contexto de conexión asociado ayuda a garantizar una configuración fluida, una solución de problemas más rápida y una operación predecible a largo plazo al integrar con Plaspy.

- Acelera la configuración inicial al aclarar qué endpoint y transporte debe usar el reloj para reportar a Plaspy.
- Facilita el diagnóstico de problemas de conectividad al aislar cuestiones de transporte, DNS, APN y accesibilidad al servidor.
- Orienta las expectativas sobre intervalos de reporte y contenidos de las cargas útiles según el firmware y las opciones de configuración.
- Apoya la configuración correcta de firewalls y redes, dado que Plaspy usa un único puerto 8888 para todos los dispositivos.
- Hace más sencillo planear reglas de monitoreo y alertas en Plaspy porque sabrá qué tipos de eventos puede proporcionar el EV-05.

## Por qué usar Plaspy con este protocolo

Usar el EV-05 con Plaspy permite a las organizaciones consolidar telemetría de seguridad personal, ubicación en vivo y alertas de salud en un único panel operativo. La forma wearable, combinada con SOS, detección de caídas y monitorización de frecuencia cardíaca, hace que el EV-05 sea adecuado para proveedores de cuidado, centros de monitoreo y programas de seguridad para trabajadores solitarios que requieren visibilidad continua y respuesta rápida ante incidentes.

Learn more about Plaspy and how it can aggregate EV-05 telemetry and alarms at https://www.plaspy.com. Please verify device specific protocol behavior, firmware details, and the latest implementation notes with the manufacturer at http://www.eviewltd.com/ as protocol support and firmware behavior can change over time.

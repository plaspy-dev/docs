---
slug: /teltonika/fmc234/protocol
id: fmc234-protocol
sidebar_label: Protocol
title: Teltonika - FMC234 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Teltonika FMC234 con Plaspy, con contexto de conexión y compatibilidad
keywords:
  - Protocolo Teltonika FMC234
  - Protocolo GPS Teltonika FMC234
  - Protocolo FMC234 Plaspy
  - Protocolo de rastreo FMC234
  - Protocolo de comunicación FMC234 Teltonika
  - Protocolo de rastreador de vehículo FMC234
  - Compatibilidad protocolo rastreador Teltonika
  - Protocolo FMC234 gestión de flotillas
  - Protocolo telemetría Teltonika
  - Integración FMC234 Plaspy
---

# Teltonika - Protocolo FMC234

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC234 con Plaspy. Se centra en la forma en que el dispositivo se comunica con la plataforma Plaspy en términos no sensibles y neutrales de implementación, y ofrece contexto de conexión y compatibilidad para facilitar la integración, el despliegue y la resolución de problemas.

El FMC234 es un dispositivo compatible con Plaspy diseñado para uso en flotas y activos exigentes, con comunicación 4G LTE Cat 1, retroceso a 2G, carcasa IP67 y batería interna de respaldo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware, la variante regional y la implementación del fabricante, por lo que siempre valide los detalles específicos del equipo contra la documentación oficial.

## Descripción general del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el FMC234 envía posición, telemetría y datos de sensores a un servidor remoto como Plaspy. En términos públicos, el protocolo define cómo el dispositivo establece la conexión, se identifica ante el servidor y transmite datos utilizables que Plaspy convierte en información de ubicación, estado y alertas.

- Permite al FMC234 reportar posiciones GNSS, telemetría y estados de accesorios al endpoint de Plaspy.
- Transporta información de identificación que permite a Plaspy asociar los datos entrantes con el registro de dispositivo correcto.
- Admite el envío push desde el dispositivo al servidor para que Plaspy ofrezca monitoreo en vivo, reproducción de rutas y alertas.
- Permite que telemetría adicional, como datos CAN o lecturas de sensores accesorios, llegue junto con las actualizaciones de ubicación.
- Opera sobre capas de transporte estándar para que el dispositivo pueda usar redes móviles comunes para alcanzar Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint unificado y detecta automáticamente el protocolo del rastreador que usan los dispositivos conectados. Cuando un FMC234 se configura para reportar a Plaspy, la plataforma inspecciona las conexiones entrantes y asigna el manejo correcto sin que, en la mayoría de los casos, sea necesaria la selección manual del protocolo.

- Plaspy escucha en un endpoint compartido en d.plaspy.com y recibe los reportes de los dispositivos en esa dirección.
- La IP del servidor de Plaspy es 54.85.159.138 y el servicio usa el puerto 8888 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de los equipos y el enrutamiento en el servidor.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir manualmente un protocolo en la plataforma cuando el dispositivo apunta correctamente al endpoint de Plaspy.
- Asegúrese de que el FMC234 esté configurado para reportar al endpoint de Plaspy para que la detección automática funcione como se espera.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el FMC234 alcanza el endpoint de Plaspy y qué opciones de transporte son comúnmente disponibles. Esta información es útil al configurar APN, reglas de firewall o verificar la conectividad de red durante el despliegue.

- El FMC234 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Los equipos pueden apuntar al nombre de host d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para reportar.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de firewall y la red.
- Elija UDP para menor overhead cuando esté disponible, o TCP para entrega orientada a conexión cuando lo requiera el firmware del dispositivo o la red.
- Verifique la operadora móvil y la configuración del APN para asegurar que el dispositivo pueda alcanzar d.plaspy.com o la IP del servidor desde la red del vehículo o activo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o modos de transporte están disponibles; confirme la versión de firmware al diagnosticar diferencias.
- Las variantes de hardware y las configuraciones de radio regionales pueden afectar las opciones de reporte disponibles o los ajustes necesarios.
- Accesorios del fabricante, como adaptadores CAN y sensores EYE, pueden modificar el contenido de telemetría que se entrega a Plaspy.
- La selección entre UDP y TCP puede influir en el comportamiento de entrega y debe coincidir con la configuración del dispositivo.
- La detección automática de Plaspy reduce la necesidad de selección manual de protocolo, pero requiere que el dispositivo apunte al endpoint de Plaspy.
- Siempre valide la compatibilidad y la configuración contra la documentación del dispositivo Teltonika y las notas de la versión más recientes.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación básico que usa el FMC234 ayuda a garantizar despliegues confiables, acelerar la resolución de problemas y asegurar una interpretación precisa de los datos en Plaspy. Saber cómo se conecta el dispositivo, qué reporta y cómo se maneja el transporte reduce la fricción en la integración y apoya la continuidad operativa.

- Agiliza la configuración inicial al aclarar qué endpoint, transporte y puerto configurar en el dispositivo.
- Facilita la resolución de problemas cuando faltan reportes o los campos de telemetría difieren de lo esperado.
- Ayuda a elegir el transporte y la configuración de red adecuados (UDP o TCP) para una entrega confiable.
- Informa decisiones sobre actualizaciones de firmware, compatibilidad de accesorios y disponibilidad de funciones.
- Apoya la planificación de seguridad y red al identificar las conexiones salientes requeridas hacia Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el FMC234 con Plaspy ofrece a las organizaciones una forma práctica de convertir la telemetría de hardware resistente en visibilidad de flota en tiempo real, alertas e informes históricos. La combinación de hardware robusto, autonomía de la batería de respaldo y la detección automática de protocolo de Plaspy facilita desplegar rastreadores a gran escala manteniendo la configuración simple para los equipos de campo.

Plaspy proporciona un endpoint y puerto comunes para el reporte de dispositivos y maneja la detección del protocolo, de modo que los equipos puedan centrarse en la operación en lugar de en el parseo de bajo nivel. Conozca más sobre cómo Plaspy puede soportar despliegues FMC234 en https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y variantes de hardware, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el comportamiento del protocolo y las capacidades del firmware pueden cambiar con el tiempo.

---
slug: /reachfar/rf_v44/protocol
id: rf_v44-protocol
sidebar_label: Protocol
title: Reachfar - RF-V44 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Reachfar RF V44 y cómo se comunica con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - protocolo Reachfar RF V44
  - protocolo GPS Reachfar RF V44
  - compatibilidad RF V44 Plaspy
  - protocolo rastreador Reachfar
  - protocolo de rastreo RF V44
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS para ganado
  - rastreador GPS solar RF V44
  - comunicación RF V44
  - telemetría RF V44
---

# Reachfar - Protocolo RF‑V44

Esta página describe el contexto público del protocolo para usar el rastreador Reachfar RF‑V44 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, para que gerentes de flota, integradores y técnicos de campo comprendan las expectativas de conexión e informe necesarias para una integración exitosa.

Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello considere la información siguiente como contexto de alto nivel y no como instrucciones específicas de firmware.

## Resumen del protocolo

El protocolo de comunicación RF‑V44 es el conjunto de reglas que el rastreador utiliza para enviar ubicación, telemetría y eventos de alarma a un servidor remoto. Para la integración con Plaspy, la función del protocolo es garantizar que la plataforma reciba datos consistentes y con marca de tiempo para mostrar ubicación en tiempo real, historial y alertas.

- Habilitar fijaciones GPS periódicas y el envío de coordenadas y marcas de tiempo a Plaspy para mapeo y reproducción histórica.
- Reportar telemetría del dispositivo como nivel de batería, estado de carga solar y calidad de señal para que Plaspy genere alertas de salud del equipo.
- Enviar notificaciones de alarmas y eventos como despegue, detección de extracción, batería baja y violaciones de geocerca para un manejo inmediato de alertas.
- Ofrecer posicionamiento alternativo como LBS y Wi‑Fi como respaldo para mantener ubicaciones utilizables cuando el GNSS esté degradado.
- Incluir un identificador de dispositivo para que Plaspy pueda asociar los datos entrantes con el activo correcto y mostrar telemetría unificada en el panel.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador a partir de los datos que llegan. En la mayoría de implementaciones, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el RF‑V44 esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha los datos de los rastreadores en el endpoint compartido d.plaspy.com y en la dirección pública del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto de red, lo que simplifica la configuración y el enrutamiento.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos a la plataforma, eliminando en muchos casos la necesidad de selección manual.
- Asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy para que la detección automática ocurra sin pasos adicionales.
- Si un rastreador utiliza la configuración predeterminada del fabricante, confirme que el host de reporte y el transporte coincidan con los detalles de conexión de Plaspy.

## Transporte y contexto de conexión

El transporte y la dirección de conexión determinan cómo el RF‑V44 entrega sus cargas útiles de protocolo a Plaspy. El RF‑V44 puede configurarse para usar UDP o TCP según el soporte del dispositivo y la configuración elegida, y los equipos pueden apuntar al dominio de Plaspy o a la dirección IP numérica del servidor.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de despliegue.
- Los dispositivos pueden reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y las reglas de firewall.
- La selección de transporte (UDP frente a TCP) afecta las características de entrega pero no cambia el papel general del protocolo en reportar ubicación y telemetría.
- Valide la configuración de APN y de la SIM en el RF‑V44 para que los datos lleguen de forma fiable a Plaspy a través de la red celular.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el temporizado de mensajes, los campos de telemetría disponibles y los transportes soportados; revise las notas de firmware del dispositivo al solucionar problemas.
- Revisiones de hardware o variantes regionales pueden alterar las bandas de radio o el comportamiento de posicionamiento de respaldo, lo que influye en cómo y cuándo los datos llegan a Plaspy.
- Las configuraciones predeterminadas del fabricante pueden apuntar a servidores o puertos distintos; confirme que el rastreador esté dirigido a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la integración con Plaspy.
- La selección del transporte entre UDP y TCP debe coincidir con las capacidades del dispositivo y las restricciones de la red local.
- El aprovisionamiento de la SIM, las configuraciones APN y la disponibilidad de la red móvil son consideraciones prácticas que afectan la entrega del protocolo pero se configuran fuera del propio protocolo.
- En caso de duda, realice pruebas controladas con un solo dispositivo para verificar que Plaspy reciba la ubicación, la telemetría y los eventos de alarma esperados antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación RF‑V44 ayuda a asegurar una configuración confiable, alertas precisas y monitoreo de la salud del dispositivo a largo plazo cuando el rastreador se usa con Plaspy. Un contexto claro del protocolo reduce la incertidumbre durante la instalación y la resolución de problemas, y ayuda a los equipos a tomar decisiones de configuración informadas.

- Garantiza que el dispositivo apunte al endpoint correcto de Plaspy para que los datos se entreguen al destino adecuado.
- Facilita la interpretación de la telemetría del equipo para monitorear efectivamente la batería y el comportamiento de la carga solar.
- Ayuda a la resolución de problemas cuando faltan actualizaciones de ubicación o eventos, enfocando las verificaciones en transporte, SIM y comportamiento del firmware.
- Permite planificar respaldos de red como posicionamiento LBS o Wi‑Fi en zonas con mala cobertura GNSS.
- Reduce errores de configuración al dejar claro que Plaspy usa un puerto compartido y detección automática de protocolos.

## Por qué usar Plaspy con este protocolo

Usar el RF‑V44 con Plaspy combina hardware de rastreo robusto y de larga autonomía con una plataforma única para ubicación en tiempo real, geocercas, telemetría y reproducción histórica. Para gestores de ganado y operadores de activos remotos, esta combinación reduce visitas de mantenimiento, mejora la visibilidad operativa y acelera la respuesta a alarmas y eventos de extracción.

Para obtener más información sobre cómo Plaspy puede centralizar los datos RF‑V44 y apoyar sus necesidades de seguimiento visite https://www.plaspy.com. Tenga en cuenta que el soporte del protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y el firmware en el sitio del fabricante https://www.reachfargps.com/ antes de un despliegue masivo.

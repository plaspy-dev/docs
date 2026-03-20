---
slug: /queclink/wr100_leu/features
id: wr100_leu-features
sidebar_label: Features
title: QuecLink - WR100 LEU Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del router LTE industrial QuecLink WR100 LEU y su uso como pasarela compatible con Plaspy
keywords:
  - QuecLink WR100 LEU
  - funciones WR100 LEU
  - pasarela QuecLink
  - router LTE industrial
  - pasarela compatible con Plaspy
  - redundancia doble SIM
  - telemetría serial RS485 RS232
  - router LTE Cat 4
  - gestión remota FOTA
---

# QuecLink - Características del WR100 LEU

Esta página ofrece un panorama público y orientado a características del QuecLink WR100 LEU y su funcionamiento como pasarela compatible con Plaspy. Describe el papel del WR100 LEU en el transporte de telemetría de trackers GPS, mensajes de eventos y flujos de datos hacia la plataforma Plaspy, y define las capacidades prácticas que puede esperar al integrar este router con rastreadores compatibles con Plaspy.

La disponibilidad exacta de funciones y el comportamiento pueden variar según la versión de firmware, la revisión de hardware, el modelo regional, el método de instalación y las decisiones de implementación del fabricante. Use esta página como una guía práctica de las capacidades del producto y su relación con Plaspy, y consulte la documentación oficial de QuecLink para detalles específicos y actualizados del dispositivo.

## Resumen de características

El WR100 LEU es un router industrial compacto LTE Cat 4 diseñado para funcionar como una pasarela de comunicaciones resiliente para datos de telemetría y seguimiento. Está enfocado en el transporte seguro y siempre activo entre dispositivos de campo y plataformas en la nube como Plaspy, empleando múltiples opciones de backhaul y herramientas robustas de gestión remota para reducir tiempos de inactividad.

- Backhaul celular 4G LTE Cat 4 para reenvío de telemetría con alto rendimiento hacia servicios en la nube.
- Redundancia de doble SIM y monitorización de enlace para mantener la conectividad y garantizar reportes continuos de los trackers.
- Interfaces locales flexibles por cable e inalámbricas, incluyendo Ethernet, WiFi 2.4 GHz y puertos serie para dispositivos telemáticos conectados.
- Gestión remota basada en OpenWrt con interfaz web, acceso SSH, control por SMS y FOTA para mantenimiento centralizado.
- Opciones de seguridad y túneles como VPN y reglas de firewall para proteger el tráfico de telemetría y comandos rumbo a Plaspy.

## Funciones principales del QuecLink - WR100 LEU

- Módem celular LTE Cat 4 con conmutación a WCDMA y GSM para amplia cobertura y transporte de datos fiable.
- Fallo por doble SIM y balanceo automático de carga para minimizar interrupciones del servicio en trackers conectados.
- Dos puertos Ethernet FE, uno de ellos configurable como WAN o LAN, para soportar redes locales y escenarios de backhaul.
- WiFi IEEE 802.11 a/b/g/n 2.4 GHz para conectividad local cuando sea necesario.
- Opciones de interfaz serie (RS485 o RS232 según demanda) para recopilar telemetría de ignición, puertas, alarmas, CAN u otros dispositivos serie.
- Gestión basada en OpenWrt que incluye interfaz web, acceso SSH, control vía SMS y FOTA para actualizaciones remotas.
- Protecciones VPN y firewall además de funciones de monitorización para transmitir telemetría y mensajes de control de forma segura.
- Diseño industrial robusto con amplio rango de voltaje de entrada y temperaturas de operación extendidas para instalaciones en vehículos y exteriores.

## Cómo funcionan estas funciones con Plaspy

En un despliegue con Plaspy, el WR100 LEU actúa como la capa de transporte que entrega de forma confiable los datos de los trackers y la telemetría de los dispositivos a la plataforma Plaspy. Sus capacidades de redundancia, seguridad y gestión ayudan a garantizar que la información de ubicación y eventos proveniente de trackers compatibles con Plaspy llegue a la nube con la menor interrupción posible.

- Reenvío en tiempo real de coordenadas GPS y telemetría desde trackers conectados hacia Plaspy para mapeo y seguimiento.
- Disponibilidad continua del enlace mediante doble SIM y conmutación por fallo para que Plaspy reciba actualizaciones de posición y alarmas durante transiciones de red.
- Agregación de telemetría serie y CAN desde vehículos o activos para que Plaspy incorpore esas señales en paneles y reportes.
- Túneles cifrados y reglas de firewall para proteger los mensajes de comando y control que se enrutan entre Plaspy y los dispositivos gestionados.
- Gestión remota y FOTA que ayudan a mantener las pasarelas en línea y actualizadas, sosteniendo la visibilidad de Plaspy en flotas prolongadas.

## Casos de uso típicos

- Gestión de flotas donde se requiere un backhaul celular resiliente para mantener a los trackers reportando de forma continua a Plaspy.
- Sistemas antirrobo e inmovilización que exigen transporte seguro y de baja latencia para alarmas y comandos de control.
- Telemetría remota en sitios industriales donde sensores serie o CAN deben reenviarse a Plaspy para monitoreo.
- Proyectos de transporte inteligente e infraestructura donde pasarelas locales agregan múltiples fuentes de trackers para ingestión en Plaspy.
- Despliegues en comercio minorista y kioscos que necesitan conectividad LTE primaria con respaldo por Ethernet o WiFi para el seguimiento de activos en Plaspy.

## Notas sobre disponibilidad de funciones

- El firmware del fabricante y las variantes de hardware regionales pueden modificar las bandas celulares soportadas, las opciones de interfaz y los conjuntos exactos de funciones.
- La disponibilidad y el tipo de puerto serie pueden depender del modelo y ofrecerse como RS485 o RS232 según configuraciones específicas.
- El WR100 LEU es una pasarela de comunicaciones y no incluye un receptor GNSS integrado para seguimiento GPS autónomo; transporta datos de ubicación desde trackers compatibles con Plaspy o módulos GNSS externos.
- Las funciones de gestión remota y las opciones de VPN dependen del firmware instalado y de la configuración elegida por quien despliegue el equipo.
- Confirme los rangos de alimentación, las clasificaciones ambientales y las certificaciones para el modelo y la revisión específicos que planea instalar.

## Por qué usar Plaspy con estas funciones

Utilizar el WR100 LEU como columna vertebral de comunicaciones para trackers GPS compatibles con Plaspy brinda a las organizaciones un canal de transporte resiliente, gestionable y seguro. La redundancia de doble SIM del router, sus capacidades de gestión remota y sus interfaces industriales lo hacen adecuado para despliegues donde la disponibilidad, la continuidad de la telemetría y la entrega segura de comandos son prioridades en programas de seguimiento de flotas y activos.

Para obtener más información sobre cómo Plaspy se integra con pasarelas y trackers visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, comportamiento de firmware y detalles del fabricante verifique la información en el sitio oficial de QuecLink https://www.queclink.com/

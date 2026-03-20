---
slug: /neomatica/adm500/protocol
id: adm500-protocol
sidebar_label: Protocol
title: Neomatica - ADM500 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo Neomatica ADM500 para comunicación con Plaspy y rastreo vehicular confiable
keywords:
  - protocolo Neomatica ADM500
  - protocolo GPS ADM500
  - protocolo de comunicación ADM500
  - protocolo de rastreo ADM500
  - protocolo de rastreador GPS Neomatica
  - compatibilidad ADM500 Plaspy
  - telemetría Neomatica ADM500
  - rastreo vehicular ADM500
  - integración protocolo ADM500
  - soporte rastreadores GPS Plaspy
---

# Neomatica - Protocolo ADM500

Esta página ofrece contexto público sobre el protocolo utilizado por el Neomatica ADM500 con Plaspy. Resume cómo el equipo reporta posición y telemetría a Plaspy, qué papel tiene el protocolo en esa conexión y consideraciones prácticas para la configuración y resolución de problemas sin exponer detalles privados de implementación.

El ADM500 es un rastreador GPS compatible con Plaspy que incluye GNSS multiconstelación, conectividad celular LTE, doble nanoSIM, batería de respaldo y amplio soporte de sensores. Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para detalles específicos del firmware cuando sea necesario.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del ADM500 define cómo el dispositivo empaqueta y transmite posiciones GNSS, telemetría de sensores y mensajes de evento para que una plataforma telemática como Plaspy pueda ingerirlos e interpretarlos. El protocolo convierte lecturas crudas del dispositivo en datos útiles para mapeo, alertas, reportes e integraciones.

- Permite que el ADM500 envíe coordenadas GNSS y sellos de tiempo a Plaspy para rastreo en vivo y rutas históricas.
- Transmite telemetría de sensores provenientes de entradas analógicas, periféricos BLE, sondas 1 Wire, dispositivos RS 485 y canales digitales I/O para que Plaspy muestre telemetría y active alertas.
- Codifica mensajes impulsados por eventos como cambios de ignición, detección de movimiento por acelerómetro, interferencia (jamming) y pulsos de entrada para los flujos de eventos de Plaspy.
- Soporta familias de protocolos telemáticos comunes empleadas por dispositivos Neomatica, incluyendo ADM, EGTS, M2M y Wialon IPS, facilitando la interoperabilidad con plataformas de flotas.
- Proporciona mecanismos para señales de gestión remota del dispositivo, como actualizaciones de configuración y OTA cuando el equipo lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint público compartido y detecta automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan seleccionar un protocolo manualmente en la plataforma si el dispositivo está correctamente configurado para reportar a Plaspy. Esta detección automática simplifica la incorporación de dispositivos compatibles como el ADM500.

- Los dispositivos deben configurarse para reportar a Plaspy en d.plaspy.com o directamente a 54.85.159.138 usando el puerto de conexión asignado a Plaspy.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y utiliza el mismo puerto para todos los rastreadores compatibles.
- El ADM500 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Cuando un ADM500 envía telemetría al endpoint de Plaspy, Plaspy identifica el protocolo y mapea los campos dentro de la plataforma para su visualización y procesamiento.
- Dado que Plaspy realiza detección automática de protocolos, la tarea más común para el usuario es asegurarse de que el dispositivo apunte al endpoint y puerto correctos de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca el transporte de red y la direccionamiento usados para entregar la telemetría del ADM500 a Plaspy. Entender estos detalles de transporte ayuda a garantizar la entrega confiable a través de redes celulares y durante eventos de conectividad transitoria.

- Los dispositivos ADM500 pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 según preferencia de configuración o disponibilidad de DNS.
- Plaspy utiliza el mismo puerto de escucha 8888 para todos los dispositivos que soporta, lo que simplifica la configuración de dispositivos y reglas de firewall.
- La operación con doble SIM y el almacenamiento en búfer en el propio dispositivo ADM500 ayudan a mantener la continuidad cuando ocurren cambios de operador celular o cortes breves.
- Elija el modo de transporte (UDP o TCP) en función de la capacidad del dispositivo, la confiabilidad de la red y la guía del fabricante; ambos son compatibles para el reporte a Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los paquetes y la disponibilidad de funciones; verifique qué variantes del protocolo soporta el firmware específico del ADM500.
- Revisión de hardware y variantes regionales pueden implementar diferentes conjuntos de funciones o interfaces opcionales como RS 485 o soporte de sensores BLE.
- Algunas configuraciones del lado del fabricante o compilaciones de firmware opcionales pueden cambiar el comportamiento de transporte por defecto entre UDP y TCP.
- Funciones del dispositivo como actualizaciones OTA, configuración por Bluetooth y comandos remotos pueden requerir pasos de configuración adicionales en las herramientas del fabricante.
- Siempre valide el reporte del dispositivo apuntando el ADM500 a d.plaspy.com o 54.85.159.138 en el puerto 8888 y confirmando que los mensajes llegan a Plaspy.
- Al integrar sensores de terceros (sensores de combustible, periféricos BLE, dispositivos 1 Wire), confirme cómo se representan esos campos de sensor en la telemetría del dispositivo y cómo Plaspy los mapea.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico y claro del protocolo de comunicación del ADM500 reduce fricciones en la configuración y acorta el tiempo para disponer de telemetría confiable en Plaspy. Saber qué transmite el protocolo y cómo se configura el transporte ayuda a los operadores a resolver problemas más rápido y asegura una calidad de datos consistente.

- Garantiza que los dispositivos estén configurados para reportar al endpoint y puerto correctos de Plaspy para una ingesta confiable.
- Facilita la resolución de problemas de conectividad relacionados con UDP versus TCP y el comportamiento de redes celulares.
- Aclara qué datos de sensores y eventos incluirá el ADM500 para que Plaspy pueda mostrar los campos y alertas adecuados.
- Ayuda en la planificación de estrategias de actualización de firmware y gestión remota que dependen de las capacidades del protocolo.
- Reduce la ambigüedad al validar el almacenamiento de rutas históricas, el comportamiento de buffering y la continuidad con doble SIM.

## Por qué usar Plaspy con este protocolo

Usar el ADM500 con Plaspy ofrece a las organizaciones un camino simple para consolidar ubicación vehicular, telemetría de sensores y datos de eventos en una sola plataforma. La detección automática de protocolos y el enfoque de puerto unificado de Plaspy simplifican la incorporación de dispositivos, mientras que el ecosistema de sensores del ADM500 y la resiliencia de doble SIM soportan una amplia variedad de escenarios de monitoreo de flotas y activos.

Para obtener más información sobre Plaspy y cómo maneja integraciones de dispositivos visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente específica del ADM500 en el sitio del fabricante https://neomatica.com/.

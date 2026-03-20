---
slug: /nvs/navitrek_um_04/protocol
id: navitrek_um_04-protocol
sidebar_label: Protocol
title: NVS - Navitrek UM-04 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GPS NVS Navitrek UM-04 y su comunicación con Plaspy para monitoreo e integración de flotas
keywords:
  - protocolo NVS Navitrek UM-04
  - protocolo GPS Navitrek UM-04
  - protocolo rastreador NVS
  - protocolo Navitrek Plaspy
  - protocolo seguimiento vehicular
  - compatibilidad rastreador Plaspy
  - protocolo monitoreo de transporte
  - comunicación Navitrek UM-04
  - integración rastreador NVS
  - seguimiento de flotas Plaspy
---

# NVS - Protocolo Navitrek UM-04

Esta página describe el contexto público del protocolo para usar el rastreador NVS Navitrek UM-04 con la plataforma Plaspy. Explica cómo suele comunicarse el dispositivo con Plaspy, qué puntos de conexión se emplean y qué papel tiene el protocolo de reporte del rastreador para garantizar informes fiables de ubicación y estado.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo se comunica con su endpoint. El comportamiento exacto del protocolo en el Navitrek UM-04 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general del protocolo y en orientaciones de integración no sensibles.

## Resumen del protocolo

El protocolo de comunicación del Navitrek UM-04 permite que el dispositivo envíe datos de navegación, estado del vehículo y notificaciones de eventos a un servidor remoto como Plaspy. A grandes rasgos, el protocolo define cómo se identifica el rastreador, cómo transmite actualizaciones de ubicación y estado, y cómo el servidor confirma o responde a los reportes entrantes.

- Permite transmitir datos de posición obtenidos por GNSS y telemetría básica del vehículo hacia un servidor
- Incluye identificadores que permiten a Plaspy asociar los reportes con un dispositivo y un registro de flota específicos
- Soporta el reporte de eventos y alarmas para que centros de despacho reciban notificaciones oportunas
- Admite intercambio bidireccional de información cuando el dispositivo y el servidor lo soportan
- Funciona en conjunto con las opciones de capa de transporte para ofrecer entrega resiliente de datos de rastreo

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un único endpoint compartido y determina automáticamente el protocolo del dispositivo en función de la conexión entrante. En la práctica, esto implica que se necesita una configuración mínima dentro de la plataforma Plaspy cuando un Navitrek UM-04 está apuntando a los endpoints de Plaspy.

- Plaspy escucha en un endpoint común para aceptar los reportes de los dispositivos
- La plataforma detecta automáticamente el protocolo del rastreador a partir del tráfico entrante
- Los usuarios por lo general no necesitan seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado correctamente
- Una identificación correcta del dispositivo y una frecuencia de reporte adecuada ayudan a Plaspy a vincular los mensajes con el registro del vehículo correspondiente
- Si el dispositivo ofrece varias opciones de transporte, Plaspy puede aceptar reportes sobre el transporte soportado sin que el usuario deba elegir el protocolo

## Transporte y contexto de conexión

El Navitrek UM-04 puede configurarse para enviar datos sobre capas de transporte estándar soportadas por muchos rastreadores. Para la integración con Plaspy, el dispositivo puede apuntar al endpoint de Plaspy usando UDP o TCP en el puerto compartido. Los equipos pueden referenciar el servidor por nombre de host o por IP según las limitaciones de configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos de red
- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública conocida es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall
- Elija UDP para menor sobrecarga o TCP cuando se prefiera fiabilidad de conexión y confirmación de entrega, según la capacidad del dispositivo
- El enrutamiento de red, NAT y el comportamiento del operador móvil pueden afectar la selección del transporte y deben probarse en un entorno representativo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el Navitrek UM-04 pueden cambiar cómo se codifican los campos o qué opciones de telemetría están disponibles
- Las revisiones de hardware pueden modificar los IO disponibles, sensores adicionales o el comportamiento del reporte de alarmas
- Las herramientas de configuración y la documentación suministradas por el fabricante son la fuente autoritativa para opciones específicas del dispositivo
- La selección entre UDP y TCP puede requerir ajustes por condiciones del operador o del firewall
- Confirme que el dispositivo apunta al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 y que utiliza el puerto 8888 para una integración más sencilla
- Al integrar con sistemas de monitoreo de terceros, valide que los tipos de eventos y las unidades de telemetría coincidan con las expectativas de su backend

## Por qué es importante entender el protocolo

Conocer los aspectos públicos del protocolo de comunicación del Navitrek UM-04 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y mantener una operación consistente a largo plazo con Plaspy. Tener claro cómo el rastreador reporta datos reduce fricciones en la integración y mejora la visibilidad operativa.

- Ayuda a garantizar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Reduce el tiempo de resolución cuando faltan datos o los eventos no llegan al servidor
- Aclara si debe usar UDP o TCP según las restricciones de su despliegue y el entorno de red
- Permite expectativas realistas sobre qué campos de telemetría y eventos estarán disponibles en Plaspy
- Apoya la planificación de actualizaciones de firmware, reemplazos de hardware y despliegues a escala de flota

## Por qué usar Plaspy con este protocolo

Usar el Navitrek UM-04 con Plaspy ofrece un camino directo hacia la monitorización centralizada de vehículos, notificaciones de alarma y reporte básico de telemetría. La detección automática de protocolo de Plaspy y el enfoque de puerto único simplifican la incorporación de dispositivos y reducen errores de configuración en despliegues a gran escala.

Si desea conocer más sobre cómo Plaspy funciona con dispositivos como el Navitrek UM-04, visite https://www.plaspy.com. Para la documentación más reciente específica del dispositivo, notas de firmware y detalles de implementación del fabricante, verifique la información actual en el sitio oficial de NVS https://www.nvs-ts.ru/. El soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante.

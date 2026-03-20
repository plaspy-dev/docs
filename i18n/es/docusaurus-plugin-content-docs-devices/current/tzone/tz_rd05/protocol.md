---
slug: /tzone/tz_rd05/protocol
id: tz_rd05-protocol
sidebar_label: Protocol
title: TZone - TZ-RD05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del lector RFID TZone TZ-RD05 y cómo se comunica con Plaspy para integración y monitoreo
keywords:
  - Protocolo TZone TZ RD05
  - Protocolo RFID TZone TZ RD05
  - Protocolo TZ RD05 Plaspy
  - Protocolo de comunicación TZ RD05
  - Protocolo lector RFID TZone
  - Integración TZ RD05 Plaspy
  - Compatibilidad dispositivo TZ RD05
  - Protocolo seguimiento TZone TZ RD05
  - Documentación protocolo TZ RD05
  - Configuración protocolo TZone
---

# TZone - Protocolo TZ-RD05

Esta página describe el contexto público del protocolo para usar el TZone TZ-RD05 con Plaspy. Se centra en cómo el dispositivo suele comunicarse con una plataforma backend, el papel del protocolo de reporte y consideraciones prácticas de integración cuando Plaspy actúa como servicio receptor. El TZ-RD05 es un lector RFID de 2.4G con interfaces RS485 y LAN, diseñado para montaje en techo y pensado para gestión de activos y etiquetas en entornos variados.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto público seguro en lugar de detalles internos del dispositivo.

## Visión general del protocolo

El protocolo de comunicación del TZ-RD05 regula cómo el lector informa eventos de lectura de etiquetas y su estado a un backend, y cómo el backend puede emitir configuraciones o comprobaciones de salud. Para la integración con Plaspy, la función pública del protocolo es permitir el transporte fiable de eventos de identificación, marcas de tiempo y estado básico del equipo hacia la plataforma centralizada, de modo que esos eventos sean utilizables para monitoreo y operaciones.

- Proporciona una representación transportable de eventos de lectura de etiquetas y del estado del lector para la ingestión por Plaspy
- Permite que el dispositivo presente información de identificación y estado para que la plataforma asocie lecturas con activos
- Soporta flujos de trabajo de configuración y actualización de firmware en el dispositivo o en la capa de red local cuando estén disponibles
- Define cómo el lector inicia y mantiene una conexión con un servidor remoto para reportes continuos
- Permite al backend correlacionar marcas de tiempo de eventos, calidad de señal y otros metadatos necesarios para uso operativo

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos tipos de dispositivos usando ajustes de red compartidos y determinar automáticamente el protocolo correcto para cada dispositivo que informe a la plataforma. Cuando un TZ-RD05 se configura para enviar datos a Plaspy, la plataforma empata el tráfico entrante con los manejadores de protocolo soportados, por lo que los usuarios por lo general no necesitan seleccionar manualmente un protocolo en Plaspy.

- Plaspy recibe tráfico de dispositivos en el endpoint público d.plaspy.com y también acepta conexiones directas a 54.85.159.138
- Las conexiones se aceptan en el puerto 8888, que Plaspy usa como puerto compartido para todos los dispositivos soportados
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del equipo y la configuración de red
- Cuando un dispositivo informa correctamente al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador para su ingestión
- Usualmente, usted solo necesita asegurarse de que el dispositivo apunte al endpoint de Plaspy y que el transporte elegido esté permitido por la red local

## Transporte y contexto de conexión

El TZ-RD05 ofrece conectividad LAN y puede integrarse en una red existente para reportar eventos a un servidor remoto. Para la comunicación con Plaspy, el contexto práctico de conexión se centra en la alcanzabilidad de la red y el transporte seleccionado en el equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo soporte el firmware y la configuración
- Los equipos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos, por lo que las reglas de salida de la red deben permitir tráfico hacia el puerto 8888
- Las interfaces locales como RS485 se usan para integraciones in situ, mientras que la LAN gestiona el reporte remoto a Plaspy
- Asegúrese de que firewalls y NAT permitan que el lector inicie conexiones salientes hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y los campos disponibles; verifique qué firmware tiene su TZ-RD05 antes de depender de ciertos comportamientos
- Revisiones de hardware o variantes del modelo a veces modifican las interfaces disponibles o los ajustes de transporte por defecto
- Las configuraciones de fábrica y los endpoints predeterminados del fabricante pueden variar; confirme que el dispositivo esté apuntando al endpoint de Plaspy
- Seleccione el modo de transporte (UDP o TCP) que sea compatible tanto con el firmware del dispositivo como con la topología de su red
- Utilice la ruta de actualización de firmware del dispositivo cuando esté disponible para aplicar correcciones que afecten la compatibilidad del protocolo
- Valide el comportamiento en un entorno de pruebas antes de un despliegue masivo para confirmar la ingestión en Plaspy y el mapeo de eventos

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los equipos de operaciones y técnicos a configurar correctamente los dispositivos, resolver problemas de conectividad y mantener la fiabilidad a largo plazo al alimentar datos en Plaspy. Tener claro cómo el TZ-RD05 reporta lecturas de etiquetas y estado permite una resolución de incidentes más rápida y una gestión de dispositivos más precisa.

- Reduce el tiempo de configuración al garantizar que los dispositivos apunten correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Ayuda a identificar problemas de red o transporte cuando los dispositivos no aparecen en Plaspy
- Facilita decisiones informadas sobre actualizaciones de firmware y reemplazos de hardware que afecten el comportamiento del protocolo
- Permite mapear correctamente los eventos del lector a activos y flujos de trabajo dentro de Plaspy
- Mejora la fiabilidad al alinear la configuración del dispositivo con las expectativas de la plataforma

## Por qué usar Plaspy con este protocolo

Integrar el TZone TZ-RD05 con Plaspy ofrece a las organizaciones una plataforma centralizada para ingerir y aprovechar eventos de lectores RFID junto con otra telemetría. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos simplifican la puesta en marcha de lectores en red y reducen la configuración por dispositivo cuando coexisten múltiples tipos de equipos.

Si desea saber más sobre Plaspy y cómo puede recopilar y gestionar datos de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre protocolo y firmware específicos del dispositivo con TZone en http://www.tzonedigital.com/

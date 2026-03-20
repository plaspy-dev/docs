---
slug: /eelink/tk319_h/protocol
id: tk319_h-protocol
sidebar_label: Protocol
title: EElink - TK319‑H Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador EElink TK319‑H y cómo se comunica con Plaspy para seguimiento de flotas
keywords:
  - protocolo EElink TK319‑H
  - protocolo GPS EElink TK319‑H
  - protocolo de comunicación EElink TK319‑H
  - protocolo de rastreo EElink TK319‑H
  - protocolo del rastreador EElink
  - protocolo MoveLink EELINK
  - rastreador compatible con Plaspy
  - protocolo de rastreador GPS Plaspy
  - protocolo de seguimiento de vehículos
  - protocolo GPS para flotas
---

# EElink - Protocolo TK319‑H

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK319‑H con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión son públicos y qué verificar durante la integración y el despliegue. El objetivo es ofrecer orientación de protocolo útil y no sensible para equipos técnicos e integradores.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página cubre el contexto general y público del protocolo, no detalles internos de firmware ni la lógica privada de parsers.

## Visión general del protocolo

El protocolo de comunicación utilizado por el TK319‑H define las reglas y patrones de mensaje que el rastreador usa para reportar ubicación, estado y alarmas a una plataforma de backend. En el TK319‑H esto suele emplear variantes del protocolo MoveLink / EELINK para transmitir posición GPS/LBS, estado de ACC/encendido, movimiento y alarmas de seguridad, además de telemetría hacia sistemas de flota como Plaspy.

- Permite reportes periódicos y basados en eventos de ubicación y telemetría a una plataforma backend.
- Transporta señales de estado como ACC/encendido, alimentación externa, nivel de batería y eventos de alarma para que Plaspy los muestre.
- Permite flujos de trabajo remotos al transmitir mensajes identificables de dispositivo que Plaspy asigna a un vehículo o activo.
- Soporta métodos de ubicación de respaldo como LBS por estación base cuando el GPS no está disponible, manteniendo continuidad en Plaspy.
- Integra telemetría de interfaces opcionales como control de relés y sensores de temperatura para el monitoreo de activos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint y puerto público compartido y identifica automáticamente el protocolo entrante cuando un dispositivo configurado correctamente reporta. En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para enviar al endpoint de Plaspy y usa una variante compatible.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los rastreadores soportados y usa el mismo puerto para cada dispositivo.
- Los dispositivos pueden estar configurados para enviar sus reportes a d.plaspy.com o directamente a 54.85.159.138 según la preferencia de despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe tráfico en el endpoint compartido.
- La configuración típica solo requiere ajustar el host de Plaspy y los parámetros de transporte en el dispositivo y verificar la conectividad.

## Transporte y contexto de conexión

Los ajustes de conexión son clave para que el dispositivo reporte con éxito. El TK319‑H soporta enlace celular sobre GSM/WCDMA y puede configurarse para usar transporte UDP o TCP para alcanzar el endpoint de Plaspy en el puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP apuntando al puerto 8888 según la configuración del equipo y los requisitos de red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP directa 54.85.159.138 al configurar el servidor de reporte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Elija UDP para menor sobrecarga y una travesía de NAT más sencilla en algunas redes, o TCP cuando se prefiera entrega más fiable según su red y capacidades del dispositivo.
- Confirme que los ajustes de transporte y APN en el equipo coincidan con el plan del operador y las reglas de firewall para asegurar que el rastreador pueda comunicarse con Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes opcionales o campos envía el rastreador; siempre verifique la versión de firmware instalada con el proveedor del dispositivo.
- Las revisiones de hardware y los modelos regionales pueden incluir diferentes GNSS, soporte de bandas celulares u opciones de E/S que afectan la telemetría disponible.
- Las variantes de fabricante como MoveLink / EELINK pueden tener pequeñas diferencias; la detección automática de Plaspy cubre las variantes comunes, pero confirme el comportamiento exacto de mensajes para funciones avanzadas.
- La selección de transporte (UDP vs TCP) puede influir en la semántica de entrega de mensajes y debe probarse en su entorno.
- Periféricos opcionales como relés o sensores de temperatura requieren configuración en el dispositivo y validación de que Plaspy reciba la telemetría relacionada.
- Valide la compatibilidad y los detalles operativos contra la documentación del fabricante antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK319‑H reduce la fricción en la integración, acelera la resolución de problemas y mejora la fiabilidad a largo plazo cuando el rastreador se utiliza con Plaspy. Saber qué señales envía el equipo y cómo se conecta a Plaspy facilita validar instalaciones y ajustar alertas y flujos de trabajo.

- Asegura que el servidor, el transporte y la configuración APN estén correctos para que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad identificando si la causa es la red, el transporte o el firmware.
- Aclara qué campos de alarmas y telemetría entregará el rastreador para que Plaspy los asigne a flujos de trabajo y alertas de flota.
- Facilita la planificación de actualizaciones de firmware y cambios de hardware al entender posibles variaciones de protocolo entre revisiones.
- Mejora el aprovisionamiento y la configuración de firewalls al aprovechar la estrategia de puerto único y endpoint compartido de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TK319‑H con Plaspy ofrece un camino directo hacia visibilidad en tiempo real de vehículos, gestión de alarmas e informes de flota. La detección de ACC, las alarmas de movimiento y seguridad, y las entradas opcionales de relé y sensores del rastreador se integran de forma natural con los flujos de trabajo e incidentes de Plaspy, lo que hace la combinación útil para operadores de flotas, rentadoras y protección de activos de alto valor.

Si está evaluando o desplegando dispositivos TK319‑H, el modelo de endpoint único de Plaspy y la detección automática de protocolo reducen la complejidad de configuración. Para saber más sobre Plaspy y cómo integrarse con dispositivos EElink visite https://www.plaspy.com. Para definiciones específicas de protocolo del dispositivo, notas de firmware y los últimos detalles de implementación, consulte al fabricante en https://www.eelink.com.cn/ para confirmar el comportamiento actual y las características dependientes de la versión.

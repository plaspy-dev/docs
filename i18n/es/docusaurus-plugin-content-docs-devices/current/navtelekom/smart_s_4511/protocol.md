---
slug: /navtelekom/smart_s_4511/protocol
id: smart_s_4511-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-4511 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar Navtelekom SMART S-4511 con Plaspy usando configuración compartida y detección automática
keywords:
  - Navtelekom SMART S-4511
  - Protocolo SMART S-4511
  - Protocolo de rastreador GPS Navtelekom
  - Protocolo GPS SMART S-4511
  - Protocolo de rastreo Navtelekom
  - Protocolo de dispositivo Plaspy
  - Compatibilidad rastreador GPS Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo de gestión de flotas
  - Protocolo de monitoreo de activos
---

# Navtelekom - Protocolo SMART S-4511

Esta página resume el contexto público del protocolo para usar el rastreador Navtelekom SMART S-4511 con Plaspy. Describe, en términos generales, cómo se comunica el equipo, qué puntos de conexión expone Plaspy para el reporte y consideraciones prácticas para integrar el S-4511 en flotas y flujos de monitoreo gestionados con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el SMART S-4511 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; considere esta página como una guía y consulte la documentación del fabricante para detalles específicos de firmware.

## Resumen del protocolo

El SMART S-4511 transmite telemetría y eventos desde el vehículo hacia un servidor remoto usando su módem celular y posicionamiento GNSS. El protocolo del dispositivo define cómo la unidad se identifica, cómo reporta posición y valores de sensores, y cómo envía actualizaciones basadas en eventos para que Plaspy pueda procesar, mostrar y alertar sobre esa información.

- El protocolo incluye datos de identificación y sesión para que Plaspy asocie los mensajes con el dispositivo y la cuenta correctos.
- Las posiciones obtenidas por GLONASS/GPS y las marcas de tiempo se entregan dentro del flujo regular de telemetría.
- Estados de entradas digitales y analógicas, lecturas MODBUS y notificaciones de eventos se incluyen en el flujo de telemetría para uso en paneles e alertas.
- El reporte por eventos permite que la lógica compleja en el dispositivo dispare actualizaciones inmediatas al servidor.
- La telemetría relacionada con Bluetooth y sensores de corto alcance puede reenviarse a través del dispositivo por el mismo canal de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador usado por la conexión entrante. Cuando el SMART S-4511 se configura para reportar a Plaspy, la plataforma identificará los mensajes del dispositivo, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para configuración directa por IP es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados usan el mismo puerto para reportar.
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos a Plaspy en el puerto 8888 según la unidad y el transporte elegido.
- Si el rastreador apunta al endpoint de Plaspy y el operador móvil lo permite, Plaspy detectará automáticamente el protocolo y asociará el dispositivo con la cuenta.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el SMART S-4511 envía datos a Plaspy, más que el formato interno de los mensajes. El módem y la configuración del rastreador determinan si se usa TCP o UDP, y el dispositivo debe estar configurado para reportar al endpoint de Plaspy para completar la integración.

- El SMART S-4511 puede configurarse para usar UDP o TCP en el puerto 8888 para contactar a Plaspy.
- El reporte del dispositivo puede apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 en casos donde no se use DNS.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica el aprovisionamiento y la configuración del servidor.
- La configuración del operador móvil, APN y reglas de firewall deben permitir conexiones salientes al endpoint de Plaspy en el puerto 8888.
- Elegir UDP o TCP depende de las opciones de firmware del dispositivo y del equilibrio deseado entre comportamiento de entrega y sobrecarga.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el tiempo de envío, los campos disponibles o el comportamiento de eventos; revise siempre las notas de la versión del firmware.
- Las revisiones de hardware o diferencias de SKU pueden afectar las entradas disponibles, el comportamiento de Bluetooth o los sensores soportados.
- Las herramientas de configuración y los flujos de aprovisionamiento del fabricante pueden incluir plantillas para apuntar el dispositivo a Plaspy, con ajustes basados en dominio o IP.
- Seleccionar UDP frente a TCP en el dispositivo afectará las características del transporte pero no la capacidad de Plaspy para detectar el protocolo.
- El soporte MODBUS y de Eventos Complejos son características del dispositivo que influyen en la telemetría disponible para Plaspy, sin cambiar el endpoint de reporte.
- Valide la compatibilidad para integraciones avanzadas, como salidas de control remoto o dispositivos MODBUS de terceros, consultando la documentación oficial de Navtelekom.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación y el contexto de conexión reduce la fricción en la integración y ayuda a resolver problemas de configuración u operativos más rápido. Saber cómo el SMART S-4511 envía datos, qué transporte utiliza y qué características del dispositivo son reportadas permite a los gestores de flota e integradores ajustar el comportamiento para fiabilidad y precisión.

- Asegura que los dispositivos estén configurados para reportar al endpoint correcto de Plaspy y que los mensajes lleguen a la plataforma.
- Ayuda a decidir si UDP o TCP es más adecuado para una implementación o entorno de operador en particular.
- Aclara qué tipos de telemetría y eventos entregará el dispositivo a Plaspy para alertas e informes.
- Facilita la resolución de problemas cuando los mensajes no aparecen en Plaspy verificando red, APN, DNS y configuración del endpoint.
- Apoya la planificación de actualizaciones de firmware o reemplazos de equipos cuando una revisión de hardware cambia el comportamiento del protocolo.

## Ventajas de usar Plaspy con este protocolo

Utilizar el SMART S-4511 con Plaspy proporciona actualizaciones de ubicación confiables, manejo de eventos configurable y telemetría integrada para monitoreo de flotas y activos. La detección automática de protocolo de Plaspy y su endpoint único de reporte simplifican el aprovisionamiento y la gestión continua de dispositivos, mientras que las entradas I/O, el soporte MODBUS y la batería interna del S-4511 ofrecen telemetría flexible y mayor resiliencia para despliegues en vehículos y equipos.

Para conocer más sobre Plaspy y cómo gestiona las conexiones de dispositivos, visite https://www.plaspy.com. Para detalles más actuales y específicos del dispositivo, notas de firmware y guías de configuración del SMART S-4511, por favor verifique la información en el sitio del fabricante https://www.navtelecom.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

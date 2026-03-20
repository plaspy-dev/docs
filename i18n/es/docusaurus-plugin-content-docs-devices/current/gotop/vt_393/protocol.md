---
slug: /gotop/vt_393/protocol
id: vt_393-protocol
sidebar_label: Protocol
title: GOTOP - VT-393 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP VT-393 y su comunicación con Plaspy para gestión de flotas
keywords:
  - Protocolo GOTOP VT-393
  - Protocolo GPS GOTOP VT-393
  - Rastreador GPS VT-393
  - Protocolo GPS GOTOP
  - Compatibilidad VT-393 Plaspy
  - protocolo de rastreo vehicular
  - seguimiento de flotas GOTOP
  - comunicación de rastreador GPS
  - guía de protocolo de rastreadores
  - seguimiento con cámara GOTOP VT-393
---

# GOTOP - Protocolo VT-393

Esta página documenta el contexto público del protocolo para usar el rastreador GOTOP VT-393 con la plataforma Plaspy. Se enfoca en los aspectos de comunicación a alto nivel y en cómo el dispositivo reporta ubicación, estado, alarmas y medios cuando se integra en un sistema de gestión de flotas. Cuando es relevante se mencionan capacidades del hardware VT-393 —como soporte de cámara, comunicación bidireccional, almacenamiento en tarjeta SD y actualizaciones OTA— solo para dar contexto operativo al comportamiento del protocolo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento real puede diferir entre unidades y a lo largo del tiempo.

## Resumen del protocolo

El protocolo de comunicación del VT-393 es el método mediante el cual el dispositivo envía telemetría, eventos y otros datos a un servidor backend y recibe comandos o actualizaciones. En la práctica, el protocolo permite identificar el dispositivo, enviar actualizaciones de ubicación periódicas o por evento, mensajes de alarma y sensores, y transferencias opcionales de medios o registros que el VT-393 puede generar.

- Permite que el dispositivo se identifique ante un servidor remoto y establezca sesiones de reporte continuas
- Transporta posición GPS, marca de tiempo, velocidad e indicadores de estado para monitoreo de flotas
- Transmite alarmas y lecturas de sensores como frenadas bruscas, eventos de geocerca e entradas de combustible
- Soporta mensajes bidireccionales para intercambiar comandos remotos y acuses de recibo
- Puede utilizarse junto con cargas de medios o referencias a tarjetas SD cuando las funciones de cámara están activas

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y utiliza detección automatizada para interpretar los mensajes entrantes del rastreador. Cuando un VT-393 está apuntando al endpoint de Plaspy con la configuración de red correcta, Plaspy identificará el protocolo del rastreador sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El endpoint de Plaspy escucha en el puerto 8888 para reportes de dispositivos
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador
- Por lo general, usted no necesita elegir manualmente un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy

## Transporte y contexto de conexión

El transporte y la direccionamiento de la conexión son independientes del protocolo en sí, pero son esenciales para que el VT-393 se comunique con Plaspy. El VT-393 puede configurarse para enviar datos por la red celular usando UDP o TCP según el firmware del dispositivo y la configuración del operador.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntarse al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles para simplificar la configuración
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega pero no cambia el rol general del protocolo
- Confirme que el APN y la configuración GPRS del dispositivo estén correctos para que el rastreador pueda alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- La versión de firmware puede cambiar el tiempo de los mensajes, los campos disponibles o funciones opcionales como cargas de cámara y comportamiento OTA
- Revisiones de hardware o módulos opcionales pueden agregar o quitar funciones que afecten cuáles mensajes del protocolo se usan
- Las configuraciones predeterminadas del fabricante pueden diferir entre regiones y alterar el tipo de transporte o los intervalos de reporte
- Las funciones de comunicación bidireccional requieren direccionamiento entrante correcto y, en ocasiones, configuración adicional para comandos remotos
- La selección de transporte debe coincidir con la configuración del dispositivo y las características de la red para un reporte confiable
- Siempre valide el comportamiento del equipo en un entorno controlado antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VT-393 ayuda a asegurar una configuración fiable, reportes precisos y una resolución de problemas efectiva al integrarlo con Plaspy. Tener claras las expectativas sobre mensajes, transporte y comportamiento del firmware reduce fricciones en el despliegue y mejora la confiabilidad operativa a largo plazo.

- Ayuda a verificar que el rastreador está reportando correctamente posición, alarmas y datos de sensores a Plaspy
- Facilita la resolución de problemas de conectividad como APN mal configurado, dirección de servidor incorrecta o transporte equivocado
- Asegura que los comandos bidireccionales y las OTA de firmware funcionen según lo esperado cuando las operaciones lo requieren
- Mejora la confiabilidad al alinear los intervalos de reporte y los disparadores de eventos con las necesidades de la flota
- Apoya decisiones informadas cuando se introducen actualizaciones de firmware o cambios de hardware

## Por qué usar Plaspy con este protocolo

Usar el GOTOP VT-393 con Plaspy ofrece una vía práctica para organizaciones que necesitan visibilidad continua de vehículos, monitoreo de alarmas, verificación asistida por medios y supervisión centralizada de la flota. La cámara del VT-393 y sus múltiples opciones de entrada/salida complementan la telemetría típica, de modo que Plaspy puede presentar en una sola plataforma ubicación, eventos y datos de sensores para uso operativo.

Para saber más sobre cómo Plaspy gestiona conexiones de dispositivos y detección de protocolos visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y revisiones de hardware consulte la documentación oficial de GOTOP en https://www.gotop.cc/ ya que el comportamiento del fabricante puede cambiar con el tiempo y debe verificarse con el proveedor.

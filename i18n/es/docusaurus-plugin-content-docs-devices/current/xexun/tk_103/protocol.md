---
slug: /xexun/tk_103/protocol
id: tk_103-protocol
sidebar_label: Protocol
title: Xexun - TK-103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Xexun TK 103 y su comunicación con los servidores de Plaspy
keywords:
  - protocolo Xexun TK-103
  - protocolo GPS Xexun TK-103
  - rastreador TK-103 Plaspy
  - protocolo rastreador Xexun
  - protocolo de comunicación TK-103
  - rastreo GPS Xexun
  - seguimiento de vehículos TK-103
  - gestión de flotas TK-103
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador GPS Plaspy
---

# Xexun - Protocolo TK-103

Esta página describe, a nivel público, el contexto del protocolo para usar el rastreador GPS Xexun TK-103 con Plaspy. Se concentra en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales, explica los ajustes de conexión relevantes y señala consideraciones prácticas para la integración y resolución de problemas, sin exponer detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado correctamente para reportar a Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece una visión general segura y de alto nivel en lugar de comandos específicos de firmware.

## Visión general del protocolo

El TK-103 envía posición, estado y eventos de alarma a un servidor remoto usando el protocolo de reporte implementado por su firmware. Ese protocolo define cómo el rastreador se identifica, cómo se reportan las actualizaciones periódicas de ubicación y las alarmas, y cómo se comunican funciones opcionales como monitoreo remoto o carga de historial a una plataforma backend como Plaspy.

- Permite que el dispositivo presente información de identificación y sesión al servidor para asociar los datos con una cuenta de dispositivo.
- Transmite informes periódicos de ubicación y datos situacionales como movimiento, indicadores de velocidad y eventos de geocerca.
- Envía notificaciones de alarmas y estado, incluyendo SOS, batería baja, vibración y pérdida de alimentación, para permitir respuestas oportunas.
- Soporta funciones opcionales según firmware, como monitoreo remoto, subida de datos desde tarjeta SD y conmutación de SIM dual.
- Proporciona los datos que Plaspy necesita para almacenar, mostrar y analizar el historial de ubicaciones y la telemetría en tiempo real para monitoreo de flotas y activos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando llegan datos al endpoint de Plaspy. En la mayoría de los casos, solo debe configurar el dispositivo para que reporte a Plaspy y Plaspy determinará el manejador correcto para los mensajes entrantes.

- Los dispositivos deben apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en un único puerto compartido para todos los dispositivos con el fin de simplificar la configuración.
- El puerto usado por Plaspy para todos los dispositivos es 8888, y Plaspy detecta automáticamente el protocolo del rastreador una vez que recibe datos.
- Cuando un dispositivo está reportando correctamente, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.
- Una identificación adecuada del dispositivo e intervalos de reporte consistentes ayudan a Plaspy a clasificar y procesar los mensajes de los rastreadores de forma confiable.

## Transporte y contexto de conexión

El TK-103 puede configurarse para enviar reportes usando UDP o TCP según el firmware y la configuración del usuario. Entender el transporte y los ajustes de destino es importante para enrutar correctamente el dispositivo hacia Plaspy y para la configuración de la red en entornos corporativos o celulares.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita el firmware y la configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y reducir errores de puesta en marcha.
- Seleccionar UDP frente a TCP afecta el comportamiento de entrega y puede estar determinado por la configuración del rastreador o por la red del proveedor de SIM.
- Asegúrese de que cualquier firewall o ajuste del operador permita conexiones salientes hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y el comportamiento; verifique la versión de firmware al resolver problemas de integración.
- Revisiones de hardware u opcionales en un TK-103 pueden modificar la disponibilidad de funciones como registro en tarjeta SD o corte remoto.
- Las configuraciones del fabricante y los valores por defecto de APN o SMS pueden influir en si el dispositivo reporta correctamente a un servidor remoto.
- La selección de transporte entre UDP y TCP puede estar limitada por el firmware del dispositivo o por restricciones de la red local.
- La función de SIM dual y el cambio automático de red en el TK-103 pueden mejorar la cobertura, pero también puede añadir rutas de prueba adicionales para confirmar reportes fiables.
- Valide siempre la compatibilidad contra la documentación oficial del fabricante para la combinación exacta de hardware y firmware que esté utilizando.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de reporte del TK-103 ayuda a instaladores y administradores a configurar los dispositivos correctamente, diagnosticar problemas de conectividad e interpretar los datos que aparecen en Plaspy. Conocer el contexto de comunicación reduce el tiempo hasta la operatividad y mejora la confiabilidad a largo plazo.

- Garantiza que los dispositivos estén configurados para apuntar a d.plaspy.com o 54.85.159.138 y usen el puerto 8888 para que Plaspy pueda recibir los reportes.
- Ayuda a distinguir problemas de transporte de comportamientos relacionados con el protocolo o el firmware cuando los mensajes no llegan.
- Orienta la decisión de usar UDP o TCP según las condiciones de la red y el soporte del firmware.
- Facilita el mapeo correcto de alarmas y tipos de eventos del dispositivo a los flujos de alertas e informes de Plaspy.
- Reduce errores de configuración al alinear los intervalos de reporte y los ajustes de identificación del dispositivo con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Xexun TK-103 con Plaspy ofrece a las organizaciones un camino práctico hacia la visibilidad en tiempo real y el seguimiento histórico de vehículos y equipos valiosos. Plaspy acepta los reportes del rastreador en el endpoint y puerto compartidos, detecta automáticamente el protocolo del dispositivo y presenta ubicación, alarmas y estado para monitoreo operativo y gestión de flotas.

Si desea saber más sobre Plaspy y cómo la plataforma funciona con dispositivos como el TK-103, visite https://www.plaspy.com. Para obtener los detalles más actuales del protocolo, notas de firmware y manuales de dispositivo, verifique la documentación del fabricante en https://www.xexun.com/.

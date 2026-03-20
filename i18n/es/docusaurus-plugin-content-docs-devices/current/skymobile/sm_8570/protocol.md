---
slug: /skymobile/sm_8570/protocol
id: sm_8570-protocol
sidebar_label: Protocol
title: SkyMobile - SM-8570 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador SkyMobile SM-8570 y cómo se comunica con Plaspy usando ajustes compartidos
keywords:
  - protocolo SkyMobile SM-8570
  - protocolo GPS SM-8570
  - protocolo rastreador SkyMobile
  - compatibilidad SM-8570 Plaspy
  - comunicación rastreador GPS
  - seguimiento vehicular SM-8570
  - rastreador de activos SkyMobile
  - guía protocolo rastreador
  - compatibilidad dispositivos Plaspy
  - protocolo rastreo remoto
---

# SkyMobile - Protocolo SM-8570

Esta página describe el contexto público del protocolo para usar el rastreador GPS SkyMobile SM-8570 con Plaspy. Resume cómo el dispositivo se comunica con un servidor de rastreo remoto, qué flujos de datos son relevantes para la integración y qué aspectos gestiona Plaspy para aceptar y parsear los reportes entrantes de este modelo.

El SM-8570 es un localizador portátil cuatribanda GSM con alta sensibilidad GPS y funciones como un chipset UBLOX integrado, sensor de movimiento y largos tiempos de espera en reposo. El dispositivo puede enviar reportes de posición vía IP o SMS y el fabricante lo describe como compatible con el protocolo de comunicaciones @Track. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante.

## Descripción general del protocolo

El protocolo usado por el SM-8570 es el conjunto de mensajes y opciones de transporte que el dispositivo emplea para reportar ubicación, estado y datos de sensores a un servidor. En términos prácticos para la integración, el protocolo determina cómo se identifica el rastreador, con qué frecuencia reporta y qué campos incluye cada reporte.

- Permite que el rastreador transmita la posición GPS y el estado del equipo a un servidor remoto para que plataformas como Plaspy puedan procesar y mostrar los datos de localización.
- Transporta identificadores del equipo y campos de estado que permiten al servidor asociar los reportes con el activo y la cuenta correctos.
- Admite métodos de entrega alternativos como el reporte por IP a un endpoint de servidor o la entrega por SMS cuando así lo configure el integrador.
- Interactúa con las funciones de energía y detección de movimiento del dispositivo para reducir la frecuencia de reportes cuando está inmóvil y ahorrar batería.
- Puede incluir extensiones específicas del fabricante u opciones de sensores adicionales según el firmware y la configuración.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un único endpoint público y puerto para el envío de reportes y realiza detección automática de protocolo, por lo que normalmente no es necesario seleccionar manualmente un protocolo. Cuando un SM-8570 correctamente configurado apunta su destino de reporte al endpoint de Plaspy, la plataforma identificará el formato entrante y encaminará los datos al flujo de procesamiento adecuado.

- El dominio del servidor de Plaspy es d.plaspy.com y la plataforma también acepta conexiones a 54.85.159.138.
- El puerto que usa Plaspy para todos los dispositivos soportados es 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según lo soporte su firmware y la configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y las reglas de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que un reporte dirigido correctamente suele procesarse sin necesidad de elegir el protocolo de forma manual.

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo el SM-8570 accede a la red y hacia dónde envía sus reportes. Para la integración con Plaspy, concentre la atención en el endpoint del servidor y en el protocolo de transporte que el equipo esté configurado para usar, ya que son los parámetros que deben apuntar a Plaspy para el manejo automático.

- El SM-8570 puede entregar reportes vía IP cuando está configurado, y ese transporte IP puede usar UDP o TCP.
- Para el reporte a Plaspy, los dispositivos pueden apuntar al nombre de dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- El puerto compartido de Plaspy para el envío de reportes de dispositivos es 8888 y lo usan todos los rastreadores soportados.
- Elija UDP si prefiere menor sobrecarga y latencia reducida y el dispositivo lo soporta; elija TCP cuando necesite entrega más fiable y el dispositivo lo implemente.
- Asegúrese de que los firewalls de red permitan tráfico saliente desde el dispositivo hacia el endpoint y puerto de Plaspy indicados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar el contenido de los mensajes, el orden de los campos o las funcionalidades opcionales; revise siempre las notas de firmware para detectar diferencias.
- Las revisiones de hardware y los módulos opcionales pueden añadir o quitar sensores y campos asociados en los reportes que afecten el parseo posterior.
- El SM-8570 admite tanto el reporte por IP como por SMS; la entrega por SMS es útil donde no hay conectividad IP disponible, pero requiere un manejo separado fuera del endpoint IP.
- La elección del transporte (UDP vs TCP) puede estar limitada por el firmware del dispositivo o por el comportamiento de la red del operador y puede influir en las características de entrega.
- Plaspy detecta automáticamente variantes del protocolo cuando el dispositivo apunta al endpoint de la plataforma, pero se requiere una configuración correcta del equipo.
- Para conjuntos de comandos precisos, opciones de cifrado o configuraciones específicas del fabricante, consulte la documentación de SkyMobile.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el SM-8570 ayuda a asegurar una configuración fiable, acelerar la resolución de problemas y lograr un funcionamiento predecible una vez que los dispositivos estén desplegados con Plaspy. Incluso con detección automática, la familiaridad práctica con el protocolo y las opciones de transporte reduce la fricción en la implementación y facilita la identificación de problemas de conectividad.

- Confirma que la configuración del endpoint y del puerto en el equipo es correcta para que los reportes lleguen a Plaspy sin mapeos manuales.
- Ayuda a diagnosticar problemas de red como puertos bloqueados, pérdida de paquetes UDP o comportamiento en itinerancia que afecte los reportes.
- Orienta sobre expectativas de vida útil de batería y la cadencia de reportes cuando están activos el sensor de movimiento y las funciones de gestión de energía.
- Facilita la validación de que cambios de firmware o configuración no hayan alterado campos necesarios para que Plaspy relacione los dispositivos con las cuentas.
- Permite planificar respaldos como el reporte por SMS u otros transportes en entornos con conectividad limitada.

## Por qué usar Plaspy con este protocolo

Usar el SM-8570 con Plaspy brinda a las organizaciones una manera práctica de recolectar y visualizar reportes de posición y estado desde un equipo diseñado para el rastreo portátil de activos. El endpoint único de Plaspy y la detección automática de protocolo reducen la complejidad inicial de configuración, de modo que los equipos de operaciones puedan concentrarse en el despliegue, la supervisión y las reglas en lugar de en detalles de parseo de bajo nivel.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el SkyMobile SM-8570, visite https://www.plaspy.com para consultar las capacidades de la plataforma y las opciones de integración. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre el protocolo y el firmware específico del dispositivo en el sitio de SkyMobile en http://www.skymobile.com.co.

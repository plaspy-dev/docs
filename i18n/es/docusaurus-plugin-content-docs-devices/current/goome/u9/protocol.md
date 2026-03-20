---
slug: /goome/u9/protocol
id: u9-protocol
sidebar_label: Protocol
title: Goome - U9 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Goome U9 y cómo se comunica con Plaspy para reportar ubicación y opciones de respaldo
keywords:
  - Protocolo Goome U9
  - GPS Goome U9
  - seguimiento Goome U9
  - Goome U9 Plaspy
  - protocolo GPS Goome
  - protocolo rastreador U9
  - rastreo vehicular Goome U9
  - compatibilidad Goome U9
  - protocolo rastreador GPS Plaspy
  - comunicación Goome U9
---

# Goome - Protocolo U9

Esta página resume el contexto público del protocolo para usar el rastreador GPS Goome U9 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo y qué debe considerar al configurar el U9 para que reporte ubicación y eventos a la plataforma Plaspy. La información se centra en el contexto de comunicación y la compatibilidad, no en detalles internos sensibles de implementación.

Plaspy emplea configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre unidades U9 o entre versiones de firmware.

## Resumen del protocolo

El Goome U9 transmite ubicación, estado y eventos de alarma desde el rastreador hacia un endpoint en la nube usando el protocolo de reporte definido por el fabricante. Este protocolo permite al dispositivo identificarse ante el backend, enviar ubicación y telemetría, y entregar notificaciones de eventos que Plaspy puede procesar para mapeo, alertas y reproducción histórica.

- El protocolo transmite datos GPS y modos de ubicación alternativos como LBS y AGPS para que el backend reciba coordenadas útiles.
- Los campos de identificación y reporte permiten a Plaspy asociar los mensajes entrantes con el registro de dispositivo correcto.
- La telemetría y los reportes de eventos proporcionan insumos para geocercas, manejo de SOS, control de inmovilizadores y funciones de reproducción histórica.
- El comportamiento observado en red puede depender del firmware y la revisión de hardware del U9, por lo que los mensajes pueden variar entre dispositivos.
- La condición principal para recibir datos es que el dispositivo esté configurado correctamente para apuntar al endpoint de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint del servidor de Plaspy. En la mayoría de los casos, usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el rastreador está correctamente configurado para enviar datos a la plataforma.

- Plaspy usa un endpoint de servidor compartido para reportes de dispositivos en d.plaspy.com.
- La dirección IP del servidor de Plaspy es 54.85.159.138 para escenarios donde se requiere usar una IP.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por la plataforma usan este mismo puerto.
- Los dispositivos pueden reportar usando UDP o TCP según soporte y configuración del equipo.
- Cuando los datos llegan al endpoint de Plaspy, la plataforma asocia el flujo entrante con un protocolo soportado y lo procesa automáticamente.

## Transporte y contexto de conexión

Comprender cómo se conecta el U9 a Plaspy ayuda a garantizar una configuración correcta y un reporte confiable. El U9 soporta múltiples modos de ubicación y puede configurarse para enviar sus reportes a Plaspy mediante protocolos de transporte comunes.

- El U9 puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Los dispositivos pueden usar transporte UDP o TCP en el puerto 8888 según la configuración y las condiciones de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración es consistente entre modelos.
- La elección entre UDP y TCP puede venir dictada por los valores por defecto del firmware, la fiabilidad de la red o por funciones específicas requeridas por el rastreador.
- Asegúrese de que cualquier firewall o router intermedio permita tráfico saliente hacia el puerto 8888 para evitar problemas de entrega.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y deberían validarse con las notas actuales del fabricante.
- Las revisiones de hardware pueden introducir diferentes capacidades de reporte o valores por defecto para la selección de transporte.
- Puede ser necesario utilizar las herramientas de configuración del fabricante o comandos SMS para apuntar el U9 a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas funciones, como control de relé, SOS o alarmas por vibración, pueden depender del firmware del dispositivo y de las opciones habilitadas.
- La elección de transporte entre UDP y TCP puede afectar características de entrega como confirmaciones y retransmisiones.
- Siempre verifique el comportamiento del dispositivo después de la configuración para confirmar que Plaspy esté recibiendo los datos esperados.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del U9 facilita la instalación inicial, la resolución de problemas y el mantenimiento de flujos de telemetría confiables hacia Plaspy. Conocer el papel del protocolo y el contexto del transporte reduce el tiempo de configuración y aumenta la confianza en despliegues en producción.

- Ayuda a asegurar que el dispositivo esté apuntando al endpoint correcto de Plaspy para una entrega consistente de datos.
- Facilita el diagnóstico de problemas de conectividad al confirmar el transporte y puerto correctos.
- Aclara las expectativas sobre qué telemetría y eventos puede reportar el rastreador según su firmware.
- Orienta las decisiones sobre funciones remotas como corte de relé y manejo de SOS que dependen de mensajes fiables.
- Apoya la gestión del ciclo de vida al destacar la necesidad de revalidar el comportamiento tras actualizaciones de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Goome U9 con Plaspy brinda a las organizaciones un backend unificado para ubicación en tiempo real, monitoreo de eventos, geocercas y reproducción histórica. La detección automática de protocolos de Plaspy y las configuraciones de conexión compartidas simplifican el onboarding y reducen los pasos de configuración necesarios por dispositivo.

Si desea saber más sobre cómo Plaspy se integra con una amplia gama de rastreadores, incluido el Goome U9, visite https://www.plaspy.com. Para detalles específicos y más recientes sobre el protocolo del dispositivo, notas de firmware y comandos de configuración, consulte la documentación oficial de Goome en http://www.goomegpstracker.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable verificar la información con el fabricante.

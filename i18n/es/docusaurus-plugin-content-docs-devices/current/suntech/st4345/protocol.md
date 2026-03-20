---
slug: /suntech/st4345/protocol
id: st4345-protocol
sidebar_label: Protocol
title: Suntech - ST4345 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Suntech ST4345 y cómo se comunica con Plaspy para rastreo en tiempo real y telemetría de flotas
keywords:
  - Protocolo Suntech ST4345
  - Protocolo GPS Suntech ST4345
  - Protocolo de comunicación Suntech ST4345
  - Protocolo rastreador Suntech
  - Compatibilidad ST4345 con Plaspy
  - Protocolo rastreador de vehículos Suntech
  - Integración de telemetría ST4345
  - Protocolo de rastreo ST4345
  - Rastreo de flotas Suntech ST4345
  - Resumen de conectividad ST4345
---

# Suntech - Protocolo ST4345

Esta página describe el contexto público del protocolo para usar la familia Suntech ST4345 con Plaspy. Se centra en cómo el equipo reporta posiciones GNSS, telemetría y eventos a la plataforma Plaspy en términos no sensibles y agnósticos a la implementación. La serie ST4345 es un rastreador compacto con certificación IP67, diseñado para bajo consumo y conectividad celular robusta en LTE Cat M1, NB‑IoT y 2G de respaldo; este documento explica cómo ese dispositivo se comunica con Plaspy para rastreo en tiempo real y monitoreo de flotas.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y apuntar al servidor Plaspy en d.plaspy.com (54.85.159.138). El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en el contexto público del protocolo más que en detalles internos de firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el ST4345 envía datos de ubicación, estado y eventos a un servidor remoto y cómo esos datos se representan para la ingestión en Plaspy. En términos prácticos, el protocolo asegura que el rastreador pueda identificarse, anunciar telemetría y estados de eventos, y permitir que un servidor construya un historial de posiciones y alertas útiles sin exponer detalles de máquina propietarios.

- Permite actualizaciones periódicas de GNSS y mensajes impulsados por eventos que Plaspy convierte en ubicaciones en el mapa, alertas e informes.
- Transporta estado del dispositivo y telemetría como energía, estados de E/S y entradas de sensores para que Plaspy interprete condiciones del vehículo.
- Proporciona identificadores y metadatos de estado que permiten a Plaspy correlacionar mensajes con una unidad ST4345 específica y mantener el historial del dispositivo.
- Admite transportes orientados a conexión y sin conexión, por lo que los dispositivos pueden usar TCP o UDP según la red y la configuración.
- Funciona con las variantes ST4345 (por ejemplo ST4345R, ST4345LB, ST4345LC) que ofrecen diferentes opciones de E/S o BLE, dejando el manejo del protocolo al lado del servidor.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones y mensajes entrantes en un único endpoint compartido y determina automáticamente cómo manejar cada dispositivo. Normalmente usted no necesita elegir un protocolo dentro de Plaspy cuando el rastreador está correctamente apuntado al endpoint de Plaspy; la plataforma asocia los mensajes entrantes con el dispositivo origen y aplica el manejo correspondiente.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles y usa detección automática para gestionar múltiples formatos de rastreadores.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El ST4345 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del dispositivo y las condiciones de la red.
- Cuando los mensajes llegan a Plaspy, la plataforma los asigna al registro de dispositivo correspondiente e ingiere posiciones, telemetría y eventos.
- En la mayoría de los casos no se requiere una selección manual de protocolo dentro de Plaspy una vez que el dispositivo apunta al servidor Plaspy y transmite datos.

## Contexto de transporte y conexión

Las opciones de conexión afectan cómo el ST4345 llega a Plaspy pero no cambian el propósito general del protocolo: entregar ubicación y telemetría. El ST4345 soporta múltiples modos de radio para amplia cobertura y puede usar TCP o UDP para enviar reportes al servidor de Plaspy en el puerto estándar.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para comunicarse con Plaspy.
- Configure el rastreador para reportar al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 según lo prefiera.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que la configuración se simplifica en flotas.
- La elección de transporte (UDP vs TCP) puede influirla la confiabilidad de la red, el tamaño de los mensajes y las mejores prácticas del operador.
- La pila celular multimodo del ST4345 (LTE Cat M1, NB‑IoT y 2G de respaldo) afecta la fiabilidad de la entrega de mensajes en distintas regiones.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles o ítems de telemetría opcionales; verifique las notas de la versión de firmware para el comportamiento del dispositivo.
- Las variantes de hardware como ST4345R, ST4345LB y ST4345LC pueden exponer diferentes funciones de E/S o BLE que afectan qué telemetría está disponible para Plaspy.
- Algunas instalaciones pueden preferir TCP para entrega fiable o UDP para menor overhead; asegúrese de que el operador de red admita el transporte seleccionado.
- Los servidores de gestión remota o de configuración del fabricante pueden alterar los ajustes de reporte del dispositivo; confirme que el rastreador esté apuntando a Plaspy si usa aprovisionamiento remoto.
- El soporte celular regional (NB‑IoT, LTE Cat M1, 2G de respaldo) influye en la conectividad y puede requerir seleccionar el modo de radio apropiado para su despliegue.
- Siempre valide el comportamiento del dispositivo con la documentación oficial del fabricante antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el ST4345 se comunica con un servidor de rastreo ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y prever el comportamiento a largo plazo en Plaspy. Saber a dónde se envían los mensajes, qué transportes están disponibles y cómo las variantes de firmware o hardware cambian la telemetría ayuda a planificar despliegues y responder a incidencias con eficacia.

- Garantiza que los dispositivos apunten correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que los datos lleguen a Plaspy.
- Ayuda a elegir entre TCP o UDP según las condiciones de la red y los requisitos operativos.
- Facilita la resolución de problemas al acotar las causas a transporte, aprovisionamiento o diferencias de firmware en lugar de la configuración de la plataforma.
- Aclara las expectativas sobre la telemetría disponible al usar distintas variantes ST4345 o niveles de firmware.
- Apoya la planificación para despliegues regionales donde la cobertura NB‑IoT, LTE Cat M1 o 2G puede variar.

## Por qué usar Plaspy con este protocolo

Usar la serie ST4345 con Plaspy ofrece una vía práctica hacia ubicación en tiempo real, geocercas configurables, alertas por eventos y almacenamiento de telemetría a largo plazo para flotas, remolques, motocicletas y otros activos de alto valor. La forma compacta del ST4345, su carcasa resistente y su I/O flexible, combinados con la ingestión de Plaspy, entregan información accionable sin configuraciones complejas por dispositivo.

Para saber más sobre Plaspy y cómo la plataforma soporta la integración de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del protocolo del dispositivo, notas de firmware e información sobre variantes de hardware, por favor verifique las especificaciones en el sitio del fabricante en http://www.suntechint.com/ ya que la implementación y el comportamiento del firmware pueden cambiar con el tiempo.

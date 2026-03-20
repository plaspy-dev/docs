---
slug: /supermate/d10_w/protocol
id: d10_w-protocol
sidebar_label: Protocol
title: Supermate - D10-W Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Supermate D10 W y cómo se comunica con Plaspy para integración fiable
keywords:
  - Protocolo Supermate D10 W
  - Supermate D10 W GPS
  - Supermate D10 W Plaspy
  - Protocolo seguimiento Supermate
  - Comunicación D10 W
  - Rastreador GPS Plaspy
  - Seguimiento vehículos Supermate D10
  - Rastreo activos D10 W
  - Gestión flotas D10 W
  - Compatibilidad protocolo Supermate
---

# Supermate - Protocolo D10-W

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación para usar el rastreador Supermate D10 W con Plaspy. Explica cómo el protocolo del dispositivo transmite ubicación, estado y alertas a la plataforma Plaspy, manteniéndose en un nivel práctico para permitir integraciones sin entrar en detalles internos del firmware.

El Supermate D10 W es un rastreador compacto diseñado para uso personal y de flotas, con funciones como seguimiento en tiempo real, geocercas y un botón de emergencia SOS. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las diferencias por unidad pueden afectar el formato y la frecuencia de los mensajes.

## Descripción general del protocolo

El protocolo del rastreador define los comportamientos que el dispositivo usa para informar posición, estado y eventos a un servidor backend. Para la integración con Plaspy, el protocolo determina cómo se identifica el equipo, cómo reporta eventos GPS y alarmas, y cómo responde a configuraciones básicas o interacciones de keepalive.

- Permite que el D10 W envíe actualizaciones de ubicación y notificaciones de eventos a Plaspy para monitoreo en tiempo real.
- Incluye datos de identificación del dispositivo para que Plaspy pueda asociar los informes con el activo correcto.
- Transmite eventos de alarma y SOS de forma que Plaspy pueda mostrarlos a usuarios e integraciones.
- Soporta latidos periódicos o reportes de estado que indican la disponibilidad del equipo.
- Permite cambios de configuración y comandos remotos cuando el dispositivo y el fabricante habilitan actualizaciones desde el servidor.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un punto final compartido y determina automáticamente qué protocolo de rastreador usa cada conexión. Esto reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy cuando el equipo apunta al endpoint de Plaspy.

- Plaspy escucha en un único endpoint público en d.plaspy.com y también aceptará conexiones al IP público 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador.
- Cuando un D10 W está configurado para reportar al endpoint de Plaspy, por lo general no es necesaria la selección manual del protocolo dentro de Plaspy.
- Una configuración adecuada en el equipo asegura que la plataforma reciba identificaciones y eventos en un formato que pueda procesar.

## Transporte y contexto de conexión

Las opciones de conexión forman parte del contexto de comunicación más amplio, pero no del formato interno de los mensajes. El D10 W puede configurarse para usar protocolos de transporte IP comunes según el dispositivo y la red, y Plaspy soporta esos transportes en su puerto compartido.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del dispositivo y condiciones de red.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la dirección IP 54.85.159.138 como endpoint de reporte.
- Plaspy acepta conexiones UDP y TCP en el mismo puerto usado por todos los dispositivos compatibles.
- Asegúrese de que el APN y la configuración del servidor del rastreador estén definidos para reportar al endpoint de Plaspy para que los mensajes lleguen a la plataforma.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar la cadencia de los mensajes y los tipos de eventos disponibles; verifique qué comportamientos aplican a su unidad D10 W.
- Los menús de configuración del fabricante a veces permiten elegir el transporte, el intervalo de reporte y los disparadores de eventos, lo que afecta la interacción con Plaspy.
- Algunas unidades D10 W pueden soportar tanto UDP como TCP; seleccione el transporte que mejor se adapte a su entorno de red y a la configuración del equipo.
- Las alarmas del dispositivo, como SOS o eventos de geocerca, dependen de la configuración local y pueden requerir habilitación explícita.
- Valide la compatibilidad comprobando que el equipo esté apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto compartido de Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar la entrega confiable de datos de ubicación y eventos a Plaspy y agiliza la configuración y solución de problemas cuando surgen incidencias de integración.

- Facilita la verificación de que el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Ayuda a los equipos a interpretar comportamientos del dispositivo, como intervalos de reporte y disparadores de eventos.
- Mejora la resolución de problemas cuando los mensajes no llegan o faltan eventos.
- Permite planificar actualizaciones de firmware y revisiones de hardware que puedan afectar las comunicaciones.
- Aclara las expectativas sobre la configuración remota y qué elementos gestiona el dispositivo frente al servidor.

## Por qué usar Plaspy con este protocolo

Usar el Supermate D10 W con Plaspy ofrece a las organizaciones una forma práctica de centralizar ubicación, alertas de perímetro y eventos de emergencia en una sola plataforma. La detección automática de protocolo de Plaspy y su enfoque de endpoint único simplifican la incorporación y reducen la configuración manual por dispositivo en el lado del servidor.

Plaspy proporciona visibilidad centralizada para flotas y activos, facilitando el uso de los reportes del D10 W para enrutamiento, monitoreo de seguridad y supervisión operativa. Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; confirme la información de protocolo específica del dispositivo con el fabricante en http://www.gps-summit.com/

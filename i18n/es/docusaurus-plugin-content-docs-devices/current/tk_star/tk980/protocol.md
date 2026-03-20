---
slug: /tk_star/tk980/protocol
id: tk980-protocol
sidebar_label: Protocol
title: TK-Star - TK980 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el tracker OBD2 TK-Star TK980 a Plaspy para rastreo vehicular y telemetría
keywords:
  - protocolo TK-Star TK980
  - protocolo GPS TK980
  - compatibilidad TK980 OBD2 Plaspy
  - protocolo rastreador GPS TK-Star
  - protocolo rastreo vehicular
  - protocolo dispositivo Plaspy
  - protocolo telemetría OBD2
  - protocolo de comunicación TK980
  - rastreo de flotas TK980
  - compatibilidad rastreo TK980
---

# TK-Star - Protocolo TK980

Esta página describe el contexto público del protocolo para usar el rastreador OBD2 4G TK-Star TK980 con Plaspy. Explica cómo el equipo reporta posición y telemetría OBD2 a la nube, cómo Plaspy recibe esos reportes y qué esperar durante la configuración y solución de problemas sin exponer detalles privados de implementación.

El TK980 es un dispositivo OBD2 plug and play que soporta posicionamiento multimodal y amplia cobertura celular. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre envíos o versiones de firmware.

## Descripción general del protocolo

El protocolo de reporte define cómo el TK980 comunica telemetría y eventos a un servidor remoto para que Plaspy pueda ingerir ubicación, diagnósticos y alarmas. La visión pública del protocolo se centra en las clases de datos que se envían y en cómo se utilizan, más que en los detalles propietarios de los paquetes.

- Permite que el TK980 envíe actualizaciones de ubicación periódicas o activadas por eventos y telemetría OBD2 a Plaspy para monitoreo en tiempo real.
- Transmite notificaciones de eventos como alarmas por vibración, activaciones de geocerca y detección de movimiento para que Plaspy genere alertas.
- Identifica el dispositivo ante el servidor para que Plaspy pueda asociar los datos entrantes con el vehículo y la cuenta correctos.
- Transporta datos de posicionamiento híbrido incluyendo GPS, BeiDou y GLONASS, además de indicios LBS y Wi‑Fi para mejorar la cobertura.
- Entrega lecturas de parámetros del vehículo desde la interfaz OBD2 para soportar telemetría y diagnóstico en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. Usted generalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy si el equipo apunta al servidor de Plaspy y usa los ajustes de transporte soportados.

- Las conexiones entrantes de los dispositivos se dirigen al endpoint de Plaspy para que la plataforma pueda observar e identificar el formato de reporte del rastreador.
- Plaspy utiliza un único puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración del equipo y reduce errores de puesta en marcha.
- Si el dispositivo está configurado para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto correcto, Plaspy aceptará la conexión y determinará el protocolo automáticamente.
- Una identificación adecuada del dispositivo en el primer contacto ayuda a Plaspy a emparejar el rastreador con la cuenta de flota correcta y activar las funciones de la plataforma.
- Por lo general solo necesita configurar la dirección de reporte y el tipo de transporte en el lado del rastreador; Plaspy se encarga del reconocimiento del protocolo en el servidor.

## Transporte y contexto de conexión

El TK980 puede configurarse para usar métodos de transporte comunes y debe apuntar al servidor de Plaspy para la entrega de datos. Esta sección cubre el contexto de conexión que utilizará al configurar el dispositivo para comunicarse con Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP para el reporte, según el firmware y las opciones de configuración del TK980.
- Plaspy recibe datos de dispositivos en un único puerto compartido por todos los rastreadores soportados, lo que facilita despliegues y la configuración de cortafuegos.
- Los equipos deben estar configurados para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 usando el puerto compartido.
- La elección entre UDP y TCP depende del soporte del dispositivo, las condiciones de la red y el comportamiento de entrega deseado para telemetría y alarmas.
- Asegúrese de que el acceso saliente desde la red del vehículo permita que el transporte elegido llegue a la dirección y puerto del servidor de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento del dispositivo; verifique que su versión de firmware del TK980 coincida con las funciones que espera para telemetría y reporte de eventos.
- Las revisiones de hardware y las variantes regionales pueden implicar capacidades de red diferentes, como NB‑IoT, CAT‑M1 o regresos a 2G.
- La selección del transporte (UDP o TCP) se configura en el equipo; confirme que el TK980 esté ajustado a un transporte soportado por su red y por Plaspy.
- Los comandos de configuración del fabricante o las direcciones de servidor deben establecerse al endpoint de Plaspy para habilitar la detección automática por parte de la plataforma.
- Valide la disponibilidad de parámetros OBD2 con el modelo de vehículo específico, ya que la exposición de datos OBD2 puede variar según el vehículo y la ECU.
- Si tiene dudas, consulte la documentación oficial de TK‑Star o las notas de la versión del firmware para diferencias específicas del dispositivo que afecten el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del TK980 ayuda a asegurar una configuración confiable, un comportamiento predecible en campo y una resolución de problemas más eficiente cuando trabaja con Plaspy.

- Ayuda a confirmar que el equipo apunta a la dirección correcta del servidor para que Plaspy pueda recibir e interpretar los reportes.
- Facilita la elección entre UDP o TCP según la confiabilidad de la red y las garantías de entrega esperadas para alarmas y telemetría.
- Colabora en la planificación de cortafuegos y redes para que el rastreador pueda alcanzar el endpoint de Plaspy sin interrupciones.
- Permite una solución de problemas más efectiva cuando las actualizaciones de ubicación, la telemetría OBD2 o las alarmas de eventos no llegan como se espera.
- Aclara las expectativas sobre qué campos de telemetría están disponibles desde el TK980 frente a lo que Plaspy puede procesar.

## Por qué usar Plaspy con este protocolo

Usar el TK980 con Plaspy ofrece una instalación OBD2 rápida combinada con telemetría en la nube y funciones de gestión de flotas útiles para administradores de flota, operadores de renta y propietarios de vehículos. El dispositivo transmite ubicación, posicionamiento multinavegación y parámetros OBD2 a la plataforma Plaspy, donde usted puede configurar geocercas, alertas y revisar recorridos históricos.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el TK980 visite https://www.plaspy.com. Por favor verifique el soporte de protocolo actual, el comportamiento del firmware y los detalles de implementación con el fabricante en https://www.tk-star.com/ ya que el firmware y la implementación pueden cambiar con el tiempo.

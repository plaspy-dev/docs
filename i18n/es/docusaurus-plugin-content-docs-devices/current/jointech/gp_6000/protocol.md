---
slug: /jointech/gp_6000/protocol
id: gp_6000-protocol
sidebar_label: Protocol
title: Jointech - GP 6000 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Jointech GP 6000 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Jointech GP 6000
  - protocolo GPS Jointech GP 6000
  - comunicación GP 6000
  - protocolo rastreador GPS
  - compatibilidad Jointech Plaspy
  - protocolo localización vehicular
  - protocolo gestión de flotas
  - GP 6000 TCP UDP
  - protocolo reporte GPS
  - características Jointech GP 6000
---

# Jointech - Protocolo GP 6000

Esta página describe el contexto público del protocolo para usar el rastreador Jointech GP 6000 con la plataforma Plaspy. Explica cómo el dispositivo suele comunicarse por GPRS, SMS y transporte IP, y cómo esas comunicaciones se relacionan con los ajustes compartidos del servidor de Plaspy sin entrar en detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta de forma automática el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que estas notas se centran en la integración práctica y en la solución de problemas a nivel público, no en los detalles internos del dispositivo.

## Resumen del protocolo

El GP 6000 transmite datos de ubicación, estado y eventos a un servidor remoto usando las capas de enlace y las opciones de reporte que soporte el dispositivo. En términos generales, el protocolo permite que el rastreador se identifique, envíe telemetría y eventos, y reciba configuración remota o comandos cuando el equipo y la red lo permiten.

- Permite que el GP 6000 reporte coordenadas GPS, eventos de movimiento y actualizaciones de estado a un endpoint remoto.
- Soporta múltiples vías de transporte, como GPRS con TCP o UDP, y en algunas configuraciones puede usarse SMS como respaldo.
- Incluye identificadores de dispositivo y telemetría con marca de tiempo para que Plaspy pueda asociar los reportes a una instancia concreta del rastreador.
- Admite configuración remota y controles operativos cuando el fabricante expone esas funciones en el lado del servidor.
- Soporta modos de reporte incrementales, como intervalos temporales, reportes por distancia y modos inteligentes o de bajo consumo para optimizar la energía.

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint compartido e identifica automáticamente el protocolo del rastreador según la sesión entrante. Cuando un GP 6000 está configurado para reportar al endpoint de Plaspy, la plataforma asociará los mensajes entrantes con el dispositivo y las reglas de análisis correctas sin que usted tenga que seleccionar manualmente el protocolo.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto usado para las conexiones de los dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint compartido.
- Normalmente no es necesario que usted seleccione un protocolo dentro de Plaspy si el GP 6000 está apuntando al endpoint de Plaspy.

## Contexto de transporte y conexión

Las decisiones de conexión influyen en cómo el GP 6000 llega a Plaspy y qué características de red están disponibles durante el reporte. El rastreador soporta reportes basados en IP, así como SMS y otras opciones del fabricante; para la integración con Plaspy las consideraciones principales son el tipo de transporte y el destino configurado en el dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportes IP.
- Los equipos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y centraliza el tráfico entrante.
- El reporte por GPRS es común para actualizaciones de posición en tiempo real, mientras que SMS puede emplearse como respaldo o para comandos específicos según la configuración del dispositivo.
- La fiabilidad de la red y los ajustes APN del operador afectarán la persistencia de la sesión y la entrega de los reportes.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y las funciones soportadas; siempre verifique las notas de la versión del firmware para detectar diferencias de comportamiento.
- Las revisiones de hardware u opcionales en la familia GP 6000 pueden añadir o eliminar funcionalidades como voz, escaneo de código de barras o entradas específicas.
- La selección de transporte entre TCP y UDP puede afectar la confiabilidad y el comportamiento de reconexión en redes móviles.
- Los comandos de configuración del fabricante y las opciones de control por SMS pueden variar y dependen de la configuración del dispositivo y del acceso autorizado.
- Verifique que el dispositivo esté apuntando al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y que use el puerto 8888 para reportes IP.
- Confirme que las funciones avanzadas, como inmovilización o control remoto, estén habilitadas y sean compatibles con su despliegue y versión de firmware.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GP 6000 ayuda a garantizar reportes fiables, un registro correcto del dispositivo en Plaspy y a agilizar la resolución de problemas cuando faltan mensajes o se reciben con formato incorrecto. Una comprensión práctica del protocolo y de las opciones de transporte acelera la configuración y reduce el tiempo dedicado a problemas comunes de integración.

- Asegura una identificación y mapeo precisos del dispositivo dentro de Plaspy durante la configuración inicial.
- Orienta la decisión entre TCP y UDP al configurar el rastreador según las condiciones de su red.
- Ayuda a diagnosticar problemas de conectividad relacionados con APN, firewalls o limitaciones del operador.
- Aclara qué modos e intervalos de reporte puede ofrecer el equipo para optimizar batería y consumo de datos.
- Facilita la planificación de actualizaciones de firmware y la validación de que nuevas versiones mantengan el comportamiento de reporte esperado.

## Por qué usar Plaspy con este protocolo

Usar el GP 6000 con Plaspy ofrece a flotas y administradores de activos visibilidad centralizada de ubicación, movimiento y eventos, al tiempo que aprovecha la detección automática de protocolo de Plaspy y sus ajustes de conexión unificados. El enfoque de endpoint compartido de Plaspy simplifica la incorporación de dispositivos y reduce la probabilidad de mala configuración cuando se despliegan múltiples modelos de rastreadores.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el Jointech GP 6000, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información específica más reciente con el fabricante en https://www.jointcontrols.com/.

---
slug: /globalsat/gtr_388nb/protocol
id: gtr_388nb-protocol
sidebar_label: Protocol
title: GlobalSat - GTR-388NB Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GlobalSat GTR-388NB y su compatibilidad con Plaspy para rastreo NB‑IoT GPS
keywords:
  - protocolo GlobalSat GTR-388NB
  - GlobalSat GTR-388NB GPS
  - compatibilidad GTR-388NB Plaspy
  - rastreador NB IoT GPS
  - protocolo de rastreo de vehículos
  - protocolo rastreador de scooters
  - rastreador compatible con Plaspy
  - GPS para gestión de flotas
  - comunicación GTR-388NB
  - protocolo de rastreador GPS
---

# GlobalSat - GTR-388NB Protocolo

Esta página ofrece una visión pública del protocolo para usar el rastreador GlobalSat GTR-388NB con Plaspy. El enfoque está en el contexto de comunicación y en las consideraciones prácticas necesarias para encaminar telemetría y datos de ubicación hacia Plaspy, sin exponer detalles privados de implementación. El objetivo es ayudar a integradores de flotas y dispositivos a entender cómo el rastreador informa a un endpoint en la nube y cómo Plaspy consume esos datos.

El GTR-388NB es un rastreador NB‑IoT compacto que transmite telemetría por defecto sobre UDP y está pensado para scooters, eBikes, motocicletas y otros vehículos ligeros. Plaspy utiliza ajustes de conexión compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre valide el comportamiento específico del dispositivo con la documentación del fabricante al planear despliegues.

## Visión general del protocolo

El protocolo de comunicación del GTR-388NB define cómo el dispositivo empaqueta y envía coordenadas de ubicación, estado y telemetría de sensores a un servidor. Para ser compatible con Plaspy, el protocolo debe proporcionar informes de posición identificables, actualizaciones periódicas o por eventos, e indicadores básicos de estado para que la plataforma pueda convertir los mensajes entrantes en marcadores en el mapa, alertas y recorridos históricos.

- Permite que el rastreador reporte coordenadas GNSS, marcas de tiempo, estado de movimiento y telemetría básica a un servidor remoto.
- Incluye estados de encendido (ACC) y entradas analógicas para que Plaspy genere registros de viaje y reportes de telemetría basados en voltaje.
- Soporta mensajes por eventos como pulsador de emergencia y alertas de movimiento que pueden activar notificaciones.
- Proporciona un mecanismo de latido o keepalive periódico para que el servidor monitoree la conectividad del dispositivo.
- Permite configurar el rastreador para que apunte a un endpoint de Plaspy y así enviar datos en un único flujo hacia la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para los dispositivos soportados. Esto significa que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía informes válidos al endpoint.
- Normalmente, la configuración correcta del dispositivo para enviar informes a d.plaspy.com o a 54.85.159.138 es todo lo que se requiere para la detección del protocolo.
- Plaspy soporta tanto los transportes UDP como TCP en el puerto compartido, por lo que dispositivos que usen cualquiera de los dos pueden ser incorporados.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el GTR-388NB alcanza a Plaspy y qué transporte utiliza el rastreador para enviar su telemetría. El GTR-388NB se despliega típicamente sobre NB‑IoT y se describe como envía datos por UDP, pero Plaspy admite dispositivos que usan UDP o TCP en el puerto compartido.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración de la red.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino del servidor para la telemetría.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica el aprovisionamiento de dispositivos y las reglas de red para flotas.
- La conectividad NB‑IoT y el comportamiento del operador pueden afectar los tiempos de entrega y la fragmentación de paquetes, por lo que pruebe la conectividad con su operador y la configuración del APN.
- Asegúrese de que su red o firewall permita tráfico saliente UDP y TCP hacia el endpoint y puerto de Plaspy para un reporte confiable.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, la disponibilidad de campos y las funciones opcionales. Confirmar los detalles del firmware con el fabricante.
- Las revisiones de hardware y las configuraciones de accesorios pueden alterar las entradas disponibles o el comportamiento de ACC, telemetría analógica y control de relés.
- La selección del transporte es importante: el GTR-388NB se usa típicamente con UDP sobre NB‑IoT, pero Plaspy acepta TCP y UDP en el puerto compartido cuando están disponibles.
- Las configuraciones de NB‑IoT del operador y el soporte de bandas regionales influyen en la conectividad y pueden requerir cambios en el APN o en el aprovisionamiento de la SIM.
- Accesorios opcionales como relés externos o botones de emergencia agregan funcionalidad pero pueden introducir variabilidad en las señales reportadas.
- Siempre valide el endpoint de reporte del dispositivo y las credenciales (si las hubiera) antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a asegurar una integración fluida con Plaspy, reduce el tiempo de configuración y mejora la confiabilidad a largo plazo para operaciones de flota y flujos de trabajo anti robo.

- La configuración correcta del endpoint y del transporte evita problemas de conectividad e informes perdidos durante la puesta en marcha.
- Conocer las diferencias de firmware y hardware facilita la resolución de problemas por campos faltantes o comportamientos de eventos inesperados.
- Entender la cadencia de reporte del dispositivo sostiene las expectativas del servidor respecto al seguimiento en tiempo real y la precisión histórica.
- Saber cómo se mapean las entradas a telemetría (ACC, analógico, emergencia) permite configurar alertas y reglas en Plaspy correctamente.
- Considerar el comportamiento del operador NB‑IoT y los modos de ahorro de energía reduce sorpresas relacionadas con entregas retrasadas o reportes en deep sleep.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat GTR-388NB con Plaspy ofrece una solución práctica para organizaciones que necesitan rastreo de baja potencia y amplio alcance para scooters, motocicletas y vehículos ligeros. La combinación de telemetría NB‑IoT y la ingestión por parte de Plaspy posibilita monitoreo centralizado, alertas por geocerca, análisis de viajes y acciones remotas como inmovilización por relé cuando está configurado.

Para saber más sobre cómo Plaspy puede ingerir y gestionar la telemetría del GTR-388NB visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación más reciente del protocolo específico del dispositivo y las notas de firmware en el sitio del fabricante https://www.globalsat.com.tw/.

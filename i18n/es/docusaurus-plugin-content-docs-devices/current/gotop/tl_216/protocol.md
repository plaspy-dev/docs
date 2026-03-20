---
slug: /gotop/tl_216/protocol
id: tl_216-protocol
sidebar_label: Protocol
title: GOTOP - TL-216 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GOTOP TL-216 con ajustes de servidor Plaspy y guía de conexión
keywords:
  - protocolo GOTOP TL 216
  - protocolo GPS GOTOP TL 216
  - protocolo de rastreo GOTOP TL 216
  - compatibilidad GOTOP TL 216 Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo GPS TL 216
  - rastreador TL 216 Plaspy
  - comunicación GOTOP TL 216
  - protocolo GPRS GOTOP TL 216
  - rastreo geocerca GOTOP TL 216
---

# GOTOP - Protocolo TL-216

Esta página ofrece un contexto público del protocolo para usar el rastreador GOTOP TL-216 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y resume los ajustes de conexión que puede usar para dirigir los TL-216 hacia Plaspy para reporte y supervisión.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando llegan conexiones entrantes. El comportamiento exacto del protocolo y el contenido de los mensajes del TL-216 pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante para reporte por GPRS o SMS, por lo que esto debe considerarse una referencia de alto nivel para la integración.

## Resumen del protocolo

El TL-216 usa posicionamiento GPS y transportes GSM GPRS o SMS para enviar ubicación y estado a servidores backend. Cuando está configurado para reportar por GPRS, el dispositivo envía actualizaciones periódicas de posición, eventos de movimiento, alertas de geocerca y estado de batería a un punto final remoto. Plaspy recibe esos reportes y los integra en la interfaz de la plataforma y en los registros.

- Permite que el equipo informe posiciones GPS, la última ubicación conocida y eventos de movimiento a un servidor remoto
- Transporta telemetría como nivel de batería, estados de suspensión o reposo y estado básico junto con la ubicación
- Admite la configuración del intervalo de reportes y disparadores de alarma como invasiones de geocerca mediante ajustes del dispositivo
- Mantiene continuidad de datos almacenando reportes localmente cuando no hay cobertura GSM y reenviándolos al reconectar
- Soporta tanto reportes por SMS para notificaciones directas al teléfono como reportes por GPRS para integración con servidor y visibilidad de flota

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único punto final compartido e inspecciona el tráfico para determinar automáticamente el protocolo de reporte del rastreador. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el TL-216 está configurado correctamente para enviar reportes al punto final de Plaspy.

- Plaspy escucha en el endpoint común d.plaspy.com y en la IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo cuando un dispositivo se conecta al punto final compartido
- Normalmente usted solo necesita apuntar el TL-216 al endpoint de Plaspy usando el método de configuración del dispositivo que prefiera
- Si un dispositivo usa reportes por SMS, esto queda fuera del flujo de detección por TCP o UDP y se maneja de forma separada por el usuario o el operador móvil

## Transporte y contexto de conexión

Los TL-216 pueden usar GPRS para reportar a un servidor remoto y pueden configurarse para usar UDP o TCP para reportes GPRS según el firmware y las opciones del usuario. Para integrarlos con Plaspy, configure el dispositivo para apuntar al servidor y puerto de Plaspy indicados a continuación.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy para todos los dispositivos es 8888
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del dispositivo
- El uso de un mismo puerto para todos los dispositivos facilita la configuración masiva y el aprovisionamiento

## Notas sobre compatibilidad del protocolo

- El TL-216 es compatible con Plaspy cuando el dispositivo se configura para reportar al endpoint de Plaspy vía GPRS; el SMS sigue siendo útil para alertas directas al teléfono
- Las diferencias de firmware pueden afectar qué modos de transporte (UDP o TCP) están disponibles y cómo se reportan ciertos campos de estado
- Las revisiones de hardware o variantes regionales pueden cambiar funciones disponibles como intervalos de reporte, modos de sueño o entradas/salidas
- Debe validar los comandos de configuración del fabricante y los ajustes APN por defecto antes de apuntar el dispositivo al endpoint de Plaspy
- La cobertura de red y la configuración de la SIM afectan si el dispositivo almacena datos localmente durante cortes y los reenvía al reconectar
- Siempre valide la compatibilidad con la guía del usuario del equipo y la documentación más reciente del fabricante antes de desplegar en masa

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del TL-216 y cómo interactúa con Plaspy ayuda a garantizar una configuración fiable del equipo, reportes de ubicación precisos y una resolución de problemas más eficiente cuando los dispositivos están en campo.

- Acelera y hace más predecible la provisión inicial y la configuración del APN
- Facilita el diagnóstico de problemas separando fallas de transporte, red y configuración del equipo
- Permite seleccionar intervalos de reporte y ajustes de gestión de energía apropiados para la vida útil de batería esperada
- Mejora el manejo de alertas por geocerca y batería baja al confirmar cómo y cuándo el dispositivo envía esos eventos
- Ayuda a los equipos operativos a planificar la continuidad de datos cuando la cobertura GSM es intermitente

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TL-216 con Plaspy ofrece a las organizaciones una manera simple de recopilar y visualizar la ubicación, el estado y las alertas de activos móviles desde una plataforma centralizada. Plaspy traduce los reportes entrantes de dispositivos que usan GPRS en registros de seguimiento utilizables, lo que permite a gerentes de flota y equipos de seguridad monitorear el movimiento, recibir notificaciones de geocercas y revisar historiales de posicionamiento.

Para saber más sobre Plaspy y cómo puede recibir y gestionar reportes del TL-216, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de protocolo específica del dispositivo y las notas de firmware en el sitio del fabricante https://www.gotop.cc/.

---
slug: /gotop/l17_pro/protocol
id: l17_pro-protocol
sidebar_label: Protocol
title: GOTOP - L17 PRO Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del reloj GPS GOTOP L17 PRO y su conexión con Plaspy para rastreo y telemetría
keywords:
  - protocolo GOTOP L17 PRO
  - protocolo GPS GOTOP L17 PRO
  - GOTOP L17 PRO Plaspy
  - protocolo de comunicación GOTOP L17 PRO
  - protocolo de rastreo GOTOP L17 PRO
  - protocolo de reloj GPS GOTOP
  - protocolo de rastreador GPS Plaspy
  - protocolo rastreador personal L17 PRO
  - compatibilidad de rastreo GOTOP
  - protocolo smartwatch GPS
---

# GOTOP - Protocolo L17 PRO

En esta página se presenta el contexto público del protocolo para usar el reloj GPS GOTOP L17 PRO con Plaspy. Se explica, a alto nivel, cómo el dispositivo se comunica con Plaspy para ubicación, telemetría, alertas SOS y reportes relacionados, sin revelar detalles privados de implementación del fabricante. El L17 PRO combina conectividad celular, Wi Fi y BLE con sensores de salud integrados; aquí nos centramos en cómo su comportamiento de reporte interactúa con Plaspy más que en detalles internos del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que el funcionamiento real puede diferir entre lotes de dispositivos y versiones de firmware. La descripción del L17 PRO en esta página es general para ayudar a administradores e integradores a comprender el contexto de comunicación y lograr una integración fiable con Plaspy.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que el L17 PRO utiliza para enviar actualizaciones de posición, telemetría y notificaciones de eventos a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el reloj se identifique, reporte flujos de datos útiles y genere eventos que Plaspy puede mostrar en paneles y alertas. Esta página evita detalles propietarios de paquetes y explica el papel práctico del protocolo en la operación diaria.

- Permite reportes regulares de ubicación y solicitudes de posición bajo demanda desde el dispositivo al servidor.
- Transporta identidad y estado del dispositivo para que Plaspy asocie los datos con el activo correcto.
- Emite notificaciones de eventos como pulsaciones de SOS, llamadas bidireccionales y alarmas de batería baja.
- Transmite flujos suplementarios de telemetría como frecuencia cardiaca, SpO2 y actividad cuando están habilitados.
- Soporta escenarios de conectividad transitoria para que Plaspy acepte reportes desde fuentes celulares, Wi Fi o asistidas por BLE.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo correcto de los rastreadores compatibles. En la mayoría de los casos, el dispositivo solo debe configurarse para reportar al endpoint de Plaspy y Plaspy detectará y analizará la transmisión entrante sin que el usuario seleccione manualmente el protocolo.

- Plaspy escucha en el endpoint compartido en d.plaspy.com y en la IP de servidor 54.85.159.138.
- Todos los dispositivos compatibles usan el mismo puerto, lo que simplifica y uniforma la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al servidor de Plaspy.
- Por lo general, usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Una correcta configuración de la identidad del dispositivo en el reloj asegura que Plaspy pueda mapear los reportes entrantes a la cuenta y activo adecuados.

## Transporte y contexto de conexión

El transporte y direccionamiento de la conexión son importantes para la configuración inicial y las reglas de firewall. El L17 PRO puede configurarse para usar UDP o TCP según el firmware y las preferencias de configuración, y puede apuntar a Plaspy por nombre de dominio o por IP. Entender estas opciones de transporte ayuda en la planificación de red y en la recepción fiable de reportes de dispositivos por parte de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- Plaspy acepta conexiones en el dominio d.plaspy.com así como en la IP pública 54.85.159.138.
- El puerto 8888 es el puerto compartido usado por Plaspy para todos los dispositivos compatibles y simplifica las reglas de firewall.
- La selección del transporte puede afectar las características de entrega y debe coincidir con la configuración del dispositivo y el entorno de red.
- Confirme permisos de datos celulares y Wi Fi con los proveedores de red donde operarán los dispositivos para evitar bloqueos de tráfico.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento del protocolo y los campos de telemetría disponibles; siempre revise las notas de firmware al diagnosticar incompatibilidades.
- Las revisiones de hardware o variantes regionales del L17 PRO pueden implementar pequeñas diferencias en los reportes o en la nomenclatura de eventos.
- La configuración del fabricante puede permitir que el dispositivo elija TCP o UDP; asegúrese de que el transporte seleccionado coincida con las expectativas del endpoint de Plaspy.
- Algunas funciones, como posicionamiento en interiores asistido por BLE, dependen del entorno local y del comportamiento del dispositivo móvil acompañante más que de cambios en el protocolo del servidor.
- Valide la identidad del dispositivo y los intervalos de reporte para que coincidan con las expectativas de la cuenta Plaspy y asegurar actualizaciones oportunas.
- En caso de duda, consulte la documentación oficial de GOTOP para orientación específica sobre la configuración del dispositivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a los administradores a registrar dispositivos de forma fiable, solucionar problemas de reporte y mantener la calidad del servicio a largo plazo cuando usan Plaspy. Tener una comprensión práctica de cómo y cuándo el reloj informa datos reduce el tiempo de configuración y mejora la respuesta ante incidentes para los usuarios monitoreados.

- Ayuda a diagnosticar por qué las actualizaciones de ubicación o telemetría se retrasan o faltan.
- Informa sobre las reglas de red y firewall necesarias para permitir los reportes de los dispositivos a Plaspy.
- Orienta sobre la configuración correcta del modo de transporte y la dirección del servidor en el dispositivo.
- Apoya la planificación de roaming, cobertura e impacto en batería asociado a los intervalos de reporte.
- Permite una comunicación clara con el fabricante cuando diferencias de firmware o hardware afectan los reportes.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L17 PRO con Plaspy ofrece a organizaciones y cuidadores visibilidad unificada de ubicación, telemetría de salud y eventos de emergencia. La combinación de roaming celular, posicionamiento asistido por Wi Fi y BLE junto con SOS y llamadas bidireccionales permite que Plaspy consolide esas señales en flujos de alertas, reproducción y reportes adecuados para cuidado de adultos mayores, seguridad infantil, protección de trabajadores solitarios y rastreo personal internacional.

Para saber más sobre cómo Plaspy recopila y utiliza datos de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guías de configuración, verifique la información en el sitio del fabricante https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

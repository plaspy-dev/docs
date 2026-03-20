---
slug: /carscop/cc_368/protocol
id: cc_368-protocol
sidebar_label: Protocol
title: Carscop - CC-368 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Carscop CC-368 y cómo se comunica con Plaspy para seguimiento en vivo y telemetría
keywords:
  - Protocolo Carscop CC-368
  - Protocolo GPS Carscop CC-368
  - Carscop CC-368 Plaspy
  - Protocolo rastreador Carscop
  - Protocolo telemático CC-368
  - Protocolo rastreo vehicular
  - Protocolo rastreador GPS
  - Compatibilidad rastreador Plaspy
  - Rastreador gestión de flotas
  - Telemática car sharing
---

# Carscop - Protocolo CC-368

Esta página ofrece un resumen público del protocolo para utilizar el Carscop CC-368 4G T Box con Plaspy. Describe el contexto de comunicación y las consideraciones prácticas que operadores e integradores deben tener en cuenta al configurar el dispositivo para reportar ubicación, telemetría y eventos a Plaspy en flotas, servicios de car sharing y alquileres.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El CC-368 soporta conectividad celular global, posicionamiento GNSS, telemetría OBD II CANBUS, BLE para accesos y múltiples opciones de E/S, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Una configuración adecuada y la validación frente a la documentación del fabricante ayudarán a garantizar una operación fiable.

## Resumen del protocolo

El protocolo de comunicación del CC-368 define cómo el dispositivo reporta coordenadas GNSS, telemetría del vehículo, entradas/salidas y eventos de alarma a un servidor remoto, además de cómo recibe comandos remotos. En el contexto de Plaspy, el protocolo permite identificar y autenticar el equipo, y entregar mensajes estructurados de telemetría y eventos que la plataforma puede interpretar para seguimiento en vivo y automatizaciones.

- Permite transmisiones periódicas y basadas en eventos de ubicación y telemetría a un backend remoto
- Comunica parámetros del vehículo recopilados vía OBD II CANBUS y otros sensores a bordo
- Reporta estados discretos como encendido, puertas, impactos y alarmas para automatización y alertas
- Soporta recepción de comandos remotos para funciones como bloqueo del motor o arranque remoto donde esté permitido
- Proporciona registro local como respaldo cuando se pierde la conectividad de red para mantener la continuidad de datos

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint compartido y utiliza detección automática para identificar el protocolo del rastreador cuando un dispositivo bien configurado reporta. Esta detección automática evita que la mayoría de usuarios deban seleccionar manualmente un protocolo dentro de Plaspy si el equipo apunta al endpoint de la plataforma.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la dirección numérica 54.85.159.138
- La plataforma acepta conexiones por el puerto común 8888 para el reporte de dispositivos
- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia Plaspy en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Cuando el CC-368 está apuntando al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y asociará los datos entrantes con la cuenta o el equipo correspondiente

## Transporte y contexto de conexión

La configuración de la conexión se centra en apuntar el CC-368 al endpoint de Plaspy y seleccionar el transporte apropiado para su despliegue. El CC-368 puede usar datos celulares para reportes TCP/IP o UDP y puede también admitir SMS u otros mecanismos de respaldo según el firmware y la configuración.

- Los dispositivos pueden configurarse para reportar al nombre DNS d.plaspy.com o directamente a 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida
- Usar el puerto compartido de Plaspy entre dispositivos simplifica las reglas de firewall y de red para integradores
- Asegúrese de que el APN y la configuración celular sean correctos para que el CC-368 establezca conexiones salientes
- La confiabilidad de la red y la cobertura del operador afectarán la entrega en tiempo real y deben validarse en la región objetivo

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar intervalos de reporte, campos disponibles o el comportamiento de comandos; verifique la versión de firmware instalada al validar compatibilidad
- Las revisiones de hardware a veces introducen sensores adicionales o cambian el mapeo de E/S; confirme el SKU exacto del CC-368 en uso
- La configuración del fabricante puede permitir alternar entre transporte TCP y UDP; haga coincidir el transporte del dispositivo con el diseño de red y las expectativas de Plaspy
- Algunas funciones, como arranque remoto o comandos de inmovilizador, pueden depender de regulaciones regionales y de la configuración del equipo
- Pueden estar disponibles SMS de respaldo u otros canales alternativos; verifique estas opciones si los datos celulares no son fiables
- Siempre valide el comportamiento del dispositivo frente a la documentación oficial del fabricante antes de un despliegue masivo

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación ayuda a operadores e integradores a configurar correctamente el CC-368, garantizar que los datos lleguen a Plaspy como se espera y a solucionar problemas con mayor eficacia. Conocer el comportamiento general de los reportes y dónde buscar cuando faltan mensajes reduce el tiempo de inactividad y asegura una telemetría consistente para la operación.

- Agiliza la incorporación inicial del dispositivo al aclarar el endpoint y la configuración de transporte requeridos
- Facilita mapear los campos OBD II y de sensores a la telemetría y paneles de la plataforma
- Permite un análisis de causa raíz más rápido ante reportes faltantes o comportamiento de eventos inesperado
- Informa decisiones sobre selección de transporte, aprovisionamiento de red y reglas de firewall
- Apoya la planificación de actualizaciones de firmware y despliegues escalonados para preservar la continuidad del servicio

## Por qué usar Plaspy con este protocolo

Usar el Carscop CC-368 con Plaspy ofrece a los operadores una manera práctica de combinar telemetría vehicular detallada, ubicación GNSS y funciones de control remoto en una sola plataforma. Plaspy puede ingerir el flujo de telemetría del CC-368 para paneles en vivo, almacenamiento histórico de rutas, alertas basadas en eventos y flujos de trabajo de comandos remotos que apoyan car sharing, operaciones de alquiler y monitoreo de flotas.

Si desea explorar cómo funciona el CC-368 con Plaspy en su entorno, conozca más sobre la plataforma en https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; por favor verifique la documentación y las notas de firmware más recientes en el sitio del fabricante en http://www.carscop.com/ antes de realizar despliegues a gran escala.

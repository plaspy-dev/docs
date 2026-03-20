---
slug: /globalsat/lt_520az/protocol
id: lt_520az-protocol
sidebar_label: Protocol
title: GlobalSat - LT-520AZ Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GlobalSat LT‑520AZ y cómo se comunica con Plaspy usando ajustes de servidor compartidos y detección automática
keywords:
  - protocolo GlobalSat LT 520AZ
  - protocolo GPS GlobalSat LT 520AZ
  - compatibilidad LT 520AZ Plaspy
  - LT 520AZ Amazon Sidewalk
  - protocolo rastreador GPS
  - protocolo rastreo de activos
  - protocolo rastreo de vehículos
  - protocolo de dispositivo Plaspy
  - rastreador GNSS BLE
  - rastreador de activos a largo plazo
---

# GlobalSat - Protocolo LT-520AZ

Esta página explica el contexto público del protocolo para usar el GlobalSat LT‑520AZ con Plaspy. Se centra en cómo el rastreador comunica datos que Plaspy puede procesar —ubicación, movimiento y estado de batería— sin exponer detalles internos del firmware ni estructuras propietarias de los paquetes.

El LT‑520AZ combina posicionamiento GNSS con Bluetooth Low Energy y un acelerómetro integrado para rastreo híbrido en interiores y exteriores, con soporte en Amazon Sidewalk. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta el protocolo automáticamente, aunque el comportamiento exacto puede variar según la versión de firmware, revisión de hardware e implementación del fabricante. Siempre valide la configuración del equipo con la documentación oficial del fabricante para detalles específicos del firmware.

## Resumen del protocolo

El protocolo del LT‑520AZ define cómo el dispositivo reporta telemetría a un servidor remoto y cómo esa telemetría se expresa a alto nivel para que plataformas como Plaspy la ingieran. En la práctica, esto implica que el rastreador se identifica, envía información de ubicación y movimiento de forma periódica o por eventos, y reporta el estado de la batería en un formato que el servidor puede interpretar.

- Permite al LT‑520AZ enviar fijaciones GNSS y detecciones asistidas por BLE que Plaspy utiliza para ubicar activos y generar eventos.
- Habilita reportes de movimiento y detención desde el acelerómetro a bordo para análisis de ruta e inactividad.
- Transmite nivel o estimación de batería para que Plaspy pueda generar alertas de mantenimiento e informes de ciclo de vida.
- Soporta intervalos de reporte configurables y disparadores por evento para equilibrar autonomía y frecuencia de actualizaciones.
- Incluye los identificadores y campos de telemetría necesarios para que Plaspy asocie cada mensaje con el dispositivo y la cuenta correctos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un único endpoint y puerto compartidos para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador según el flujo de datos entrante. Gracias a esta detección automática, normalmente no es necesario seleccionar manualmente un protocolo en la plataforma si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com, que los dispositivos pueden apuntar para reportes.
- La IP del servidor de Plaspy es 54.85.159.138, que puede usarse como endpoint alternativo si se desea.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y preferencias de despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mapeo correcto del dispositivo suele ocurrir cuando la configuración de reporte es correcta.

## Contexto de transporte y conexión

El contexto de conexión se enfoca en cómo el LT‑520AZ alcanza el endpoint de Plaspy más que en la estructura interna de paquetes. El rastreador puede usar transporte UDP o TCP para enviar telemetría y puede apuntar al dominio o a la dirección IP de Plaspy según la configuración del sitio.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para comunicarse con Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino del servidor.
- Plaspy utiliza un puerto compartido para simplificar despliegues y reglas de firewall.
- La elección entre UDP y TCP puede afectar características de entrega como retransmisión y latencia según las condiciones de red.
- El enrutamiento de red, la resolución DNS de d.plaspy.com y las reglas de firewall locales deben permitir conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el formato o el calendario de los reportes de telemetría; revise las notas de firmware antes de grandes despliegues.
- Revisión de hardware o variantes de SKU pueden ofrecer opciones de configuración diferentes, como selección de transporte o granularidad de reporte.
- La configuración o provisión del fabricante para Amazon Sidewalk puede afectar qué datos se entregan a Plaspy y con qué frecuencia.
- Seleccionar UDP o TCP durante la configuración puede influir en la fiabilidad y en el consumo de batería según el entorno de red.
- Valide los identificadores del dispositivo y la configuración de provisión para asegurar que Plaspy asocie correctamente los datos entrantes con el activo previsto.
- En caso de duda, consulte la documentación oficial de GlobalSat para detalles específicos de dispositivo y firmware antes de cambiar endpoints de red.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una incorporación exitosa de dispositivos, la entrega confiable de telemetría y una resolución eficaz de problemas al integrar el LT‑520AZ con Plaspy. Tener expectativas claras sobre transporte, direccionamiento y los tipos de telemetría reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Asegura que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto correcto para que la telemetría llegue a Plaspy.
- Facilita la elección entre UDP o TCP según la estabilidad de la red y el consumo de energía.
- Ayuda a diagnosticar datos faltantes o cadencias de reporte inesperadas revisando la configuración del dispositivo y la versión de firmware.
- Permite planear la vida útil de la batería y el mantenimiento al comprender intervalos de reporte y transmisiones por evento.
- Brinda mayor confianza de que los datos de movimiento, GNSS, BLE y batería estarán disponibles en los paneles y alertas de Plaspy cuando los dispositivos estén correctamente configurados.

## Por qué usar Plaspy con este protocolo

Usar el LT‑520AZ con Plaspy ofrece a las organizaciones una forma práctica de combinar hardware de larga duración y resistente con datos de posicionamiento híbrido en una solución unificada de visibilidad de flotas o activos. Plaspy ingiere las fijaciones GNSS, las detecciones asistidas por BLE, los eventos del acelerómetro y los reportes de batería que proporciona el LT‑520AZ y los convierte en vistas de ubicación, disparadores de geocercas, alertas e informes históricos que apoyan la toma de decisiones operativas.

Para conocer más sobre cómo Plaspy gestiona la conectividad de dispositivos y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el comportamiento del firmware y la guía del fabricante, verifique la documentación del LT‑520AZ en https://www.globalsat.com.tw/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.

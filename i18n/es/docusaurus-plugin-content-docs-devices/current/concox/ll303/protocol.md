---
slug: /concox/ll303/protocol
id: ll303-protocol
sidebar_label: Protocol
title: Concox - LL303 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Concox LL303 con servidores Plaspy y garantizar reportes GPS confiables
keywords:
  - Protocolo Concox LL303
  - Protocolo GPS Concox LL303
  - Comunicación Concox LL303
  - Compatibilidad Concox LL303 Plaspy
  - Protocolo rastreador GPS LL303
  - Protocolo rastreador vehicular Concox
  - Rastreo de flota LL303
  - Rastreador 4G Concox LL303
  - Guía protocolo rastreador GPS
  - Compatibilidad de dispositivos Plaspy
---

# Concox - Protocolo LL303

Esta página describe el contexto público del protocolo para usar el rastreador Concox LL303 con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy y cuáles parámetros de conexión son relevantes para lograr reportes fiables, sin exponer detalles privados de implementación.

El Concox LL303 es un rastreador 4G con respaldo 2G, alimentación solar, clasificación IP67, modos de trabajo múltiples y soporte para accesorios como Bluetooth y RFID opcional. Plaspy usa ajustes de conexión compartidos entre los equipos soportados y detecta automáticamente el protocolo del dispositivo, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación define cómo el LL303 informa posición, estado y eventos a un servidor remoto y cómo una plataforma de flotas como Plaspy reconoce e ingiere esos datos. Esta sección mantiene la discusión a un nivel general para ayudar a administradores e integradores a entender el papel del protocolo en la integración de dispositivos.

- Permite que el LL303 entregue ubicación, estado y alertas al endpoint de Plaspy para su procesamiento y visualización.
- Facilita la identificación del dispositivo para que Plaspy asocie los mensajes con el vehículo o activo correcto.
- Transmite información de eventos como alertas de movimiento, alarmas por vibración, estado de alimentación y datos de accesorios en un formato que Plaspy puede interpretar.
- Soporta modos de trabajo y comportamientos de reporte periódico que afectan la frecuencia con la que los datos llegan al servidor.
- Facilita la configuración remota y el comportamiento por aire cuando los canales de comandos soportados por el fabricante están habilitados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo usado por cada equipo. En la mayoría de los despliegues, un LL303 correctamente configurado para reportar al endpoint de Plaspy será reconocido sin que sea necesario seleccionar manualmente el perfil de protocolo dentro de Plaspy.

- Plaspy expone un dominio y dirección de servidor comunes para el reporte de dispositivos, de modo que los equipos usen ajustes consistentes.
- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para los reportes de trackers y todos los equipos soportados por Plaspy usan el mismo puerto.
- Debido a la detección automática de protocolos, por lo general no es necesario elegir un perfil de protocolo en Plaspy cuando un dispositivo apunta al endpoint correcto.
- Si un equipo no es detectado, verifique el host de reporte y el transporte en el dispositivo y consulte la documentación del equipo y del firmware.

## Contexto de transporte y conexión

El contexto de conexión cubre el transporte de red y los ajustes de destino que el LL303 usa para enviar datos a Plaspy. Muchos aspectos del transporte son configurables en el dispositivo o dependen de valores por defecto del firmware.

- El LL303 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los equipos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 si no hay resolución DNS disponible.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y las reglas de firewall.
- La elección entre UDP o TCP puede afectar características de entrega como reenvíos y sobrecarga de conexión, y suele establecerse en el equipo o mediante sus herramientas de gestión.
- Asegúrese de que firewalls y reglas NAT permitan el tráfico saliente del dispositivo hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la composición de los mensajes y las funciones soportadas; dos unidades LL303 con firmware distinto pueden comportarse de forma diferente.
- Las revisiones de hardware o las opciones de accesorios como Bluetooth o RFID pueden influir en qué campos de datos se reportan.
- Algunos despliegues del LL303 prefieren TCP para entrega más fiable, mientras que otros usan UDP por menor sobrecarga; confirme la configuración del dispositivo antes de un despliegue a gran escala.
- Ajustes del fabricante y compilaciones regionales de firmware pueden introducir variaciones en los intervalos de reporte por defecto y en el comportamiento de las alarmas.
- Siempre valide el reporte del dispositivo comprobando los datos entrantes en el endpoint de Plaspy después de configurar el equipo para que apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En caso de duda, consulte la guía de configuración del dispositivo y las notas de la versión de firmware para confirmar detalles de compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo el LL303 se comunica con Plaspy ayuda a asegurar una configuración fluida, un flujo de datos fiable y una resolución de problemas más rápida cuando surgen incidencias. Tener expectativas claras sobre transporte y comportamiento de reporte reduce tiempos de inactividad y mejora la visibilidad operativa.

- Confirma que los dispositivos apuntan al endpoint correcto de Plaspy y usan el puerto 8888 para que los mensajes lleguen como se espera.
- Ayuda a solucionar problemas de conectividad enfocándose en el tipo de transporte UDP o TCP, la resolución DNS de d.plaspy.com y el enrutamiento de la red local.
- Sirve para planificar el comportamiento de batería y carga solar al entender cómo los intervalos de reporte impactan el consumo de energía.
- Facilita el manejo predecible de alertas y datos de accesorios procedentes de sensores Bluetooth o de accesorios RFID opcionales.
- Mejora la confiabilidad a largo plazo al incentivar revisiones periódicas de firmware y validaciones de compatibilidad.

## Por qué usar Plaspy con este protocolo

Usar el Concox LL303 con Plaspy ofrece un camino práctico hacia la monitorización centralizada de flotas y la supervisión operativa de vehículos de obra, embarcaciones y otros activos exigentes. Las características del hardware LL303, como 4G LTE con respaldo 2G, carga solar y durabilidad IP67, lo hacen apto para entornos demandantes, mientras que Plaspy gestiona la ingesta en red, la detección de protocolo y la presentación de datos.

Si desea saber más sobre el uso de Plaspy con el LL303 y otros rastreadores visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware e instrucciones de configuración consulte el sitio del fabricante en https://www.iconcox.com/ para verificar el comportamiento y la compatibilidad más recientes.

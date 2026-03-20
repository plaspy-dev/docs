---
slug: /thingsys/ts_v1/protocol
id: ts_v1-protocol
sidebar_label: Protocol
title: ThingSys - TS-V1 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo ThingSys TS V1 para seguimiento GPS con Plaspy
keywords:
  - Protocolo ThingSys TS-V1
  - Protocolo GPS ThingSys TS V1
  - Protocolo de rastreo TS-V1
  - Protocolo TS V1 Plaspy
  - Compatibilidad rastreador GPS ThingSys
  - Protocolo seguimiento de flotas TS V1
  - Documentación protocolo ThingSys
  - Protocolo rastreador GPS Plaspy
  - Protocolo de seguimiento de vehículos ThingSys
  - Comunicación telemetría TS V1
---

# ThingSys - Protocolo TS-V1

Esta página describe el contexto público del protocolo para usar el rastreador GPS ThingSys TS-V1 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué ajustes de conexión se emplean y qué comportamientos del reporte del rastreador son relevantes al integrar el equipo en una flota gestionada por Plaspy. El objetivo es ofrecer información útil y no sensible que facilite la configuración y el entendimiento operativo.

El TS-V1 es compatible con Plaspy de fábrica y permite configurar la IP y el puerto para la integración con la plataforma. Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación oficial del fabricante para obtener los detalles más actualizados y específicos del equipo.

## Resumen del protocolo

El protocolo utilizado por el TS-V1 define cómo el rastreador envía ubicación, estado y eventos a un servidor remoto y cómo pueden expresarse comandos o configuraciones remotas. Para la integración con Plaspy, la función principal del protocolo es asegurar que la plataforma reciba datos de posición y eventos en el formato correcto para poder mostrarlos, generar alertas y almacenarlos.

- Permite envíos periódicos y basados en eventos para que Plaspy muestre ubicación en tiempo real e historial.
- Transmite estado y eventos de entradas/salidas como encendido ACC, alertas SOS y lecturas analógicas para procesamiento de telemetría.
- Posibilita comandos o configuraciones remotas via SMS o mediante comandos desde la plataforma cuando el dispositivo y el fabricante lo soportan.
- Transporta identidad de dispositivo e información de sesión que Plaspy usa para asociar los reportes entrantes con el registro vehicular correcto.
- Soporta tanto transporte TCP como UDP según la configuración del equipo para compatibilidad con las preferencias de red y del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente cómo parsear y procesar los reportes cuando un dispositivo está configurado correctamente para apuntar al servidor de Plaspy. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el TS-V1 envía datos al endpoint y puerto correctos.

- El endpoint público de servidor de Plaspy para reportes de dispositivos es d.plaspy.com y el mismo host es accesible en la IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, que es el 8888, lo que simplifica la configuración entre modelos.
- Los dispositivos pueden configurarse para reportar vía UDP o TCP al puerto 8888 dependiendo de los ajustes del rastreador y del entorno de red.
- Cuando el TS-V1 envía sus reportes al endpoint de Plaspy, la plataforma identifica el protocolo y asocia los mensajes entrantes con el registro de dispositivo correcto de forma automática.
- Confirme que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir y detectar los datos del rastreador.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el TS-V1 llega al servidor de Plaspy a través de la red celular y qué opciones de transporte se usan comúnmente. Estos detalles ayudan a garantizar que el enrutamiento de red y las reglas de firewall permitan el reporte del dispositivo hacia Plaspy.

- El TS-V1 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del instalador.
- Apuntar el equipo a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888 dirigirá los reportes al endpoint de ingestión de Plaspy.
- Usar el puerto compartido 8888 para todos los dispositivos facilita la incorporación de múltiples modelos y reduce errores de configuración por equipo.
- Asegúrese de que las redes de los operadores y los firewalls locales permitan tráfico saliente al puerto 8888 usando el protocolo de transporte elegido.
- Para dispositivos que soportan tanto SMS como comandos desde la plataforma, revise si se requiere configuración remota vía SMS para cambiar servidor o ajustes de transporte.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar qué campos de datos se reportan y cómo; verifique la versión de firmware del equipo al resolver discrepancias.
- Revisiones de hardware o variantes regionales pueden cambiar los transportes disponibles o el comportamiento del GNSS; consulte el etiquetado del modelo y la documentación del fabricante.
- Algunas funciones como medición analógica de combustible, corte remoto o comportamiento del SOS dependen del cableado de hardware y la configuración de E/S más que del protocolo de red en sí.
- La elección del transporte (UDP vs TCP) afecta la semántica de entrega; seleccione el método que se ajuste a la configuración del dispositivo y a sus necesidades de confiabilidad de red.
- Valide siempre los ajustes del dispositivo para asegurar que el rastreador está enviando a d.plaspy.com o 54.85.159.138 en el puerto 8888 y así garantizar que Plaspy reciba los datos.
- Los conjuntos de comandos del fabricante y las capacidades de control remoto pueden estar disponibles por SMS o por comandos desde la plataforma; confirme lo que el TS-V1 soporta para su flujo de trabajo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TS-V1 ayuda a instaladores y administradores a completar la configuración de forma confiable y a diagnosticar problemas comunes como reportes faltantes, manejo incorrecto de eventos o telemetría incompleta. Tener claro el protocolo y el contexto de transporte acelera la integración y reduce tiempos de inactividad.

- Ayuda a confirmar que el equipo apunta al endpoint y puerto correctos de Plaspy para que los reportes lleguen a la plataforma.
- Facilita la interpretación de los registros de eventos y la correlación entre los estados reportados por el dispositivo y las alertas e historiales en Plaspy.
- Asiste en la elección entre UDP y TCP según las condiciones de la red y las características de entrega deseadas.
- Orienta las decisiones de actualización de firmware cuando el comportamiento de reporte cambia entre versiones.
- Soporta un mapeo preciso de las E/S del dispositivo a eventos en Plaspy para que la telemetría y las alarmas funcionen como se espera.

## Por qué usar Plaspy con este protocolo

Usar el TS-V1 con Plaspy brinda a los operadores de flotas visibilidad centralizada sobre la ubicación de los vehículos, su estado e historial de eventos, aprovechando las E/S del rastreador para telemetría y acciones antirrobo. Plaspy recibe los datos de posición y eventos del rastreador cuando el dispositivo está configurado para reportar al servidor de Plaspy, permitiendo mapeo, alertas e informes históricos para toda la flota.

Para comenzar, configure el TS-V1 para que reporte al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y asegúrese de que el dispositivo use el puerto 8888 con el transporte preferido (UDP o TCP). Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando lleguen los reportes. Para más detalles sobre las funcionalidades y capacidades de la plataforma Plaspy, visite el sitio web de Plaspy en https://www.plaspy.com. Para obtener la información más reciente sobre detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación, verifique la información en el sitio del fabricante ThingSys en https://www.thingsys.com/.

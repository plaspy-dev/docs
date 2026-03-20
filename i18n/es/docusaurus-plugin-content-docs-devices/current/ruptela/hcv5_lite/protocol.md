---
slug: /ruptela/hcv5_lite/protocol
id: hcv5_lite-protocol
sidebar_label: Protocol
title: Ruptela - HCV5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Ruptela HCV5 Lite con Plaspy, incluyendo ajustes de servidor y guía de conexión
keywords:
  - Protocolo Ruptela HCV5 Lite
  - Protocolo GPS Ruptela HCV5 Lite
  - Compatibilidad Ruptela HCV5 Lite Plaspy
  - Comunicación tracker Ruptela
  - Protocolo de rastreo HCV5 Lite
  - Rastreo de vehículos Ruptela
  - Protocolo GPS Plaspy
  - Rastreo de flotas Ruptela HCV5 Lite
  - Rastreador BLE HCV5 Lite
  - CANbus OBD Ruptela HCV5 Lite
---

# Ruptela - Protocolo HCV5 Lite

Esta página describe el contexto público del protocolo para usar el tracker Ruptela HCV5 Lite con Plaspy. Se enfoca en los aspectos de comunicación y conexión relevantes al integrar el HCV5 Lite con Plaspy para rastreo de vehículos, telemetría y monitoreo de flotas. El contenido es de alto nivel y apto para difusión pública, pensado para ayudar a usuarios técnicos e integradores a comprender cómo el dispositivo se comunica con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando los dispositivos reportan a su endpoint. El comportamiento exacto del protocolo en el HCV5 Lite puede variar según la versión de firmware, la revisión de hardware y las decisiones del fabricante. Para formatos de paquete específicos o comportamiento de firmware consulte la documentación oficial de Ruptela cuando sea necesario.

## Descripción general del protocolo

El protocolo de comunicación del HCV5 Lite regula cómo el dispositivo empaqueta y envía la posición GNSS, telemetría del vehículo, estados de entradas y salidas y datos de accesorios a un endpoint de servidor. En la práctica esto significa que el tracker codifica información de sensores y del CANbus y la transmite a Plaspy para que la plataforma muestre posición, alertas y métricas del vehículo.

- Permite que el HCV5 Lite informe posición GNSS y movimiento al servidor para rastreo en tiempo real.
- Transporta datos del vehículo y entradas obtenidas desde OBD, CANbus e interfaces de accesorios para telemetría y diagnóstico.
- Transmite señales de estado como indicios de manipulación, estado de batería de respaldo y alertas de interferencia al sistema.
- Soporta comandos de configuración y gestión remota cuando el dispositivo y el firmware exponen esas funciones.
- Permite identificar el dispositivo y asociar los datos reportados con un vehículo y cuenta específicos en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de trackers en un endpoint compartido y detecta automáticamente el protocolo usado por el dispositivo que se conecta. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el HCV5 Lite esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos compatibles, de modo que el reporte de dispositivos puede usar ajustes de conexión uniformes.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para el reporte directo.
- Plaspy detecta automáticamente el protocolo del tracker después de que el dispositivo inicia la comunicación con el servidor.
- Si el HCV5 Lite está configurado correctamente para reportar al endpoint de Plaspy, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma.
- La detección permite que Plaspy convierta los datos entrantes en posición, eventos y telemetría para el panel de control de la flota.

## Contexto de transporte y conexión

El HCV5 Lite puede configurarse para usar capas de transporte comunes para alcanzar el endpoint de Plaspy. El contexto de conexión abarca si el dispositivo reporta por UDP o TCP y a qué host del servidor está apuntado, más que el formato interno de los paquetes.

- El HCV5 Lite puede configurarse para usar UDP o TCP dependiendo del firmware del dispositivo y las opciones de configuración.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Los dispositivos pueden configurar el envío de datos a d.plaspy.com o alternativamente a la IP del servidor 54.85.159.138.
- Elegir UDP o TCP afecta la confiabilidad y el comportamiento a nivel de transporte, pero no impide que Plaspy detecte el protocolo.
- Asegúrese de que el APN del tracker y la conectividad saliente permitan tráfico hacia el endpoint de Plaspy y al puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden cambiar qué campos o tipos de evento incluye el HCV5 Lite en los reportes; siempre registre la versión de firmware al validar el comportamiento.
- Revisiones de hardware y módulos accesorios opcionales pueden introducir nuevas entradas o telemetría que afecten los datos reportados.
- Las herramientas de configuración del fabricante y los ajustes por defecto determinan si el dispositivo usa UDP o TCP y qué dirección de servidor está programada.
- Algunas implementaciones exponen canales de comando remoto; la disponibilidad depende del firmware y del aprovisionamiento del dispositivo.
- Valide la compatibilidad verificando la configuración del HCV5 Lite frente a las expectativas de reporte y ajustes del endpoint de Plaspy.
- Para cualquier característica avanzada de integración consulte la documentación del fabricante sobre el comportamiento específico del firmware.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del HCV5 Lite ayuda a garantizar una configuración confiable, una interpretación precisa de los datos y una resolución de problemas más eficiente al integrar el dispositivo con Plaspy. Conocer cómo el dispositivo debe reportar y qué transporte utiliza reduce el tiempo invertido en diagnosticar problemas de conectividad o de datos.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy antes de investigar problemas de mayor nivel.
- Facilita verificar qué campos de telemetría deberían aparecer en Plaspy en función de la configuración y el firmware del HCV5 Lite.
- Permite una resolución de problemas de red más eficiente al aclarar si se usa UDP o TCP y si los puertos de transporte están abiertos.
- Ayuda a validar la identidad del dispositivo y la correspondencia con el vehículo para que los datos reportados se asocien al activo correcto.
- Informa decisiones sobre actualizaciones de firmware, integraciones de accesorios y disponibilidad de funciones durante la planificación del despliegue.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela HCV5 Lite con Plaspy ofrece a los operadores de flotas una vía sencilla para centralizar posición, telemetría del vehículo y datos de eventos en una sola plataforma. El modelo de endpoint compartido de Plaspy simplifica el aprovisionamiento de dispositivos porque un único dominio y puerto puede usarse para muchos dispositivos compatibles, mientras la plataforma reconoce automáticamente el protocolo del tracker cuando llegan los datos.

Si desea aprender más sobre Plaspy y cómo funciona con dispositivos como el HCV5 Lite visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware e instrucciones de instalación verifique la información actual en el sitio del fabricante https://ruptela.com/ ya que el comportamiento del fabricante y las funciones de firmware pueden cambiar con el tiempo.

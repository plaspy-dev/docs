---
slug: /glonasssoft/umka302/protocol
id: umka302-protocol
sidebar_label: Protocol
title: GLONASSsoft - UMKa302 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GLONASSsoft UMKa302 y su comunicación con Plaspy
keywords:
  - protocolo GLONASSsoft UMKa302
  - protocolo GPS UMKa302
  - compatibilidad UMKa302 Plaspy
  - protocolo de comunicación UMKa302
  - protocolo de rastreo UMKa302
  - rastreador GPS GLONASSsoft
  - rastreo de vehículo UMKa302
  - bus CAN UMKa302
  - sensor BLE UMKa302
  - compatibilidad de dispositivo Plaspy
---

# GLONASSsoft - Protocolo UMKa302

Esta página explica el contexto del protocolo público para utilizar el rastreador GLONASSsoft UMKa302 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos operativos no sensibles, de modo que integradores y administradores de flota puedan comprender las consideraciones de conexión y compatibilidad antes del despliegue.

Plaspy utiliza ajustes de conexión comunes para todos los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores cuando estos reportan a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del UMKa302, las revisiones de hardware y las elecciones de implementación del fabricante, por lo que esta página prioriza el contexto general del protocolo en lugar de detalles internos específicos de firmware.

## Descripción general del protocolo

El protocolo de comunicación que emplea el UMKa302 define cómo se serializan y transmiten las posiciones GNSS, la telemetría del bus CAN, lecturas de sensores BLE y los registros de eventos desde el dispositivo hacia un servidor remoto. En la práctica, este protocolo permite que el rastreador se identifique, entregue telemetría oportuna a Plaspy y soporte reportes basados en eventos para flujos de trabajo de flotas.

- Proporciona una representación transportable de ubicación, telemetría del vehículo y datos de sensores para que Plaspy los ingiera
- Incluye campos de identificación y estado del dispositivo que permiten a Plaspy asociar los datos entrantes con el activo correcto
- Soporta reportes periódicos y disparados por eventos para equilibrar visibilidad en tiempo real con restricciones de energía o ancho de banda
- Transporta telemetría desde CAN y sensores BLE para que Plaspy muestre diagnósticos y monitoreo de combustible junto con la ubicación GPS
- Permite el registro offline en el dispositivo y la sincronización posterior para preservar datos históricos cuando la conectividad es intermitente

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y utiliza detección automática para determinar el tipo de protocolo del rastreador. Cuando un UMKa302 correctamente configurado reporta al endpoint de Plaspy, la plataforma identificará el protocolo y comenzará a procesar los datos sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy expone un único endpoint de ingestión para que los dispositivos reporten y detecta automáticamente el protocolo del rastreador
- Normalmente los usuarios apuntan los dispositivos UMKa302 a d.plaspy.com o a la dirección de servidor equivalente de Plaspy para empezar a reportar
- Plaspy gestiona la identificación y el enrutamiento de dispositivos, por lo que en la mayoría de los casos no es necesario asignar manejadores de protocolo manualmente
- La detección automática permite a Plaspy soportar múltiples modelos de rastreadores en el mismo puerto y endpoint compartidos
- Si la conexión o el reporte no comienzan como se espera, verificar la configuración de red del dispositivo y los ajustes de firmware es el primer paso de diagnóstico

## Transporte y contexto de conexión

Los dispositivos UMKa302 pueden configurarse para usar UDP o TCP según los ajustes del dispositivo y las necesidades del despliegue. Plaspy acepta reportes en un puerto consistente para todos los dispositivos, lo que simplifica la configuración y el escalado de flotas.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección del servidor de Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para datos de rastreadores y todos los dispositivos usan el mismo puerto
- El UMKa302 puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del dispositivo y las decisiones de configuración
- La elección entre UDP o TCP suele depender de la confiabilidad de la red, la necesidad de confirmación de mensajes y el comportamiento del operador móvil

## Notas sobre compatibilidad del protocolo

- El UMKa302 se describe como compatible con Plaspy, pero el comportamiento real depende de la versión de firmware del dispositivo y su configuración
- La documentación del fabricante menciona soporte para el protocolo EGTS además de modos de reporte específicos del fabricante; consulte la documentación oficial para confirmar qué modo está en uso
- Las revisiones de hardware y las interfaces opcionales, como CAN dual o conjuntos de sensores BLE, pueden cambiar qué campos de telemetría están disponibles para Plaspy
- La selección de transporte entre UDP y TCP en el puerto 8888 afecta el comportamiento de la conexión y debe validarse en su entorno de red
- Ajustes en el dispositivo como APN, enrutamiento de la SIM e intervalos de reporte influyen en la frecuencia con la que Plaspy recibe actualizaciones
- Siempre valide la compatibilidad y los campos disponibles contra las notas de firmware más recientes del UMKa302 o las guías de configuración

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación del UMKa302 ayuda a asegurar una configuración inicial correcta, una operación fiable a largo plazo y una resolución de problemas más rápida cuando integra el dispositivo con Plaspy. Tener claro qué transporta el protocolo y cómo se transmite reduce el tiempo de integración y mejora la visibilidad operativa.

- Asegura que el dispositivo apunte al endpoint y puerto correctos de Plaspy para la ingestión inmediata de datos
- Ayuda a seleccionar los ajustes de transporte UDP o TCP apropiados para el despliegue y las condiciones de red
- Aclara qué canales de telemetría, como CAN y BLE, estarán disponibles en Plaspy según el firmware y las opciones del dispositivo
- Facilita la resolución de problemas cuando los datos no aparecen en Plaspy al enfocar las comprobaciones en APN, estado de la SIM y ajustes de transporte
- Apoya la planificación del comportamiento de registro offline y cómo los registros almacenados se sincronizan con Plaspy tras la recuperación de conectividad

## Por qué usar Plaspy con este protocolo

Usar el UMKa302 con Plaspy ofrece visibilidad integrada de la posición del vehículo, diagnósticos derivados de CAN, telemetría de sensores BLE y registros de eventos a través de una única plataforma. Esta combinación resulta especialmente útil para operadores de flotas que desean monitoreo consolidado, alertas e informes históricos sin gestionar endpoints de ingestión separados por modelo de dispositivo.

Plaspy acepta reportes de dispositivos UMKa302 en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, simplificando la configuración de la flota porque todos los dispositivos usan el mismo puerto. Para obtener más información sobre Plaspy y cómo puede utilizarse con rastreadores profesionales de vehículos, visite https://www.plaspy.com. Para detalles de protocolo específicos de dispositivo y firmware, ejemplos de configuración y orientación del fabricante, verifique la información en el sitio oficial de GLONASSsoft https://glonasssoft.ru/.

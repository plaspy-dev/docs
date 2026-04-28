---
slug: /aovx/gl100/protocol
id: gl100-protocol
sidebar_label: Protocol
title: AOVX - GL100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo AOVX GL100 para compatibilidad con Plaspy, configuración de conexión y comunicación del rastreador
keywords:
  - protocolo AOVX GL100
  - protocolo GPS AOVX GL100
  - protocolo AOVX GL100 para Plaspy
  - protocolo de comunicación AOVX GL100
  - protocolo de rastreo AOVX GL100
  - compatibilidad del rastreador AOVX GL100
  - comunicación del dispositivo AOVX GL100
  - rastreador GPS AOVX GL100
  - rastreador GPS compatible con Plaspy
  - seguimiento de vehículos con Plaspy
---

# AOVX - GL100 Protocol

Esta página explica el contexto público del protocolo para usar el AOVX GL100 con Plaspy. Se enfoca en cómo se comunica el rastreador con la plataforma a nivel práctico, para que los usuarios entiendan el papel del protocolo del dispositivo sin necesidad de conocer detalles privados de implementación.

El GL100 es un rastreador GPS compacto diseñado para el monitoreo de activos a largo plazo y el registro ambiental, y Plaspy puede utilizar su telemetría cuando el dispositivo está configurado para reportar al punto de conexión de Plaspy. Como Plaspy usa configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante.

## Panorama del protocolo

El protocolo de comunicación del GL100 define cómo el rastreador envía su información de posición, sensores y estado a Plaspy. En términos generales, este protocolo es lo que permite que el dispositivo se identifique, establezca una sesión de reporte y entregue datos que Plaspy pueda usar para mapas, monitoreo y alertas.

- Transfiere los datos de reporte del rastreador desde el dispositivo hacia Plaspy
- Ayuda a Plaspy a reconocer el dispositivo y procesar la telemetría entrante
- Admite actualizaciones periódicas y por eventos desde el rastreador
- Permite usar datos de ubicación junto con lecturas ambientales
- Proporciona la capa de comunicación necesaria para flujos de seguimiento y registros históricos
- Funciona dentro del modelo más amplio de integración de dispositivos de Plaspy sin requerir configuraciones de servidor separadas para cada equipo

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para trabajar con rastreadores compatibles mediante un punto de conexión compartido, por lo que el GL100 no requiere una configuración de servidor exclusiva dentro de Plaspy. Una vez que el rastreador apunta a la dirección y al puerto correctos de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y maneja la comunicación entrante en consecuencia.

- Usa un punto de conexión común de Plaspy para los dispositivos compatibles
- Detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta
- Reduce la necesidad de seleccionar el protocolo manualmente en Plaspy
- Permite que los usuarios se enfoquen en la configuración correcta del dispositivo y no en el parser
- Facilita un proceso de puesta en marcha más fluido para rastreadores compatibles
- Depende de que el rastreador envíe datos a los detalles de conexión esperados por Plaspy

## Contexto de transporte y conexión

Para la comunicación de red, el GL100 puede configurarse para usar UDP o TCP en el puerto 8888, según la compatibilidad y la configuración del dispositivo. El rastreador puede dirigirse al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138, y todos los dispositivos compatibles en Plaspy usan el mismo puerto.

- El puerto 8888 es el puerto compartido de Plaspy para los dispositivos compatibles
- El rastreador puede usar UDP o TCP en ese puerto
- Los dispositivos pueden apuntar a d.plaspy.com para una configuración basada en nombre de host
- Los dispositivos también pueden apuntar a 54.85.159.138 cuando se prefiera una configuración basada en IP
- Las configuraciones de conexión compartidas simplifican el despliegue entre múltiples modelos de rastreadores
- La selección correcta del transporte depende de lo que admita el firmware y la configuración del GL100

## Notas de compatibilidad del protocolo

- La compatibilidad puede variar según la versión del firmware, incluso dentro de la misma familia de modelos
- Las revisiones de hardware pueden influir en cómo el dispositivo reporta datos o se conecta a la plataforma
- Los detalles de implementación del fabricante pueden cambiar el comportamiento exacto del protocolo del rastreador
- La compatibilidad con UDP y TCP debe validarse según las opciones de configuración del dispositivo disponibles en el firmware actual
- Plaspy detecta automáticamente el protocolo del rastreador, pero el dispositivo aún debe apuntar correctamente al punto de conexión de Plaspy
- Para conocer el comportamiento más reciente específico del modelo, revise la documentación oficial del fabricante

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar que el GL100 esté configurado correctamente y que sus datos lleguen a Plaspy como se espera. También hace que la configuración y la solución de problemas sean más sencillas, especialmente cuando los equipos administran varios dispositivos o dependen de reportes oportunos para monitoreo y alertas.

- Ayuda a confirmar que el rastreador está enviando datos al punto de conexión correcto de Plaspy
- Mejora la configuración inicial al reducir errores de configuración
- Apoya la solución de problemas cuando un dispositivo está en línea pero no reporta como debería
- Brinda contexto para evaluar diferencias de firmware o de transporte
- Ayuda a mantener la confiabilidad a largo plazo en las operaciones de rastreo
- Facilita validar la compatibilidad durante la planificación del despliegue

## Por qué usar Plaspy con este protocolo

Cuando el GL100 se comunica a través de su protocolo compatible y se conecta a Plaspy, las organizaciones pueden convertir la telemetría del rastreador en visibilidad práctica para activos, carga y flujos relacionados con flotas. Esto ayuda a los equipos a monitorear la ubicación, reaccionar más rápido ante cambios y mantener el control operativo sin necesidad de rutas de integración separadas para cada dispositivo.

El modelo de conexión compartida de Plaspy y la detección automática de protocolos son especialmente útiles en despliegues mixtos o en crecimiento, donde la consistencia importa más que la complejidad de configuración específica por dispositivo. Para conocer más sobre Plaspy y su plataforma de rastreo, visite https://www.plaspy.com. Para consultar los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información vigente en el sitio oficial de AOVX en https://www.aovx.com/.

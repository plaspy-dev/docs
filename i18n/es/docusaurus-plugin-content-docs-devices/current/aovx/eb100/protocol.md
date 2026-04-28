---
slug: /aovx/eb100/protocol
id: eb100-protocol
sidebar_label: Protocol
title: AOVX - EB100 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo AOVX EB100 para compatibilidad con Plaspy, ajustes de conexión compartidos y comunicación confiable del dispositivo
keywords:
  - Protocolo AOVX EB100
  - Protocolo GPS AOVX EB100
  - Protocolo AOVX EB100 para Plaspy
  - Protocolo de comunicación AOVX EB100
  - Protocolo de rastreo AOVX EB100
  - Protocolo del rastreador EB100
  - Compatibilidad AOVX EB100
  - Protocolo de dispositivos Plaspy
  - Comunicación de rastreadores GPS
  - Protocolo de rastreo de flotas
---

# AOVX - EB100 Protocol

Esta página presenta el contexto público del protocolo para usar el AOVX EB100 con Plaspy. El EB100 se describe como una etiqueta compacta con sensor ambiental Bluetooth Low Energy, y esta página explica cómo se integra la comunicación de ese dispositivo en una implementación de Plaspy en términos claros y públicos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. En la práctica, esto significa que el mismo punto de conexión de Plaspy puede aceptar dispositivos configurados para la plataforma, mientras que el comportamiento exacto de los reportes puede variar según la versión del firmware, la revisión de hardware y los detalles de implementación del fabricante.

## Panorama del protocolo

El protocolo EB100 forma parte de la capa de comunicación que permite al dispositivo enviar telemetría a Plaspy a través de un reenviador compatible. En este modelo, lo importante no es una especificación pública compleja de paquetes, sino la capacidad del dispositivo para intercambiar datos útiles de rastreo y sensores de una manera que Plaspy pueda interpretar.

- Permite que el EB100 comunique telemetría ambiental a través de una ruta de conexión compatible con Plaspy
- Facilita la integración en flujos de monitoreo donde los datos del dispositivo se reenvían a Plaspy
- Ayuda a identificar el comportamiento de reporte del dispositivo para asociar sus datos con el registro correcto del rastreador
- Permite entregar actualizaciones de sensores en un formato que Plaspy pueda procesar para visibilidad y alertas
- Proporciona la base de comunicación para usar el EB100 en escenarios de cadena de frío, almacenes e inventario
- Funciona como parte de un modelo más amplio de integración de dispositivos y no como una interfaz de usuario independiente

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para trabajar con un punto de conexión compartido para dispositivos y para detectar automáticamente el protocolo del rastreador cuando el dispositivo se conecta y empieza a reportar. Para el EB100, esto significa que los usuarios normalmente configuran el dispositivo para enviar datos a Plaspy y dejan que la plataforma reconozca el protocolo sin necesidad de seleccionarlo manualmente.

- Usa el mismo punto de conexión de Plaspy para los dispositivos compatibles en lugar de exigir un destino distinto para cada rastreador
- Detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a comunicarse
- Reduce la complejidad de la configuración, ya que por lo general no es necesario elegir el protocolo dentro de Plaspy
- Ayuda a la plataforma a asociar los datos entrantes con el patrón correcto de comunicación del dispositivo
- Facilita un proceso de incorporación más ágil para rastreadores compatibles y dispositivos de reenvío
- Mantiene el enfoque del usuario en la configuración correcta del dispositivo y en un reporte confiable de datos

## Transporte y contexto de conexión

El EB100 puede configurarse para comunicarse por UDP o TCP en el puerto 8888, según la compatibilidad del dispositivo y la arquitectura de implementación elegida. Para Plaspy, los dispositivos compatibles apuntan al dominio compartido d.plaspy.com o a la IP del servidor 54.85.159.138, que son referencias públicas de conexión usadas para el reporte de dispositivos.

- El dispositivo puede usar UDP o TCP en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos compatibles
- El dominio compartido del servicio es d.plaspy.com
- La IP pública del servidor es 54.85.159.138
- El destino de conexión puede configurarse según el modo de transporte compatible con el dispositivo
- Es importante contar con conectividad de red adecuada para que el EB100 entregue datos a Plaspy de forma consistente

## Notas de compatibilidad del protocolo

- La compatibilidad puede variar según la versión del firmware, incluso dentro de la misma familia de modelos
- Las revisiones de hardware pueden influir en cómo el dispositivo reporta datos o se conecta a la plataforma
- La elección del transporte importa, ya que el EB100 puede admitir UDP o TCP según la configuración
- Los detalles de implementación del fabricante pueden afectar cómo se reenvían los datos a través de puertas de enlace o smartphones
- La configuración correcta del punto de conexión es esencial para que el dispositivo se comunique con Plaspy con éxito
- Se debe revisar la documentación oficial del fabricante para conocer la guía más reciente específica del modelo
- En caso de duda, valide el comportamiento con la documentación actual de AOVX antes de implementar

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación ayuda a garantizar que el EB100 quede configurado correctamente, reporte de manera constante y sea fácil de mantener en Plaspy con el tiempo. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer el contexto de conexión ayuda a los equipos a evitar problemas de configuración y a resolver más rápido los fallos de reporte.

- Mejora la configuración inicial al alinear el dispositivo con la ruta de reporte correcta
- Facilita confirmar que la telemetría está llegando a Plaspy como se espera
- Ayuda a diagnosticar problemas de conectividad relacionados con el transporte, el punto de conexión o la configuración del dispositivo
- Favorece un monitoreo más confiable a largo plazo en puertas de enlace, smartphones y reportes de backend
- Proporciona una base más clara para validar diferencias relacionadas con firmware durante los despliegues
- Ayuda a los equipos a mantener una visibilidad ambiental consistente en los procesos operativos

## Por qué usar Plaspy con este protocolo

Usar el AOVX EB100 con Plaspy puede ser valioso para organizaciones que necesitan visibilidad ambiental junto con supervisión operativa. El contexto del protocolo del dispositivo respalda un reporte estructurado hacia Plaspy, lo que facilita combinar los datos de sensores con flujos de rastreo para almacenamiento, transporte y monitoreo de activos.

Con Plaspy, el EB100 puede integrarse en una estrategia de monitoreo más amplia que reúne datos de campo, alertas y registros históricos en un solo lugar. Si desea conocer más sobre Plaspy y cómo admite la comunicación de dispositivos en distintos escenarios de rastreo, visite https://www.plaspy.com. Para obtener la información más reciente sobre el protocolo específico del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información actualizada en el sitio oficial de AOVX en https://www.aovx.com/.

---
slug: /gotop/g30b/protocol
id: g30b-protocol
sidebar_label: Protocol
title: GOTOP - G30B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP G30B y su comunicación con Plaspy mediante ajustes compartidos
keywords:
  - protocolo GOTOP G30B
  - protocolo GPS GOTOP G30B
  - protocolo GOTOP G30B para Plaspy
  - protocolo de comunicación GOTOP G30B
  - protocolo de rastreo G30B
  - compatibilidad del rastreador GOTOP con Plaspy
  - rastreador GPS GOTOP G30B
  - rastreo de activos G30B
  - rastreo de vehículos GOTOP G30B
  - integración G30B con Plaspy
---

# GOTOP - Protocolo G30B

Esta página documenta el contexto público del protocolo para usar el rastreador G30B con Plaspy. Explica, a un nivel general, cómo el dispositivo reporta posición y estado a Plaspy y qué aspectos del protocolo del rastreador son relevantes al integrar el G30B en un flujo centralizado de gestión de flotas o activos. La orientación aquí está dirigida a lectores técnicos, integradores y administradores de flota que requieren un resumen público y claro del comportamiento de comunicación sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que el contenido a continuación se centra en el contexto de comunicación y en consideraciones prácticas de compatibilidad más que en detalles internos del dispositivo. El G30B descrito aquí se usa como referencia principal para las anotaciones y ejemplos.

## Visión general del protocolo

A grandes rasgos, el protocolo del rastreador es el conjunto de reglas que rigen cómo el G30B envía telemetría, alarmas y estado a un servidor remoto y cómo responde el servidor. Para la compatibilidad con Plaspy, la función del protocolo es principalmente garantizar la entrega confiable de datos de ubicación, batería y eventos en un formato que Plaspy pueda procesar y asociar con el vehículo o activo correcto.

- Permite que el G30B envíe telemetría periódica y por eventos al endpoint de Plaspy, de modo que posición, batería y estados de alarma estén disponibles para monitoreo en tiempo real.
- Transporta identificadores que permiten a Plaspy asociar los mensajes entrantes con el dispositivo y la cuenta correctos.
- Transmite información de estado y salud, como nivel de batería, alarmas por manipulación y transiciones de sueño/activación, que Plaspy muestra en la interfaz y utiliza para alertas.
- Permite respetar cadencias de reporte y horarios de actividad opcionales, equilibrando la frecuencia de actualizaciones con una larga vida en espera de la batería.
- Soporta transporte sobre sockets de red estándar para que el mismo endpoint de Plaspy pueda aceptar informes de muchos modelos de rastreadores.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar telemetría de muchos modelos de rastreadores usando un único endpoint y puerto en el servidor. Cuando un G30B configurado correctamente reporta a Plaspy, la plataforma reconoce automáticamente el protocolo del dispositivo basándose en el mensaje entrante y asocia el tráfico con las reglas de análisis correspondientes. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio público de servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP pública del servidor de Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP para comunicarse con Plaspy en el puerto 8888.
- Todos los dispositivos que funcionan con Plaspy usan el mismo puerto, lo que simplifica la configuración.
- Plaspy detecta y selecciona automáticamente el manejador de protocolo adecuado para los dispositivos compatibles cuando los mensajes llegan al endpoint.

## Transporte y contexto de conexión

Las opciones de transporte y la configuración de DNS o IP determinan cómo el G30B alcanza los servidores de Plaspy. El dispositivo puede configurarse para reportar por UDP o TCP según sus opciones y las condiciones de la red. Apuntar el rastreador al dominio o a la IP de Plaspy y usar el puerto compartido es la forma estándar de entregar la telemetría a la plataforma.

- El G30B puede usar UDP en el puerto 8888 o TCP en el puerto 8888 según la configuración del dispositivo.
- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a 54.85.159.138.
- Usar el puerto compartido de Plaspy para todos los dispositivos hace que la configuración inicial sea consistente entre modelos.
- La confiabilidad del transporte y las reglas de firewall en el borde de la red pueden afectar la entrega de paquetes y deben validarse durante el despliegue.
- Las características del operador celular y de la red (cobertura, NAT, firewall) pueden influir en si UDP o TCP es preferible para una instalación determinada.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y la cadencia de reporte por defecto; confirme la versión de firmware durante la puesta en marcha.
- Las revisiones de hardware y las variantes regionales pueden modificar las bandas de radio soportadas y las funciones opcionales que afectan los datos que el rastreador puede proporcionar.
- Las herramientas de configuración del fabricante o los ajustes predeterminados pueden elegir UDP o TCP; verifique que el dispositivo esté apuntando al endpoint de Plaspy y al puerto 8888.
- La detección automática de Plaspy cubre los formatos típicos de reporte, pero firmwares muy antiguos o fuertemente personalizados pueden requerir una validación adicional.
- Verifique los nombres de eventos y la semántica de alarmas (por ejemplo, modos de manipulación o anti-detección) contra la documentación del dispositivo para asegurar un mapeo correcto en Plaspy.
- Al integrar periféricos externos vía UART del dispositivo, valide cómo esos inputs aparecen en la telemetría y si requieren una configuración especial en el rastreador.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración confiable, una resolución de problemas eficiente y una operación predecible a largo plazo cuando el G30B se utiliza con Plaspy. Tener claridad sobre cómo el dispositivo reporta y qué ajustes de conexión son necesarios reduce el tiempo de despliegue y ayuda a los equipos a planificar el mantenimiento para dispositivos con batería de larga duración.

- Configuración inicial más rápida apuntando los dispositivos a d.plaspy.com o 54.85.159.138 en el puerto 8888 y eligiendo el transporte correcto.
- Diagnóstico más ágil de problemas de entrega cuando usted sabe si el dispositivo usa UDP o TCP y cómo Plaspy recibe los mensajes.
- Mejor gestión de la vida útil de la batería alineando la cadencia de reportes y los horarios de actividad con las necesidades operativas.
- Manejo más preciso de alarmas y eventos mediante la verificación del comportamiento del firmware y la nomenclatura de eventos.
- Escalado de despliegues más sencillo porque Plaspy utiliza un solo puerto y detección automática de protocolo para los rastreadores compatibles.

## Por qué usar Plaspy con este protocolo

Usar el G30B con Plaspy ofrece una solución de rastreo compacta y de larga duración que envía ubicación, estado de batería y eventos de seguridad a una plataforma centralizada de gestión de flotas. Para organizaciones que necesitan instalación discreta, operación en espera extendida y visibilidad remota confiable, la combinación del posicionamiento híbrido GNSS más LBS del G30B y su diseño de bajo consumo encaja bien con la ingesta en tiempo real, las alertas y la reproducción histórica de Plaspy.

Para conocer más sobre Plaspy y cómo puede gestionar rastreadores G30B a escala, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, así que confirme los detalles específicos más recientes con el fabricante en https://www.gotop.cc/.

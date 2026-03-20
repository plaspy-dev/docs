---
slug: /teltonika/fmc13a/protocol
id: fmc13a-protocol
sidebar_label: Protocol
title: Teltonika - FMC13A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Teltonika FMC13A y cómo se comunica con Plaspy
keywords:
  - Protocolo Teltonika FMC13A
  - Protocolo GPS Teltonika FMC13A
  - Compatibilidad FMC13A Plaspy
  - Protocolo de rastreo FMC13A
  - Protocolo de rastreador vehicular Teltonika
  - Protocolo de gestión de flotas Plaspy
  - Comunicación de rastreador GPS Plaspy
  - Seguimiento de datos CAN Teltonika
  - Rastreador FMC13A 4G LTE
  - Integración de protocolo Teltonika
---

# Teltonika - Protocolo FMC13A

Esta página describe el contexto del protocolo público para el uso del Teltonika FMC13A con Plaspy. Se enfoca en cómo el rastreador se comunica con Plaspy a un alto nivel y en qué aspectos del comportamiento de reporte del dispositivo son relevantes al integrar el FMC13A en una solución de gestión de flotas. El objetivo es ayudar a usuarios técnicos y administradores a comprender el contexto de conexión y protocolo sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del FMC13A, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y notas prácticas para facilitar la configuración y la solución de problemas.

## Resumen del protocolo

El protocolo de comunicación del FMC13A regula cómo el rastreador se identifica, envía datos GNSS y telemetría, y transmite información del bus del vehículo y sensores a un servidor remoto. Para la integración con Plaspy, el papel del protocolo es entregar mensajes periódicos o por evento que contengan datos de posición y diagnóstico útiles, a la vez que permiten a la plataforma interpretar la identidad y las capacidades del dispositivo.

- Permite que el rastreador reporte datos de posición GPS y multi GNSS que Plaspy puede utilizar en mapas y análisis de rutas
- Transmite telemetría y valores de sensores como lecturas del bus CAN, entradas de medidores de combustible y estados de entradas digitales para monitoreo de flota
- Proporciona identificación y estado del dispositivo para que Plaspy asocie los mensajes entrantes con el activo correcto
- Soporta señales de monitoreo y control remoto enrutadas por la plataforma cuando el dispositivo y el firmware exponen canales de control
- Transporta latidos periódicos y actualizaciones de estado de conectividad que se usan para mantener una conexión fiable con Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint y puerto compartidos y utiliza esos datos entrantes para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo en Plaspy siempre que el FMC13A esté configurado para reportar al servidor de Plaspy y utilice los modos de reporte estándar provistos por el fabricante.

- El endpoint del servidor Plaspy para reportes de dispositivo es d.plaspy.com y la IP del servidor es 54.85.159.138
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de red
- Cuando el FMC13A envía mensajes de reporte válidos al endpoint de Plaspy, la plataforma identifica el dispositivo y detecta el protocolo automáticamente
- Configuraciones correctas de APN y dirección del servidor en el dispositivo son requisitos comunes para la detección y el reporte

## Transporte y contexto de conexión

El contexto de conexión cubre el transporte de red y el direccionamiento que utiliza el FMC13A al enviar datos a Plaspy. El rastreador soporta redes 4G LTE Cat 1 y usará el transporte IP que el instalador configure o que el firmware soporte, por lo que es importante alinear los ajustes de servidor del dispositivo con los detalles de conexión de Plaspy.

- El FMC13A puede configurarse para reportar vía UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica el aprovisionamiento
- Consideraciones a nivel de red como NAT de operador, configuración de APN y reglas de firewall pueden afectar la conectividad hacia el endpoint de Plaspy
- Elegir UDP o TCP puede influir en la fiabilidad y el comportamiento de retransmisión según su entorno de red

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades FMC13A pueden cambiar las opciones de reporte disponibles y los campos exactos incluidos en los mensajes
- Revisiones de hardware y accesorios opcionales como adaptadores CAN pueden exponer telemetría adicional que depende de la configuración del dispositivo
- La elección entre UDP y TCP puede verse limitada por el comportamiento del operador o por builds de firmware específicos del rastreador
- Las plantillas de configuración del fabricante y la herramienta de configuración del dispositivo pueden afectar cómo se formatean los mensajes y qué funciones están habilitadas
- Siempre valide que el FMC13A esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar compatibilidad con Plaspy
- Si se usan ajustes personalizados o un transporte no estándar, confirme el comportamiento de reporte antes de desplegar masivamente

## Por qué es importante entender el protocolo

Una comprensión práctica del protocolo de comunicación del FMC13A facilita una configuración fiable, acelera la solución de problemas y mejora las operaciones de flota a largo plazo al usar Plaspy. Saber qué envía el rastreador y cómo la plataforma lo recibe reduce el tiempo de integración y ayuda a garantizar que se capturen señales críticas.

- Agiliza el aprovisionamiento inicial asegurando los ajustes correctos de servidor, APN y transporte
- Ayuda a diagnosticar problemas de conectividad relacionados con firewall, operador o restricciones de APN
- Clarifica qué datos del vehículo y de sensores estarán disponibles en Plaspy según el firmware y la configuración de accesorios
- Orienta la decisión entre UDP o TCP para su despliegue según el comportamiento de la red
- Apoya la planificación informada de actualizaciones de firmware para que las funciones y formatos de reporte permanezcan compatibles

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC13A con Plaspy brinda a los operadores de flota visibilidad consolidada sobre ubicación del vehículo, telemetría derivada de CAN, lecturas de medidores de flujo de combustible y opciones de control remoto cuando el firmware del dispositivo las soporta. La detección automática de protocolo de Plaspy y el uso consistente de puerto simplifican el despliegue de dispositivos y reducen la necesidad de configuración manual por dispositivo dentro de la plataforma.

Si desea obtener más información sobre Plaspy y cómo la plataforma gestiona el reporte de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Para detalles de protocolo más actuales y específicos por dispositivo, notas de firmware y guías de configuración del Teltonika FMC13A, consulte la documentación oficial en https://www.teltonika-gps.com/ ya que el comportamiento del fabricante y las funciones del firmware pueden cambiar con el tiempo.

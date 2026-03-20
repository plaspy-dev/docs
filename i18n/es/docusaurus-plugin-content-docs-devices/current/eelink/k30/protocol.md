---
slug: /eelink/k30/protocol
id: k30-protocol
sidebar_label: Protocol
title: EElink - K30 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del rastreador wearable EElink K30 y cómo se comunica con Plaspy para seguimiento y alertas confiables
keywords:
  - protocolo EElink K30
  - protocolo GPS EElink K30
  - rastreador K30 Plaspy
  - protocolo wearable EElink
  - compatibilidad protocolo rastreador GPS
  - compatibilidad dispositivo Plaspy
  - protocolo de comunicación K30
  - protocolo de seguimiento K30
  - protocolo GPS para wearables
  - rastreador personal Plaspy
---

# EElink - Protocolo K30

Esta página describe el contexto público del protocolo para usar el rastreador GPS wearable EElink K30 con Plaspy. Resume cómo el dispositivo se comunica con la plataforma Plaspy, los ajustes de conexión que Plaspy espera y las consideraciones prácticas para integrar la telemetría del K30 —como posiciones, eventos SOS y estado de movimiento— en los paneles y alertas de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos a la plataforma. Para Plaspy, la información del endpoint público es d.plaspy.com y la IP del servidor es 54.85.159.138 usando el puerto 8888. El K30 puede configurarse para enviar datos por UDP o TCP al puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento específico del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del K30 es el conjunto de reglas que el dispositivo usa para transmitir posición, alarmas y datos de telemetría a un servidor remoto como Plaspy. En términos prácticos, el protocolo define qué tipos de eventos se envían, la frecuencia de actualizaciones y los identificadores que permiten a Plaspy asociar los mensajes entrantes a un dispositivo registrado.

- Permite que el K30 reporte localizaciones, activaciones SOS, estado de batería e indicios de movimiento a Plaspy.
- Proporciona identificación del dispositivo para que Plaspy atribuya los datos al activo o usuario correcto.
- Define tipos de eventos que Plaspy mapea a alertas, disparos de geocerca y registros históricos.
- Controla la cadencia de reporte y el comportamiento que influyen en la duración de la batería y la granularidad de los datos.
- Permite cambios de configuración remotos vía plataforma, app o SMS que modifican cómo informa el dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint compartido y utiliza los datos entrantes para determinar automáticamente el protocolo del dispositivo. En la mayoría de las integraciones, el dispositivo se apunta al endpoint de Plaspy y la plataforma gestiona la detección del protocolo, por lo que no suele ser necesario seleccionar manualmente el protocolo dentro de la plataforma cuando el dispositivo está correctamente configurado.

- Plaspy escucha en un solo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- Los dispositivos deben apuntar a d.plaspy.com o a la IP 54.85.159.138 para alcanzar Plaspy.
- Plaspy acepta envíos tanto por UDP como por TCP en el puerto 8888 y analizará los reportes de los rastreadores soportados.
- La detección automática implica que, por lo general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el rastreador reporta correctamente.
- Si hay problemas de detección, revisar la configuración de reporte del dispositivo y la documentación del fabricante es el primer paso recomendado.

## Transporte y contexto de conexión

La elección de la capa de transporte afecta cómo el K30 envía datos a Plaspy y puede seleccionarse en la configuración del dispositivo o quedar determinada por el firmware. El K30 se utiliza comúnmente sobre la red GSM para enviar su telemetría al endpoint de Plaspy utilizando UDP o TCP en el puerto constante de Plaspy.

- El dominio del servidor Plaspy que debe configurarse en el dispositivo es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y Plaspy escucha en el puerto 8888 para todos los dispositivos soportados.
- El K30 puede configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del dispositivo y la configuración del operador.
- Elegir UDP puede reducir la sobrecarga, mientras que TCP puede ofrecer mayor fiabilidad de transporte según las condiciones de la red y el firmware del dispositivo.
- Verifique que la APN y la configuración GSM sean correctas para que el dispositivo alcance el endpoint configurado de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, la denominación de eventos y los campos disponibles; confirme la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o variantes regionales del K30 pueden usar comportamientos de transporte o reporte predeterminados distintos.
- La configuración del fabricante vía SMS, app o plataforma puede modificar los intervalos de reporte y los umbrales de evento que afectan cómo aparecen los datos en Plaspy.
- La selección del transporte entre UDP y TCP puede impactar la conectividad y el comportamiento en ciertas redes móviles.
- Plaspy detecta automáticamente protocolos, pero se requiere que el endpoint y la red del dispositivo estén correctamente configurados para una identificación exitosa.
- Siempre valide reportes en vivo del dispositivo en Plaspy después de la configuración inicial para confirmar que los campos y eventos esperados se entregan correctamente.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el K30 facilita una puesta en marcha más rápida, una resolución de problemas más clara y un comportamiento operativo más predecible cuando el dispositivo se usa con Plaspy. Comprender el contexto de comunicación reduce la fricción de integración y ayuda a mantener servicios de localización confiables.

- Acelera la provisión inicial al asegurar que el dispositivo apunte al endpoint de Plaspy usando el transporte correcto.
- Ayuda a diagnosticar problemas de conectividad relacionados con el transporte, la APN o las configuraciones predeterminadas del fabricante.
- Orienta en elecciones razonables sobre intervalos de reporte y gestión de energía para equilibrar la duración de la batería y las necesidades de datos.
- Permite verificar que eventos críticos como SOS y alertas de geocerca se entreguen e interpreten correctamente.
- Facilita coordinar actualizaciones de firmware o cambios de configuración con el comportamiento esperado en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el EElink K30 con Plaspy brinda a las organizaciones visibilidad enfocada en seguridad personal y ubicación del personal mediante un dispositivo wearable ligero. Plaspy ingiere posiciones, señales de emergencia y telemetría de actividad del K30 y las presenta en mapas, alertas e informes históricos para que los equipos puedan monitorear seguridad, responder a incidentes y auditar desplazamientos a lo largo del tiempo.

Plaspy ofrece un endpoint consistente y detección automática de protocolos que simplifican la incorporación de múltiples dispositivos y modelos. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles más recientes específicos del dispositivo en el sitio del fabricante https://www.eelink.com.cn/.

---
slug: /queclink/gl100/protocol
id: gl100-protocol
sidebar_label: Protocol
title: QuecLink - GL100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para conectar el QuecLink GL100 a Plaspy con ajustes de conexión compartidos
keywords:
  - Protocolo QuecLink GL100
  - Protocolo GPS QuecLink GL100
  - Compatibilidad GL100 Plaspy
  - Comunicación QuecLink GL100
  - Protocolo de rastreo GL100
  - Protocolo rastreador de activos QuecLink
  - Protocolo GL100 @Track
  - Rastreo vehicular GL100
  - Protocolo de dispositivos Plaspy
  - Integración QuecLink GL100
---

# QuecLink - Protocolo GL100

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL100 con Plaspy. Se enfoca en cómo el dispositivo se comunica con el backend de Plaspy, el papel del protocolo de reporte del equipo en esa comunicación y consideraciones prácticas de compatibilidad. La información aquí es no sensible y útil para integradores de sistemas, administradores de flotas y usuarios técnicos que preparan un GL100 para su uso con Plaspy.

Plaspy usa ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo se conecta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del GL100, la revisión de hardware y la implementación del fabricante. El GL100 es un rastreador GSM cuatribanda con chipset GNSS SIRF Star III y en muchas variantes de firmware incluye un protocolo de reporte @Track embebido, que es uno de varios formatos que el dispositivo puede emplear.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador define cómo el GL100 formatea y envía reportes de ubicación y estado a un servidor backend y cómo el servidor reconoce o responde al dispositivo. El protocolo permite al GL100 identificarse, transmitir datos de posición y sensores, y recibir configuraciones o comandos remotos cuando aplica. En el contexto de Plaspy, el protocolo es el puente entre el firmware del equipo y los servicios de ingestión de Plaspy.

- El protocolo regula la identificación y los reportes periódicos para que Plaspy pueda asociar los datos entrantes a un registro de dispositivo.
- Transporta fijaciones de GPS, marcas de tiempo y datos auxiliares de sensores, como el estado de movimiento del GL100.
- El GL100 frecuentemente incluye en firmware una interfaz estilo @Track que muchos integradores usan para reenviar datos a backends personalizados.
- Plaspy ingiere los reportes del dispositivo y los traduce en registros de ubicación, eventos y telemetría para la plataforma.
- El comportamiento del protocolo, como la frecuencia de reporte, el formato de alarmas y campos opcionales de la carga útil, puede variar según el firmware y la configuración.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para reportes de dispositivos y usa ese endpoint para aceptar conexiones de muchos modelos de rastreadores, incluido el GL100. Cuando un GL100 correctamente configurado reporta al endpoint de Plaspy, Plaspy evalúa el tráfico entrante y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com.
- El servidor de Plaspy también es accesible en la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración.
- Si el GL100 apunta correctamente al endpoint de Plaspy, la selección de protocolo en Plaspy suele manejarse de forma automática.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el GL100 llega al servicio de ingestión de Plaspy. El GL100 puede configurarse para reportar vía datos celulares y puede soportar tanto transporte UDP como TCP; la elección depende del firmware del equipo y de las características de confiabilidad deseadas. Para la integración con Plaspy, apunte el dispositivo al endpoint de Plaspy usando el puerto compartido y la opción de transporte que soporte la unidad.

- El GL100 puede configurarse para reportar a d.plaspy.com para enrutamiento basado en nombre de host.
- Alternativamente, los dispositivos pueden apuntar directamente a 54.85.159.138.
- El puerto utilizado por Plaspy para recepción de dispositivos es 8888 y es común para todos los equipos compatibles.
- El GL100 puede usar UDP o TCP en el puerto 8888 según el firmware y la configuración del modelo.
- Verifique el APN y la configuración de datos celulares del GL100 para que el dispositivo pueda alcanzar el endpoint de Plaspy por el transporte elegido.
- Cortafuegos de red o del operador pueden requerir permitir tráfico saliente UDP o TCP desde el dispositivo.

## Notas de compatibilidad del protocolo

- Los detalles del protocolo pueden diferir entre versiones de firmware del GL100; no todas las unidades exponen los mismos campos o conjuntos de comandos.
- Las revisiones de hardware y las compilaciones regionales de firmware pueden cambiar qué modo de reporte o qué campos están disponibles.
- El GL100 frecuentemente se entrega con una opción de reporte @Track embebida, pero los fabricantes a veces ofrecen múltiples formatos de reporte o tramas configurables.
- La elección de transporte (UDP vs TCP) puede afectar la confiabilidad y cómo aparecen retransmisiones o reconocimientos a nivel de aplicación.
- Al integrar, confirme que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 y el transporte apropiado.
- Siempre valide la compatibilidad con las notas de la versión del GL100 y las guías de configuración proporcionadas por el fabricante.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GL100 ayuda a configurar correctamente el dispositivo, reduce fricciones en la integración y hace más eficiente la resolución de problemas. Saber qué campos se envían, cómo se identifica el equipo y qué transporte utiliza permite mapear de forma fiable la telemetría entrante en Plaspy.

- Asegura un registro correcto del dispositivo para que Plaspy pueda identificar y atribuir los reportes.
- Ayuda a seleccionar el transporte y la configuración de servidor adecuados durante la provisión.
- Simplifica el diagnóstico de datos faltantes o problemas de conectividad al acotar las posibles causas.
- Facilita la interpretación del comportamiento del dispositivo tras actualizaciones de firmware o cambios de configuración.
- Favorece la mantenibilidad a largo plazo al clarificar qué funciones están en el dispositivo y cuáles en el servidor.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL100 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad continua de vehículos, activos o mascotas. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican despliegues a gran escala al eliminar la necesidad de gestionar múltiples puertos de escucha o seleccionar manualmente protocolos para cada equipo. Para muchos usuarios, esto reduce el tiempo de configuración y facilita las operaciones en flotas con modelos de dispositivo diversos.

Si está evaluando el GL100 con Plaspy, considere el enfoque de endpoint único y la detección automática de Plaspy como parte de su planificación de despliegue. Para saber más sobre Plaspy visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, comportamientos de firmware y opciones de configuración consulte la documentación del fabricante en https://www.queclink.com/.

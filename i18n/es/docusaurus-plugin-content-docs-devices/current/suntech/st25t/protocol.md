---
slug: /suntech/st25t/protocol
id: st25t-protocol
sidebar_label: Protocol
title: Suntech - ST25T Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar Suntech ST25T con Plaspy en reenvío de telemetría e integración de gateways
keywords:
  - Protocolo Suntech ST25T
  - Compatibilidad ST25T Plaspy
  - Interfaz telemática Suntech
  - Telemetría vehicular ST25T
  - Integración gateway ST25T
  - Protocolo GPS Suntech
  - Integración dispositivo Plaspy
  - Rastreo de flotas ST25T
  - Integración J1939 J1708
  - Sensor de combustible RS485 LLS
---

# Suntech - Protocolo ST25T

Esta página describe el contexto público del protocolo para usar el Suntech ST25T con Plaspy. El ST25T es un módulo compacto de interfaz telemática vehicular pensado para reenviar datos del bus del vehículo y sensores hacia gateways compatibles con Plaspy, como los modelos ST4305 y ST8300. Su propósito es enriquecer la telemetría del gateway proporcionando mensajes CAN J1939 y J1708, datos por RS232 y RS485, entradas ADC y señales Bluetooth opcionales, en lugar de funcionar como un rastreador GNSS independiente.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. Los dispositivos compatibles con Plaspy pueden configurarse para enviar datos a d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888 usando UDP o TCP. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante validar la configuración del equipo frente a la documentación actual del fabricante.

## Resumen del protocolo

El ST25T funciona como una interfaz de telemetría y sensores que reenvía señales del vehículo hacia un gateway Plaspy. El dispositivo entrega al gateway lecturas del bus y de sensores para que Plaspy presente un estado vehicular unificado, alertas y reportes históricos en los paneles de la flota. Aquí, “protocolo” se refiere al método y a los formatos de mensaje que usan el ST25T y el gateway para canalizar telemetría hacia Plaspy.

- Permite el reenvío de datos del bus del vehículo y lecturas de sensores desde el ST25T hacia un gateway compatible con Plaspy para su ingestión en la plataforma.
- Transporta identificadores únicos de dispositivo y telemetría para que Plaspy asocie las transmisiones entrantes con un vehículo o módulo de interfaz específico.
- Transmite señales de eventos y estado como encendido, entradas de puertas o alarmas y lecturas de sensor de combustible para alertas y reportes en tiempo real.
- Soporta configuración local y emparejamiento de accesorios vía Bluetooth opcional, mientras que los canales seriales y ADC ofrecen interfaces deterministas para sensores.
- Permite a Plaspy combinar la ubicación GNSS proporcionada por el gateway con la telemetría del vehículo proveniente del ST25T para un contexto completo de la flota.

## Cómo detecta Plaspy el protocolo

Plaspy detecta dispositivos compatibles observando las conexiones entrantes en el endpoint compartido de Plaspy. Cuando un dispositivo o gateway correctamente configurado reporta al servidor de Plaspy, el backend reconoce automáticamente el protocolo del dispositivo y comienza a ingerir su telemetría sin que usted necesite seleccionar manualmente el protocolo en la mayoría de los despliegues.

- Los dispositivos deben configurarse para enviar datos a d.plaspy.com o al servidor IP 54.85.159.138 en el puerto 8888.
- El ST25T reenvía telemetría a un gateway compatible con Plaspy, y este a su vez reporta al endpoint de Plaspy para su detección automática.
- Plaspy acepta tráfico UDP y TCP en el mismo puerto, por lo que el transporte puede elegirse según las capacidades del equipo y las necesidades de la red.
- En configuraciones típicas usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo o gateway apunta correctamente al endpoint de Plaspy.
- La detección automática acelera la incorporación, pero su éxito depende de la configuración del dispositivo y del comportamiento del firmware.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo se comunican el ST25T y su gateway emparejado con Plaspy. La plataforma usa un puerto único y consistente para todos los dispositivos soportados, lo que simplifica la configuración de equipos y las reglas de firewall. Los equipos y gateways pueden configurarse para UDP o TCP según el soporte de hardware y los requerimientos de la red.

- Plaspy escucha en el puerto 8888 para todos los dispositivos y gateways soportados.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Tanto UDP como TCP son compatibles en el puerto 8888 según la configuración del dispositivo y del gateway.
- Usar el endpoint y el puerto compartidos de Plaspy simplifica despliegues a gran escala y reduce las diferencias de configuración por dispositivo.
- Elija el modo de transporte que mejor se ajuste al comportamiento del módem celular y a la confiabilidad de la red en su despliegue.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la cadencia de los mensajes, los campos opcionales o las entradas soportadas; confirme siempre el comportamiento para su revisión de firmware.
- Las revisiones de hardware y módulos opcionales como Bluetooth o canales ADC adicionales pueden alterar el conjunto de campos de telemetría reenviados al gateway.
- La selección del transporte entre UDP y TCP puede afectar las características de entrega y debe coincidir con el diseño del gateway y de la red.
- Los menús de configuración del fabricante o las herramientas de aprovisionamiento pueden mostrar diferentes opciones entre revisiones de firmware.
- El ST25T actúa como módulo de interfaz y depende del gateway emparejado para conectividad GNSS y celular; verifique la compatibilidad del gateway para la integración con Plaspy.
- Valide el cableado del sensor de combustible RS485 LLS y las configuraciones de línea serial según la hoja de datos del ST25T y la documentación del gateway antes del despliegue.
- Confirme cualquier requisito regional o ajustes del operador que puedan afectar la conectividad hacia el endpoint de Plaspy.

## Por qué importa entender el protocolo

Comprender cómo el ST25T y su gateway emparejado se comunican con Plaspy reduce el tiempo de configuración, mejora la resolución de problemas y ayuda a mantener la confiabilidad a largo plazo. Conocer el rol del transporte, los identificadores de dispositivo y las variantes de firmware permite a integradores y operadores de flota tomar decisiones informadas sobre configuración y mantenimiento.

- Garantiza que los equipos apunten a d.plaspy.com o a 54.85.159.138 y usen el puerto 8888 para que Plaspy reciba la telemetría.
- Ayuda a elegir entre UDP y TCP según la confiabilidad de la red y el comportamiento del módem del gateway.
- Facilita el diagnóstico de telemetría ausente revisando versiones de firmware y ajustes de transporte.
- Permite mapear correctamente las señales del bus del vehículo y los canales de sensor a los campos que muestra Plaspy.
- Reduce el tiempo de resolución de problemas de integración al alinear la configuración del dispositivo con las expectativas de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ST25T como parte de una solución compatible con Plaspy es una opción práctica para flotas que requieren integración robusta con el bus del vehículo, monitoreo de combustible y soporte para equipos seriales legados. El ST25T se enfoca en la agregación de telemetría y el reenvío confiable hacia un gateway, permitiendo que Plaspy ofrezca rastreo unificado, alertas y reportes siempre que la conectividad GNSS y celular la proporcione un gateway compatible.

Para conocer más sobre Plaspy y cómo funciona con módulos de interfaz como el ST25T visite https://www.plaspy.com. Verifique las notas de firmware, el comportamiento específico del protocolo y los detalles de implementación con el fabricante en http://www.suntechint.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

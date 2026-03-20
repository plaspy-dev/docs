---
slug: /astra_telematics/at110/protocol
id: at110-protocol
sidebar_label: Protocol
title: Astra Telematics - AT110 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo y guía de conexión para la compatibilidad del rastreador Astra Telematics AT110 con Plaspy
keywords:
  - Protocolo Astra Telematics AT110
  - Protocolo GPS Astra Telematics AT110
  - Protocolo rastreador GPS AT110
  - Compatibilidad AT110 Plaspy
  - Protocolo de comunicación Astra AT110
  - Protocolo seguimiento vehicular AT110
  - AT110 GPRS TCP UDP
  - Dispositivos compatibles Plaspy
  - Seguimiento de flotas Astra AT110
  - Protocolo telemático AT110
---

# Astra Telematics - Protocolo AT110

Esta página describe el contexto público del protocolo para usar el rastreador GPS Astra Telematics AT110 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión son necesarios para apuntarlo a Plaspy y qué comportamientos del equipo son relevantes al integrarlo con una plataforma de gestión de flotas. La información se centra en detalles no sensibles y neutrales en cuanto a implementación, útiles para la configuración y resolución de problemas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este reporta al endpoint de la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación práctica y recomienda verificar los detalles específicos con la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del AT110 define cómo el rastreador envía posición, estado y telemetría a un servidor remoto, y cómo se intercambian comandos del servidor o acuses de recibo cuando la implementación lo soporta. Para integrar con Plaspy, considere el protocolo como el conjunto de mensajes y comportamientos que permiten al dispositivo identificarse y transmitir datos de ubicación y estado utilizables por la plataforma.

- Permite reportes de posición periódicos o por eventos, por ejemplo por tiempo o distancia recorrida.
- Transmite estado del vehículo y datos de telemetría que Plaspy convierte en información útil para gestión de flotas.
- Incluye pasos de inicio de conexión para que Plaspy asocie las conexiones entrantes con un identificador de dispositivo específico.
- Funciona sobre datos móviles IP vía GPRS usando transporte TCP o UDP según la configuración del equipo.
- Puede verse afectado por modos de energía del dispositivo y por almacenamiento interno cuando la conectividad es intermitente.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint unificado y determina automáticamente el protocolo reportado, por lo que normalmente no es necesario seleccionar el protocolo manualmente. Cuando un AT110 está configurado para reportar al endpoint de Plaspy, la plataforma intenta mapear los datos entrantes al dispositivo correcto y decodificar los campos estándar necesarios para rastreo y telemática.

- Plaspy escucha en el host compartido d.plaspy.com y en el servidor público 54.85.159.138.
- El puerto de escucha usado por todos los dispositivos soportados es 8888 y Plaspy utiliza el mismo puerto para el tráfico de dispositivos.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888.
- Si el AT110 apunta al endpoint de Plaspy, la plataforma intentará detectar el protocolo del rastreador automáticamente.
- En la mayoría de los despliegues, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al servidor de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el AT110 se conecta al servicio de Plaspy mediante datos móviles y qué host y puerto deben usarse en la configuración del dispositivo. El AT110 soporta GPRS para transporte de datos y puede utilizar TCP o UDP según la configuración del dispositivo y las capacidades del firmware.

- Configure el dispositivo para reportar a d.plaspy.com o directamente a 54.85.159.138 para conectividad con Plaspy.
- Use el puerto 8888 para TCP o UDP; Plaspy usa el mismo puerto para todos los dispositivos.
- La selección de transporte entre TCP y UDP depende de la configuración del equipo, la confiabilidad de la red y las opciones del firmware.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo estén correctos para que el rastreador pueda establecer el transporte elegido hacia Plaspy.
- Tenga en cuenta que el comportamiento de la red móvil y la intensidad de la señal influirán en la entrega de mensajes y en cómo se realizan los reintentos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la temporización de mensajes, las funciones disponibles y los campos opcionales enviados por el dispositivo.
- Variantes de hardware u opciones accesorias como CANBus o Bluetooth no siempre afectan el comportamiento de reporte principal, pero pueden añadir campos de telemetría.
- Los menús de configuración del fabricante suelen permitir seleccionar TCP o UDP y definir el nombre de host o la dirección IP del servidor de reporte.
- Los modos de reposo del dispositivo, el buffer interno y el comportamiento de la batería de respaldo influyen en la frecuencia de reportes y la entrega de datos en estados de baja energía.
- Valide la configuración del equipo y el comportamiento esperado con la documentación oficial de Astra Telematics para su versión de firmware y revisión de hardware específica.
- Confirme la compatibilidad del APN y del plan de datos móviles para evitar problemas de conectividad al reportar a Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AT110 ayuda a asegurar una configuración correcta, un comportamiento predecible y una resolución de problemas más eficiente al integrarlo con Plaspy. Tener un conocimiento básico sobre las opciones de transporte, los disparadores de reporte y los modos de energía del dispositivo reduce el tiempo de integración y mejora la confiabilidad.

- Facilita la configuración inicial para que el dispositivo apunte a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- Ayuda a elegir TCP o UDP según las condiciones de la red y el comportamiento de entrega esperado.
- Aclara cómo las actualizaciones de firmware o las revisiones de hardware pueden cambiar el contenido o la temporización de los mensajes.
- Permite una resolución de problemas más eficiente cuando los reportes esperados no aparecen en Plaspy por problemas de APN, transporte o estado de energía.
- Mejora la planificación de mantenimiento a largo plazo para flotas que dependen de telemetría consistente y alta disponibilidad.

## Por qué usar Plaspy con este protocolo

Usar el Astra Telematics AT110 con Plaspy ofrece a las organizaciones una vía sencilla para capturar posiciones GPS, estado del vehículo y datos telemáticos básicos con un dispositivo probado. La combinación de las capacidades del hardware AT110 y la detección automática de protocolos de Plaspy simplifica la incorporación al minimizar la selección manual de protocolos y centralizar el tráfico de dispositivos en un único endpoint de Plaspy.

Para obtener más información sobre cómo trabaja Plaspy con dispositivos como el AT110 visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo AT110, el comportamiento del firmware y la implementación del dispositivo con Astra Telematics en https://astratelematics.com/ ya que el soporte de protocolo y las funciones del firmware pueden cambiar con el tiempo.

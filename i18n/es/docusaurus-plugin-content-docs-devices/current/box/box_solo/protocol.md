---
slug: /box/box_solo/protocol
id: box_solo-protocol
sidebar_label: Protocol
title: Box - Box Solo Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Box Solo y cómo se comunica con Plaspy para supervisión confiable de flotas
keywords:
  - protocolo Box Solo
  - protocolo GPS Box
  - Box Solo Plaspy
  - protocolo rastreador GPS
  - protocolo seguimiento remolque
  - seguimiento de vehículos Plaspy
  - comunicación Box Solo
  - rastreador GSM GPRS
  - compatibilidad rastreador Plaspy
  - guía protocolo del dispositivo
---

# Box - Protocolo Box Solo

Esta página ofrece una visión pública del contexto del protocolo para usar el rastreador de remolques Box Solo con Plaspy. Resume, en términos no sensibles, cómo se comunica el dispositivo, cuál es el papel del protocolo en la operación diaria y qué verificar al integrar un Box Solo en la plataforma Plaspy. El Box Solo es una unidad compacta para seguimiento de remolques con GPS de alta sensibilidad, GSM GPRS cuatribanda, memoria interna y batería de respaldo, utilizada frecuentemente para visibilidad y recuperación de remolques.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto de envío de informes y el soporte de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página debe considerarse una visión general del protocolo y no una guía específica de firmware.

## Descripción general del protocolo

El protocolo de comunicación define cómo el Box Solo envía información de posición, estado y eventos a un servidor remoto y cómo esos datos se vuelven utilizables en Plaspy. En términos sencillos, el protocolo permite que el dispositivo se identifique, reporte telemetría y garantice la llegada de los datos a Plaspy incluso cuando la conectividad es intermitente.

- Permite la transmisión de posiciones GPS y el estado del dispositivo desde el Box Solo hacia un servidor remoto para su procesamiento.
- Transporta información de identidad del dispositivo para que Plaspy pueda asociar los informes entrantes con el activo correcto.
- Soporta disparadores de reporte habituales en el seguimiento de remolques, como tiempo, distancia y cambios de ángulo según lo provea el dispositivo.
- Utiliza GSM GPRS como transporte y puede almacenar datos en la memoria interna cuando la conexión no está disponible.
- Considera los modos de ahorro de energía y el comportamiento de la batería de respaldo que afectan la cadencia de reportes.

## Cómo Plaspy detecta el protocolo

Plaspy acepta informes de dispositivos en un endpoint y puerto compartidos e identifica automáticamente el protocolo del rastreador, lo que elimina la necesidad de que la mayoría de los usuarios seleccionen un protocolo manualmente en la plataforma. Cuando un Box Solo está configurado para reportar a Plaspy, la plataforma empata los informes entrantes con un patrón de protocolo conocido y asocia los datos con el registro de dispositivo correspondiente.

- Plaspy ofrece un único endpoint de servidor para los informes de dispositivos con el fin de simplificar la configuración y la detección.
- Los dispositivos que apuntan al endpoint de Plaspy son analizados y el protocolo del rastreador se detecta automáticamente.
- Generalmente, los usuarios no necesitan especificar ajustes de protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- La presencia de información de identidad correcta en los informes permite a Plaspy mapear los mensajes al activo adecuado sin selección manual de protocolo.
- Si un dispositivo no aparece, verifique la configuración de red del equipo, la dirección del servidor y que el dispositivo cuente con una versión de firmware compatible.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el Box Solo llega a Plaspy a través de la red móvil. El Box Solo soporta los transportes GSM y GPRS y puede usar UDP o TCP según la configuración y el firmware. Plaspy escucha en un único puerto y endpoint para todos los dispositivos soportados para simplificar la configuración.

- Los dispositivos Box Solo pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los equipos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos para reducir la complejidad de configuración.
- Asegúrese de que el APN de la SIM y los ajustes de red del rastreador sean correctos para que pueda alcanzar el endpoint de Plaspy.
- Confirme que los firewalls del operador o las restricciones del APN permitan tráfico saliente TCP o UDP hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades Box Solo pueden modificar las opciones de reporte y la temporización; verifique la versión de firmware al diagnosticar comportamientos.
- Las revisiones de hardware o las variantes regionales pueden diferir en el soporte de bandas de radio y en las entradas disponibles o modos de alimentación.
- El Box Solo soporta disparadores de reporte por tiempo, distancia y cambio de ángulo que pueden configurarse y afectar el volumen de mensajes.
- La selección de UDP frente a TCP en el dispositivo influye en el comportamiento de entrega y debe alinearse con su configuración y las expectativas de fiabilidad del operador.
- Siempre valide las credenciales de red del dispositivo y los ajustes APN como parte de las comprobaciones de compatibilidad.
- Confirme la calidad de la antena y la instalación, ya que la recepción GPS y la señal GSM influyen en la fiabilidad de los reportes.
- Consulte la documentación del fabricante para obtener detalles sobre los transportes soportados y cualquier limitación específica del modelo.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del rastreador ayuda a asegurar una integración fluida y un funcionamiento confiable con Plaspy. Conocer qué envía el dispositivo, cómo se conecta y qué puede variar entre unidades hace que la configuración y la resolución de problemas sean más rápidas y predecibles.

- Garantiza que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP del servidor de Plaspy y que use el puerto 8888 según se requiera.
- Ayuda a elegir UDP o TCP de forma apropiada según las condiciones de red esperadas y la fiabilidad requerida de los mensajes.
- Muestra cómo el ahorro de energía y el comportamiento de la batería de respaldo afectarán la cadencia de reportes y el almacenamiento en búfer offline.
- Facilita mapear las entradas de dispositivo, como sensores digitales y analógicos, a los eventos que desea ver en Plaspy.
- Acelera la resolución de problemas al centrar la atención en ajustes APN, provisión de SIM y diferencias de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Box Solo con Plaspy ofrece una manera práctica de convertir los reportes de posición y estado del remolque en información útil para la gestión de la flota. Plaspy centraliza los datos entrantes, gestiona la detección de protocolo por usted y presenta la información de ubicación y eventos que los administradores de flota utilizan para visibilidad, recuperación y control operativo.

Si está evaluando un despliegue de Box Solo, el modelo de endpoint compartido y la detección automática de protocolo de Plaspy simplifican los despliegues a gran escala y reducen la configuración por equipo. Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las últimas instrucciones del fabricante en el sitio oficial de Box Telematics http://www.boxtelematics.com/ ya que los detalles de implementación pueden cambiar con el tiempo.

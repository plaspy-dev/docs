---
slug: /megastek/mt_90n/protocol
id: mt_90n-protocol
sidebar_label: Protocol
title: Megastek - MT-90N Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Megastek MT‑90N y su integración con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Protocolo Megastek MT-90N
  - Protocolo GPS Megastek MT-90N
  - Protocolo de rastreo MT-90N
  - Protocolo rastreador GPS Megastek
  - Compatibilidad MT-90N Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador NB‑IoT
  - Comunicación de rastreador personal
  - Protocolo de posicionamiento híbrido
  - Integración con plataforma de rastreo
---

# Megastek - Protocolo MT-90N

Esta página ofrece un resumen público del protocolo para usar el rastreador Megastek MT‑90N con Plaspy. Describe el contexto general de comunicación y la forma en que el dispositivo reporta ubicación y telemetría a Plaspy, sin entrar en detalles de firmware privados ni en lógica de parseo interna. El MT‑90N es un rastreador personal compacto con capacidad NB‑IoT que emplea posicionamiento híbrido y reportes celulares estándar para entregar ubicación, alarmas SOS, eventos de geocerca y estado del dispositivo para su monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para enviar datos al endpoint de Plaspy. El comportamiento exacto de los mensajes y los campos disponibles puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en detalles públicos y seguros necesarios para la integración y la resolución de problemas, en lugar de los internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación define cómo el MT‑90N envía información de ubicación, estado y alarmas a un servidor remoto para que Plaspy pueda mostrar posiciones en tiempo real, alertas y recorridos históricos. Permite que el dispositivo se identifique, reporte telemetría como posición GPS y nivel de batería, y active notificaciones de eventos como SOS y alarmas de geocerca.

- Envía actualizaciones periódicas de ubicación y telemetría que Plaspy asigna al rastreo en vivo y a la reproducción histórica.
- Transmite mensajes de evento como alarmas SOS, activaciones de geocerca y notificaciones de batería baja.
- Proporciona identificación del dispositivo y datos de estado que permiten a Plaspy asociar los reportes con un rastreador específico.
- Soporta transporte sobre canales celulares estándar para que el MT‑90N llegue a Plaspy en entornos NB‑IoT o GPRS.
- Habilita monitoreo y alertas remotos sin requerir herramientas de gestión propietarias en el dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador en base al tráfico entrante. En la mayoría de las implementaciones, usted no necesita seleccionar un protocolo en Plaspy siempre que el dispositivo esté configurado para enviar datos al endpoint y puerto correctos de Plaspy.

- El endpoint público de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto de reporte de Plaspy es 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Los dispositivos pueden apuntar al dominio de Plaspy o a la IP numérica y Plaspy aceptará la conexión.
- Cuando un MT‑90N correctamente configurado reporta a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y procesará los datos entrantes.
- La acción típica del usuario se limita a confirmar que el dispositivo está configurado para reportar al endpoint de Plaspy y a seleccionar el modo de transporte correcto en el dispositivo si es necesario.

## Transporte y contexto de conexión

El MT‑90N puede reportar a través de canales de telemetría celular y puede configurarse para usar UDP o TCP según la disponibilidad de la red y la configuración del equipo. Plaspy acepta ambos tipos de transporte en el puerto de reporte compartido, y los dispositivos pueden usar tanto el nombre de dominio como la dirección numérica del servidor para alcanzar la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP para reportes en el puerto 8888.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la IP numérica del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que la configuración es consistente entre modelos.
- Seleccione UDP o TCP en el dispositivo según el soporte del operador y del equipo; Plaspy admite ambos para recibir reportes.
- Verifique que el APN y los parámetros de red en el MT‑90N estén configurados para que el rastreador pueda alcanzar el endpoint de Plaspy a través del enlace celular.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y los campos disponibles, por lo que el comportamiento del dispositivo puede variar entre versiones.
- Las revisiones de hardware y las compilaciones regionales de firmware pueden introducir diferencias en el soporte de transporte o en los modos de reporte por defecto.
- Algunos operadores o redes NB‑IoT pueden limitar o alterar la disponibilidad de UDP frente a TCP; confirme la capacidad de la red para su despliegue.
- Las funciones automáticas de APN y zona horaria en el MT‑90N ayudan a reducir el tiempo de configuración, pero deben verificarse después de actualizaciones de firmware.
- Al integrar muchos dispositivos, mantenga un equipo de muestra cerca para validar que los mensajes llegan al endpoint de Plaspy como se espera.
- Siempre contraste las indicaciones de configuración del dispositivo con la documentación del fabricante cuando tenga dudas.

## Por qué es importante entender el protocolo

Comprender el contexto público del protocolo ayuda a asegurar una incorporación de dispositivos confiable, a acelerar la resolución de problemas y a garantizar un funcionamiento predecible a largo plazo dentro de Plaspy. Saber cómo reporta el MT‑90N y qué ajustes de transporte usar reduce el tiempo de configuración y evita problemas comunes de conectividad.

- Acelera la configuración inicial al confirmar que el endpoint del servidor y el transporte están correctamente configurados en el dispositivo.
- Facilita la resolución de problemas por falta de actualizaciones al revisar el tipo de red, el APN y si el dispositivo reporta a d.plaspy.com o a la IP numérica.
- Aclara qué eventos y telemetría aparecerán en Plaspy, como SOS, geocerca y alertas de batería.
- Ayuda a planificar despliegues masivos donde una configuración y versionado de firmware consistentes reducen la variabilidad.
- Mejora la comunicación con el fabricante del dispositivo o con el operador al diagnosticar problemas de conectividad o discrepancias en los reportes.

## Por qué usar Plaspy con este protocolo

Usar el Megastek MT‑90N con Plaspy ofrece una solución compacta y práctica para seguridad personal, monitoreo temporal de vehículos y tareas ligeras de telemetría. El posicionamiento híbrido del MT‑90N y su conectividad NB‑IoT ofrecen cobertura más consistente en entornos urbanos e interiores, y Plaspy mapea esos reportes en un único panel para monitoreo, alertas y reproducción histórica. Esta combinación es adecuada para organizaciones que buscan despliegues sencillos y visibilidad centralizada de muchos dispositivos pequeños.

Para saber más sobre Plaspy y cómo gestiona los reportes de dispositivos visite https://www.plaspy.com. Para detalles más recientes específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio de Megastek en https://www.megastek.com/ ya que las implementaciones pueden cambiar con el tiempo.

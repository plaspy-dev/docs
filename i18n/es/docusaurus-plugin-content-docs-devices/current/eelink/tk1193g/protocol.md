---
slug: /eelink/tk1193g/protocol
id: tk1193g-protocol
sidebar_label: Protocol
title: EElink - TK119‑3G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo EElink TK119‑3G para integrar con Plaspy y asegurar comunicación y despliegue fiable de los dispositivos
keywords:
  - protocolo EElink TK119‑3G
  - protocolo GPS EElink TK119‑3G
  - EElink TK119‑3G para Plaspy
  - integración de dispositivos Plaspy
  - protocolo para rastreador vehicular
  - protocolo para rastreo de flotas
  - compatibilidad protocolo EElink
  - rastreador GPS TK119‑3G
  - guía protocolo de rastreador
  - rastreador GPS Plaspy
---

# EElink - Protocolo TK119‑3G

Esta página explica el contexto público del protocolo para usar el rastreador EElink TK119‑3G con Plaspy. Resume cómo el equipo comunica posición, eventos y telemetría a la plataforma Plaspy en términos no sensibles, y aclara el papel del protocolo de reporte en la integración y supervisión correcta del dispositivo.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y las implementaciones del fabricante, por lo que esta página se centra en la guía pública de conexión y compatibilidad en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo que utiliza el TK119‑3G es el método de reporte del dispositivo que transmite datos de ubicación, estado y alarmas desde la unidad hacia la plataforma Plaspy. En términos generales, define cómo el rastreador se identifica, cómo informa posiciones por GPS y LBS, y cómo entrega registros de eventos y telemetría para que Plaspy los transforme en seguimiento en tiempo real, alertas e informes históricos.

- Permite actualizaciones regulares de posición y mensajes de evento como ACC encendido/apagado, exceso de velocidad y alertas por choque o vibración.
- Transporta telemetría de entradas periféricas como sensores de combustible conectados por RS232 y estados opcionales de relés.
- Proporciona los campos identificadores y marcas de tiempo que Plaspy necesita para asociar los reportes con un dispositivo registrado.
- Soporta posicionamiento por respaldo mediante LBS y asistencia AGPS que mejoran la continuidad en condiciones GNSS pobres.
- Permite al plataforma recibir mensajes de estado como pérdida de alimentación y alertas de batería de respaldo para detección de manipulación.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante en un endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy suele ser el único paso necesario para permitir la detección automática y el onboarding.

- Plaspy escucha en el endpoint del servidor compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Cuando un rastreador está configurado para reportar a Plaspy, normalmente no es necesaria una selección manual de protocolo en la plataforma.
- Si la detección no ocurre, revisar la configuración de reporte del dispositivo y el comportamiento del firmware es el primer paso recomendado.

## Transporte y contexto de conexión

Las opciones de transporte determinan cómo el TK119‑3G envía reportes a través de la red celular hacia Plaspy. El rastreador puede configurarse para usar UDP o TCP en el puerto común de Plaspy según el soporte del modelo y el modo de reporte seleccionado. Esta sección describe las opciones públicas de conexión relevantes para la integración.

- Los dispositivos pueden configurarse para apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- El TK119‑3G puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles para mantener un endpoint coherente para los reportes entrantes.
- Elegir UDP suele favorecer menor latencia, mientras que TCP puede ofrecer entrega más fiable dependiendo del firmware del dispositivo.
- Verifique que el rastreador esté configurado para reportar al host y transporte correctos para que Plaspy pueda recibir y detectar el protocolo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o campos envía el rastreador. Siempre confirme la versión de firmware al diagnosticar compatibilidades.
- Las revisiones de hardware u accesorios opcionales como periféricos RS232 y relés pueden afectar la telemetría disponible para Plaspy.
- Las configuraciones del fabricante y el comportamiento de reporte por defecto pueden variar según la región o la configuración suministrada por el distribuidor.
- La selección del protocolo de transporte entre UDP y TCP puede influir en la entrega y el comportamiento, así que confirme que el transporte elegido coincide con la configuración del dispositivo.
- Plaspy detecta el protocolo automáticamente, pero la dirección de red y el transporte deben estar correctamente configurados en el dispositivo.
- Para comandos específicos del dispositivo, funciones avanzadas o cambios de firmware consulte la documentación del fabricante.

## Por qué es importante conocer el protocolo

Tener un entendimiento práctico de cómo el TK119‑3G reporta a Plaspy ayuda en la configuración inicial, la resolución de problemas y en garantizar una operación confiable a largo plazo de una flota. Conocer las expectativas de conexión y las variaciones comunes reduce el tiempo de resolución de incidencias y mejora la calidad de los datos para monitoreo e informes.

- Ayuda a validar que el dispositivo está enviando mensajes de ubicación y evento al endpoint correcto de Plaspy.
- Acelera la resolución de problemas cuando la telemetría o las alarmas no aparecen en Plaspy al centrar las comprobaciones en transporte y firmware.
- Aclara qué entradas y sensores reportará el dispositivo a Plaspy para configurar adecuadamente las reglas de monitoreo.
- Orienta la decisión de usar UDP o TCP según el comportamiento de la red y el soporte del firmware del dispositivo.
- Sirve para planificar actualizaciones de firmware y revisiones de hardware y evitar cambios inesperados en el reporte del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el TK119‑3G con Plaspy brinda a los operadores reportes fiables de ubicación y eventos para visibilidad de la flota, flujos de trabajo antirrobo y programas de seguridad vial. Plaspy ingiere posición, estado ACC, eventos de alarma y telemetría periférica del rastreador para alimentar la supervisión en vivo, las alertas y el análisis histórico que respaldan despacho, cumplimiento y respuesta a incidentes.

Plaspy está diseñado para aceptar reportes de rastreadores EElink con una configuración mínima gracias a un endpoint y puerto consistentes. Para conocer más sobre Plaspy y cómo gestiona el onboarding de dispositivos y la administración de flotas, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique los detalles técnicos actuales y las notas de firmware en el sitio del fabricante https://www.eelink.com.cn/.

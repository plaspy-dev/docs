---
slug: /topshine/gt103/protocol
id: gt103-protocol
sidebar_label: Protocol
title: TopShine - GT103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopShine GT103 y cómo comunica datos de telemetría a Plaspy para flotas
keywords:
  - protocolo TopShine GT103
  - rastreador GPS GT103
  - protocolo GPS TopShine GT103
  - protocolo de comunicación GT103
  - protocolo de rastreo GT103
  - compatibilidad Plaspy
  - integración de rastreador Plaspy
  - protocolo para rastreadores de vehículos
  - rastreador para gestión de flotas
  - rastreador antirrobo GT103
---

# TopShine - Protocolo GT103

Esta página describe el contexto público del protocolo para usar el rastreador GPS TopShine GT103 con la plataforma Plaspy. Aquí encontrará cómo el dispositivo reporta posición y telemetría a Plaspy de forma general, el papel que juega el protocolo de reporte y qué esperar durante la configuración y la resolución de problemas al integrar equipos GT103 en flujos de trabajo de flotas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; use este documento como guía general y consulte al fabricante para detalles específicos de firmware.

## Visión general del protocolo

El rastreador GT103 comunica telemetría, alarmas y confirmaciones básicas de comandos a un servidor usando su enlace de datos celular. El protocolo es el mecanismo mediante el cual el dispositivo se identifica, reporta coordenadas GPS y el estado de sensores, y envía eventos de alarma que Plaspy procesa para mapeo, notificaciones y reportes.

- Permite el envío periódico de ubicación y actualizaciones de estado del GT103 a Plaspy para rastreo en tiempo real.
- Proporciona notificaciones de eventos como SOS, cambios de ignición ACC, activaciones de geocerca y alertas por exceso de velocidad para las alarmas de la plataforma.
- Transporta la telemetría que Plaspy usa en la reproducción histórica, análisis de viajes y monitorización del estado del dispositivo.
- Soporta flujos de comando y control por GPRS o SMS cuando el dispositivo y el firmware del fabricante exponen funciones de control remoto.
- Suministra la identidad del dispositivo que Plaspy utiliza para asociar los datos entrantes con el vehículo y la cuenta correctos.

## Cómo detecta Plaspy el protocolo

Plaspy examina automáticamente las conexiones entrantes para determinar el protocolo de reporte del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente. Cuando un GT103 está configurado para enviar datos a Plaspy, la plataforma compara los mensajes entrantes con los comportamientos de dispositivos soportados y enruta la telemetría a su cuenta.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, que el rastreador puede usar como endpoint de reporte.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que no necesita entradas de puerto múltiples.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy.
- En configuraciones típicas, basta con apuntar el dispositivo al endpoint de Plaspy y la plataforma ingestará los datos sin requerir selección manual de protocolo.
- Si un equipo admite tanto datos como SMS, Plaspy puede recibir los reportes GPRS mientras que SMS puede usarse como respaldo en configuraciones soportadas por el fabricante.

## Transporte y contexto de conexión

Los dispositivos GT103 envían datos sobre la red celular y pueden configurarse para usar distintos métodos de transporte para llegar a Plaspy. Entender el contexto de conexión ayuda a asegurar que el dispositivo apunte al endpoint y puerto correctos de Plaspy para una entrega confiable.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- Los equipos pueden apuntar al hostname d.plaspy.com o a la dirección del servidor 54.85.159.138 al configurar el destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall para flotas e integradores.
- El GT103 utiliza principalmente GPRS 2G para el reporte de datos, con SMS como respaldo cuando el fabricante habilita esa vía.
- Verifique el APN de la SIM y la disponibilidad de la red móvil 2G en el área de despliegue para mantener una conectividad consistente.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o eliminar funciones y cambiar la forma en que se reportan ciertos eventos; confirme la versión de firmware del equipo al validar compatibilidad.
- Revisiones de hardware o variantes regionales pueden afectar las bandas celulares y las opciones de transporte soportadas; verifique la compatibilidad de bandas para su región.
- La selección de transporte entre UDP y TCP depende del dispositivo y debe coincidir con la configuración del GT103 para garantizar que los mensajes lleguen a Plaspy en el puerto 8888.
- Los comportamientos de respaldo por SMS varían según el firmware del fabricante y la configuración de despliegue; no asuma conjuntos de comandos SMS idénticos entre versiones de firmware.
- APN, provisión de SIM y restricciones del operador pueden interferir con el reporte por GPRS incluso cuando el protocolo está soportado.
- Valide siempre funciones críticas como control remoto de inmovilizador, voz bidireccional y flujos con RFID frente a la documentación del fabricante antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender de forma práctica cómo el GT103 se comunica con Plaspy facilita la configuración, reduce el tiempo de inactividad durante la resolución de problemas y ayuda a gestionar las expectativas sobre funciones remotas y alarmas.

- Despliegues más rápidos al asegurar que el reporte del dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y use el transporte correcto.
- Resolución de problemas más ágil verificando el modo de transporte UDP o TCP, APN de la SIM y cobertura de la red.
- Mejor manejo de alarmas al conocer qué eventos reporta el dispositivo y cómo se mapean a las reglas de alerta de Plaspy.
- Operaciones remotas más seguras al confirmar los canales de comando soportados por el fabricante y cualquier comportamiento requerido del firmware.
- Planificación de ciclo de vida mejorada al registrar versiones de firmware y revisiones de hardware que puedan afectar la compatibilidad a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el TopShine GT103 junto con Plaspy ofrece a las organizaciones una forma consistente de centralizar la ubicación del vehículo, su estado y datos de alarmas en una vista única de gestión de flotas. Plaspy procesa la telemetría del GT103 para mapeo, notificaciones, reportes históricos y flujos de incidentes que ayudan a las flotas a monitorear la seguridad, reducir el riesgo de robo y mejorar la supervisión operativa.

Si está evaluando o desplegando unidades GT103, apunte los dispositivos a Plaspy usando el endpoint y puerto compartidos, y Plaspy detectará automáticamente el protocolo del rastreador y comenzará a recibir datos. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles específicos más recientes del protocolo del dispositivo, notas de firmware y revisiones de hardware consulte el sitio del fabricante en https://www.gztopshine.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

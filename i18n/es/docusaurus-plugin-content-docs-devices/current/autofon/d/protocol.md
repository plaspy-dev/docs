---
slug: /autofon/d/protocol
id: d-protocol
sidebar_label: Protocol
title: AutoFon - D-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo AutoFon D‑Маяк para integración con Plaspy en tiempo real
keywords:
  - Protocolo AutoFon D‑Маяк
  - Protocolo GPS AutoFon D‑Маяк
  - AutoFon D‑Маяк para Plaspy
  - Rastreador GPS AutoFon
  - Protocolo de rastreo D‑Маяк
  - Compatibilidad de dispositivos Plaspy
  - Protocolo GPRS para rastreadores GPS
  - Rastreador oculto AutoFon
  - Rastreo de vehículos AutoFon
  - Integración de telemetría D‑Маяк
---

# AutoFon - Protocolo D‑Маяк

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon D‑Маяк con Plaspy. Se enfoca en cómo el dispositivo reporta posiciones y eventos a la plataforma de monitoreo Plaspy, y en los puntos a considerar al configurar el equipo para garantizar reportes fiables y la recuperación de datos históricos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se mantiene en un nivel público y práctico, resaltando los requisitos de conexión y consideraciones de integración.

## Resumen del protocolo

El rastreador D‑Маяк se comunica por datos celulares con opciones de reporte por contingencia y envía la información que Plaspy necesita para el rastreo en tiempo real, alertas y reproducción histórica. El protocolo determina cómo el dispositivo se identifica, reporta ubicación y eventos de sensores, y gestiona datos en cola tras cortes temporales de red.

- Permite la entrega segura de posición GNSS, eventos del acelerómetro, pulsos SOS y estado de canales auxiliares a Plaspy.
- Soporta entrega de mensajes en búfer para que los paquetes almacenados se reenvíen a Plaspy una vez restablecida la conectividad.
- Permite a Plaspy correlacionar los mensajes entrantes con un vehículo o activo usando identificadores de dispositivo suministrados por el rastreador.
- Proporciona telemetría de eventos como inicio de movimiento, impactos y entradas de alarma para alertas y reconstrucción de la línea de tiempo.
- Soporta acciones de control remoto cuando el rastreador acepta comandos desde la plataforma, según esté configurado.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma. La configuración correcta del equipo para apuntar al endpoint de Plaspy es el paso clave para la identificación y el procesamiento automático de mensajes.

- Plaspy escucha el tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que un solo puerto es suficiente para D‑Маяк y otros rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y la preferencia del instalador.
- Cuando el rastreador reporta al endpoint de Plaspy, la plataforma inspecciona los mensajes entrantes y los enruta al manejador correspondiente para ese tipo de dispositivo.
- Si no llegan mensajes, verificar los ajustes del servidor del dispositivo y el modo de transporte es el primer paso para la resolución de problemas.

## Contexto de transporte y conexión

La elección de transporte y la correcta configuración del endpoint son esenciales para una telemetría confiable. El D‑Маяк soporta reporte celular GPRS con fallback por SMS cuando está configurado, y puede enviarse directamente a Plaspy usando los transportes TCP o UDP estándar.

- Configure el dispositivo para reportar a d.plaspy.com o directamente a 54.85.159.138 como servidor de destino.
- Use el puerto 8888 tanto para configuraciones TCP como UDP ya que Plaspy maneja ambos transportes en el mismo puerto.
- Asegúrese de que el plan SIM y los ajustes APN del equipo permitan que los datos GPRS lleguen a internet y al endpoint de Plaspy.
- Si el fallback por SMS está habilitado, los SMS pueden emplearse para algunas notificaciones o comandos remotos cuando GPRS no esté disponible, según la capacidad del dispositivo.
- Cortafuegos de red y restricciones del operador pueden bloquear el tráfico, por lo que permita salidas TCP o UDP al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el comportamiento de reporte y los campos de los mensajes; consulte las notas de la versión de firmware al diagnosticar problemas.
- Las revisiones de hardware o variantes regionales pueden cambiar los transportes soportados o las direcciones de servidor por defecto.
- La selección del transporte importa; algunas instalaciones prefieren UDP por menor sobrecarga y otras eligen TCP por la fiabilidad de conexión.
- Los modos de reporte por SMS dependen del dispositivo y pueden no ofrecer la telemetría completa que brinda el reporte por GPRS.
- El búfer tipo "black box" del dispositivo mejora la fiabilidad, pero es recomendable validar el manejo del búfer con el firmware vigente.
- Verifique siempre el comportamiento esperado con la documentación del fabricante al desplegar a escala.

## Por qué es importante entender el protocolo

Comprender cómo el D‑Маяк se comunica con Plaspy ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y garantizar una operación predecible a largo plazo de los rastreadores desplegados. Un conocimiento claro de los requisitos de conexión reduce la fricción de integración y mejora la calidad de la telemetría que recibe Plaspy.

- Ayuda a confirmar que el dispositivo apunta al endpoint y modo de transporte correctos para flujo inmediato de datos.
- Permite un diagnóstico más rápido cuando la telemetría o las alarmas esperadas no aparecen en Plaspy.
- Apoya decisiones informadas sobre intervalos de reporte, gestión de energía y entrega en búfer para instalaciones de larga duración.
- Aclara qué funciones dependen de variantes de firmware o hardware para que los operadores puedan planificar cobertura de capacidades en toda la flota.
- Reduce tiempos de inactividad al alinear la configuración del dispositivo con las expectativas de red y plataforma.

## Por qué usar Plaspy con este protocolo

Combinar el AutoFon D‑Маяк con Plaspy ofrece a las organizaciones telemetría concisa y rica en eventos junto con funcionalidades de la plataforma para mapeo, alertas y análisis histórico. La larga autonomía, almacenamiento en búfer, eventos del acelerómetro y canales auxiliares de control del dispositivo lo hacen adecuado para instalaciones discretas, protección de activos remotos y flujos de trabajo de recuperación anti robo que se integran directamente en los paneles y sistemas de notificaciones de Plaspy.

Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos y la telemática de flotas, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y revisiones de hardware del AutoFon D‑Маяк, consulte la documentación del fabricante en https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

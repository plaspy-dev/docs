---
slug: /tzone/tz_avl11/protocol
id: tz_avl11-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL11 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TZone TZ-AVL11 y su comunicación con Plaspy para rastreo GPS y gestión de flotas
keywords:
  - TZone TZ-AVL11
  - protocolo TZ-AVL11
  - protocolo GPS TZone
  - TZ-AVL11 Plaspy
  - comunicación TZ-AVL11
  - protocolo de rastreo TZ-AVL11
  - compatibilidad dispositivo TZone
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular TZ-AVL11
  - seguimiento de flotas TZone
---

# TZone - Protocolo TZ-AVL11

Esta página ofrece el contexto público del protocolo para utilizar el rastreador GPS TZone TZ-AVL11 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué opciones de conectividad se emplean con frecuencia y cómo esa comunicación encaja en el flujo de gestión de dispositivos de Plaspy. El objetivo es ayudar a administradores e integradores a comprender la ruta de reporte y qué validar durante la configuración.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El TZ-AVL11 admite varias opciones de transporte y funciones como reporte GPRS por TCP o UDP, respaldo por SMS y actualizaciones de firmware vía USB, todo lo cual puede influir en cómo se configura el equipo para comunicarse con Plaspy.

## Visión general del protocolo

El protocolo de comunicación del TZ-AVL11 es el método que utiliza el dispositivo para informar posición, estado, alarmas y datos de sensores a un servidor remoto. En el caso de Plaspy, el rastreador envía mensajes al endpoint de Plaspy y la plataforma traduce esos mensajes en actualizaciones de ubicación, eventos y alertas útiles para su panel de flota e integraciones.

- Permite que el rastreador envíe fijaciones de posición, marcas de tiempo y telemetría a un servidor remoto para mapeo y análisis.
- Transporta eventos de alarma y entradas como SOS, geocerca, exceso de velocidad, corte de energía y estados de puertas o motor.
- Soporta múltiples métodos de transporte para que el dispositivo informe vía datos celulares o canales de respaldo según la configuración.
- Permite la identificación única del dispositivo para que Plaspy asocie los informes entrantes con el activo o vehículo correcto.
- Facilita actualizaciones de firmware o configuración a través del hardware del dispositivo cuando el fabricante lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes de los rastreadores en un único endpoint compartido y determina automáticamente el protocolo del dispositivo, por lo que normalmente no es necesario seleccionar el protocolo manualmente. El paso común de configuración para integrar el TZ-AVL11 es apuntar el dispositivo al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para enrutamiento de red o validación DNS.
- El puerto es 8888 y este único puerto se utiliza en todos los dispositivos compatibles para el reporte.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía sus reportes iniciales al endpoint de Plaspy.
- En la mayoría de los casos, una vez que el TZ-AVL11 está configurado para reportar al endpoint de Plaspy, no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

## Contexto de transporte y conexión

Las opciones de conexión del TZ-AVL11 influyen en cómo los mensajes llegan a Plaspy, pero no cambian que Plaspy use un puerto de recepción unificado y detección automática del protocolo. Al preparar un dispositivo para uso con Plaspy, confirme qué modos de transporte admite su unidad y configure la dirección de reporte en consecuencia.

- El TZ-AVL11 puede reportar por GPRS usando TCP o UDP; configure el dispositivo para usar TCP o UDP en el puerto 8888 según sea necesario.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138; ambos resuelven al endpoint receptor de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y red.
- La fiabilidad de la red y las políticas del operador pueden influir en si TCP o UDP es más apropiado para su despliegue.
- Si el rastreador soporta SMS u otros mecanismos de respaldo, esos pueden usarse para alertas cuando la conectividad de datos no esté disponible, pero el reporte por IP al endpoint de Plaspy es la vía de integración estándar.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos de telemetría disponibles y el comportamiento para tipos específicos de alarmas; verifique la versión de firmware del dispositivo durante la integración.
- Revisión de hardware u módulos opcionales como RFID, sensores de temperatura o entradas adicionales pueden proporcionar distintos elementos de datos que Plaspy puede mapear si esos campos están presentes.
- Las interfaces de configuración del fabricante pueden usar nombres de parámetros distintos para dirección de servidor, puerto y modo de transporte; consulte el manual del fabricante para las claves de parámetro correctas.
- La selección entre TCP y UDP afecta garantías de entrega y comportamiento de sesión, pero no cambia el requisito de puerto unificado de recepción de Plaspy.
- Algunas unidades TZ-AVL11 pueden soportar múltiples métodos de reporte (GPRS, SMS, USB): confirme cuál es el método primario en su operación.
- Valide que la SIM y la configuración APN del operador móvil permitan datos IP hacia el endpoint configurado de Plaspy.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TZ-AVL11 ayuda a asegurar una configuración fluida, reportes confiables y una resolución de problemas eficiente cuando se utiliza Plaspy. Aunque Plaspy automatiza la detección de protocolo y usa endpoints consistentes, conocer las capacidades del dispositivo y las opciones de transporte reduce el tiempo de puesta en marcha y facilita el diagnóstico de fallos.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el modo de transporte esperado.
- Ayuda a identificar por qué faltan actualizaciones de posición al distinguir entre problemas de conectividad, configuración o del propio dispositivo.
- Permite interpretar correctamente la telemetría disponible como estado de batería, temperatura y alarmas de entradas en Plaspy.
- Orienta la elección entre TCP y UDP según la fiabilidad de la red y la compatibilidad con el operador.
- Guía las comprobaciones de firmware y hardware cuando un equipo se comporta de manera distinta a la esperada tras el despliegue.

## Por qué usar Plaspy con este protocolo

Utilizar el TZone TZ-AVL11 con Plaspy brinda a las organizaciones visibilidad consolidada de ubicaciones, alertas de eventos y seguimiento histórico de flotas y activos. Las características del TZ-AVL11, como bajo consumo, respaldo de batería interno, soporte RFID y múltiples tipos de alarma, lo hacen adecuado para escenarios diversos de monitoreo de flotas y activos, y Plaspy convierte los reportes entrantes en información accionable y notificaciones.

Para saber más sobre Plaspy y cómo soporta dispositivos como el TZ-AVL11, visite https://www.plaspy.com. Verifique siempre el comportamiento específico del protocolo, detalles de firmware y notas de implementación con el fabricante en http://www.tzonedigital.com/ ya que el soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo.

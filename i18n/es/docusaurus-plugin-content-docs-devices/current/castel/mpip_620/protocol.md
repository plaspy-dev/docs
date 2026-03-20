---
slug: /castel/mpip_620/protocol
id: mpip_620-protocol
sidebar_label: Protocol
title: Castel - MPIP-620 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador de moto Castel MPIP-620 a Plaspy con los ajustes compartidos de conexión
keywords:
  - Protocolo Castel MPIP 620
  - Protocolo GPS Castel MPIP 620
  - Protocolo de comunicación Castel MPIP 620
  - Protocolo de rastreo Castel MPIP 620
  - Protocolo rastreador de motos Castel
  - Compatibilidad MPIP 620 con Plaspy
  - Integración de dispositivos Plaspy
  - Documentación de protocolo de rastreador GPS
  - Protocolo rastreador GPRS SMS
  - Protocolo de seguimiento GPS para motos
---

# Castel - Protocolo MPIP-620

Esta página explica el contexto público del protocolo para usar el rastreador GPS de motocicletas Castel MPIP-620 con la plataforma Plaspy. Se centra en cómo se comunica el equipo a alto nivel, qué ajustes de conexión comparte Plaspy y qué deben comprender integradores y responsables de flota al configurar y operar el rastreador junto con Plaspy.

El Castel MPIP-620 usa GPS para posicionamiento y GPRS o SMS para transporte de datos, e incluye funciones como sensor de movimiento, geocercas, alertas por movimiento, alertas de exceso de velocidad y batería de respaldo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del equipo consulte la documentación del fabricante según sea necesario.

## Visión general del protocolo

A nivel conceptual, el protocolo del rastreador es el conjunto de mensajes y el comportamiento de reporte que usa el MPIP-620 para enviar ubicación, estado e información de alarmas a un servidor remoto. Con Plaspy, los datos públicos más relevantes son el punto de conexión y las opciones de transporte, más que los detalles privados del parseo.

- El protocolo permite que el rastreador informe posición GPS, eventos de movimiento y alarmas, estado de la batería y telemetría básica a un endpoint remoto.
- Define cómo el dispositivo se identifica para que el backend asocie los mensajes con un vehículo o cuenta específica.
- El comportamiento de comunicación determina la frecuencia de envíos en seguimiento normal, ahorro de energía y condiciones de alarma.
- El protocolo soporta reporte por datos celulares mediante GPRS y puede ofrecer SMS como canal alterno para algunas configuraciones y alertas.
- La configuración correcta del APN y de la dirección del servidor garantiza que el rastreador alcance el endpoint de Plaspy y que los datos de posición y alarma sean utilizables en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto común, y usa esa conexión para identificar automáticamente el protocolo del dispositivo. Este diseño hace que la mayoría de las unidades MPIP-620 solo necesiten apuntar al endpoint de Plaspy y la plataforma se encargue de la detección.

- Plaspy escucha en el dominio de servidor compartido d.plaspy.com y en la IP pública 54.85.159.138 para conexiones de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy opera en el puerto 8888 para el tráfico de rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de configuración.
- Cuando un MPIP-620 configurado correctamente reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador sin necesidad de que el usuario seleccione manualmente el protocolo.
- Normalmente solo es necesario indicar la dirección del servidor, el tipo de transporte y el APN en el rastreador para que la integración funcione.

## Transporte y configuración de conexión

El MPIP-620 se comunica con un backend a través de redes celulares y puede configurarse para usar UDP o TCP. Para integrarlo con Plaspy, el transporte y la dirección del servidor son los ajustes de conexión principales que debe verificar en el equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los equipos pueden apuntar al dominio de servidor d.plaspy.com o a la dirección IP 54.85.159.138 como destino.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración de rastreadores en campo.
- La elección del transporte puede afectar características de entrega como reenvío y latencia según las condiciones de la red.
- Asegúrese de que el APN del rastreador, las credenciales de APN y la configuración del puerto de salida estén correctamente establecidos para que el dispositivo alcance el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar intervalos de reporte, tipos de alarma disponibles o los campos incluidos en los reportes incluso para el mismo modelo.
- Las revisiones de hardware y módulos opcionales pueden alterar los transportes soportados o las opciones de E/S usadas por el rastreador.
- Algunos equipos ofrecen configuración por SMS o opciones de respaldo por SMS además del reporte por GPRS, lo que puede influir en decisiones de integración.
- Seleccionar TCP en lugar de UDP en el equipo puede cambiar el comportamiento respecto a acuses de recibo y retransmisiones gestionadas por la capa de red.
- Confirme la configuración del APN y la compatibilidad del plan de datos de la SIM para asegurar conectividad GPRS confiable para reporte en tiempo real.
- Valide el comportamiento de funciones como manejo de geocercas o modos de ahorro de energía contra la documentación del fabricante para el firmware específico instalado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación a un nivel conceptual ayuda a asegurar una puesta en marcha fluida y una operación confiable con Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer el papel del transporte, los intervalos de reporte y la identificación del dispositivo reduce el tiempo de diagnóstico y favorece la fiabilidad a largo plazo.

- Ayuda a garantizar que la dirección del servidor y el transporte correctos se apliquen en el rastreador durante la provisión.
- Aclara por qué un dispositivo podría aparecer sin conexión cuando el APN o los ajustes de transporte son incorrectos.
- Facilita el diagnóstico efectivo de problemas con reportes de alarma y movimiento al acotar las posibles causas.
- Apoya decisiones sobre elegir TCP o UDP según características de entrega deseadas y entornos de red.
- Hace que la planificación de actualizaciones de firmware sea más segura al resaltar áreas donde el comportamiento puede cambiar entre versiones.

## Por qué usar Plaspy con este protocolo

Usar el Castel MPIP-620 con Plaspy ofrece a propietarios de motocicletas y operadores de flota una forma práctica de centralizar datos de ubicación, movimiento y alarmas. El MPIP-620 aporta funciones específicas para motocicletas como detección de movimiento, alarmas por remolque y fortificación, y modos de ahorro de energía que generan eventos útiles en Plaspy para monitoreo y supervisión operativa.

Plaspy simplifica la integración al usar un único endpoint y puerto para todos los dispositivos y al detectar automáticamente protocolos de rastreadores cuando un equipo está configurado correctamente para reportar al endpoint de Plaspy. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las notas de implementación en el sitio del fabricante http://www.castelecom.com/ ya que estos detalles pueden cambiar con el tiempo.

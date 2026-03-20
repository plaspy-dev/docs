---
slug: /careu/u1_plus/protocol
id: u1_plus-protocol
sidebar_label: Protocol
title: CAREU - U1 PLUS Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo CAREU U1 PLUS para compatibilidad e integración con Plaspy
keywords:
  - protocolo CAREU U1 PLUS
  - protocolo GPS CAREU U1 PLUS
  - rastreo CAREU U1 PLUS
  - compatibilidad CAREU U1 PLUS Plaspy
  - comunicación rastreador GPS CAREU
  - telemetría vehicular U1 PLUS
  - protocolo de rastreo de flotas
  - telemetría OBD II CAN
  - rastreo de vehículos comerciales
  - integración de rastreador GPS
---

# CAREU - Protocolo U1 PLUS

Esta página describe el contexto público del protocolo para usar el rastreador CAREU U1 PLUS con la plataforma Plaspy. Explica a alto nivel cómo se comunica el dispositivo, qué puntos de integración provee Plaspy para recibir reportes y qué considerar al integrar el U1 PLUS en una implementación de Plaspy. El material es de carácter público y no sensible, pensado para ayudar a equipos de flota y telemática a comprender los aspectos del protocolo relevantes para una operación confiable.

El U1 PLUS es compatible con Plaspy desde su configuración inicial y soporta amplia telemetría vehicular, incluyendo interpretación OBD II y CAN, medición de combustible, eventos de acelerómetro y múltiples entradas de sensores. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, revisiones de hardware e implementación del fabricante. Revise la documentación del fabricante para obtener los detalles específicos del dispositivo más actualizados.

## Resumen del protocolo

A nivel general, el protocolo del rastreador define cómo el U1 PLUS reporta identificación, ubicación y telemetría a un servicio backend, y cómo se pueden entregar mensajes de control al dispositivo. Para la integración con Plaspy, el rol del protocolo se limita a qué datos envía el equipo y cómo apunta al endpoint de Plaspy, de modo que la plataforma pueda ingerir y normalizar los mensajes para seguimiento e informes.

- Permite la identificación del dispositivo para que Plaspy asocie la telemetría entrante con el registro de vehículo correcto.
- Transporta posición GNSS, sello de tiempo e información de movimiento a Plaspy para actualizaciones de ubicación.
- Lleva telemetría vehicular como parámetros OBD II y CAN, lecturas de sensores y eventos del acelerómetro para informes más completos.
- Soporta notificaciones de eventos como geocercas, manipulación, pérdida de alimentación y alertas de interferencia que Plaspy muestra a los usuarios.
- Permite canales de reserva y transportes auxiliares cuando los datos celulares son limitados, favoreciendo reportes resilientes hacia Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos del dispositivo en un endpoint de servidor compartido y determina automáticamente qué protocolo de rastreador utiliza cada equipo cuando este envía información a dicho endpoint. En la mayoría de las implementaciones comunes usted no necesita seleccionar un protocolo dentro de Plaspy si el U1 PLUS está configurado correctamente para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para recibir reportes de dispositivos.
- El puerto es 8888 y es el mismo puerto usado por todos los dispositivos soportados por Plaspy.
- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos de identificación y telemetría a la plataforma.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione.

## Transporte y contexto de conexión

Las elecciones de conexión determinan cómo el U1 PLUS alcanza Plaspy y cuán confiable es la entrega de telemetría frente a condiciones celulares cambiantes. El U1 PLUS soporta bandas celulares modernas y mecanismos de conmutación, por lo que seleccionar el transporte y el endpoint adecuado para su despliegue ayuda a asegurar reportes consistentes a Plaspy.

- El dispositivo puede usar UDP o TCP en el puerto 8888; elija el transporte según las capacidades del módem y la fiabilidad de la red.
- Los equipos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de ingestión de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en toda la flota y las reglas de firewall.
- Las conmutaciones celulares entre LTE, 3G y 2G afectan la disponibilidad radio pero no cambian el endpoint ni el puerto de Plaspy.
- Canales alternativos de reporte soportados por el dispositivo, como FTP o SMS, complementan el envío directo por TCP o UDP hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos reportados, la frecuencia de mensajes de latido y la telemetría disponible; siempre verifique el comportamiento del firmware de una unidad U1 PLUS concreta.
- Revisiones de hardware y módulos opcionales, como sensores ultrasónicos, accesorios RS-232 o interfaces de video, pueden exponer campos o comandos adicionales.
- Ajustes del lado del fabricante o configuraciones regionales de los operadores pueden influir en los modos de transporte o en las bandas de red utilizadas.
- Elegir UDP o TCP puede afectar las características de entrega de mensajes; confirme el módem del equipo y las condiciones de la red antes de desplegar a gran escala.
- Plaspy usa un puerto unificado y detección automática, pero la compatibilidad sigue dependiendo de que el dispositivo apunte correctamente al endpoint de Plaspy.
- Valide el soporte de funciones del dispositivo, como parámetros OBD II CAN, tipos de sensores y capacidades FOTA, contra la documentación oficial del producto.

## Por qué es importante entender el protocolo

Comprender cómo el U1 PLUS se comunica con Plaspy ayuda a administradores e integradores a desplegar equipos de forma confiable, resolver incidencias con rapidez y planificar para diferencias de firmware o hardware en la flota. El conocimiento del protocolo reduce errores de configuración y acelera el tiempo hasta el primer reporte.

- Asegura que los dispositivos apunten a d.plaspy.com o 54.85.159.138 y utilicen el puerto 8888 para que Plaspy pueda recibir datos.
- Ayuda a diagnosticar problemas de conectividad cuando una unidad no aparece en Plaspy o la telemetría está incompleta.
- Orienta decisiones sobre selección de transporte, colocación de antenas y planificación de bandas celulares para cobertura robusta.
- Facilita la planificación de actualizaciones de firmware, ampliaciones de sensores e integraciones de accesorios para mantener la telemetría consistente.
- Contribuye a mapear los campos reportados por el dispositivo a los paneles y reglas de alerta de Plaspy para visibilidad operativa.

## Por qué usar Plaspy con este protocolo

Usar el U1 PLUS con Plaspy brinda a los operadores de flota una plataforma consolidada para ubicación, telemetría vehicular y monitoreo de eventos. El soporte del dispositivo para interpretación OBD II y CAN, opciones de sensor de combustible, eventos basados en acelerómetro sobre conducta del conductor e interfaces para accesorios alimentan a Plaspy con datos útiles para enrutamiento, planificación de mantenimiento, supervisión de combustible y flujos de trabajo de seguridad. La detección automática de protocolos y el endpoint de puerto único de Plaspy simplifican la incorporación de dispositivos a escala.

Para obtener más información sobre el despliegue de rastreadores CAREU U1 PLUS con Plaspy visite https://www.plaspy.com. Para los detalles más actuales a nivel de protocolo del dispositivo, notas de firmware y revisiones de hardware consulte la documentación del fabricante en https://www.systech-iot.com/ para verificar el comportamiento y la disponibilidad de funciones.

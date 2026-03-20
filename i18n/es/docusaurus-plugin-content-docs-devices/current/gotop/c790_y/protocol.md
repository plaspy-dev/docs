---
slug: /gotop/c790_y/protocol
id: c790_y-protocol
sidebar_label: Protocol
title: GOTOP - C790-Y Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP C790 Y y su comunicación con Plaspy para seguimiento de flotas
keywords:
  - protocolo GOTOP C790 Y
  - protocolo GPS GOTOP C790 Y
  - compatibilidad GOTOP C790 Y Plaspy
  - protocolo de comunicación GOTOP C790 Y
  - protocolo de rastreo GOTOP C790 Y
  - rastreador GOTOP Plaspy
  - protocolo rastreador GPS C790 Y
  - protocolo rastreador GPRS vehicular
  - protocolo GNSS para flotas
  - protocolo de rastreo vehicular Plaspy
---

# GOTOP - Protocolo C790-Y

Esta página resume el contexto público del protocolo para usar el rastreador GOTOP C790-Y con Plaspy. Se centra en cómo el dispositivo comunica su posición GNSS y la telemetría del vehículo a Plaspy mediante los ajustes públicos de conexión y los métodos de reporte más comunes, y qué aspectos considerar al integrar el rastreador en una implementación de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar a la plataforma. El comportamiento exacto del protocolo y la frecuencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página aborda el contexto público de integración y consideraciones prácticas en lugar de detalles internos de firmware.

## Resumen del protocolo

El C790-Y utiliza posicionamiento GNSS (GPS y BeiDou) y GPRS para enviar información a un servidor remoto. Su protocolo de reporte transmite fijaciones de posición, banderas de eventos (por ejemplo ACC, exceso de velocidad, geocerca, SOS) y telemetría del vehículo, lo que permite a Plaspy mostrar la ubicación en tiempo real, generar alertas y almacenar el historial de ruta para reproducción.

- Permite que el rastreador se identifique y envíe actualizaciones de ubicación periódicas o activadas por eventos a Plaspy.
- Entrega estado del vehículo y eventos de alarma como detección de ACC, SOS, vibración y corte remoto de combustible a la plataforma.
- Facilita que Plaspy relacione la telemetría entrante con la identidad del dispositivo para mapeo, alertas y reproducción histórica de rutas.
- Soporta tanto reportes continuos como cargas activadas por eventos para equilibrar el detalle de datos y el consumo de datos móviles.
- Proporciona la información básica que Plaspy necesita para funciones como geocercas, detección de exceso de velocidad y reproducción histórica, dentro de las capacidades de retención del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un punto público compartido y detecta automáticamente el protocolo del dispositivo cuando llegan los datos. En la mayoría de los despliegues, usted solo necesita configurar el equipo para que reporte al endpoint de Plaspy; la plataforma se encarga de identificar el formato del rastreador y de encaminar la telemetría al registro de dispositivo correcto.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP correspondiente 54.85.159.138.
- El servicio utiliza el puerto 8888 para las conexiones de dispositivos; todos los dispositivos soportados por Plaspy usan ese mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesaria la selección manual del protocolo dentro de la plataforma si el dispositivo reporta correctamente al endpoint.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy y los ajustes APN/GPRS adecuados en la tarjeta SIM son pasos comunes de instalación.
- Dado que la detección es automática, probar la conexión del dispositivo suele ser la forma más rápida de confirmar una integración correcta.

## Transporte y contexto de conexión

El C790-Y emplea GPRS como transporte celular para entregar mensajes a Plaspy, y el dispositivo puede configurarse para usar UDP o TCP en la capa de transporte según el firmware y la preferencia del instalador. Los ajustes de conexión forman parte del contexto público de integración y son importantes para enrutar los datos de forma fiable hacia Plaspy.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El puerto usado para el tráfico hacia Plaspy es 8888 y es el mismo para todos los dispositivos compatibles con la plataforma.
- El rastreador puede utilizar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- La fiabilidad de la red GPRS, la configuración APN de la SIM y la cobertura móvil afectan la entrega de mensajes al endpoint de Plaspy.
- Confirme que el canal de datos saliente del rastreador hacia el endpoint de Plaspy esté permitido por firewalls locales o por las restricciones del plan de datos de la SIM.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los tiempos de envío, los campos disponibles o las funciones opcionales; siempre verifique la versión de firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware o las variantes regionales pueden exponer entradas o conexiones de alarma distintas para funciones como corte de combustible o detección de ACC.
- La elección entre UDP y TCP afecta las garantías de entrega; los instaladores deben elegir el transporte que mejor coincida con las capacidades del firmware del dispositivo y las condiciones de la red.
- Algunas funciones, como comandos de control remoto, escucha remota o telemática avanzada, pueden requerir firmware o opciones de configuración específicas.
- Valide la compatibilidad y las funciones soportadas contra la documentación oficial del fabricante para el lote o firmware específico del dispositivo.
- Las pruebas prácticas con la SIM real y en un entorno controlado ayudan a confirmar que Plaspy detecta e ingiere correctamente los datos del dispositivo.

## Por qué es importante conocer el protocolo

Comprender cómo el C790-Y se comunica con Plaspy ayuda a garantizar una instalación confiable, un uso eficiente de datos y un comportamiento predecible de las alertas. Conocer los puntos de integración públicos reduce el tiempo dedicado a la resolución de problemas y mejora la calidad de la telemetría disponible para los operadores.

- Acelera la configuración inicial al asegurar que el dispositivo apunte al endpoint y puerto correctos de Plaspy.
- Ayuda a aislar problemas de conectividad que provienen del APN, la SIM o la red móvil en lugar del análisis de la plataforma.
- Aclara qué entradas del vehículo y alarmas estarán disponibles en Plaspy para reglas y notificaciones.
- Permite tomar decisiones informadas sobre usar UDP o TCP según la fiabilidad de la red y la pérdida o latencia esperada de mensajes.
- Facilita pruebas realistas y la verificación de funciones como detección de ACC, eventos SOS y flujos de inmovilización remota.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP C790-Y con Plaspy ofrece a las organizaciones una combinación práctica de posicionamiento por satélite, telemetría GPRS y reportes por eventos para visibilidad y seguridad de la flota. La monitorización de ACC del dispositivo, el botón SOS, el corte remoto de combustible y los reportes de alarma se integran directamente con los flujos de trabajo de Plaspy para alertas por geocerca, monitoreo en tiempo real y revisión histórica de rutas.

La detección automática de protocolo y los ajustes de conexión compartidos de Plaspy simplifican el despliegue: los instaladores configuran el C790-Y para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 (UDP o TCP según el soporte), y Plaspy ingiere la telemetría sin requerir selección manual de protocolo. Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos del dispositivo y las notas de firmware en el sitio del fabricante https://www.gotop.cc/.

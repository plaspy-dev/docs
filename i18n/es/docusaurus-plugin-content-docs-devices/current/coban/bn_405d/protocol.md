---
slug: /coban/bn_405d/protocol
id: bn_405d-protocol
sidebar_label: Protocol
title: Coban - BN-405D Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Coban BN-405D y su comunicación con Plaspy para rastreo y telemetría en tiempo real
keywords:
  - Protocolo Coban BN-405D
  - Protocolo GPS Coban BN-405D
  - Compatibilidad BN-405D con Plaspy
  - Protocolo rastreador GPS Coban
  - Protocolo de rastreo vehicular
  - Integración rastreador GNSS
  - Protocolo de gestión de flotas
  - Protocolo telemática Plaspy
  - Comunicación BN-405D
  - Rastreador Coban Plaspy
---

# Coban - Protocolo BN-405D

Esta página ofrece un resumen público del protocolo para utilizar el rastreador GPS Coban BN-405D con Plaspy. Se centra en el contexto de comunicación y el comportamiento práctico necesario para conectar el equipo a los servidores de Plaspy, sin revelar implementaciones detalladas. Use esta información para comprender cómo el rastreador informa ubicación, telemetría y alarmas a Plaspy.

El BN-405D es un rastreador vehicular compatible con Plaspy que puede reportar mediante TCP, UDP o SMS según la configuración y el firmware. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos y actualizados consulte la documentación oficial de Coban.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del BN-405D define cómo el equipo se identifica, reporta posiciones GNSS, envía telemetría y alarmas, y recibe comandos remotos. La función del protocolo es convertir eventos de sensores y del vehículo en mensajes estructurados que un backend como Plaspy pueda recibir e interpretar para seguimiento en vivo y reproducción histórica.

- Habilita el envío periódico y por evento de posiciones para que Plaspy muestre ubicación en tiempo real e historial de rutas.
- Transmite telemetría y estados del vehículo como encendido, batería y eventos de alarma para correlacionarlos en el panel de Plaspy.
- Entrega notificaciones de alarma que incluyen SOS, geo-vallas, exceso de velocidad y manipulación para flujos de trabajo automatizados.
- Soporta canales de configuración y control remoto para que plataformas autorizadas puedan cambiar parámetros o accionar relés.
- Permite reportes alternativos o complementarios vía SMS cuando la conectividad IP no está disponible.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un único endpoint y puerto compartidos y determina automáticamente cómo manejar los datos entrantes. Cuando un BN-405D está configurado para reportar a Plaspy, la plataforma usa detección automática, por lo que los usuarios generalmente no necesitan seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio de servidor de Plaspy para reporte de dispositivos es d.plaspy.com, que apunta al endpoint de Plaspy.
- La dirección IP del servidor Plaspy es 54.85.159.138 para entornos que prefieren endpoints numéricos.
- Plaspy escucha en el puerto 8888 y la plataforma usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos configurados para reportar a Plaspy serán detectados automáticamente por la plataforma sin necesidad de selección manual de protocolo.
- Usar la dirección de reporte y el transporte correctos suele ser suficiente para que Plaspy identifique los mensajes del BN-405D.

## Transporte y contexto de conexión

El BN-405D soporta múltiples opciones de transporte y puede configurarse para enviar datos por IP o SMS según el despliegue y las capacidades del firmware. El contexto de conexión es importante para asegurar la entrega confiable y la correcta recepción por parte de Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita el dispositivo y la configuración del usuario.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando se requieren endpoints numéricos.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la incorporación y las reglas de firewall.
- TCP ofrece entrega orientada a la conexión, mientras que UDP puede usarse para reportes de menor sobrecarga según la configuración del BN-405D.
- SMS sigue siendo una alternativa para reportes o configuración remota si la conectividad IP no está disponible.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar campos disponibles, intervalos de reporte y comportamiento de alarmas entre revisiones del dispositivo.
- Revisiones de hardware o variantes regionales pueden alterar las bandas celulares soportadas u opciones de sensores.
- La elección del transporte (TCP, UDP o SMS) afecta la semántica de entrega y debe concordar con la configuración del dispositivo y las condiciones de red.
- Los comandos y respuestas de configuración del fabricante pueden depender del firmware; verifique qué comandos están disponibles para su versión.
- Valide siempre el comportamiento en un entorno de prueba antes de un despliegue a gran escala para confirmar que Plaspy recibe la telemetría esperada.
- Consulte la documentación de Coban para notas específicas de firmware que afecten el comportamiento del protocolo o la disponibilidad de funciones.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del BN-405D y su contexto de conexión acelera la configuración, facilita la resolución de problemas y mejora la fiabilidad a largo plazo al integrarlo con Plaspy. Tener expectativas claras sobre el transporte y el comportamiento de los mensajes reduce errores de configuración y apoya operaciones de flota eficientes.

- Garantiza que se apliquen las configuraciones de servidor y transporte correctas para que los mensajes lleguen a Plaspy de forma confiable.
- Ayuda a diagnosticar problemas de conectividad distinguiendo fallas de transporte de fallas del dispositivo o de la red.
- Orienta la elección del transporte en zonas de cobertura mixta para balancear oportunidad y fiabilidad.
- Apoya la planificación de actualizaciones de firmware y cambios de hardware que pueden afectar el contenido o la frecuencia de los mensajes.
- Mejora la postura de seguridad al confirmar qué rutas de configuración remota están habilitadas y cómo están protegidas.

## Por qué usar Plaspy con este protocolo

Combinar el Coban BN-405D con Plaspy brinda a las organizaciones visibilidad consolidada de vehículos, manejo de alarmas y análisis de telemetría en flotas mixtas. Las capacidades GNSS y multibanda celular del BN-405D, junto con el enfoque de endpoint unificado de Plaspy, facilitan la recolección de datos de ubicación y eventos para monitoreo, análisis de rutas y alertas automatizadas.

El enfoque de un único endpoint y puerto de Plaspy reduce la complejidad de configuración, mientras que la detección automática de protocolo disminuye la necesidad de cambios manuales en la plataforma. Para obtener más información sobre Plaspy y cómo puede integrarse con dispositivos Coban visite https://www.plaspy.com. Verifique siempre los detalles del protocolo específicos del dispositivo, el comportamiento del firmware y las notas del fabricante en https://www.coban.net/ ya que las implementaciones de los proveedores pueden cambiar con el tiempo.

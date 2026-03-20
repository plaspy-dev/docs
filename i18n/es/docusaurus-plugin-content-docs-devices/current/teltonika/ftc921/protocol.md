---
slug: /teltonika/ftc921/protocol
id: ftc921-protocol
sidebar_label: Protocol
title: Teltonika - FTC921 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el Teltonika FTC921 con Plaspy, cubre conectividad, transporte e integración
keywords:
  - Protocolo Teltonika FTC921
  - Teltonika FTC921 GPS
  - Protocolo de comunicación FTC921
  - Protocolo de rastreo FTC921
  - Rastreador GPS Teltonika Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Protocolo GPS para movilidad eléctrica
  - Rastreo de flotas FTC921
  - Protocolo de telemetría vehicular Plaspy
  - Notas de integración FTC921
---

# Teltonika - Protocolo FTC921

Esta página describe el contexto público del protocolo para usar el Teltonika FTC921 con Plaspy. Se centra en cómo el FTC921 se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y qué esperar durante la integración sin exponer detalles internos del dispositivo. El FTC921 es un rastreador de próxima generación con LTE Cat 1 y respaldo 2G, diseñado para movilidad eléctrica y casos de uso antirobo; esta guía toma esa descripción del dispositivo como base factual.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Plaspy acepta reportes en el dominio d.plaspy.com (IP del servidor 54.85.159.138) y escucha en el puerto 8888. El FTC921 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles específicos del dispositivo al planear despliegues.

## Resumen del protocolo

El protocolo que implementa un rastreador define cómo el dispositivo se identifica, envía datos de ubicación y telemetría, y cómo interactúa con una plataforma backend como Plaspy. Para el FTC921 esto significa que el rastreador transmite coordenadas GNSS, estado de energía y del dispositivo, y otra telemetría que Plaspy consume para ofrecer mapas, alertas e informes.

- Permite que el FTC921 envíe actualizaciones de ubicación y telemetría a Plaspy para seguimiento en tiempo real e informes históricos.
- Permite que el dispositivo incluya información de identidad y estado para que Plaspy asocie los mensajes con el activo o vehículo correcto.
- Transporta indicadores de salud y energía útiles para alertas antirobo y flujos de trabajo de monitoreo de batería.
- Soporta la entrega de telemetría sobre canales de transporte estándar para que Plaspy pueda ingerir datos de forma consistente entre dispositivos.
- Funciona con sistemas de gestión remota como FOTA WEB y TCT para coordinar configuración y actualizaciones de firmware junto con el reporte.

## Cómo Plaspy detecta el protocolo

En la mayoría de los casos Plaspy no requiere selección manual de protocolo para dispositivos correctamente configurados. Cuando un rastreador reporta al endpoint de Plaspy, la plataforma utiliza las características de la conexión entrante y del mensaje para identificar el protocolo del dispositivo y enrutar los datos por la vía de ingestión adecuada.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888 para todos los dispositivos compatibles.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Los dispositivos pueden reportar vía UDP o TCP según la configuración del rastreador; Plaspy acepta ambos transportes en el puerto 8888.
- En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el FTC921 está configurado para reportar al endpoint de Plaspy.
- Si un dispositivo se comporta de forma inesperada, verificar la dirección de reporte y los ajustes de transporte es un primer paso de diagnóstico común.

## Contexto de transporte y conexión

Los detalles de conexión determinan cómo el FTC921 alcanza a Plaspy y son una parte crítica de una integración exitosa. El FTC921 soporta LTE Cat 1 con respaldo 2G y normalmente se configura para enviar datos al endpoint de Plaspy usando transporte IP estándar.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta tráfico entrante de dispositivos en el puerto 8888 y el mismo puerto se usa para todos los dispositivos compatibles.
- El FTC921 puede usar UDP o TCP en el puerto 8888 según la revisión de firmware y las opciones de configuración.
- La confiabilidad de la red y la cobertura celular afectan la latencia de entrega y la vigencia de los mensajes, especialmente cuando el dispositivo cae a 2G.
- Asegúrese de que cualquier firewall intermedio o dispositivo NAT permita tráfico saliente hacia d.plaspy.com y el puerto 8888 desde las SIM de los rastreadores.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan o cómo se codifican ciertos eventos, por lo que confirme la versión de firmware al validar compatibilidad.
- Las revisiones de hardware o las variantes regionales del FTC921 pueden afectar las bandas soportadas, las características de entrada de voltaje y las interfaces disponibles.
- La selección de transporte entre UDP y TCP es una opción de configuración en el dispositivo y puede influir en el comportamiento de entrega y reintentos de mensajes.
- Herramientas de gestión remota como FOTA WEB y TCT forman parte del ecosistema del dispositivo y pueden usarse para actualizar ajustes que afecten el comportamiento del protocolo.
- Valide siempre la configuración del dispositivo para que el servidor de reporte esté establecido en d.plaspy.com o en 54.85.159.138 y el transporte en el puerto 8888.
- La documentación del fabricante es la fuente autorizada para detalles de protocolo específicos de firmware y cambios recientes.

## Por qué es importante entender el protocolo

Comprender cómo el FTC921 se comunica con Plaspy ayuda a garantizar una incorporación fiable, un diagnóstico eficiente y un funcionamiento previsible a largo plazo. Conocer los puntos de interacción entre el firmware del dispositivo, el transporte y el endpoint de Plaspy reduce el tiempo de integración y las sorpresas operativas.

- Ayuda a confirmar la dirección de reporte y los ajustes de transporte durante la configuración y las pruebas iniciales.
- Acelera la resolución de problemas al acotar la causa a red, transporte o diferencias de firmware.
- Facilita la configuración adecuada de la gestión remota y de los flujos de actualización de firmware.
- Permite planificar mejor el comportamiento de energía y modos de suspensión en casos de uso de movilidad eléctrica para equilibrar la frecuencia de reporte y el impacto en la batería.
- Mejora la confianza en las alertas y en los informes históricos al aclarar qué telemetría enviará el dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FTC921 con Plaspy ofrece una vía práctica para organizaciones que necesitan ubicación confiable, telemetría y capacidades antirobo para flotas de movilidad eléctrica. La combinación de conectividad LTE Cat 1 con respaldo 2G, soporte de entrada de alto voltaje y una recepción GNSS robusta hace que el FTC921 sea adecuado para escenarios urbanos y de baja velocidad que Plaspy puede visualizar y monitorear.

Para obtener más información sobre cómo Plaspy puede soportar despliegues FTC921 y flujos de trabajo de flotas visite https://www.plaspy.com. Para los detalles de protocolo, notas de firmware y revisiones de hardware más actuales y específicos del dispositivo consulte los recursos del fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

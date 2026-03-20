---
slug: /winrich/tk207_obd/protocol
id: tk207_obd-protocol
sidebar_label: Protocol
title: Winrich - TK207 OBD Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Winrich TK207 OBD con Plaspy y lograr seguimiento vehicular confiable
keywords:
  - Protocolo Winrich TK207 OBD
  - Protocolo GPS TK207 OBD
  - Compatibilidad Winrich TK207 OBD con Plaspy
  - Protocolo de rastreo TK207 OBD
  - Comunicación rastreador OBD Winrich
  - Diagnóstico vehicular TK207 OBD
  - Protocolo rastreador GPS Winrich
  - Rastreador OBDII TK207 OBD
  - Dispositivos compatibles con Plaspy
  - Gestión de flotas TK207 OBD
---

# Winrich - TK207 OBD Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Winrich TK207 OBD con la plataforma Plaspy. Se centra en cómo el dispositivo comunica telemetría general y datos OBD al servidor backend, el papel del protocolo de reporte del rastreador en ese flujo y qué deben considerar integradores y gestores de flota al conectar TK207 OBD a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación de alto nivel y contexto de integración, no una referencia de comandos del proveedor.

## Visión general del protocolo

El protocolo de reporte del rastreador es el lenguaje que el dispositivo usa para entregar posiciones GPS, estados y parámetros OBD del vehículo a un servidor remoto. En el TK207 OBD, el protocolo permite que el dispositivo envíe periódica o por eventos la ubicación y datos diagnósticos para que Plaspy los registre, muestre y genere alertas para el monitoreo de flotas y vehículos.

- Transporta telemetría de posición y actualizaciones con marca de tiempo que Plaspy utiliza para mapas e historial
- Transmite parámetros OBD del vehículo y datos de diagnóstico cuando la ECU del vehículo lo soporta
- Informa señales de eventos y alarmas como geovalla, exceso de velocidad, ACC y pérdida de alimentación para monitoreo en tiempo real
- Soporta reporte remoto sobre redes móviles usando GPRS y puede recurrir a SMS para algunas funciones de gestión
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes entrantes con el registro de activo correcto

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un único endpoint y puerto compartidos y aplica detección automática para asociar esos reportes con un tipo de dispositivo. En instalaciones típicas no es necesario seleccionar manualmente un protocolo en Plaspy si el equipo está configurado para enviar datos al endpoint de Plaspy.

- Plaspy escucha reportes de dispositivos en el endpoint compartido d.plaspy.com
- La plataforma también acepta conexiones directas al servidor IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador
- El TK207 OBD puede configurarse para usar UDP o TCP para reportar a Plaspy
- Cuando está correctamente apuntado al endpoint de Plaspy, los mensajes entrantes se asocian al registro del dispositivo sin necesidad de seleccionar el protocolo manualmente

## Contexto de transporte y conexión

Los ajustes de conexión y transporte determinan cómo el TK207 OBD llega a Plaspy a través de la red móvil. El dispositivo soporta reporte en red y puede configurarse para usar un nombre de dominio o una dirección IP directa según la preferencia del instalador y las opciones de configuración del equipo.

- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com para enrutamiento basado en nombre de host
- También se admite el reporte directo a 54.85.159.138 cuando no se usa DNS
- El TK207 OBD puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que mantener el puerto consistente simplifica la integración
- Elija TCP cuando necesite entrega fiable y UDP cuando prefiera menor latencia o menor sobrecarga y el dispositivo lo soporte

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte y los campos disponibles; confirme la versión de firmware al diagnosticar diferencias
- Las revisiones de hardware y la compatibilidad con la ECU del vehículo afectan qué parámetros OBD están disponibles desde el rastreador
- La configuración por parte del fabricante y los servidores predeterminados pueden variar por lote; verifique o reconfigure los ajustes de servidor del dispositivo para apuntar a Plaspy
- La elección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y las restricciones NAT o firewall del operador
- La detección automática de protocolo de Plaspy reduce la necesidad de seleccionar manualmente un protocolo en la plataforma, pero se requieren dirección de servidor y transporte correctos
- Consulte la documentación del dispositivo y las notas de la versión para variaciones del protocolo según el firmware

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración inicial fiable, un diagnóstico eficiente y una operación sostenida de los TK207 OBD en Plaspy. Saber qué envía el dispositivo, cómo se conecta y qué puede variar con el firmware y el vehículo facilita el soporte y la escalabilidad.

- Confirma la configuración correcta de servidor y transporte para reportes fiables
- Ayuda a interpretar qué parámetros OBD se esperan de un vehículo y firmware determinados
- Facilita el diagnóstico de problemas de conectividad relacionados con TCP, UDP o el comportamiento de la red del operador
- Ayuda a configurar umbrales de alerta y retención de datos en Plaspy según la cadencia esperada de mensajes
- Apoya la planificación del despliegue a escala de flota al clarificar el comportamiento de red y el uso de datos del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el Winrich TK207 OBD con Plaspy ofrece a las organizaciones una vía sencilla para combinar ubicación GPS con información diagnóstica del vehículo y así obtener mayor visibilidad y control operativo. La forma plug and play en conector OBDII reduce el tiempo de instalación y, al configurarse para reportar a Plaspy, el rastreador puede alimentar flujos de trabajo de enrutamiento, mantenimiento y seguridad con datos oportunos.

Learn more about Plaspy and how it works with compatible trackers at https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer site http://www.winrichgroup.com/en/ before finalizing deployments.

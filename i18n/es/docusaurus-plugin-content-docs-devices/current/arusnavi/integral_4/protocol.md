---
slug: /arusnavi/integral_4/protocol
id: integral_4-protocol
sidebar_label: Protocol
title: Arusnavi - Integral 4 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público y compatibilidad con Plaspy del rastreador Arusnavi Integral 4
keywords:
  - Protocolo Arusnavi Integral 4
  - Protocolo GPS Arusnavi Integral 4
  - Compatibilidad Integral 4 con Plaspy
  - Protocolo de rastreo Arusnavi
  - Protocolo de comunicación Integral 4
  - Integración rastreador GPS Plaspy
  - Protocolo de telemetría Arusnavi para flotas
  - Informes de dispositivo Integral 4
  - Protocolo rastreador Plaspy
  - Rastreo vehicular Integral 4
---

# Arusnavi - Protocolo Integral 4

Esta página describe el contexto público del protocolo para usar el rastreador Arusnavi Integral 4 con Plaspy. Se centra en el papel de comunicación del dispositivo al reportar posición GNSS, telemetría, lecturas de sensores y registros de eventos a los servidores de monitoreo de Plaspy, sin exponer detalles privados o particularidades del firmware.

Los dispositivos Integral 4 pueden apuntar a Plaspy mediante ajustes de conexión compartidos y Plaspy detectará automáticamente el protocolo del rastreador. Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888, y todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del Integral 4 permite al rastreador entregar posición, datos del bus del vehículo, eventos de entradas discretas y registros de caja negra a un servidor central de Plaspy para monitoreo, alertas e informes históricos. En el lado del dispositivo, el protocolo coordina reportes periódicos y por eventos, admite objetivos de servidor configurables y transporta cargas útiles de sensores y diagnóstico que Plaspy mapea en paneles y análisis.

- Transmite posición GNSS y telemetría con marcas de tiempo para seguimiento en tiempo real e historial de rutas.
- Lleva datos del bus del vehículo y sensores como lecturas CAN, RS-485 y valores de sensores BLE para diagnóstico y telemetría.
- Admite ajustes de servidor configurables para que el dispositivo reporte a endpoints de Plaspy y a servidores de respaldo cuando estén disponibles.
- Conserva registros en almacenamiento local tipo caja negra y reenvía los logs guardados cuando vuelve la conectividad.
- Funciona con variantes de protocolo comunes soportadas por Integral 4 para permitir interoperabilidad con plataformas de monitoreo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartido, y realiza identificación automática del protocolo, por lo que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo en la plataforma. Cuando Integral 4 se configura para reportar al endpoint de Plaspy, la plataforma detecta y normaliza los datos entrantes al modelo de datos de Plaspy.

- Los dispositivos reportan a d.plaspy.com o a 54.85.159.138 usando el puerto universal 8888 que emplean todos los dispositivos soportados por Plaspy.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador y aplica el parser y las reglas de mapeo correspondientes.
- En configuraciones típicas, el firmware del rastreador se configura con la dirección del servidor Plaspy y no se requiere selección manual de protocolo dentro de Plaspy.
- Si un dispositivo utiliza una variante de protocolo específica del fabricante, la detección de Plaspy maneja las variantes comunes siempre que el dispositivo reporte al endpoint compartido.

## Transporte y contexto de conexión

Integral 4 soporta reporte por celular y ajustes de servidor configurables que determinan cómo se entrega la telemetría a Plaspy. La capa de conexión se limita a transportes de red estándar y no requiere puertos personalizados para distintos modelos cuando se usa con Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy.
- El endpoint principal de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto, por lo que las reglas de firewall y red pueden estandarizarse en entornos de flotas.
- El firmware del dispositivo permite configurar servidores objetivo para que pueda apuntar a uno o dos servidores de monitoreo según lo soportado por el equipo.
- La elección del transporte puede afectar la latencia y el comportamiento de retransmisión, pero no cambia los requisitos públicos de endpoint para reportar a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en la cadencia de reportes, campos opcionales y soporte de funciones; revise siempre las notas de la versión del firmware del dispositivo.
- Las variantes de hardware y las configuraciones opcionales de interfaces, como disponibilidad de CAN o RS-485, pueden influir en la telemetría enviada.
- Integral 4 soporta varias variantes de protocolo y objetivos de servidor configurables; asegúrese de que el dispositivo esté configurado para reportar a los endpoints de Plaspy.
- La elección de transporte entre UDP y TCP es una opción de configuración que puede verse limitada por la operadora o las restricciones de la red local.
- Ajustes del fabricante como comportamiento de SIM dual, gestión de energía y reenvío de la caja negra pueden afectar la continuidad de los datos.
- Valide la compatibilidad y cualquier extensión de protocolo específica del proveedor con la documentación oficial de Arusnavi antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Tener claridad sobre el protocolo de reporte del dispositivo ayuda a asegurar una integración confiable, agiliza la resolución de problemas y mejora los resultados operativos a largo plazo al usar Integral 4 con Plaspy. Saber qué enviará el rastreador y cómo Plaspy espera recibirlo reduce errores de configuración y favorece un comportamiento de monitoreo consistente.

- Acelera la puesta en marcha asegurando que la dirección del servidor, el transporte y la configuración de la SIM coincidan con los requisitos de Plaspy.
- Simplifica la resolución de problemas al acotar si los fallos provienen de la red, la selección de transporte, el firmware o las reglas de mapeo.
- Mejora la calidad de los datos al alinear las opciones de telemetría del dispositivo con los campos de datos y la lógica de alertas de Plaspy.
- Permite planificar la conectividad intermitente usando registros de caja negra y reglas de subida.
- Facilita la integración predecible de datos del bus del vehículo, flujos de sensores BLE y eventos de entradas discretas en los flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar Arusnavi Integral 4 con Plaspy ofrece a las organizaciones una forma práctica de centralizar seguimiento en tiempo real, agregación de telemetría y alertas por eventos para flotas y activos móviles. La capacidad multi GNSS de Integral 4, el enlace celular con SIM dual, el almacenamiento en caja negra y el amplio soporte de interfaces lo hacen idóneo para escenarios donde la visibilidad continua y la fidelidad de la telemetría son importantes, y Plaspy proporciona la plataforma para ingerir, normalizar y presentar esos datos.

To learn more about how Plaspy works with supported GPS trackers and to explore integration options visit https://www.plaspy.com. Protocol support and device firmware behavior can change over time; for the latest device specific protocol documentation and firmware notes consult the manufacturer at https://www.arusnavi.ru.

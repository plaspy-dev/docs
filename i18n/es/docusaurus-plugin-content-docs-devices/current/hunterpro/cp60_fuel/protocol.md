---
slug: /hunterpro/cp60_fuel/protocol
id: cp60_fuel-protocol
sidebar_label: Protocol
title: HunterPro - CP60-FUEL Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para integrar el rastreador HunterPro CP60-FUEL con Plaspy y supervisar combustible con precisión
keywords:
  - Protocolo HunterPro CP60-FUEL
  - Rastreador GPS CP60-FUEL
  - Protocolo nivel de combustible HunterPro
  - Compatibilidad CP60-FUEL Plaspy
  - Protocolo de sensor de combustible
  - Protocolo monitoreo de combustible vehicular
  - Telemetría nivel de combustible
  - Seguimiento de combustible en flota
  - Protocolo rastreador GPS Plaspy
  - Calibración de tanque CP60-FUEL
---

# HunterPro - Protocolo CP60-FUEL

Esta página describe el contexto público del protocolo para utilizar el rastreador HunterPro CP60-FUEL con la plataforma Plaspy. Se centra en aspectos generales de comunicación e integración más que en los detalles internos del dispositivo. El CP60-FUEL es un rastreador de nivel de combustible que emplea una sonda coaxial de capacitancia; la electrónica convierte la capacitancia de la sonda en pulsos digitales. Esta documentación explica, en términos generales, cómo esos datos reportados se transmiten a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar los detalles específicos del dispositivo con el proveedor cuando sea necesario.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del rastreador define cómo el CP60-FUEL se identifica, transmite información de GPS y nivel de combustible, y mantiene una conexión con un servidor para que plataformas como Plaspy puedan ingerir la telemetría. El protocolo traduce las mediciones del dispositivo y los estados diagnósticos en mensajes aptos para transporte de red y procesamiento en servidor.

- Transporta la identidad y el estado del equipo para que Plaspy asocie los datos al rastreador y vehículo correctos.
- Envía lecturas de nivel de combustible derivadas de la sonda coaxial después de aplicar la mapeo de calibración del tanque.
- Entrega posición GPS y telemetría auxiliar junto con los datos de combustible para reportes con contexto.
- Utiliza un mecanismo de transporte de red acordado entre el dispositivo y Plaspy para garantizar una entrega confiable.
- Permite que el servidor reconozca o procese los reportes entrantes para monitoreo en tiempo real y almacenamiento histórico.

## Cómo detecta Plaspy el protocolo

Plaspy acepta datos entrantes en un endpoint compartido y, en la mayoría de los casos, detecta automáticamente el protocolo del rastreador sin que sea necesario seleccionarlo manualmente. Cuando un CP60-FUEL se configura para reportar al endpoint de Plaspy, la plataforma identificará el tipo de equipo remitente y analizará los campos soportados para que los datos estén disponibles de inmediato.

- Plaspy escucha en un único endpoint compartido para simplificar la configuración del dispositivo.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Normalmente usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy.
- Si un dispositivo no reporta como se espera, revisar el transporte y la configuración del equipo es el primer paso de diagnóstico.

## Transporte y contexto de conexión

El CP60-FUEL puede configurarse para usar transporte UDP o TCP según las opciones del equipo y las necesidades de despliegue. Plaspy soporta ambos transportes en su puerto unificado, de modo que los dispositivos pueden apuntar a la misma dirección de servidor para una integración consistente.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El equipo puede configurarse usando UDP o TCP en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles para reducir errores de configuración.
- La elección entre UDP y TCP depende de las capacidades del firmware del dispositivo y de las características de entrega deseadas.
- Asegúrese de que la configuración de red del dispositivo, el APN y las reglas de firewall permitan tráfico saliente hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos y las funciones disponibles, lo que afecta cómo el CP60-FUEL reporta a Plaspy.
- Las revisiones de hardware y la instalación de la sonda pueden alterar el comportamiento de calibración y la salida cruda del sensor que el protocolo transmite.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y con las limitaciones de la red intermedia.
- La detección automática de protocolos de Plaspy cubre los modos públicos de reporte más comunes, pero firmware personalizados poco comunes pueden requerir verificación.
- La calibración del tanque en el CP60-FUEL es importante para convertir los pulsos medidos en valores precisos de volumen de combustible.
- Siempre compare la configuración del dispositivo y las notas de la versión del fabricante al diagnosticar telemetría inesperada.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del CP60-FUEL ayuda a garantizar una instalación confiable, la interpretación correcta de los datos de combustible y una solución eficiente de problemas durante el despliegue. Saber qué transporte y ajustes de servidor usar, y cómo la calibración se mapea a los valores reportados, reduce el tiempo de configuración y mejora la calidad de datos en Plaspy.

- Acelera la configuración inicial al asegurar que el equipo apunte al endpoint y transporte correctos de Plaspy.
- Mejora la resolución de problemas cuando la telemetría falta, se demora o aparece inconsistente.
- Ayuda a validar que los resultados de la calibración del tanque se transmiten e interpretan correctamente.
- Reduce las falsas alarmas al clarificar cómo el rastreador reporta cambios de estado y pulsos del sensor.
- Facilita el mantenimiento a largo plazo cuando se realizan actualizaciones de firmware o despliegues masivos en la flota.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el HunterPro CP60-FUEL brinda a las organizaciones visibilidad clara del nivel de combustible junto con la ubicación y el estado del vehículo. La plataforma ingiere la telemetría reportada y la pone a disposición para monitoreo, alertas y análisis históricos, de modo que los gestores de flota puedan reducir pérdidas de combustible, planificar recargas y auditar tendencias de consumo.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos y permiten que los equipos se concentren en la calibración y la operación en lugar de en ajustes de servidor por dispositivo. Para obtener más información sobre Plaspy y cómo soporta el monitoreo de flotas y combustible, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo; para obtener las especificaciones más recientes de hardware y protocolo consulte la documentación del fabricante en http://hunterpro.com.tw/ .

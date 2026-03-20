---
slug: /zilogic/fleet/protocol
id: fleet-protocol
sidebar_label: Protocol
title: Zilogic - Fleet Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador GPS Zilogic Fleet con Plaspy y consideraciones de compatibilidad
keywords:
  - Protocolo Zilogic Fleet
  - Rastreador GPS Zilogic Fleet
  - Compatibilidad Zilogic Fleet Plaspy
  - Comunicación rastreador Fleet
  - Guía protocolo rastreador GPS
  - Protocolo de rastreo vehicular
  - Integración gestión de flotas
  - Compatibilidad de dispositivos Plaspy
  - Configuración de transporte del rastreador
  - Telemetría GPS y entradas
---

# Zilogic - Protocolo Fleet

Esta página describe el contexto público del protocolo para usar el rastreador Zilogic Fleet con la plataforma Plaspy. Se centra en cómo el equipo se comunica con Plaspy de forma general, qué ajustes de conexión son necesarios a alto nivel y qué consideraciones prácticas importan al integrar el dispositivo. El contenido está pensado para ser no sensible y útil para usuarios técnicos que preparan dispositivos para integración con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento puede diferir entre unidades y en el tiempo.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del rastreador permite que el dispositivo entregue ubicación, hora y telemetría de E/S desde el vehículo a un servidor central y reciba mensajes de gestión cuando están soportados. Para el rastreador Fleet esto típicamente incluye la posición GPS y el estado de entradas digitales y analógicas, además de la posibilidad de controlar salidas mediante comandos remotos cuando el firmware lo soporte.

- Proporciona un canal fiable para el reporte de ubicación y telemetría desde el rastreador a Plaspy.
- Transmite información de identificación y sesión para que Plaspy correlacione los mensajes con el registro de dispositivo correcto.
- Lleva estados de entradas digitales y medidas analógicas para que Plaspy muestre los datos de sensores del vehículo.
- Soporta comandos de control remoto o actuadores cuando el fabricante y el firmware exponen esa capacidad.
- Funciona sobre transportes estándar de Internet para que los dispositivos puedan reportar desde redes móviles hacia Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador basándose en los datos entrantes y el comportamiento de reporte esperado. En la mayoría de despliegues, un rastreador Fleet configurado correctamente reportará a Plaspy sin que usted tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy acepta reportes en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha para simplificar la gestión de flotas.
- El puerto usado por Plaspy para el reporte de dispositivos es 8888 y los equipos pueden configurarse para usar UDP o TCP.
- Cuando el rastreador se configura para reportar al endpoint de Plaspy, Plaspy intentará la detección automática del protocolo, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Si un dispositivo no aparece, confirme el destino de reporte y el transporte configurado en el dispositivo y verifique la conectividad de red.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el rastreador llega a Plaspy a través de la red móvil y las opciones de transporte que afectan la accesibilidad. El rastreador Fleet puede configurarse para usar UDP o TCP según el modelo y las capacidades de firmware; ambos transportes son soportados por Plaspy en el mismo puerto.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los dispositivos, por lo que ese puerto debe usarse en la configuración del servidor del equipo independientemente del modelo.
- El dispositivo puede usar UDP o TCP en el puerto 8888; elija el transporte que soporte su firmware y la red móvil.
- Asegúrese de que el APN y la configuración de datos móviles en la SIM y el dispositivo sean correctos para que los paquetes salgan del equipo y lleguen a Plaspy.
- Firewalls de red o restricciones del operador que bloqueen la salida por UDP o TCP en el transporte elegido pueden impedir el reporte.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto de campos de telemetría, los intervalos de reporte y los transportes soportados; siempre verifique la versión de firmware del dispositivo.
- Variantes de hardware o revisiones de producción pueden modificar las entradas, salidas o interfaces seriales disponibles y, por ende, lo que el protocolo reporta.
- Un mismo modelo puede soportar diferentes opciones de reporte según la configuración, por ejemplo habilitando o deshabilitando periféricos seriales o mapeos específicos de E/S.
- Seleccionar UDP frente a TCP afecta la fiabilidad y el comportamiento de retransmisión a nivel de transporte, pero no cambia el requisito de alto nivel de reportar al endpoint de Plaspy.
- Valide la compatibilidad probando un dispositivo representativo con el endpoint de Plaspy antes de desplegar a gran escala.
- Consulte la documentación del fabricante para detalles específicos de firmware y cualquier modo de protocolo opcional que pueda no describirse públicamente aquí.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy ayuda a asegurar una configuración fiable, facilitar la solución de problemas y garantizar un funcionamiento predecible a largo plazo en despliegues de flota. Estar al tanto del transporte, el firmware y el comportamiento de reporte de E/S reduce el tiempo para resolver problemas de conectividad y telemetría.

- La configuración correcta del endpoint del servidor y del transporte es esencial para la conectividad inicial con Plaspy.
- Conocer qué entradas y canales analógicos reporta el rastreador ayuda a mapear la telemetría del dispositivo a los campos del panel de Plaspy.
- Estar al tanto de la versión de firmware facilita reconocer diferencias de comportamiento entre equipos y aplicar configuraciones consistentes.
- Entender el comportamiento de red del dispositivo ayuda a diagnosticar reportes intermitentes causados por cobertura, APN o problemas del operador.
- Tener claridad sobre las salidas disponibles y las capacidades de control informa flujos de trabajo seguros para gestión remota e inmovilización cuando están soportados.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el rastreador Zilogic Fleet brinda a las organizaciones una forma centralizada de recopilar posiciones GPS y telemetría de vehículo desde entradas digitales y analógicas, además de una configuración consistente de endpoint y puerto entre dispositivos. La detección automática de protocolos de Plaspy y el uso uniforme del puerto simplifican despliegues a gran escala y reducen la carga de configuración por dispositivo.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el rastreador Zilogic Fleet, visite https://www.plaspy.com. Para los detalles específicos del protocolo por dispositivo, notas de firmware y documentación de hardware más actualizada, verifique la información con el fabricante en https://zilogic.com/ ya que las implementaciones pueden cambiar con el tiempo.

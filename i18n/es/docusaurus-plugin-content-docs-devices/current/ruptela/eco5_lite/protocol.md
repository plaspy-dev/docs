---
slug: /ruptela/eco5_lite/protocol
id: eco5_lite-protocol
sidebar_label: Protocol
title: Ruptela - Eco5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Ruptela Eco5 Lite con Plaspy para rastreo y telemetría de flotas confiable
keywords:
  - protocolo ruptela eco5 lite
  - protocolo gps ruptela eco5 lite
  - protocolo del rastreador eco5 lite
  - comunicación ruptela eco5 lite
  - protocolo de seguimiento eco5 lite
  - compatibilidad ruptela con plaspy
  - protocolo rastreador gps ruptela
  - rastreo de vehículos ruptela eco5 lite
  - compatibilidad de dispositivos plaspy
  - rastreo de flotas eco5 lite
---

# Ruptela - Protocolo Eco5 Lite

Esta página describe el contexto público del protocolo para usar el rastreador Ruptela Eco5 Lite con Plaspy. Presenta, en términos no sensibles y neutrales respecto a la implementación, cómo el dispositivo se comunica con Plaspy para que gestores de flota e integradores comprendan el papel del protocolo en los flujos de trabajo de rastreo y telemetría en tiempo real.

El Ruptela Eco5 Lite es un rastreador compacto y de bajo consumo con GNSS y capacidades BLE, pensado para telemática ligera y gestión de flotas. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página explica los conceptos de conexión y protocolo relevantes para una integración exitosa y recomienda consultar a Ruptela para detalles específicos del dispositivo y la versión más actual.

## Descripción general del protocolo

A alto nivel, el protocolo de comunicación del Eco5 Lite define las reglas que el dispositivo usa para identificarse, empaquetar la telemetría y los eventos, y entregar esa información a un servidor remoto para su procesamiento. Aquí se detalla cómo se reportan las ubicaciones, estados de entradas, valores de sensores BLE y alarmas a un backend como Plaspy, sin entrar en el diseño exacto de paquetes o detalles binarios.

- El protocolo permite que el Eco5 Lite reporte ubicación GNSS, datos de sensores BLE, estados de entradas digitales y analógicas, y banderas de eventos a una plataforma backend.
- La identificación y la información de sesión permiten al backend asociar la telemetría entrante con un dispositivo y un activo de flota específicos.
- El reporte basado en eventos posibilita que el rastreador envíe alarmas, cambios de encendido y señales de manipulación o bloqueo para flujos de trabajo en tiempo real.
- Las reglas del protocolo determinan la frecuencia de actualización, el contenido de la carga útil y cómo el dispositivo indica estados importantes como batería baja o uso de batería auxiliar.
- Los mecanismos de configuración y entrega de comandos (cuando están soportados) permiten cambios remotos de parámetros y gestión de firmware mediante sistemas de administración de dispositivos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de rastreadores en un endpoint compartido y determina automáticamente el protocolo entrante, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en la plataforma. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy suele ser el único requisito para que la detección automática funcione.

- Plaspy recibe conexiones de dispositivos en el dominio d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma escucha en el puerto 8888 para el tráfico de dispositivos.
- El Eco5 Lite puede configurarse para usar UDP o TCP en el puerto 8888 según la variante y la configuración de red.
- Cuando el dispositivo está configurado para reportar a Plaspy, la plataforma detectará el protocolo del rastreador automáticamente, por lo que normalmente no es necesario seleccionar el protocolo de forma manual.
- Si un dispositivo no aparece en Plaspy, validar el endpoint de reporte y el transporte (UDP o TCP al puerto 8888) es un primer paso práctico de resolución de problemas.

## Transporte y contexto de conexión

El contexto de conexión abarca el método de transporte y los ajustes de destino necesarios para que el Eco5 Lite entregue telemetría a Plaspy. Estos son los detalles públicos de red que normalmente configura en el dispositivo o a través de las herramientas de gestión de Ruptela.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o directamente a la dirección 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración en flotas mixtas.
- La elección del transporte (UDP vs TCP) puede afectar el comportamiento de entrega y debe coincidir con el firmware del dispositivo y el entorno de red.
- Asegúrese de que la configuración de la red móvil y el APN en el Eco5 Lite sean correctos para la SIM instalada y la variante celular regional.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, los intervalos de reporte y las funciones disponibles; verifique las notas de versión del firmware para detectar cambios en el protocolo.
- Las revisiones de hardware y las variantes regionales (diferencias en el módem celular) pueden alterar el transporte soportado o los conjuntos de funciones.
- Las herramientas de configuración del fabricante y las plataformas de administración de dispositivos pueden cambiar la forma en que se aplican los parámetros de forma remota; siga las indicaciones de Ruptela para el aprovisionamiento.
- La elección del transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y con cualquier comportamiento de firewall o NAT en redes celulares.
- Si utiliza funciones BLE, confirme que el reporte BLE esté habilitado y que los sensores de corto alcance que despliegue sean compatibles con el firmware del Eco5 Lite.
- Valide que cualquier integración requerida o el mapeo de entradas digitales/analógicas coincida con los campos de eventos y telemetría de Plaspy.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo del dispositivo y el contexto de conexión ayuda a garantizar una configuración fiable, acelerar la resolución de problemas y lograr una operación predecible a largo plazo dentro de Plaspy. Aunque Plaspy detecta los protocolos automáticamente, conocer los conceptos básicos le permitirá confirmar que el dispositivo está correctamente configurado y se comporta como se espera.

- Acelera la integración inicial al confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte correcto.
- Facilita la resolución de problemas de telemetría perdida o demorada al identificar si el rastreador envía por UDP o TCP.
- Entender el reporte de eventos y entradas ayuda a mapear las señales del dispositivo a eventos, geocercas y alertas en Plaspy.
- Conocer el impacto de versiones de firmware y variantes de hardware reduce sorpresas al desplegar dispositivos en distintas regiones o lotes.
- Apoya decisiones operativas como seleccionar intervalos de reporte que equilibren visibilidad y consumo de batería o datos.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela Eco5 Lite con Plaspy ofrece a las organizaciones una vía práctica para obtener ubicación en tiempo real, conciencia de eventos y telemetría simple sin una gestión compleja de puertos por dispositivo. El diseño de bajo consumo del Eco5 Lite, su precisión GNSS, soporte BLE y las entradas básicas para vehículos lo hacen adecuado para rastreo de flotas, identificación de conductores y casos de uso de telemetría ligera, donde Plaspy aporta visualización, alertas e informes.

Para obtener más información sobre Plaspy y cómo gestiona la integración de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre protocolo y firmware específico del dispositivo en el sitio del fabricante https://ruptela.com/ antes de desplegar a gran escala.

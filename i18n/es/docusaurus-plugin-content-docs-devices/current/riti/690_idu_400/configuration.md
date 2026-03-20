---
slug: /riti/690_idu_400/configuration
id: 690_idu_400-configuration
sidebar_label: Configuration
title: Riti - 690 (IDU-400) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Riti 690 IDU 400 con valores de servidor Plaspy y pasos prácticos para rastreo de flotas en tiempo real
keywords:
  - Configuración Riti 690
  - Configuración inicial Riti 690
  - Riti IDU 400 Plaspy
  - Configuración rastreador GPS Riti
  - Configuración rastreador Plaspy
  - Configuración rastreo de vehículos
  - Configuración rastreo para gestión de flotas
  - Configuración de servidor Riti 690
  - Integración plataforma GPS
  - Configuración rastreo en tiempo real
---

# Riti - 690 (IDU-400) Configuración

Esta página describe el contexto público de configuración para usar el Riti Locator 690 (IDU-400) con Plaspy. Resume los ajustes de servidor de Plaspy a los que debe apuntar el equipo, explica el flujo típico de configuración y señala comprobaciones prácticas para validar la conectividad y el flujo de telemetría hacia Plaspy. El contenido está dirigido a instaladores técnicos e integradores que preparan el dispositivo para su integración con la plataforma Plaspy.

El Locator 690 es una unidad de datos inteligente con GNSS integrado, telemetría celular robusta y soporte de entradas/salidas para vehículo; es compatible con Plaspy desde fábrica. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los métodos exactos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta página como referencia práctica pública y confirme los detalles con la documentación de Riti cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el Locator 690 para enviar telemetría a Plaspy, de modo que las posiciones y los eventos aparezcan en la plataforma. El objetivo práctico es garantizar que el dispositivo esté alimentado, tenga acceso a la red y esté configurado para reportar a Plaspy usando el endpoint y puerto compartidos, de forma que Plaspy pueda ingerir y mostrar los datos del equipo.

- Apunte el dispositivo al endpoint compartido de Plaspy para permitir las subidas de telemetría.
- Confirme que el modo de transporte y el puerto coinciden con lo esperado por Plaspy para lograr una conexión fiable.
- Valide que el equipo tiene conectividad celular operativa y las credenciales de SIM o red necesarias.
- Verifique que el dispositivo aparece en Plaspy y está reportando soluciones GNSS y eventos de entradas/salidas configuradas.
- Pruebe el reporte de eventos como ignición, geocerca o alertas por manipulación para confirmar la visibilidad de extremo a extremo en Plaspy.

## Valores del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Use estos valores al configurar el servidor del dispositivo o los ajustes APN que requieran un host remoto, y recuerde que Plaspy acepta conexiones tanto por UDP como por TCP en el mismo puerto mientras la plataforma determina el protocolo automáticamente.

## Requisitos previos típicos

- Confirme que el Locator 690 está alimentado y accesible, con el cableado de instalación requerido completado.
- Asegúrese de contar con una SIM celular válida y un plan de datos activo compatible con las regiones y bandas del dispositivo.
- Tenga acceso al método o software oficial de configuración de Riti correspondiente a la revisión de firmware del equipo.
- Reúna el acceso a la cuenta de Plaspy o los identificadores de flota que su operador requiera para confirmar el dispositivo en la plataforma.
- Prepare el cableado periférico o los sensores que planea habilitar para que las pruebas de eventos se puedan completar después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El Locator 690 se configura para reportar sus posiciones GNSS y telemetría vehicular al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda procesar la ubicación en vivo, alertas y datos históricos. Una vez que el dispositivo esté apuntando a Plaspy y la conectividad de red esté disponible, la plataforma ingerirá los datos del equipo y los mostrará en paneles, alertas e informes.

- La telemetría del dispositivo se envía a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y las opciones del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se utiliza el mismo puerto 8888 para todos los dispositivos soportados.
- Las soluciones de posición, eventos de entradas/salidas y los registros almacenados se envían a Plaspy para seguimiento en vivo y reproducción histórica.
- Los reportes de eventos como manipulación, ignición o SOS se reenviarán a Plaspy una vez que el dispositivo esté conectado.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software de configuración oficial de Riti apropiado para el firmware y la región del dispositivo.
2. Verifique que el dispositivo tenga alimentación y una SIM celular con datos habilitados.
3. Ingrese el host del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto remoto en 8888, que es el puerto estándar que usa Plaspy para todos los equipos.
5. Seleccione UDP o TCP si el dispositivo requiere elección de transporte y guarde la configuración.
6. Aplique o guarde la configuración en el equipo y reinicie el rastreador si el procedimiento lo exige.
7. Valide que el dispositivo reporta a Plaspy revisando la llegada de telemetría y soluciones GNSS en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen de la utilidad de configuración de Riti, la versión de firmware o el conjunto de comandos SMS que su proveedor suministre. Dado que Riti ofrece múltiples interfaces de configuración y revisiones de firmware, los comandos públicos varían y no se listan aquí. Use la herramienta oficial de Riti o el conjunto de comandos SMS del dispositivo proporcionado por Riti para ingresar los valores del servidor Plaspy:

- Set server host to d.plaspy.com or 54.85.159.138
- Set server port to 8888
- Select transport UDP or TCP if required

Si dispone de la lista específica de comandos Riti para su firmware, aplique el host y el puerto del servidor en el orden requerido por esos comandos y verifique mediante un informe de estado o posición.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar los pasos exactos o la sintaxis de los comandos; siempre adapte los comandos a la versión de firmware de su equipo.
- La elección entre UDP o TCP puede depender de la fiabilidad de la red y los requisitos de transporte; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento a gran escala en flotas mixtas.
- Si el dispositivo soporta almacenamiento a bordo y backfill automático, confirme que retransmitirá los registros almacenados a Plaspy cuando se restablezca la conectividad.
- Mantenga una copia de las copias de seguridad de configuración del dispositivo y documente las versiones de firmware para facilitar la resolución de problemas y futuras actualizaciones.

## Por qué usar Plaspy con esta configuración

Usar el Riti Locator 690 con Plaspy ofrece un camino práctico hacia la visibilidad en tiempo real de la flota y la consolidación de telemetría para los equipos operativos. El rastreador provee las soluciones GNSS, entradas de sensores e informes de eventos que Plaspy ingiere para generar mapas en vivo, alertas por geocerca, reproducción histórica y análisis operativos que ayudan a las organizaciones a monitorear vehículos y responder rápidamente a incidentes.

Learn more about Plaspy at https://www.plaspy.com and confirm device specific setup guidance and firmware behavior at the Riti website https://www.riti.com.tw/ since manufacturer configuration methods and device behavior can change over time.

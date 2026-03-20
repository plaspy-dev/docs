---
slug: /tytan_sat/ds540b/configuration
id: ds540b-configuration
sidebar_label: Configuration
title: Tytan SAT - DS540B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Tytan SAT DS540B con ajustes de servidor Plaspy y pasos prácticos de integración
keywords:
  - Configuración Tytan SAT DS540B
  - Configuración DS540B para Plaspy
  - Configuración rastreador GPS Tytan SAT
  - Configuración de servidor DS540B
  - Configuración software de seguimiento DS540B
  - Configuración plataforma GPS DS540B
  - Integración de rastreador con Plaspy
  - Configuración telemática vehicular
  - Guía de configuración tracker de flota
  - Rastreador telemetría CAN bus
---

# Tytan SAT - Configuración DS540B

Esta página documenta el contexto público de configuración para usar el Tytan SAT DS540B con Plaspy. Explica los ajustes de servidor prácticos y el flujo de trabajo habitual que permiten apuntar un DS540B a Plaspy para que el equipo envíe ubicación en tiempo real y telemetría del vehículo a la plataforma. El contenido se centra en los valores de integración compartidos públicamente y en los pasos generales que instaladores e integradores seguirán al preparar unidades DS540B para Plaspy.

Plaspy utiliza un endpoint y puerto compartidos entre los dispositivos soportados e identifica automáticamente el protocolo del rastreador. Las acciones exactas en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía debe usarse como referencia práctica y se recomienda consultar la documentación oficial de Tytan SAT o las herramientas del vendedor para comandos o menús específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el DS540B para enviar posiciones GNSS junto con telemetría del vehículo (CAN/FMS/J1939/J1708 y entradas de sensores) a Plaspy, de modo que los datos queden disponibles en la plataforma para paneles, alertas e informes. Los puntos siguientes resumen el propósito y el resultado esperado de la configuración.

- Configurar el DS540B para que reporte al endpoint de Plaspy y así la ubicación y la telemetría de bus lleguen a la plataforma.
- Asegurar que el transporte y el puerto coincidan con los requisitos de Plaspy para que el servidor acepte los mensajes entrantes.
- Validar la conectividad y confirmar que el dispositivo aparezca en los paneles de Plaspy para monitoreo en vivo e informes históricos.
- Verificar el cableado de sensores y entradas (temperatura 1-wire, I/O analógico/digital) y habilitarlos si necesita esos flujos de telemetría.
- Aplicar y guardar la configuración en el lado del fabricante y reiniciar la unidad si es necesario para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el DS540B. Estos valores son los detalles del endpoint compartido que Plaspy ofrece para rastreadores compatibles.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP can be used; the device may be configured to use either transport on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Confirmar que el DS540B está alimentado e instalado según la guía de instalación del vehículo o las instrucciones del instalador.
- Tener acceso al método oficial de configuración de Tytan SAT o al software suministrado por el fabricante o el vendedor.
- Verificar la versión de firmware del dispositivo y anotar cualquier diferencia de configuración específica del proveedor.
- Asegurar que el cableado requerido del bus del vehículo y de los sensores esté completo para los flujos de telemetría que planea utilizar.
- Preparar un plan de validación corto para confirmar que el dispositivo reporta al servidor Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el DS540B reenvía las posiciones GNSS junto con parámetros del bus del vehículo y eventos de sensores locales al endpoint de Plaspy, de modo que los gestores de flota y los equipos operativos puedan monitorear ubicación y telemetría en tiempo real. El equipo se apunta al endpoint compartido de Plaspy y usa el puerto de la plataforma para que los mensajes entrantes sean ingeridos e interpretados automáticamente.

- El rastreador envía actualizaciones de ubicación y paquetes de telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy recibe los mensajes del dispositivo y detecta automáticamente el protocolo DS540B para hacer el parseo correcto.
- Las lecturas del bus del vehículo (CAN/FMS/J1939/J1708) y los eventos de entradas locales se normalizan y se muestran como telemetría en Plaspy.
- A partir de la telemetría que provee el DS540B se generan alertas, eventos de geocercas y registros históricos de viajes.
- El uso del puerto común de Plaspy simplifica las implementaciones porque todos los dispositivos soportados reportan al mismo puerto y el servidor se encarga de la detección de protocolo.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Tytan SAT o al software del proveedor para el DS540B (interfaz web, herramienta de escritorio, comandos SMS u otra herramienta del fabricante según lo provisto).
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la dirección IP 54.85.159.138 como destino.
3. Configure el puerto de reporte en 8888 para que coincida con el puerto compartido de Plaspy utilizado por todos los dispositivos.
4. Si el equipo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador o los requisitos de la red.
5. Aplique o guarde la configuración en la herramienta del fabricante y siga cualquier indicación del proveedor para confirmar los cambios.
6. Reinicie o aplique un ciclo de alimentación al DS540B si el fabricante lo requiere para que la nueva configuración del servidor entre en vigor.
7. Valide la conectividad confirmando que el dispositivo aparece en Plaspy y que la ubicación y las telemetrías esperadas se muestran.

## Ejemplos de comandos de configuración

El fabricante del DS540B puede proporcionar comandos de configuración específicos, plantillas SMS o una utilidad de software para establecer el servidor, el transporte y el puerto. Los comandos exactos dependen del proveedor y del firmware y pueden variar según la herramienta y la región. Dado que los comandos de configuración dependen del fabricante, consulte la guía de configuración oficial de Tytan SAT o la herramienta de su distribuidor para la sintaxis exacta y ejemplos aplicables a su versión de firmware.

Si dispone de ejemplos de comandos específicos proporcionados por Tytan SAT o su proveedor, sígalos en el orden requerido por el fabricante para establecer:
- el dominio o IP del servidor (d.plaspy.com o 54.85.159.138),
- el puerto 8888,
- la selección de transporte (UDP o TCP),
y luego aplique/guarde y reinicie el dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, la sintaxis de comandos o el flujo de configuración; confirme siempre las notas de la versión de firmware antes de realizar una provisión masiva.
- Algunos instaladores prefieren configurar por dirección IP (54.85.159.138) mientras que otros usan el nombre de dominio (d.plaspy.com); ambos apuntan al mismo endpoint de Plaspy para esta integración.
- Elegir UDP o TCP suele ser una opción del dispositivo; seleccione el transporte que mejor se adapte a sus condiciones de red y restricciones de firewall.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, el requisito principal es la configuración correcta del endpoint y del puerto en el dispositivo, más que seleccionar un tipo de protocolo en la plataforma.
- Mantenga un registro de las configuraciones aplicadas, las versiones de firmware y una lista de verificación de validación por dispositivo para facilitar la resolución de problemas y las auditorías.

## Por qué usar Plaspy con esta configuración

Usar el DS540B con Plaspy aporta telemetría de nivel vehicular y datos completos del bus CAN a una única plataforma de gestión de flotas. Las organizaciones obtienen visibilidad unificada de ubicación, información basada en telemetría para monitoreo de combustible y motor, y alertas orientadas a eventos que ayudan a reducir riesgos de robo y a mejorar la toma de decisiones operativas. El soporte del DS540B para lectura de buses CAN/FMS/J1939/J1708, entradas analógicas y digitales, y sensores de temperatura 1-wire lo hace adecuado para flotas mixtas y cargas sensibles a temperatura cuando se integra con Plaspy.

Para saber más sobre Plaspy y cómo la plataforma ingiere la telemetría de los rastreadores, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y los detalles del fabricante, verifique las instrucciones con Tytan SAT en http://tytansat.com/ ya que las herramientas del proveedor y el firmware pueden cambiar con el tiempo.

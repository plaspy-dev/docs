---
slug: /aplicom/t10_g/configuration
id: t10_g-configuration
sidebar_label: Configuration
title: Aplicom - T10 G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para conectar el tracker Aplicom T10 G a Plaspy usando ajustes de servidor compartidos
keywords:
  - Configuración Aplicom T10 G
  - Configuración inicial Aplicom T10 G
  - Integración Aplicom T10 G Plaspy
  - Configuración de servidor Aplicom T10 G
  - Configuración rastreador GPS T10 G
  - Configuración rastreador Aplicom
  - Configuración de dispositivo Plaspy
  - Seguimiento de vehículos con Aplicom
  - Configuración telemática de flotas
  - Configuración rastreador CAN bus
---

# Aplicom - Configuración del T10 G

Esta página describe el contexto público de configuración para usar el tracker Aplicom T10 G con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos generales necesarios para integrar la telemetría y el reporte de ubicación del T10 G en la plataforma Plaspy usando información pública.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante para el T10 G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de provisión empleadas (por ejemplo Aplicom Silver Cloud), por lo que siempre confirme los procedimientos específicos del dispositivo con la documentación oficial de Aplicom.

## Resumen de configuración

El objetivo de este flujo de trabajo es preparar el T10 G para comunicarse de manera fiable con Plaspy, validar la conectividad y habilitar la visibilidad de la telemetría y la ubicación del vehículo dentro de la plataforma. El procedimiento se enfoca en aplicar la información del servidor Plaspy en el dispositivo o a través de la capa de gestión de dispositivos y confirmar que el dispositivo informa correctamente.

- Configure el dispositivo o el servicio de provisión para apuntar a los ajustes de servidor de Plaspy y que la telemetría se enrute a Plaspy.
- Seleccione la opción de transporte y el puerto adecuados soportados por Plaspy para establecer el canal de datos.
- Verifique la conectividad celular y la recepción GNSS para que la ubicación y las señales derivadas del CAN estén disponibles.
- Confirme que el tracker aparece y reporta correctamente en Plaspy después de guardar la configuración.
- Use la provisión remota cuando esté disponible para escalar la configuración en múltiples unidades.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado físicamente según las pautas de Aplicom, con acceso para configuración.
- Conectividad celular activa para la variante del dispositivo en uso y un plan de datos adecuado para el envío de telemetría.
- Acceso al método de configuración oficial del fabricante o al servicio de provisión, como Aplicom Silver Cloud o herramientas del proveedor.
- Disponibilidad de GNSS (GPS) si se requiere reporte de ubicación y es esperable para la ubicación de instalación.
- Firmware del fabricante compatible con provisión remota y con el método de transporte seleccionado.
- Acceso administrativo a Plaspy para verificar que el dispositivo sea visible y reporte después de la configuración.

## Cómo se conecta este tracker a Plaspy

Al configurar el dispositivo para Plaspy, el Aplicom T10 G envía ubicación y telemetría derivada del CAN al endpoint y puerto compartidos del servidor Plaspy para que la plataforma muestre seguimiento en tiempo real, diagnósticos y datos operativos.

- El tracker se configura para reportar al endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
- Los datos se envían por el puerto 8888 utilizando UDP o TCP según la selección en la configuración.
- Plaspy usa un único puerto para los dispositivos soportados y detecta automáticamente el protocolo empleado por el tracker.
- Cuando están disponibles, las señales del bus CAN y la ubicación derivada del GNSS se incluyen en la telemetría que el dispositivo reenvía a Plaspy.
- Una vez que el reporte comienza, Plaspy ofrece visibilidad de la ubicación, el estado básico del vehículo y las corrientes de telemetría relacionadas.

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración de Aplicom o a la herramienta de provisión, como la interfaz web del dispositivo, el software del proveedor o Aplicom Silver Cloud.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o, de forma opcional, la IP 54.85.159.138 en el campo de servidor.
3. Configure el puerto del dispositivo en 8888 para que coincida con los requisitos del servidor Plaspy.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Guarde o aplique la configuración y, si usa un servicio de provisión, empuje el perfil a la flota de dispositivos.
6. Valide que el dispositivo informe correctamente a Plaspy y aparezca en la plataforma con la telemetría esperada.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración y los flujos de trabajo disponibles; consulte las notas de la versión de Aplicom cuando sea posible.
- TCP y UDP se comportan de forma distinta en redes móviles; elija el transporte que mejor se adapte a las condiciones de la red y a las herramientas de provisión.
- Plaspy usa el mismo puerto para todos los dispositivos soportados e intentará la detección automática del protocolo para simplificar la integración.
- La provisión remota mediante Aplicom Silver Cloud puede acelerar los despliegues, pero verifique que el perfil de provisión incluya los ajustes del servidor Plaspy.
- Las variantes regionales y el soporte de bandas de red pueden afectar el comportamiento de roaming y la conectividad; confirme los detalles de la variante con la documentación de Aplicom.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom T10 G con Plaspy ofrece a flotas y operadores reporte continuo de ubicación, telemetría del vehículo derivada del CAN y visibilidad centralizada para monitoreo y procesos operativos. El diseño robusto del T10 G y su acceso al bus de vehículo lo hacen apto para entornos de flota exigentes donde la telemetría fiable es esencial para diagnósticos, flujos antirobo y planificación de mantenimiento.

Para conocer más sobre cómo Plaspy soporta el seguimiento de flotas y la integración de dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante del Aplicom T10 G, verifique la información en el sitio oficial de Aplicom https://www.aplicom.com/ ya que las especificaciones y los procedimientos pueden cambiar con el tiempo.

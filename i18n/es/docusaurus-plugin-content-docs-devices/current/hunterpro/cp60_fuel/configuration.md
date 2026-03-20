---
slug: /hunterpro/cp60_fuel/configuration
id: cp60_fuel-configuration
sidebar_label: Configuration
title: HunterPro - CP60-FUEL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para HunterPro CP60 FUEL compatible con servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración HunterPro CP60 FUEL
  - Instalación rastreador de combustible HunterPro
  - Configuración servidor CP60 FUEL
  - Configuración de rastreador Plaspy
  - Configuración rastreador de nivel de combustible GPS
  - Configuración monitoreo de combustible de vehículo
  - Configuración seguimiento de combustible de flota
  - Procedimiento de calibración CP60 FUEL
  - Guía HunterPro para Plaspy
  - Configuración plataforma de rastreo
---

# HunterPro - Configuración del CP60-FUEL

Esta página ofrece el contexto público de configuración para usar el tracker HunterPro CP60-FUEL con Plaspy. Se concentra en la información práctica de servidor y los pasos necesarios para apuntar el equipo a Plaspy, de modo que el rastreador pueda enviar datos de nivel de combustible y telemetría a la plataforma. El contenido está dirigido a instaladores y usuarios técnicos que necesitan los pasos públicos y los valores que utiliza Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El CP60-FUEL es un rastreador de combustible que utiliza una sonda capacitiva coaxial y requiere calibración del tanque para convertir la capacidad del sensor en lecturas de volumen precisas; esta página se centra en los ajustes públicos de Plaspy y en el flujo práctico para la integración.

## Resumen de configuración

El objetivo de la configuración es dejar al CP60-FUEL listo para comunicarse de forma fiable con Plaspy y que los niveles de combustible y el estado del dispositivo sean visibles en la plataforma. La configuración se concentra en apuntar el servidor del equipo, elegir el transporte y validar la conectividad básica, asegurando además que la sonda de combustible esté calibrada para reportar volúmenes correctos.

- Configure el dispositivo para que informe al endpoint y puerto del servidor Plaspy, de modo que la telemetría y las lecturas de combustible lleguen a la plataforma.
- Seleccione el modo de transporte que soporte el rastreador y Plaspy, y guarde los ajustes en el dispositivo.
- Realice la calibración del tanque en el CP60-FUEL para que las mediciones de nivel se conviertan correctamente a valores de volumen.
- Valide la conectividad comprobando que el dispositivo aparezca en Plaspy y envíe actualizaciones regulares.
- Confirme cualquier ajuste específico del fabricante usando las herramientas o documentación oficiales de HunterPro antes del despliegue.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and accepts reports using either transport
- All devices in Plaspy use the same port for device reporting

## Requisitos típicos antes de la instalación

- Dispositivo alimentado e instalado con la sonda de combustible montada y conectada correctamente
- Plan de calibración del tanque y datos de calibración necesarios disponibles para el CP60-FUEL
- Acceso al método de configuración oficial de HunterPro o al software para aplicar los ajustes de servidor
- Conectividad de red o método de transporte disponible según la herramienta de configuración del equipo
- Acceso administrativo o credenciales requeridas por la herramienta del fabricante para guardar los ajustes
- Procedimiento de prueba para verificar que los informes del dispositivo lleguen al servidor de Plaspy tras la configuración

## Cómo se conecta este tracker a Plaspy

El CP60-FUEL se configura para enviar la telemetría y los datos del sensor de combustible al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes entrantes, identifica automáticamente el protocolo del rastreador y procesa los informes de nivel de combustible junto con la posición y la información de salud del dispositivo para mostrarlos en la plataforma.

- El rastreador se apunta al endpoint de Plaspy d.plaspy.com o a la dirección IP equivalente 54.85.159.138
- Los datos se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles
- El transporte puede establecerse en UDP o TCP según los requisitos del dispositivo y la preferencia del instalador
- Plaspy realiza detección automática de protocolo, por lo que no es necesario seleccionar un protocolo explícitamente en la plataforma
- Una vez configurado y calibrado, los pulsos de nivel de combustible del CP60-FUEL se convierten a volumen y se envían a Plaspy para visualización y alertas

## Flujo de configuración típico

1. Acceda al método o software de configuración oficial de HunterPro para el CP60-FUEL proporcionado por el fabricante o el vendedor.
2. En los ajustes de servidor del dispositivo, introduzca el dominio del servidor Plaspy d.plaspy.com o la IP de Plaspy 54.85.159.138.
3. Establezca el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y la instalación tiene preferencia por uno de ellos.
5. Aplique o guarde la configuración usando la herramienta HunterPro para que el dispositivo almacene los nuevos valores de servidor y transporte.
6. Reinicie el dispositivo si la herramienta del fabricante o el firmware requieren un reinicio para aplicar los ajustes de red.
7. Valide que el CP60-FUEL informe a Plaspy confirmando que el dispositivo aparece en la plataforma y que se reciben telemetría y lecturas de combustible.
8. Complete el procedimiento de calibración del tanque en el dispositivo y verifique que los niveles reportados coincidan con los volúmenes calibrados en Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de comandos o los pasos en la interfaz gráfica dependen de la herramienta de configuración de HunterPro y del firmware, y pueden variar por revisión de hardware. Algunas instalaciones usan una utilidad de escritorio, interfaz web o comandos por SMS/serial provistos por HunterPro. Al usar la herramienta del fabricante, ingrese los valores del endpoint de Plaspy indicados en la sección Ajustes de servidor de Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888, y seleccione UDP o TCP si es necesario. Siga siempre las indicaciones de la herramienta HunterPro para guardar y aplicar los ajustes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar dónde se ingresan el servidor y el puerto en la herramienta de configuración; consulte el manual del CP60-FUEL para instrucciones específicas según el firmware.
- La calibración del tanque es obligatoria para traducir las pulsaciones de capacitancia de la sonda en volúmenes de combustible precisos; realice la calibración después de la configuración de red y antes del uso operativo.
- Elija UDP para menor sobrecarga o TCP si prefiere un transporte más fiable y el dispositivo lo soporta, recordando que Plaspy acepta cualquiera de los dos.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que en la plataforma no se requiere configuración de protocolo por dispositivo.
- Verifique cualquier herramienta suministrada por el vendedor, notas de la versión del firmware o guías de instalación de HunterPro antes de realizar despliegues masivos o remotos.

## Por qué usar Plaspy con esta configuración

Usar el HunterPro CP60-FUEL con Plaspy brinda a los operadores de flota una solución práctica para recolectar y visualizar datos de nivel de combustible junto con el estado y la ubicación del dispositivo. La tecnología de sonda del CP60-FUEL y el procedimiento de calibración permiten reportes de volumen precisos, y apuntar el rastreador a Plaspy facilita la monitorización centralizada, las alertas y la supervisión operativa de la flota.

Para obtener más información sobre Plaspy e integración de dispositivos compatibles visite https://www.plaspy.com. Para las instrucciones de configuración específicas del dispositivo, notas de firmware y herramientas del fabricante, verifique los detalles con HunterPro en http://hunterpro.com.tw/ ya que el comportamiento y los pasos de configuración pueden cambiar con el tiempo.

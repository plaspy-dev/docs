---
slug: /navtelekom/smart_s_2423/configuration
id: smart_s_2423-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom SMART S-2423 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Navtelekom SMART S-2423
  - Instalación Navtelekom SMART S-2423
  - Integración SMART S-2423 con Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreador vehicular Navtelekom
  - Configuración de rastreador GLONASS GPS
  - Configuración NTC Configurator
  - Gestión de firmware DRC
  - Configuración de rastreador 2G
  - Rastreador RS-485 1-Wire Bluetooth
---

# Navtelekom - Configuración del SMART S-2423

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom SMART S-2423 con Plaspy. Reúne los ajustes prácticos y los pasos orientados a la plataforma que necesitará para apuntar el dispositivo hacia Plaspy y verificar que la posición y la telemetría aparecen en la plataforma. Use esta guía como complemento a la documentación oficial de Navtelekom y a las herramientas del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice, como NTC Configurator o la gestión remota DRC. Esta guía enfatiza los ajustes comunes y públicos necesarios para integrar el SMART S-2423 con Plaspy.

## Visión general de la configuración

Configurar el SMART S-2423 para Plaspy consiste principalmente en dirigir el rastreador al endpoint correcto de Plaspy, confirmar los ajustes de transporte y validar que el rastreador informe ubicación y telemetría. El proceso suele realizarse con las herramientas de configuración de Navtelekom y puede requerir un reinicio único del dispositivo o la confirmación del firmware.

- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría y las posiciones GNSS sean entregadas a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere elección, utilizando el puerto compartido de Plaspy.
- Guarde o aplique la configuración en la herramienta del fabricante como NTC Configurator o mediante la gestión remota DRC.
- Valide la conectividad y el reporte en tiempo real en Plaspy después del reinicio y la puesta en marcha.
- Confirme que entradas y salidas, sensores RS-485 y 1‑Wire, y dispositivos Bluetooth reporten según lo esperado en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Asegúrese de que el SMART S-2423 tenga alimentación y, si dispone, la batería interna de respaldo cargada.
- Una SIM activa y provisionada para servicio celular 2G, ya que el dispositivo usa un módem GSM 2G.
- Acceso físico al dispositivo o acceso remoto mediante herramientas Navtelekom como NTC Configurator o DRC para cambiar ajustes de red.
- Conozca el IMEI del rastreador o el identificador de dispositivo que su flota usa para el registro y la validación.
- Señal celular estable en el sitio de instalación y confirmación de que el operador local aún soporta las bandas del rastreador.
- Firmware actualizado cuando sea posible; registre la versión de firmware para la resolución de problemas.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el SMART S-2423 envía su posición GNSS y la telemetría asociada al endpoint y puerto compartidos de Plaspy. Plaspy ingiere las posiciones y telemetría y detectará automáticamente el protocolo del rastreador, por lo que no se requiere selección especial de protocolo en la plataforma.

- El dispositivo reporta fixes GLONASS/GPS y datos de movimiento a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- El transporte puede enviarse por UDP o TCP según la configuración del dispositivo; elija el transporte que requiera su despliegue.
- La telemetría de RS-485, 1‑Wire y periféricos Bluetooth se reenvía junto con los datos de ubicación cuando está configurada.
- Entradas universales y salidas configurables se reportan como eventos a Plaspy y pueden activar alertas y reglas en la plataforma.
- Plaspy empata los datos entrantes con el registro del dispositivo por IMEI u otro identificador y muestra posición en vivo, estado y recorridos históricos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante, como NTC Configurator o la gestión remota DRC para el SMART S-2423.
2. Ubique los ajustes de servidor o reporte remoto en la herramienta e ingrese el endpoint de Plaspy como d.plaspy.com o, alternativamente, use la IP 54.85.159.138.
3. Configure el puerto de reporte en 8888.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según las necesidades de su despliegue.
5. Aplique o guarde la configuración en la herramienta del fabricante y envíe los cambios al dispositivo.
6. Reinicie el dispositivo si la herramienta o el firmware lo requieren para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy verificando la posición en vivo y la telemetría en la plataforma y confirmando la recepción de mensajes.

## Ejemplos de comandos de configuración

El SMART S-2423 se configura típicamente usando herramientas de Navtelekom como NTC Configurator o de forma remota mediante el servicio de gestión DRC. La sintaxis exacta de comandos y los métodos varían según el firmware y la herramienta del fabricante, por lo que no se incluyen comandos brutos universales aquí. Use el software del fabricante para establecer el servidor a d.plaspy.com o 54.85.159.138 y el puerto 8888, elija UDP o TCP según sea necesario, luego guarde y reinicie el dispositivo.

Si prefiere o necesita métodos por SMS o comandos seriales, consulte la documentación oficial de Navtelekom o la ayuda de NTC Configurator para las cadenas de comando exactas aplicables a su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los ajustes disponibles y la interfaz de configuración; siempre confirme el método correcto para el firmware de su dispositivo.
- Elegir TCP frente a UDP depende de sus necesidades de fiabilidad y latencia; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo.
- Use NTC Configurator para configuración local o por cable y DRC cuando realice configuración remota o actualizaciones de firmware en una flota.
- Confirme la disponibilidad de la red 2G con su operador móvil, ya que el SMART S-2423 utiliza un módem GSM 2G y una sola SIM.
- Registre identificadores del dispositivo como el IMEI antes de cambiar los ajustes del servidor para ayudar a empatar el dispositivo con su registro en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Navtelekom SMART S-2423 para enviar datos a Plaspy brinda a los gestores de flota visibilidad fiable de la ubicación del vehículo, el estado y la telemetría usando el receptor GLONASS/GPS del rastreador y sus múltiples opciones de E/S. La detección automática de protocolo de Plaspy y los ajustes de servidor uniformes simplifican la integración y reducen los pasos de configuración necesarios por dispositivo en despliegues mixtos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la información con Navtelekom en https://www.navtelecom.ru/

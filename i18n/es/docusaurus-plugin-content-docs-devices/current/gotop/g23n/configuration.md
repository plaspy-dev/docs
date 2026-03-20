---
slug: /gotop/g23n/configuration
id: g23n-configuration
sidebar_label: Configuration
title: GOTOP - G23N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP G23N y conectarlo a Plaspy usando servidor compartido y pasos prácticos
keywords:
  - configuración GOTOP G23N
  - instalación GOTOP G23N
  - GOTOP G23N Plaspy
  - configuración G23N NB IoT
  - configuración rastreador GOTOP
  - configuración servidor G23N
  - puesta en marcha GPS G23N
  - integración GOTOP con Plaspy
  - gestión de flota G23N
  - guía instalación G23N
---

# GOTOP - G23N Configuración

Esta página ofrece contexto público de configuración y orientación práctica para usar el rastreador GOTOP G23N con Plaspy. Se centra en los parámetros de servidor compartido y en los pasos típicos del lado del fabricante necesarios para direccionar un G23N con telemetría NB‑IoT hacia la plataforma Plaspy, tomando la descripción del dispositivo anterior como base factual.

Plaspy utiliza ajustes de servidor compartido entre los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores en el borde de la plataforma. Los pasos exactos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta página explica los valores que Plaspy espera y propone un flujo de trabajo práctico para aplicarlos con el método oficial de configuración GOTOP o con herramientas compatibles.

## Resumen de la configuración

Configurar el G23N para Plaspy implica preparar el dispositivo para que su telemetría NB‑IoT y las entradas/salidas del vehículo reporten al endpoint y puerto compartido de Plaspy. El objetivo es sencillo: asegurar que el G23N pueda conectarse a Plaspy, enviar mensajes de ubicación y eventos, y aparecer correctamente en el panel de la flota en Plaspy.

- Apuntar el dispositivo al endpoint de Plaspy para que los paquetes NB‑IoT se entreguen a Plaspy para su procesamiento.
- Configurar el transporte y el puerto en el rastreador para que coincidan con los ajustes de Plaspy y guardar la configuración del dispositivo.
- Verificar la cobertura NB‑IoT y la provisión APN/operador para que el módulo Quectel BC26 pueda transmitir datos.
- Usar la interfaz de configuración UART‑TTL del dispositivo o la herramienta oficial GOTOP para aplicar ajustes y comprobarlos.
- Reiniciar o ciclar la alimentación del rastreador cuando sea necesario y validar que Plaspy reciba los primeros paquetes de telemetría.
- Confirmar que ACC, pérdida de alimentación y salidas remotas se mapeen a los eventos esperados en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888 (device may be configured to use either)
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Una unidad G23N con alimentación y acceso a su interfaz de configuración UART‑TTL o a la herramienta oficial de configuración GOTOP
- Cobertura NB‑IoT y provisión correcta por parte del operador para el módulo Quectel BC26
- Conocimiento de la versión de firmware del dispositivo y de las utilidades de configuración del proveedor necesarias para el G23N
- Un método seguro para ciclar la alimentación o reiniciar el dispositivo después de aplicar cambios de configuración
- Acceso a una cuenta en la plataforma Plaspy o permisos administrativos para validar que el dispositivo aparece y reporta correctamente
- Cablería básica y preparación de montaje para probar ACC, detección de alimentación y la salida remota si va a verificarse el mapeo de E/S

## Cómo se conecta este rastreador a Plaspy

El G23N utiliza telemetría NB‑IoT para enviar mensajes de GNSS y eventos del dispositivo a Plaspy. Una vez configurado para apuntar al endpoint y puerto del servidor de Plaspy, el rastreador transmite actualizaciones periódicas de ubicación y mensajes de alarma o estado de E/S para que Plaspy los muestre en mapas en vivo, recorridos e informes.

- El G23N envía ubicación y telemetría por NB‑IoT a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según la opción del dispositivo; Plaspy acepta cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes para visibilidad en tiempo real y manejo de eventos
- Entradas del vehículo como ACC y pérdida de alimentación se envían como mensajes de evento y se mapean a reglas y alarmas en Plaspy
- Eventos de salida remota baja (corte de energía/combustible) pueden activarse desde la plataforma cuando la instalación y el dispositivo lo soporten

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración GOTOP para el G23N, normalmente vía UART‑TTL o mediante la herramienta del proveedor.
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como host destino.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere elegir uno.
5. Guarde o aplique la configuración usando la herramienta de configuración GOTOP o la interfaz de comandos del dispositivo.
6. Reinicie o cicla la alimentación del G23N si el dispositivo necesita reinicio para aplicar los cambios de servidor.
7. Valide la conectividad confirmando que el dispositivo reporta a Plaspy y que los mensajes de ubicación y evento aparecen en la plataforma.

## Ejemplos de comandos de configuración

El G23N se configura habitualmente mediante la herramienta del fabricante o la interfaz UART‑TTL. Los comandos exactos y su sintaxis dependen del firmware y de la utilidad de configuración GOTOP, por lo que el conjunto de comandos específico puede variar. Si dispone de la lista de comandos oficial GOTOP proporcionada por el proveedor, aplique los comandos en el orden que recomiende el fabricante asegurando que el host y el puerto estén establecidos con los valores de Plaspy mencionados arriba.

Si necesita ejemplos para un firmware o herramienta concretos, consulte las instrucciones oficiales de configuración GOTOP que vienen con el dispositivo o contacte a su proveedor para obtener el conjunto de comandos adecuado para su revisión.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los ajustes disponibles; siempre confirme el conjunto de comandos correcto para el firmware de su dispositivo.
- La provisión del operador NB‑IoT y los ajustes APN son necesarios para que el Quectel BC26 transmita; asegúrese de que la SIM y el perfil del operador soporten NB‑IoT.
- Elija UDP o TCP según su instalación y las opciones de la herramienta del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Use UART‑TTL únicamente con el nivel de conversión y las precauciones de seguridad adecuadas; una conexión incorrecta puede dañar el dispositivo.
- Confirme el mapeo de eventos para ACC, pérdida de alimentación y salida remota tanto en la configuración del dispositivo como en Plaspy para que las alarmas y los controles funcionen como espera.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G23N con Plaspy ofrece una vía sencilla hacia la visibilidad del vehículo, la telemetría y el manejo de alarmas para flotas que se benefician de la conectividad NB‑IoT de bajo consumo. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican el onboarding: una vez que el G23N apunta al servidor y puerto de Plaspy, los datos de ubicación y eventos fluyen hacia los paneles de Plaspy para monitoreo e informes.

Learn more about Plaspy and how it can centralize fleet data and alarms at https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and installation guidance, verify details on the manufacturer site https://www.gotop.cc/ since firmware behavior and setup procedures can change over time.

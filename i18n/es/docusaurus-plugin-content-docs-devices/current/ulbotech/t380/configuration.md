---
slug: /ulbotech/t380/configuration
id: t380-configuration
sidebar_label: Configuration
title: Ulbotech - T380 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Ulbotech T380 e integrarlo con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Ulbotech T380
  - Instalación Ulbotech T380
  - Ulbotech T380 Plaspy
  - Configuración rastreador T380
  - Configuración servidor T380
  - Configuración GPS T380
  - Instalación rastreador OBDII Ulbotech
  - Integración rastreador Plaspy
  - Configuración GPS flotas
  - Configuración rastreador vehículo Plaspy
---

# Ulbotech - Configuración del T380

Esta página describe el contexto público de configuración necesario para utilizar el rastreador OBDII Ulbotech T380 con Plaspy. Resume los ajustes de servidor compartido que Plaspy requiere y explica los pasos prácticos para apuntar el dispositivo a Plaspy, de modo que la telemetría del vehículo sea visible en la plataforma. Esta guía está pensada para técnicos e integradores que preparan el T380 para flujos de trabajo de rastreo y gestión de flotas gestionados por Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta página como referencia práctica y verifique los detalles específicos del dispositivo contra la documentación de Ulbotech cuando sea necesario.

## Resumen de configuración

Preparar el T380 para que reporte en Plaspy se centra en establecer el endpoint del dispositivo y validar la conectividad, de modo que la ubicación y la telemetría de eventos lleguen de forma fiable a la plataforma. El diseño plug-and-play OBDII del T380, su módem celular y sus funciones Wi‑Fi permiten varias rutas de configuración según la preferencia del instalador.

- Apunte el dispositivo al endpoint del servidor Plaspy usando los ajustes compartidos que se indican más abajo.  
- Asegúrese de que el T380 tenga alimentación del vehículo y una SIM activa con el APN correcto o acceso a Wi‑Fi para el enlace ascendente.  
- Seleccione UDP o TCP como transporte en el dispositivo si corresponde, y configure el puerto requerido.  
- Confirme que el dispositivo obtiene fijaciones GNSS y reporta eventos del acelerómetro y entradas/salidas (I/O) a Plaspy.  
- Verifique la visibilidad en Plaspy tras aplicar los ajustes para disponer de seguimiento en tiempo real, alertas e informes.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — all devices in Plaspy use the same port  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de la configuración

- Alimentación del vehículo a través del conector OBDII para que el T380 pueda iniciar y reportar telemetría.  
- Tarjeta micro SIM activa con plan de datos y APN correcto para la región si se usa enlace celular.  
- Acceso a los métodos oficiales de configuración de Ulbotech, como depuración por micro USB, software del proveedor o herramientas documentadas del dispositivo.  
- Decidir si se usará datos LTE o puenteo/hotspot Wi‑Fi para la conectividad del dispositivo.  
- Una cuenta en Plaspy o datos de incorporación para validar que el dispositivo aparece en la plataforma.  
- Un plan de pruebas para confirmar que se reportan las fijaciones GNSS, los eventos del acelerómetro y las señales I/O tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el T380 envía actualizaciones de ubicación GNSS y telemetría de eventos al endpoint y puerto compartidos de Plaspy. El dispositivo puede usar su módem 4G LTE o el puente Wi‑Fi disponible para transmitir datos; Plaspy ingiere esta telemetría y determina automáticamente el protocolo correcto para la comunicación.

- El dispositivo debe estar configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo del rastreador y acepta telemetría en el puerto compartido.  
- Las fijaciones GNSS, los eventos del acelerómetro y los cambios de estado I/O se reenvían a Plaspy para seguimiento en vivo y alertas.  
- El puenteo Wi‑Fi o la conexión por hotspot pueden usarse para reducir el consumo celular manteniendo el enlace ascendente hacia Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Ulbotech para el T380 (modo depuración por micro USB, GUI del proveedor o herramienta documentada).  
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo host del servidor del dispositivo.  
3. Configure el puerto del servidor del dispositivo en 8888. Plaspy usa el mismo puerto para todos los dispositivos soportados.  
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP en el puerto 8888 según las necesidades de la red.  
5. Aplique o guarde la configuración del dispositivo mediante la herramienta del proveedor o la interfaz del dispositivo.  
6. Reinicie o realice un ciclo de alimentación del T380 si el fabricante lo requiere para aplicar los cambios de red.  
7. Valide que el dispositivo reporta a Plaspy comprobando la conectividad y la telemetría reciente en su cuenta o vista de la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen del firmware de Ulbotech y de la utilidad de configuración del proveedor. Ulbotech suele ofrecer interfaces de configuración por micro USB o una aplicación del proveedor; también puede haber comandos disponibles a través de la interfaz de depuración del dispositivo. Dado que los comandos varían según el firmware y la cadena de herramientas, consulte la documentación oficial de Ulbotech para ejemplos precisos y los canales de configuración soportados.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y las funciones disponibles; confirme siempre la versión de firmware del T380 antes de aplicar un flujo de trabajo de configuración.  
- La elección entre TCP o UDP puede afectar las garantías de entrega y el paso por firewalls; seleccione el transporte que mejor se adapte a su entorno de red.  
- El T380 soporta puenteo Wi‑Fi y uso de hotspot; utilice Wi‑Fi cuando esté disponible para reducir costos celulares asegurando que el dispositivo aún apunte a d.plaspy.com en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que apuntar el dispositivo al endpoint del servidor compartido es el requisito principal.  
- Mantenga las herramientas de configuración de Ulbotech y el firmware actualizados para beneficiarse de FOTA y funciones automáticas de APN.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T380 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad fiable del vehículo, alertas basadas en telemetría y capacidades de control remoto. El factor de forma OBDII plug-and-play, junto con el GNSS del T380, el acelerómetro y la salida de inmovilizador, facilita la recopilación de datos de ubicación y eventos que Plaspy utiliza para mapas en vivo, informes de comportamiento de conductores y flujos de trabajo antirobo.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles como el T380, visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante, consulte la documentación de Ulbotech en http://www.ulbotech.com/ para verificar pasos de configuración e instrucciones de firmware.

---
slug: /galileosky/galileosky_v50/configuration
id: galileosky_v50-configuration
sidebar_label: Configuration
title: GalileoSky - GALILEOSKY V5.0 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del tracker GalileoSky GALILEOSKY V5.0 con detalles del servidor Plaspy
keywords:
  - Configuración GalileoSky GALILEOSKY V5.0
  - Configuración del rastreador GalileoSky
  - Configuración de servidor GALILEOSKY V5.0
  - Configuración Plaspy GALILEOSKY V5.0
  - Guía de configuración rastreador GPS
  - Rastreo de flota GalileoSky
  - Configuración de dispositivo Plaspy
  - Configuración de rastreo vehicular
  - Rastreador GalileoSky doble SIM
  - Integración GALILEOSKY V5.0
---

# GalileoSky - Configuración de GALILEOSKY V5.0

Esta página documenta la información pública de configuración necesaria para usar el rastreador GalileoSky GALILEOSKY V5.0 con Plaspy. Se centra en los datos prácticos del servidor y en el flujo de trabajo que usted necesita para apuntar el dispositivo a Plaspy y validar la conectividad. Utilice esta guía junto con la documentación oficial de GalileoSky y las herramientas de su instalador para completar la integración.

Plaspy está diseñado para usar ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta. Los pasos del fabricante para GALILEOSKY V5.0 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme acciones específicas del equipo con los materiales oficiales de GalileoSky cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es preparar el GALILEOSKY V5.0 para que reporte de manera confiable la ubicación y el estado a la plataforma Plaspy, además de confirmar la visibilidad y el reporte de eventos en la interfaz de Plaspy. Los pasos siguientes describen los elementos prácticos que debe completar para alcanzar ese objetivo.

- Apuntar el rastreador al endpoint del servidor de Plaspy, ya sea por nombre de dominio o por IP, y establecer el puerto compartido de Plaspy.
- Elegir el protocolo de transporte compatible con el dispositivo y con Plaspy, normalmente UDP o TCP, y configurarlo en el rastreador.
- Asegurar que la(s) SIM esté(n) activa(s) y tenga(n) datos si va a usar conectividad celular, y configurar cualquier APN, roaming o preferencia de operador que requiera el dispositivo.
- Guardar y aplicar la configuración en el equipo y reiniciar si es necesario para iniciar una conexión nueva.
- Verificar que el dispositivo aparezca y envíe datos a Plaspy para que el seguimiento y la monitorización puedan comenzar.

## Ajustes del servidor Plaspy

Al configurar el GALILEOSKY V5.0 para Plaspy, utilice estos ajustes públicos exactamente como se indican:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador después de que el dispositivo establezca la conexión.

## Requisitos típicos antes de la instalación

- Confirme que el GALILEOSKY V5.0 tiene alimentación y está operativo con el cableado y la batería requeridos según las prácticas de instalación.
- Asegúrese de que una o dos tarjetas SIM activas estén instaladas y tengan datos habilitados si va a utilizar conectividad celular.
- Obtenga acceso al método oficial de configuración de GalileoSky, como la herramienta web del fabricante, la utilidad de escritorio o la lista de comandos SMS proporcionada por el proveedor.
- Verifique la cobertura de la red móvil y cualquier configuración de APN o roaming requerida para la transmisión de datos.
- Registre detalles identificadores del equipo, como el IMEI, para relacionar la unidad con sus registros en la cuenta de Plaspy o inventario.
- Mantenga a mano la versión de firmware y la revisión de hardware para consultarlas en las instrucciones del fabricante si el comportamiento difiere.

## Cómo se conecta este rastreador a Plaspy

El GALILEOSKY V5.0 se configura para reportar la ubicación y el estado del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté apuntando a Plaspy y se seleccione un protocolo de transporte, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a procesar los mensajes.

- El rastreador envía ubicación y telemetría a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- Puede configurar el equipo para usar UDP o TCP según su preferencia o los requisitos del dispositivo.
- Plaspy realiza la detección automática del protocolo del rastreador y mapea los datos entrantes a la plataforma.
- Tras una conexión exitosa, la visibilidad del dispositivo y el reporte de eventos aparecerán en Plaspy para monitorización y uso operativo.
- Para configuraciones con doble SIM, defina las redes preferidas o el comportamiento de cambio de SIM según sea necesario para que el dispositivo mantenga la conectividad de datos.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de GalileoSky suministrado por el fabricante.
2. Ingrese el endpoint del servidor de Plaspy ya sea como dominio d.plaspy.com o como la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el equipo para usar el puerto 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el GALILEOSKY V5.0 requiere la selección del transporte y guarde la preferencia.
5. Configure el APN de la SIM, el roaming o las preferencias del operador necesarias para una conectividad de datos confiable.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy y que la telemetría sea visible en la plataforma.

## Ejemplos de comandos de configuración

El GALILEOSKY V5.0 admite múltiples métodos de configuración suministrados por el fabricante que pueden incluir utilidades de escritorio, interfaces web o comandos SMS. Las sintaxis exactas de los comandos difieren según el firmware y la herramienta del proveedor, por lo que aquí no se proporcionan comandos públicos específicos.

Al usar una herramienta de configuración o el método por SMS, normalmente establecerá los siguientes valores como parte de la configuración:

- Dominio o IP del servidor a d.plaspy.com o 54.85.159.138
- Puerto a 8888
- Transporte a UDP o TCP

Debido a que los formatos de comando y las herramientas del fabricante varían según el firmware, consulte la documentación de GalileoSky o el soporte de su proveedor para la sintaxis exacta y el orden de comandos para su equipo.

## Notas de configuración

- Las diferencias en firmware pueden cambiar los elementos de menú disponibles y las sintaxis de comando; revise siempre la revisión de firmware del dispositivo antes de aplicar instrucciones.
- Para uso con doble SIM, verifique cómo el GALILEOSKY V5.0 maneja el cambio de SIM y la configuración de red preferida para mantener sesiones de datos continuas.
- Elegir TCP puede ofrecer semánticas de confirmación de conexión, mientras que UDP es más liviano; seleccione según sus necesidades operativas y el comportamiento del dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo entrante, así que apunte el rastreador a d.plaspy.com o 54.85.159.138 y use el puerto 8888 sin variar el puerto por equipo.
- Mantenga la documentación del fabricante a mano para cualquier configuración por SMS o comandos de bajo nivel que difieran por región o firmware.

## Por qué usar Plaspy con esta configuración

Usar el GalileoSky GALILEOSKY V5.0 con Plaspy ofrece a las organizaciones una vía clara para integrar un rastreador capaz y compatible con doble SIM en un flujo de trabajo centralizado de rastreo y gestión de flotas. Los ajustes públicos del servidor y la detección automática de protocolos de Plaspy simplifican la configuración inicial y reducen la cantidad de endpoints de servidor únicos que debe administrar.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más recientes sobre la configuración específica del dispositivo, información de firmware e instrucciones oficiales de GalileoSky, consulte la documentación del fabricante en https://galileosky.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.

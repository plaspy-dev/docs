---
slug: /itriangle/ts101_basic_ev_can/configuration
id: ts101_basic_ev_can-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic EV CAN Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el iTriangle TS101 Basic EV CAN a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración iTriangle TS101 Basic EV CAN
  - configuración iTriangle TS101
  - configuración TS101 Basic EV CAN Plaspy
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS iTriangle
  - configuración de servidor TS101
  - configuración de rastreo de vehículos
  - rastreo de flotas Plaspy
  - integración de telemetría EV CAN
  - compatibilidad rastreador GPS Plaspy
---

# iTriangle - Configuración TS101 Basic EV CAN

Esta página describe la configuración pública necesaria para conectar el rastreador iTriangle TS101 Basic EV CAN a Plaspy. Se centra en los valores de servidor y el flujo práctico que debe seguir para apuntar el dispositivo a Plaspy y permitir que el rastreador envíe ubicaciones y telemetría a su instancia de Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta a la plataforma. Los pasos exactos en el lado del fabricante —como la herramienta de configuración, comandos SMS o flujos por USB/Bluetooth— pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; verifique las instrucciones específicas del dispositivo con el fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TS101 Basic EV CAN para comunicarse de forma fiable con Plaspy, validar la conectividad y asegurar que el dispositivo aparezca en la plataforma para seguimiento y telemetría en tiempo real. El TS101 Basic EV CAN soporta GNSS multi-constelación y telemetría CAN, lo cual, al dirigirlo a Plaspy, permite registrar la ubicación y datos EV específicos.

- Apuntar el rastreador al endpoint de Plaspy para que los datos lleguen en tiempo real.
- Configurar el protocolo de transporte (UDP o TCP) y el puerto compartido de Plaspy para habilitar la conectividad.
- Validar la conectividad celular y los ajustes APN para que el dispositivo pueda establecer sesión de datos.
- Guardar y aplicar los ajustes en la herramienta de configuración del fabricante y confirmar que el dispositivo reporta a Plaspy.
- Verificar la visibilidad en Plaspy y revisar la telemetría como ubicación y eventos derivados del CAN.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el TS101 Basic EV CAN. Estos son los valores que Plaspy espera para conexiones entrantes de rastreadores.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que el valor del puerto es consistente entre modelos.

## Requisitos típicos antes de la configuración

- Confirmar que el TS101 Basic EV CAN tiene energía y es accesible para la configuración (por USB, Bluetooth o la herramienta web del proveedor según aplique).
- Asegurarse de que el dispositivo tiene una SIM celular válida y un plan de datos activo si usará enlace celular.
- Conocer el APN de su operador y los detalles de autenticación móvil si el operador lo requiere.
- Tener acceso al método oficial de configuración iTriangle o a la herramienta proporcionada por el proveedor para el TS101 Basic EV CAN.
- Una cuenta de Plaspy y permisos para agregar o ver dispositivos en la plataforma para la validación.
- Familiaridad con si su instalación requiere transporte UDP o TCP para el reporte del rastreador.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TS101 Basic EV CAN envía ubicación GNSS y telemetría CAN a Plaspy a través del enlace de datos celular. El dispositivo almacena registros cuando la cobertura es pobre y sube los datos guardados cuando la conectividad se restablece, permitiendo visibilidad continua en Plaspy para monitoreo de flotas y revisión de eventos.

- El rastreador reporta al endpoint compartido de Plaspy en d.plaspy.com (o 54.85.159.138) y puerto 8888.
- Elija UDP o TCP según las opciones de configuración del dispositivo; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría y los mensajes de evento entrantes.
- La telemetría como ubicación, datos del bus CAN y eventos de E/S se reenvían a Plaspy para seguimiento en vivo, reproducción histórica y alertas.
- Los registros almacenados en modo offline se envían al mismo endpoint del servidor cuando hay sesión de datos disponible.

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos para configurar el TS101 Basic EV CAN y que reporte a Plaspy. Los menús y la sintaxis de comandos exactos dependen de la herramienta de iTriangle o del firmware.

1. Acceda al método oficial de configuración de iTriangle o al software para el TS101 Basic EV CAN (USB, Bluetooth, herramienta SMS o interfaz web del proveedor).
2. En los ajustes de servidor o tracking, ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia o requisitos de instalación.
5. Ingrese el APN y cualquier detalle de autenticación celular requerido para que el dispositivo pueda establecer conexión de datos.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si la herramienta o el firmware requieren reboot para que los cambios tengan efecto.
8. Valide que el dispositivo está reportando a Plaspy revisando la visibilidad del equipo y la hora del último reporte en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El TS101 Basic EV CAN puede configurarse mediante distintos métodos del fabricante como herramientas USB, utilitarios Bluetooth o comandos SMS. Los comandos y menús exactos varían según el firmware y la herramienta, por lo que no se incluye la sintaxis específica aquí.

Si usa la herramienta de configuración iTriangle, siga su interfaz para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP si se requiere transporte. Si su implementación usa configuración por SMS, consulte la referencia de comandos SMS de iTriangle para las cadenas exactas que definen la dirección del servidor, el puerto y los parámetros APN.

Nota: Si necesita ejemplos de comandos, consulte la documentación oficial de iTriangle o contacte a su proveedor para el conjunto de comandos vigente según su firmware.

## Observaciones sobre la configuración

- Los menús de firmware y la disposición de la configuración pueden variar entre revisiones de hardware y versiones de firmware; confirme siempre el procedimiento exacto para su revisión de dispositivo.
- Elegir UDP o TCP afecta el comportamiento de entrega; UDP es más ligero mientras que TCP ofrece una sesión orientada a conexión. Plaspy acepta ambos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo cuando el dispositivo se conecte a d.plaspy.com o 54.85.159.138.
- Si configura marcadores de APN o detalles del operador, manténgalos seguros y verifique la conectividad antes de instalar el dispositivo de forma permanente.
- Al usar configuración por SMS o Bluetooth, asegúrese de seguir las instrucciones iTriangle más recientes para evitar comandos obsoletos.

## Por qué usar Plaspy con esta configuración

Usar el TS101 Basic EV CAN con Plaspy ofrece una forma práctica de consolidar la ubicación GNSS, la telemetría EV proveniente del bus CAN y eventos de E/S en una sola plataforma de gestión de flotas. Esta configuración habilita visibilidad en tiempo real, reproducción histórica y alertas basadas en eventos, lo cual apoya operaciones de flota, monitoreo de vehículos eléctricos y flujos anti-robo.

Learn more about Plaspy and how it integrates with devices like the TS101 Basic EV CAN at https://www.plaspy.com. For the most current device-specific configuration details, firmware behavior, and command references, verify information with the manufacturer at https://www.itriangle.net/.

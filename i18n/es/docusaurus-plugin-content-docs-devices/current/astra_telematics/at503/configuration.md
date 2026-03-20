---
slug: /astra_telematics/at503/configuration
id: at503-configuration
sidebar_label: Configuration
title: Astra Telematics - AT503 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Astra Telematics AT503 con Plaspy, ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Astra Telematics AT503
  - Configuración AT503
  - Configuración AT503 Plaspy
  - Configuración Astra Telematics
  - Ajustes servidor AT503
  - Configuración rastreador GPS
  - Configuración dispositivo Plaspy
  - Comandos SMS AT503
  - Aprovisionamiento BLE AT503
  - Configuración rastreador de activos
---

# Astra Telematics - AT503 Configuration

Esta página describe el contexto público de configuración para usar el Astra Telematics AT503 con Plaspy. Se enfoca en los ajustes prácticos de servidor y el flujo de trabajo necesarios para apuntar un dispositivo AT503 a la plataforma Plaspy y validar la conectividad. El contenido se basa en la guía pública del fabricante y los ejemplos de comandos provistos para el aprovisionamiento del equipo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT503 admite tanto comandos de configuración por SMS como aprovisionamiento por Bluetooth Low Energy desde un smartphone para configuración en sitio, así que elija el método que coincida con el firmware del equipo y su flujo de despliegue.

## Resumen de la configuración

El proceso prepara el AT503 para enviar ubicación y telemetría a la plataforma Plaspy configurando el APN del dispositivo y el endpoint del servidor Plaspy. Los pasos públicos mostrados aquí están pensados para que el rastreador sea visible en Plaspy y para asegurar que los reportes lleguen de forma confiable.

- Configure el APN celular y, si aplica, las credenciales del APN para que el dispositivo use datos móviles.
- Apunte el dispositivo al servidor Plaspy usando el dominio o la IP y establezca el puerto de Plaspy.
- Seleccione el transporte (UDP o TCP) en los equipos que requieran esta elección y verifique la selección en el dispositivo.
- Guarde y aplique los ajustes, luego reinicie o despierte el dispositivo si es necesario para comenzar a reportar.
- Valide la conectividad en Plaspy para confirmar que el dispositivo está enviando posición y telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP; el AT503 puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible por el método de configuración soportado en su unidad (SMS o aprovisionamiento BLE).
- Conexión celular activa en el dispositivo con una SIM o perfil eSIM activo y los ajustes APN correctos.
- Acceso al método de configuración del fabricante o a la documentación técnica del AT503.
- Conocimiento del usuario y contraseña del APN si su operador requiere credenciales.
- Un smartphone con capacidad BLE si planea aprovisionar mediante Bluetooth Low Energy.
- Una cuenta en Plaspy o acceso a la plataforma para validar los reportes del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT503 envía posición GNSS y telemetría de movimiento a Plaspy usando conectividad celular. El rastreador se apunta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, decodificar y mostrar los datos del dispositivo sin requerir puertos personalizados por equipo.

- El AT503 envía reportes de ubicación y movimiento a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los reportes pueden transmitirse por UDP o TCP según la selección en el dispositivo y la fiabilidad de la red.
- Plaspy detecta automáticamente el protocolo del rastreador para aplicar la decodificación estándar del lado del servidor cuando los datos llegan.
- La telemetría de salud y los reportes basados en movimiento permiten visibilidad y monitoreo de activos dentro de Plaspy.
- Tras la configuración, valide la visibilidad del dispositivo y las actualizaciones de posición recientes en el panel de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del AT503 (comandos SMS, app de aprovisionamiento BLE o herramienta del proveedor) según lo descrito en la documentación del fabricante.
2. Configure o confirme el APN del dispositivo y las credenciales opcionales para la red celular, de modo que haya conectividad de datos.
3. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de dirección del servidor del dispositivo o mediante comando SMS.
4. Establezca el puerto del servidor en 8888.
5. Si el equipo requiere seleccionar transporte, elija UDP o TCP según su preferencia de despliegue y las condiciones de la red.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del AT503 lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando telemetría y actualizaciones de posición recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos por mensaje de texto en el orden indicado. Cada comando debe enviarse como SMS al número del dispositivo. Los marcadores de posición se conservan para valores específicos del operador.

- Configure el APN del operador
```text
$APAD,[apn]
```

- Configure el usuario del APN (si es necesario)
```text
$APUN,[apnu]
```

- Configure la contraseña del APN (si es necesario)
```text
$APPW,[apnp]
```

- Configure el servidor GPRS con la IP del servidor Plaspy
```text
$IPAD,54.85.159.138
```

- Configure el puerto del servidor a Plaspy
```text
$PORT,8888
```

Notas sobre los marcadores de posición:
- [apn] — reemplácelo por la cadena APN de su operador.
- [apnu] — reemplace por el usuario del APN si su operador lo requiere; omita o deje en blanco si no es necesario.
- [apnp] — reemplace por la contraseña del APN si su operador lo requiere; omita o deje en blanco si no es necesario.

Estos comandos SMS reflejan los ejemplos públicos provistos por el fabricante. Si su despliegue utiliza aprovisionamiento BLE, aplique el mismo dominio o IP de servidor y los ajustes de puerto mediante la app o la herramienta de aprovisionamiento.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los campos de configuración disponibles y el formato de los comandos; verifique la versión de firmware del dispositivo antes de provisionar en masa.
- Algunas implementaciones prefieren el dominio d.plaspy.com, otras prefieren la IP numérica 54.85.159.138; ambos apuntan a Plaspy y puede usar el que mejor se adapte a su método de aprovisionamiento.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; TCP puede ofrecer confirmación de entrega en redes poco fiables, pero puede aumentar la sobrecarga de sesión.
- La configuración por SMS se muestra aquí porque es un método público común para el AT503; el aprovisionamiento BLE también está soportado para la puesta en servicio en campo en muchas versiones de firmware.
- Confirme siempre el APN, el usuario y la contraseña con el operador móvil o el proveedor de eSIM antes de enviar los comandos de configuración.

## Por qué usar Plaspy con esta configuración

Usar el AT503 con Plaspy brinda a las organizaciones visibilidad confiable a largo plazo de activos sin energía propia con mantenimiento de campo mínimo. Los ajustes del servidor Plaspy mostrados aquí permiten que el AT503 reenvíe posición GNSS y telemetría de movimiento a los paneles y alertas de Plaspy, de modo que los equipos puedan monitorear la salud del activo, su movimiento y ubicación a lo largo del tiempo.

Learn more about Plaspy on the main website https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest AT503 setup instructions and firmware notes on the manufacturer site https://astratelematics.com/.

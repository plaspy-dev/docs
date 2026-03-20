---
slug: /telic/telic_solar/configuration
id: telic_solar-configuration
sidebar_label: Configuration
title: Telic - Telic Solar Configuration
sidebar_class_name: menu_item_tracker
description: Configure Telic Solar para reportar a Plaspy usando servidor compartido y comandos SMS para rastreo confiable de activos
keywords:
  - Configuración Telic Solar
  - Instalación Telic Solar
  - Telic Solar Plaspy
  - Configuración GPS Telic
  - Configuración servidor Telic Solar
  - Configuración SMS Telic Solar
  - Configuración rastreador Telic
  - Configuración plataforma Telic Solar
  - Guía Telic Solar
  - Configuración dispositivo Telic
---

# Telic - Configuración de Telic Solar

Esta página describe el contexto público de configuración para usar el rastreador Telic Solar con la plataforma Plaspy. Explica los ajustes de servidor compartido de Plaspy que debe aplicar y resume los comandos SMS prácticos que suelen usarse para apuntar un dispositivo Telic Solar a Plaspy. La descripción del dispositivo Telic Solar sirve como base para esta guía y resalta su idoneidad para el rastreo de activos a largo plazo con energía solar y telemetría de sensores interiores.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el Telic Solar suele aceptar comandos de configuración vía SMS y emplea parámetros GPRS como el APN y la entrada de servidor GPRS para reenviar datos a Plaspy. Use este contenido como orientación pública y práctica y verifique los detalles específicos del dispositivo en la documentación oficial de Telic cuando sea necesario.

## Resumen de configuración

Esta configuración prepara un dispositivo Telic Solar para enviar su ubicación y la telemetría de sensores a Plaspy usando el endpoint y el puerto compartidos de la plataforma. El objetivo es establecer el APN y los parámetros del servidor GPRS, seleccionar la opción de transporte si es necesario y validar que el dispositivo reporte correctamente a Plaspy para que el activo sea visible en la plataforma.

- Configure el APN de la red móvil y, si aplica, las credenciales del APN para que el dispositivo pueda establecer una sesión GPRS.
- Configure el dispositivo para que reporte a Plaspy introduciendo el endpoint y el puerto del servidor Plaspy.
- Elija UDP o TCP si el rastreador requiere seleccionar explícitamente el transporte.
- Active el modo de reporte GPRS en el dispositivo y verifique la conectividad.
- Confirme que el dispositivo aparece y envía datos en Plaspy para que los tableros y las alertas puedan consumir su telemetría.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores corresponden al endpoint público y al puerto de Plaspy a los que deben apuntar los dispositivos Telic Solar cuando reenvían telemetría a Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección automática del protocolo en las conexiones entrantes.

## Requisitos previos comunes

- Un dispositivo Telic Solar alimentado y accesible con recepción de comandos SMS habilitada.
- Una tarjeta SIM operativa con plan de datos y los detalles de APN correctos para el operador móvil.
- Conocimiento del método de configuración soportado por su unidad (el SMS es comúnmente usado en Telic Solar).
- La contraseña por defecto del dispositivo si los comandos la requieren (el ejemplo de configuración usa 123456 como contraseña).
- Un teléfono móvil o herramienta de gestión capaz de enviar SMS al dispositivo.
- Acceso a la documentación de producto de Telic para instrucciones específicas de firmware y ajustes de seguridad.

## Cómo se conecta este rastreador a Plaspy

Telic Solar se configura para reenviar su telemetría y ubicación al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos. En el dispositivo esto normalmente implica configurar las credenciales APN, establecer la dirección del servidor y activar el reporte GPRS para que el dispositivo abra una sesión de datos y entregue paquetes a Plaspy.

- El dispositivo establece una conexión GPRS usando el APN configurado para llegar a Internet.
- Se configura una entrada de servidor GPRS que apunta a Plaspy usando la IP o el dominio del servidor y el puerto 8888.
- El dispositivo usa UDP o TCP para enviar paquetes; seleccione el transporte requerido por su dispositivo y red.
- Plaspy recibe la conexión en el puerto 8888 y detecta automáticamente el protocolo del rastreador para parsear los mensajes.
- Una vez activo el reporte, Plaspy muestra la ubicación, la telemetría de sensores internos y el estado de energía para monitoreo y alertas.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Telic para su unidad (los comandos SMS son frecuentemente usados en Telic Solar).
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888 en la configuración del servidor.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN y, si corresponde, el usuario y la contraseña del APN para que el dispositivo pueda abrir una sesión de datos GPRS.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el dispositivo esté reportando a Plaspy y que sea visible en la plataforma.

## Ejemplos de comandos de configuración

El Telic Solar comúnmente acepta comandos de configuración por SMS. Los siguientes comandos SMS de ejemplo son extractos públicos de la guía de configuración del dispositivo. Los comandos de muestra usan la contraseña por defecto del dispositivo 123456. Conserve y reemplace los marcadores de posición como [apn], [apnu] y [apnp] con los valores de su operador.

1. Reinicio opcional a fábrica (solo si necesita volver a los valores predeterminados)
```text
begin123456
```

2. Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

3. Establecer el APN del operador (reemplace [apn] con el APN de su operador)
```text
apn123456 [apn]
```

4. Establecer usuario y contraseña del APN cuando sean requeridos (reemplace los marcadores)
```text
up123456 [apnu] [apnp]
```

5. Configurar el servidor GPRS a Plaspy por IP y puerto (este ejemplo usa la IP pública y el puerto de Plaspy)
```text
adminip123456 54.85.159.138 8888
```

6. Cambiar a modo GPRS (dos variantes comunes)
```text
gprs123456,1,1
```
o
```text
gprs123456
```

7. Verificar la configuración actual del dispositivo
```text
check123456
```

Notas sobre los marcadores de posición:
- [apn] es la cadena APN proporcionada por el operador celular.
- [apnu] y [apnp] son, respectivamente, el usuario y la contraseña opcionales del APN.
- 123456 se muestra como la contraseña predeterminada en el ejemplo público; confirme la contraseña de su dispositivo antes de enviar comandos.

## Notas de configuración

- La configuración por SMS es de uso frecuente en Telic Solar, pero las herramientas del fabricante o el firmware pueden ofrecer métodos alternativos; siga las instrucciones oficiales de Telic para su versión de firmware.
- Tenga en cuenta que las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; verifique el soporte de comandos para la revisión de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; Plaspy soporta ambos transportes y aceptará datos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección automática del protocolo del rastreador, por lo que apuntar el dispositivo a d.plaspy.com o a la IP de Plaspy con el puerto 8888 suele ser suficiente.
- Si emplea comandos de reseteo, trate el restablecimiento de fábrica como opcional y solo realícelo si es necesario, ya que puede borrar configuraciones personalizadas.

## Por qué usar Plaspy con esta configuración

Usar Telic Solar con Plaspy proporciona a las organizaciones visibilidad persistente sobre bienes de capital móviles y activos en contenedores, reduciendo el mantenimiento gracias al diseño con energía solar del dispositivo. Configurar el dispositivo para que reporte a Plaspy mediante el endpoint y puerto compartidos permite dashboards consolidados, alertas e informes históricos que combinan ubicación, telemetría de sensores interiores y estado de energía para obtener información operativa.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time; verify the latest Telic Solar setup information on the official manufacturer website https://www.telic.de.

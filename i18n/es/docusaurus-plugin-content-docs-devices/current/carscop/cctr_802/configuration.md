---
slug: /carscop/cctr_802/configuration
id: cctr_802-configuration
sidebar_label: Configuration
title: Carscop - CCTR-802 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Carscop CCTR-802 con los ajustes de servidor de Plaspy y ejemplos SMS para reportes GPRS
keywords:
  - Configuración Carscop CCTR-802
  - Configuración rastreador GPS Carscop
  - CCTR-802 Plaspy
  - Guía de configuración CCTR-802
  - Configuración servidor Carscop
  - Configuración APN rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración GPRS rastreador
  - Comandos SMS de configuración
  - Gestión de flotas Plaspy
---

# Carscop - CCTR-802 Configuration

Esta página ofrece contexto público de configuración para usar el rastreador GPS Carscop CCTR-802 con la plataforma de flotas Plaspy. Reúne los elementos prácticos que necesitará para apuntar el dispositivo a Plaspy, explica los valores de servidor requeridos y presenta ejemplos de configuración por SMS que se usan comúnmente en este modelo. El contenido se basa en información pública del dispositivo y ejemplos proporcionados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos solo tendrá que aplicar el mismo endpoint y puerto. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, así que verifique los detalles específicos del dispositivo cuando sea necesario.

## Resumen de configuración

El objetivo al configurar un Carscop CCTR-802 para Plaspy es dejar el dispositivo preparado para comunicarse por GPRS con el endpoint compartido de Plaspy, confirmar la conectividad y habilitar el reporte continuo para que el dispositivo sea visible y administrable dentro de Plaspy.

- Configure el APN del dispositivo y las credenciales del operador si son necesarias para acceder a los servicios de datos GPRS.
- Apunte el rastreador a Plaspy introduciendo el dominio o la IP del servidor Plaspy y el puerto compartido.
- Seleccione el método de transporte (UDP o TCP) en los dispositivos que requieran elegir transporte.
- Active o confirme cualquier ajuste de keepalive u online para que el rastreador mantenga reportes regulares.
- Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma para seguimiento y alertas.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos previos

- Una tarjeta SIM funcional con un plan de datos activo y la información APN correcta para su operador móvil.
- Acceso al dispositivo para poder enviar comandos SMS de configuración o usar la herramienta de configuración oficial de Carscop, según las capacidades del equipo.
- El dispositivo cargado o conectado a alimentación para completar la configuración y reportar al servidor.
- Conocimiento de la contraseña de administración del dispositivo; en el ejemplo público aquí se usa la contraseña por defecto 123456.
- Acceso al manual de usuario de Carscop o a las instrucciones del proveedor para cualquier paso específico del dispositivo o diferencias de firmware.

## Cómo se conecta este rastreador a Plaspy

El Carscop CCTR-802 usa su conexión GPRS para subir datos de ubicación y estado al endpoint y puerto del servidor Plaspy, de modo que el dispositivo sea visible en la plataforma para monitoreo y alertas. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican las implementaciones entre distintos modelos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy y al puerto indicado.
- Los datos del dispositivo se suben vía GPRS para que Plaspy reciba actualizaciones de posición y mensajes de estado.
- Los comandos de keepalive u online ayudan a que el dispositivo permanezca visible en Plaspy entre actualizaciones de posición.
- Plaspy detecta el protocolo del rastreador automáticamente, evitando la necesidad de especificar detalles de protocolo en la mayoría de los casos.
- Si GPRS no está disponible, el almacenamiento local del dispositivo puede retener los registros hasta que se restablezca la conectividad (esto depende del comportamiento especificado por el fabricante).

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Carscop, como los comandos SMS o la herramienta de configuración del fabricante tal como lo documenta Carscop.
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto 8888 en la configuración del servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
5. Aplique o guarde la configuración en el dispositivo usando comandos SMS o mediante la herramienta de Carscop.
6. Reinicie o restablezca el dispositivo si el equipo o el firmware lo requieren para cargar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo en la plataforma y confirmando las actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El Carscop CCTR-802 puede configurarse mediante comandos SMS. Los siguientes ejemplos públicos se presentan en el orden en que comúnmente se aplican. La muestra utiliza la contraseña por defecto del dispositivo 123456 cuando es necesario.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar los valores predeterminados):
```text
RESET*123456
```

- Establecer la zona horaria a UTC 0:
```text
TIMEZONE*123456*+00
```

- Configurar el APN del operador (reemplazar {{apn}} con el APN de su operador):
```text
APN*123456*{{apn}}
```

- Establecer usuario y contraseña del APN si su operador lo requiere (reemplazar {{apnu}} y {{apnp}} con las credenciales). Incluya este comando solo si su operador solicita autenticación APN:
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Configurar el servidor GPRS con la IP y el puerto de Plaspy. Este ejemplo usa la IP pública y el puerto de Plaspy:
```text
IP*123456*54.85.159.138,8888
```

- Habilitar keep online o keepalive para ayudar a que el rastreador permanezca visible:
```text
KEEPONLINE*123456
```

Notas sobre los marcadores:
- {{apn}} — reemplace con la cadena APN de su operador móvil.
- {{apnu}} — reemplace con el usuario APN si es necesario.
- {{apnp}} — reemplace con la contraseña APN si es necesario.
- El ejemplo usa la contraseña del dispositivo 123456 tal como aparece en ejemplos públicos; si su dispositivo usa otra contraseña, sustitúyala en los comandos.

## Notas de configuración

- La configuración vía SMS está documentada para este modelo según ejemplos públicos; siga la sintaxis SMS del fabricante de forma precisa al enviar comandos.
- Algunos instaladores prefieren usar el dominio d.plaspy.com cuando el firmware lo soporta; el ejemplo anterior usa la IP de Plaspy tal como aparece en comandos públicos del dispositivo. Puede usar el dominio o la IP según lo permita el firmware del equipo.
- El comportamiento y los comandos disponibles pueden variar entre versiones de firmware y revisiones de producción; consulte la documentación de Carscop para la sintaxis específica de su versión de firmware.
- Elija UDP o TCP según las opciones del dispositivo; Plaspy acepta conexiones en ambos transportes en el puerto compartido y detectará el protocolo automáticamente.
- Si el dispositivo retiene registros cuando está sin conexión, confirme cómo se suben los datos tras la reconexión para evitar lagunas en los reportes.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Carscop CCTR-802 ofrece un endpoint centralizado para recopilar las subidas GPRS de ubicación, simplificando la visibilidad de la flota y el monitoreo de eventos entre múltiples dispositivos. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad por dispositivo y ayudan a estandarizar las implementaciones.

Learn more about Plaspy and how it supports device integration on the Plaspy website https://www.plaspy.com. For the latest device-specific configuration methods, firmware details, and manufacturer instructions, verify information with Carscop at http://www.carscop.com/ as manufacturer specifications may change over time.

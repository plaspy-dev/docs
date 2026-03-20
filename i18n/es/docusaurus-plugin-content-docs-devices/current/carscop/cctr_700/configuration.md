---
slug: /carscop/cctr_700/configuration
id: cctr_700-configuration
sidebar_label: Configuration
title: Carscop - CCTR-700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CCTR-700 para conectarlo a Plaspy mediante servidor compartido y comandos SMS o GPRS
keywords:
  - Carscop CCTR-700 configuración
  - Carscop CCTR-700 instalación
  - Carscop CCTR-700 configuración servidor
  - configuración rastreador GPS Carscop
  - configuración rastreador Plaspy
  - ajustes servidor Plaspy
  - comandos SMS rastreador GPS
  - configuración GPRS rastreador
  - configuración plataforma seguimiento vehicular
  - guía integración rastreador
---

# Carscop - Configuración del CCTR-700

Esta página describe el contexto público de configuración para usar el rastreador GPS Carscop CCTR-700 con la plataforma Plaspy. Reúne la información práctica y no propietaria necesaria para apuntar un CCTR-700 a Plaspy y explica cómo el dispositivo puede comunicarse con la plataforma mediante comandos SMS o GPRS cuando están soportados.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y flujos aquí como una referencia pública práctica y verifique los detalles del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen de configuración

El proceso de configuración prepara el CCTR-700 para enviar datos de ubicación y estado a Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. Para este rastreador, la configuración se realiza típicamente mediante comandos SMS o ajustes GPRS que definen el APN, el servidor y el comportamiento para que el dispositivo reporte al endpoint compartido de Plaspy.

- Configure el APN del dispositivo y, si corresponde, las credenciales del APN para permitir la transmisión de datos por GPRS.
- Apunte el rastreador a Plaspy usando el endpoint y el puerto del servidor compartido.
- Elija el modo de transporte (UDP o TCP) si el dispositivo requiere una selección.
- Valide la conectividad y confirme que la unidad reporte a Plaspy.
- Opcionalmente, realice un restablecimiento de fábrica inicial o ajuste la zona horaria para estandarizar el comportamiento del equipo antes del despliegue.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un dispositivo CCTR-700 con alimentación y accesible, capaz de recibir comandos SMS o aceptar configuración GPRS según lo indique el fabricante.
- Una tarjeta SIM válida insertada con un plan de datos y capacidad de SMS para el registro GPRS y la entrega de comandos cuando sea necesario.
- La contraseña por defecto del dispositivo si es requerida para comandos SMS; los ejemplos públicos usan la contraseña por defecto 123456.
- Acceso al método oficial de configuración Carscop o a la documentación para la revisión de firmware específica.
- Una cuenta o acceso a la plataforma Plaspy para agregar y verificar el dispositivo una vez que empiece a reportar.
- Confirmación de los valores de APN correctos con el operador móvil correspondiente a la SIM en uso.

## Cómo se conecta este rastreador a Plaspy

El CCTR-700 puede enviar informes de ubicación y alarmas a Plaspy ya sea vía GPRS (IP) o entregando la ubicación por SMS, lo que puede incluir enlaces de mapa según la configuración del dispositivo. Para el reporte por GPRS, el dispositivo se configura con el endpoint de Plaspy para que la telemetría se entregue directamente en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los informes de ubicación y los mensajes de eventos se envían por GPRS al servidor IP o dominio configurado.
- Se pueden usar comandos SMS para establecer APN, IP del servidor y comportamiento keepalive antes de que comiencen las sesiones de datos.
- Una vez configurado, el dispositivo aparece en Plaspy y puede ser monitoreado para ubicaciones y actualizaciones de estado.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que la selección explícita de protocolo solo es necesaria si el dispositivo exige una preferencia de transporte.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Carscop para su dispositivo y firmware, típicamente mediante comandos SMS o una herramienta del proveedor.
2. Configure el APN del operador de la SIM utilizando la cadena APN correcta de su red móvil.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y ajuste el puerto del servidor a 8888.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte y el instalador tiene una preferencia.
5. Aplique o guarde la configuración en el dispositivo; para configuraciones vía SMS esto implica enviar los comandos SMS requeridos.
6. Reinicie el dispositivo si el fabricante lo requiere o después de cambios importantes como servidor o APN.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado y la ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El CCTR-700 soporta configuración basada en SMS. Los siguientes ejemplos públicos de comandos SMS se muestran en el HTML de configuración público del fabricante. La contraseña por defecto del dispositivo utilizada en estos ejemplos es 123456. Mantenga los marcadores de posición tal como aparecen y reemplácelos por los valores del operador cuando sea necesario.

- Restaurar configuración de fábrica (paso inicial opcional)
```text
RESET*123456
```

- Establecer la zona horaria en UTC 0
```text
TIMEZONE*123456*+00
```

- Configurar el APN del operador (reemplazar [apn] con el APN de su operador)
```text
APN*123456*[apn]
```

- Configurar nombre de usuario y contraseña del APN cuando sea necesario (reemplazar [apnu] y [apnp] con sus credenciales)
```text
USERNAME*123456*[apnu]*[apnp]
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
IP*123456*54.85.159.138,8888
```
  - Note: you can replace the IP with the domain d.plaspy.com in vendor tools or commands that accept a hostname instead of an IP.

- Mantener el rastreador en línea (habilitar comportamiento keepalive)
```text
KEEPONLINE*123456
```

Explicación de los marcadores:
- [apn] — la cadena APN proporcionada por el operador móvil para conexiones de datos.
- [apnu] — nombre de usuario del APN si el operador lo requiere.
- [apnp] — contraseña del APN si el operador la requiere.

Envíe estos comandos como mensajes SMS al número del dispositivo. Si usa un comando de restablecimiento, tíñalo como opcional y utilícelo solo al inicializar o para solucionar problemas.

## Notas de configuración

- La configuración por SMS es comúnmente soportada por el CCTR-700; siga el formato SMS exacto que exige su versión de firmware.
- Las versiones de firmware y las herramientas del proveedor pueden cambiar los formatos de comando o las funciones disponibles; confirme siempre con la documentación más reciente de Carscop.
- Cuando haya elección, UDP suele utilizarse por menor sobrecarga en la telemetría, mientras que TCP puede ser más fiable en la entrega; elija según su red y preferencias operativas.
- Usar el dominio d.plaspy.com en lugar de la IP puede simplificar cambios futuros si Plaspy actualiza endpoints; el dispositivo acepta cualquiera de las dos opciones cuando el comando o la herramienta admite nombres de host.
- Verifique el APN y las credenciales del operador antes de configurar el servidor para evitar retrasos en la conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el Carscop CCTR-700 para reportar a Plaspy proporciona una forma sencilla de centralizar el monitoreo de ubicación, eventos y estado de los dispositivos en una flota o conjunto de rastreadores personales. Con los ajustes de servidor compartido de Plaspy y la detección automática de protocolo, puede aplicar un enfoque de configuración coherente en dispositivos compatibles y reducir la variación por unidad durante el despliegue.

Para saber más sobre Plaspy y cómo se integran dispositivos como el Carscop CCTR-700 con la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes y el comportamiento del firmware verifique los detalles con el fabricante en http://www.carscop.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

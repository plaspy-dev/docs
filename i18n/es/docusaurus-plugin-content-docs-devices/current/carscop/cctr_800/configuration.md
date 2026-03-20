---
slug: /carscop/cctr_800/configuration
id: cctr_800-configuration
sidebar_label: Configuration
title: Carscop - CCTR-800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Carscop CCTR-800 a Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración Carscop CCTR-800
  - Configuración rastreador GPS Carscop
  - Configuración CCTR-800 Plaspy
  - Configuración servidor Carscop
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración APN rastreador
  - Configuración SMS rastreador
  - Configuración rastreador portátil
  - Seguimiento de flotas Plaspy
---

# Carscop - Configuración del CCTR-800

Esta página documenta el contexto público de configuración para usar el rastreador portátil Carscop CCTR-800 con la plataforma Plaspy. Se centra en los ajustes de servidor y del dispositivo que normalmente se requieren para apuntar el rastreador a Plaspy, y recopila ejemplos públicos de comandos SMS del fabricante cuando están disponibles.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Esta guía explica los pasos prácticos y los comandos públicos conocidos para el CCTR-800 y remite a la documentación oficial de Carscop para detalles específicos del equipo.

## Panorama de la configuración

El objetivo al configurar el CCTR-800 para Plaspy es preparar el rastreador para que informe de forma fiable la ubicación y el estado del dispositivo al endpoint del servidor de Plaspy y aparezca en su cuenta de Plaspy. La configuración típica abarca acceso a la red (APN), destino del servidor, selección de transporte y una verificación final para confirmar que el equipo es visible en la plataforma.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que el rastreador use GPRS y alcance Plaspy
- Apunte el dispositivo al endpoint y puerto del servidor de Plaspy
- Seleccione UDP o TCP como transporte en el rastreador si la interfaz del equipo lo requiere
- Utilice los comandos SMS públicos proporcionados o la herramienta del fabricante para aplicar la configuración y, si es necesario, restablecer a valores de fábrica antes de la puesta en marcha
- Verifique que el rastreador envía datos y aparece en Plaspy después de la configuración

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y puede detectar automáticamente el protocolo correcto una vez que el rastreador esté apuntando al servidor y puerto de Plaspy.

## Requisitos habituales antes de la configuración

- Un CCTR-800 con batería cargada y acceso a su configuración por SMS o a la herramienta oficial de configuración de Carscop
- Una tarjeta SIM con datos activos (GPRS) y capacidad de SMS insertada en el rastreador según sea necesario
- El APN del operador y, opcionalmente, usuario y contraseña del APN (en los ejemplos de comandos se usan marcadores)
- Acceso a la contraseña por defecto del dispositivo si se requiere para comandos SMS (el valor por defecto mostrado en los comandos públicos)
- Un método para recibir o visualizar las respuestas SMS del dispositivo para confirmar la aceptación de los ajustes
- Confirmación de la versión de firmware y cualquier nota del fabricante que afecte la sintaxis de los comandos

## Cómo se conecta este rastreador a Plaspy

El CCTR-800 se configura para informar ubicación y estado al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar los mensajes entrantes y mostrar los datos del dispositivo. Plaspy detectará el protocolo automáticamente después de que el equipo comience a enviar datos al endpoint correcto.

- El rastreador usa GPRS para abrir una conexión de datos hacia el servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo y las condiciones de red
- El equipo envía actualizaciones periódicas de ubicación e informes de eventos al endpoint de Plaspy
- Plaspy recibe los datos y los asigna automáticamente al protocolo correcto del rastreador
- Una vez que informe, el rastreador será visible en Plaspy para monitoreo, reproducción histórica y alertas

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Carscop, ya sea mediante comandos SMS del dispositivo o el software de configuración del fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija el transporte UDP o TCP en el dispositivo si el rastreador solicita seleccionar transporte durante la configuración.
5. Configure el APN del dispositivo y, si aplica, el usuario y contraseña del APN para que pueda establecer la conexión de datos GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el equipo o las instrucciones recomiendan un reinicio.
7. Valide que el dispositivo informe a Plaspy revisando su visibilidad en la cuenta de Plaspy y confirmando la recepción de mensajes de posición.

Si utiliza configuración por SMS, siga el orden de comandos del fabricante y verifique las respuestas del rastreador antes de dar por concluida la configuración.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS son ejemplos públicos para el CCTR-800. La configuración de muestra usa la contraseña por defecto del dispositivo 123456. Reemplace los marcadores donde corresponda.

- Restablecer a valores de fábrica (paso inicial opcional)
```
RESET*123456
```

- Ajustar zona horaria a UTC+0
```
TIMEZONE*123456*+00
```

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador)
```
APN*123456*{{apn}}
```

- Establecer usuario y contraseña del APN (opcional; reemplace {{apnu}} y {{apnp}} por las credenciales)
```
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Configurar el servidor GPRS a Plaspy por IP y puerto
```
IP*123456*54.85.159.138,8888
```

- Mantener el rastreador en línea (comando de ejemplo para mantener el estado online)
```
KEEPONLINE*123456
```

Notas sobre los marcadores
- {{apn}} — el valor APN de su operador móvil
- {{apnu}} — usuario APN si su operador lo requiere
- {{apnp}} — contraseña APN si su operador lo requiere

El orden anterior refleja una secuencia común: reset opcional, zona horaria, APN, credenciales APN, endpoint del servidor y keepalive. Use las respuestas del dispositivo para confirmar que cada comando se ejecutó correctamente.

## Observaciones sobre la configuración

- La configuración por SMS está soportada y se muestra arriba; algunos instaladores prefieren el software o la plataforma del fabricante para actualizaciones masivas o por aire.
- Las versiones de firmware y las revisiones regionales del equipo pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique siempre la documentación actual del fabricante.
- Elegir TCP frente a UDP depende de la confiabilidad de la red y de su preferencia; Plaspy soporta ambos transportes y aceptará datos en el puerto 8888.
- Mantenga segura la contraseña del dispositivo; los ejemplos usan la contraseña por defecto pública 123456, que debería cambiarse en despliegues productivos.
- Si el equipo informa mediante nombre de dominio, puede usar d.plaspy.com; usar la IP 54.85.159.138 es una opción alternativa cuando hay restricciones DNS.

## Por qué usar Plaspy con esta configuración

Configurar el Carscop CCTR-800 para informar a Plaspy ofrece a las organizaciones una forma sencilla de centralizar el rastreo, monitorear movimientos y acceder a datos históricos de ubicación sin la complejidad de configurar un servidor por dispositivo. Dado que Plaspy utiliza una dirección y un puerto compartidos y detecta automáticamente el protocolo del rastreador, el proceso de integración se enfoca en establecer el acceso a la red y dirigir el dispositivo al endpoint de Plaspy.

Para obtener más información sobre Plaspy y los servicios que ofrece visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y la documentación más reciente de Carscop, verifique los detalles de configuración con el fabricante en http://www.carscop.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

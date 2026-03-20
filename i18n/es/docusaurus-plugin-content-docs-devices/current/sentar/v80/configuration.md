---
slug: /sentar/v80/configuration
id: v80-configuration
sidebar_label: Configuration
title: Sentar - V80 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Sentar V80 y apuntarlo al servidor de Plaspy mediante ajustes y comandos SMS
keywords:
  - configuración Sentar V80
  - instalación Sentar V80
  - configuración servidor Sentar V80
  - Sentar V80 Plaspy
  - rastreador GPS Sentar V80
  - configuración SMS Sentar V80
  - ajustes APN Sentar V80
  - configuración software seguimiento Sentar V80
  - configuración plataforma Sentar V80
  - configuración rastreador GPS Sentar
---

# Sentar - Configuración del V80

Esta página documenta el contexto público de configuración para utilizar el rastreador Sentar V80 con Plaspy. Reúne los pasos clave y los comandos SMS de uso público necesarios para apuntar el dispositivo a Plaspy y así recibir reportes de ubicación y estado del equipo. El contenido está pensado para usuarios técnicos e instaladores que preparan el V80 para su integración con la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. Cuando están disponibles, esta guía incluye los comandos SMS del V80 usados en flujos públicos habituales, pero recomendamos validar los detalles específicos de firmware con Sentar.

## Resumen de la configuración

El proceso de configuración del Sentar V80 prepara el rastreador para comunicarse de manera fiable con el backend de Plaspy y para reportar ubicación y estado del dispositivo para su monitoreo. El V80 permite configurar mediante SMS y ajustar parámetros GPRS que se usan comúnmente para integrarlo con plataformas en la nube como Plaspy.

- Configure el rastreador para que envíe datos al endpoint y puerto del servidor Plaspy para que la plataforma pueda recibir los reportes.
- Establezca el APN y los parámetros GPRS del dispositivo para que tenga conectividad de datos móviles para el envío de informes.
- Verifique la identidad del dispositivo y su registro en la red usando comandos de IMSI o consultas de estado.
- Opcionalmente realice un restablecimiento de fábrica antes de la primera configuración para asegurar un estado conocido.
- Valide el reporting confirmando que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los ajustes públicos de Plaspy que se usan para apuntar el Sentar V80 a la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un rastreador Sentar V80 cargado y con alimentación, listo para recibir configuración por SMS o GPRS.
- Una tarjeta SIM válida con datos móviles y SMS habilitados y con cualquier PIN requerido eliminado.
- Acceso al IMEI del dispositivo y a la contraseña del equipo (la contraseña por defecto se muestra en los comandos de ejemplo más abajo).
- El APN del operador, nombre de usuario y contraseña del APN para la SIM (o marcadores de posición si el operador los proporciona).
- Acceso al método oficial de configuración de Sentar, como comandos SMS o la herramienta de configuración del proveedor.
- Un medio para recibir mensajes de verificación del dispositivo (un teléfono para respuestas SMS o acceso a la cuenta de Plaspy para observar reportes).

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Sentar V80 envía periódicamente mensajes de ubicación y estado al endpoint del servidor Plaspy para que la posición y el estado sean visibles en la plataforma. El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos.

- El rastreador se apunta al dominio o IP del servidor Plaspy y al puerto 8888 para la carga de datos.
- El transporte de datos puede usar UDP o TCP según la selección en la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor.
- El dispositivo envía cargas periódicas y comprobaciones de estado que aparecen como telemetría en Plaspy.
- La verificación se realiza comprobando el estado del dispositivo en Plaspy o usando el comando de verificación por SMS del rastreador.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Sentar para el V80, como comandos SMS o el software del proveedor según la documentación de Sentar.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor.
3. Establezca el valor de puerto en 8888, que es el puerto usado por Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP para el transporte si el V80 requiere escoger un tipo de transporte.
5. Configure el APN del dispositivo y las credenciales APN que requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo necesita reiniciarse para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece en su cuenta de Plaspy o usando el comando de verificación del dispositivo para confirmar los ajustes.

## Ejemplos de comandos de configuración

El Sentar V80 puede configurarse enviando comandos SMS al dispositivo. Los ejemplos públicos que siguen usan la contraseña por defecto del dispositivo 123456. Conserve los marcadores de posición como [apn], [apnu] y [apnp] al sustituir los valores de su operador. Reemplace xxxyy con la cadena MCC y MNC si es necesario.

- Restablecimiento de fábrica inicial opcional (usar solo si necesita devolver el dispositivo a valores de fábrica):
```
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0:
```
pw,123456,lz,0,0#
```

- Consultar el IMSI e información del operador de red:
```
pw,123456,imsi#
```

- Configurar el APN del operador donde [apn] es el APN, [apnu] es el usuario APN, [apnp] es la clave APN, y xxxyy es el MCC y MNC combinados:
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto 8888 (este comando apunta el dispositivo a Plaspy):
```
pw,123456,ip,54.85.159.138,8888#
```

- Establecer el intervalo de envío de posición a 300 segundos:
```
pw,123456,upload,300#
```

- Verificar los ajustes actuales del rastreador:
```
pw,123456,ts#
```

Notas sobre los marcadores de posición:
- [apn] es el nombre del punto de acceso de datos móviles para el operador de la SIM.
- [apnu] es el usuario del APN si lo requiere el operador.
- [apnp] es la contraseña del APN si la requiere el operador.
- xxxyy son los valores combinados MCC y MNC cuando el dispositivo los necesita para seleccionar el operador.

## Notas de configuración

- Las versiones de firmware de Sentar y las herramientas del proveedor pueden cambiar la sintaxis de comandos y las funciones disponibles; confirme que los comandos coinciden con el firmware de su dispositivo.
- El V80 admite flujos de configuración por SMS como los mostrados arriba; asegúrese de enviar los SMS desde un número permitido por el dispositivo si el rastreador usa lista blanca de números.
- Elija TCP o UDP según las necesidades de la instalación; ambos son compatibles y Plaspy aceptará datos en el puerto 8888 usando cualquiera de los transportes.
- Tenga presente la contraseña por defecto del dispositivo; si su equipo tiene una contraseña diferente establecida por el proveedor, use la contraseña activa en los comandos.
- Utilizar el comando IP a 54.85.159.138 configura el rastreador para enviar a Plaspy; cuando la herramienta lo soporte, puede usar el dominio d.plaspy.com en herramientas de configuración que acepten nombres de host.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar V80 para reportar a Plaspy ofrece una forma sencilla de centralizar la recolección de información de ubicación y estado de los dispositivos hijos en una sola plataforma. Con los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy, la integración se simplifica: apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y validar los reportes suele ser suficiente para comenzar a recibir datos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes, comportamiento de firmware y detalles oficiales de configuración consulte la documentación del fabricante en http://www.sentarsmart.com/ ya que los métodos y el firmware pueden cambiar con el tiempo.

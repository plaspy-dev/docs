---
slug: /sentar/q60_pet/configuration
id: q60_pet-configuration
sidebar_label: Configuration
title: Sentar - Q60 Pet Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador Sentar Q60 Pet con ajustes de servidor Plaspy comandos SMS y pasos prácticos de integración
keywords:
  - configuración Sentar Q60 Pet
  - instalación Sentar Q60 Pet
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración rastreador para mascotas
  - configuración GPRS rastreador
  - guía configuración Sentar
  - configuración Q60 Pet Plaspy
  - comandos SMS rastreador
  - ajustes servidor Plaspy
---

# Sentar - Configuración Q60 Pet

Esta página explica el contexto público de configuración para usar el rastreador Sentar Q60 Pet con la plataforma Plaspy. Aquí encontrará los ajustes del servidor Plaspy a los que debe apuntar el dispositivo, los comandos SMS publicados por el fabricante y los pasos prácticos para que el rastreador reporte en tiempo real y pueda monitorear a su mascota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que esta documentación se centra en las acciones públicas y prácticas necesarias para conectar un Q60 Pet a Plaspy respetando los comandos publicados por Sentar.

## Resumen de la configuración

Configurar el Q60 Pet para Plaspy prepara el rastreador para enviar ubicación y telemetría básica por GSM GPRS a Plaspy y valida que el dispositivo sea visible en la plataforma. El modelo soporta comandos de configuración por SMS según lo publicado por Sentar; seguir esos comandos le permitirá establecer la zona horaria, APN, endpoint del servidor y el intervalo de reporte antes de validar la conexión en Plaspy.

- Apunte el dispositivo al dominio o IP del servidor Plaspy para que los uplinks GPRS lleguen a Plaspy.
- Configure el APN del operador y las credenciales necesarias para que el rastreador tenga conectividad de datos.
- Establezca el intervalo de reporte y confirme que la telemetría del dispositivo llegue a Plaspy.
- Use los comandos SMS del fabricante para la configuración inicial y la diagnosis.
- Opcionalmente realice un restablecimiento de fábrica al configurar un dispositivo por primera vez para asegurar un estado conocido.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos configurados para Plaspy usan el mismo puerto y la plataforma intenta detectar y manejar automáticamente el protocolo del rastreador que utilice.

## Requisitos habituales antes de la configuración

- Un Q60 Pet con carga suficiente y una tarjeta Micro SIM activa instalada con datos móviles habilitados.
- APN del operador, nombre de usuario APN y contraseña APN según lo requiera su operador móvil.
- Acceso al método de configuración SMS del dispositivo o a la herramienta oficial de configuración de Sentar.
- Conocimiento de la contraseña del dispositivo; el valor predeterminado publicado en los comandos públicos es 123456.
- Batería cargada o alimentación constante durante la configuración inicial para evitar interrupciones.
- Capacidad para enviar y recibir SMS hacia y desde el dispositivo si utiliza configuración basada en SMS.

## Cómo se conecta este rastreador a Plaspy

El Q60 Pet envía posición y telemetría por GSM GPRS al endpoint y puerto configurados de Plaspy, de modo que la plataforma puede presentar mapas en vivo, líneas de tiempo y alertas. Al configurar el dispositivo con los datos del servidor Plaspy y verificar que el APN sea correcto, el rastreador se vuelve visible como fuente de datos en tiempo real en Plaspy.

- El dispositivo transmite ubicación y telemetría a través de la conexión GPRS del operador hacia d.plaspy.com o 54.85.159.138.
- Los uplinks de datos se envían al puerto 8888, el puerto compartido de Plaspy para todos los dispositivos.
- Puede elegir UDP o TCP cuando el dispositivo requiere selección de transporte.
- Plaspy recibe y analiza los datos del rastreador, detectando el protocolo automáticamente.
- Una vez que reporta, Plaspy muestra ubicación, estado de batería y eventos en la línea de tiempo para el monitoreo operativo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Sentar para el Q60 Pet, normalmente comandos SMS publicados por Sentar o la herramienta del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la opción de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el rastreador requiere una selección explícita de transporte.
5. Configure el APN y las credenciales APN que su operador solicite.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo requiere.
7. Valide que el dispositivo reporte en Plaspy y que aparezca en su cuenta de Plaspy.

Si utiliza configuración por SMS, siga cuidadosamente los comandos publicados y conserve los marcadores de posición como APN, usuario APN y contraseña APN.

## Ejemplos de comandos de configuración

El Q60 Pet puede configurarse enviando comandos SMS según lo publicado por Sentar. El ejemplo a continuación usa la contraseña predeterminada del dispositivo 123456 cuando es necesario. Los comandos se muestran en la forma pública proporcionada por el fabricante; envíe cada comando como un SMS al número del dispositivo.

1. Restablecimiento de fábrica opcional (usar solo cuando desee reiniciar la configuración del dispositivo):
```
pw,123456,factory#
```

2. Ajustar la zona horaria a UTC 0:
```
pw,123456,lz,0,0#
```

3. Verificar MCC y MNC de la SIM (para identificar los códigos del operador):
```
pw,123456,imsi#
```

4. Establecer el APN del operador donde {{apn}} es el nombre del APN, {{apnu}} es el usuario APN y {{apnp}} es la contraseña APN. El marcador final xxxyy representa MCC y MNC concatenados cuando se requiera:
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
- Explicación: Reemplace {{apn}} con el APN del operador, {{apnu}} con el usuario APN si es necesario y {{apnp}} con la contraseña APN si es necesaria. Reemplace xxxyy con la cadena MCC y MNC si el comando del dispositivo lo espera.

5. Establecer servidor GPRS a la IP y puerto de Plaspy (comando público publicado por Sentar):
```
pw,123456.ip,54.85.159.138,8888#
```

6. Establecer intervalo de actualización/subida a 300 segundos:
```
pw123456,upload,300#
```

7. Verificar la configuración actual (comando de estado):
```
pw,123456,ts#
```

Nota: Estos comandos se presentan en la misma forma que la guía pública de Sentar. Si el firmware de su dispositivo requiere una sintaxis ligeramente diferente o comas en posiciones distintas, utilice la documentación oficial de Sentar o la herramienta del proveedor para confirmar el formato SMS exacto para su revisión del dispositivo.

## Notas de configuración

- La configuración por SMS está publicada para este modelo; asegúrese de que su SIM soporte SMS y datos y de que los mensajes SMS se envíen desde un número de confianza si el dispositivo lo requiere.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique la versión de firmware del dispositivo y la documentación de Sentar si los comandos fallan.
- Elija UDP o TCP según sus necesidades de red y los requisitos del dispositivo; Plaspy acepta cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Reemplace los marcadores de posición del APN con los valores exactos proporcionados por su operador móvil; valores APN faltantes o incorrectos impedirán la conectividad GPRS.
- Use el comando de restablecimiento de fábrica solo cuando sea necesario o cuando el soporte se lo indique para devolver el dispositivo a un estado conocido.

## Por qué usar Plaspy con esta configuración

Usar el Sentar Q60 Pet con Plaspy ofrece una forma sencilla de centralizar posicionamiento multimodal y telemetría básica en una sola plataforma para la seguridad de la mascota y la visibilidad operativa. Al apuntar el Q60 Pet al endpoint y puerto compartidos de Plaspy, obtendrá actualizaciones continuas de ubicación, telemetría de batería y visibilidad en la línea de tiempo que facilitan alertas oportunas y monitoreo.

Para obtener más información sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Por favor verifique los detalles de configuración específicos más recientes del dispositivo, el comportamiento del firmware y las instrucciones del fabricante en el sitio oficial de Sentar http://www.sentarsmart.com/ porque las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.

---
slug: /sentar/d55b_a9c/configuration
id: d55b_a9c-configuration
sidebar_label: Configuration
title: Sentar - D55B-A9C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el smartwatch infantil Sentar D55B-A9C a Plaspy mediante ajustes de servidor compartidos y comandos SMS
keywords:
  - Sentar D55B-A9C
  - Configuración Sentar
  - Configuración D55B A9C
  - Configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración de smartwatch infantil
  - Compatibilidad Sentar Plaspy
  - Ajustes de servidor del dispositivo
  - Comandos SMS del rastreador
  - Configuración de plataforma GPS
---

# Sentar - D55B-A9C Configuración

Esta página documenta el contexto público de configuración para usar el smartwatch infantil Sentar D55B-A9C con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos, los comandos SMS incluidos en la guía pública del dispositivo y los pasos generales que deberá seguir para preparar el reloj y que reporte a Plaspy. La información aquí está pensada para usuarios técnicos e instaladores que necesiten entender qué configurar en el dispositivo para que sea visible y gestionable desde Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor. La configuración pública del D55B-A9C incluye ejemplos de comandos SMS y una contraseña por defecto que aparece en la guía del fabricante; siga esos comandos con cuidado y confirme los detalles en función del firmware de su dispositivo y la documentación oficial de Sentar.

## Resumen de la configuración

El proceso de configuración prepara el D55B-A9C para enviar telemetría y actualizaciones de estado a Plaspy, de modo que usted pueda monitorear el dispositivo desde el panel de Plaspy. La configuración habitual se centra en ajustar los parámetros de datos móviles, el servidor de reporte y los intervalos de subida periódica para que el reloj envíe la información como se espera.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma.
- Configurar el APN y los parámetros del operador para que los datos móviles y el GPRS estén disponibles.
- Establecer el intervalo de reporte o subida para que la ubicación y el estado se envíen con una cadencia predecible.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración.
- Utilizar los comandos SMS proporcionados por el fabricante o la herramienta del proveedor según la documentación del D55B-A9C.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device selection  
- Plaspy automatically detects the tracker protocol so all devices can use the shared port and endpoint

## Requisitos típicos antes de comenzar

- Un dispositivo D55B-A9C con batería cargada y encendido, con servicio celular habilitado (el D55B-A9C soporta 4G).
- Una tarjeta SIM activa con datos habilitados y capacidad de SMS (las guías públicas usan comandos SMS del fabricante).
- Acceso al método de configuración oficial de Sentar, como comandos SMS o software del proveedor.
- Los datos del APN y del operador de su red móvil (los ejemplos públicos usan marcadores de posición para el APN).
- Un teléfono o consola capaz de enviar comandos SMS al dispositivo, o la herramienta del proveedor soportada.

## Cómo se conecta este rastreador a Plaspy

El D55B-A9C se configura para enviar telemetría y estado a través de la red celular al endpoint y puerto compartidos de Plaspy. Una vez apuntado a Plaspy, las subidas periódicas y los mensajes de eventos son ingeridos y mostrados por Plaspy para monitoreo y alertas.

- El reloj envía mensajes de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy soporta ambos.
- El intervalo de subida periódico controla la frecuencia con la que se entregan posición y estado (los ejemplos públicos muestran intervalos de 300 segundos).
- Plaspy detecta automáticamente el protocolo del dispositivo cuando los mensajes llegan al puerto compartido.
- La conectividad del dispositivo y el estado de la batería se vuelven visibles en Plaspy tras el reporte exitoso.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Sentar para el D55B-A9C (comandos SMS o herramienta del proveedor) y confirme la contraseña por defecto del dispositivo si es necesario.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888, ya que todos los dispositivos de Plaspy usan el mismo puerto.  
4. Seleccione el transporte (UDP o TCP) en el dispositivo si la configuración requiere escoger uno.  
5. Configure el APN y los parámetros del operador para la SIM, de modo que el dispositivo tenga conectividad de datos.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.  
7. Verifique que el dispositivo reporte a Plaspy y que sea visible en el panel de Plaspy o mediante el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

Los siguientes comandos se extraen de la guía pública de configuración de Sentar para el D55B-A9C. Los comandos de ejemplo son SMS y usan la contraseña por defecto 123456 que aparece en el ejemplo del fabricante. Los comandos se presentan en el orden público original. Si el firmware de su dispositivo espera una sintaxis ligeramente distinta, siga la documentación del fabricante o la herramienta del proveedor.

- Factory reset (optional initial step)
```
pw,123456,factory#
```

- Set the time zone to UTC+0
```
pw,123456,lz,0,0#
```

- Check the MCC and MNC (IMSI)
```
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN username, and {{apnp}} is the APN password; xxxyy represents MCC and MNC combined in the public example
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
(Explicación: reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores proporcionados por su operador móvil.)

- Set the GPRS server to the Plaspy server IP and port as shown in public guidance
```
pw,123456.ip,54.85.159.138,8888#
```

- Set update interval to 300 seconds (public example)
```
pw123456,upload,300#
```

- Check device settings (status)
```
pw,123456,ts#
```

Nota: Los comandos anteriores se ofrecen según la guía pública del dispositivo. Mantenga el valor de la contraseña y la sintaxis de los comandos consistentes con las instrucciones del fabricante para la versión de firmware que tenga. Los marcadores de posición se muestran tal como aparecen en la guía pública; complételos con los valores de su operador y despliegue.

## Observaciones de configuración

- La configuración pública por SMS está incluida en la guía de Sentar para este modelo; confirme si su dispositivo soporta configuración solo por SMS o si una herramienta del proveedor es la opción recomendada para su versión de firmware.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique los comandos con la documentación del dispositivo o las notas de la versión del firmware.
- Seleccione UDP o TCP según las condiciones de su red local y las recomendaciones del proveedor; Plaspy admite ambos y detectará el protocolo automáticamente.
- Los comandos públicos muestran la contraseña por defecto 123456 en los ejemplos del fabricante; considere actualizar las credenciales del dispositivo cuando esté soportado y permitido por el flujo de trabajo del dispositivo.
- Si es necesario reiniciar tras guardar los ajustes, hágalo para asegurar que el dispositivo registre el nuevo servidor y la configuración del APN.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Sentar D55B-A9C proporciona visibilidad centralizada para dispositivos que requieren monitoreo continuo, reportes de estado y alertas. Apuntar el reloj al endpoint compartido de Plaspy permite que familias y administradores vean conectividad, estado de batería y ubicaciones reportadas desde una sola interfaz, además de configurar alertas y reportes a nivel de plataforma.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el D55B-A9C, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y la sintaxis oficial de comandos, verifique siempre la documentación del fabricante en http://www.sentarsmart.com/ ya que los detalles del proveedor y el firmware pueden cambiar con el tiempo.

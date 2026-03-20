---
slug: /sentar/d31/configuration
id: d31-configuration
sidebar_label: Configuration
title: Sentar - D31 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj GPS Sentar D31 y su compatibilidad con Plaspy para seguimiento en tiempo real
keywords:
  - configuración Sentar D31
  - instalación Sentar D31
  - Sentar D31 Plaspy
  - configuración rastreador GPS Sentar
  - configuración servidor D31
  - configuración SMS D31
  - ajustes APN D31
  - configuración plataforma rastreo D31
  - configuración dispositivo Plaspy
  - configuración rastreador GPS wearable
---

# Sentar - Configuración del D31

Esta página describe el contexto público de configuración para usar el reloj GPS Sentar D31 con Plaspy. Explica los ajustes de servidor compartido que Plaspy espera, enumera pasos prácticos que puede seguir y presenta los comandos SMS del fabricante que se usan comúnmente para preparar el D31 para seguimiento en tiempo real con Plaspy. Use esta guía para entender lo necesario antes de integrar un dispositivo D31 en su cuenta Plaspy.

Plaspy utiliza un único endpoint de servidor y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante para el D31 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos aquí como ejemplos públicos extraídos de la documentación del dispositivo y verifique detalles con Sentar cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es asegurar que el D31 informe ubicación y estado del dispositivo de forma fiable a Plaspy. En el D31, la configuración suele realizarse mediante comandos SMS para establecer el APN y los datos del servidor, además de opciones como restablecimiento de fábrica y ajuste del intervalo de reporte.

- Configure el D31 para que apunte al endpoint y puerto compartido de Plaspy
- Proporcione al dispositivo un APN funcional para que pueda subir datos por la red celular
- Establezca el intervalo de subida para que Plaspy reciba actualizaciones oportunas de ubicación y estado
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración
- Mantenga la contraseña por defecto del dispositivo y confirme las configuraciones de seguridad antes del despliegue

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el D31:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará identificar el protocolo del dispositivo automáticamente una vez que el rastreador empiece a enviar datos.

## Requisitos habituales antes de la configuración

- Un Sentar D31 con batería cargada y encendido, con una nano SIM funcional y datos habilitados
- Los datos correctos del APN proporcionados por el operador móvil
- Acceso para enviar SMS desde un número autorizado para mandar mensajes de configuración al dispositivo
- La contraseña por defecto del dispositivo (el valor público en ejemplos del fabricante es 123456)
- Conocimiento básico de si el dispositivo requiere UDP o TCP como transporte
- Acceso a la documentación oficial de Sentar o soporte del proveedor para la sintaxis de comandos según firmware

## Cómo se conecta este rastreador a Plaspy

El D31 se configura para subir mensajes de posición y estado al endpoint y puerto compartido de Plaspy. Plaspy recibe esas subidas, detecta automáticamente el protocolo y relaciona la telemetría entrante con el dispositivo en su cuenta Plaspy.

- El rastreador envía subidas periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy procesa las fijaciones de ubicación y la telemetría del dispositivo para seguimiento en vivo e historial
- Eventos SOS y alertas del D31 se reenvían a Plaspy para notificar a cuidadores o administradores
- La conectividad del dispositivo y la telemetría de batería son visibles en Plaspy para monitoreo operativo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el D31 (los comandos SMS de Sentar se usan frecuentemente).
2. Opcionalmente realice un restablecimiento de fábrica si necesita borrar configuraciones previas o para aprovisionamiento inicial.
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 en la configuración del dispositivo.
5. Seleccione UDP o TCP en el dispositivo si el D31 requiere una selección explícita del transporte.
6. Configure el APN del operador y cualquier usuario o contraseña de APN según lo requiera la SIM del operador.
7. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
8. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta Plaspy después de algunos ciclos de subida.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS son ejemplos públicos extraídos de las referencias de configuración del Sentar D31. La contraseña de ejemplo mostrada es 123456 y es la predeterminada en estos ejemplos. Envíe cada comando como SMS al número del dispositivo. PresERVE los marcadores de posición y reemplácelos con los valores de su operador donde se indique.

- Restablecer a configuración de fábrica (opcional para puesta en marcha)
```text
pw,123456,factory#
```

- Establecer zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar MCC y MNC (consulta IMSI)
```text
pw,123456,imsi#
```

- Establecer el APN del operador
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explicación: [apn] es el nombre del APN del operador, [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Reemplace xxxyy con el MCC y MNC de la red móvil concatenados según lo proporcione el operador.

- Configurar servidor GPRS a Plaspy por IP y puerto
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: Este comando corresponde a la forma pública mostrada en el ejemplo del fabricante. Si su dispositivo requiere separación por comas entre la contraseña y la palabra ip, consulte la documentación de Sentar para la sintaxis exacta.

- Establecer intervalo de actualización a 300 segundos
```text
pw123456,upload,300#
```

- Comprobar configuración actual
```text
pw,123456,ts#
```

Si su dispositivo usa separadores o parámetros ligeramente distintos en los comandos SMS, siga el conjunto de instrucciones de Sentar para su firmware. El orden anterior refleja una práctica común de configuración: resetear si es necesario, fijar zona horaria y APN, establecer el endpoint del servidor hacia Plaspy, configurar el intervalo de subida y luego verificar los ajustes.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los parámetros aceptados; verifique los comandos frente al manual de Sentar para su versión de dispositivo.
- La configuración vía SMS es un método público común para el D31, pero también pueden existir herramientas del proveedor o software de aprovisionamiento; use las herramientas oficiales de Sentar cuando sea posible.
- Elija UDP o TCP según lo requiera el dispositivo; Plaspy acepta ambos transportes en el puerto compartido.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint correcto.
- Al introducir valores de APN mantenga marcadores de posición como [apn], [apnu] y [apnp] hasta reemplazarlos por los valores del operador; una configuración incorrecta del APN impedirá las subidas de datos.

## Por qué usar Plaspy con esta configuración

Emparejar el Sentar D31 con Plaspy ofrece a cuidadores y administradores visibilidad centralizada de la ubicación, el estado del dispositivo y eventos de emergencia desde un dispositivo wearable. Usar el endpoint y puerto compartidos de Plaspy simplifica el aprovisionamiento entre dispositivos, ya que Plaspy detecta automáticamente el protocolo del rastreador e ingiere la telemetría una vez que el D31 apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Para obtener más información sobre Plaspy y cómo centralizar el seguimiento de dispositivos como el Sentar D31 visite https://www.plaspy.com. Para los comandos específicos del fabricante, detalles de firmware e instrucciones del dispositivo más actuales, verifique la información más reciente en el sitio de Sentar http://www.sentarsmart.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

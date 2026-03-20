---
slug: /maxtrack/mxt_160/configuration
id: mxt_160-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-160 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Maxtrack MXT-160 para apuntar el rastreador a Plaspy con ejemplos de SMS y ajustes necesarios
keywords:
  - Configuración Maxtrack MXT-160
  - Instalación MXT-160
  - Configuración servidor Maxtrack MXT-160
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración SMS MXT-160
  - Rastreo GPRS MXT-160
  - Configuración rastreador GPS Maxtrack
  - Configuración rastreo de vehículos
  - Configuración tracker gestión de flotas
---

# Maxtrack - Configuración del MXT-160

Esta página reúne la información pública necesaria para configurar el rastreador Maxtrack MXT-160 con Plaspy. Contiene los ajustes de servidor más utilizados y ejemplos de comandos que normalmente sirven para apuntar el MXT-160 a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría básica a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MXT-160 admite configuración por SMS según la guía pública y puede configurarse usando el formato de comandos mostrado más abajo.

## Resumen de la configuración

Este proceso prepara el MXT-160 para comunicarse con Plaspy y que el dispositivo aparezca en la plataforma reportando datos de forma fiable. El ejemplo que muestra el fabricante utiliza SMS para establecer la contraseña del equipo, el ID del dispositivo, marcadores de APN y el endpoint del servidor Plaspy para que el rastreador envíe datos vía GPRS.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy para garantizar que los datos lleguen a la plataforma
- Defina APN y campos relacionados con la SIM para que el dispositivo pueda usar GPRS en el envío de datos
- Proporcione el ID del dispositivo y verifique que el rastreador se autentique correctamente con el servidor
- Valide la selección de transporte (UDP o TCP) y confirme la conectividad con Plaspy
- Pruebe el envío de datos y la visibilidad en Plaspy después de reiniciar o guardar la configuración del dispositivo

## Configuración del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el MXT-160:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolo para identificar el protocolo del rastreador.

## Requisitos previos antes de la configuración

- Una unidad MXT-160 con alimentación, con tarjeta SIM funcionando y servicio GPRS habilitado si se va a usar reporte por datos
- Acceso al método de configuración que soporte su unidad, como comandos SMS o herramientas oficiales de Maxtrack
- El ID del dispositivo o el valor IMEI para incluir en comandos de configuración o en el registro en la plataforma
- Conocimiento de los ajustes APN del operador móvil de la SIM que utilice el rastreador
- Un teléfono capaz de enviar SMS al rastreador si usa la configuración por SMS
- Acceso a la documentación del fabricante para cualquier variación específica de comandos o notas de firmware

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el MXT-160 usará su conexión GPRS para enviar posiciones y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes en el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente para que los datos entrantes se analicen y se asocien al dispositivo correcto.

- El rastreador se apunta al endpoint del servidor Plaspy 54.85.159.138 en el puerto 8888
- El transporte puede seleccionarse como UDP o TCP según el firmware o las opciones del dispositivo
- El equipo envía informes de posición y eventos a Plaspy, donde se muestran en la plataforma
- Plaspy identifica automáticamente el protocolo del rastreador y procesa los mensajes para visualización y alertas
- Una configuración exitosa habilita la monitorización operativa e informes de eventos en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Maxtrack para su modelo MXT-160, como la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los campos o comandos de configuración del dispositivo.
3. Configure el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el rastreador requiere la selección de transporte durante la configuración.
5. Proporcione los ajustes APN y el ID del dispositivo según lo requiera el formato de configuración del MXT-160.
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo necesita un reinicio para aplicar los cambios.
7. Verifique que el MXT-160 reporte a Plaspy y aparezca en la plataforma, comprobando actualizaciones de posición y eventos esperados.

Si utiliza la configuración por SMS para el MXT-160, siga el formato de SMS del fabricante y envíe los comandos desde un número autorizado.

## Ejemplos de comandos de configuración

La guía pública del MXT-160 incluye un ejemplo de configuración por SMS. El fabricante indica que la contraseña por defecto del dispositivo es 0000. Reemplace los marcadores con sus valores reales antes de enviar.

- Contraseña por defecto usada en los comandos SMS
  - 0000 es la contraseña por defecto en el ejemplo siguiente

- Ejemplo de comando SMS de configuración
```text
0000,[trackerID],2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

Explicación de los marcadores:
- [trackerID] — reemplace con el ID del dispositivo o el IMEI según lo que requiera el formato del comando
- [apn] — reemplace con el APN de su operador móvil
- [apnu] — reemplace con el usuario del APN si el operador lo solicita; deje en blanco si no se usa
- [apnp] — reemplace con la contraseña del APN si el operador lo solicita; deje en blanco si no se usa

Notas:
- El ejemplo utiliza la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Si su firmware acepta nombres de host, puede usar d.plaspy.com cuando el dispositivo lo soporte.
- Envíe el SMS desde un número autorizado si el rastreador aplica autorización telefónica para la configuración remota.

## Notas de configuración

- La configuración por SMS está incluída en el ejemplo público, pero las herramientas del fabricante o utilitarios para PC pueden ofrecer métodos alternativos.
- El ejemplo usa la contraseña por defecto 0000 en el comando SMS; cambie las credenciales del dispositivo cuando sea posible por razones de seguridad tras la configuración inicial.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta del comando o los parámetros soportados; confirme siempre la sintaxis para su versión de firmware.
- La selección entre TCP y UDP puede afectar el comportamiento de entrega según las condiciones de red; elija el transporte que mejor se adapte al dispositivo y a su despliegue.
- Si la configuración no surte efecto de inmediato, verifique la conectividad GPRS del operador y vuelva a intentar después de reiniciar el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Maxtrack MXT-160 con Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad de la flota y la monitorización operativa básica. El diseño compacto y robusto del MXT-160, combinado con el endpoint compartido de Plaspy y la detección automática de protocolos, facilita desplegar dispositivos a escala apuntándolos a un endpoint y puerto consistentes para el reporte.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los pasos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles de instalación más recientes con el fabricante en https://maxtrack.com.br, ya que las especificaciones del proveedor y la sintaxis de comandos pueden cambiar con el tiempo.

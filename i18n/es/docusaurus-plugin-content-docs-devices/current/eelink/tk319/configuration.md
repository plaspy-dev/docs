---
slug: /eelink/tk319/configuration
id: tk319-configuration
sidebar_label: Configuration
title: EElink - TK319 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK319 con ajustes de servidor Plaspy, comandos SMS y flujo de trabajo para integrar el dispositivo
keywords:
  - configuración EElink TK319
  - configuración inicial EElink TK319
  - configuración TK319 Plaspy
  - configuración rastreador GPS
  - instalación rastreador EElink
  - configuración seguimiento de vehículos
  - rastreador gestión de flotas
  - configuración plataforma GPS
  - configuración servidor Plaspy
  - comandos SMS de configuración
---

# EElink - TK319 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador EElink TK319 con Plaspy. Reúne los ajustes de servidor Plaspy, los comandos SMS públicos comunes para este modelo y un flujo de trabajo práctico para que usuarios técnicos preparen y validen el dispositivo para su visibilidad en Plaspy. Utilice esta guía junto con la documentación oficial del fabricante y las herramientas del equipo que tenga disponibles.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos que se muestran aquí provienen de ejemplos públicos de configuración del TK319 y demuestran cómo apuntar el rastreador a Plaspy y verificar la conectividad.

## Resumen de la configuración

El objetivo al configurar un TK319 para Plaspy es dejar el rastreador listo para comunicarse de forma fiable con el servidor Plaspy y confirmar que el dispositivo es visible y reporta como se espera. Los ejemplos públicos de configuración para este modelo usan comandos SMS para ajustar el APN, el endpoint del servidor y los intervalos de reporte.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que las cargas de datos lleguen a la plataforma.
- Configurar el APN y parámetros GPRS necesarios para la SIM instalada.
- Establecer el intervalo de reporte del dispositivo a la frecuencia deseada para el seguimiento.
- Verificar la configuración con una comprobación de parámetros y confirmar que el dispositivo aparece en Plaspy.
- Opcionalmente, restaurar a valores de fábrica antes de la puesta en marcha inicial al preparar unidades nuevas o reutilizadas.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el TK319:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Alimentar el equipo con la fuente recomendada o batería y comprobar que arranca con normalidad.
- Insertar una tarjeta SIM activa con plan de datos y el APN correcto del operador.
- Confirmar que dispone del método oficial de configuración EElink, por ejemplo comandos SMS o la herramienta de configuración del fabricante.
- Tener un medio para enviar SMS al dispositivo desde el número de SIM autorizado por el rastreador.
- Anotar el IMEI o identificador del dispositivo para localizarlo en Plaspy tras la configuración.
- Asegurarse de que el rastreador tenga cobertura GPS o de red suficiente para obtener las primeras posiciones.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el TK319 envía ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y gestionar el rastreador. El proceso normalmente usa la conectividad GPRS/WCDMA del rastreador para subir mensajes al servidor configurado.

- El rastreador sube mensajes de posición y estado a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede elegir transporte UDP o TCP cuando el dispositivo solicita seleccionar un tipo de transporte; ambos son compatibles en Plaspy en el puerto compartido.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda analizar los mensajes entrantes sin cambios por dispositivo en el servidor.
- Tras una configuración exitosa, el dispositivo debería aparecer en Plaspy y comenzar a reportar regularmente según el intervalo TIMER establecido.
- Use el comando de comprobación de parámetros del dispositivo para confirmar las configuraciones locales antes de la validación final en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración EElink para su unidad, por ejemplo la configuración por SMS mostrada en los comandos públicos o la herramienta del fabricante.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 tal como requiere Plaspy y todos los dispositivos compatibles con la plataforma.
4. Elija UDP o TCP como transporte si el dispositivo le pide seleccionar un tipo de transporte.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN necesarios para su operador de SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporta a Plaspy revisando la lista de dispositivos o los datos en vivo en Plaspy y usando el comando PARAM para confirmar los ajustes locales.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del TK319 suelen enviarse por SMS. Los comandos que siguen se mantienen según los ejemplos públicos del fabricante y se muestran en el orden recomendado.

- Reset opcional inicial a valores de fábrica (usar solo cuando sea necesario durante el aprovisionamiento inicial):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Establecer el APN del operador. Reemplace los marcadores por los valores de su operador:
```text
APN,[apn]
```
Si su APN requiere usuario y contraseña incluya la siguiente forma donde [apnu] es el usuario del APN y [apnp] es la contraseña del APN:
```text
APN,[apn],[apnu],[apnp]#
```
Nota: mantenga los marcadores [apn], [apnu] y [apnp] y sustitúyalos por sus valores reales del operador.

- Configurar el servidor GPRS para usar el dominio Plaspy en el puerto compartido:
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP del servidor Plaspy en el mismo puerto compartido:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación cada 60 segundos:
```text
TIMER,60#
```

- Comprobar los parámetros actuales del dispositivo:
```text
PARAM#
```

Siga la sintaxis SMS del fabricante exactamente. Los marcadores como [apn] deben reemplazarse por el APN de su operador. Los ejemplos anteriores respetan el orden público de comandos cuando corresponde.

## Notas de configuración

- La configuración por SMS es un método público y soportado para este modelo y se muestra en los ejemplos; las herramientas del fabricante pueden ofrecer opciones equivalentes.
- Las versiones de firmware o las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique los comandos contra las notas de la versión del firmware cuando sea posible.
- Elija UDP o TCP según la preferencia del instalador o las condiciones de red; Plaspy soporta ambos transportes en el puerto compartido.
- Mantenga un registro de los cambios realizados y verifique el IMEI del dispositivo y el estado de reporte en Plaspy después de la configuración.
- Use PARAM# para confirmar que el rastreador guardó los ajustes antes de confiar únicamente en la visibilidad en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un TK319 correctamente configurado ofrece a las organizaciones visibilidad centralizada de ubicaciones, estado de reporte y salud básica del dispositivo mediante un endpoint de servidor común. El servidor compartido de Plaspy y la detección automática de protocolos simplifican la integración para que múltiples modelos de dispositivos convivan en el mismo puerto de la plataforma y sean analizados automáticamente por Plaspy.

Obtenga más información sobre Plaspy y cómo la plataforma maneja el reporte de dispositivos y la visibilidad de flotas en https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información actual en el sitio de EElink https://www.eelink.com.cn/

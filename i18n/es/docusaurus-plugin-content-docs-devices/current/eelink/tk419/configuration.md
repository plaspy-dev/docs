---
slug: /eelink/tk419/configuration
id: tk419-configuration
sidebar_label: Configuration
title: EElink - TK419 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK419 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para seguimiento de flotas
keywords:
  - configuración EElink TK419
  - configuración TK419
  - configuración TK419 Plaspy
  - configuración rastreador EElink
  - ajustes servidor EElink TK419
  - configuración rastreador GPS EElink
  - configuración SMS TK419
  - configuración dispositivo Plaspy
  - rastreador de vehículos TK419
  - seguimiento de flotas TK419
---

# EElink - Configuración TK419

Esta página describe el contexto público de configuración para usar el rastreador EElink TK419 con Plaspy. Se centra en la información práctica necesaria para apuntar el dispositivo a los puntos de ingestión de Plaspy, los comandos SMS habituales que facilita el fabricante y qué verificar para que el dispositivo aparezca en Plaspy y permita seguimiento en tiempo real y notificaciones.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando esté disponible incluimos comandos SMS de EElink y orientación de configuración que coinciden con los ajustes de servidor de Plaspy.

## Resumen de la configuración

Este proceso prepara el TK419 para comunicarse con Plaspy usando el punto de ingestión compartido y el puerto de la plataforma. El objetivo es configurar el APN y el servidor del dispositivo, confirmar los ajustes de transporte y validar que las actualizaciones de telemetría y posición lleguen a Plaspy.

- Configure el APN y los parámetros móviles para que el TK419 pueda enviar datos por GPRS o LTE.
- Apunte el rastreador al servidor de Plaspy d.plaspy.com o a la IP de servidor proporcionada y use el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si el firmware exige elegir el transporte.
- Aplique los ajustes por SMS o mediante la herramienta oficial de EElink y confirme la configuración.
- Valide el reporte del dispositivo en Plaspy y verifique actualizaciones en vivo, alarmas y telemetría de IO en la plataforma.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de comenzar

- Una unidad TK419 con alimentación y acceso, con conectividad celular habilitada.
- Una tarjeta SIM operativa con datos habilitados y los ajustes APN correctos del operador móvil.
- Acceso al método de configuración de EElink que prefiera, como comandos SMS o el software oficial del fabricante o herramienta de instalador.
- Un teléfono o pasarela SMS capaz de enviar mensajes de configuración si utiliza el método basado en SMS.
- Credenciales y conocimiento de los valores del APN del operador, incluyendo usuario y contraseña del APN si aplica.
- Una cuenta de Plaspy y acceso a una instancia de Plaspy para verificar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK419 transmite posiciones GNSS y telemetría al punto de ingestión compartido de Plaspy en el puerto 8888. Plaspy recibe los mensajes del rastreador, detecta automáticamente el protocolo TK419 y convierte los mensajes crudos en posiciones en el mapa en tiempo real, alarmas y eventos de IO.

- El dispositivo se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP directa 54.85.159.138.
- Los datos se envían por el puerto 8888 que Plaspy utiliza para todos los rastreadores soportados.
- El transporte puede ser UDP o TCP según el firmware del TK419 y la elección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo adicional en la plataforma.
- Una vez en reporte, las actualizaciones de posición, alarmas y el estado de IO se muestran en los paneles y reglas de alerta de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de EElink o al software del fabricante, o prepárese para enviar comandos SMS según la guía de EElink.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 cuando le pidan el host del servidor.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los equipos.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere elegir el transporte.
5. Aplique o guarde la configuración en el TK419 y, si es recomendable, reinicie el dispositivo.
6. Valide que el dispositivo reporte a Plaspy comprobando posiciones y telemetría entrante en su instancia de Plaspy.
7. Si la telemetría no aparece, verifique los ajustes del APN y confirme de nuevo la conectividad por SMS o datos.

## Comandos de configuración de ejemplo

El fabricante documenta comandos SMS públicos para el TK419. A continuación están los comandos SMS comunes, en el orden usado para una configuración inicial. Envíe cada comando como SMS al número del dispositivo. Los comandos conservan marcadores de posición donde corresponde.

- Reset inicial opcional a fábrica
```text
FACTORY#
```
Etiqueta: Reset inicial opcional para restaurar valores de fábrica. Usar solo si es necesario.

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]{{apnu? ,[apnu]}}{{apnp? ,[apnp]}}#
```
Nota: Reemplace [apn] por el APN de su operador. Si su APN requiere usuario o contraseña, incluya [apnu] y [apnp] según lo proporcione su operador. El formato exacto del SMS depende del firmware del dispositivo; use APN,[apn] o APN,[apn],[apnu],[apnp] según lo necesite.

- Establecer el servidor GPRS usando el dominio Plaspy y el puerto
```text
SERVER,1,d.plaspy.com,8888#
```

- Configuración alternativa del servidor usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

- Ajustar el intervalo de actualización de posición a cada 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales
```text
PARAM#
```
Etiqueta: Use PARAM# para solicitar que el dispositivo responda con su configuración actual y verificarla.

Nota sobre los marcadores de posición: [apn] es la cadena APN del operador móvil. [apnu] y [apnp] son los marcadores opcionales de usuario y contraseña del APN. Mantenga las llaves al preparar plantillas SMS y reemplácelas con los valores reales de su operador.

## Notas de configuración

- Las revisiones de firmware de EElink pueden cambiar la sintaxis exacta de los SMS o el comportamiento de los comandos. Confirme el formato en el manual del dispositivo correspondiente a su versión de firmware.
- El rastreador admite configuración por SMS o mediante las herramientas oficiales de EElink. Si prefiere una interfaz gráfica use el software del fabricante y aplique los mismos valores de servidor y puerto.
- Elegir UDP o TCP depende de las condiciones de red y las opciones del firmware. Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Use el comando PARAM# para verificar los ajustes después de aplicarlos. Si las actualizaciones no aparecen en Plaspy, vuelva a revisar el APN y la conectividad celular.
- Todos los dispositivos reportados a Plaspy usan el puerto 8888, por lo que no es necesario diferenciar puertos por dispositivo en el lado del servidor.

## Por qué usar Plaspy con esta configuración

Usar el TK419 con Plaspy ofrece a los operadores de flotas una ingesta consistente de ubicación, alarmas y telemetría IO en una sola plataforma. Configurar el dispositivo para apuntar a d.plaspy.com o a la IP del servidor de Plaspy garantiza que los equipos reporten al endpoint común, permitiendo gestionar el seguimiento, las alertas y los reportes de una flota extensa sin necesidad de desarrollar gateways personalizados.

To learn more about Plaspy and how it works with compatible devices visit https://www.plaspy.com. For the latest TK419 device specific instructions firmware notes and official command references verify the manufacturer's documentation at https://www.eelink.com.cn/.

---
slug: /eelink/tk121/configuration
id: tk121-configuration
sidebar_label: Configuration
title: EElink - TK121 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK121 con ajustes del servidor Plaspy y comandos SMS para integración rápida
keywords:
  - Configuración EElink TK121
  - Instalación EElink TK121
  - Configuración servidor EElink TK121
  - Configuración tracker Plaspy
  - Configuración servidor Plaspy
  - Configuración SMS TK121
  - Configuración MoveLink TK121
  - Configuración GPS TK121
  - Seguimiento de vehículos TK121
  - Rastreador de flota EElink
---

# EElink - TK121 Configuración

Esta página describe el contexto público de configuración para usar el rastreador EElink TK121 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos, requisitos habituales y los comandos SMS más comunes publicados para la puesta a punto del TK121, de modo que usted pueda preparar el dispositivo para que aparezca en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo al conectarse. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use las indicaciones aquí junto con la documentación del TK121 y sus procedimientos de instalación.

## Resumen de la configuración

Esta guía se centra en preparar el TK121 para enviar datos de ubicación y eventos a Plaspy aplicando los ajustes de servidor de la plataforma y validando la conectividad. El TK121 admite el ajuste remoto de parámetros vía SMS y la integración mediante el protocolo MoveLink, lo que permite asignar el servidor y configurar reportes periódicos de forma sencilla.

- Configure el TK121 para que apunte al servidor de Plaspy y así la telemetría llegue a su cuenta.
- Establezca el APN del operador y los parámetros GPRS para que el rastreador use la conexión de datos móviles.
- Aplique los intervalos de reporte para controlar la frecuencia de envío de posiciones.
- Valide la configuración y confirme que el dispositivo aparece como en línea en Plaspy.
- Opcionalmente, realice un restablecimiento de fábrica o una comprobación de parámetros si hereda una unidad ya configurada.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos al configurar el TK121 para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte que requiera su dispositivo o firmware
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecte

Todos los dispositivos que reportan a Plaspy usan el mismo puerto para la comunicación con el servidor y la plataforma detectará el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Una unidad TK121 con alimentación instalada o conectada a una fuente estable para la configuración inicial.
- Una tarjeta SIM operativa con datos móviles habilitados y capacidad de SMS si va a usar comandos SMS para la configuración.
- Acceso al método de configuración del TK121 soportado por su unidad, como SMS, software del fabricante o herramienta del proveedor.
- El APN correcto y, opcionalmente, el nombre de usuario y contraseña del APN del operador de la SIM.
- Una cuenta en Plaspy o los detalles del servidor necesarios para registrar y validar el dispositivo en su instancia de la plataforma.
- Conocimientos básicos para enviar comandos SMS al rastreador si va a usar la configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El TK121 se configura para reportar al punto de acceso y puerto compartidos de Plaspy, de modo que la ubicación y la telemetría de eventos lleguen a su cuenta. Una vez definidos la dirección del servidor y el APN, el dispositivo establecerá una sesión de datos GPRS y transmitirá mensajes en protocolo MoveLink a Plaspy.

- El dispositivo envía actualizaciones periódicas de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las características de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica mensajes MoveLink para su visualización y generación de alertas.
- Eventos como estado de ignición, alarmas y telemetría se reenvían a Plaspy para su monitoreo en tiempo real.
- Una configuración correcta permite la visibilidad del dispositivo y el flujo de eventos en los paneles y reportes de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración EElink para el TK121 (comandos SMS, herramienta del proveedor o software del fabricante) según lo indique el suministrador o la documentación del fabricante.
2. Defina el APN del operador y las credenciales opcionales para que el dispositivo pueda abrir una sesión GPRS. Use los marcadores de posición si es necesario.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto del dispositivo en 8888.
4. Seleccione UDP o TCP en el dispositivo si requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo (envíe los comandos SMS o guarde desde la herramienta de configuración).
6. Reinicie o haga un ciclo de energía del rastreador si el fabricante lo recomienda para asegurar que los nuevos parámetros tomen efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma; verifique la telemetría y la primera posición recibida.

Si usa SMS para configurar, siga el formato exacto de comandos SMS que indique la documentación del TK121 y los ejemplos de la siguiente sección.

## Comandos de configuración de ejemplo

El TK121 permite ajustar parámetros mediante SMS. Los siguientes comandos públicos SMS se presentan en el orden práctico útil para una configuración inicial. Mantenga los marcadores de posición exactamente como se muestran y reemplácelos con los valores de su operador.

- Restablecimiento de fábrica opcional (usar solo cuando sea necesario):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0 (ejemplo mostrado):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} por su APN. Si su APN requiere nombre de usuario y contraseña, incluya {{apnu}} y {{apnp}} donde el dispositivo lo permita:
```text
APN,{{apn}}{{apnu and apnp placeholder}},{{apnu}},{{apnp}}#
```
Nota: Si el firmware del dispositivo usa un formato de comando APN diferente, utilice la sintaxis proporcionada por el fabricante. Los marcadores {{apn}}, {{apnu}} y {{apnp}} se muestran tal como aparecen en el conjunto de comandos público del TK121.

- Configurar el servidor GPRS para usar el dominio de Plaspy en el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, configurar el servidor GPRS a la IP de Plaspy en el puerto 8888:
```text
SERVER,0,54.85.159.138,8888#
```
Use el dominio cuando DNS esté disponible y sea preferible; use la IP cuando DNS no esté disponible o según lo indique el instalador.

- Establecer el intervalo de actualización de posición a 60 segundos:
```text
TIMER,60#
```

- Consultar la configuración actual de parámetros:
```text
PARAM#
```

Preserve el orden anterior al realizar una configuración inicial: APN, luego servidor, luego timer, y verifique parámetros con PARAM#. Marque el comando de restablecimiento de fábrica como opcional y úselo solo cuando necesite borrar configuraciones existentes.

## Notas de configuración

- El TK121 admite el ajuste de parámetros vía SMS como se muestra; la sintaxis exacta de los SMS puede variar según el firmware, así que confirme con el manual del dispositivo.
- Elija UDP o TCP según el soporte del firmware del dispositivo y las condiciones de su red; Plaspy acepta ambos transportes en el puerto 8888.
- Use d.plaspy.com cuando el dispositivo soporte resolución DNS; use 54.85.159.138 cuando DNS no esté disponible o sea poco fiable.
- La versión de firmware y la revisión de hardware pueden cambiar el formato de los comandos. Verifique los comandos contra el manual actual del TK121 o la herramienta del proveedor.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente una vez que el dispositivo se conecte.

## Por qué usar Plaspy con esta configuración

Configurar el TK121 para reportar a Plaspy aporta a los equipos de flota y a los encargados de seguridad una visibilidad centralizada y en tiempo real de la ubicación del vehículo, el estado de ignición y las alarmas. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue porque el mismo puerto y los mismos endpoints aplican a múltiples dispositivos compatibles, y Plaspy se encarga de la detección del protocolo y la decodificación de mensajes para rastreadores compatibles con MoveLink.

Para saber más sobre Plaspy y cómo la plataforma recoge y muestra la telemetría de los rastreadores visite https://www.plaspy.com. Para comandos específicos más recientes, notas de firmware e información de soporte del fabricante consulte el sitio oficial de EElink https://www.eelink.com.cn/ y verifique los detalles técnicos y procedimentales actualizados.

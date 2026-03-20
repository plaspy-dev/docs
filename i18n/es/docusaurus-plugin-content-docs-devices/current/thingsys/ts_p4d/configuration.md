---
slug: /thingsys/ts_p4d/configuration
id: ts_p4d-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS-P4D para Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración ThingSys TS-P4D
  - Instalación ThingSys TS-P4D
  - Configuración servidor TS-P4D
  - Configuración Plaspy TS-P4D
  - Configuración rastreador Plaspy
  - Instalación rastreador GPS TS-P4D
  - Configuración rastreador GPS ThingSys
  - Ajustes APN TS-P4D
  - seguimiento vehicular TS-P4D
  - seguimiento de activos TS-P4D
---

# ThingSys - Configuración del TS-P4D

Esta página describe el contexto público de configuración para usar el rastreador ThingSys TS-P4D con la plataforma Plaspy. Resume los ajustes prácticos de servidor y los pasos comunes necesarios para apuntar un TS-P4D a Plaspy, de modo que el dispositivo envíe ubicación y estado. La información combina la descripción del producto TS-P4D y los comandos de configuración públicos proporcionados por el fabricante.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el método de configuración que elija. El TS-P4D puede configurarse vía comandos SMS como se muestra abajo o mediante herramientas del fabricante; confirme los comandos y el flujo de trabajo exactos para su unidad y firmware antes de aplicar cambios.

## Resumen de la configuración

El objetivo al configurar un ThingSys TS-P4D para Plaspy es preparar el rastreador para enviar datos confiables de posición y eventos a la plataforma Plaspy, de modo que el dispositivo aparezca en su vista de flota y genere alertas cuando sea necesario. La configuración se centra en los ajustes de red, el APN para datos y el endpoint de servidor y puerto que usa Plaspy.

- Configure el APN del operador, el nombre de usuario y la contraseña para que el rastreador pueda usar datos móviles.
- Apunte el rastreador a los ajustes de servidor de Plaspy para que los datos lleguen al endpoint correcto.
- Valide el transporte y la conectividad para que el dispositivo sea visible en Plaspy.
- Opcionalmente realice un restablecimiento de fábrica al preparar una unidad nueva o reutilizada.
- Verifique que el dispositivo reporte correctamente y ajuste intervalos de envío o parámetros de energía según sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el rastreador:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos de Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador, así que asegúrese de introducir correctamente el endpoint y el puerto en el dispositivo.

## Requisitos típicos antes de configurar

- Una unidad TS-P4D cargada con batería suficiente para la configuración y las pruebas.
- Una SIM móvil operativa con plan de datos activo y el APN correcto del operador.
- Capacidad para enviar SMS al rastreador o acceso al software/herramienta de configuración del fabricante.
- Conocimiento de la contraseña de configuración del rastreador si se requiere (el ejemplo por defecto que aparece más abajo es 123456).
- Acceso a la cuenta Plaspy o a la configuración de flota donde se registrará o supervisará el dispositivo.
- Un área de prueba con cobertura móvil estable para validar el reporte del dispositivo a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El TS-P4D se configura para enviar sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo sea visible en la plataforma Plaspy. Una vez configurado, el rastreador transmitirá telemetría mediante el transporte elegido y Plaspy aceptará e interpretará el protocolo automáticamente.

- El dispositivo usa el APN configurado para establecer conectividad GPRS/datos por paquetes.
- La telemetría se envía al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el lado del servidor es uniforme entre dispositivos.
- Un reporte exitoso hace que el dispositivo sea visible en Plaspy para monitoreo y alertas de eventos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThingSys para su TS-P4D, por ejemplo la interfaz de comandos SMS o el software del fabricante.
2. Si usa SMS o la interfaz del dispositivo, configure el APN del operador para que el rastreador pueda usar datos móviles.
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o la dirección IP 54.85.159.138.
4. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP si el TS-P4D requiere selección de transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la vista de su flota en Plaspy.

Si usa el método SMS que se muestra en los comandos de ejemplo más abajo, siga los comandos en el orden indicado y verifique la conectividad después de configurar el APN y los parámetros del servidor.

## Ejemplo de comandos de configuración

El fabricante proporciona la siguiente secuencia de comandos SMS como ejemplo público. La configuración de muestra usa la contraseña del dispositivo 123456 que aparece como valor por defecto en los comandos de ejemplo. Mantenga el orden de comandos al realizar una configuración inicial.

- Restablecimiento de fábrica inicial opcional (use solo si necesita borrar ajustes previos):

```text
FORMAT
```

- Configure el APN del operador (reemplace {{apn}} por el APN de su operador):

```text
apn123456 {{apn}}
```

- Establezca el nombre de usuario del APN (reemplace {{apnu}} por el nombre de usuario del APN si el operador lo requiere):

```text
apnuser123456 {{apnu}}
```

- Configure la contraseña del APN (reemplace {{apnp}} por la contraseña del APN si el operador lo requiere):

```text
apnpasswd123456 {{apnp}}
```

- Configure el servidor GPRS con la IP y puerto de Plaspy (este es el comando de ejemplo del fabricante; los datos del servidor para Plaspy son IP 54.85.159.138 y puerto 8888):

```text
ip54.85.159.138 8888
```

- Verifique la configuración actual con el comando de estado proporcionado:

```text
CXZT
```

Notas sobre los marcadores de posición y la contraseña:
- {{apn}} es un marcador de posición para el nombre del APN de su operador.
- {{apnu}} es un marcador de posición para el nombre de usuario del APN si el operador lo requiere.
- {{apnp}} es un marcador de posición para la contraseña del APN si el operador lo requiere.
- Los comandos SMS de ejemplo anteriores usan la contraseña del dispositivo 123456 según la guía pública del fabricante. Confirme la contraseña correcta para su dispositivo antes de enviar comandos.

## Notas de configuración

- Los comandos SMS del fabricante, la sintaxis de los comandos y las contraseñas requeridas pueden cambiar entre versiones de firmware; verifique la sintaxis exacta para su firmware.
- Algunos instaladores prefieren la herramienta de configuración del fabricante o la interfaz USB/serial en lugar de SMS; use la herramienta oficial si está disponible para aprovisionamiento masivo o seguro.
- Elija UDP o TCP según sus necesidades de fiabilidad y el comportamiento de la red; algunas redes o operadores pueden preferir un transporte sobre el otro.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolos, por lo que los ajustes críticos son el endpoint del servidor y el puerto.
- Al usar SMS para la configuración, espere un breve lapso para que los ajustes se apliquen y confirme con el comando de verificación.

## Por qué usar Plaspy con esta configuración

Configurar el ThingSys TS-P4D para que reporte a Plaspy ofrece a las organizaciones una forma sencilla de centralizar datos de ubicación, movimiento y eventos en una sola plataforma para visibilidad operativa. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad por dispositivo y aceleran el despliegue en flotas o grupos de activos.

Para obtener más información sobre Plaspy y cómo puede integrarse con rastreadores como el TS-P4D, visite https://www.plaspy.com. Para los comandos específicos de dispositivo más actuales, notas de firmware e instrucciones detalladas de instalación, verifique la información en el sitio del fabricante https://www.thingsys.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.

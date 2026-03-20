---
slug: /globalsat/lt_520p/configuration
id: lt-520p-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat LT-520P y conectarlo a Plaspy con ajustes de servidor y ejemplos de SMS y BLE
keywords:
  - configuración GlobalSat LT-520P
  - instalación GlobalSat LT-520P
  - configuración LT-520P para Plaspy
  - ajustes de servidor LT-520P
  - configuración rastreador GPS LT-520P
  - configuración de rastreadores Plaspy
  - configuración rastreador ganado GPS
  - configuración LoRaWAN rastreador
  - configuración BLE LT-520P
  - comandos SMS LT-520P
---

# GlobalSat - Configuración del LT-520P

Esta página documenta el contexto público de configuración para usar el GlobalSat LT-520P con Plaspy. Resume los ajustes de servidor de Plaspy que debe aplicar, explica los prerequisitos habituales y presenta comandos de ejemplo proporcionados por el fabricante que pueden usarse para apuntar el dispositivo a Plaspy. Utilice esto como referencia práctica para integrar el LT-520P en su espacio de trabajo Plaspy y consulte también el material oficial de GlobalSat para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LT-520P soporta BLE para configuración local y LoRaWAN para uplinks periódicos como su método principal de telemetría; además, el fabricante publica comandos tipo SMS que aquí se incluyen como ejemplo del método de configuración que algunos instaladores utilizan.

## Panorama de la configuración

El objetivo de la configuración es preparar el LT-520P para que reporte telemetría y datos de posición a la plataforma Plaspy de forma fiable y validar que el dispositivo aparece y se actualiza correctamente dentro de Plaspy. Dependiendo de su instalación, la configuración puede realizarse por BLE con una herramienta de campo o, en algunos despliegues, mediante comandos SMS suministrados por el fabricante.

- Configure el rastreador para que informe al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar los uplinks.
- Verifique la selección del transporte y la conectividad para que los paquetes lleguen a Plaspy usando el transporte soportado.
- Proporcione los ajustes de red y APN correctos si usa comandos por SMS o configuración basada en celular.
- Guarde y aplique la configuración y reinicie el dispositivo si es necesario.
- Valide que el dispositivo aparece en Plaspy y que envía telemetría y posiciones GNSS periódicas.
- Use BLE para diagnóstico local y para actualizaciones de firmware OTA cuando estén disponibles en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos son los valores públicos de Plaspy que debe usar al apuntar el rastreador al backend de Plaspy. El puerto 8888 se utiliza de forma consistente para todos los dispositivos compatibles y la plataforma realiza la detección de protocolo automáticamente.

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible por el canal de configuración elegido (herramienta BLE de campo o comandos SMS/remotos donde estén soportados).
- Si utiliza comandos por SMS o basados en celular, una SIM activa con SMS/datos y los detalles de APN correctos.
- Un teléfono o tablet con BLE y la aplicación de configuración del fabricante para instalación y diagnóstico local.
- El número IMEI del dispositivo disponible para usar en comandos con plantillas o en la herramienta del fabricante.
- Familiaridad con el formato de comandos provisto por el fabricante y cualquier requerimiento de checksum o integridad.
- Acceso a la documentación del fabricante o notas de la versión para confirmar el comportamiento del firmware y los comandos soportados.

## Cómo se conecta este rastreador a Plaspy

El LT-520P está diseñado para enviar telemetría periódica a Plaspy para que ubicaciones y resúmenes de actividad sean visibles en mapas y paneles. Plaspy recibe los uplinks en el endpoint y puerto compartidos y empareja automáticamente el protocolo del dispositivo para parsear los mensajes entrantes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com / 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP si el dispositivo requiere una selección explícita.
- BLE se usa localmente para configuración, diagnóstico y actualizaciones de firmware OTA; los uplinks LoRaWAN son la vía principal de telemetría descrita por el fabricante.
- Los comandos tipo SMS publicados por el fabricante pueden ser usados por algunos instaladores para establecer los campos de servidor y APN cuando ese canal de configuración está soportado.
- Una vez configurado, Plaspy ingiere los uplinks periódicos para mapeo, alertas y analítica; valide que la telemetría llegue después de la configuración y del reinicio si procede.

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante o al software, ya sea la app BLE de campo o el formato de comandos SMS publicado.
2. En la interfaz de configuración o en los comandos, ingrese el servidor Plaspy como d.plaspy.com o la IP numérica 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el dispositivo requiere una selección de transporte; Plaspy acepta ambos.
5. Ingrese los valores de red requeridos como APN, usuario APN y contraseña APN si usa configuración por SMS o basada en celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda.
7. Valide que el dispositivo informe a Plaspy comprobando la actividad del equipo y la llegada del primer uplink en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El fabricante ha publicado comandos de ejemplo tipo SMS para la configuración del servidor. Estos comandos usan marcadores de posición y un checksum. Conserve y reemplace los marcadores antes de enviar.

- Marcadores de posición:
  - {{imei}} — número IMEI del dispositivo
  - [apn] — nombre del APN para la red del SIM
  - [apnu] — usuario APN si es requerido
  - [apnp] — contraseña APN si es requerida
  - {{checksum}} y {{checksumreeboot}} — checksum XOR hexadecimal de dos dígitos calculado sobre el texto del comando antes del asterisco

Comando de configuración (reemplace los marcadores y calcule el checksum):
```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando de reinicio (opcional, use cuando sea necesario reiniciar para aplicar ajustes):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Cálculo del checksum (resumen): calcule un checksum XOR sobre cada carácter desde el inicio del comando hasta, pero sin incluir, el carácter '*' y luego formatee el resultado como dos caracteres hexadecimales en mayúsculas. El ejemplo del fabricante incluye una rutina sencilla de XOR a hexadecimal usada en su interfaz para producir los valores de {{checksum}}.

Nota: el ejemplo usa la IP numérica de Plaspy (E0=54.85.159.138) y el puerto (E1=8888). Puede encontrar interfaces de dispositivo que acepten el dominio d.plaspy.com en su lugar; siga las indicaciones de la herramienta del fabricante para los formatos soportados.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los formatos de comando soportados, el cálculo del checksum y los nombres de campo; siempre verifique la sintaxis de los comandos con las notas de la versión del firmware.
- El dispositivo soporta BLE para configuración local y uplinks LoRaWAN para telemetría según lo descrito por el fabricante; los comandos por SMS publicados por el proveedor pueden usarse cuando estén soportados.
- Cuando deba elegirse un transporte (UDP vs TCP), seleccione el recomendado por su guía de instalación; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los marcadores [apn], [apnu] y [apnp] deben reemplazarse por los valores del operador de la red de su SIM si usa comandos por SMS o configuración celular.
- Después de aplicar los ajustes y reiniciar, espere varios ciclos de reporte y verifique que el dispositivo aparece y se actualiza correctamente en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el LT-520P con Plaspy ofrece telemetría para ganado durable y de bajo mantenimiento que integra ubicación basada en GNSS y eventos de actividad agregados en un único backend para mapeo, alertas y análisis. La configuración local por BLE del LT-520P y sus uplinks LoRaWAN encajan bien con la capacidad de Plaspy para ingerir mensajes periódicos y presentar el estado a nivel de rebaño y tendencias históricas.

Para obtener más información sobre Plaspy y los flujos de trabajo de los dispositivos compatibles, visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante más recientes, verifique la información actualizada en el sitio web de GlobalSat https://www.globalsat.com.tw/.

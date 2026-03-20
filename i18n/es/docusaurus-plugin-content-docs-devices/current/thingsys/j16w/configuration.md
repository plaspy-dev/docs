---
slug: /thingsys/j16w/configuration
id: j16w-configuration
sidebar_label: Configuration
title: ThingSys - J16W Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el rastreador ThingSys J16W para que informe a Plaspy usando servidor compartido, SMS o herramientas del fabricante
keywords:
  - Configuración ThingSys J16W
  - Configuración J16W Plaspy
  - Configuración servidor J16W
  - Configuración rastreador ThingSys GPS
  - Configuración software rastreo J16W
  - Ajustes APN ThingSys J16W
  - Configuración SMS J16W
  - Integración rastreador Plaspy
  - Guía configuración rastreador vehicular
  - Rastreo de flotas J16W
---

# ThingSys - Configuración del J16W

Esta página documenta el contexto público de configuración para usar el rastreador ThingSys J16W con Plaspy. Consolida los ajustes de servidor de Plaspy que debe configurar en el dispositivo y reúne los comandos SMS publicados por el fabricante que se usan habitualmente para provisionar el J16W en la red y en la plataforma. Cuando se incluyen comandos del fabricante, se muestran tal como están publicados y se mantienen los marcadores de posición para valores de APN.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El J16W puede configurarse por SMS o mediante el software del fabricante; los ejemplos de comandos SMS abajo reflejan los comandos públicos incluidos en la documentación de ThingSys y usan la contraseña predeterminada del dispositivo 123456 cuando corresponde.

## Resumen de la configuración

Este proceso prepara un ThingSys J16W para comunicarse de forma fiable con Plaspy, de modo que la ubicación y la telemetría del vehículo aparezcan en sus paneles de Plaspy. El objetivo es establecer las credenciales de red, apuntar el dispositivo al endpoint de Plaspy, seleccionar el transporte si es necesario y verificar que la telemetría llegue a la plataforma.

- Configure el APN del operador móvil, el usuario y la contraseña para que el J16W tenga acceso a datos celulares.
- Indique al rastreador que reporte al endpoint del servidor Plaspy (dominio o IP) y al puerto compartido.
- Seleccione UDP o TCP en el dispositivo si se requiere elección de transporte y guarde la configuración.
- Aplique la configuración o reinicie el equipo para que los cambios entren en vigor y la unidad empiece a reportar.
- Verifique que el dispositivo informe a Plaspy y compruebe telemetría básica como posición y estado del encendido.
- Tenga en cuenta las credenciales predeterminadas y los comandos de reseteo durante la provisión y las pruebas iniciales.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede aceptar múltiples protocolos de dispositivo en el mismo puerto

Nota: Todos los dispositivos en Plaspy usan el mismo puerto; configure el J16W para usar el puerto 8888 y UDP o TCP según los requisitos del dispositivo.

## Requisitos previos típicos

- Una unidad J16W alimentada con acceso a su interfaz SMS o al software de configuración ThingSys
- Una tarjeta SIM válida con datos habilitados y capacidad de SMS, además del APN, usuario y contraseña del operador
- La contraseña predeterminada del dispositivo (comúnmente 123456 en ejemplos publicados) o la contraseña administrativa configurada
- Acceso físico al dispositivo para reiniciarlo o confirmar el cableado y la estabilidad de la alimentación
- Acceso a la cuenta o a los datos de provisión de Plaspy para confirmar que el dispositivo aparece en la plataforma una vez configurado

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el J16W envía posición GNSS y telemetría del vehículo a través de la red celular al endpoint y puerto compartido de Plaspy. Plaspy procesa esos mensajes y los integra en paneles, alertas y reproducción histórica sin requerir un puerto específico por dispositivo.

- El rastreador envía actualizaciones de posición y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las restricciones de la red
- Plaspy detecta automáticamente el protocolo entrante del rastreador para que los mensajes se parseen y muestren correctamente
- Los reportes de E/S y eventos, como el estado de encendido, se transmiten a Plaspy para alertas e informes
- Los datos offline almacenados por el J16W se retransmiten cuando vuelve la conectividad, de modo que Plaspy reciba los puntos perdidos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración ThingSys para el J16W (comandos SMS, software de PC o herramienta de línea de producción).
2. Introduzca el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su red y reglas de firewall.
5. Configure el APN del operador, el usuario APN y la contraseña APN en el rastreador para que use datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.
7. Verifique que el dispositivo informe a Plaspy comprobando en su panel de Plaspy la unidad y confirmando la posición y la telemetría.

Si utiliza provisión vía SMS, envíe los comandos SMS del fabricante como parte de los pasos 1 y 5; a continuación se muestran comandos SMS de ejemplo.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo se extraen de la guía de configuración publicada para el ThingSys J16W. Normalmente se envían como mensajes SMS individuales al número del dispositivo. Los comandos de muestra usan la contraseña predeterminada publicada 123456 cuando aparece. Mantenga y reemplace los marcadores de posición según se indica.

- Restablecimiento de fábrica opcional (usar solo si necesita reiniciar el dispositivo):
```
FORMAT
```

- Configure el APN del operador (reemplace {{apn}} por el APN de su operador):
```
apn123456 {{apn}}
```

- Configure el usuario del APN (reemplace {{apnu}} por el usuario APN de su operador si es necesario):
```
apnuser123456 {{apnu}}
```

- Configure la contraseña del APN (reemplace {{apnp}} por la contraseña APN de su operador si es necesario):
```
apnpasswd123456 {{apnp}}
```

- Configure el servidor GPRS/remoto a Plaspy usando la IP del servidor y el puerto (esto apunta el dispositivo a Plaspy en el puerto 8888):
```
ip54.85.159.138 8888
```

- Verifique los ajustes actuales del dispositivo (comando de verificación):
```
CXZT
```

Notas sobre los comandos anteriores:
- FORMAT es un comando de restablecimiento de fábrica y debe usarse solo durante la provisión inicial o cuando se requiera un reinicio intencional.
- Las cadenas apn123456, apnuser123456 y apnpasswd123456 incluyen el patrón de contraseña del dispositivo utilizado por el conjunto de comandos SMS del J16W en ejemplos publicados; mantenga el componente de contraseña intacto o reemplace 123456 si su dispositivo usa otra contraseña administrativa.
- Los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} deben sustituirse por el APN, el usuario APN y la contraseña APN de su operador móvil respectivamente.
- El comando de servidor utiliza la IP del servidor Plaspy 54.85.159.138 y el puerto 8888; alternativamente puede configurar d.plaspy.com si el dispositivo acepta un nombre de dominio.

## Notas de configuración

- La configuración vía SMS suele estar soportada por los dispositivos ThingSys; confirme la sintaxis exacta de los SMS para su firmware antes de realizar una provisión masiva.
- Las contraseñas predeterminadas como 123456 pueden aparecer en ejemplos; cambie las contraseñas administrativas tras la provisión para asegurar el dispositivo.
- Las versiones de firmware y las revisiones de hardware pueden alterar la sintaxis de los comandos o las opciones disponibles; verifique los comandos con el firmware de su unidad.
- Elija UDP o TCP según su topología de red y configuración de firewall; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Verifique siempre la conectividad en Plaspy después de la configuración para confirmar que la posición y la telemetría aparecen como se espera.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys J16W con Plaspy proporciona una vía práctica para obtener visibilidad fiable del vehículo, monitoreo de eventos y supervisión operativa de flotas. La conectividad celular y el almacenamiento offline del J16W, combinados con la ingesta centralizada de Plaspy, permiten recibir actualizaciones de ubicación, eventos de encendido y relés, y alertas en una sola plataforma para la gestión diaria de la flota y la respuesta a incidentes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para consultar los comandos específicos más recientes del dispositivo ThingSys, notas de firmware y documentación de hardware, verifique los detalles en el sitio del fabricante https://www.thingsys.com/ ya que los métodos de configuración y la sintaxis de comandos pueden cambiar según el firmware y las revisiones del dispositivo.

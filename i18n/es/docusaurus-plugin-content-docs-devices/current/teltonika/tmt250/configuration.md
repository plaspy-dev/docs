---
slug: /teltonika/tmt250/configuration
id: tmt250-configuration
sidebar_label: Configuration
title: Teltonika - TMT250 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika TMT250 y conectarlo a Plaspy con ajustes de servidor y comandos ejemplo
keywords:
  - Configuración Teltonika TMT250
  - Instalación Teltonika TMT250
  - Teltonika TMT250 Plaspy
  - Configuración servidor TMT250
  - Configuración GPS TMT250
  - Configuración rastreador Teltonika
  - Configuración rastreador Plaspy
  - Rastreador GPS Teltonika TMT250
  - Configuración rastreador personal
  - Configuración SMS TMT250
---

# Teltonika - Configuración del TMT250

Esta página describe el contexto público de configuración para usar el Teltonika TMT250 con Plaspy. Reúne los ajustes prácticos de servidor y comandos de ejemplo usados para apuntar un TMT250 hacia Plaspy para el reporte de localización y eventos, y explica qué debe verificar antes de la integración. El contenido se basa en la descripción del dispositivo y ejemplos de configuración disponibles públicamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas Teltonika que utilice para la configuración. Esta guía se centra en los parámetros públicos y en un comando de parámetros de muestra comúnmente usado para configurar dispositivos Teltonika hacia servidores de terceros.

## Resumen de la configuración

El proceso de configuración prepara el TMT250 para que pueda comunicarse de forma fiable con Plaspy y reportar datos de ubicación y eventos. Para el TMT250 esto normalmente implica proporcionar los datos APN de la red, el endpoint del servidor de Plaspy y guardar una opción de transporte si el dispositivo lo requiere. Los dispositivos Teltonika suelen poder configurarse vía comandos SMS o mediante las herramientas Teltonika Configurator; el ejemplo modelConfiguration abajo muestra un comando compacto por lotes que establece APN y parámetros de servidor.

- Apuntar el rastreador al dominio o IP del servidor de Plaspy para que envíe telemetría
- Proveer los parámetros correctos de APN y conectividad SIM para GPRS y SMS
- Confirmar la selección de transporte (UDP o TCP) cuando el dispositivo lo solicite
- Guardar y aplicar los ajustes y luego validar que el dispositivo aparezca en Plaspy
- Probar el reporte de eventos como alarma o man down para verificar la visibilidad de extremo a extremo

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

## Requisitos habituales antes de la configuración

- Un TMT250 cargado y funcionando con acceso a su interfaz de configuración
- Una SIM GSM válida provista con datos móviles y SMS si va a usar SMS o GPRS
- Acceso a los métodos de configuración Teltonika como comandos SMS o Teltonika Configurator por USB o Bluetooth
- Conocer los valores APN correctos de su operador móvil para completar [apn], [apnu] y [apnp]
- Una cuenta en Plaspy o el contacto necesario para registrar el dispositivo en la plataforma si su organización lo requiere
- Confirmar que el firmware del dispositivo sea lo bastante reciente para aceptar el formato de parámetros mostrado

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para comunicarse con Plaspy, el TMT250 reporta ubicación, movimiento y eventos de alarma al endpoint y puerto compartidos de Plaspy. Plaspy escucha en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo del dispositivo entrante, por lo que la conectividad básica y los ajustes correctos del servidor son los pasos esenciales.

- El rastreador utiliza GPRS para enviar telemetría a d.plaspy.com o a la IP de servidor proporcionada
- El dispositivo transmite al puerto 8888 como puerto remoto configurado
- Puede elegir el transporte UDP o TCP en el dispositivo si el firmware lo requiere
- Botón de emergencia, man down y eventos de movimiento se envían a Plaspy para su visibilidad
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Teltonika para su TMT250, como comandos SMS o el software Teltonika Configurator por USB o Bluetooth.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP de servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto remoto a 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el dispositivo solicita selección de transporte durante la configuración.
5. Proporcione los parámetros de APN y autenticación SIM cuando sean requeridos y asegúrese de que el dispositivo tenga conectividad de red.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o la herramienta exige un reinicio para aplicar los ajustes.
7. Valide que el TMT250 reporte a Plaspy, que el dispositivo sea visible en la plataforma y que eventos como la pulsación del botón de alarma se reciban correctamente.

## Comandos de configuración de ejemplo

El modelConfiguration proporciona un comando estándar por lotes de parámetros usado con dispositivos Teltonika para establecer APN y parámetros de servidor. Este comando puede enviarse por SMS o aplicarse usando las herramientas de configuración Teltonika donde estén soportadas. Conserve los marcadores de posición y reemplácelos por los valores de su operador.

- Ejemplo de comando batch setparam para TMT250

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores de posición:
- [apn] es el nombre APN del operador móvil requerido para la conectividad de datos
- [apnu] es el nombre de usuario del APN cuando lo solicite el operador
- [apnp] es la contraseña del APN cuando lo solicite el operador
- 2004 establece el dominio del servidor a d.plaspy.com para que el rastreador envíe datos a Plaspy
- 2005 establece el puerto remoto a 8888 que Plaspy utiliza para todos los dispositivos
- 2006 es un parámetro del dispositivo presente en el comando de ejemplo; consulte la documentación de Teltonika para obtener una descripción exacta de este parámetro según la versión de firmware
- Envíe este comando vía SMS al número del dispositivo o aplíquelo mediante Teltonika Configurator según el método de configuración elegido

## Notas de configuración

- Las versiones de firmware de Teltonika y las identificaciones de parámetros de configuración pueden variar; siempre confirme los números de parámetro correctos para la versión de firmware de su dispositivo.
- Elija UDP o TCP según la preferencia de despliegue y las opciones del firmware del dispositivo; Plaspy acepta ambos transportes en el puerto 8888.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta protocolos automáticamente, las configuraciones incorrectas más comunes son valores de APN erróneos o errores tipográficos en el dominio del servidor.
- El ajuste de parámetros vía SMS se muestra en el ejemplo y resulta útil para cambios remotos sin acceso físico al dispositivo.
- Mantenga una copia de la configuración aplicada y pruebe eventos clave como el botón de emergencia para confirmar el reporte de extremo a extremo.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TMT250 con Plaspy brinda a las organizaciones una visibilidad directa de dispositivos de seguridad personal y rastreadores para una sola persona. El compacto TMT250 combinado con el endpoint unificado de Plaspy simplifica el despliegue porque todos los rastreadores soportados usan el mismo puerto y Plaspy detecta automáticamente el protocolo, reduciendo la carga de configuración.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, comportamientos de firmware y definiciones exactas de parámetros, consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.

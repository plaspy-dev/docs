---
slug: /skypatrol/tt_9200/configuration
id: tt_9200-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 9200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para SkyPatrol TT 9200 con ajustes de servidor Plaspy y comandos AT de ejemplo
keywords:
  - Configuración SkyPatrol TT 9200
  - Instalación SkyPatrol TT 9200
  - Configuración TT 9200 Plaspy
  - Ajustes de servidor TT 9200
  - Configuración del rastreador SkyPatrol
  - Configuración de rastreador GPS Plaspy
  - Seguimiento de vehículos TT 9200
  - Comandos AT TT 9200
  - Protocolo EDDIE plus SkyPatrol
  - Integración de rastreadores Plaspy
---

# SkyPatrol - Configuración TT 9200

Esta página describe el contexto público de configuración para usar el SkyPatrol TT 9200 con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos que se usan comúnmente para apuntar dispositivos TT 9200 a Plaspy y validar la conectividad para rastreo e informes.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos y ejemplos que aparecen aquí como orientación pública y confirme los detalles específicos del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El objetivo al configurar un TT 9200 para Plaspy es preparar el rastreador para establecer una conexión de datos fiable al endpoint de Plaspy, autenticarse en la red móvil y reportar posiciones y eventos para que el dispositivo sea visible en la plataforma Plaspy.

- Configure el APN y la conectividad celular para que el rastreador tenga acceso a datos IP
- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma
- Seleccione el transporte (UDP o TCP) si el dispositivo solicita elegir uno
- Guarde y aplique los ajustes, luego reinicie o active el dispositivo para que los nuevos parámetros entren en vigor
- Verifique que el dispositivo reporta y aparece en Plaspy tras la configuración

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el TT 9200. Estos son los valores compartidos que Plaspy usa para todos los dispositivos compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP pueden usarse en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Un rastreador con batería cargada o una instalación con alimentación para poder configurar y probar el dispositivo
- Una SIM válida con datos habilitados y el APN correcto para la red móvil
- Acceso al método o software de configuración de SkyPatrol para el TT 9200, por ejemplo consola de comandos AT o herramienta del proveedor
- Conocimiento de las credenciales APN que pueda requerir la SIM (puede necesitar nombre de usuario y contraseña)
- Un método para reiniciar o activar el dispositivo después de aplicar la configuración
- Acceso administrativo a la cuenta o plataforma Plaspy para confirmar que el dispositivo aparece tras la configuración

## Cómo se conecta este rastreador a Plaspy

El TT 9200 se configura para abrir una sesión de datos y enviar mensajes de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos. Plaspy recibe la conexión del dispositivo y determina automáticamente el protocolo correcto, de modo que ingenieros y gestores de flota vean las actualizaciones del dispositivo sin necesidad de seleccionar un protocolo por dispositivo en el servidor.

- El rastreador establece una sesión GPRS o de datos celulares usando el APN configurado
- El dispositivo envía telemetría al endpoint Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; elija el que soporte su equipo y red
- Plaspy recibe la conexión y detecta automáticamente el protocolo del rastreador para decodificar los mensajes
- Una vez conectado, el dispositivo reporta ubicación y eventos configurados, por lo que queda visible en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración del SkyPatrol TT 9200, como la consola de comandos AT o la herramienta de configuración del proveedor.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto a 8888 como destino del servidor.
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte durante la configuración.
5. Configure el APN y las posibles credenciales APN para que el rastreador obtenga una conexión de datos.
6. Aplique o guarde la configuración en el dispositivo y persista los ajustes en memoria no volátil si es necesario.
7. Reinicie o envíe un comando de activación al dispositivo para que los nuevos ajustes entren en vigor.
8. Verifique que el dispositivo reporta a Plaspy y que aparece en la plataforma.

## Comandos de configuración de ejemplo

El SkyPatrol TT 9200 puede configurarse con comandos estilo AT. Los siguientes comandos públicos se proporcionan como un ejemplo ordenado extraído de contenidos de configuración públicos. Mantenga los marcadores de posición y sustituya la información del APN de su red donde corresponda.

- Secuencia común de comandos AT para configuración inicial y asignación de servidor

```text
AT&F
AT+CGDCONT=1,"IP","[apn]"
AT$CGPCO=1,"[apnu],[apnp]",0
AT$TTARG=2
AT$TTSRVDST=1,1,"54.85.159.138",8888,2
AT$TTWAKEUP=1,1
AT&W
AT$RESET
```

Notas sobre los comandos anteriores:
- AT&F restablece a los valores predeterminados de radio de fábrica como punto de partida para la configuración.
- AT+CGDCONT establece el contexto PDP con el marcador [apn]. Reemplace [apn] por el APN de datos de la SIM de su operador móvil.
- AT$CGPCO aparece con los marcadores [apnu] y [apnp] para usuario y contraseña del APN; incluya esto sólo si su operador requiere credenciales. Este comando puede variar según el firmware y las necesidades del operador.
- AT$TTSRVDST establece el destino del servidor. El ejemplo usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. El parámetro final en esta secuencia es específico del dispositivo; siga la guía del fabricante para el significado exacto de los parámetros.
- AT$TTWAKEUP habilita el comportamiento de activación o latido como parte del arranque; ajústelo según la instalación.
- AT&W guarda los ajustes en la memoria no volátil.
- AT$RESET realiza un reinicio del dispositivo; úselo cuando desee aplicar los ajustes inmediatamente. Considere marcarlo como opcional si prefiere reiniciar el dispositivo por corte de alimentación.

Si la herramienta del proveedor o el firmware expone los mismos campos en una interfaz gráfica, introduzca los mismos valores para APN, servidor y puerto allí en lugar de usar comandos AT directos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos AT disponibles y el orden de los parámetros; revise las notas de la versión del firmware antes de aplicar comandos.
- Use UDP o TCP según la fiabilidad de la red y el comportamiento del equipo; algunos instaladores prefieren UDP por menor sobrecarga y otros prefieren TCP por la fiabilidad de la sesión.
- Al insertar credenciales APN mantenga los marcadores [apn], [apnu] y [apnp] intactos hasta reemplazarlos por los valores de su operador.
- Si usa el dominio d.plaspy.com también puede proporcionar directamente la IP del servidor 54.85.159.138; ambos apuntan a Plaspy en el puerto 8888.
- Guardar los ajustes con AT&W y realizar un reinicio controlado ayuda a asegurar la persistencia de la configuración ante ciclos de energía.

## Por qué usar Plaspy con esta configuración

Usar el TT 9200 con Plaspy ofrece a las organizaciones una forma práctica de consolidar los informes de ubicación y eventos de un dispositivo SkyPatrol potente en una sola plataforma de gestión de flotas. El comportamiento de bajo consumo del TT 9200, su conectividad global quad-band y sus funciones avanzadas de geovallas combinan bien con la detección automática de protocolos de Plaspy y su endpoint estándar, haciendo que la incorporación de dispositivos sea más predecible.

Para saber más sobre Plaspy y cómo soporta integraciones de rastreadores visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware e instrucciones del fabricante, consulte la documentación de SkyPatrol en https://www.skypatrol.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.

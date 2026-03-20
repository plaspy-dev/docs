---
slug: /queclink/gv53mg/configuration
id: gv53mg-configuration
sidebar_label: Configuration
title: QuecLink - GV53MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GV53MG con el servidor Plaspy d.plaspy.com usando ajustes compartidos y comandos SMS
keywords:
  - Configuración QuecLink GV53MG
  - Instalación QuecLink GV53MG
  - Configuración GV53MG Plaspy
  - Configuración servidor GV53MG
  - Configuración tracker GPS QuecLink
  - Configuración seguimiento GV53MG
  - Configuración tracker Plaspy
  - Comandos SMS GV53MG
  - Configuración seguimiento de flota QuecLink
  - Integración plataforma GV53MG
---

# QuecLink - Configuración GV53MG

Esta página describe el contexto público de configuración para usar el tracker QuecLink GV53MG con Plaspy. Reúne los ajustes de servidor compartidos que emplea Plaspy y ofrece orientación práctica basada en la documentación pública del dispositivo, incluyendo los comandos SMS habitualmente utilizados para provisionar el GV53MG y apuntarlo a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando recibe datos. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, las herramientas del instalador o variaciones regionales. El GV53MG admite configuración por SMS y comandos de configuración GPRS documentados públicamente; esta página incluye esos comandos de ejemplo con explicaciones para cada paso.

## Resumen de configuración

Preparar el GV53MG para Plaspy consiste, principalmente, en apuntar el dispositivo al endpoint del servidor de Plaspy, asegurarse de que haya conectividad celular o posibilidad de provisión por SMS, y habilitar los parámetros de reporte que cubran sus necesidades de actualización y eventos. Los comandos que se muestran más abajo son ejemplos públicos por SMS usados para ajustar la zona horaria, APN, endpoint del servidor, intervalo de reporte y comportamiento de entradas.

- Configure el dispositivo para enviar telemetría y mensajes de ubicación al servidor Plaspy d.plaspy.com o a la IP de servidor equivalente
- Defina el APN y los datos de autenticación necesarios para que el tracker use datos móviles para reporte GPRS
- Establezca un intervalo de reporte regular para que Plaspy reciba actualizaciones de posición y eventos de forma oportuna
- Habilite entradas relevantes como botón SOS o alarma de remolque para que los eventos se reporten a la plataforma
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de aplicar los ajustes

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan los mensajes
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible por SMS o mediante la herramienta de configuración del fabricante
- SIM activa con datos habilitados y los valores APN correctos para el operador móvil objetivo
- Contraseña del dispositivo o credenciales de acceso cuando se requieran para la provisión por SMS o la herramienta del fabricante
- Conocimiento de los valores APN para reemplazar los marcadores [apn], [apnu] y [apnp]
- Una forma de recibir los reportes del dispositivo en Plaspy para validar el registro y la entrega de telemetría
- Acceso a la referencia oficial de configuración de QuecLink o a la documentación del instalador para el GV53MG

## Cómo se conecta este tracker a Plaspy

El GV53MG se configura para enviar telemetría en vivo y en búfer a Plaspy enviando mensajes GPRS al endpoint y puerto compartidos de Plaspy. Plaspy ingiere mensajes por TCP o UDP, reconoce automáticamente el protocolo y hace que el dispositivo sea visible en paneles y alertas.

- El dispositivo envía mensajes de ubicación y telemetría al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker, por lo que el dispositivo puede usar UDP o TCP según su configuración
- Alertas de eventos como SOS o disparos en entradas se transmiten a Plaspy para notificación inmediata
- Los mensajes en búfer se entregan cuando se restablece la conectividad, de modo que Plaspy recibe los datos de posición y eventos encolados
- Los intervalos de reporte regulares aseguran visibilidad continua y el registro histórico de posiciones en Plaspy

## Flujo común de configuración

1. Acceda al método de configuración oficial de QuecLink para el GV53MG, como la provisión por SMS o la herramienta del fabricante soportada
2. Proporcione o confirme la contraseña del dispositivo para los comandos SMS si se requiere — la contraseña por defecto en ejemplos públicos es queclink
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP alternativa 54.85.159.138 en la configuración de servidor del dispositivo
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el dispositivo solicita elegir el transporte
5. Configure el APN y las credenciales relacionadas usando los marcadores [apn], [apnu] y [apnp] según corresponda para su SIM
6. Aplique o guarde la configuración y reinicie el dispositivo si el tracker lo requiere
7. Valide que el dispositivo reporte a Plaspy y que los mensajes de ubicación y eventos aparezcan en la plataforma

## Comandos de configuración de ejemplo

Los siguientes comandos tipo SMS son ejemplos públicos para provisionar el GV53MG. Usan el parámetro de contraseña del dispositivo según se muestra. La contraseña por defecto en estos ejemplos es queclink. Envíe los comandos como mensajes SMS al número del dispositivo o use el canal de provisión del fabricante.

1. Reinicio de fábrica inicial opcional
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Este comando restaura la configuración de fábrica. Úselo solo cuando sea necesario un reinicio inicial.

2. Establecer la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el nombre de punto de acceso del operador
- [apnu] es el nombre de usuario del APN si lo requiere el proveedor de SIM
- [apnp] es la contraseña del APN si lo requiere el proveedor de SIM

4. Configurar el servidor GPRS a Plaspy usando dominio e IP con puerto
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando configura el dispositivo para reportar a Plaspy usando d.plaspy.com y la IP 54.85.159.138 en el puerto 8888.

5. Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos
- Preserve el parámetro de contraseña del dispositivo cuando sea requerido por la sintaxis del comando. Los ejemplos públicos usan queclink como contraseña.
- Envíe cada comando como un SMS separado a menos que su flujo de provisión admita comandos por lotes.
- Los comandos y el formato exacto de los parámetros pueden variar según la versión de firmware. Confirme con la documentación oficial de QuecLink si tiene dudas.

## Observaciones de configuración

- Aquí se muestra la provisión por SMS según la guía pública, pero las herramientas o el software de configuración del fabricante pueden ofrecer métodos alternativos
- Las revisiones de firmware y hardware pueden cambiar los formatos de comando aceptados o los parámetros disponibles, por lo que confirme los comandos con la documentación de firmware vigente
- Elija UDP o TCP según las necesidades de su despliegue y las consideraciones de fiabilidad de la red. Plaspy detectará automáticamente el protocolo usado
- Plaspy requiere el puerto 8888 para todos los dispositivos, así que use ese puerto al configurar el GV53MG
- Mantenga los marcadores [apn], [apnu] y [apnp] para los valores específicos del operador y no comparta credenciales sensibles en canales públicos

## Por qué usar Plaspy con esta configuración

Usar el GV53MG con Plaspy ofrece una vía compacta y segura para el reporte de ubicación y eventos vehiculares. Al ingerir mensajes en el endpoint y puerto compartidos, Plaspy proporciona visibilidad consistente, manejo de mensajes en búfer y notificaciones de eventos que respaldan la recuperación y los flujos operativos.

Para obtener más información sobre Plaspy y cómo soporta la integración de dispositivos y la gestión de flotas visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y referencias de configuración verifique los detalles en el sitio oficial de QuecLink https://www.queclink.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.

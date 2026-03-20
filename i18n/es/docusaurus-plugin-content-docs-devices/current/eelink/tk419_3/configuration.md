---
slug: /eelink/tk419_3/configuration
id: tk419_3-configuration
sidebar_label: Configuration
title: EElink - TK419‑3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink TK419‑3 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos para la integración
keywords:
  - Configuración EElink TK419‑3
  - Configuración EElink TK419 para Plaspy
  - Configuración servidor TK419‑3
  - Configuración rastreador GPS EElink
  - Configuración de rastreador en Plaspy
  - Configuración de rastreo vehicular
  - Rastreador para gestión de flotas
  - Comandos SMS TK419‑3
  - Integración rastreador EElink
  - Configuración de plataforma para rastreadores GPS
---

# EElink - Configuración del TK419‑3

Esta página aborda el contexto público de configuración para usar el EElink TK419‑3 con Plaspy. Describe los parámetros publicados y los comandos SMS prácticos que se emplean comúnmente para apuntar el dispositivo al servidor de Plaspy, de modo que el rastreador pueda enviar ubicaciones, eventos de E/S y alarmas a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se concentra en los parámetros públicos y el flujo común de comandos SMS utilizados para preparar el TK419‑3 para la integración con Plaspy.

## Resumen de la configuración

Este proceso prepara el TK419‑3 para comunicarse de forma fiable con Plaspy usando el endpoint y el puerto de la plataforma. Los pasos que siguen cubren los objetivos prácticos de la configuración y lo que debe validar antes de esperar datos en Plaspy.

- Configure el dispositivo para usar Plaspy como su servidor GPRS/TCP o UDP para que GNSS y telemetría lleguen a Plaspy.
- Establezca el APN correcto y las credenciales opcionales para que el dispositivo pueda iniciar una conexión de datos móviles.
- Elija el transporte (UDP o TCP) y confirme que el dispositivo esté apuntando al endpoint y puerto que Plaspy utiliza para todos los dispositivos.
- Defina un intervalo de reporte adecuado según su caso de uso y las limitaciones de batería o datos.
- Verifique la configuración y la conectividad con las herramientas del fabricante o mediante comandos SMS y confirme que el dispositivo aparezca en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the TK419‑3 may be configured to use either transport
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so the TK419‑3 should be pointed to port 8888 for platform compatibility

## Requisitos habituales antes de la configuración

- Un TK419‑3 con alimentación, instalado o en una fuente de alimentación de banco dentro de su rango de tensión operativo
- Una tarjeta SIM válida con datos móviles y SMS habilitados y los detalles de APN proporcionados por el operador
- Acceso al método de configuración del fabricante para este modelo (el TK419‑3 admite comandos SMS)
- Los valores correctos de APN y, opcionalmente, usuario y contraseña del APN proporcionados por su operador
- Una cuenta en Plaspy y el flujo de registro de dispositivos disponible para confirmar que el equipo aparece en la flota
- Un teléfono o una herramienta de SMS capaz de enviar los comandos de configuración si usa la configuración vía SMS

## Cómo se conecta este rastreador a Plaspy

El TK419‑3 se configura para enviar las posiciones GNSS, los estados de E/S y las alarmas al endpoint y puerto del servidor Plaspy para que la plataforma pueda recibir y visualizar los datos. Una vez apuntado a Plaspy, el equipo envía actualizaciones periódicas e informes impulsados por eventos al endpoint compartido.

- El rastreador se configura para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador
- Las actualizaciones de ubicación y la telemetría se procesan en Plaspy para mostrarse en el mapa, generar alertas y conservar historiales
- El dispositivo puede reportar encendido de ignición, alarmas y otros eventos compatibles para que aparezcan en la plataforma
- Usar el APN correcto asegura que el rastreador pueda establecer GPRS o LTE para alcanzar el endpoint de Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración del EElink TK419‑3. Para este modelo, la configuración por SMS es una opción publicada o utilice las herramientas del proveedor si están disponibles.
2. Ingrese el host del servidor Plaspy enviando el comando SERVER usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Configure el APN y las credenciales opcionales para la SIM instalada para que el dispositivo pueda conectarse a datos móviles.
6. Aplique y guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo exige.
7. Valide que el TK419‑3 reporte a Plaspy comprobando la actividad del dispositivo en su cuenta Plaspy y usando el comando PARAM para verificación cuando esté disponible.

## Ejemplos de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos por SMS en el orden mostrado. Mantenga los marcadores de posición al enviar los comandos relacionados con el APN.

- Optional initial factory reset
```text
FACTORY#
```
- Set the time zone to UTC 0 (example)
```text
GMT,E,0#
```
- Set the operator APN. Replace the placeholders as needed:
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
Explanation: [apn] is your carrier APN. [apnu] and [apnp] are optional APN username and password fields and may be omitted if not required by the operator.

- Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server using the Plaspy server IP and port
```text
SERVER,0,54.85.159.138,8888#
```
Note: Either the domain or the IP may be used. Plaspy uses port 8888 for all supported devices and automatically detects the protocol.

- Set the update interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```

Siga el orden de comandos al realizar una configuración inicial. Etiquete el comando FACTORY# como opcional y úselo solo si necesita un restablecimiento de fábrica antes de volver a configurar.

## Notas de configuración

- La configuración vía SMS es una opción publicada para este dispositivo; según el proveedor, también pueden existir herramientas del fabricante o utilidades OTA.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles. Confirme el formato exacto del comando con la documentación de EElink para su versión de firmware.
- TCP y UDP son admitidos; elija el transporte requerido por su red y su equipo de operaciones. Plaspy detectará el protocolo del rastreador automáticamente.
- Asegúrese de que las credenciales del APN sean correctas antes de configurar el servidor; los APN faltantes o incorrectos impiden que el dispositivo llegue a d.plaspy.com o a 54.85.159.138.
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que debe emplear ese puerto al configurar el TK419‑3.

## Por qué usar Plaspy con esta configuración

Usar el TK419‑3 con Plaspy ofrece visibilidad centralizada de la ubicación, eventos de E/S y alarmas, de modo que los operadores de flota puedan supervisar activos en tiempo real, configurar alertas y revisar telemetría histórica. La combinación de GNSS multiconstelación y opciones de configuración remota hace que el TK419‑3 sea adecuado para rastreo de flotas, flujos anti robo y telemetría de sensores cuando se integra en una plataforma como Plaspy.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y consulte al fabricante para los detalles más recientes del dispositivo en https://www.eelink.com.cn/. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y las opciones del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones vigentes en el sitio oficial de EElink.

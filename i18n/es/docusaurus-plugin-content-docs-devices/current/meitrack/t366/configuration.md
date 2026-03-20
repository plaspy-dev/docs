---
slug: /meitrack/t366/configuration
id: t366-configuration
sidebar_label: Configuration
title: Meitrack - T366 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar un rastreador Meitrack T366 a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Meitrack T366
  - Instalación Meitrack T366
  - Configuración de servidor Meitrack T366
  - Meitrack T366 en Plaspy
  - Instalación rastreador GPS T366
  - Configuración rastreador Meitrack
  - Configuración software de rastreo T366
  - Configuración plataforma GPS Meitrack T366
  - Configuración de seguimiento de flotas T366
  - Compatibilidad Meitrack Plaspy
---

# Meitrack - T366 Configuración

Esta página presenta la información pública necesaria para usar el rastreador Meitrack T366 con Plaspy. Describe los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, explica el flujo de configuración habitual y muestra ejemplos de comandos SMS públicos del fabricante que se utilizan comúnmente para preparar el T366 antes de integrarlo con la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T366 suele soportar configuración por SMS y reporte por GPRS; los comandos SMS públicos que se muestran más abajo sirven para preparar el dispositivo para conectarlo a Plaspy.

## Visión general de la configuración

El objetivo de la configuración es preparar el T366 para comunicarse de forma fiable con Plaspy, de modo que el dispositivo sea visible en la plataforma y reporte ubicación y telemetría según los intervalos esperados. La configuración típica se enfoca en establecer el endpoint del servidor GPRS, el tipo de transporte, el intervalo de reporte, la zona horaria y el reporte de eventos para que Plaspy reciba telemetría y estado utilizables.

- Apuntar el dispositivo al endpoint de servidor de Plaspy para que los datos se dirijan a la plataforma.
- Configurar el tipo de transporte y el puerto compartido de la plataforma según los requisitos de Plaspy.
- Establecer un intervalo de reporte y la zona horaria para que las actualizaciones de ubicación aparezcan correctamente en Plaspy.
- Habilitar o configurar el reporte de eventos y el estado del inmovilizador para que las alarmas y los flujos de control estén disponibles en la plataforma.
- Validar la conectividad y confirmar que el dispositivo es visible en Plaspy antes de finalizar la instalación.

## Ajustes de servidor de Plaspy

Use estos valores públicos de Plaspy al configurar el T366 para que reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos valores son los endpoints públicos de la plataforma que debe usar al ingresar la configuración del servidor en el dispositivo o mediante comandos SMS.

## Requisitos habituales antes de la configuración

- Dispositivo alimentado con una instalación eléctrica confiable y, si corresponde, batería de respaldo conectada.
- SIM activa con servicio de datos y capacidad de SMS si va a usar SMS o GPRS para configuración y reporte.
- Capacidad para enviar SMS al rastreador desde un número autorizado o acceso a la herramienta de configuración del proveedor cuando esté disponible.
- Conocimiento de la contraseña del dispositivo para configuración; los comandos públicos de ejemplo a continuación usan la contraseña predeterminada 0000.
- Acceso al método oficial de configuración de Meitrack, notas de firmware o guía de instalación para confirmar la sintaxis de los comandos y las opciones soportadas.
- Antena GNSS externa y periféricos RS232 conectados cuando sean necesarios para los sensores de telemetría que se usarán en su despliegue.

## Cómo se conecta este rastreador a Plaspy

El T366 envía fixes GNSS y telemetría al endpoint compartido de servidor y puerto de Plaspy para que la plataforma ingiera datos de ubicación, eventos y sensores para seguimiento en tiempo real e informes históricos. El dispositivo puede usar conectividad GSM GPRS para reenviar datos y soporta almacenamiento en búfer offline y actualizaciones OTA para mantener continuidad cuando las conexiones son intermitentes.

- El rastreador reporta fixes GPS y telemetría a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP; Plaspy acepta ambos y detectará el protocolo automáticamente.
- El reporte de eventos y alarmas (por ejemplo inmovilizador o colisión) se envía a la plataforma para alertas y automatización de flujos.
- El búfer offline almacena puntos recientes si la conectividad cae y el dispositivo reenvía los registros almacenados cuando se restablece el enlace.
- La ingesta en Plaspy habilita visibilidad, reportes y workflows de control remoto para telemetría y salidas del inmovilizador.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Meitrack o a la documentación del proveedor para confirmar los comandos soportados por el firmware de su dispositivo.
2. Prepare el dispositivo: enciéndalo, asegúrese de que la SIM tenga datos y SMS habilitados y confirme la contraseña del dispositivo (los ejemplos usan la contraseña predeterminada 0000).
3. Ingrese el endpoint de servidor de Plaspy, ya sea el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración y realice cualquier reinicio recomendado en el dispositivo.
6. Valide la conectividad confirmando que el dispositivo reporta a Plaspy y aparece en el panel de la plataforma o verificando los registros del servidor para conexiones entrantes.

Si usa configuración por SMS, siga el orden de comandos del fabricante de forma precisa y verifique que los marcadores de posición como los valores APN sean reemplazados por las credenciales de su operador antes de enviar.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos que se usan comúnmente para configurar un Meitrack T366. La configuración de muestra usa la contraseña predeterminada del dispositivo 0000. Conserve los valores de marcador de posición al preparar sus mensajes.

1. Reinicio opcional a valores de fábrica (usar solo si es necesario)
```
0000,F11
```
2. Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN de su operador y, opcionalmente, usuario y contraseña del APN:
```
0000,A21,2,54.85.159.138,8888,{{apn}}
```
Si su SIM requiere usuario y contraseña del APN, proporciónelos como campos adicionales separados por comas:
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} = nombre del APN del operador
- {{apnu}} = usuario del APN (opcional)
- {{apnp}} = contraseña del APN (opcional)

3. Establecer la zona horaria a UTC+0 (ajuste el valor según su zona local)
```
0000,B36,0
```
4. Ajustar el intervalo de actualización/reporte GPS a 1 minuto
```
0000,A12,6,0
```
5. Configurar el reporte de eventos (ejemplo habilitando eventos por defecto)
```
0000,C03,0
```

Envíe estos comandos SMS desde un número autorizado o usando la herramienta del proveedor según la documentación de Meitrack. Mantenga el orden de comandos al realizar la configuración inicial; el comando de valores de fábrica es opcional y solo debe usarse cuando sea necesario restablecer.

## Notas de configuración

- Las revisiones de firmware y de hardware pueden cambiar la sintaxis y el comportamiento de los comandos. Confirme los formatos de los comandos con las notas de la versión del firmware del dispositivo.
- La configuración por SMS se muestra arriba y es compatible comúnmente con los dispositivos Meitrack; el software del proveedor o herramientas por puerto serie también pueden estar disponibles para configuraciones masivas o avanzadas.
- Elija UDP o TCP según su instalación y el comportamiento del operador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, asegúrese de que el puerto 8888 esté permitido en cualquier firewall de red entre el dispositivo y la Internet.
- Reemplace los marcadores de APN por los valores exactos proporcionados por su operador antes de enviar los comandos SMS.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack T366 con Plaspy proporciona a gerentes de flota y administradores de activos telemetría confiable y visibilidad de ubicación en tiempo real en una plataforma que acepta un endpoint de servidor compartido y detecta automáticamente protocolos de rastreadores. El diseño robusto del T366, su relé inmovilizador, el soporte de telemetría RS232, el búfer offline y la capacidad OTA se combinan con la ingesta y análisis de Plaspy para ofrecer monitoreo continuo, flujos antirobo y reportes operativos.

Para obtener más información sobre Plaspy y cómo se integra con una amplia gama de rastreadores visite https://www.plaspy.com. Para la sintaxis de comandos específica del dispositivo más reciente, comportamiento del firmware y guía de instalación detallada, verifique la información actual en el sitio del fabricante https://www.meitrack.com/

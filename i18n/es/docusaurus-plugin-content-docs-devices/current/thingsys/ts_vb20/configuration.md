---
slug: /thingsys/ts_vb20/configuration
id: ts_vb20-configuration
sidebar_label: Configuration
title: ThingSys - TS-VB20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS-VB20 con ajustes de servidor Plaspy, comandos SMS y pasos para una integración sencilla
keywords:
  - Configuración ThingSys TS-VB20
  - Instalación ThingSys TS-VB20
  - Integración TS-VB20 Plaspy
  - Configuración servidor TS-VB20
  - Configuración rastreador GPS TS-VB20
  - Configuración rastreador OBDII
  - Configuración rastreador Plaspy
  - Configuración telemetría vehicular
  - Configuración rastreo de flotas
  - Configuración SMS TS-VB20
---

# ThingSys - Configuración del TS-VB20

Esta página describe el contexto público de configuración para usar el ThingSys TS-VB20 con Plaspy. Se concentra en los ajustes de servidor compartidos que Plaspy requiere, el flujo práctico para preparar el dispositivo y los comandos SMS de configuración publicados para este modelo. Utilice esta guía para alinear un TS-VB20 OBDII para su conexión a la plataforma Plaspy, conservando la documentación del fabricante a la mano para detalles específicos del dispositivo.

Plaspy usa un único endpoint de servidor y puerto compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos SMS y el flujo aquí como una referencia pública y práctica, no como un manual exhaustivo del fabricante.

## Resumen de la configuración

El objetivo al configurar el TS-VB20 para Plaspy es establecer conectividad GPRS confiable con los servidores de Plaspy, confirmar que el dispositivo puede enviar posición y telemetría OBD, y que el equipo sea visible en la plataforma Plaspy. Para este modelo, la configuración pública suele realizarse mediante comandos SMS y la instalación plug-and-play en el conector OBDII para habilitar los reportes.

- Configure el APN y credenciales para que el equipo pueda conectarse a la red GPRS.
- Asegure que el dispositivo apunte al endpoint y puerto del servidor Plaspy para que la telemetría se reenvíe a la plataforma.
- Elija el modo de transporte (UDP o TCP) si el equipo lo requiere y guarde los ajustes.
- Verifique que el dispositivo reporte a Plaspy y que la ubicación y la telemetría OBD aparezcan en la plataforma.
- Opcionalmente realice un restablecimiento de fábrica al preparar un equipo para un nuevo despliegue.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS y búsquedas
- IP del servidor 54.85.159.138 para configuración directa por IP si es necesario
- Puerto 8888 como puerto de destino para todos los dispositivos Plaspy
- Soporte de transporte por UDP o TCP según el firmware del dispositivo y la preferencia
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden usar el mismo puerto y ser procesados en la plataforma

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo, lo que simplifica la configuración del servidor en el lado del rastreador.

## Requisitos típicos antes de la configuración

- Un tomacorriente OBDII del vehículo con alimentación o una fuente de alimentación equivalente para la configuración y pruebas iniciales
- Una SIM celular válida con servicio de datos o GPRS activo y compatible con el equipo
- Acceso al método de configuración SMS de ThingSys o a la herramienta oficial de configuración de ThingSys
- Conocimiento de la contraseña por defecto del dispositivo cuando aplique (el ejemplo público por defecto es 123456)
- Acceso físico al vehículo para conectar el TS-VB20 al puerto OBDII y monitorear los LED de estado
- Un teléfono capaz de enviar SMS al dispositivo si usa configuración por SMS

## Cómo se conecta este rastreador a Plaspy

El TS-VB20 envía ubicación y telemetría OBDII a la plataforma Plaspy a través de GPRS. La configuración indica al rastreador que reenvíe sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera las actualizaciones de ubicación y la telemetría derivada del ECU para monitoreo e informes.

- El dispositivo se configura para apuntar a d.plaspy.com o a 54.85.159.138 como endpoint del servidor
- Todos los datos se envían al puerto 8888 que Plaspy usa para la ingestión de dispositivos
- El rastreador usará UDP o TCP según lo seleccionado durante la configuración y Plaspy detectará automáticamente el protocolo usado
- La telemetría incluye actualizaciones de ubicación GPS/AGPS/LBS y señales derivadas del OBDII para visibilidad del vehículo
- Plaspy recibe la telemetría y presenta eventos, alertas de geovallas, reproducción de viajes y datos diagnósticos básicos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de ThingSys o al software, o prepárese para enviar comandos SMS según documente ThingSys.
2. Asegúrese de que el dispositivo tenga alimentación y una SIM activa, y conozca la contraseña por defecto (ejemplo público 123456) antes de enviar comandos.
3. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138, y configure el puerto 8888.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Guarde o aplique la configuración en el equipo y, si aplica, reinicie el rastreador para que los ajustes de red entren en vigor.
6. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y la telemetría entrante en la plataforma Plaspy.
7. Si hay problemas de conectividad, considere un restablecimiento de fábrica opcional y repita la configuración, o consulte la documentación de ThingSys.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del TS-VB20 para este modelo usan comandos SMS. La contraseña pública por defecto mostrada en ejemplos del fabricante es 123456. Los comandos se presentan en el orden publicado. Reemplace los marcadores de posición por sus valores operativos cuando corresponda.

1. Restablecimiento de fábrica inicial opcional (usar solo cuando sea necesario)
```text
FORMAT
```

2. Establecer el APN del operador
```text
apn123456 {{apn}}
```
- El marcador {{apn}} indica que debe reemplazarlo por el APN de su operador móvil.

3. Establecer el nombre de usuario del APN
```text
apnuser123456 {{apnu}}
```
- El marcador {{apnu}} indica que debe reemplazarlo por el nombre de usuario del APN si su operador lo requiere.

4. Establecer la contraseña del APN
```text
apnpasswd123456 {{apnp}}
```
- El marcador {{apnp}} indica que debe reemplazarlo por la contraseña del APN si su operador lo requiere.

5. Configurar el servidor GPRS con la IP y el puerto de Plaspy (ejemplo público)
```text
ip54.85.159.138 8888
```
- Este comando configura el dispositivo para usar la IP y el puerto del servidor Plaspy según los ejemplos públicos. Si su dispositivo admite configuración por nombre de host, puede usar el dominio d.plaspy.com como host del servidor cuando la sintaxis del fabricante lo permita.

Comando de verificación para solicitar la configuración actual
```text
CXZT
```
- Envíe CXZT para que el dispositivo devuelva el estado de configuración cuando el firmware lo soporte.

Notas importantes sobre los comandos SMS
- Los comandos anteriores incluyen la secuencia de contraseña de ejemplo público tal como se muestra en los ejemplos públicos de ThingSys. Algunas sintaxis de comandos requieren que la contraseña del dispositivo se inserte en el texto del comando. Mantenga la contraseña por defecto 123456 como en los ejemplos públicos salvo que la haya cambiado.
- Envíe los comandos SMS desde un teléfono autorizado y espere confirmaciones por SMS del dispositivo si el firmware soporta acuse de recibo.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las funciones disponibles; siempre verifique con la documentación de ThingSys para la versión de firmware específica del TS-VB20.
- El modelo admite configuración por SMS en los ejemplos públicos. Si tiene acceso a una herramienta oficial de configuración de ThingSys, prefiera esa opción para aprovisionamiento masivo.
- Cuando el dispositivo lo ofrezca, UDP suele proporcionar menor overhead mientras que TCP puede ofrecer entrega más fiable; elija según las condiciones de red y las necesidades de la flota.
- Plaspy recibe la telemetría de los dispositivos en un único puerto compartido y detecta automáticamente el protocolo, por lo que la configuración del puerto del servidor es consistente entre dispositivos.
- Si usa el comando de servidor basado en IP mostrado arriba, alternativamente puede configurar el equipo para usar d.plaspy.com cuando la sintaxis del dispositivo soporte nombres de host.

## Por qué usar Plaspy con esta configuración

Configurar el ThingSys TS-VB20 para enviar telemetría a Plaspy brinda a flotas y propietarios visibilidad centralizada sobre ubicación, eventos de conducción y salud básica del vehículo. La forma plug-and-play del TS-VB20 en OBDII, combinada con la ingestión y detección de protocolos de Plaspy, facilita desplegar rastreadores en múltiples vehículos manteniendo ajustes de servidor consistentes.

Para saber más sobre Plaspy y cómo procesa la telemetría de los rastreadores visite https://www.plaspy.com. Para sintaxis de comandos específicas, notas de firmware y orientación de instalación actualizadas, siempre verifique la documentación del fabricante en https://www.thingsys.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.

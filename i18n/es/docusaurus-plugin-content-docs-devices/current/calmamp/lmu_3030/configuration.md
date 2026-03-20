---
slug: /calmamp/lmu_3030/configuration
id: lmu_3030-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-3030 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-3030 y conectarlo a Plaspy con servidor compartido y comandos SMS
keywords:
  - Configuración CalmAmp LMU-3030
  - Instalación CalmAmp LMU-3030
  - CalmAmp LMU-3030 Plaspy
  - Configuración de servidor LMU-3030
  - Configuración rastreador GPS LMU-3030
  - Configuración software seguimiento CalmAmp
  - Configuración OBD II LMU-3030
  - Configuración rastreador Plaspy
  - Configuración dispositivo GPS Plaspy
  - Ajustes APN CalmAmp LMU-3030
---

# CalmAmp - Configuración del LMU-3030

Esta página describe el contexto público de configuración para usar el CalmAmp LMU-3030 con la plataforma Plaspy. Explica los ajustes de servidor compartido de Plaspy que debe aplicar al rastreador y presenta el flujo práctico de comandos SMS de uso común en muchas instalaciones LMU-3030 para orientar el equipo hacia un servidor externo.

Plaspy utiliza el mismo endpoint de servidor y puerto en todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como interfaces SMS o sistemas de gestión CalAmp, por lo que trate los comandos y el flujo aquí como una guía práctica y públicamente documentada basada en los comandos de configuración del LMU-3030 que se muestran a continuación.

## Resumen de la configuración

El objetivo es preparar el LMU-3030 para que pueda comunicarse de forma fiable con Plaspy, validar esa conectividad y aparecer en la interfaz de monitoreo de la flota de Plaspy. En dispositivos LMU-3030 esto normalmente implica configurar el APN y los parámetros de servidor por SMS o mediante la herramienta del fabricante, y luego verificar la conectividad.

- Establecer el APN del operador y las credenciales APN opcionales para que el dispositivo use datos celulares.
- Apuntar el dispositivo a Plaspy introduciendo el dominio o IP del servidor compartido y el puerto de la plataforma.
- Elegir el transporte (UDP o TCP) si el rastreador requiere selección de transporte y guardar la configuración.
- Reiniciar o volver a arrancar el dispositivo para que los nuevos ajustes entren en vigor.
- Verificar que la configuración es correcta y que el dispositivo reporta en Plaspy con éxito.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos habituales antes de la configuración

- Un LMU-3030 con alimentación y una SIM celular funcional capaz de usar GPRS o mensajería SMS mejorada.  
- Nombre del APN y, si se requiere, usuario y contraseña APN del operador de la SIM.  
- Acceso al método de configuración del LMU-3030 que prefiera (comandos por SMS o la herramienta de aprovisionamiento del fabricante).  
- Conocimiento del MID o identificador del dispositivo si su flujo SMS lo requiere (el LMU-3030 responde a !R0 para reportar su MID).  
- Capacidad para reiniciar el equipo después de aplicar ajustes, ya sea por comando o por ciclo de energía.  
- Acceso al soporte de CalAmp o a PULS si su implementación usa aprovisionamiento por aire y gestión de firmware.

## Cómo se conecta este rastreador a Plaspy

El LMU-3030 se configura para enviar posiciones y mensajes operativos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar la ubicación del vehículo y los eventos. Plaspy acepta conexiones entrantes en el puerto estándar y determina el protocolo del dispositivo automáticamente.

- El dispositivo se orienta a d.plaspy.com o a 54.85.159.138 como destino del servidor.  
- El dispositivo envía datos al puerto 8888 de la plataforma Plaspy.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo y el comportamiento de la red.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo dentro de Plaspy.  
- Tras el primer reporte del dispositivo al endpoint configurado, Plaspy mostrará el equipo y sus mensajes en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del CalmAmp LMU-3030 que vaya a utilizar, por ejemplo comandos SMS o una herramienta de aprovisionamiento de CalAmp.  
2. Obtenga el MID o identificador del equipo si su flujo SMS lo requiere (el LMU-3030 responde con el MID tras el comando !R0).  
3. Introduzca el destino del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor correspondiente.  
4. Configure el puerto del servidor en 8888.  
5. Seleccione UDP o TCP en el equipo si el rastreador requiere elegir el transporte.  
6. Aplique o guarde la configuración en el rastreador y reinícielo si es necesario.  
7. Valide que el dispositivo se registre y empiece a reportar en Plaspy al servidor y puerto configurados.

## Comandos de configuración de ejemplo

El CalmAmp LMU-3030 puede configurarse mediante comandos SMS en muchas implementaciones. Los comandos públicos que siguen se usan comúnmente para establecer APN, servidor y puerto. El dispositivo espera el identificador MID cuando sea requerido; el MID es el valor de 10 dígitos devuelto por el comando !R0. Mantenga el orden al aplicar estos comandos vía SMS.

- Set operator APN
```text
!RP,2306,0,[apn]
```
- Set APN username (only if required by the operator)
```text
!RP,2314,0,[apnu]
```
- Set APN password (only if required by the operator)
```text
!RP,2315,0,[apnp]
```
- Set the GPRS server IP for Plaspy
```text
!RP,2319,0,54.85.159.138
```
- Set the server port to Plaspy port
```text
!RP,769,0,8888
```
- Reboot the tracker to apply settings (label as reboot)
```text
!R3,70,0
```
- Check current device settings (verification command)
```text
!RO
```

Notas sobre los marcadores:
- [apn] es un marcador para el APN de su operador móvil.  
- [apnu] y [apnp] son marcadores para el usuario y la contraseña APN si su operador los requiere.  
- El identificador MID de 10 dígitos que usan algunos flujos SMS se obtiene emitiendo !R0 y leyendo la respuesta del dispositivo.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden afectar el soporte exacto de comandos y la numeración de parámetros; consulte las respuestas del dispositivo y la documentación de CalAmp si un comando se comporta de forma distinta.  
- El LMU-3030 soporta mensajería SMS mejorada o UDP para la comunicación; elija UDP o TCP según las opciones del dispositivo y la red.  
- La configuración por SMS es una vía práctica para actualizaciones en campo, pero implementaciones más grandes pueden usar CalAmp PULS o una herramienta de aprovisionamiento para gestión OTA.  
- Mantenga el orden de los ajustes de servidor y APN cuando la documentación del fabricante indique que es obligatorio, y reinicie el dispositivo después de aplicar cambios de servidor.  
- Verifique las credenciales APN del operador antes de enviar comandos para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un CalmAmp LMU-3030 correctamente configurado proporciona a las organizaciones visibilidad consistente de la ubicación de sus vehículos y reportes básicos de eventos mediante un único endpoint de servidor compartido. Orientar el LMU-3030 al dominio o IP de Plaspy y usar el puerto de la plataforma hace que la incorporación de dispositivos sea predecible y simplifica la configuración a nivel de flota, ya que Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

To learn more about Plaspy and how it works with devices like the LMU-3030, visit https://www.plaspy.com. Please verify the latest device-specific configuration details and firmware behavior with the device manufacturer at http://www.calamp.com/ as setup methods and parameter names can change over time.

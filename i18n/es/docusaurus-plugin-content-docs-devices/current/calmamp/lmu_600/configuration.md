---
slug: /calmamp/lmu_600/configuration
id: lmu_600-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía técnica pública para configurar CalmAmp LMU-600 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración CalmAmp LMU 600
  - configuración LMU 600
  - configuración servidor LMU 600
  - configuración Plaspy LMU 600
  - configuración rastreador GPS Plaspy
  - rastreo vehicular LMU 600
  - configuración GPRS SMS LMU 600
  - configuración PEG LMU 600
  - actualizaciones PULS OTA
  - ajustes servidor Plaspy
---

# CalmAmp - Configuración LMU-600

Esta página describe el contexto público de configuración para usar el rastreador CalmAmp LMU-600 con la plataforma Plaspy. Se centra en los detalles de servidor y flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, además de ejemplos de comandos SMS que se usan comúnmente en la familia LMU-600.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-600 soporta redes GSM GPRS y puede configurarse mediante SMS o ajustes de servidor en la red, por lo que usted debe verificar el comportamiento específico del firmware en la documentación de CalAmp cuando sea necesario.

## Visión general de la configuración

El objetivo de esta configuración es preparar el LMU-600 para que pueda comunicar de forma confiable la ubicación y el estado a Plaspy. Esto incluye proporcionar los ajustes correctos de APN, apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte si es necesario y verificar que el dispositivo reporte correctamente.

- Configure el APN de red y las credenciales opcionales del APN para que los datos GPRS estén disponibles.  
- Configure el LMU-600 para que reporte a Plaspy indicando el dominio o la IP del servidor y el puerto de Plaspy.  
- Seleccione UDP o TCP en el dispositivo cuando el firmware requiera una selección explícita de transporte.  
- Reinicie o aplique la configuración del dispositivo para que los cambios entren en vigor.  
- Verifique la configuración del dispositivo y confirme que la unidad reporte a Plaspy para que el rastreador sea visible en la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP may be used on port 8888 depending on device configuration  
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Requisitos previos típicos

- Un CalmAmp LMU-600 instalado y con alimentación, con conectividad celular funcional.  
- Una SIM válida con un plan de datos activo y el APN correcto del operador móvil.  
- Acceso al método de configuración del dispositivo proporcionado por CalAmp para su unidad, ya sea mediante comandos SMS o la herramienta de configuración del proveedor.  
- Capacidad para enviar comandos SMS al dispositivo si utiliza configuración por SMS y el equipo soporta control por SMS.  
- Conocimiento del MID del dispositivo o del método de identificación cuando el flujo de comandos lo requiera.  
- Conectividad hacia el servidor Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888 desde la red GPRS del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LMU-600 envía ubicación y eventos a Plaspy usando GPRS o SMS donde esté soportado, dirigiéndose al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes y los asigna a la cuenta y al dispositivo correspondientes usando el protocolo del rastreador que detecta automáticamente.

- El dispositivo se configura para enviar mensajes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Los mensajes pueden entregarse por UDP o TCP según la configuración del dispositivo y las condiciones de la red.  
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no suele requerirse una selección específica del protocolo en el servidor.  
- Después de la configuración, la visibilidad y el reporte del dispositivo pueden validarse desde Plaspy una vez que el rastreador se registre y empiece a enviar datos.  
- Los mensajes basados en eventos configurados en el LMU-600 (reglas PEG) también se reenviarán al endpoint de Plaspy una vez que los ajustes de red y servidor sean correctos.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de CalAmp para su unidad LMU-600, ya sea mediante el proceso de comandos SMS del proveedor o la herramienta de configuración incluida.  
2. Obtenga el ID del dispositivo (MID) si su flujo de trabajo lo requiere, emitiendo el comando de verificación del fabricante.  
3. Introduzca el endpoint de Plaspy ya sea como el dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en los ajustes de servidor/GPRS.  
4. Configure el puerto del servidor en 8888 en la configuración de red del dispositivo.  
5. Seleccione UDP o TCP en el dispositivo si el firmware solicita elegir un transporte.  
6. Guarde o aplique la configuración y reinicie el dispositivo si es necesario para que los cambios se apliquen.  
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes entrantes en Plaspy y utilizando comandos de verificación del dispositivo cuando estén disponibles.

## Ejemplos de comandos de configuración

El LMU-600 soporta configuración por SMS. Los siguientes comandos SMS públicos se usan comúnmente para preparar el dispositivo y permitir el reporte GPRS hacia Plaspy. Envíe los comandos al dispositivo según los procedimientos SMS de CalAmp. El dispositivo normalmente responderá con un MID o confirmará el comando.

Nota: Reemplace los marcadores por sus valores de red. El ID referenciado en algunos flujos del proveedor es el MID de 10 dígitos que devuelve el comando de verificación del dispositivo.

- Get the device MID (verify device identity)
```text
!R0
```

- Set the operator APN (replace [apn] with your operator APN)
```text
!RP,2306,0,[apn]
```

- Set the APN username when required (replace [apnu] with your APN username)
```text
!RP,2314,0,[apnu]
```

- Set the APN password when required (replace [apnp] with your APN password)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy by IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply settings (optional but commonly required to activate new network parameters)
```text
!R3,70,0
```

- Check current settings on the device
```text
!RO
```

Explicación de los marcadores:
- [apn] — cadena APN del operador requerida para datos GPRS.  
- [apnu] — usuario APN opcional cuando el operador exige credenciales.  
- [apnp] — contraseña APN opcional cuando el operador exige credenciales.

Al usar comandos SMS, el formato exacto del mensaje y si se requiere un prefijo con ID dependen del firmware y de las opciones de aprovisionamiento de CalAmp. Utilice el valor MID de la respuesta a !R0 cuando su flujo de instalación solicite un ID.

## Notas de configuración

- Las diferencias de firmware entre las revisiones de hardware LMU-600 pueden modificar el formato exacto de los comandos SMS y los parámetros disponibles; verifíquelo en la documentación de CalAmp.  
- El LMU-600 soporta configuración por SMS y reporte por GPRS; seleccione UDP o TCP en el puerto 8888 según el firmware del dispositivo y los resultados de la red.  
- Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo en el servidor.  
- Las credenciales del APN son específicas del operador; si su operador requiere usuario o contraseña, incluya los valores [apnu] y [apnp] al enviar los comandos de configuración.  
- Si utiliza CalAmp PULS o aprovisionamiento por aire (OTA), verifique si esos sistemas sobrescribirán los ajustes SMS manuales antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Apuntar un LMU-600 a Plaspy ofrece a las organizaciones una vía sencilla para recibir datos de ubicación y eventos desde vehículos desplegados usando ajustes de servidor compartidos de Plaspy. Esta configuración facilita la visibilidad constante para flotas, agencias de renta y aseguradoras, y permite a Plaspy interpretar automáticamente los mensajes según el protocolo del dispositivo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre configuración específica del dispositivo, comportamiento del firmware y referencias oficiales de comandos, consulte la documentación del fabricante en http://www.calamp.com/

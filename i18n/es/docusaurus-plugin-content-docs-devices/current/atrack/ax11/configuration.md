---
slug: /atrack/ax11/configuration
id: ax11-configuration
sidebar_label: Configuration
title: ATrack - AX11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ATrack AX11 con Plaspy usando ajustes de servidor compartidos y comandos de ejemplo
keywords:
  - Configuración ATrack AX11
  - Configurar AX11 Plaspy
  - Ajustes servidor ATrack AX11
  - Configuración rastreador GPS AX11
  - Integración ATrack AX11
  - Configuración telemática AX11
  - Configuración rastreador OBDII AX11
  - Configuración rastreador Plaspy
  - Configuración AX11 rastreador vehicular
  - Configuración GPRS AX11
---

# ATrack - Configuración del AX11

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AX11 con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, muestra ejemplos de comandos estilo AT proporcionados por el fabricante y describe los pasos prácticos para validar la conectividad y la visibilidad en Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos de comandos abajo se han extraído de la guía pública de configuración del AX11 y deben usarse junto con la documentación oficial de ATrack.

## Resumen de la configuración

El objetivo de la configuración es preparar el AX11 para que se comunique de manera fiable con Plaspy y reporte la ubicación y la telemetría del vehículo a la plataforma. Normalmente esto implica definir el modo de reporte del dispositivo, el intervalo de tiempo, los eventos de ACC o ignición, y el endpoint del servidor GPRS junto con las credenciales del APN.

- Configure el modo de datos y el formato de reporte del dispositivo para que Plaspy pueda analizar los paquetes entrantes.
- Establezca el intervalo de rastreo y los desencadenantes de eventos para que el dispositivo envíe actualizaciones con la cadencia deseada.
- Apunte los ajustes GPRS del dispositivo al endpoint del servidor Plaspy y use los marcadores de APN correctos.
- Active el reporte de ACC o ignición para que los eventos de encendido y apagado del vehículo sean visibles en Plaspy.
- Valide el estado y la conectividad del dispositivo usando el comando de estado antes de confirmar la visibilidad en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS y entrada de hostname.
- IP del servidor 54.85.159.138 como endpoint numérico directo si el dispositivo lo requiere.
- Puerto 8888 que es el puerto único que Plaspy usa para todos los dispositivos.
- Soporte de transporte UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor.

## Requisitos típicos antes de la instalación

- Acceso físico al conector OBDII del vehículo para la instalación y verificación del dispositivo.
- Un AX11 alimentado con una SIM activa y datos móviles habilitados para conectividad GPRS o LTE.
- Acceso a la interfaz de configuración de ATrack o al canal de comandos usado por su variante de dispositivo, como ADM, SMS o USB.
- El APN, usuario y contraseña del operador móvil para la SIM, para completar los marcadores [apn], [apnu] y [apnp].
- Un terminal o herramienta de configuración capaz de enviar comandos estilo AT o el software del fabricante para aplicar los ajustes.
- La posibilidad de reiniciar el dispositivo después de aplicar la configuración si el firmware lo requiere.

## Cómo se conecta este rastreador a Plaspy

El AX11 envía posiciones GNSS, telemetría del bus del vehículo y mensajes de eventos a través de su enlace celular al endpoint compartido y puerto de Plaspy. Plaspy recibe esos paquetes, identifica automáticamente el protocolo del dispositivo e ingiere los datos para mapeo, alertas e informes.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138.
- Las comunicaciones usan el puerto 8888 y pueden enviarse por UDP o TCP según la configuración del dispositivo.
- El reporte de eventos, como ACC encendido/apagado, puede generar mensajes inmediatos a Plaspy cuando está configurado.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona para los dispositivos soportados.
- Tras la conexión exitosa, Las posiciones GNSS y la telemetría aparecen en la plataforma Plaspy para monitoreo y análisis histórico.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración ATrack para el AX11 (ADM, SMS, USB o software del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o el endpoint numérico 54.85.159.138 según sea necesario.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure los ajustes de APN y las credenciales necesarias usando los valores del operador para [apn], [apnu] y [apnp].
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el procedimiento exige un reboot.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado local del equipo y confirmando la llegada de datos en Plaspy.

## Comandos de ejemplo para configuración

Los siguientes comandos públicos del AX11 se presentan en el mismo orden que en la muestra de configuración del fabricante. Use su canal de comandos ATrack oficial o la herramienta de configuración para enviar estos comandos. Conserve y reemplace los marcadores de APN, usuario y contraseña según sea necesario.

- Configurar el manejo de eventos ACC y las reglas de reporte
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer el intervalo de tiempo a 60 segundos para rastreo periódico
```text
AT$TRAC=1,60,,,,,2
```

- Poner el dispositivo en modo de formato binario para los reportes
```text
AT$FORM=1,@P,0,""
```

- Configurar el GPRS incluyendo los marcadores de APN y la IP y puerto del servidor Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

Notas sobre los marcadores
- [apn] es el nombre de punto de acceso (APN) del operador requerido por la SIM.
- [apnu] es el usuario del APN cuando el operador requiere autenticación.
- [apnp] es la contraseña del APN cuando se solicita.

- Comprobar estado y configuración del dispositivo
```text
AT$INFO=?
```

## Notas de configuración

- Las diferencias de firmware y las variantes regionales del dispositivo pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles. Confirme siempre con la documentación de ATrack para la revisión de firmware de su equipo.
- Elija TCP o UDP según la preferencia del instalador y la fiabilidad de la red. Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador una vez que lleguen paquetes al puerto 8888.
- Si utiliza la IP numérica en lugar de d.plaspy.com, asegúrese de usar la IP del servidor Plaspy 54.85.159.138 tal como se indica.
- Use los canales oficiales de configuración de ATrack, como ADM, SMS o USB, para cambios persistentes y para FOTA cuando esté disponible.
- Si su dispositivo soporta SMS o ADM para configuración, esos métodos pueden facilitar el envío remoto de los comandos estilo AT.

## Por qué usar Plaspy con esta configuración

Configurar el AX11 para reportar a Plaspy brinda a flotas y operadores una visibilidad en tiempo real consistente de la ubicación y la telemetría del vehículo usando el endpoint compartido de Plaspy. La combinación de instalación OBDII, GNSS interno y reenvío telemático ofrece una solución compacta para rastreo en vivo, alertas por eventos e informes históricos en una sola plataforma.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y revisiones de hardware, verifique los detalles con ATrack en su sitio oficial https://www.atrack.com.tw/.

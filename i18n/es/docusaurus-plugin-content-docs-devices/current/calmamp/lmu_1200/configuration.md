---
slug: /calmamp/lmu_1200/configuration
id: lmu_1200-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-1200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-1200 con ajustes de servidor Plaspy y configuración por SMS
keywords:
  - Configuración CalmAmp LMU-1200
  - Configuración LMU-1200
  - Configuración LMU-1200 Plaspy
  - Configuración servidor LMU-1200
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreo vehicular
  - Configuración SMS LMU-1200
  - Ajustes servidor Plaspy
  - Instalación CalmAmp
---

# CalmAmp - Configuración LMU-1200

Esta página reúne la información pública necesaria para configurar el CalmAmp LMU-1200 con Plaspy. Incluye los ajustes prácticos de servidor y los comandos SMS más usados para apuntar el LMU-1200 a Plaspy y lograr visibilidad y seguimiento del dispositivo en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La documentación del LMU-1200 y los comandos SMS que se muestran a continuación sirven como guía pública de integración con Plaspy.

## Resumen de la configuración

El objetivo es dejar el LMU-1200 listo para comunicarse de forma fiable con Plaspy y así obtener visibilidad y monitoreo en tiempo real. La configuración típica incluye ajustar el APN y las credenciales GPRS, validar la conectividad y confirmar que el dispositivo informa correctamente al servidor de Plaspy.

- Configure el APN y, si aplica, las credenciales del APN para que el equipo tenga conexión de datos móviles.
- Establezca la dirección del servidor GPRS hacia Plaspy y confirme el puerto que utiliza Plaspy.
- Seleccione el protocolo de transporte si el equipo exige elegir entre UDP o TCP.
- Reinicie o reinicie el dispositivo después de aplicar los ajustes y verifique que esté reportando a Plaspy.
- Use los comandos SMS del LMU-1200 o las herramientas del fabricante según corresponda para aplicar la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor al configurar el LMU-1200 para reportar a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo de forma automática.

## Requisitos habituales antes de la configuración

- Un LMU-1200 encendido y accesible con posibilidad de enviar comandos de configuración.
- Una SIM activa con datos habilitados y el APN del operador móvil.
- Capacidad para enviar mensajes SMS al equipo si se requiere configuración por SMS.
- Acceso al método oficial de configuración CalmAmp o herramientas para el LMU-1200.
- Confirmación de la versión de firmware o la revisión de hardware si el instalador o el proveedor dispone de esa información.
- Un plan de prueba corto para validar que el dispositivo reporta a Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El LMU-1200 se configura para enviar su ubicación y datos de dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que se definen el APN y los valores del servidor GPRS, el equipo inicia la conexión GPRS y envía telemetría al endpoint de Plaspy, donde la plataforma determina automáticamente el protocolo del rastreador e interpreta los mensajes entrantes.

- El dispositivo apunta al dominio o IP del servidor Plaspy y utiliza el puerto 8888 para el transporte.
- El rastreador usa la conexión de datos móviles configurada por el APN para alcanzar Plaspy.
- El transporte puede seleccionarse como UDP o TCP según las opciones del equipo y la red.
- Plaspy recibe los mensajes del dispositivo y detecta automáticamente el protocolo para su parseo.
- Tras comenzar a reportar, el dispositivo queda visible en Plaspy para monitoreo de ubicación, eventos y estado.

## Flujo de trabajo típico de configuración

1. Obtenga acceso al método oficial de configuración CalmAmp o al procedimiento de configuración por SMS para el LMU-1200.
2. Identifique o confirme el MID del dispositivo o el identificador que requieran los comandos SMS de CalmAmp.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del servidor.
4. Configure el puerto del servidor en 8888 en la configuración del equipo.
5. Elija UDP o TCP si el firmware del LMU-1200 exige seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere.
7. Valide que el dispositivo está reportando a Plaspy y que la plataforma muestra el estado y la ubicación esperados.

## Comandos de configuración de ejemplo

Envíe los siguientes comandos por SMS para configurar el rastreador. El ID del dispositivo es el MID de 10 dígitos que responde el comando !R0. Los marcadores [apn], [apnu] y [apnp] representan el APN de su operador móvil, el usuario del APN y la contraseña del APN, respectivamente.

1. Configurar el APN del operador
```text
!RP,2306,0,[apn]
```

2. Configurar el nombre de usuario del APN (si es necesario)
```text
!RP,2314,0,[apnu]
```

3. Configurar la contraseña del APN (si es necesario)
```text
!RP,2315,0,[apnp]
```

4. Establecer el servidor GPRS a Plaspy por IP
```text
!RP,2319,0,54.85.159.138
```

5. Establecer el puerto del servidor a 8888
```text
!RP,769,0,8888
```

6. Reiniciar el rastreador para aplicar ajustes
```text
!R3,70,0
```
Etiquete el comando de reinicio como parte del proceso de configuración cuando el instalador o el firmware del dispositivo lo requieran.

Comando de verificación para comprobar la configuración actual
```text
!RO
```

Notas sobre los marcadores
- [apn] Reemplace por la cadena APN de su operador.
- [apnu] Reemplace por el usuario del APN si su operador requiere autenticación.
- [apnp] Reemplace por la contraseña del APN si es necesaria.

## Observaciones de configuración

- Las versiones de firmware de CalmAmp y las variantes regionales del dispositivo pueden cambiar el comportamiento de los comandos y los parámetros requeridos; verifique la sintaxis exacta con los recursos del fabricante.
- El LMU-1200 admite configuración por SMS como se muestra arriba; también puede existir configuración alternativa mediante herramientas CalmAmp como PULS, según el acceso que tenga su proveedor.
- Elija UDP o TCP según las opciones del firmware del equipo y la fiabilidad de la red; ambos transportes son compatibles al apuntar a Plaspy.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que debe apuntar los equipos al dominio o IP indicados y verificar el reporte.
- Mantenga a mano las credenciales del APN y la información de aprovisionamiento de la SIM cuando configure varios dispositivos para reducir el tiempo de despliegue.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-1200 para trabajar con Plaspy ofrece a las organizaciones una forma sencilla de consolidar la ubicación y el estado de sus vehículos en una sola plataforma para monitoreo operativo y gestión de flotas. Características del LMU-1200, como la batería interna de respaldo y las opciones flexibles de entradas/salidas, lo hacen adecuado para múltiples escenarios de rastreo vehicular, y apuntarlo a Plaspy brinda visibilidad centralizada, reporte de eventos y monitoreo del estado del dispositivo.

Para obtener más información sobre Plaspy y cómo maneja integraciones de rastreadores visite https://www.plaspy.com. Para la guía específica más reciente del CalmAmp LMU-1200, notas de firmware y documentación del fabricante, verifique los detalles en http://www.calamp.com/ ya que el comportamiento del dispositivo y los métodos de configuración del fabricante pueden cambiar con el tiempo.

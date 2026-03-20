---
slug: /tk_star/tk210b/configuration
id: tk210b-configuration
sidebar_label: Configuration
title: TK-Star - TK210B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador TK-Star TK210B y su compatibilidad con Plaspy
keywords:
  - Configuración TK-Star TK210B
  - Guía de configuración TK210B
  - TK-Star TK210B Plaspy
  - Configuración rastreador GPS TK210B
  - Configuración rastreador TK-Star
  - Configuración servidor TK210B
  - Configuración plataforma GPS TK-Star
  - Configuración GPRS TK210B
  - Comandos SMS TK210B
  - Configuración rastreador Plaspy
---

# TK-Star - Configuración del TK210B

Esta página describe el contexto público de configuración para usar el rastreador TK-Star TK210B con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de configuración necesarios para apuntar el dispositivo a Plaspy y que el rastreador envíe ubicación y telemetría a la plataforma. La información aquí utiliza los valores públicos de servidor de Plaspy y los comandos SMS de ejemplo habitualmente usados con dispositivos TK-Star.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos a la plataforma. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos y pasos siguientes como orientación práctica pública y no como un manual exhaustivo del dispositivo.

## Visión general de la configuración

El objetivo al configurar el TK210B para Plaspy es preparar el rastreador para que se autentique, se conecte y reporte de forma continua al endpoint del servidor de Plaspy para que el dispositivo aparezca en su cuenta Plaspy. Esto incluye establecer el APN si es necesario, programar el endpoint y el puerto del servidor y confirmar el transporte y los intervalos de reporte.

- Programar el TK210B para usar el endpoint de Plaspy y que los datos se enruten a la plataforma de rastreo correcta.
- Configurar GPRS y ajustes de APN para que el rastreador tenga conectividad de datos.
- Definir los intervalos de reporte para que las actualizaciones de ubicación lleguen con la frecuencia deseada en Plaspy.
- Validar la selección de transporte y asegurar que el dispositivo reporte correctamente a Plaspy.
- Opcionalmente usar el comando de restauración de fábrica como paso inicial de resolución de problemas si el estado de configuración es desconocido.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el TK210B:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

Estos valores son los detalles del endpoint público de Plaspy que deberá ingresar en el rastreador o enviar por SMS como parte de la configuración.

## Requisitos típicos antes de la configuración

- Confirme que el dispositivo tiene alimentación y que las conexiones necesarias están completadas para un funcionamiento fiable.
- Inserte una SIM de datos válida con un plan activo y el APN correcto del operador móvil.
- Asegúrese de tener acceso al método de configuración del fabricante para dispositivos TK-Star, como comandos SMS o herramientas oficiales de configuración.
- Conozca la contraseña del dispositivo si es necesaria para enviar comandos; la contraseña por defecto de ejemplo que aparece en los comandos públicos a continuación es 123456.
- Pueda recibir y enviar SMS al dispositivo si va a usar la configuración por SMS.
- Disponga de un lugar donde el dispositivo pueda obtener fijación GNSS o asistencia LBS para las pruebas iniciales.

## Cómo se conecta este rastreador a Plaspy

El TK210B envía su ubicación y telemetría mediante GSM GPRS al endpoint del servidor configurado en el dispositivo. Al apuntarlo a Plaspy, el rastreador usará el host y puerto compartidos de Plaspy para que la plataforma pueda ingerir la alimentación del dispositivo y presentar seguimiento en vivo y alertas.

- El rastreador reporta posición y telemetría al endpoint de Plaspy en d.plaspy.com o 54.85.159.138.
- Los datos se envían a Plaspy por el puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el tráfico llega al puerto compartido.
- Los reportes del dispositivo permiten seguimiento en tiempo real en el mapa, alertas y almacenamiento de rutas históricas en Plaspy.
- Alertas como movimiento, vibración, eventos de geocerca y exceso de velocidad se integran en los flujos de Plaspy para notificaciones.

## Flujo de configuración común

1. Acceda al método oficial de configuración de TK-Star que vaya a utilizar, por ejemplo comandos SMS o el software del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte; ambos son compatibles en el puerto 8888.
5. Configure el APN, el usuario APN y la contraseña APN si la SIM los requiere para la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo en la plataforma y confirmando la llegada de actualizaciones de posición.

## Ejemplos de comandos de configuración

El TK-Star TK210B puede configurarse vía SMS usando la contraseña del dispositivo. Los comandos de ejemplo que siguen son muestras públicas y preservan los marcadores de posición donde corresponde. La contraseña por defecto utilizada en estos ejemplos es 123456. Envíe cada línea como un SMS separado al número IMEI del rastreador o al número telefónico del dispositivo.

1. Restauración de fábrica opcional o reinicio inicial (usar solo si necesita restaurar valores por defecto)
```
begin123456
```

2. Configurar el APN del operador (reemplace [apn] con el APN de su SIM)
```
apn123456 [apn]
```

3. Establecer el usuario APN si el operador lo requiere (reemplace [apnu] con el usuario APN)
```
apnuser123456 [apnu]
```

4. Establecer la contraseña APN si el operador la requiere (reemplace [apnp] con la contraseña APN)
```
apnpasswd123456 [apnp]
```

5. Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de actualización a 60 segundos
```
upload123456 60
```

7. Poner el dispositivo en modo de reporte GPRS
```
gprs123456
```

Notas sobre los marcadores de posición y su uso
- [apn] es el valor APN del operador móvil necesario para la conectividad de datos.
- [apnu] es el campo de usuario APN opcional si su operador lo solicita.
- [apnp] es la contraseña APN opcional si su operador la solicita.
- El número 123456 es la contraseña por defecto usada en los ejemplos. Cambie la contraseña del dispositivo tras la configuración inicial para mejorar la seguridad.

## Notas de configuración

- La configuración por SMS es de uso común en dispositivos TK-Star; siga la sintaxis SMS exacta que requiera su versión de firmware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos o la disponibilidad de funciones; verifique los comandos contra la documentación actual de TK-Star cuando sea posible.
- Elija UDP o TCP de acuerdo con su preferencia operativa; Plaspy soporta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Después de configurar APN y servidor, espere unos minutos y confirme el registro en GPRS antes de esperar envíos consistentes.
- Cambie la contraseña del dispositivo desde el valor por defecto a una contraseña segura después de la configuración inicial para evitar cambios no autorizados.

## Por qué usar Plaspy con esta configuración

Configurar el TK210B para reportar a Plaspy ofrece a gerentes de flota y propietarios de vehículos acceso consistente a posición en vivo, telemetría y alertas de eventos a través de una plataforma centralizada. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de múltiples dispositivos al usar los mismos valores de host y puerto en distintos modelos de rastreadores.

Para aprender más sobre Plaspy y cómo funciona con dispositivos como el TK210B visite https://www.plaspy.com. Para detalles específicos del dispositivo, referencias de comandos y el comportamiento de firmware más reciente consulte el sitio del fabricante https://www.tk-star.com/ ya que los métodos de configuración y las funciones de firmware pueden cambiar con el tiempo.

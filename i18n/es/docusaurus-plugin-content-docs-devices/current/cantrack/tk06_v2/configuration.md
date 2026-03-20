---
slug: /cantrack/tk06_v2/configuration
id: tk06_v2-configuration
sidebar_label: Configuration
title: CanTrack - TK06 v2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack TK06 v2 con Plaspy y los ajustes de servidor para seguimiento en tiempo real
keywords:
  - Configuración CanTrack TK06 v2
  - Instalación CanTrack TK06 v2
  - Configuración de rastreador CanTrack
  - Integración Plaspy
  - Configuración servidor TK06 v2
  - Configuración APN rastreador GPS
  - Configuración GPRS rastreador
  - Configuración seguimiento de vehículos
  - Comandos SMS de configuración
  - Rastreo de flotas Plaspy
---

# CanTrack - TK06 v2 Configuración

Esta página describe el contexto público de configuración para utilizar el CanTrack TK06 v2 con Plaspy. Explica los pasos prácticos y los ejemplos de comandos SMS de uso público para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y estado a la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Las instrucciones a continuación usan ejemplos públicos de configuración y muestran cómo aplicar los datos del servidor de Plaspy para que el TK06 v2 pueda comunicarse con la plataforma.

## Resumen de la configuración

El objetivo al configurar un TK06 v2 para Plaspy es preparar el dispositivo para enviar datos de ubicación y estado a través de la red GSM/GPRS hacia Plaspy, validar la conectividad y asegurarse de que el dispositivo aparezca en la plataforma Plaspy para su monitoreo.

- Configurar el APN y parámetros de red para que el dispositivo use GPRS y alcance Plaspy
- Indicar al dispositivo la dirección y puerto del servidor de Plaspy
- Ajustar el intervalo de reporte y la zona horaria para datos precisos y actualizaciones esperadas
- Verificar que el dispositivo sea accesible y que Plaspy reciba los reportes iniciales
- Usar el método de configuración soportado por el fabricante, por ejemplo comandos SMS cuando estén disponibles

## Ajustes del servidor Plaspy

- El dominio d.plaspy.com es el nombre canónico del servidor para que los dispositivos reporten a Plaspy
- La IP del servidor 54.85.159.138 puede usarse cuando el dispositivo requiere una dirección IP
- El puerto 8888 es el puerto compartido usado por todos los dispositivos que se conectan a Plaspy
- Se soportan transportes UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que reportan al endpoint compartido son manejados por la plataforma

## Requisitos típicos antes de la configuración

- Un dispositivo TK06 v2 alimentado con señal GSM y una SIM activa que permita datos y SMS
- Acceso al dispositivo para configuración vía SMS o a la herramienta de configuración del fabricante
- Credenciales APN del operador móvil (APN, usuario APN, contraseña APN) si son requeridas
- Conocimiento de la contraseña del dispositivo usada para la configuración; el ejemplo público abajo usa la contraseña por defecto 123456
- Capacidad para recibir mensajes de confirmación del rastreador y observar conexiones entrantes en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TK06 v2 se puede configurar para transmitir información GPS y de estado por la red celular usando GPRS a un endpoint de servidor controlado por Plaspy. Una vez configurado, el dispositivo envía actualizaciones periódicas que Plaspy procesa y muestra en la plataforma.

- El dispositivo se configura para usar el APN del operador para permitir tráfico GPRS
- El rastreador se apunta al dominio o IP del servidor Plaspy y al puerto compartido
- Los datos se envían por UDP o TCP según la selección del dispositivo y las condiciones de red
- Plaspy recibe y detecta automáticamente el protocolo del dispositivo para su correcto parseo
- Una vez reportando, el dispositivo será visible en Plaspy para ubicación, eventos y monitoreo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CanTrack, como comandos SMS o la herramienta del fabricante según la documentación del TK06 v2.
2. Introduzca la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo requiera una IP.
3. Establezca el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione UDP o TCP en los ajustes de transporte del dispositivo si el rastreador necesita especificar el transporte.
5. Aplique o guarde la configuración en el dispositivo usando el comando o la herramienta del fabricante.
6. Reinicie el dispositivo si el fabricante lo requiere o lo recomienda.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del rastreador en la plataforma Plaspy y confirmando la llegada de datos.

## Ejemplos de comandos de configuración

El CanTrack TK06 v2 soporta configuración vía SMS. Los siguientes comandos son ejemplos públicos tomados del manual del fabricante y muestran un orden típico para la configuración. El ejemplo usa la contraseña por defecto del dispositivo 123456. Reemplace los marcadores y valores según su operador y despliegue.

- Reinicio opcional a valores de fábrica (use solo si necesita restaurar el dispositivo a los valores por defecto)
```text
begin123456
```

- Configure el APN del operador. Reemplace los marcadores con el APN, usuario APN y contraseña APN de su operador según lo requiera la SIM.
```text
apn123456 {{apn}} {{apnu}} {{apnp}}
```
Explicación de los marcadores:
- {{apn}} es la cadena APN del operador móvil
- {{apnu}} es el usuario APN si es requerido (dejar en blanco u omitir si no se usa)
- {{apnp}} es la contraseña APN si es requerida (dejar en blanco u omitir si no se usa)

- Ajuste la zona horaria a UTC0 (el ejemplo usa el valor 0 para UTC)
```text
timezone123456 0
```

- Defina el intervalo de actualización posicional a 60 segundos
```text
ITV123456 60
```

- Configure el servidor GPRS para apuntar a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
Este comando hace que el dispositivo reporte a Plaspy en la IP 54.85.159.138 puerto 8888. Algunos dispositivos aceptan nombres de dominio en variantes diferentes del comando; use los comandos documentados por su dispositivo cuando estén disponibles.

- Verifique los ajustes actuales en el rastreador
```text
check123456
```

Mantenga el orden de comandos anterior cuando siga una secuencia de configuración recomendada. Modifique los valores de intervalo de reporte, zona horaria y APN para adaptarlos a sus necesidades operativas.

## Notas sobre la configuración

- La configuración vía SMS es compatible y se utiliza comúnmente para la puesta en marcha inicial del TK06 v2; siga la sintaxis exacta de comandos requerida por su firmware.
- El ejemplo usa la contraseña por defecto 123456 según la muestra pública; si su contraseña difiere, cámbiela en cada comando.
- Algunas revisiones de firmware aceptan nombres de dominio en lugar de IP en la configuración del servidor. Si su firmware lo soporta, puede usar d.plaspy.com donde estén disponibles los comandos por dominio.
- Elija UDP o TCP según la preferencia de la instalación; ambos son compatibles y Plaspy detectará automáticamente el protocolo entrante.
- El comportamiento del firmware y los comandos disponibles pueden variar según la revisión de hardware y el firmware del proveedor; confirme siempre con la documentación más reciente del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar un CanTrack TK06 v2 para reportar a Plaspy ofrece una forma práctica de centralizar la ubicación de vehículos, el reporte de eventos y la telemetría básica en una sola plataforma. Para organizaciones que necesitan visibilidad de flotas o rastreo de activos, usar el endpoint compartido de Plaspy simplifica la incorporación de dispositivos y asegura un manejo consistente de los datos entrantes.

Para obtener más información sobre Plaspy y las integraciones de dispositivos soportados visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y la documentación oficial del CanTrack TK06 v2, consulte al fabricante en https://www.cantrackgps.com/ para verificar los detalles de configuración y la sintaxis de comandos más actualizada.

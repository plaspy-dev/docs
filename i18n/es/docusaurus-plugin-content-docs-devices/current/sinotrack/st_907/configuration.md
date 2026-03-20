---
slug: /sinotrack/st_907/configuration
id: st_907-configuration
sidebar_label: Configuration
title: SinoTrack - ST-907 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el SinoTrack ST-907 a Plaspy mediante ajustes de servidor GPRS y SMS y ejemplos de comandos SMS
keywords:
  - Configuración SinoTrack ST-907
  - Instalación SinoTrack ST-907
  - Configuración de servidor ST-907
  - Configuración ST-907 Plaspy
  - Configuración rastreador GPS SinoTrack
  - Instalación rastreador vehicular ST-907
  - Configuración GPRS ST-907
  - Comandos SMS ST-907
  - Configuración de rastreador Plaspy
  - Configuración de dispositivo Plaspy
---

# SinoTrack - Configuración ST-907

Esta página describe la información pública necesaria para conectar el SinoTrack ST-907 a Plaspy. Resume los ajustes de servidor compartidos de Plaspy que debe aplicar, explica los comandos SMS de inicialización más comunes del ST-907 y muestra los pasos prácticos que suelen seguir instaladores y administradores para habilitar el reporte del equipo hacia Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El ST-907 admite configuración por SMS y GPRS, por lo que los instaladores suelen usar comandos SMS para establecer APN y parámetros de servidor y luego verificar el reporte en Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el ST-907 para que envíe datos de ubicación, estado y alarmas a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Para el ST-907 esto normalmente se hace aplicando los ajustes de APN, apuntando el dispositivo al servidor de Plaspy, habilitando el modo GPRS y confirmando que el equipo reporte correctamente.

- Configure el APN del dispositivo y, si es necesario, el usuario y la contraseña del APN para que la SIM pueda establecer una sesión GPRS.
- Configure el servidor GPRS para que apunte a Plaspy mediante dominio o IP y use el puerto compartido que emplea Plaspy.
- Elija el método de transporte que requiera el equipo (UDP o TCP) y asegúrese de que coincida con la configuración del rastreador.
- Habilite el modo de reporte por GPRS y configure los intervalos de actualización para que el dispositivo envíe posiciones y alertas.
- Valide el dispositivo con una consulta de configuración y confirme que reporte a Plaspy.

## Ajustes de servidor de Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS.
- IP del servidor 54.85.159.138 como alternativa numérica.
- Puerto 8888 que utiliza Plaspy para todos los dispositivos.
- Soporte de transporte: configure el rastreador para usar UDP o TCP según lo requiera el equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que apunten al endpoint y puerto indicados serán procesados sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

Nota: Todos los dispositivos en Plaspy usan el puerto 8888, por lo que el ST-907 debe configurarse para apuntar al puerto 8888 cuando reporte a Plaspy.

## Requisitos típicos antes de la instalación

- Una unidad ST-907 con alimentación y accesible, con el cableado correcto para la instalación en el vehículo.
- Una tarjeta SIM con un plan de datos activo que soporte GPRS y SMS si va a usar comandos SMS para configurar el dispositivo.
- Información de APN precisa del operador móvil, incluyendo usuario y contraseña del APN si el operador los exige.
- Acceso al método de administración del equipo proporcionado por el fabricante, como comandos SMS o herramientas del proveedor.
- Una cuenta o acceso a la plataforma Plaspy para validar que el dispositivo aparezca y reporte tras la configuración.
- El IMEI del dispositivo y cualquier número de teléfono administrador autorizado, a mano para la gestión y verificación vía SMS.

## Cómo se conecta este rastreador a Plaspy

El ST-907 se configura para enviar datos de posición y alarmas a Plaspy apuntando su endpoint de reporte GPRS al servidor y puerto compartidos de Plaspy. Una vez aplicados el APN y los parámetros de servidor y habilitado el modo GPRS, el dispositivo puede transmitir telemetría y alarmas a Plaspy para su monitoreo.

- El rastreador reporta al endpoint compartido de Plaspy usando d.plaspy.com o la IP numérica 54.85.159.138 en el puerto 8888.
- Plaspy recibe la conexión entrante del dispositivo y detecta automáticamente el protocolo del rastreador para parsear los datos.
- Las actualizaciones de ubicación y las alarmas enviadas por GPRS se ingieren en Plaspy y se muestran como telemetría del dispositivo.
- El SMS está disponible como canal de respaldo o configuración; los comandos SMS se usan habitualmente para inicializar APN y parámetros de servidor.
- Los intervalos de actualización y los modos de reporte (intervalos con/sin movimiento) determinan con qué frecuencia el rastreador transmite datos a Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software, normalmente la interfaz SMS del ST-907 o la herramienta del proveedor.
2. Configure los valores de APN usando la información del operador para que el dispositivo pueda establecer una sesión GPRS.
3. Ingrese el servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888.
4. Seleccione UDP o TCP en el dispositivo si la interfaz de configuración lo requiere.
5. Aplique o guarde la configuración y cambie el dispositivo al modo de reporte GPRS.
6. Reinicie o haga ciclo de alimentación del equipo si el dispositivo lo requiere para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando el equipo en la plataforma Plaspy y usando el comando SMS RCONF o la consulta de estado del dispositivo.

## Ejemplos de comandos de configuración

El ST-907 admite inicialización por SMS. A continuación están los comandos SMS públicos de uso común en la secuencia recomendada para la configuración inicial. Preserve los marcadores de posición al establecer los valores de APN.

1. Reinicio de fábrica opcional (usar cuando se requiera antes de reconfigurar)
```
RESET
```

2. Ajustar zona horaria a UTC 0
```
8960000E00
```

3. Configurar APN y credenciales opcionales del APN
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
- {{apn}} = APN del operador
- {{apnu}} = usuario del APN (dejar en blanco si no es obligatorio)
- {{apnp}} = contraseña del APN (dejar en blanco si no es obligatoria)

4. Establecer el servidor GPRS a Plaspy usando la IP y el puerto
```
8040000 54.85.159.138 8888
```
Puede usar el dominio en lugar de la IP cuando el dispositivo lo soporte reemplazando la IP numérica por d.plaspy.com si el equipo acepta una cadena de dominio.

5. Establecer intervalo de reporte para movimiento activado
```
8050000 60
```

6. Establecer intervalo de reporte para movimiento desactivado
```
8090000 60
```

7. Cambiar el rastreador al modo GPRS
```
7100000
```

8. Verificar los ajustes actuales en el dispositivo
```
RCONF
```

Envíe cada SMS desde un número de teléfono administrador autorizado. El formato exacto del SMS y la autorización requerida pueden variar según el firmware o las configuraciones OEM del proveedor.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden afectar el formato exacto de los SMS y los comandos disponibles; verifique la sintaxis de comandos en el manual del dispositivo.
- Si el dispositivo acepta un nombre de dominio para el servidor, puede usar d.plaspy.com en vez de la IP numérica 54.85.159.138; ambos son destinos válidos para Plaspy.
- Elija UDP o TCP según lo requiera el equipo; Plaspy detectará automáticamente el protocolo una vez que el dispositivo se conecte al puerto compartido 8888.
- La configuración vía SMS es un método habitual para el ST-907, pero también pueden existir herramientas de instalación o software de configuración del proveedor; use el método apropiado para su instalación.
- Reiniciar el dispositivo con RESET es opcional y normalmente solo es necesario si desea borrar la configuración existente antes de reconfigurar.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-907 para que reporte a Plaspy ofrece a flotas y operadores un endpoint de ingestión establecido y un comportamiento de plataforma consistente. Usar el servidor y puerto compartidos de Plaspy junto con la detección automática de protocolo simplifica la incorporación de múltiples dispositivos y estandariza cómo se recopilan los reportes y las alarmas en su flota.

Para obtener más información sobre Plaspy y las opciones de configuración de dispositivos compatibles visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

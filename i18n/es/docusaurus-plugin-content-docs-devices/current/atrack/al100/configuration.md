---
slug: /atrack/al100/configuration
id: al100-configuration
sidebar_label: Configuration
title: ATrack - AL100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ATrack AL100 a Plaspy con comandos AT de ejemplo y ajustes de servidor necesarios
keywords:
  - Configuración ATrack AL100
  - Instalación ATrack AL100
  - Configuración AL100 en Plaspy
  - Instalación del rastreador AL100
  - Ajustes del servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración rastreador e‑bike
  - Comandos AT AL100
  - Configuración de seguimiento de flotas
  - Integración de telemetría vehicular
---

# ATrack - AL100 Configuración

Esta página describe la configuración pública para usar el rastreador ATrack AL100 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, muestra ejemplos públicos de comandos AT publicados para el AL100 y detalla los pasos prácticos para preparar el dispositivo y que reporte a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice la información a continuación junto con la documentación del fabricante y sus herramientas de instalación para completar una configuración segura y verificada.

## Visión general de la configuración

Esta configuración prepara el AL100 para establecer un canal persistente de reporte a Plaspy, de modo que la ubicación y la telemetría aparezcan en el panel de Plaspy. Los pasos se enfocan en configurar el modo de reporte del dispositivo, el intervalo de envíos y el destino del servidor GPRS para que el rastreador envíe su flujo de datos binario a Plaspy.

- Configure el servidor de reporte y el transporte para que el AL100 apunte a Plaspy.
- Establezca el intervalo de reporte y las reglas de eventos para que la telemetría y las alarmas relevantes se entreguen.
- Active el formato de reporte binario usado por Plaspy para una telemetría más eficiente.
- Valide la conectividad y el estado del dispositivo con el comando de verificación del fabricante.
- Confirme que el dispositivo aparece y transmite datos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos al endpoint de servidor listado.

## Requisitos típicos antes de la configuración

- Un dispositivo AL100 con alimentación, antena externa adecuada y tarjeta SIM instalada y provisionada para datos móviles.
- Acceso al método oficial de configuración ATrack para el AL100 (comandos AT, herramienta del fabricante o utilidad del proveedor).
- El APN, nombre de usuario APN y contraseña APN del operador móvil para completar los marcadores de posición en los comandos GPRS.
- Una cuenta o acceso a la plataforma Plaspy para confirmar que el dispositivo es visible tras la configuración.
- Acceso básico por serie, USB o SMS para enviar comandos AT o usar la aplicación de configuración del fabricante según lo documentado por ATrack.
- Conocimiento de la versión de firmware del dispositivo y de cualquier nota específica del proveedor antes de cambiar la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el AL100 abre una sesión de datos celulares y envía ubicación y telemetría al endpoint del servidor Plaspy. Plaspy recibe los paquetes binarios en el puerto compartido y asigna automáticamente los datos entrantes al protocolo correcto para que los rastreadores sean utilizables en la plataforma sin seleccionar el protocolo por dispositivo.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy.
- Los reportes de telemetría y eventos se envían por el transporte seleccionado, UDP o TCP, al puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica el flujo binario entrante.
- Reglas de eventos como ACC encendido/apagado y actualizaciones periódicas de posición se usan para disparar reportes en la plataforma.
- Una vez que el dispositivo transmite, los datos se muestran en Plaspy para mapas en vivo, alertas e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración ATrack o al software para el AL100 (interfaz de comandos AT, herramienta USB/serial o utilidad del proveedor).
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 según requiera la herramienta del fabricante.
3. Configure el puerto del servidor en 8888.
4. Elija el protocolo de transporte si el dispositivo lo requiere — seleccione UDP o TCP según su red y preferencia del instalador.
5. Aplique el formato de reporte y los ajustes de intervalo para que el dispositivo envíe actualizaciones regulares a Plaspy.
6. Guarde o aplique la configuración y reinicie el dispositivo si el flujo de trabajo del fabricante exige un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad en la plataforma y usando el comando de verificación del dispositivo cuando esté disponible.

## Comandos de configuración de ejemplo

Los siguientes ejemplos de comandos AT son los públicos proporcionados para la configuración del AL100. Conserve y reemplace los marcadores de APN antes de aplicarlos.

1. Configurar reporte de evento ACC y acciones asociadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Establecer intervalo de tiempo a 60 segundos para reportes de seguimiento
```text
AT$TRAC=1,60,,,,,2
```

3. Poner el dispositivo en modo de reporte binario
```text
AT$FORM=1,@P,0,""
```

4. Configurar el servidor GPRS y ajustes APN para Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- {{apn}} es el nombre del punto de acceso del operador requerido para datos móviles.
- {{apnu}} es el usuario APN si el operador lo requiere; dejar en blanco si no es necesario.
- {{apnp}} es la contraseña APN si el operador la requiere; dejar en blanco si no es necesario.

5. Comprobar estado y configuración del dispositivo
```text
AT$INFO=?
```

Siga la secuencia exacta cuando el orden importe: primero establezca las reglas de eventos y reportes, luego el intervalo de seguimiento, el formato y finalmente el servidor GPRS. Después de aplicar estos comandos, verifique la conectividad y que el dispositivo envíe datos a Plaspy.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden modificar los comandos AT disponibles o el significado de parámetros; confirme siempre con las notas de la versión del firmware instalado.
- El ejemplo AL100 usa la estructura de comando GPRS para registrar la configuración de datos móviles y apuntar a la IP del servidor Plaspy 54.85.159.138 y al puerto 8888; reemplace los marcadores de APN por los valores de su operador.
- Elija UDP o TCP según la política de su red local y la preferencia del instalador; Plaspy acepta ambos transportes en el puerto compartido y detectará automáticamente el protocolo.
- Use la herramienta del fabricante o el canal de comandos AT recomendado por ATrack para una configuración segura y evitar cambios no intencionados.
- Tras aplicar los ajustes, reinicie el dispositivo si es necesario y confirme que el dispositivo aparece en línea en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el AL100 con Plaspy centraliza la telemetría y los reportes de eventos de e‑bikes para que los operadores de flota obtengan visibilidad unificada de ubicación, salud de batería, parámetros del motor y comportamiento del conductor. La configuración de servidor compartido de Plaspy mantiene la incorporación de dispositivos consistente entre despliegues y la detección automática de protocolo reduce la necesidad de selección manual de protocolo cuando los dispositivos se conectan por primera vez.

Para saber más sobre Plaspy y cómo integrar la telemetría AL100 en paneles, alertas e informes históricos visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y documentación técnica más recientes siempre verifique los detalles con el fabricante en https://www.atrack.com.tw/.

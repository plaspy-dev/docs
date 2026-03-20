---
slug: /sinotrack/st_904l/configuration
id: st_904l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-904L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar servidor y APN del SinoTrack ST-904L para Plaspy mediante SMS y GPRS
keywords:
  - Configuración SinoTrack ST-904L
  - Configuración ST-904L Plaspy
  - Guía configuración SinoTrack
  - Configuración servidor ST-904L
  - Configurar rastreador GPS Plaspy
  - Comandos SMS ST-904L
  - Configurar APN SinoTrack
  - Configuración rastreador vehicular
  - Configuración rastreador personal
  - Integración dispositivo Plaspy
---

# SinoTrack - Configuración del ST-904L

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-904L con Plaspy. Se centra en los pasos prácticos y públicamente disponibles para apuntar el dispositivo al endpoint del servidor de Plaspy y validar la conectividad. Use esta guía para preparar el rastreador para seguimiento en tiempo real, alarmas e informes dentro de la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST-904L admite configuración por SMS y GPRS, por lo que esta página incluye los comandos SMS comunes y el flujo de trabajo utilizado para configurar servidor, APN e intervalos de reporte antes de registrar el equipo en Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar al ST-904L listo para que reporte de forma fiable la ubicación y los eventos a Plaspy. Usando los comandos de configuración por SMS del dispositivo, usted debe apuntarlo a la dirección del servidor de Plaspy y confirmar el reporte para que el rastreador sea visible en su cuenta Plaspy.

- Configure el servidor y el APN del rastreador para que los reportes GPRS se envíen a Plaspy.
- Verifique la zona horaria del dispositivo, los intervalos de datos y el modo de reporte para actualizaciones predecibles.
- Use comandos SMS o la herramienta del fabricante cuando no haya una interfaz USB o web disponible.
- Valide la conectividad para que el dispositivo aparezca y se actualice en los mapas e informes de Plaspy.

## Resumen de la configuración

(Resumen repetido intencionalmente para facilitar un escaneo rápido por parte de usuarios técnicos)

- Prepare el equipo para Plaspy configurando APN, servidor y transporte.
- Confirme que el dispositivo sea accesible por SMS y que la SIM tenga datos activos.
- Pruebe los intervalos de reporte y utilice RCONF para verificar las configuraciones.
- Registre o verifique el IMEI en Plaspy si su cuenta lo requiere.

## Ajustes del servidor Plaspy

Al configurar el ST-904L para Plaspy, utilice los siguientes ajustes públicos de servidor de Plaspy exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP (el dispositivo puede estar configurado en cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son el endpoint público y el puerto al que el ST-904L debe reportar para que Plaspy reciba e interprete los mensajes de ubicación y eventos.

## Requisitos típicos antes de la configuración

- Un ST-904L con batería cargada o alimentación externa conectada.
- Tarjeta SIM activa en el dispositivo con plan de datos y capacidad de SMS, y credenciales APN correctas.
- Acceso al instalador o propietario del dispositivo para enviar comandos de configuración por SMS.
- Conocimiento de los valores APN del operador para los marcadores [apn], [apnu] y [apnp].
- Una cuenta Plaspy o acceso administrativo para verificar que el dispositivo aparece después de la configuración.
- Capacidad para consultar la configuración del equipo mediante el comando RCONF y confirmar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El ST-904L envía datos GPS y de eventos a Plaspy configurando los parámetros del servidor GPRS del dispositivo hacia el endpoint compartido de Plaspy. Una vez configurado, los reportes y las alarmas se envían a Plaspy para que aparezcan en mapas, alertas e historiales.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El reporte puede usar UDP o TCP según la configuración de transporte del dispositivo.
- Las actualizaciones de ubicación, SOS, geovallas y alarmas de exceso de velocidad se reenvían a Plaspy para alertas y registro.
- Plaspy detecta automáticamente el protocolo del rastreador para poder parsear los mensajes entrantes del ST-904L.
- La visibilidad del dispositivo en Plaspy se valida confirmando que el rastreador envía datos tras la configuración.

## Flujo de configuración típico

1. Acceda al método oficial de configuración por SMS de SinoTrack o a la herramienta aprobada del fabricante para modificar los ajustes del equipo.
2. Confirme o ajuste la zona horaria del dispositivo si es necesario para la precisión de los registros.
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en la configuración del servidor del dispositivo.
4. Establezca el puerto 8888 para la entrada del servidor GPRS.
5. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
6. Configure los detalles del APN para la SIM instalada usando los valores del operador.
7. Aplique o guarde la configuración y reinicie el equipo si el rastreador lo requiere.
8. Valide que el dispositivo reporte a Plaspy comprobando el estado en su cuenta Plaspy y confirmando actualizaciones de ubicación recientes.

## Ejemplos de comandos de configuración

El ST-904L puede configurarse por SMS usando los comandos públicos que aparecen a continuación. Mantenga los marcadores tal como están al enviar comandos y reemplácelos con los valores APN de su operador. El orden siguiente refleja un flujo de configuración típico; el comando RESET es opcional o se usa para restaurar a valores de fábrica cuando sea necesario.

- Restaurar ajustes de fábrica (paso inicial opcional):
```text
RESET
```

- Establecer la zona horaria a UTC+0:
```text
8960000E00
```

- Configurar el APN del operador (reemplazar los marcadores con los valores de su operador):
```text
8030000 [apn] [apnu] [apnp]
```
Explicación de los marcadores:
- [apn] = Nombre del APN proporcionado por el operador móvil
- [apnu] = Nombre de usuario del APN si es requerido (dejar en blanco si no se usa)
- [apnp] = Contraseña del APN si es requerida (dejar en blanco si no se usa)

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto:
```text
8040000 54.85.159.138 8888
```
También puede apuntar a d.plaspy.com si el dispositivo acepta nombres de dominio en lugar de IP.

- Establecer intervalo de actualización con el dispositivo encendido:
```text
8050000 60
```

- Establecer intervalo de actualización cuando el dispositivo esté apagado o en otro modo de reporte:
```text
8090000 60
```

- Cambiar el dispositivo a modo GPRS:
```text
7100000
```

- Consultar o verificar la configuración actual del equipo:
```text
RCONF
```

Envíe cada SMS desde el número autorizado por la SIM según lo requiera la configuración del dispositivo SinoTrack. Después de aplicar estos comandos, espere un corto periodo para que el equipo se reconecte a la red y empiece a reportar a Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique los comandos con el manual del dispositivo correspondiente a su unidad.
- El ST-904L admite configuración por SMS como se muestra; use SMS cuando no haya una herramienta de PC disponible.
- Plaspy soporta tanto TCP como UDP; elija el transporte requerido por su instalación o deje el valor por defecto del dispositivo si no está seguro. Plaspy detecta automáticamente el protocolo entrante.
- Conserve una copia de los ajustes originales del dispositivo antes de cambiar la configuración y registre el IMEI para poder registrar o verificar el equipo en Plaspy.
- Si el dispositivo admite resolución DNS, puede usar d.plaspy.com en lugar de la IP numérica al configurar el servidor.

## Por qué usar Plaspy con esta configuración

Usar el ST-904L con Plaspy ofrece una forma simple de centralizar datos de ubicación, alarmas y estado para vehículos y activos personales. Las opciones de configuración por SMS y GPRS del dispositivo facilitan apuntar la telemetría al endpoint compartido de Plaspy, habilitando mapas en tiempo real, alertas e historiales sin integraciones de hardware complejas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante, por favor verifique la información en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que el comportamiento del dispositivo y los pasos de configuración pueden cambiar con el tiempo.

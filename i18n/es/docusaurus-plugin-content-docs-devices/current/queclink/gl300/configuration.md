---
slug: /queclink/gl300/configuration
id: gl300-configuration
sidebar_label: Configuration
title: QuecLink - GL300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GL300 para Plaspy, con ajustes de servidor y comandos SMS para preparar el dispositivo
keywords:
  - Configuración QuecLink GL300
  - Instalación QuecLink GL300
  - Configuración servidor GL300
  - Configuración GL300 Plaspy
  - Configuración rastreador GPS QuecLink
  - Configuración dispositivo Plaspy
  - Comandos SMS GL300
  - Configuración GPRS GL300
  - Integración plataforma rastreador GPS
  - Dispositivos compatibles Plaspy
---

# QuecLink - Configuración del GL300

Esta página describe el contexto público de configuración para utilizar el QuecLink GL300 con Plaspy. Resume los ajustes de servidor prácticos que Plaspy requiere, los pasos típicos de preparación antes de la integración y los comandos SMS de ejemplo que suelen usarse para configurar un GL300 para que reporte a Plaspy. Las instrucciones están pensadas para ayudar a instaladores técnicos e integradores a preparar el dispositivo para que envíe datos de ubicación y estado a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL300 soporta configuración por SMS y ajustes de servidor GPRS en su conjunto de comandos público, por lo que esta página incluye comandos SMS de ejemplo y notas, recomendando además verificar contra la documentación actual de QuecLink.

## Resumen de configuración

Configurar un GL300 para Plaspy prepara el dispositivo para establecer una sesión IP hacia el endpoint compartido de Plaspy, reportar actualizaciones regulares de posición y generar notificaciones de eventos que aparecen en los paneles de Plaspy. El proceso se centra en definir el APN de la red, configurar el dispositivo para usar el servidor y puerto de Plaspy y verificar que el rastreador sea visible en la plataforma.

- Configure el dispositivo para que reporte al endpoint compartido de Plaspy y así los datos sean direccionados a su cuenta Plaspy.
- Establezca el APN y las credenciales del operador para que el GL300 pueda abrir una conexión de datos.
- Seleccione el transporte (UDP o TCP) en el dispositivo si es necesario y ajuste el puerto para que coincida con el puerto compartido de Plaspy.
- Valide la conectividad confirmando que el rastreador aparece y reporta en el intervalo esperado en Plaspy.
- Aplique cualquier ajuste a nivel de dispositivo, como intervalos de reporte y comportamiento de SOS o entradas, que desee que Plaspy reciba.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto, por lo que configurar el GL300 para que apunte a d.plaspy.com (o 54.85.159.138) en el puerto 8888 es el paso de red esencial.

## Requisitos típicos antes de la configuración

- Un GL300 con batería cargada y una tarjeta SIM funcional que tenga datos habilitados para GPRS y capacidad de SMS para la configuración por comandos.
- Conocimiento de la contraseña del dispositivo; los comandos de ejemplo públicos que se muestran usan la contraseña por defecto queclink.
- Acceso al conjunto de comandos SMS oficiales de QuecLink o a la herramienta de configuración del fabricante correspondiente a su versión de firmware.
- El APN, usuario del APN y contraseña del APN proporcionados por la SIM u operador móvil (si son requeridos).
- Una forma de recibir o visualizar reportes en Plaspy para validar la conectividad después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El GL300 se configura para abrir una sesión GPRS y enviar mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo establece la sesión, Plaspy recibe e interpreta el protocolo del rastreador para poblar los mapas en vivo y los flujos de eventos.

- El dispositivo envía la ubicación y la telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy ingiere los datos entrantes y detecta automáticamente el protocolo del rastreador para su correcto análisis.
- Se envían actualizaciones de ubicación regulares según el intervalo configurado, de modo que el dispositivo sea visible en los paneles de Plaspy.
- Las notificaciones de eventos configuradas, como SOS o cambios en entradas, se reenvían a Plaspy para generar alertas.
- La visibilidad en la plataforma permite reproducción histórica, alertas de geocercas y supervisión operativa dentro de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de QuecLink para el GL300 —normalmente comandos SMS o la herramienta del fabricante— y confirme la contraseña del dispositivo.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Configure el puerto en 8888 para el endpoint de reporte del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte; configure el dispositivo en consecuencia.
5. Establezca el APN y las credenciales del operador para que el dispositivo pueda iniciar una sesión GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el procedimiento del proveedor lo requiere.
7. Valide que el GL300 reporte a Plaspy revisando la actividad del dispositivo y las actualizaciones de posición en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS de ejemplo se extraen de contenido público de configuración del QuecLink GL300. Los comandos se muestran en orden y usan la contraseña del dispositivo queclink por defecto. Si utiliza SMS para configurar la unidad, envíe cada comando como un SMS separado al número del dispositivo. Conserve los marcadores de posición y reemplácelos por los valores de su operador donde se indica.

1. Restauración de fábrica opcional (use solo si necesita restablecer los ajustes)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplazar los marcadores con los valores de su SIM)
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] = la cadena APN del operador
- [apnu] = usuario del APN si se requiere (dejar vacío si no se usa)
- [apnp] = contraseña del APN si se requiere (dejar vacío si no se usa)

4. Configurar el servidor GPRS para que apunte a Plaspy (se incluyen dominio e IP en el ejemplo público)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando establece el endpoint primario al dominio d.plaspy.com en el puerto 8888 e incluye la IP 54.85.159.138 tal como aparece en ejemplos públicos de configuración.

5. Establecer el intervalo de actualización de ubicación a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificaciones del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas importantes sobre estos comandos:
- La contraseña de ejemplo en estos comandos públicos es queclink. Si la contraseña de su dispositivo ha sido cambiada, sustituya por la contraseña correcta.
- Reemplace los marcadores de APN por los valores proporcionados por su operador antes de enviar.
- El comando de restauración de fábrica es opcional y debe usarse solo cuando se pretende regresar el dispositivo a sus valores predeterminados.

## Observaciones de configuración

- Las versiones de firmware de QuecLink y las variantes regionales pueden cambiar la sintaxis de los comandos o el orden de los parámetros; siempre verifique la sintaxis contra la documentación del firmware del dispositivo.
- La configuración por SMS está incluida en los ejemplos públicos anteriores; algunos proyectos prefieren usar el software del fabricante o herramientas locales de configuración cuando estén disponibles.
- Elija UDP o TCP según las necesidades de su implementación; Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo.
- Dado que Plaspy utiliza un puerto compartido para todos los dispositivos, confirme que ha ingresado d.plaspy.com o 54.85.159.138 y el puerto 8888 exactamente como se requiere.
- Mantenga un registro de la contraseña del dispositivo y de los pasos de configuración realizados para mantenimiento y auditoría futuros.

## Por qué usar Plaspy con esta configuración

Utilizar el QuecLink GL300 con Plaspy ofrece a las organizaciones una manera sencilla de incorporar datos GNSS robustos y multi-constelación a una plataforma centralizada para monitoreo en tiempo real, alertas y análisis histórico. La forma compacta y la fiabilidad probada del GL300 lo convierten en una opción práctica para seguridad personal, monitoreo de eventos y visibilidad de activos, donde se requieren flujos de posición consistentes.

Para obtener más información sobre Plaspy y cómo ingiere los datos de los dispositivos, visite https://www.plaspy.com. Para la referencia más reciente de comandos específicos de dispositivos, notas de firmware y recomendaciones del fabricante, verifique los detalles de configuración actuales en el sitio web de QuecLink en https://www.queclink.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.

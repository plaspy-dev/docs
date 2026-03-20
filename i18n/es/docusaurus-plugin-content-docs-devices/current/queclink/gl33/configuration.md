---
slug: /queclink/gl33/configuration
id: gl33-configuration
sidebar_label: Configuration
title: QuecLink - GL33 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GL33 para Plaspy con ajustes de servidor y comandos SMS para reporte por GPRS
keywords:
  - Configuración QuecLink GL33
  - Instalación QuecLink GL33
  - Configuración servidor QuecLink GL33
  - Configuración SMS QuecLink GL33
  - Configuración GPRS GL33
  - Configuración rastreador GPS GL33
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración seguimiento activo GL33
  - Configuración plataforma GPS QuecLink
---

# QuecLink - Configuración del GL33

Esta página documenta el contexto público de configuración para usar el QuecLink GL33 con Plaspy. Se centra en los ajustes prácticos del servidor y los pasos habituales que puede aplicar para que el GL33 reporte a los backends de Plaspy. Cuando los comandos SMS del fabricante son de acceso público, se muestran para que los instaladores puedan configurar el dispositivo y comunicarlo con Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GL33 soporta métodos de configuración por SMS y GPRS documentados públicamente, por lo que esta guía muestra los detalles del endpoint de Plaspy y comandos SMS de ejemplo que se usan comúnmente en la configuración inicial.

## Resumen de la configuración

Esta configuración prepara un QuecLink GL33 para enviar reportes de posición y eventos a Plaspy, de modo que el dispositivo aparezca en la plataforma y alimente mapas en vivo, historial y alertas. Los pasos se enfocan en establecer el APN de la red, los datos del servidor Plaspy, elegir el transporte y validar que los reportes lleguen a la plataforma.

- Configurar el APN de red del GL33 y las credenciales para que acceda a datos GPRS.
- Ajustar el servidor de reporte al endpoint de Plaspy para enrutar los datos a la plataforma.
- Seleccionar el modo de transporte UDP o TCP según requiera el firmware del dispositivo.
- Definir los intervalos de reporte y las entradas de evento para que Plaspy reciba ubicaciones y notificaciones de SOS.
- Validar la conectividad confirmando que el dispositivo envía datos a Plaspy y aparece en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Una unidad GL33 cargada con acceso a su interfaz de configuración por SMS o GPRS
- Una SIM funcional con datos habilitados y las credenciales APN requeridas
- Acceso al método o herramienta oficial de configuración QuecLink para el firmware de su dispositivo
- Conocimiento de la contraseña del dispositivo si los comandos SMS requieren autenticación; el ejemplo público utiliza la contraseña por defecto queclink
- Un teléfono de prueba capaz de enviar SMS o una herramienta de configuración GPRS para enviar comandos estilo AT
- Confirmación de la versión de firmware y la revisión de hardware para garantizar compatibilidad de comandos

## Cómo este rastreador se conecta a Plaspy

El GL33 se configura para enviar mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy para que Plaspy pueda ingerir y presentar los datos del dispositivo. Los reportes enviados por el dispositivo son normalizados por Plaspy y se muestran en mapas, líneas de tiempo y flujos de alertas.

- El dispositivo envía reportes periódicos de posición por GPRS a d.plaspy.com en el puerto 8888
- El transporte puede configurarse como UDP o TCP según los requerimientos del dispositivo y la elección del instalador
- Plaspy recibe y detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes
- Eventos como SOS, movimiento y batería baja se reenvían a Plaspy según la configuración para que los equipos operativos reciban alertas oportunas
- Una configuración exitosa asegura que el GL33 aparezca en los paneles y el historial de Plaspy en minutos después de comenzar a reportar

## Flujo típico de configuración

1. Acceda al método de configuración oficial QuecLink para su GL33, por ejemplo la interfaz de comandos SMS o la herramienta del fabricante.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Ajuste el puerto del dispositivo a 8888 que es el usado por Plaspy para todos los rastreadores soportados.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para reportes GPRS.
5. Configure el APN y las credenciales para que el dispositivo pueda establecer una conexión GPRS a Internet.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo requiere el equipo o el firmware.
7. Valide que el GL33 reporte a Plaspy comprobando el dispositivo en la plataforma Plaspy y confirmando actualizaciones de posición recientes.

## Comandos de configuración de ejemplo

El GL33 soporta configuración por SMS con comandos estilo AT. Los comandos abajo son ejemplos públicos formateados para enviar por SMS. Las muestras usan la contraseña del dispositivo queclink tal como aparece en documentación pública. Mantenga el orden donde se indica y reemplace los marcadores de APN por los valores de su operador.

1. Restauración de fábrica opcional cuando se requiere una configuración limpia
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Definir el APN del operador y credenciales
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el APN del operador
- {{apnu}} es el usuario del APN si es requerido; dejar en blanco si no se usa
- {{apnp}} es la contraseña del APN si es requerida; dejar en blanco si no se usa

4. Configurar el servidor de reporte GPRS a Plaspy usando dominio e IP para redundancia
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando ajusta el servidor de reporte a d.plaspy.com y 54.85.159.138 en el puerto 8888

5. Establecer el intervalo de actualización de ubicación a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota sobre el uso
- Envíe cada comando como SMS desde un número autorizado si su firmware de dispositivo exige configuración por SMS
- Mantenga la contraseña del dispositivo queclink según el ejemplo a menos que se haya cambiado durante el aprovisionamiento
- Reemplace los marcadores de APN por los valores de su operador antes de enviar los comandos

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y los parámetros SMS; verifique los comandos contra el manual del dispositivo para su versión de firmware
- El GL33 soporta configuración por SMS tal como se muestra en el ejemplo público; algunos instaladores pueden preferir las herramientas de software del fabricante cuando estén disponibles
- Elija UDP o TCP según la preferencia del instalador y el comportamiento del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente
- Plaspy usa el mismo puerto para todos los dispositivos soportados lo que simplifica la configuración y el enrutamiento en el backend
- Si realiza una restauración de fábrica como parte de la configuración, vuelva a aplicar APN, servidor e intervalos de reporte posteriormente

## Por qué usar Plaspy con esta configuración

Configurar un QuecLink GL33 para reportar a Plaspy ofrece a los equipos operativos y de seguridad una forma clara de combinar datos de seguimiento de activos con las herramientas de la plataforma para visibilidad y respuesta a incidentes. Con reportes GPRS a d.plaspy.com en el puerto 8888 y Plaspy manejando la detección de protocolo, el GL33 puede entregar información de ubicación y eventos a un backend consistente para mapeo, historial y alertas.

Para obtener más información sobre Plaspy y los rastreadores soportados visite https://www.plaspy.com. Para la sintaxis más reciente de comandos específicos del dispositivo, notas de firmware y detalles de hardware verifique la información actual en el sitio del fabricante https://www.queclink.com/

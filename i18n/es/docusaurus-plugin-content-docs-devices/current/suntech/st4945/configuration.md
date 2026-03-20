---
slug: /suntech/st4945/configuration
id: st4945-configuration
sidebar_label: Configuration
title: Suntech - ST4945 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST4945 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración Suntech ST4945
  - instalación Suntech ST4945
  - integración ST4945 Plaspy
  - configuración rastreador GPS Suntech
  - configuración servidor ST4945
  - configuración SMS Suntech ST4945
  - configuración TCP UDP ST4945
  - guía rastreador GPS Plaspy
  - instrucciones rastreador Suntech
  - plataforma seguimiento ST4945
---

# Suntech - ST4945 Configuration

Esta página presenta el contexto público de configuración para usar el rastreador Suntech ST4945 con Plaspy. Se centra en los ajustes prácticos y los comandos que le permitirán apuntar un ST4945 al backend de Plaspy para que el dispositivo informe ubicación y estado a su cuenta de Plaspy. Cuando los comandos del fabricante están documentados públicamente, los incluimos y explicamos cómo aplicarlos.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El ST4945 admite configuración vía SMS, así como reporte por TCP y UDP, por lo que esta guía cubre los ajustes de servidor de Plaspy y los comandos SMS más habituales que usan los integradores.

## Resumen de la configuración

El objetivo de configurar un ST4945 para Plaspy es preparar el dispositivo para que se comunique de forma fiable con los servidores de Plaspy y aparezca en la plataforma con intervalos de reporte y ajustes de red correctos. La configuración pública para este modelo suele usar comandos SMS para establecer el APN y los parámetros del servidor, y para ajustar la cadencia de reporte.

- Configure el APN del dispositivo y la dirección del servidor GPRS para que el rastreador pueda acceder a la red móvil y al endpoint de Plaspy.
- Establezca el intervalo de reporte apropiado según su caso de uso para que las actualizaciones de ubicación lleguen a Plaspy como espera.
- Elija el modo de transporte TCP o UDP en el puerto 8888 según la preferencia del instalador y el comportamiento de la red.
- Valide la conectividad y los parámetros usando el comando de verificación del fabricante para que Plaspy detecte automáticamente el protocolo del rastreador.
- Confirme que el dispositivo es visible en Plaspy y está generando telemetría y eventos después de la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los detalles públicos del endpoint de Plaspy que debe ingresar en el ST4945 al configurar el servidor GPRS o el destino de red. Plaspy usa el mismo puerto para todos los dispositivos compatibles y confía en la detección automática de protocolo para el manejo.

## Requisitos típicos antes de la configuración

- Un ST4945 con batería cargada y una tarjeta SIM funcional que tenga datos habilitados si va a usar reportes por TCP o UDP.
- Acceso a un método para enviar comandos SMS al rastreador si el dispositivo se configura por SMS, o acceso a la utilidad de configuración del fabricante si usa USB u otras herramientas locales.
- El IMEI del dispositivo para derivar el ID del equipo requerido por los comandos SMS de Suntech, como se describe más abajo.
- Conocimiento del APN del operador de red y, si aplica, del usuario y contraseña del APN.
- Acceso a las instrucciones oficiales de Suntech y a las notas de la versión del firmware ST4945 que esté utilizando.

## Cómo se conecta este rastreador a Plaspy

El ST4945 se configura para reportar al endpoint y al puerto compartidos de Plaspy, de modo que los mensajes de ubicación y alertas se integren en la plataforma Plaspy. Según el transporte elegido, el dispositivo abrirá una sesión con Plaspy y enviará mensajes periódicos de posición y eventos que Plaspy interpretará y mostrará.

- El dispositivo puede enviar datos por TCP o UDP al endpoint d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que no es necesario preseleccionar el protocolo dentro de la plataforma.
- El rastreador también puede soportar el envío de ciertos mensajes de configuración y estado vía SMS, que se pueden usar para establecer APN y parámetros de servidor.
- Tras la configuración, Plaspy mostrará actualizaciones de ubicación, alertas de movimiento o pánico y otros eventos compatibles del ST4945.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de Suntech que planea usar para el ST4945, por ejemplo la interfaz de comandos SMS o la utilidad del fabricante.
2. Determine e ingrese el destino del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto del servidor en 8888 (Plaspy emplea el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP en los ajustes del dispositivo si la selección de transporte es requerida.
5. Configure los detalles del APN y cualquier usuario o contraseña del APN que exija el operador móvil.
6. Aplique o guarde la configuración y reinicie el equipo si el rastreador requiere reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad en la plataforma y utilizando el comando de verificación del fabricante si está disponible.

## Ejemplos de comandos de configuración

El ST4945 admite comandos SMS para configurar la red y el reporte. Los siguientes comandos públicos se extraen de las instrucciones de Suntech y se muestran como plantillas. Reemplace {{device_id}} por el ID del dispositivo derivado del IMEI según se explica más abajo. Conserve los marcadores de posición [apn], [apnu] y [apnp] al insertar los valores de su operador.

Cómo calcular el ID del dispositivo
- El ID que usa Suntech en los comandos SMS son seis dígitos extraídos del IMEI según documenta Suntech: los últimos 6 números excluyendo el dígito de verificación final.
- Ejemplo: si el IMEI es 123456789012345 entonces el ID del equipo en este ejemplo es 901234.

1) Establecer el APN del operador y el servidor GPRS
- Si no se requiere usuario ni contraseña del APN use el flag 0 y deje los campos de usuario y contraseña en blanco
```text
SA200NTW;{{device_id}};02;0;[apn];; ;54.85.159.138;8888;;;;
```

- Si se requiere usuario o contraseña del APN use el flag 1 e incluya [apnu] y [apnp]
```text
SA200NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Nota sobre los marcadores de posición
- [apn] es el APN de su operador móvil
- [apnu] es el usuario del APN cuando sea requerido
- [apnp] es la contraseña del APN cuando sea requerida
- {{device_id}} es el identificador de seis dígitos derivado del IMEI como se muestra arriba

2) Establecer el intervalo de actualización a 60 segundos
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Consultar ajustes actuales o verificar la configuración
```text
SA200CMD;{{device_id}};02;PresetA
```

Envíe estos comandos SMS desde un número autorizado si el rastreador está configurado para aceptar configuración por SMS. El comportamiento exacto depende del firmware del ST4945 y del modo de configuración.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles. Verifique siempre el formato de comando contra la documentación de Suntech para la versión de firmware que esté usando.
- El ST4945 admite tanto la configuración por SMS como el reporte por TCP o UDP. Utilice SMS para el aprovisionamiento inicial si la conectividad de datos aún no está establecida.
- Elija UDP o TCP según la fiabilidad y la latencia de la red en su despliegue. Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo de forma automática.
- Cuando se requiera usuario o contraseña del APN, coloque el flag de credenciales APN en 1 como se muestra en el comando de ejemplo. Si no son necesarias, use el flag 0 y deje esos campos en blanco.
- Después de aplicar los ajustes, confirme que el dispositivo informa a Plaspy observando la actividad en la plataforma y utilizando el comando de verificación anterior.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST4945 con Plaspy ofrece una forma sencilla de centralizar ubicaciones, alertas de movimiento y notificaciones de emergencia de rastreadores portátiles en una sola plataforma de gestión de flotas o activos. El soporte del ST4945 para TCP, UDP y SMS, junto con la detección automática de protocolos de Plaspy, facilita el despliegue de dispositivos en entornos de red mixtos y que reporten de forma fiable a un único endpoint de Plaspy.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de los dispositivos visite https://www.plaspy.com. Los métodos de configuración específicos de cada dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique los últimos detalles de configuración del ST4945 en el sitio oficial de Suntech http://www.suntechint.com/ antes de un despliegue a gran escala.

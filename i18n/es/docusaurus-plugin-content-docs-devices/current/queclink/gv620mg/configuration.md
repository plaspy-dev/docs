---
slug: /queclink/gv620mg/configuration
id: gv620mg-configuration
sidebar_label: Configuration
title: QuecLink - GV620MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV620MG con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - QuecLink GV620MG configuración
  - QuecLink GV620MG instalación
  - GV620MG Plaspy
  - GV620MG configuración servidor
  - configuración rastreador QuecLink
  - configuración GPS GV620MG
  - configuración dispositivo Plaspy
  - configuración rastreador remolque
  - QuecLink GV620MG APN
  - comandos SMS GV620MG
---

# QuecLink - GV620MG Configuration

Esta página documenta el contexto público de configuración para utilizar el rastreador QuecLink GV620MG con Plaspy. Reúne los ajustes de servidor de Plaspy y los pasos prácticos de configuración que se aplican comúnmente al poner el GV620MG en servicio para seguimiento de flotas, monitoreo de remolques y telemetría remota. Cuando los comandos del fabricante están publicamente disponibles, se muestran aquí como ejemplos de referencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para procesar los datos. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. El GV620MG admite comandos por SMS como los que se muestran a continuación, además de las herramientas de configuración estándar proporcionadas por QuecLink o los instaladores.

## Resumen de configuración

El objetivo de la configuración es preparar el GV620MG para que reporte de forma fiable la posición GNSS, las entradas y la telemetría de sensores a Plaspy utilizando el endpoint y puerto compartidos del servidor. En muchas instalaciones la configuración es un proceso puntual que define el APN, el endpoint del servidor, los intervalos de reporte y el comportamiento de las entradas para que el dispositivo aparezca en la plataforma Plaspy y comience a enviar datos normalmente.

- Configure el dispositivo para usar el endpoint y puerto del servidor Plaspy y así entregar los datos en tiempo real.
- Proporcione el APN y las credenciales celulares correctas para que el GV620MG establezca conectividad de datos móviles.
- Defina intervalos de reporte y reglas de entradas para que Plaspy reciba la telemetría y los eventos esperados.
- Valide las comunicaciones del dispositivo con Plaspy y confirme que aparece como dispositivo activo en la plataforma.
- Use los comandos SMS documentados o las herramientas oficiales de QuecLink según su flujo de trabajo de instalación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como host de red al que enviar la telemetría
- IP del servidor 54.85.159.138 como endpoint alternativo para enrutamiento
- Puerto 8888 que Plaspy utiliza para las conexiones de dispositivos
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad GV620MG alimentada y accesible para configuración y pruebas
- Una tarjeta SIM celular válida con datos y SMS habilitados y credenciales APN correctas
- Acceso al método de configuración oficial de QuecLink preferido por su instalador, como comandos SMS o el software de QuecLink
- Conocimiento de la contraseña del dispositivo si se usa configuración por SMS; la contraseña por defecto que aparece en los ejemplos públicos es queclink
- Una cuenta de Plaspy o administración de cuenta preparada para aceptar e identificar el dispositivo cuando reporte
- Herramientas básicas para observar las respuestas del dispositivo, como un teléfono para feedback por SMS o una herramienta de registro/serial si utiliza configuración por cable

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GV620MG abre una sesión de datos con el endpoint del servidor Plaspy y envía actualizaciones periódicas de posición y estado. Plaspy procesa la telemetría y pone la información a disposición para mapas en tiempo real, alertas e informes históricos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com en el puerto 8888
- Los mensajes de telemetría y eventos se envían por UDP o TCP según el transporte elegido
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes para obtener ubicación y estado de entradas/salidas
- Intervalos de reporte regulares y eventos de alarma proporcionan visibilidad y permiten a Plaspy generar alertas y almacenar el historial
- El estado del dispositivo, como batería y conectividad celular, se informa a Plaspy para su monitoreo

## Flujo habitual de configuración

1. Acceda al método de configuración oficial de QuecLink o al software recomendado para el GV620MG, ya sea mediante comandos SMS o la herramienta del proveedor.
2. Ingrese el host del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto en 8888 en la configuración del servidor del dispositivo.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN y el nombre de usuario y contraseña del APN si fueran necesarios para que el dispositivo pueda conectarse a la red móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o la herramienta lo requieren.
7. Valide que el dispositivo reporte a Plaspy y aparezca como activo en la plataforma comprobando la telemetría reciente o el tiempo de última conexión.
8. Ajuste los intervalos de reporte y las reglas de entradas según sea necesario basado en pruebas operativas.

## Comandos de configuración de ejemplo

El GV620MG puede configurarse enviando comandos por SMS. Los ejemplos públicos siguientes usan la contraseña del dispositivo queclink, que es la predeterminada mostrada en la guía pública. Preserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por el APN del operador, el usuario APN y la contraseña APN según corresponda.

- Comando opcional de restauración de fábrica inicial
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajuste la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Establezca el APN del operador y credenciales APN opcionales
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explicación: reemplace {{apn}} con el APN de su SIM. Si su APN requiere usuario o contraseña, reemplace {{apnu}} y {{apnp}} respectivamente. Deje el usuario o la contraseña vacíos si no son necesarios.

- Configure el servidor GPRS hacia Plaspy usando el dominio y puerto e incluya la IP del servidor tal como se proporciona en la guía pública
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando configura el dispositivo para reportar a d.plaspy.com en el puerto 8888 e incluye la IP del servidor 54.85.159.138 como ruta alternativa.

- Establezca el intervalo de reporte en 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Active la notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos
- Envíe cada comando como un mensaje SMS desde un número autorizado o mediante el método oficial de QuecLink para configuración por SMS.
- Mantenga el orden de los comandos al realizar una configuración inicial si está restaurando la configuración de fábrica primero.
- La contraseña predeterminada del dispositivo en estos ejemplos es queclink. Si su dispositivo tiene una contraseña distinta, sustitúyala en cada comando.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; confirme siempre con las notas de firmware del dispositivo.
- Elija UDP o TCP según sus requisitos de red y fiabilidad; ambos son soportados por Plaspy en el puerto 8888.
- La configuración por SMS está documentada públicamente para muchas unidades QuecLink y es útil cuando se requiere acceso remoto o en sitios sin conectividad fija.
- Asegúrese de que los valores del APN sean correctos y de que la SIM soporte las bandas LTE necesarias y las caídas a otras tecnologías cuando corresponda.
- Después de la configuración, valide los reportes confirmando que la unidad aparece en Plaspy y envía actualizaciones regulares.

## Por qué usar Plaspy con esta configuración

Usar el GV620MG con Plaspy ofrece una manera práctica de mantener visibilidad sobre remolques y equipos pesados con un rastreador robusto que sigue reportando incluso cuando la alimentación externa no está disponible. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, los instaladores pueden aplicar una configuración de servidor consistente que permite a Plaspy recibir posiciones GNSS, estados de entradas y telemetría de sensores para alertas, geocercas e informes históricos.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official command documentation verify details with the manufacturer at https://www.queclink.com/

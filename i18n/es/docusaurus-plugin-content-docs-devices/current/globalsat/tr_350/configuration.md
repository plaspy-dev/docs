---
slug: /globalsat/tr_350/configuration
id: tr_350-configuration
sidebar_label: Configuration
title: GlobalSat - TR-350 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el GlobalSat TR-350 en Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración GlobalSat TR-350
  - Configuración TR-350
  - TR-350 Plaspy
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS GlobalSat
  - Configuración SMS TR-350
  - Ajustes de servidor TR-350
  - Configuración rastreador GPS personal
  - Configuración rastreador MPERS
  - Configuración plataforma de rastreo TR-350
---

# GlobalSat - Configuración del TR-350

Esta página documenta el contexto público de configuración para usar el GlobalSat TR-350 con Plaspy. Resume los ajustes compartidos del servidor Plaspy que debe aplicar, explica el flujo de trabajo de configuración habitual y presenta los comandos de configuración por SMS disponibles públicamente para apuntar un TR-350 a Plaspy. Úsela como referencia práctica para integrar el TR-350 en Plaspy y consulte la documentación oficial del dispositivo para detalles específicos de firmware y del vendedor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del TR-350 y los ejemplos de comandos SMS que se muestran a continuación son materiales de configuración de dominio público; si necesita herramientas de gestión del dispositivo o aprovisionamiento remoto, consulte con GlobalSat o su distribuidor para obtener instrucciones actualizadas.

## Resumen de la configuración

Configurar el TR-350 para Plaspy prepara el dispositivo para enviar datos de ubicación y estado a un punto de enlace compartido de Plaspy y habilita la visibilidad en su cuenta de Plaspy. El flujo público de configuración normalmente utiliza el IMEI del dispositivo y un APN junto con los ajustes de servidor de Plaspy para establecer el reporte.

- Configure el dispositivo para que apunte su endpoint de servidor a Plaspy y así la plataforma reciba telemetría y eventos.
- Establezca el APN del dispositivo y, si corresponde, el usuario y la contraseña del APN para que funcionen los datos celulares y los comandos SMS.
- Verifique el IMEI del equipo y el formato de los comandos SMS utilizados para aprovisionar el rastreador de forma remota.
- Guarde y aplique los ajustes, luego valide que el dispositivo aparezca en Plaspy y esté informando ubicación y eventos de estado.
- Opcionalmente reinicie el dispositivo si es necesario para que los ajustes surtan efecto y empiece a reportar a Plaspy.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos previos a la configuración

- Un dispositivo TR-350 con batería cargada y encendido.
- Una tarjeta SIM activa con datos y SMS habilitados si va a enviar SMS de configuración o si el dispositivo utiliza datos celulares para telemetría.
- El número IMEI del dispositivo disponible y validado para aprovisionamiento.
- Acceso al método de configuración del fabricante, como aprovisionamiento por SMS, software del proveedor o un portal web proporcionado por GlobalSat o su distribuidor.
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN para conectividad celular cuando sean necesarios.
- Un teléfono o pasarela SMS capaz de enviar los mensajes de configuración que se muestran a continuación si usa aprovisionamiento por SMS.

## Cómo se conecta este rastreador a Plaspy

El TR-350 se configura para reportar su ubicación y estado al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir telemetría y generar alertas. Una vez configurado, Plaspy recibe las fijaciones GNSS del dispositivo, notificaciones de eventos y actualizaciones de estado del equipo para monitoreo y respuesta.

- El rastreador apunta el reporte a d.plaspy.com o a la IP de Plaspy 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP cuando el dispositivo requiere seleccionar un protocolo de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta al puerto compartido, por lo que no es necesario seleccionar un protocolo por dispositivo en la plataforma.
- Eventos como SOS, movimiento, avisos de caída, estado de batería y conectividad se envían a Plaspy para alertas y visibilidad en el panel.
- Tras una configuración exitosa, confirme que el rastreador aparece y reporta datos en su instancia de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el TR-350, o prepare el flujo de aprovisionamiento por SMS recomendado por GlobalSat.
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 cuando el dispositivo requiera una dirección IP en lugar de un dominio.
3. Establezca el puerto en 8888 para todos los dispositivos según lo requerido por Plaspy.
4. Seleccione UDP o TCP si el equipo le pide elegir un protocolo de transporte durante la configuración.
5. Aplique o guarde la configuración en el dispositivo o envíe los comandos SMS especificados por el fabricante para aplicar los ajustes.
6. Reinicie o reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma y que las actualizaciones de ubicación y estado son visibles.

## Ejemplos de comandos de configuración

El TR-350 puede configurarse mediante comandos SMS. El formato público de aprovisionamiento incluido por el proveedor muestra un comando de configuración y un comando de reinicio. Reemplace los marcadores con sus valores reales antes de enviar.

Formato de ejemplo empleado por el aprovisionamiento de Plaspy
TSPRXAB27GHKLMnaicz*U!

Plantilla del comando de configuración
- Reemplace {{imei}} por el IMEI del equipo.
- Reemplace [apn], [apnu] y [apnp] por el APN del operador, el usuario del APN y la contraseña del APN según corresponda.
- La cadena de comando requiere un valor de checksum calculado sobre el texto antes del asterisco y luego añadido en forma hexadecimal en mayúsculas de dos dígitos.

Comando de configuración
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando opcional de reinicio (usar si es necesario para aplicar ajustes)
```text
GSC,{{imei}},3,0,LH*{{checksum}}!
```

Cálculo del checksum
- El checksum es la XOR byte por byte de todos los caracteres en la subcadena del comando antes del carácter '*'.
- Convierta el resultado XOR a una cadena hexadecimal en mayúsculas de dos caracteres (rellene con un cero a la izquierda si es necesario).
- El proveedor del dispositivo incluyó un pequeño ejemplo en JavaScript que calcula este checksum XOR; implemente la misma lógica en su pasarela SMS o calcúlelo manualmente antes de enviar.

Explicación de los marcadores
- {{imei}}: el número IMEI del dispositivo requerido por el comando para apuntar a un rastreador específico.
- [apn]: el nombre del punto de acceso (APN) del operador para conectividad de datos.
- [apnu]: usuario del APN del operador si su perfil SIM lo requiere.
- [apnp]: contraseña del APN del operador si su perfil SIM lo requiere.
- {{checksum}}: el valor del checksum XOR según se describió arriba.

Siga el orden de comandos tal como se muestra al aprovisionar. Enviar primero el comando de configuración y luego el de reinicio es una secuencia común cuando se requiere reiniciar para que los ajustes surtan efecto.

## Notas de configuración

- El firmware y las variantes regionales del dispositivo pueden cambiar los formatos de los comandos o los parámetros requeridos; confirme los comandos contra la revisión de firmware del equipo en su poder.
- El TR-350 admite aprovisionamiento por SMS según la documentación pública; use un teléfono o pasarela con capacidad SMS y asegúrese de que su SIM y el operador permitan la entrega de mensajes.
- Elija TCP o UDP según las necesidades de la instalación y el comportamiento del operador; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo del dispositivo.
- Mantenga siempre preciso el IMEI del equipo y los datos del APN al construir comandos SMS para evitar un aprovisionamiento incorrecto.
- Si se requiere un reinicio para aplicar los ajustes, el comando de reinicio proporcionado es el método público que muestra el proveedor.

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat TR-350 con Plaspy ofrece una forma directa de incorporar telemetría de seguridad personal en una plataforma de monitoreo unificada. El diseño del TR-350 para casos de uso MPERS —incluyendo eventos SOS, avisos de movimiento y caídas, y reporte de ubicación— complementa la ingesta y alertas en tiempo real de Plaspy para que cuidadores y equipos operativos puedan actuar sobre eventos accionables del dispositivo.

Learn more about Plaspy and how it supports device integrations on the main site https://www.plaspy.com. For device specific setup instructions, firmware behavior, and the latest manufacturer details verify the current documentation at the GlobalSat website https://www.globalsat.com.tw/.

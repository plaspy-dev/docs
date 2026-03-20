---
slug: /atrack/at5i/configuration
id: at5i-configuration
sidebar_label: Configuration
title: ATrack - AT5i Configuration
sidebar_class_name: menu_item_tracker
description: Configure el ATrack AT5i para Plaspy con comandos de servidor y un flujo de configuración práctico
keywords:
  - Configuración ATrack AT5i
  - Configuración AT5i para Plaspy
  - Configuración de servidor ATrack
  - Configuración rastreador GPS AT5i
  - Configuración GPRS AT5i
  - Configuración de rastreador Plaspy
  - Rastreo vehicular AT5i
  - Configuración eventos ACC AT5i
  - Modo binario AT5i
  - Ajustes APN AT5i
---

# ATrack - Configuración del AT5i

Esta página documenta el contexto público de configuración para usar el ATrack AT5i con Plaspy. Reúne los ajustes de servidor prácticos, los pasos del flujo de trabajo y comandos de ejemplo disponibles públicamente para preparar un AT5i a fin de que informe a la plataforma Plaspy. Use esta guía junto con la documentación del fabricante para completar una instalación confiable.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que aparecen aquí son los publicados para el AT5i e ilustran un flujo típico de configuración para reportes GPRS hacia Plaspy.

## Visión general de la configuración

El objetivo al configurar un AT5i para Plaspy es dejar el dispositivo listo para establecer una conexión GPRS y enviar datos de ubicación y eventos al endpoint del servidor de Plaspy, de modo que el equipo sea visible y manejable desde la plataforma.

- Definir el servidor GPRS y el APN del dispositivo para permitir la conectividad de datos móviles hacia Plaspy.
- Configurar el modo y el intervalo de reporte para que el dispositivo transmita las ubicaciones según lo requerido.
- Activar el reporte de eventos como ACC o entradas para generar alertas en Plaspy.
- Seleccionar el protocolo de transporte (UDP o TCP) y asegurarse de que el dispositivo apunte al servidor y puerto de Plaspy.
- Validar la conectividad y confirmar que el dispositivo está reportando correctamente a la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para uso donde se acepte un nombre DNS
- IP del servidor 54.85.159.138 cuando se use una dirección IP directa
- Puerto 8888 como puerto de escucha de Plaspy
- Soporte de transporte por UDP o TCP según preferencia del dispositivo y la red
- Plaspy detecta automáticamente el protocolo del rastreador para seleccionar el manejador correcto
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que utilice el puerto 8888 para cualquier rastreador soportado

## Requisitos previos típicos

- Una unidad AT5i encendida y con batería, con acceso físico para configurar
- Una SIM activa con datos móviles habilitados y las credenciales APN correctas
- Acceso al método oficial de configuración ATrack o al software correspondiente para su firmware AT5i
- Conocimiento de los ajustes APN, incluyendo nombre de APN y, opcionalmente, usuario y contraseña
- Un método para aplicar y guardar los ajustes en el dispositivo y reiniciarlo si fuese necesario

## Cómo se conecta este rastreador a Plaspy

El AT5i se configura para abrir una conexión GPRS y enviar sus datos al endpoint y puerto del servidor Plaspy para que Plaspy pueda ingerir actualizaciones de ubicación y eventos para su monitoreo e informes.

- El dispositivo apunta al dominio o IP del servidor Plaspy y al puerto 8888 para reportar
- El reporte puede usar UDP o TCP según el transporte seleccionado en la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Eventos del dispositivo como cambios de ACC e intervalos periódicos de rastreo se envían a Plaspy
- Una configuración correcta hace al dispositivo visible y operativo dentro de la plataforma Plaspy

## Flujo de configuración común

1. Acceda al método oficial de configuración ATrack o al software para su modelo y firmware AT5i.
2. Ingrese el servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
5. Configure los parámetros de reporte, como intervalo de rastreo, disparadores de eventos y formato de datos según las capacidades del equipo.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante lo requiere.
7. Valide que el dispositivo se conecte y reporte correctamente a Plaspy y supervise los primeros mensajes en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos son los pasos públicos de configuración estilo AT publicados para el AT5i. Se muestran en el orden que usa el ejemplo del fabricante.

- Establecer disparadores de evento ACC y reportes relacionados:
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer intervalo de rastreo a 60 segundos:
```
AT$TRAC=1,60,,,,,2
```

- Poner el equipo en modo binario (especificación de formato):
```
AT$FORM=1,@P,0,""
```

- Configurar el servidor GPRS incluyendo marcadores de posición de APN y la IP y puerto de Plaspy
Tenga en cuenta que los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN de su SIM, el usuario APN y la contraseña APN respectivamente:
```
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- Verificar estado y configuración del dispositivo:
```
AT$INFO=?
```

Explicación de los marcadores:
- {{apn}} es el nombre del APN de la red móvil requerido para el acceso a datos GPRS
- {{apnu}} es el usuario APN cuando el operador móvil lo requiere
- {{apnp}} es la contraseña APN cuando el operador móvil lo requiere

Estos comandos son la secuencia de ejemplo publicada para definir el comportamiento de reporte y el endpoint GPRS hacia Plaspy. Alternativamente, el dispositivo puede aceptar configuración mediante la herramienta oficial ATrack o por comandos SMS según el firmware y las herramientas disponibles.

## Notas de configuración

- Revisar la versión de firmware y la revisión de hardware, ya que pueden cambiar parámetros de comandos u opciones disponibles; verifique los comandos con la versión de firmware de su AT5i.
- Elija UDP o TCP según la confiabilidad de la red y el comportamiento NAT del operador; ambos transportes son compatibles y Plaspy detectará el protocolo automáticamente.
- Asegúrese de que las credenciales APN sean correctas y que la SIM tenga datos activos para establecer una sesión GPRS hacia Plaspy.
- Si usa nombres de dominio en lugar de IP, utilice d.plaspy.com cuando el dispositivo lo soporte; en caso contrario use la IP de Plaspy 54.85.159.138.
- Después de aplicar la configuración, valide siempre mediante AT$INFO=? o con la herramienta oficial ATrack y confirme que el dispositivo aparece en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el AT5i para reportar a Plaspy ofrece una vía directa hacia la visibilidad centralizada y el monitoreo operativo de vehículos y activos. Con Plaspy recibiendo datos de ubicación y eventos del AT5i, las organizaciones pueden supervisar movimientos, responder incidentes y agregar telemetría de dispositivos para informes y gestión de flotas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles más recientes de dispositivos ATrack en https://www.atrack.com.tw/ para confirmar comandos y pasos de configuración específicos del firmware antes del despliegue.

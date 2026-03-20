---
slug: /atrack/ax9/configuration
id: ax9-configuration
sidebar_label: Configuration
title: ATrack - AX9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar ATrack AX9 con Plaspy, incluye ajustes de servidor, comandos AT de ejemplo y flujo de configuración práctico
keywords:
  - Configuración ATrack AX9
  - Configuración AX9 Plaspy
  - Configuración servidor ATrack AX9
  - Configuración GPS AX9
  - Guía de instalación AX9
  - Configuración GPRS AX9
  - Rastreo de vehículos AX9
  - Configuración OBDII AX9
  - Compatibilidad AX9 Plaspy
  - Configuración rastreador GPS AX9
---

# ATrack - AX9 Configuración

Esta página describe cómo configurar públicamente el rastreador ATrack AX9 para que reporte a Plaspy. Aquí encontrará los ajustes de servidor compartidos que requiere Plaspy, los pasos prácticos para aplicarlos en el AX9 y ejemplos de comandos AT que se usan comúnmente cuando el equipo se configura a través de la interfaz del fabricante.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice para la configuración. Use esta guía junto con la documentación oficial de ATrack para detalles específicos del dispositivo.

## Resumen de la configuración

Esta guía ofrece un camino práctico y conciso para preparar una unidad AX9 y que empiece a reportar a Plaspy, de modo que la plataforma muestre ubicación, eventos y estado. Resume qué configurar en el dispositivo, cómo validar la conectividad y qué comandos AT son habituales cuando se usa la interfaz del fabricante.

- Apuntar el rastreador al endpoint y puerto del servidor de Plaspy para que el dispositivo abra una sesión de telemetría.
- Configurar los parámetros GPRS, incluyendo las credenciales APN, para que el AX9 use la SIM del vehículo y los datos móviles.
- Definir el comportamiento de reporte como intervalos de seguimiento y notificación de eventos para controlar la frecuencia de transmisión.
- Habilitar el modo binario o el formato de payload requerido para que Plaspy pueda interpretar correctamente los mensajes entrantes.
- Validar la conectividad y el estado del dispositivo para confirmar que el AX9 sea visible en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Use el dominio del servidor de Plaspy d.plaspy.com cuando el método de configuración acepte un nombre de host.
- La IP del servidor Plaspy es 54.85.159.138 para opciones de configuración que requieren una IP directa.
- Todos los dispositivos en Plaspy usan el mismo puerto, el puerto 8888.
- El AX9 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la opción de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo en Plaspy; configure el dispositivo para que alcance el endpoint y puerto compartidos.

## Requisitos típicos antes de configurar

- Una unidad AX9 instalada y con alimentación, con acceso al método o herramienta de configuración del fabricante.
- Una tarjeta SIM activa y un plan de datos móviles compatible con la capacidad de red del dispositivo.
- Documentación del fabricante o acceso a la consola de configuración para enviar comandos estilo AT o usar software del proveedor.
- Conocimientos básicos de los parámetros APN del proveedor de SIM para completar los marcadores de posición como [apn], [apnu] y [apnp].
- La posibilidad de reiniciar o cortar la alimentación del equipo después de la configuración para aplicar los nuevos ajustes.
- Acceso a Plaspy para validar que el dispositivo aparezca en línea tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el AX9 abre una conexión GPRS y envía paquetes de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes, detecta automáticamente el protocolo del rastreador y muestra los datos del equipo en la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Los datos se transmiten por el protocolo de transporte elegido, UDP o TCP, según la configuración del dispositivo.
- El equipo reporta intervalos periódicos de seguimiento y mensajes impulsados por eventos como ACC o eventos de conducción brusca.
- Plaspy analiza el payload entrante y lo asigna al registro del dispositivo automáticamente gracias a la detección de protocolo.
- La visibilidad en la plataforma permite monitorear ubicación, movimiento y los eventos configurados del AX9.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de ATrack para el AX9.
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los campos de servidor/GPRS.
3. Configure el puerto de comunicación en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte.
5. Configure el APN y otros parámetros GPRS (use los marcadores [apn], [apnu], [apnp] donde corresponda).
6. Aplique o guarde la configuración y reinicie o corte la alimentación del AX9 si el procedimiento lo requiere.
7. Valide que el equipo reporte a Plaspy comprobando el estado del dispositivo en la plataforma o usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El AX9 puede configurarse con comandos estilo AT. Los comandos siguientes provienen de ejemplos públicos de configuración y muestran un orden típico para preparar la notificación por eventos ACC, el intervalo de rastreo, el formato del payload y los ajustes GPRS para Plaspy.

- Configure la entrada de evento ACC y las reglas de reporte, y habilite la acción por evento:
```text
AT$INPT=0,7
```
```text
AT$REPT=101,1,"%IN0","1",0,1
```
```text
AT$REPT=102,1,"%IN0","0",0,1
```
```text
AT$RACT=1,3,2
```
- Establezca el intervalo de rastreo periódico a 60 segundos:
```text
AT$TRAC=1,60,,,,,2
```
- Configure el modo binario para el formato de payload:
```text
AT$FORM=1,@P,0,""
```
- Configure el servidor GPRS apuntando a Plaspy. Reemplace los marcadores por las credenciales APN de su SIM según sea necesario:
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explicación de los marcadores:
- [apn] es el APN de la red móvil proporcionado por su operador de SIM.
- [apnu] es el nombre de usuario del APN si el operador lo requiere; dejar en blanco si no es necesario.
- [apnp] es la contraseña del APN si el operador la requiere; dejar en blanco si no es necesario.

- Compruebe el estado y la configuración del equipo:
```text
AT$INFO=?
```

Nota: el ejemplo usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Puede sustituir el nombre de host d.plaspy.com en campos de comando o herramientas del proveedor que acepten nombres de host.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos AT disponibles o el formato de los parámetros; verifique los comandos con la documentación del firmware del AX9.
- El equipo puede configurarse para TCP o UDP; seleccione el transporte que se ajuste a su práctica de instalación y requisitos de red.
- Las credenciales APN varían según el operador. Tenga listos los marcadores [apn], [apnu] y [apnp] y complételos con los datos del operador.
- Use la herramienta del fabricante o el canal seguro recomendado por ATrack para aprovisionamiento masivo o remoto cuando esté disponible.
- Tras aplicar los ajustes, puede ser necesario reiniciar o cortar la alimentación del dispositivo para que los cambios tengan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el ATrack AX9 para que reporte a Plaspy ofrece ajustes de servidor consistentes y un flujo de trabajo predecible para integrar dispositivos AX9 en un entorno de monitoreo de flotas o activos. El endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración por dispositivo y permiten que las organizaciones se concentren en el comportamiento de reporte y el monitoreo operativo.

Para saber más sobre Plaspy y cómo soporta equipos como el ATrack AX9, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo, notas de firmware y la documentación oficial de comandos, siempre verifique con el fabricante en https://www.atrack.com.tw/

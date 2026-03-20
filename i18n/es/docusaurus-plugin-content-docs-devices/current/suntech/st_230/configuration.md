---
slug: /suntech/st_230/configuration
id: st_230-configuration
sidebar_label: Configuration
title: Suntech - ST 230 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Suntech ST 230 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración Suntech ST 230
  - configuración ST 230
  - configuración Plaspy ST 230
  - configuración tracker GPS Suntech
  - configuración servidor ST 230
  - configuración SMS Suntech ST 230
  - configuración GPRS ST 230
  - configuración tracker Plaspy
  - compatibilidad tracker GPS Plaspy
  - configuración seguimiento Suntech ST230
---

# Suntech - Configuración ST 230

Esta página ofrece orientación pública para configurar el rastreador GPS Suntech ST 230 con la plataforma Plaspy. Reúne los ajustes de servidor compartidos por Plaspy y los comandos SMS prácticos publicados para el ST 230, de modo que usted pueda preparar el dispositivo para comunicarse con Plaspy. Use este documento como referencia de configuración y complételo con la documentación del fabricante para los pasos finales de instalación.

Plaspy utiliza un único endpoint de servidor y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 230 soporta GPRS con transporte TCP o UDP y puede configurarse mediante comandos SMS, por lo que los ejemplos a continuación muestran cómo establecer el APN, el servidor de Plaspy y un intervalo de reporte usando las plantillas públicas de comandos.

## Resumen de configuración

Este proceso prepara el ST 230 para enviar reportes de posición y estado a Plaspy configurando los parámetros de red del dispositivo, el endpoint del servidor y el comportamiento de reporte. Siga las plantillas de comando publicadas cuidadosamente y verifique que el dispositivo reporte en la plataforma Plaspy tras la configuración.

- Configure el APN de la red móvil y las credenciales del APN opcionales para que el rastreador pueda acceder a datos móviles.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) si el equipo lo requiere.
- Establezca un intervalo de reportes acorde a sus necesidades de monitoreo y conservación de batería.
- Valide la configuración con el comando de verificación del dispositivo y confirme la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el ST 230:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP según preferencia del dispositivo o la red
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente.

## Requisitos habituales antes de la configuración

- Un ST 230 con batería cargada o fuente de alimentación conectada para que el dispositivo acepte la configuración y registre en la red.
- Una tarjeta SIM activa con datos y capacidad de SMS y con la configuración APN correcta para el operador móvil.
- El número IMEI del dispositivo disponible para derivar el ID del dispositivo utilizado en los comandos SMS.
- Un teléfono con capacidad para enviar SMS o la herramienta de configuración del fabricante para enviar los comandos al rastreador.
- Acceso a la cuenta Plaspy o información de registro del dispositivo para confirmar que el equipo aparece en la plataforma tras la configuración.
- Documentación del fabricante para el ST 230 que confirme el formato de comandos y cualquier diferencia específica de firmware.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST 230 usa la red de datos móviles para abrir una conexión con Plaspy y enviar reportes periódicos de posición y estado. El dispositivo se dirige al endpoint y puerto compartidos de Plaspy para que la plataforma pueda interpretar los mensajes entrantes.

- El rastreador se configura con el dominio o la IP del servidor Plaspy para enrutar los datos a la plataforma.
- Los reportes se envían a Plaspy en el puerto 8888 usando UDP o TCP según la selección en la configuración.
- Plaspy recibe los datos del dispositivo y detecta automáticamente el protocolo del rastreador para parsear los mensajes.
- Una vez recibidos los datos, el dispositivo queda visible en Plaspy para monitoreo y generación de eventos.
- Puede ajustar los intervalos de reporte en el rastreador para equilibrar la frecuencia de actualizaciones y la duración de la batería.

## Flujo típico de configuración

1. Obtenga el método de configuración oficial de Suntech o el software y lea el manual del ST 230 para notas específicas de firmware.
2. Identifique el IMEI del dispositivo y derive el ID del dispositivo (ver Comandos de ejemplo). Use ese ID en las plantillas de comandos SMS.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 en la configuración del equipo.
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y confirmando que el dispositivo sea visible en su cuenta Plaspy.

Si su instalación usa SMS para la configuración, siga el formato de comandos SMS del fabricante al pie de la letra y verifique el éxito con el comando de comprobación del dispositivo.

## Comandos de configuración de ejemplo

El ST 230 soporta configuración vía SMS. Las siguientes plantillas públicas de comandos se proporcionan en el contenido del fabricante. Reemplace DEVICEID por el ID del dispositivo de seis dígitos derivado del IMEI y complete los marcadores del APN según sea necesario.

Cómo derivar el ID del dispositivo
- El ID del dispositivo son los seis dígitos que se toman de las posiciones 9 a 14 del IMEI (es decir, los seis dígitos que comienzan en la posición 9). Por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo mostrado en el ejemplo del fabricante es 901234.

1) Establecer el APN del operador y el servidor GPRS
- Use 1 en la bandera de usuario si proporciona usuario o contraseña APN, de lo contrario use 0.
- Reemplace [apn], [apnu], [apnp] con el APN del operador, usuario APN y contraseña APN según corresponda.

```
SA200NTW;DEVICEID;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Ejemplo cuando no se requiere usuario ni contraseña APN (use 0 como bandera):

```
SA200NTW;DEVICEID;02;0;[apn];;;54.85.159.138;8888;;;;
```

2) Establecer el intervalo de actualización a 60 segundos
- Este ejemplo ajusta varios campos de intervalo a 60 segundos tal como muestra la plantilla pública.

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

3) Consultar o verificar la configuración actual
- Use este comando de verificación para solicitar la Preset A o la configuración actual al dispositivo.

```
SA200CMD;DEVICEID;02;PresetA
```

Notas sobre los marcadores
- [apn] es el nombre del punto de acceso (APN) del operador móvil para su SIM.
- [apnu] es el usuario del APN cuando se requiere.
- [apnp] es la contraseña del APN cuando se requiere.
- DEVICEID debe ser el ID de seis dígitos derivado del IMEI como se describió arriba.

## Notas de configuración

- Las variantes de firmware y regionales del ST 230 pueden cambiar el comportamiento de los comandos y las opciones disponibles; confirme siempre la sintaxis de los comandos con el manual que coincida con la versión de firmware de su dispositivo.
- La configuración por SMS se soporta según las plantillas públicas, pero algunas instalaciones pueden emplear la herramienta del fabricante o una interfaz USB en su lugar.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del operador o la documentación de Suntech.
- Use el comando de verificación del dispositivo después de aplicar los ajustes para asegurarse de que el rastreador aceptó la configuración.
- Recuerde que Plaspy usa el puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando lleguen datos a d.plaspy.com o a 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST 230 para que reporte a Plaspy ofrece una forma sencilla de integrar hardware de rastreo resistente en una plataforma de monitoreo centralizada. Con el ST 230 apuntando a Plaspy, las organizaciones obtienen visibilidad continua del movimiento y el estado de los activos, confiando en Plaspy para parsear y mostrar los mensajes entrantes del rastreador.

Para saber más sobre Plaspy y cómo la plataforma gestiona las conexiones de dispositivos visite https://www.plaspy.com. Por favor verifique los detalles más recientes específicos del dispositivo y cualquier cambio de firmware en el sitio oficial de Suntech en http://www.suntechint.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.

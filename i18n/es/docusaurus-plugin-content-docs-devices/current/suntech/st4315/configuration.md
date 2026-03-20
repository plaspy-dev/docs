---
slug: /suntech/st4315/configuration
id: st4315-configuration
sidebar_label: Configuration
title: Suntech - ST4315 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST4315 con los ajustes de servidor y comandos SMS de Plaspy
keywords:
  - Suntech ST4315 configuración
  - Suntech ST4315 instalación
  - configuración servidor Suntech ST4315
  - ST4315 configuración Plaspy
  - ST4315 rastreador GPS configuración
  - Suntech rastreador Plaspy
  - configuración rastreador vehicular
  - guía configuración rastreador GPS
  - configuración seguimiento de flotas
  - integración rastreador Plaspy
---

# Suntech - ST4315 Configuration

Esta página explica el contexto público de configuración para usar la serie Suntech ST4315 con Plaspy. Describe los ajustes prácticos del servidor y muestra ejemplos de comandos SMS tomados de la documentación pública del fabricante para que usted prepare el ST4315 para reportar al servicio de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del vendedor; esta página se centra en los ajustes públicos y en las plantillas de comandos SMS que se usan comúnmente para apuntar dispositivos ST4315 a Plaspy, preservando los marcadores de posición originales del fabricante.

## Resumen de configuración

El objetivo de la configuración es dejar el ST4315 listo para que comunique de forma fiable la ubicación y la telemetría a Plaspy y sea visible en su cuenta. Cuando esté disponible, el dispositivo puede configurarse por SMS usando los comandos que se muestran más abajo; alternativamente use la herramienta oficial de Suntech o los procedimientos del instalador proporcionados por el proveedor.

- Configure los ajustes de red del dispositivo y el APN del operador para que el rastreador pueda acceder a datos móviles y alcanzar Plaspy.
- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que las cargas de datos lleguen a la plataforma.
- Defina los intervalos de reporte y el comportamiento acorde a sus necesidades de seguimiento y al plan de datos.
- Valide la conectividad y la visibilidad del dispositivo en Plaspy después de aplicar los ajustes.
- Use el IMEI del dispositivo para derivar el ID de seis dígitos requerido por el formato de comandos Suntech al enviar mensajes SMS de configuración.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el ST4315. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo correcto del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no necesita ajustar un tipo de protocolo en el lado de la plataforma

## Requisitos habituales antes de la configuración

- Un dispositivo ST4315 con alimentación y acceso a su número IMEI (necesario para derivar el ID del dispositivo para los comandos SMS de Suntech).
- Una tarjeta SIM activa con datos y el APN correcto para su operador móvil.
- Capacidad para enviar SMS desde el teléfono del instalador si va a usar comandos de configuración por SMS.
- Acceso a las instrucciones o al software de configuración oficial de Suntech para opciones específicas de firmware.
- Un método para supervisar la actividad del dispositivo (respuestas SMS del operador, LEDs del dispositivo o estado del dispositivo en Plaspy) para confirmar la configuración exitosa.

## Cómo se conecta este rastreador a Plaspy

El ST4315 se configura para reportar posiciones GNSS y telemetría al endpoint y puerto compartidos de Plaspy. Usando el dominio o la IP del servidor y el puerto 8888, el rastreador envía actualizaciones periódicas que Plaspy ingiere y pone a disposición para seguimiento en vivo e informes históricos.

- El rastreador envía paquetes de ubicación y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el dispositivo y la red; elija el transporte compatible con su firmware y operador.
- Plaspy detecta automáticamente el protocolo del dispositivo para que los paquetes se analicen correctamente al llegar a la plataforma.
- Los registros almacenados en búfer en el rastreador se suben a Plaspy después de la reconexión, preservando la continuidad de los datos.
- Una vez que comienzan los reportes, los eventos y las actualizaciones de estado se muestran en la plataforma Plaspy para monitorización y alertas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Suntech o al software, o revise el conjunto de comandos SMS del fabricante para el ST4315.
2. Prepare el IMEI del dispositivo y derive el ID de seis dígitos requerido por el formato de comandos Suntech.
3. Ingrese el servidor de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto en 8888 en la configuración del equipo.
5. Si la interfaz del dispositivo requiere selección de transporte, elija UDP o TCP según su instalación y compatibilidad de red.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo en la plataforma y confirmando la recepción de paquetes.

## Ejemplos de comandos de configuración

Las siguientes plantillas de comandos SMS son las formas públicas proporcionadas para el ST4315. Conserve los marcadores de posición cuando los reemplace por sus valores.

Nota sobre el ID del dispositivo
- El formato de comando del ST4315 requiere un ID de dispositivo de seis dígitos derivado del IMEI. Use los dígitos 9 a 14 del IMEI (contando desde 1). Por ejemplo, si el IMEI es 123456789012345 entonces el ID de dispositivo es 901234.

1) Configurar el APN del operador y el servidor GPRS
- El cuarto campo es 1 si se proporciona nombre de usuario o contraseña de APN, de lo contrario 0. Reemplace DEVICEID con el ID de seis dígitos y mantenga los marcadores de posición de APN según corresponda.

```
SA200NTW;DEVICEID;02;[1 or 0];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Ejemplo con explicación de marcadores de posición:
- [apn] = el APN de su operador móvil
- [apnu] = nombre de usuario del APN si lo requiere el operador
- [apnp] = contraseña del APN si lo requiere el operador
- DEVICEID = ID de dispositivo de seis dígitos derivado del IMEI

2) Establecer intervalos de reporte/actualización a 60 segundos
```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

3) Comando para verificar ajustes (comprobación)
```
SA200CMD;DEVICEID;02;PresetA
```

Envíe estos SMS desde un teléfono móvil al número del rastreador. Reemplace DEVICEID y los marcadores de APN antes de enviar. Los comandos se muestran en el orden recomendado por la guía pública del fabricante, donde normalmente se aplica primero la configuración de red/APN antes de cambiar los intervalos de reporte.

## Notas sobre la configuración

- Las variantes de firmware y modelo pueden cambiar el comportamiento de los comandos o el orden de los campos; confirme siempre la sintaxis exacta con la documentación de Suntech para su variante específica del ST4315.
- La configuración por SMS es un método público habitual para la familia ST4315; las restricciones de red u operadoras pueden afectar la entrega y la latencia de los SMS.
- La elección entre UDP o TCP puede influir en la fiabilidad y el consumo de batería según las condiciones de la red; pruebe ambas opciones cuando sea pertinente y supervise el rendimiento del dispositivo en Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 y Plaspy detectará automáticamente el protocolo del rastreador, simplificando la integración en el lado de la plataforma.
- Cuando utilice los campos de nombre de usuario o contraseña del APN, asegúrese de establecer el cuarto campo en 1 para que el dispositivo incluya esas credenciales.

## Por qué usar Plaspy con esta configuración

Usar el ST4315 con Plaspy brinda a las organizaciones reportes de posición y telemetría confiables en una única plataforma para seguimiento en vivo, informes históricos y monitorización de eventos. El almacenamiento en búfer y el soporte multired del ST4315 ayudan a mantener la continuidad de los datos, de modo que Plaspy pueda mostrar rutas, eventos y análisis precisos aun después de pérdidas temporales de conectividad.

Para obtener más información sobre Plaspy y cómo su flota puede usar estos ajustes de servidor para la integración de dispositivos visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles de variantes de modelo, verifique la documentación del fabricante en http://www.suntechint.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

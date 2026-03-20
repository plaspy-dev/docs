---
slug: /bofan/pt_60/configuration
id: pt_60-configuration
sidebar_label: Configuration
title: Bofan - PT-60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Bofan PT-60 con ajustes de servidor Plaspy y pasos prácticos para integrar el dispositivo
keywords:
  - Configuración Bofan PT-60
  - Instalación Bofan PT-60
  - Configuración servidor PT-60
  - Configuración rastreador GPS Bofan
  - Integración PT-60 Plaspy
  - Configuración seguimiento PT-60
  - Guía instalación rastreador Bofan
  - Configuración rastreador GPS Plaspy
  - Seguimiento vehicular PT-60
  - Rastreador personal PT-60
---

# Bofan - Configuración del PT-60

La documentación que sigue describe el contexto público de configuración para usar el rastreador Bofan PT-60 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy que debe aplicar al dispositivo y detalla los pasos prácticos para dejar el equipo listo para reportar ubicación y eventos a la plataforma Plaspy. Cuando están disponibles, se incluyen y explican comandos SMS de ejemplo extraídos de la referencia de configuración del dispositivo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que trate los comandos y flujos aquí como orientación pública práctica. Verifique siempre los detalles finales con la documentación del dispositivo y del firmware proporcionada por el fabricante.

## Resumen de la configuración

Este proceso prepara un PT-60 para comunicarse con Plaspy configurando el endpoint del servidor, asegurando la conectividad GSM GPRS y ajustando la identificación e intervalos de reporte. El objetivo es que el rastreador sea visible y reporte de forma confiable la ubicación y los eventos en la plataforma Plaspy.

- Configure el dispositivo para que apunte al endpoint y puerto del servidor Plaspy y así pueda reportar telemetría.
- Establezca el identificador del dispositivo que utilizará Plaspy, típicamente un identificador de 14 dígitos derivado del IMEI.
- Proporcione los ajustes APN correctos para que el dispositivo use datos GPRS y alcance el servidor Plaspy.
- Ajuste el intervalo de reporte según sus necesidades de monitoreo y las restricciones de la red.
- Valide la conectividad y la aparición del dispositivo en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Use el dominio d.plaspy.com al configurar los ajustes de servidor del equipo cuando el nombre de dominio esté soportado.
- La IP del servidor Plaspy es 54.85.159.138 para dispositivos que requieren una dirección numérica.
- El puerto de servidor usado por Plaspy para todos los dispositivos soportados es 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta conexiones de los tipos de dispositivos compatibles sin configuraciones de protocolo por dispositivo adicionales.

## Requisitos típicos antes de la configuración

- Un PT-60 con batería cargada y una tarjeta SIM funcional que tenga capacidad de datos y SMS según requiera el método de configuración.
- El IMEI del dispositivo disponible para derivar identificadores o para el registro del equipo en la plataforma.
- Información APN del operador móvil, incluyendo el nombre del APN y opcionalmente usuario y contraseña.
- Acceso al método oficial de configuración del fabricante, como comandos SMS o software del proveedor.
- Capacidad básica para enviar SMS desde un teléfono móvil si se usan comandos SMS de control.
- Acceso a la cuenta Plaspy o instrucciones de incorporación para confirmar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT-60 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartido de Plaspy para que la plataforma pueda rastrear y mostrar la telemetría del dispositivo. Una vez configurado, el equipo utiliza la conexión de datos móviles para abrir una sesión TCP o UDP hacia Plaspy y reportar según el comportamiento del firmware del rastreador.

- El rastreador reporta al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Puede seleccionar transporte UDP o TCP en el equipo si el firmware permite elegir el transporte.
- Plaspy escucha en el mismo puerto 8888 para todos los dispositivos soportados y realiza detección automática del protocolo.
- Los mensajes de ubicación y eventos son procesados por Plaspy para que el dispositivo sea visible en la plataforma tras una conexión exitosa.
- El identificador configurado en el dispositivo debe coincidir con el identificador usado al registrar el equipo en Plaspy si se requiere registro manual.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el PT-60. En muchas instalaciones del PT-60 esto se hace mediante la interfaz de comandos SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos.
4. Si el dispositivo exige seleccionar el transporte, elija UDP o TCP según su preferencia o los requerimientos de red.
5. Aplique o guarde la configuración en el dispositivo y envíe los SMS necesarios si utiliza la configuración por SMS.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar los nuevos ajustes.
7. Valide en Plaspy que el dispositivo reporte correctamente y que la telemetría y la ubicación sean visibles en la plataforma.

## Comandos de configuración de ejemplo

El PT-60 soporta comandos de configuración vía SMS. La contraseña por defecto en la referencia pública es 000000. Reemplace los marcadores donde corresponda y envíe cada SMS desde un número de teléfono autorizado por el dispositivo.

1. Restablecimiento de fábrica opcional o reinicio inicial
Descripción: Use solo si necesita restaurar el dispositivo a valores de fábrica antes de aplicar nuevos ajustes.
```
000000DFT
```

2. Establecer el identificador de 14 dígitos usado con Plaspy
Descripción: Configure el identificador del dispositivo. En la mayoría de las configuraciones de Plaspy use los últimos 14 dígitos del IMEI como identificador.
```
000000GID<14-digit-identifier>
```
Nota de ejemplo: Si su IMEI es 123456789012345, los últimos 14 dígitos serían 23456789012345. Reemplace \<14-digit-identifier> con ese valor.

3. Establecer el APN para conectividad GPRS
Descripción: Reemplace los marcadores con los valores APN de su operador. Si su APN requiere usuario o contraseña incluya los marcadores [apnu] y [apnp].
```
000000APN[apn]
```
Variante opcional con usuario y contraseña del APN
```
000000APN[apn],[apnu],[apnp]
```
Explicación: [apn] es la cadena APN del operador, [apnu] es el usuario del APN si se requiere y [apnp] es la contraseña del APN si se requiere.

4. Configurar el servidor GPRS hacia Plaspy
Descripción: Configure la dirección y el puerto del servidor para que el rastreador reporte a Plaspy. Esto establece la IP numérica y el puerto publicados para Plaspy.
```
000000SVR54.85.159.138,8888
```
Alternativa si su dispositivo acepta nombre de dominio en lugar de IP
```
000000SVR d.plaspy.com,8888
```

5. Establecer el intervalo de actualización a 1 minuto
Descripción: Configure el intervalo periódico de reporte a 60 segundos como ejemplo común.
```
000000GTI60
```

Nota: Mantenga el prefijo de contraseña 000000 en cada comando a menos que haya cambiado la contraseña del dispositivo. Los comandos deben enviarse exactamente según la sintaxis SMS del rastreador.

## Notas de configuración

- El firmware y la sintaxis de comandos pueden variar entre revisiones de hardware y versiones de firmware. Si un comando falla, verifique la documentación del firmware del rastreador.
- Los comandos públicos del PT-60 arriba son para configuración por SMS; también puede existir software del fabricante o herramientas USB que se puedan usar según su instalación.
- Puede usar d.plaspy.com o 54.85.159.138 como destino del servidor; elija el dominio cuando prefiera DNS o la IP numérica cuando el firmware del dispositivo lo requiera.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y realiza detección automática de protocolo para aceptar mensajes TCP o UDP en ese puerto.
- Al elegir UDP frente a TCP considere la fiabilidad de la red y las reglas de firewall en su entorno de despliegue.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un PT-60 configurado correctamente proporciona a las organizaciones visibilidad centralizada y monitoreo operativo de activos y personas rastreadas. Con los ajustes de servidor indicados, el PT-60 puede reportar ubicación y eventos a Plaspy para que los equipos vean posiciones en tiempo real, configuren alertas y supervisen el estado del dispositivo dentro de una sola plataforma.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los últimos detalles de configuración y firmware del fabricante en https://www.bofancloud.com/ ya que los comandos específicos del dispositivo, el comportamiento del firmware y los métodos de instalación pueden cambiar con el tiempo.

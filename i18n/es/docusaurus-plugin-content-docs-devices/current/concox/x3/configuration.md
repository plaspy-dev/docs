---
slug: /concox/x3/configuration
id: x3-configuration
sidebar_label: Configuration
title: Concox - X3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Concox X3 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Concox X3
  - Instalación Concox X3
  - Concox X3 Plaspy
  - Configuración servidor X3
  - Configuración rastreador GPS X3
  - Configuración rastreador Concox
  - Configuración GPS Plaspy
  - Configuración seguimiento vehicular
  - Configuración rastreador de flotas
  - Configuración GPRS rastreador
---

# Concox - Configuración X3

Esta página documenta el contexto público de configuración para usar el rastreador Concox X3 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y ofrece comandos SMS prácticos y orientación de flujo de trabajo basados en el contenido público de configuración del X3.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos a continuación muestran cómo apuntar un X3 al endpoint de Plaspy y validar la conectividad usando los comandos SMS públicos disponibles.

## Resumen de la configuración

Este proceso prepara un Concox X3 para reportar posiciones GNSS y telemetría a Plaspy y garantiza que el rastreador sea visible y manejable dentro de la plataforma. Los pasos prácticos se centran en configurar el APN y los parámetros del servidor, habilitar GPRS y confirmar los intervalos de reporte para que el dispositivo entregue datos de ubicación y eventos de manera fiable.

- Configure el dispositivo con el APN correcto del operador móvil para que pueda establecer conexión GPRS.
- Establezca el endpoint y el puerto del servidor Plaspy para que el X3 envíe telemetría al punto de ingestión de Plaspy.
- Habilite el reporte GPRS y un intervalo de actualización adecuado según sus necesidades de monitoreo.
- Valide los ajustes y verifique que el dispositivo informe a Plaspy para que el vehículo aparezca en los paneles.
- Opcionalmente, restaure los valores de fábrica antes de una configuración nueva si está poniendo en servicio un equipo usado.

## Ajustes del servidor Plaspy

Use estos ajustes de servidor Plaspy al configurar el X3. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP (configure el que requiera el dispositivo)
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita especificar un identificador de protocolo personalizado

## Requisitos habituales antes de la configuración

- Una tarjeta SIM instalada con datos y capacidad SMS activos y crédito o un plan de datos suficiente para la telemetría.
- Acceso al método de configuración del X3 proporcionado por el fabricante, como comandos SMS o una herramienta de proveedor.
- La información de APN correcta del operador móvil para habilitar GPRS; puede usar marcadores de posición en los comandos.
- Alimentación estable para el dispositivo y accesorios necesarios para la instalación y pruebas.
- Un teléfono móvil o una pasarela SMS capaz de enviar mensajes de configuración al rastreador si utiliza configuración por SMS.
- Conocimiento de los ajustes del servidor Plaspy mostrados arriba para introducirlos durante la configuración.

## Cómo se conecta este rastreador a Plaspy

El X3 transmite posiciones GNSS y telemetría del vehículo a través de GSM GPRS al endpoint y puerto del servidor Plaspy. Una vez configurado para apuntar a Plaspy, el dispositivo envía actualizaciones periódicas de ubicación e informes de eventos que Plaspy ingiere y muestra en mapas, alertas e informes.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El rastreador envía actualizaciones de posición periódicas según el intervalo de temporizador configurado, de modo que Plaspy pueda mostrar movimiento en tiempo real.
- Señales de eventos y estado como encendido, SOS, entradas y eventos de comportamiento de conducción se reenvían a Plaspy para alertas y automatizaciones.
- Plaspy recibe la telemetría por UDP o TCP según la selección de transporte del rastreador.
- Acciones de control remoto, como comandos de inmovilizador por relé, pueden ejecutarse desde Plaspy una vez que se confirme la comunicación bidireccional.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Concox, normalmente comandos SMS o la herramienta del fabricante, para preparar el X3 para su puesta en servicio.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo indique Plaspy.
3. Configure el puerto del servidor a 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere que elija uno.
5. Configure el APN del operador y habilite GPRS para que el dispositivo pueda conectarse a la red de datos móviles.
6. Aplique o guarde los ajustes en el dispositivo y reinícielo si el fabricante lo solicita.
7. Valide que el equipo reporte a Plaspy y aparezca en la plataforma confirmando actualizaciones de posición y mensajes de eventos.

## Comandos de configuración de ejemplo

El Concox X3 soporta configuración por SMS. Los siguientes comandos públicos se muestran en el orden útil para una configuración inicial. Mantenga los marcadores de posición tal como aparecen y reemplácelos por los valores de su operador cuando sea necesario.

- Reinicio opcional a fábrica (use cuando haga una provisión inicial en un equipo que necesite ajustes limpios):
```
FACTORY#
```

- Ajustar la zona horaria a UTC 0 (ejemplo):
```
GMT,E,0#
```

- Establecer el APN del operador móvil. Reemplace {{apn}} con el APN de su operador. Si su operador requiere usuario o contraseña use {{apnu}} y {{apnp}} respectivamente:
```
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Nota: La coma y los marcadores entre corchetes indican los campos opcionales de usuario y contraseña. Use el formato exacto que requiera el firmware del dispositivo (por ejemplo APN,myoperator,username,password#).

- Establecer el servidor GPRS al dominio de Plaspy (la selección de transporte UDP o TCP se realiza en el dispositivo si es necesario):
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS a la IP de Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```
Estos dos comandos ilustran el uso del dominio o la IP directa. El último parámetro puede ser una bandera de modo según el firmware; siga la guía del fabricante.

- Establecer el intervalo de actualización/reportes cada 60 segundos (dos variantes de sintaxis comunes):
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS:
```
GPRSON,1#
```

- Comando para comprobar parámetros GPRS configurados (verificación):
```
GPRSSET#
```

Al enviar comandos SMS, asegúrese de usar el formato que espera el firmware del dispositivo e incluya los caracteres de terminación si su herramienta SMS los requiere. Reemplace los marcadores de posición por sus credenciales reales de APN.

## Notas de configuración

- Los comandos anteriores son comandos SMS públicos; la sintaxis exacta y los parámetros requeridos pueden variar según la revisión del firmware. Confirme la sintaxis con el manual del Concox X3 correspondiente a su firmware.
- El X3 admite configuración tanto por SMS como mediante la herramienta del proveedor en muchas implementaciones. Use SMS para una provisión rápida en campo o software del proveedor para configuraciones masivas o más seguras.
- Elija TCP o UDP según la guía de la instalación o del operador; Plaspy soporta ambos y detectará automáticamente el protocolo usado por el dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles. Configure el puerto 8888 en el equipo para que pueda enviar datos al endpoint de ingestión de Plaspy.
- Cuando use marcadores como {{apn}}, {{apnu}} o {{apnp}}, reemplácelos por el APN del operador, el usuario del APN y la contraseña del APN respectivamente según lo requiera su proveedor de SIM.

## Por qué usar Plaspy con esta configuración

Usar el Concox X3 con Plaspy ofrece a las organizaciones visibilidad en tiempo real del vehículo, monitoreo de eventos y una plataforma para flujos operativos como geo-cercas, alertas e inmovilización remota. Las capacidades de telemetría y E/S del X3 alimentan los paneles de Plaspy para que los gestores de flota respondan rápidamente a incidentes y revisen el comportamiento histórico para mejorar la seguridad y la eficiencia.

Para saber más sobre Plaspy y cómo gestiona las conexiones de dispositivos y los flujos de trabajo de flota, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e instrucciones detalladas de instalación, verifique la información en el sitio del fabricante https://www.iconcox.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.

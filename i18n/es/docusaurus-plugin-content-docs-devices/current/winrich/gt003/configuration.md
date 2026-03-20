---
slug: /winrich/gt003/configuration
id: gt003-configuration
sidebar_label: Configuration
title: Winrich - GT003 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador Winrich GT003 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración Winrich GT003
  - configuración GT003
  - configuración de servidor Winrich GT003
  - integración GT003 Plaspy
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS
  - configuración de rastreo vehicular
  - comandos SMS GT003
  - configuración APN GT003
  - ajustes de servidor Plaspy
---

# Winrich - Configuración GT003

Esta página describe el contexto público de configuración necesario para usar el rastreador Winrich GT003 con Plaspy. Explica los ajustes de servidor compartidos por Plaspy, los comandos frecuentes del fabricante disponibles públicamente y los pasos prácticos que instaladores e integradores emplean para preparar el GT003 y asegurar un reporte fiable hacia Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el GT003 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran a continuación son el método público disponible para configurar este modelo y deben utilizarse junto con la documentación oficial de Winrich.

## Resumen de la configuración

El proceso de configuración del GT003 prepara el dispositivo para establecer conectividad GPRS y enviar posiciones GPS y eventos a Plaspy. Para este modelo, la configuración habitual se realiza enviando comandos SMS desde un número autorizado al dispositivo. El objetivo es definir los datos de APN de red, apuntar el rastreador al endpoint del servidor Plaspy y confirmar la frecuencia de reporte y el estado.

- Configurar el APN del dispositivo para que el rastreador pueda conectarse a la red de datos móviles (GPRS)
- Indicar al rastreador el endpoint del servidor Plaspy para que los datos de ubicación y eventos lleguen a la plataforma
- Establecer el intervalo de reporte para que el dispositivo envíe actualizaciones con la frecuencia requerida
- Validar la configuración y el estado del equipo con los comandos de verificación incorporados
- Opcionalmente realizar un restablecimiento de fábrica como paso inicial al preparar una unidad nueva o redeployada

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un GT003 correctamente instalado y alimentado, conectado al sistema eléctrico del vehículo
- Una tarjeta SIM activa con plan de datos y el APN correcto para el operador móvil
- Capacidad para enviar comandos SMS al dispositivo si utiliza configuración por SMS
- Acceso a las instrucciones oficiales de configuración de Winrich o a la herramienta de soporte del fabricante como referencia
- Un número de teléfono autorizado para configurar el dispositivo, si el rastreador exige autorización de comandos

## Cómo se conecta este rastreador a Plaspy

El GT003 envía posiciones GPS y telemetría de eventos por GSM GPRS al servidor de Plaspy usando el endpoint y puerto compartidos. Una vez configurado con el APN y los ajustes del servidor correctos, el equipo establece una sesión de datos y transmite actualizaciones para mapeo en vivo, alertas e informes históricos dentro de Plaspy.

- El rastreador inicia una conexión GPRS usando el APN del operador que usted configure
- Reporta al endpoint configurado d.plaspy.com o directamente a 54.85.159.138
- Los datos se envían al puerto 8888 usando UDP o TCP según la configuración de transporte del dispositivo
- Plaspy ingiere el protocolo entrante automáticamente sin requerir cambios de puerto por dispositivo
- El equipo puede reportar actualizaciones periódicas, eventos de ignición y alertas a la plataforma para monitoreo

## Flujo de trabajo típico de configuración

1. Consulte el método de configuración oficial de Winrich para el GT003, por ejemplo los comandos SMS documentados por el fabricante
2. Verifique que la SIM y los ajustes de APN estén listos y que el dispositivo tenga alimentación
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor GPRS del dispositivo según el método de comando del equipo
4. Configure el puerto a 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Aplique o envíe los cambios de configuración y guárdelos en el rastreador
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario para aplicar los ajustes
7. Valide que el dispositivo reporte a Plaspy usando los comandos de verificación o confirmando la visibilidad del equipo en la plataforma

## Ejemplos de comandos de configuración

El GT003 soporta la configuración vía SMS usando los siguientes comandos públicos. Envíe estos mensajes SMS al rastreador en el orden mostrado al realizar una configuración inicial. Marque el comando de reseteo de fábrica como opcional y úselo solo al preparar un equipo para una nueva instalación o para resolución de problemas.

- Restablecimiento de fábrica (paso inicial opcional)
```
940#
```

- Establecer la zona horaria a UTC 0
```
801#W0#
```

- Configurar el APN del operador
Tenga en cuenta los marcadores. Reemplace {{apn}} por el APN de su operador móvil. Si su operador requiere usuario o contraseña, use {{apnu}} y {{apnp}} respectivamente.
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto que Plaspy también expone como d.plaspy.com. Esta configuración envía los reportes a Plaspy en el puerto 8888.
```
803#54.85.159.138#8888#
```

- Establecer el intervalo de actualización de posición a 60 segundos
```
730#60#
```

- Consultar la configuración actual (útil para verificar los ajustes aplicados)
```
886#
```

- Consultar el estado del dispositivo
```
902#
```

## Notas de configuración

- La configuración por SMS es el método público mostrado para el GT003; algunos instaladores prefieren usar herramientas del fabricante si están disponibles para despliegues masivos
- Diferentes versiones de firmware o revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; verifique los comandos antes de un despliegue amplio
- Elija TCP o UDP según las necesidades de su instalación; Plaspy soporta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente
- Al configurar el APN, conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos por los valores de su operador; muchos operadores solo requieren el campo APN
- Use los comandos de verificación como 886# y 902# para confirmar ajustes y estado después de aplicar la configuración

## Por qué usar Plaspy con esta configuración

Usar el Winrich GT003 con Plaspy proporciona a los gestores de flota visibilidad continua de posiciones, historial de rutas y alertas basadas en eventos desde una única plataforma. El GT003 está diseñado para enviar ubicación y telemetría en tiempo real mediante GSM GPRS, por lo que Plaspy puede ofrecer mapeo en vivo, alertas de geocercas, reporte de eventos de ignición y herramientas de informes que apoyan la supervisión operativa y la respuesta rápida.

Para obtener más información sobre Plaspy y cómo la plataforma puede integrarse con dispositivos como el GT003 visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante más recientes, confirme la documentación oficial de Winrich en http://www.winrichgroup.com/en/

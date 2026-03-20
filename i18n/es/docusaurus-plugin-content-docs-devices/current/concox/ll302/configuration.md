---
slug: /concox/ll302/configuration
id: ll302-configuration
sidebar_label: Configuration
title: Concox - LL302 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox LL302 con ajustes de servidor Plaspy y ejemplos de comandos SMS para integración
keywords:
  - Configuración Concox LL302
  - Configuración LL302
  - Integración LL302 Plaspy
  - Configuración rastreador Concox
  - Comandos SMS LL302
  - Guía configuración rastreador GPS
  - Rastreador de activos Plaspy
  - Rastreo de vehículos LL302
  - Ajustes servidor LL302
  - Guía Concox LL302
---

# Concox - Configuración del LL302

Esta página documenta el contexto público de configuración para usar el Concox LL302 con Plaspy. Consolida los ajustes del servidor Plaspy que debe aplicar al dispositivo, describe el flujo típico de configuración y los requisitos previos, e incluye los comandos SMS de fabricante disponibles públicamente para configurar el rastreador y que reporte a Plaspy. Use esta guía para preparar un LL302 e integrarlo en una implementación de monitoreo de flotas o activos con Plaspy.

Plaspy utiliza un endpoint y puerto compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que trate los comandos y ejemplos a continuación como orientación pública y verifique las diferencias específicas del dispositivo en la documentación de Concox cuando sea necesario.

## Resumen de la configuración

Configurar el LL302 para Plaspy prepara el dispositivo para enviar posiciones GNSS y telemetría de sensores a la plataforma, de modo que los activos aparezcan y reporten de forma confiable en Plaspy. El proceso se centra en ajustar el APN correcto, apuntar el rastreador al endpoint de Plaspy, confirmar el intervalo de reporte y habilitar el informe por GPRS. El LL302 soporta configuración por SMS, método comúnmente usado en campo para dispositivos remotos.

- Configure el APN del dispositivo para que pueda establecer sesión de datos móviles para reportes.
- Configure el servidor GPRS usando el dominio o IP de Plaspy y el puerto compartido que Plaspy utiliza.
- Establezca el intervalo de reporte (timer) para controlar la frecuencia de subida de posición y telemetría.
- Habilite el modo GPRS en el LL302 para permitir reportes por datos en lugar de solo SMS.
- Verifique la configuración del dispositivo y confirme que el rastreador aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS
- IP de servidor 54.85.159.138 como endpoint alternativo
- Puerto 8888 usado para conexiones de dispositivos
- Soporte de transporte: configure el dispositivo para UDP o TCP según las opciones del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un LL302 con carga y acceso a SMS o al método oficial de configuración Concox
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil
- Crédito SMS o la posibilidad de enviar comandos SMS desde el teléfono del instalador si usa configuración por SMS
- Acceso al número de serie o identificador del dispositivo para confirmar la unidad correcta en Plaspy
- Buena visibilidad del cielo para GNSS durante la primera fijación de posición y cualquier comprobación de firmware
- Conocimiento del APN del operador y de cualquier usuario o contraseña de APN requeridos por el operador

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor Plaspy, el LL302 reporta posición y telemetría al endpoint compartido de Plaspy. Plaspy ingiere los datos, aplica detección automática de protocolo y expone las actualizaciones, eventos y alertas del dispositivo en la plataforma para monitoreo y flujos operativos.

- El LL302 envía actualizaciones de ubicación periódicas a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El dispositivo usa datos móviles (GPRS/LTE) para reportes una vez que GPRS está habilitado
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar protocolo en la plataforma
- Eventos de sensores como manipulación, movimiento y datos opcionales de temperatura se transmiten a Plaspy
- La visibilidad en la plataforma permite geocercas, alertas por batería baja y por movimiento para monitoreo operativo

## Flujo común de configuración

1. Acceda al método de configuración oficial de Concox para el LL302 (comandos SMS o software del proveedor) según lo indique el fabricante.
2. Configure el APN del dispositivo con los valores del operador para disponer de datos móviles.
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.
4. Elija UDP o TCP si el rastreador requiere selección de transporte para reportes GPRS.
5. Configure el intervalo de reporte (timer) a la frecuencia deseada y habilite el reporte por datos GPRS en el dispositivo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones del instalador lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con telemetría y actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El LL302 admite configuración vía SMS. A continuación se muestran los comandos SMS públicos de ejemplo y el orden recomendado para una configuración completa. Envíe cada línea como un único mensaje SMS desde el número de teléfono registrado, tal como lo describe Concox. Los comandos marcados como opcionales se indican así.

- Reinicio de fábrica opcional (usar solo cuando sea necesario para configuración inicial o resolución de problemas)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,[apn]{{# if apnu }},[apnu]{{/if}}{{# if apnp }},[apnp]{{/if}}#
```
Explicación: reemplace [apn] con el APN de su operador móvil. Si su operador requiere usuario o contraseña de APN use [apnu] y [apnp] respectivamente. Si no se requiere usuario ni contraseña, envíe solo APN,[apn]#.

- Configurar el servidor GPRS al dominio de Plaspy (opción recomendada por DNS)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a la IP de Plaspy (alternativa)
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos
```text
TIMER,60#
```
Formato alternativo de intervalo
```text
TIMER,60,60#
```

- Habilitar reporte por datos GPRS
```text
GPRSON,1#
```

- Verificar parámetros GPRS y del servidor
```text
GPRSSET#
```

Nota: La sintaxis anterior proviene de ejemplos públicos de configuración del Concox LL302. Mantenga los marcadores de posición y reemplácelos por los valores del operador al enviar los comandos.

## Observaciones sobre la configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los comandos disponibles o la sintaxis. Confirme la disponibilidad de comandos para su variante LL302 y la versión de firmware.
- El LL302 soporta configuración por SMS como se muestra arriba; algunos instaladores prefieren el software del proveedor o una herramienta de configuración cuando está disponible.
- Puede configurar el servidor usando d.plaspy.com o la dirección IP 54.85.159.138; ambos deben usar el puerto 8888 que Plaspy utiliza para todos los dispositivos soportados.
- Elija UDP o TCP según la opción del rastreador y consideraciones de red; Plaspy detectará automáticamente el protocolo del dispositivo cuando se conecte.
- Mantenga a la mano las credenciales del APN y los datos de la cuenta SIM; ajustes incorrectos del APN son la causa más común de fallas en el reporte por datos.

## Por qué usar Plaspy con esta configuración

Usar el LL302 con Plaspy ofrece una vía sencilla para incorporar seguimiento GNSS de larga duración y telemetría de sensores en un entorno centralizado de gestión de flotas. La combinación de posicionamiento multisensor del LL302 y el endpoint compartido de Plaspy simplifica la incorporación de dispositivos, permitiendo a los equipos monitorear ubicación, eventos de manipulación y datos ambientales de activos y vehículos.

Para conocer más sobre la plataforma Plaspy y cómo ingiere la telemetría de dispositivos visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles de variantes de hardware confirme la documentación actual de Concox en https://www.iconcox.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
